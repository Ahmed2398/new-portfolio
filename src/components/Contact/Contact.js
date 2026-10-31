import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiClock,
  FiCopy,
  FiCheck,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Particle from "../Particle";
import { servicesData } from "../Services/servicesData";
import "./Contact.css";

const EMAIL = "ahmedashraf2398@gmail.com";
const WEB3FORMS_KEY = "998dce56-ab55-427a-8b2e-e9e275fc92f8";

const topics = [...servicesData.map((s) => s.title), "Full-time / lead role", "Something else"];

const channels = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+20 114 726 6169",
    href: "https://wa.me/201147266169",
    tone: "green",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Ahmed Ashraf",
    href: "https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/",
    tone: "blue",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "@Ahmed2398",
    href: "https://github.com/Ahmed2398",
    tone: "slate",
  },
];

const nextSteps = [
  { title: "I reply", text: "Usually within one business day." },
  { title: "We talk", text: "A short call to understand your goals and constraints." },
  { title: "You get a plan", text: "Scope, approach and timeline — clear and in writing." },
];

const emptyForm = { name: "", email: "", topic: "", message: "" };

// Abuse protection for the form (the only part of the site that sends data out)
const LIMITS = { name: 80, email: 254, message: 3000 };
const MIN_MESSAGE = 10;
const COOLDOWN_MS = 60 * 1000;
const COOLDOWN_KEY = "contact-last-sent";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// eslint-disable-next-line no-control-regex
const UNSAFE_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u202A-\u202E\u2066-\u2069]/g;

const clean = (value, max) => String(value || "").replace(UNSAFE_CHARS, "").trim().slice(0, max);

function cooldownLeft() {
  try {
    const last = Number(localStorage.getItem(COOLDOWN_KEY)) || 0;
    return Math.max(0, COOLDOWN_MS - (Date.now() - last));
  } catch (err) {
    return 0;
  }
}

function markSent() {
  try {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
  } catch (err) {
    // storage unavailable — the in-memory "sending" lock still prevents double submits
  }
}

function Contact() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service");
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(null); // { type: "success" | "error", text }
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  // Pre-select the topic when arriving from a service card (/contact?service=...)
  useEffect(() => {
    if (requestedService) {
      setForm((prev) => ({
        ...prev,
        topic: topics.includes(requestedService) ? requestedService : "Something else",
      }));
    }
  }, [requestedService]);

  const update = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: LIMITS[name] ? value.slice(0, LIMITS[name]) : value });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    // Bots fill the hidden honeypot — pretend success and send nothing
    if (event.target.botcheck && event.target.botcheck.checked) {
      setStatus({ type: "success", text: "Message sent! I'll get back to you soon." });
      setForm(emptyForm);
      return;
    }

    const name = clean(form.name, LIMITS.name);
    const email = clean(form.email, LIMITS.email);
    const message = clean(form.message, LIMITS.message);
    const topic = topics.includes(form.topic) ? form.topic : "Something else";

    if (!name || !EMAIL_RE.test(email)) {
      setStatus({ type: "error", text: "Please enter your name and a valid email address." });
      return;
    }
    if (message.length < MIN_MESSAGE) {
      setStatus({ type: "error", text: `Please write a little more (at least ${MIN_MESSAGE} characters).` });
      return;
    }
    const wait = cooldownLeft();
    if (wait > 0) {
      setStatus({
        type: "error",
        text: `You just sent a message — please wait ${Math.ceil(wait / 1000)}s before sending another.`,
      });
      return;
    }

    setSending(true);
    setStatus(null);

    // Send only the cleaned fields — never the raw form
    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_KEY);
    payload.append("name", name);
    payload.append("email", email);
    payload.append("topic", topic);
    payload.append("message", message);
    payload.append("subject", `Portfolio inquiry — ${topic}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: payload });
      const data = await response.json();
      if (data.success) {
        markSent();
        setStatus({ type: "success", text: "Message sent! I'll get back to you soon." });
        setForm(emptyForm);
      } else {
        setStatus({ type: "error", text: `Couldn't send the message. Please try again or email ${EMAIL}.` });
      }
    } catch (error) {
      setStatus({ type: "error", text: `Couldn't send the message. Please try again or email ${EMAIL}.` });
    } finally {
      setSending(false);
    }
  };

  return (
    <Container fluid className="contact-page">
      <Particle />
      <Container fluid className="ct">
        {/* Header */}
        <header className="ct-header">
          <span className="ct-eyebrow">Contact</span>
          <h1 className="ct-title">
            Let's build something <span className="purple">great together</span>
          </h1>
          <p className="ct-lead">
            Have a product idea, a project that needs a senior engineer, or a role to fill? Tell me a little about it
            and I'll get back to you.
          </p>
          <span className="ct-available">
            <span className="ct-dot" /> Available for freelance projects and full-time roles
          </span>
        </header>

        <div className="ct-grid">
          {/* Left: ways to reach me */}
          <aside className="ct-side">
            <div className="ct-email-card">
              <span className="ct-icon">
                <FiMail />
              </span>
              <div className="ct-email-body">
                <span className="ct-label">Email me directly</span>
                <a href={`mailto:${EMAIL}`} className="ct-email">
                  {EMAIL}
                </a>
              </div>
              <button type="button" className="ct-copy" onClick={copyEmail} aria-label="Copy email address">
                {copied ? <FiCheck /> : <FiCopy />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="ct-channels">
              {channels.map(({ icon: Icon, label, value, href, tone }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={`ct-channel ${tone}`}>
                  <span className="ct-channel-icon">
                    <Icon />
                  </span>
                  <span className="ct-channel-text">
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </span>
                  <FiArrowUpRight className="ct-channel-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="ct-meta">
              <span>
                <FiMapPin /> Cairo, Egypt · works remotely
              </span>
              <span>
                <FiClock /> GMT+2 · overlaps with Gulf & Europe
              </span>
            </div>

            <div className="ct-steps">
              <span className="ct-label">What happens next</span>
              <ol>
                {nextSteps.map((step, index) => (
                  <li key={step.title}>
                    <span className="ct-step-num">{index + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          {/* Right: form */}
          <form className="ct-form" onSubmit={handleSubmit}>
            <h2 className="ct-form-title">Send a message</h2>
            <p className="ct-form-sub">All fields are required.</p>

            <div className="ct-row">
              <label className="ct-field">
                <span>Your name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Jane Doe"
                  maxLength={LIMITS.name}
                  autoComplete="name"
                  required
                />
              </label>
              <label className="ct-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="jane@company.com"
                  maxLength={LIMITS.email}
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label className="ct-field">
              <span>What can I help with?</span>
              <select name="topic" value={form.topic} onChange={update} required>
                <option value="" disabled>
                  Choose a topic
                </option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>

            <label className="ct-field">
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={update}
                placeholder="A few lines about your product, goals and timeline…"
                maxLength={LIMITS.message}
                minLength={MIN_MESSAGE}
                required
              />
            </label>

            {/* Hidden honeypot: real visitors never see or fill it */}
            <input type="checkbox" name="botcheck" className="ct-honeypot" tabIndex="-1" autoComplete="off" />

            <button type="submit" className="ct-submit" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
              {!sending && <FiSend />}
            </button>

            {status && (
              <p className={`ct-status ${status.type}`} role="status">
                {status.text}
              </p>
            )}
          </form>
        </div>
      </Container>
    </Container>
  );
}

export default Contact;
