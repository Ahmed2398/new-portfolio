import React, { useEffect, useRef, useState } from "react";
import { FiVolume2, FiSquare, FiX } from "react-icons/fi";
import { LogoMark } from "./Logo";
import { useLang } from "../i18n/LanguageContext";
import "./WelcomeAudio.css";

// Browsers block sound until the visitor interacts with the page, so the
// welcome plays from a button instead of autoplaying.
//
// WELCOME_AUDIO is an AI-generated voice (Microsoft neural TTS) served from
// public/audio. Point it at welcome-andrew.mp3, or your own recording, to
// change it. If it is null, the browser's speech voice reads WELCOME_TEXT.
// (Kept in public/ rather than imported: the dev server's in-memory file system
// crashes on Node 25 when streaming audio.)
const WELCOME_AUDIO = {
  en: `${process.env.PUBLIC_URL}/audio/welcome-guy.mp3`,
  ar: `${process.env.PUBLIC_URL}/audio/welcome-ar.mp3`, // Egyptian Arabic voice
};
const WELCOME_TEXT =
  "Hi, I'm Ahmed Ashraf, a senior software engineer. Welcome to my portfolio! " +
  "Take a look around my projects and services, and feel free to reach out — I'd love to hear about what you're building.";

const SESSION_KEY = "welcome-audio-dismissed";

function readDismissed() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch (err) {
    return false;
  }
}

function saveDismissed() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch (err) {
    // storage unavailable — the card simply shows again next visit
  }
}

function pickVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  const english = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith("en"));
  return (
    english.find((v) => /google uk english male|daniel|google us english/i.test(v.name)) ||
    english.find((v) => v.localService) ||
    english[0] ||
    null
  );
}

function WelcomeAudio({ ready }) {
  const { t, lang } = useLang();
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;
  const supported = Boolean(WELCOME_AUDIO) || canSpeak;

  // Show the card shortly after the preloader finishes
  useEffect(() => {
    if (!ready || !supported || readDismissed()) return undefined;
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, [ready, supported]);

  // Make sure nothing keeps talking if the component unmounts
  useEffect(
    () => () => {
      if (canSpeak) window.speechSynthesis.cancel();
      if (audioRef.current) audioRef.current.pause();
    },
    [canSpeak]
  );

  const finish = () => {
    setPlaying(false);
    setTimeout(() => close(), 1500);
  };

  const play = () => {
    setPlaying(true);

    if (WELCOME_AUDIO) {
      const audio = new Audio(WELCOME_AUDIO[lang] || WELCOME_AUDIO.en);
      audioRef.current = audio;
      audio.onended = finish;
      audio.onerror = () => setPlaying(false);
      audio.play().catch(() => setPlaying(false));
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(WELCOME_TEXT);
    const voice = pickVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice ? voice.lang : "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onend = finish;
    utterance.onerror = () => setPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (audioRef.current) audioRef.current.pause();
    if (canSpeak) window.speechSynthesis.cancel();
    setPlaying(false);
  };

  function close() {
    stop();
    saveDismissed();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={`welcome-card ${playing ? "is-playing" : ""}`} role="dialog" aria-label={t("Welcome message", "رسالة ترحيب")}>
      <div className="wc-avatar">
        <LogoMark size={44} />
        {playing && <span className="wc-pulse" aria-hidden="true" />}
      </div>

      <div className="wc-body">
        <p className="wc-title">
          {playing ? t("Playing welcome…", "بيشتغل الترحيب…") : <>{t("Welcome!", "أهلاً بيك!")} <span aria-hidden="true">👋</span></>}
        </p>
        {playing ? (
          <div className="wc-bars" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} style={{ animationDelay: `${(i % 7) * 0.09}s` }} />
            ))}
          </div>
        ) : (
          <p className="wc-text">
            {t("Hear a quick hello", "اسمع ترحيب سريع")} <span className="wc-tag">{t("AI voice", "صوت ذكاء اصطناعي")}</span>
          </p>
        )}
      </div>

      {playing ? (
        <button type="button" className="wc-play" onClick={stop} aria-label={t("Stop welcome message", "إيقاف الترحيب")}>
          <FiSquare />
        </button>
      ) : (
        <button type="button" className="wc-play" onClick={play} aria-label={t("Play welcome message", "تشغيل الترحيب")}>
          <FiVolume2 />
        </button>
      )}

      <button type="button" className="wc-close" onClick={close} aria-label={t("Dismiss", "إخفاء")}>
        <FiX />
      </button>
    </div>
  );
}

export default WelcomeAudio;
