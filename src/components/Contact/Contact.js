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
import { useLang } from "../../i18n/LanguageContext";
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

const channelAr = { WhatsApp: "واتساب", LinkedIn: "لينكدإن", GitHub: "جيت هب" };

const nextSteps = [
  { title: "I reply", text: "Usually within one business day.", ar: { title: "برد عليك", text: "عادةً خلال يوم عمل." } },
  {
    title: "We talk",
    text: "A short call to understand your goals and constraints.",
    ar: { title: "نتكلم", text: "مكالمة قصيرة علشان أفهم أهدافك والقيود." },
  },
  {
    title: "You get a plan",
    text: "Scope, approach and timeline — clear and in writing.",
    ar: { title: "تستلم خطة", text: "النطاق والطريقة والجدول الزمني — واضحين ومكتوبين." },
  },
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

// Topic values stay in English (they're the email subject); labels are translated
const topicLabelsAr = {
  ...Object.fromEntries(servicesData.map((s) => [s.title, s.ar ? s.ar.title : s.title])),
  "Full-time / lead role": "وظيفة دوام كامل / قيادة",
  "Something else": "حاجة تانية",
};

function Contact() {
  const { t, pick, isAr } = useLang();
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
      setStatus({ type: "success", text: t("Message sent! I'll get back to you soon.", "الرسالة اتبعتت! هرد عليك قريب.") });
      setForm(emptyForm);
      return;
    }

    const name = clean(form.name, LIMITS.name);
    const email = clean(form.email, LIMITS.email);
    const message = clean(form.message, LIMITS.message);
    const topic = topics.includes(form.topic) ? form.topic : "Something else";

    if (!name || !EMAIL_RE.test(email)) {
      setStatus({ type: "error", text: t("Please enter your name and a valid email address.", "اكتب اسمك وإيميل صحيح من فضلك.") });
      return;
    }
    if (message.length < MIN_MESSAGE) {
      setStatus({ type: "error", text: t(
          `Please write a little more (at least ${MIN_MESSAGE} characters).`,
          `اكتب تفاصيل أكتر شوية (على الأقل ${MIN_MESSAGE} حروف).`
        ),
      });
      return;
    }
    const wait = cooldownLeft();
    if (wait > 0) {
      setStatus({
        type: "error",
        text: t(
          `You just sent a message — please wait ${Math.ceil(wait / 1000)}s before sending another.`,
          `لسه باعت رسالة — استنى ${Math.ceil(wait / 1000)} ثانية قبل ما تبعت تاني.`
        ),
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
        setStatus({ type: "success", text: t("Message sent! I'll get back to you soon.", "الرسالة اتبعتت! هرد عليك قريب.") });
        setForm(emptyForm);
      } else {
        setStatus({ type: "error", text: t(
          `Couldn't send the message. Please try again or email ${EMAIL}.`,
          `الرسالة مااتبعتتش. جرب تاني أو ابعتلي على ${EMAIL}.`
        ),
      });
      }
    } catch (error) {
      setStatus({ type: "error", text: t(
          `Couldn't send the message. Please try again or email ${EMAIL}.`,
          `الرسالة مااتبعتتش. جرب تاني أو ابعتلي على ${EMAIL}.`
        ),
      });
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
          <span className="ct-eyebrow">{t("Contact", "تواصل")}</span>
          <h1 className="ct-title">
            {t("Let's build something ", "يلا نبني حاجة ")}
            <span className="purple">{t("great together", "عظيمة مع بعض")}</span>
          </h1>
          <p className="ct-lead">
            {t(
              "Have a product idea, a project that needs a senior engineer, or a role to fill? Tell me a little about it and I'll get back to you.",
              "عندك فكرة منتج، أو مشروع محتاج مهندس سينيور، أو وظيفة عايز تملاها؟ احكيلي شوية عنها وهرد عليك."
            )}
          </p>
          <span className="ct-available">
            <span className="ct-dot" /> {t("Available for freelance projects and full-time roles", "متاح لمشاريع فريلانس ووظايف دوام كامل")}
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
                <span className="ct-label">{t("Email me directly", "ابعتلي إيميل مباشرة")}</span>
                <a href={`mailto:${EMAIL}`} className="ct-email">
                  {EMAIL}
                </a>
              </div>
              <button type="button" className="ct-copy" onClick={copyEmail} aria-label={t("Copy email address", "نسخ الإيميل")}>
                {copied ? <FiCheck /> : <FiCopy />}
                <span>{copied ? t("Copied", "اتنسخ") : t("Copy", "نسخ")}</span>
              </button>
            </div>

            <div className="ct-channels">
              {channels.map(({ icon: Icon, label, value, href, tone }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={`ct-channel ${tone}`}>
                  <span className="ct-channel-icon">
                    <Icon />
                  </span>
                  <span className="ct-channel-text">
                    <strong>{t(label, channelAr[label])}</strong>
                    <span>{value}</span>
                  </span>
                  <FiArrowUpRight className="ct-channel-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="ct-meta">
              <span>
                <FiMapPin /> {t("Cairo, Egypt · works remotely", "القاهرة، مصر · بشتغل عن بعد")}
              </span>
              <span>
                <FiClock /> {t("GMT+2 · overlaps with Gulf & Europe", "GMT+2 · مناسب لتوقيت الخليج وأوروبا")}
              </span>
            </div>

            <div className="ct-steps">
              <span className="ct-label">{t("What happens next", "إيه اللي هيحصل بعد كده")}</span>
              <ol>
                {nextSteps.map(pick).map((step, index) => (
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
            <h2 className="ct-form-title">{t("Send a message", "ابعت رسالة")}</h2>
            <p className="ct-form-sub">{t("All fields are required.", "كل الخانات مطلوبة.")}</p>

            <div className="ct-row">
              <label className="ct-field">
                <span>{t("Your name", "اسمك")}</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder={t("Jane Doe", "محمد أحمد")}
                  maxLength={LIMITS.name}
                  autoComplete="name"
                  required
                />
              </label>
              <label className="ct-field">
                <span>{t("Email", "الإيميل")}</span>
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
              <span>{t("What can I help with?", "أقدر أساعدك في إيه؟")}</span>
              <select name="topic" value={form.topic} onChange={update} required>
                <option value="" disabled>
                  {t("Choose a topic", "اختار الموضوع")}
                </option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {isAr ? topicLabelsAr[topic] || topic : topic}
                  </option>
                ))}
              </select>
            </label>

            <label className="ct-field">
              <span>{t("Message", "الرسالة")}</span>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={update}
                placeholder={t("A few lines about your product, goals and timeline…", "كام سطر عن منتجك وأهدافك والوقت المتاح…")}
                maxLength={LIMITS.message}
                minLength={MIN_MESSAGE}
                required
              />
            </label>

            {/* Hidden honeypot: real visitors never see or fill it */}
            <input type="checkbox" name="botcheck" className="ct-honeypot" tabIndex="-1" autoComplete="off" />

            <button type="submit" className="ct-submit" disabled={sending}>
              {sending ? t("Sending…", "بيتبعت…") : t("Send message", "ابعت الرسالة")}
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
