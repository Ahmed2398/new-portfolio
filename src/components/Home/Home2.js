import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImpactStats from "./ImpactStats";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container fluid>
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
                  <p className="stack-items">React.js • Next.js • Vue.js • TypeScript • JavaScript (ES6+)</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">State Management</h3>
                  <p className="stack-items">Redux Toolkit • React Query • Zustand</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">Styling & UI</h3>
                  <p className="stack-items">Tailwind CSS • SASS • Material UI • Bootstrap • Responsive Design</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">Performance Optimization</h3>
                  <p className="stack-items">SSR • Code Splitting • Lazy Loading</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">APIs & Data Handling</h3>
                  <p className="stack-items">REST APIs • WebSockets • Real-time Data</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">Tools & Workflow</h3>
                  <p className="stack-items">Git • GitHub • GitLab • Bitbucket • Agile • Figma • Adobe XD</p>
                </div>
                <div className="stack-category">
                  <h3 className="stack-category-title">Backend</h3>
                  <p className="stack-items">Node.js • Express • PHP (Laravel) • MySQL • Firebase • MongoDB</p>
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
