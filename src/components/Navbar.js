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
} from "react-icons/fi";
import Logo from "./Logo";
import pdf from "../Assets/Ahmed_Ashraf_Ramadan.pdf";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", icon: FiHome, end: true },
  { to: "/about", label: "About", icon: FiUser },
  { to: "/project", label: "Projects", icon: FiFolder },
  { to: "/services", label: "Services", icon: FiLayers },
  { to: "/journey", label: "Journey", icon: FiMap },
  { to: "/resume", label: "Resume", icon: FiFileText },
  { to: "/contact", label: "Contact", icon: FiMail },
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        <Navbar.Brand as={Link} to="/" onClick={close} aria-label="Ahmed Ashraf — home">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="site-nav-menu" label={expanded ? "Close menu" : "Open menu"}>
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="site-nav-menu">
          <ul className="nav-links">
            {links.map(({ to, label, icon: Icon, end }) => (
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
                  <span className="nav-label">{label}</span>
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
              <span>Download CV</span>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
