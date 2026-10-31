import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX, FiSend, FiArrowRight, FiExternalLink, FiDownload } from "react-icons/fi";
import { RiRobot2Fill } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi";
import { getReply, getGreeting, getDetail, suggestionChips } from "./chatKnowledge";
import {
  MAX_MESSAGE_LENGTH,
  MAX_HISTORY,
  sanitizeInput,
  sanitizeHistory,
  isSafeLink,
  createRateLimiter,
} from "./chatSecurity";
import cv from "../../Assets/Ahmed_Ashraf_Ramadan.pdf";
import { useLang } from "../../i18n/LanguageContext";
import "./Chatbot.css";

const STORAGE_KEY = "site-chat-history";

const ui = {
  en: {
    title: "Ahmed AI Assistant",
    status: "Online · replies instantly",
    placeholder: "Ask me anything about Ahmed…",
    send: "Send",
  },
  ar: { title: "مساعد أحمد الذكي", status: "متصل · بيرد فوراً", placeholder: "اسألني أي حاجة عن أحمد…", send: "إرسال" },
};

function loadHistory() {
  try {
    return sanitizeHistory(JSON.parse(sessionStorage.getItem(STORAGE_KEY)));
  } catch (err) {
    return null;
  }
}

function saveHistory(messages) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_HISTORY)));
  } catch (err) {
    // storage unavailable — history just won't survive a reload
  }
}

// Minimal **bold** support for bot messages
function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

function Chatbot() {
  const { lang: siteLang } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => loadHistory() || [{ from: "bot", ...getGreeting(siteLang) }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [notice, setNotice] = useState("");
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const limiterRef = useRef(createRateLimiter());
  const navigate = useNavigate();

  const lastLang = [...messages].reverse().find((m) => m.lang)?.lang || siteLang;

  // Follow the site language switch while the visitor hasn't started chatting
  useEffect(() => {
    setMessages((prev) =>
      prev.length === 1 && prev[0].from === "bot" && prev[0].lang !== siteLang
        ? [{ from: "bot", ...getGreeting(siteLang) }]
        : prev
    );
  }, [siteLang]);
  const strings = ui[lastLang] || ui.en;

  useEffect(() => saveHistory(messages), [messages]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const send = (raw) => {
    const text = sanitizeInput(raw);
    if (!text || typing) return;

    const limit = limiterRef.current();
    if (!limit.ok) {
      const seconds = Math.ceil(limit.wait / 1000);
      setNotice(
        lastLang === "ar"
          ? `براحة شوية 😅 استنى ${seconds} ثانية وابعت تاني.`
          : `Easy there 😅 please wait ${seconds}s before sending another message.`
      );
      return;
    }

    setNotice("");
    setMessages((prev) => [...prev, { from: "user", text, lang: /[\u0600-\u06FF]/.test(text) ? "ar" : "en" }].slice(-MAX_HISTORY));
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", ...getReply(text) }].slice(-MAX_HISTORY));
      setTyping(false);
    }, 550);
  };

  // Topic buttons answer in the chat first, then point to the page
  const showDetail = (link, lang) => {
    if (typing) return;
    const limit = limiterRef.current();
    if (!limit.ok) return;
    const reply = getDetail(link.detail, lang, link.param);
    if (!reply) {
      goTo(link.to);
      return;
    }
    const label = link.label[lang] || link.label.en;
    setMessages((prev) => [...prev, { from: "user", text: label, lang }].slice(-MAX_HISTORY));
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", ...reply }].slice(-MAX_HISTORY));
      setTyping(false);
    }, 500);
  };

  const goTo = (to) => {
    navigate(to);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderLink = (link, lang, key) => {
    if (!isSafeLink(link)) return null;
    const label = link.label[lang] || link.label.en;
    if (link.download) {
      return (
        <a key={key} href={cv} download="Ahmed_Ashraf_Ramadan_CV.pdf" className="cb-link">
          <FiDownload /> {label}
        </a>
      );
    }
    if (link.href) {
      const external = link.href.startsWith("http");
      return (
        <a key={key} href={link.href} target={external ? "_blank" : undefined} rel="noopener noreferrer" className="cb-link">
          {label} <FiExternalLink />
        </a>
      );
    }
    return (
      <button
        key={key}
        type="button"
        className={`cb-link ${link.detail ? "" : "primary"}`}
        onClick={() => (link.detail ? showDetail(link, lang) : goTo(link.to))}
      >
        {label} <FiArrowRight className="cb-arrow" />
      </button>
    );
  };

  return (
    <>
      {open && (
        <div className="cb-panel" role="dialog" aria-label="Ahmed AI Assistant">
          <header className="cb-header">
            <div className="cb-avatar">
              <span className="cb-avatar-bot">
                <RiRobot2Fill />
              </span>
              <span className="cb-online" />
            </div>
            <div className="cb-head-text">
              <strong>{strings.title}</strong>
              <span>{strings.status}</span>
            </div>
            <button type="button" className="cb-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX />
            </button>
          </header>

          <div className="cb-messages" ref={listRef} aria-live="polite">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`cb-msg ${msg.from}`}
                dir={msg.lang === "ar" ? "rtl" : "ltr"}
              >
                <div className="cb-bubble">
                  <p>
                    <RichText text={msg.text} />
                  </p>
                  {msg.list && (
                    <ul>
                      {msg.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {msg.note && <p className="cb-note">{msg.note}</p>}
                  {msg.links && msg.links.length > 0 && (
                    <div className="cb-links">{msg.links.map((link, i) => renderLink(link, msg.lang || "en", i))}</div>
                  )}
                </div>
                {msg.suggestions && index === messages.length - 1 && (
                  <div className="cb-chips">
                    {suggestionChips[msg.lang || "en"].map((chip) => (
                      <button key={chip} type="button" onClick={() => send(chip)}>
                        {chip}
                      </button>
                    ))}
                    <button
                      type="button"
                      className="cb-lang-chip"
                      onClick={() => send(msg.lang === "ar" ? "Hello" : "مرحبا")}
                    >
                      {msg.lang === "ar" ? "English" : "العربية"}
                    </button>
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="cb-msg bot">
                <div className="cb-bubble cb-typing" aria-label="Typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          {notice && (
            <p className="cb-notice" role="alert">
              {notice}
            </p>
          )}

          <form
            className="cb-input"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
              maxLength={MAX_MESSAGE_LENGTH}
              autoComplete="off"
              placeholder={strings.placeholder}
              aria-label={strings.placeholder}
              dir="auto"
            />
            <button type="submit" disabled={!input.trim() || typing} aria-label={strings.send}>
              <FiSend />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={`cb-launcher ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Chat with Ahmed AI Assistant"}
        title={open ? undefined : "Chat with Ahmed AI Assistant"}
      >
        {open ? (
          <FiX />
        ) : (
          <>
            <RiRobot2Fill className="cb-bot-icon" />
            <HiSparkles className="cb-sparkle" aria-hidden="true" />
            <span className="cb-launcher-dot" />
          </>
        )}
      </button>
    </>
  );
}

export default Chatbot;
