import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiCalendar, FiX, FiClock, FiVideo, FiCheck, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BOOKING_URL, CALL_LENGTH_MIN } from "../../data/booking";
import { useLang } from "../../i18n/LanguageContext";
import "./BookCall.css";

const isSafeBookingUrl = (url) => /^https:\/\/(calendly\.com|cal\.com)\//i.test(url || "");

// Calendly / Cal.com URL with dark-theme colours so the embed matches the site
function embedUrl(url) {
  if (/calendly\.com/i.test(url)) {
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}hide_gdpr_banner=1&background_color=0f172a&text_color=e2e8f0&primary_color=3b82f6`;
  }
  return url;
}

export function BookCallModal({ show, onClose }) {
  const { t } = useLang();
  const ready = isSafeBookingUrl(BOOKING_URL);

  const perks = [
    t(`${CALL_LENGTH_MIN}-minute video call`, `مكالمة فيديو ${CALL_LENGTH_MIN} دقيقة`),
    t("Talk through your product, goals and timeline", "نتكلم عن منتجك وأهدافك والوقت المتاح"),
    t("Get honest advice on the next steps — free", "نصيحة صريحة عن الخطوات الجاية — مجاناً"),
  ];

  return (
    <Modal show={show} onHide={onClose} centered size={ready ? "lg" : undefined} className="bc-modal">
      <div className="bc-head">
        <span className="bc-icon">
          <FiCalendar />
        </span>
        <div>
          <h2>{t("Book a call", "احجز مكالمة")}</h2>
          <p>
            <FiClock /> {CALL_LENGTH_MIN} {t("min", "دقيقة")} · <FiVideo /> {t("Google Meet / Zoom", "Google Meet / Zoom")}
          </p>
        </div>
        <button type="button" className="bc-close" onClick={onClose} aria-label={t("Close", "قفل")}>
          <FiX />
        </button>
      </div>

      <Modal.Body className="bc-body">
        {ready ? (
          <iframe
            className="bc-frame"
            src={embedUrl(BOOKING_URL)}
            title={t("Book a call with Ahmed", "احجز مكالمة مع أحمد")}
            loading="lazy"
          />
        ) : (
          <div className="bc-fallback">
            <ul className="bc-perks">
              {perks.map((perk) => (
                <li key={perk}>
                  <FiCheck aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>
            <p className="bc-note">
              {t(
                "Online booking is coming soon. For now, pick a way to reach me and we'll set a time that works for you:",
                "الحجز أونلاين قريب. لحد ما يجهز، اختار طريقة تتواصل بيها معايا ونتفق على ميعاد يناسبك:"
              )}
            </p>
            <div className="bc-actions">
              <a
                href={`https://wa.me/201147266169?text=${encodeURIComponent(
                  t("Hi Ahmed, I'd like to book a call.", "أهلاً أحمد، حابب أحجز مكالمة.")
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bc-btn whatsapp"
              >
                <FaWhatsapp /> {t("Schedule on WhatsApp", "حدد ميعاد على واتساب")}
              </a>
              <Link to="/contact?service=Something%20else" className="bc-btn" onClick={onClose}>
                <FiMail /> {t("Use the contact form", "استخدم نموذج التواصل")}
              </Link>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

// Drop-in button that opens the booking modal
function BookCallButton({ className = "", children }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={`bc-trigger ${className}`} onClick={() => setOpen(true)}>
        <FiCalendar aria-hidden="true" />
        {children || t("Book a call", "احجز مكالمة")}
      </button>
      <BookCallModal show={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default BookCallButton;
