import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ProjectPreview from "./ProjectPreview";
import ContactForm from "../Contact/ContactForm";
import Experience from "./Experience";
import AIShowcase from "./AIShowcase";
import ServicesTeaser from "../Services/ServicesTeaser";
import { projectsData } from "../Projects/ProjectsData";
import cv from "../../Assets/Ahmed_Ashraf_Ramadan.pdf";
import { useLang } from "../../i18n/LanguageContext";
import "./Hero.css";

const heroStats = [
  { value: "5+", label: "Years", ar: "سنين خبرة" },
  { value: String(projectsData.length), label: "Projects", ar: "مشروع" },
  { value: "4", label: "Countries", ar: "دول" },
];

const companies = ["EON Tech", "Nuwas", "Key Frame", "Macber"];

function Home() {
  const { t } = useLang();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container fluid className="home-content">
          <Row className="hero-row">
            <Col lg={6} md={12} className="hero-left">
              <div className="hx">
                <span className="hx-badge">
                  <span className="hx-badge-dot" /> {t("Available for new projects & roles", "متاح لمشاريع ووظايف جديدة")}
                </span>

                <p className="hx-hello">
                  <span className="hx-wave" aria-hidden="true">👋</span> {t("Hi, I'm", "أهلاً، أنا")}{" "}
                  <strong>{t("Ahmed Ashraf", "أحمد أشرف")}</strong> — Senior Software Engineer
                </p>

                <h1 className="hx-title">
                  {t("I build web platforms that ", "ببني منصات ويب ")}
                  <span className="hx-gradient">{t("scale", "بتكبر معاك")}</span>.
                </h1>

                <div className="hx-typed">
                  <span className="hx-typed-label">{t("Specialized in", "متخصص في")}</span>
                  <Type />
                </div>

                <p className="hx-lead">
                  {t(
                    "From architecture and APIs to real-time, data-intensive interfaces — I design, build and lead products for FinTech, RegTech and SaaS teams.",
                    "من المعمارية والـ APIs لحد الواجهات اللحظية المليانة بيانات — بصمم وببني وبقود منتجات لفرق التقنية المالية والامتثال والـ SaaS."
                  )}
                </p>

                <div className="hx-actions">
                  <Link to="/project" className="hx-btn-primary">
                    {t("View my work", "شوف شغلي")} <BsArrowRight />
                  </Link>
                  <a href={cv} download="Ahmed_Ashraf_Ramadan_CV.pdf" className="hx-btn-ghost">
                    <AiOutlineDownload /> {t("Download CV", "تحميل الـ CV")}
                  </a>
                </div>

                <dl className="hx-stats">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <dt>{stat.value}</dt>
                      <dd>{t(stat.label, stat.ar)}</dd>
                    </div>
                  ))}
                </dl>

                <div className="hx-companies">
                  <span>{t("Worked with", "اشتغلت مع")}</span>
                  <ul>
                    {companies.map((company) => (
                      <li key={company}>{company}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={6} md={12} className="hero-right">
              <ProjectPreview />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <AIShowcase />
      <Experience />
      <ServicesTeaser />
      <ContactForm />
    </section>
  );
}

export default Home;
