import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { ServiceCard } from "./Services";
import { servicesData } from "./servicesData";
import "./Services.css";

function ServicesTeaser() {
  const highlighted = servicesData.filter((service) => service.featured);

  return (
    <section className="services-teaser" id="services">
      <div className="sv">
        <div className="sv-teaser-head">
          <div>
            <span className="sv-eyebrow">Services</span>
            <h2 className="sv-section-title">
              How I can <span className="purple">help</span>
            </h2>
          </div>
          <Link to="/services" className="sv-btn-ghost">
            All {servicesData.length} services <BsArrowRight />
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
