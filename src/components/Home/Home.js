import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ProjectPreview from "./ProjectPreview";
import ContactForm from "../Contact/ContactForm";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container fluid className="home-content">
          <Row className="hero-row">
            <Col lg={6} md={12} className="hero-left">
              <div className="hero-content">
                <p className="hero-greeting">Software Engineer</p>
                <h1 className="hero-name">
                  <span className="name-text">Ahmed Ashraf</span>
                </h1>

                <div className="hero-typewriter">
                  <Type />
                </div>

                <p className="hero-description">
                  Focused on building high-performance systems across the stack — from backend architecture and APIs to scalable frontend applications.                </p>

                <div className="hero-one-liner">
                  <span className="quote-icon">"</span>
                  I care about clean architecture, efficient data flow, and delivering products that perform under real-world scale.                  <span className="quote-icon">"</span>
                </div>

                <div className="hero-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span className="highlight-text">4+ Years Experience</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span className="highlight-text">26 Projects Delivered</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span className="highlight-text">Real-time Systems</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span className="highlight-text">Performance Optimization</span>
                  </div>
                </div>

                <div className="hero-cta-section">
                  <Button variant="primary" className="hero-cta-primary" as={Link} to="/project">
                    View Projects
                    <BsArrowRight className="cta-arrow" />
                  </Button>
                  <Button
                    variant="outline"
                    className="hero-cta-secondary"
                    href={require("../../Assets/Ahmed Ashraf_fullstack.pdf")}
                    download="Ahmed Ashraf_fullstack.pdf"
                  >
                    <AiOutlineDownload className="cta-download-icon" />
                    Download CV
                  </Button>
                </div>

                <div className="hero-social-proof">
                  <a href="https://github.com/Ahmed2398" target="_blank" rel="noreferrer" className="social-link">
                    <AiFillGithub className="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/" target="_blank" rel="noreferrer" className="social-link">
                    <FaLinkedinIn className="social-icon" />
                  </a>
                  <span className="availability-badge">Available for work</span>
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
      <ContactForm />
    </section>
  );
}

export default Home;
