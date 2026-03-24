import React from "react";
import { Card } from "react-bootstrap";

function ImpactStats() {
  return (
    <div className="impact-stats-container">
      <div className="stats-grid">
        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">4+</div>
            <div className="stat-label">Years Experience</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">26</div>
            <div className="stat-label">Projects Delivered</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">23</div>
            <div className="stat-label">Production Systems</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies Mastered</div>
          </Card.Body>
        </Card>
      </div>

      <div className="tech-highlights">
        <div className="tech-badge">React</div>
        <div className="tech-badge">Next.js</div>
        <div className="tech-badge">Vue.js</div>
        <div className="tech-badge">Node.js</div>
        <div className="tech-badge">Laravel</div>
        <div className="tech-badge">TypeScript</div>
      </div>
    </div>
  );
}

export default ImpactStats;
