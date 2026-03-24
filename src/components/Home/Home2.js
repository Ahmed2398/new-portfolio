import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImpactStats from "./ImpactStats";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-header">
            <h1 className="impact-heading">
              Crafting Scalable Web Solutions
              <br />
              <span className="purple">That Drive Business Growth</span>
            </h1>
            <p className="impact-subtitle">
              Specialized in building enterprise-grade applications with modern technologies, delivering measurable results through clean code and optimal performance.
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
                  <span>Turn business ideas and requirements into clear, actionable product solutions — not just code</span>
                </li>
                <li className="capability-item">
                  <span className="capability-icon">🚀</span>
                  <span>Build fast, scalable web applications that improve user experience, engagement, and conversion</span>
                </li>
                <li className="capability-item">
                  <span className="capability-icon">📊</span>
                  <span>Use data and real-time systems to support product decisions and business growth</span>
                </li>
                <li className="capability-item">
                  <span className="capability-icon">🏗️</span>
                  <span>Design maintainable architectures that scale from early-stage startups to enterprise systems</span>
                </li>
                <li className="capability-item">
                  <span className="capability-icon">🤝</span>
                  <span>Collaborate across teams (product, design, backend) to deliver reliable, production-ready solutions</span>
                </li>
                <li className="capability-item">
                  <span className="capability-icon">🔧</span>
                  <span>Own the full development lifecycle — from requirement validation to deployment and optimization</span>
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
