import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { servicesData } from "./Services/servicesData";
import { useLang } from "../i18n/LanguageContext";
import "./Footer.css";

const pages = [
  { to: "/", label: "Home", ar: "الرئيسية" },
  { to: "/about", label: "About", ar: "عني" },
  { to: "/project", label: "Projects", ar: "المشاريع" },
  { to: "/services", label: "Services", ar: "الخدمات" },
  { to: "/journey", label: "Journey", ar: "رحلتي" },
  { to: "/resume", label: "Resume", ar: "السيرة الذاتية" },
  { to: "/contact", label: "Contact", ar: "تواصل" },
];

const socials = [
  { href: "https://github.com/Ahmed2398", label: "GitHub", icon: FiGithub },
  { href: "https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/", label: "LinkedIn", icon: FiLinkedin },
  { href: "https://wa.me/201147266169", label: "WhatsApp", icon: FaWhatsapp },
  { href: "mailto:ahmedashraf2398@gmail.com", label: "Email", icon: FiMail },
];

function Footer() {
  const { t, pick } = useLang();
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
              {t(
                "Building fast, reliable web platforms for FinTech, RegTech and SaaS — from architecture to production.",
                "ببني منصات ويب سريعة وموثوقة للتقنية المالية والامتثال والـ SaaS — من المعمارية لحد الإنتاج."
              )}
            </p>
            <span className="ft-available">
              <span className="ft-dot" /> {t("Open to new opportunities", "متاح لفرص جديدة")}
            </span>
          </div>

          {/* Pages */}
          <nav className="ft-col" aria-label="Footer pages">
            <h3>{t("Pages", "الصفحات")}</h3>
            <ul>
              {pages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to}>{t(page.label, page.ar)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="ft-col" aria-label="Footer services">
            <h3>{t("Services", "الخدمات")}</h3>
            <ul>
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/services">{pick(service).title}</Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="ft-more">
                  {t("All services", "كل الخدمات")} <FiArrowUpRight />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="ft-col">
            <h3>{t("Get in touch", "تواصل معايا")}</h3>
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
                <span>{t("Cairo, Egypt · Remote", "القاهرة، مصر · عن بعد")}</span>
              </li>
            </ul>
            <Link to="/contact" className="ft-cta">
              {t("Start a conversation", "ابدأ محادثة")} <FiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="ft-bottom">
          <p>
            © {year} {t("Ahmed Ashraf. Designed & built by me.", "أحمد أشرف. تصميم وتطوير بنفسي.")}
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
            <button type="button" className="ft-top" onClick={scrollToTop} aria-label={t("Back to top", "لفوق")}>
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
