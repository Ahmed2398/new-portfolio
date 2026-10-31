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
import "./Hero.css";

const heroStats = [
  { value: "5+", label: "Years" },
  { value: String(projectsData.length), label: "Projects" },
  { value: "4", label: "Countries" },
];

const companies = ["EON Tech", "Nuwas", "Key Frame", "Macber"];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container fluid className="home-content">
          <Row className="hero-row">
            <Col lg={6} md={12} className="hero-left">
              <div className="hx">
                <span className="hx-badge">
                  <span className="hx-badge-dot" /> Available for new projects &amp; roles
                </span>

                <p className="hx-hello">
                  <span className="hx-wave" aria-hidden="true">👋</span> Hi, I'm <strong>Ahmed Ashraf</strong> —
                  Senior Software Engineer
                </p>

                <h1 className="hx-title">
                  I build web platforms that <span className="hx-gradient">scale</span>.
                </h1>

                <div className="hx-typed">
                  <span className="hx-typed-label">Specialized in</span>
                  <Type />
                </div>

                <p className="hx-lead">
                  From architecture and APIs to real-time, data-intensive interfaces — I design, build and lead
                  products for FinTech, RegTech and SaaS teams.
                </p>

                <div className="hx-actions">
                  <Link to="/project" className="hx-btn-primary">
                    View my work <BsArrowRight />
                  </Link>
                  <a href={cv} download="Ahmed_Ashraf_Ramadan_CV.pdf" className="hx-btn-ghost">
                    <AiOutlineDownload /> Download CV
                  </a>
                </div>

                <dl className="hx-stats">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <dt>{stat.value}</dt>
                      <dd>{stat.label}</dd>
                    </div>
                  ))}
                </dl>

                <div className="hx-companies">
                  <span>Worked with</span>
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
