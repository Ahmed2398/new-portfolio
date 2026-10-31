import React from "react";
import { Card } from "react-bootstrap";
import { projectsData } from "../Projects/ProjectsData";

function ImpactStats() {
  return (
    <div className="impact-stats-container">
      <div className="stats-grid">
        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">{projectsData.length}</div>
            <div className="stat-label">Projects Delivered</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">5</div>
            <div className="stat-label">Companies</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">4</div>
            <div className="stat-label">Countries · KSA · UAE · KW · EG</div>
          </Card.Body>
        </Card>
      </div>

      <div className="side-card now-card">
        <span className="side-label">
          <span className="now-dot" /> Currently
        </span>
        <p className="now-title">Senior Software Engineer @ EON Tech</p>
        <p className="now-text">
          Leading a team of 6 on <strong>KYC360</strong> — a KYC/KYB & RegTech compliance platform with admin,
          tenant and investor apps.
        </p>
      </div>

      <div className="side-card">
        <span className="side-label">Industries</span>
        <div className="industry-chips">
          {["FinTech", "RegTech", "HR Tech", "HealthTech", "Real Estate", "E-commerce"].map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>

      <div className="side-card">
        <span className="side-label">How I work</span>
        <ul className="principles">
          <li>Understand the business before writing code</li>
          <li>Build reusable systems, not one-off screens</li>
          <li>Ship in small steps with regular demos</li>
          <li>Measure, then optimize</li>
        </ul>
      </div>
    </div>
  );
}

export default ImpactStats;
