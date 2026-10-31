import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { servicesData } from "./Services/servicesData";
import "./Footer.css";

const pages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/journey", label: "Journey" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/Ahmed2398", label: "GitHub", icon: FiGithub },
  { href: "https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/", label: "LinkedIn", icon: FiLinkedin },
  { href: "https://wa.me/201147266169", label: "WhatsApp", icon: FaWhatsapp },
  { href: "mailto:ahmedashraf2398@gmail.com", label: "Email", icon: FiMail },
];

function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="ft">
        <div className="ft-grid">
          {/* Brand */}
          <div className="ft-brand">
            <Link to="/" className="ft-logo" aria-label="Ahmed Ashraf — home">
              <Logo />
            </Link>
            <p className="ft-tagline">
              Building fast, reliable web platforms for FinTech, RegTech and SaaS — from architecture to production.
            </p>
            <span className="ft-available">
              <span className="ft-dot" /> Open to new opportunities
            </span>
          </div>

          {/* Pages */}
          <nav className="ft-col" aria-label="Footer pages">
            <h3>Pages</h3>
            <ul>
              {pages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="ft-col" aria-label="Footer services">
            <h3>Services</h3>
            <ul>
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/services">{service.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="ft-more">
                  All services <FiArrowUpRight />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="ft-col">
            <h3>Get in touch</h3>
            <ul className="ft-contact">
              <li>
                <FiMail />
                <a href="mailto:ahmedashraf2398@gmail.com">ahmedashraf2398@gmail.com</a>
              </li>
              <li>
                <FaWhatsapp />
                <a href="https://wa.me/201147266169" target="_blank" rel="noreferrer">
                  +20 114 726 6169
                </a>
              </li>
              <li>
                <FiMapPin />
                <span>Cairo, Egypt · Remote</span>
              </li>
            </ul>
            <Link to="/contact" className="ft-cta">
              Start a conversation <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="ft-bottom">
          <p>
            © {year} Ahmed Ashraf. Designed &amp; built by me.
          </p>

          <div className="ft-bottom-right">
            <div className="ft-socials">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <button type="button" className="ft-top" onClick={scrollToTop} aria-label="Back to top">
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
