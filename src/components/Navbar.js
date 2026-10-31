import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiLayers,
  FiFileText,
  FiMail,
  FiDownload,
  FiChevronRight,
  FiGithub,
  FiLinkedin,
  FiMap,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import Logo from "./Logo";
import pdf from "../Assets/Ahmed_Ashraf_Ramadan.pdf";
import { useLang } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", ar: "الرئيسية", icon: FiHome, end: true },
  { to: "/about", label: "About", ar: "عني", icon: FiUser },
  { to: "/project", label: "Projects", ar: "المشاريع", icon: FiFolder },
  { to: "/services", label: "Services", ar: "الخدمات", icon: FiLayers },
  { to: "/journey", label: "Journey", ar: "رحلتي", icon: FiMap },
  { to: "/resume", label: "Resume", ar: "السيرة الذاتية", icon: FiFileText },
  { to: "/contact", label: "Contact", ar: "تواصل", icon: FiMail },
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, toggle: toggleLang, isAr } = useLang();
  const { isLight, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const close = () => setExpanded(false);

  return (
    <Navbar
      id="site-nav"
      expanded={expanded}
      onToggle={setExpanded}
      fixed="top"
      expand="xl"
      className={`navbar ${scrolled || expanded ? "is-scrolled" : ""} ${expanded ? "is-open" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" onClick={close} aria-label={t("Ahmed Ashraf — home", "أحمد أشرف — الرئيسية")}>
          <Logo />
        </Navbar.Brand>

        <div className="nav-tools">
          <button
            type="button"
            className="nav-tool nav-theme"
            onClick={toggleTheme}
            aria-label={isLight ? t("Switch to dark mode", "الوضع الداكن") : t("Switch to light mode", "الوضع الفاتح")}
            title={isLight ? t("Dark mode", "الوضع الداكن") : t("Light mode", "الوضع الفاتح")}
          >
            {isLight ? <FiMoon /> : <FiSun />}
          </button>
          <button
            type="button"
            className="nav-tool nav-lang"
            onClick={toggleLang}
            aria-label={isAr ? "Switch to English" : "التحويل للعربية"}
            title={isAr ? "English" : "العربية"}
          >
            {isAr ? "EN" : "ع"}
          </button>
        </div>

        <Navbar.Toggle aria-controls="site-nav-menu" label={expanded ? t("Close menu", "قفل القايمة") : t("Open menu", "فتح القايمة")}>
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="site-nav-menu">
          <ul className="nav-links">
            {links.map(({ to, label, ar, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={close}
                  className={({ isActive }) => `nav-pill ${isActive ? "active" : ""}`}
                >
                  <span className="nav-icon">
                    <Icon />
                  </span>
                  <span className="nav-label">{t(label, ar)}</span>
                  <FiChevronRight className="nav-chevron" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="nav-socials">
              <a href="https://github.com/Ahmed2398" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
            <a href={pdf} download="Ahmed_Ashraf_Ramadan_CV.pdf" className="nav-cv" onClick={close}>
              <FiDownload />
              <span>{t("Download CV", "تحميل الـ CV")}</span>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
