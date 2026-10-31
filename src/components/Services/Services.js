import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight, BsCheck2 } from "react-icons/bs";
import { FiPlus, FiMinus, FiX, FiUsers, FiTrendingUp, FiStar } from "react-icons/fi";
import Particle from "../Particle";
import BookCallButton from "../BookCall/BookCall";
import { servicesData, processSteps, engagementModels, faqs } from "./servicesData";
import { useLang } from "../../i18n/LanguageContext";
import "./Services.css";

// Always link with the English title — the contact form's topics are keyed by it
export const contactLinkFor = (service) => `/contact?service=${encodeURIComponent(service.title)}`;

export function ServiceCard({ service: raw, compact = false, onShowDetails }) {
  const { t, pick } = useLang();
  const service = pick(raw);
  const Icon = service.icon;
  return (
    <article className={`sv-card ${compact ? "compact" : ""}`}>
      <div className="sv-icon">
        <Icon />
      </div>
      <h3 className="sv-card-title">{service.title}</h3>
      <p className="sv-card-pitch">{service.pitch}</p>

      {!compact && (
        <ul className="sv-deliverables">
          {service.highlight && (
            <li className="sv-highlight">
              <FiStar aria-hidden="true" />
              {service.highlight}
            </li>
          )}
          {service.deliverables.map((item) => (
            <li key={item}>
              <BsCheck2 aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {!compact && service.idealFor && (
        <div className="sv-best-for">
          <span className="sv-best-for-label">
            <FiUsers aria-hidden="true" /> {t("Best for", "مناسب لـ")}
          </span>
          <p>{service.idealFor.join(" · ")}</p>
        </div>
      )}

      <div className="sv-card-footer">
        {compact ? (
          <Link to="/services" className="sv-card-link">
            {t("Learn more", "اعرف أكتر")} <BsArrowRight />
          </Link>
        ) : (
          <>
            <button type="button" className="sv-details-btn" onClick={() => onShowDetails(raw)}>
              {t("Show details", "التفاصيل")}
            </button>
            <Link to={contactLinkFor(raw)} className="sv-card-link">
              {t("Discuss this", "اطلب الخدمة")} <BsArrowRight />
            </Link>
          </>
        )}
      </div>
    </article>
  );
}

function DetailList({ title, items, icon: ItemIcon = BsCheck2 }) {
  return (
    <div className="sv-detail-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <ItemIcon aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceDetails({ service: raw, onClose }) {
  const { t, pick } = useLang();
  if (!raw) return null;
  const service = pick(raw);
  const Icon = service.icon;

  return (
    <Modal show onHide={onClose} centered size="lg" scrollable className="sv-modal">
      <div className="sv-modal-head">
        <div className="sv-icon">
          <Icon />
        </div>
        <div>
          <span className="sv-eyebrow">{t("Service", "خدمة")}</span>
          <h2 className="sv-modal-title">{service.title}</h2>
        </div>
        <button type="button" className="sv-modal-close" onClick={onClose} aria-label={t("Close", "قفل")}>
          <FiX />
        </button>
      </div>

      <Modal.Body className="sv-modal-body">
        <div className="sv-modal-overview">
          {service.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <DetailList title={t("What's included", "الخدمة بتشمل")} items={service.included} />

        <div className="sv-detail-columns">
          <DetailList title={t("Ideal for", "مناسبة لـ")} items={service.idealFor} icon={FiUsers} />
          <DetailList title={t("What you get", "هتاخد إيه")} items={service.outcomes} icon={FiTrendingUp} />
        </div>
      </Modal.Body>

      <div className="sv-modal-footer">
        <button type="button" className="sv-btn-ghost" onClick={onClose}>
          {t("Close", "قفل")}
        </button>
        <Link to={contactLinkFor(raw)} className="sv-btn-primary" onClick={onClose}>
          {t("Discuss this service", "اطلب الخدمة دي")} <BsArrowRight />
        </Link>
      </div>
    </Modal>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`sv-faq-item ${open ? "open" : ""}`}>
      <button type="button" className="sv-faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q}
        {open ? <FiMinus /> : <FiPlus />}
      </button>
      {open && <p className="sv-faq-a">{a}</p>}
    </div>
  );
}

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const { t, pick } = useLang();

  return (
    <Container fluid className="services-section">
      <Particle />
      <Container fluid className="sv">
        {/* Header */}
        <header className="sv-header">
          <span className="sv-eyebrow">{t("Services", "الخدمات")}</span>
          <h1 className="sv-title">
            {t("How I can ", "إزاي أقدر ")}
            <span className="purple">{t("help", "أساعدك")}</span>
          </h1>
          <p className="sv-subtitle">
            {t(
              "From a first architecture sketch to production deployment — I build, ship and look after web platforms, and help teams make the right technical decisions along the way. An AI-assisted workflow (Claude Code, Codex, Cursor, Windsurf) means faster delivery without cutting corners.",
              "من أول رسمة للمعمارية لحد النشر على الإنتاج — ببني وبسلّم وبتابع منصات ويب، وبساعد الفرق تاخد القرارات التقنية الصح. وطريقة شغلي بأدوات الذكاء الاصطناعي (Claude Code و Codex و Cursor و Windsurf) معناها تسليم أسرع من غير ما الجودة تقل."
            )}
          </p>
          <div className="sv-header-actions">
            <Link to="/contact" className="sv-btn-primary">
              {t("Start a project", "ابدأ مشروعك")} <BsArrowRight />
            </Link>
            <BookCallButton />
            <Link to="/project" className="sv-btn-ghost">
              {t("See my work", "شوف شغلي")}
            </Link>
          </div>
        </header>

        {/* Services grid */}
        <section aria-labelledby="sv-list-heading">
          <h2 id="sv-list-heading" className="sv-section-title">
            {t("What I offer", "الخدمات اللي بقدمها")}
          </h2>
          <div className="sv-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} onShowDetails={setSelectedService} />
            ))}
          </div>
        </section>

        <ServiceDetails service={selectedService} onClose={() => setSelectedService(null)} />

        {/* Process */}
        <section className="sv-block" aria-labelledby="sv-process-heading">
          <h2 id="sv-process-heading" className="sv-section-title">
            {t("How I work", "طريقة شغلي")}
          </h2>
          <ol className="sv-process">
            {processSteps.map(pick).map((step, index) => (
              <li key={step.title} className="sv-step">
                <span className="sv-step-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Engagement models */}
        <section className="sv-block" aria-labelledby="sv-engage-heading">
          <h2 id="sv-engage-heading" className="sv-section-title">
            {t("Ways to work together", "طرق نشتغل بيها مع بعض")}
          </h2>
          <div className="sv-engage">
            {engagementModels.map(pick).map((model) => (
              <div key={model.title} className="sv-engage-card">
                <h3>{model.title}</h3>
                <p>{model.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="sv-block sv-faq" aria-labelledby="sv-faq-heading">
          <h2 id="sv-faq-heading" className="sv-section-title">
            {t("Common questions", "أسئلة شائعة")}
          </h2>
          <div className="sv-faq-list">
            {faqs.map(pick).map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="sv-cta">
          <div>
            <h2>{t("Not sure which service you need?", "مش عارف محتاج أنهي خدمة؟")}</h2>
            <p>
              {t(
                "Tell me about your product — I'll suggest the simplest way to get it built, fixed or shipped.",
                "احكيلي عن منتجك — وأنا هقترح أبسط طريقة نبنيه أو نصلحه أو نطلقه بيها."
              )}
            </p>
          </div>
          <Link to="/contact" className="sv-btn-primary">
            {t("Let's talk", "يلا نتكلم")} <BsArrowRight />
          </Link>
        </section>
      </Container>
    </Container>
  );
}

export default Services;
