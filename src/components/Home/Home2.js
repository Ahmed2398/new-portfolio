import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import ImpactStats from "./ImpactStats";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-header">
            <h1 className="impact-heading">
              Building High-Performance Frontend Systems
              <br />
              <span className="purple">With Real Business Impact</span>
            </h1>
            <p className="impact-subtitle">
              Front-End Engineer focused on scalable architecture, performance optimization, and delivering production-grade solutions for SaaS & FinTech.
            </p>
          </Col>
        </Row>

        <Row className="overview-content">
          <Col lg={7} md={12} className="overview-text">
            <div className="info-block">
              <h2 className="block-title">What I Do</h2>
              <ul className="capabilities-list">
                <li className="capability-item">
                  <span className="capability-icon">⚡</span>
                  <span>Build real-time data-driven systems with React, Next.js & Vue</span>
                </li>
                <li className="capability-item">
                  <span className="capability-icon">🚀</span>
                  <span>Optimize performance using SSR, code splitting & lazy loading</span>
                </li>
                <li className="capability-item">
                  <span className="capability-icon">🏗️</span>
                  <span>Design scalable UI architectures with modern state management</span>
                </li>
                <li className="capability-item">
                  <span className="capability-icon">🔧</span>
                  <span>Full-stack delivery with Node.js, Laravel & REST APIs</span>
                </li>
              </ul>
            </div>

            <div className="info-block">
              <h2 className="block-title">Core Stack</h2>
              <div className="stack-grid">
                <div className="stack-category">
                  <h3 className="stack-category-title">Frontend</h3>
                  <p className="stack-items">React • Next.js • Vue.js • TypeScript</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">State & Data</h3>
                  <p className="stack-items">Redux Toolkit • React Query • Zustand</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">Styling</h3>
                  <p className="stack-items">Tailwind CSS • Material UI • SASS</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">Backend Edge</h3>
                  <p className="stack-items">Node.js • Laravel • WebSockets</p>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <Button variant="primary" className="cta-button primary-cta" href="#projects">
                View My Projects
                <BsArrowRight className="cta-icon" />
              </Button>
              <Button variant="outline" className="cta-button secondary-cta">
                <AiOutlineDownload className="cta-icon" />
                Download Resume
              </Button>
            </div>
          </Col>

          <Col lg={5} md={12} className="overview-stats">
            <ImpactStats />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
