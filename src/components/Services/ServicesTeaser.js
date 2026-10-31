import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { ServiceCard } from "./Services";
import { servicesData } from "./servicesData";
import { useLang } from "../../i18n/LanguageContext";
import "./Services.css";

function ServicesTeaser() {
  const { t } = useLang();
  const highlighted = servicesData.filter((service) => service.featured);

  return (
    <section className="services-teaser" id="services">
      <div className="sv">
        <div className="sv-teaser-head">
          <div>
            <span className="sv-eyebrow">{t("Services", "الخدمات")}</span>
            <h2 className="sv-section-title">
              {t("How I can ", "إزاي أقدر ")}
              <span className="purple">{t("help", "أساعدك")}</span>
            </h2>
          </div>
          <Link to="/services" className="sv-btn-ghost">
            {t(`All ${servicesData.length} services`, `كل الخدمات (${servicesData.length})`)} <BsArrowRight />
          </Link>
        </div>
        <div className="sv-grid">
          {highlighted.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesTeaser;
