import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
            Full-Stack Engineer with <span className="purple">4+ years of experience</span> delivering scalable SaaS, FinTech, and RegTech products, with a strong focus on translating business needs into high-impact technical solutions.
            <br />
            <br />
            Experienced in building <span className="purple">end-to-end systems</span> — from intuitive, high-performance frontend applications (React, Next.js, Vue) to robust backend services (Node.js, Laravel) — with an emphasis on real-time data, system reliability, and performance optimization.
            <br />
            <br />
            Proven ability to <span className="purple">own features across the full lifecycle</span>: validating requirements, designing architecture, implementing scalable solutions, and optimizing for user experience, performance, and business outcomes.
          </p>

          <h3 className="tech-skills-heading">Technical Skills</h3>
          <div className="skills-section">
            <h4 className="skill-category-title">Backend</h4>
            <p className="skill-items">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">CakePHP</span>
              <span className="skill-tag">Laravel</span>
              <span className="skill-tag">FilamentPHP</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Supabase</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">MongoDB</span>
            </p>
          </div>

          <div className="skills-section">
            <h4 className="skill-category-title">Frontend</h4>
            <p className="skill-items">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Vue.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
            </p>
          </div>

          <div className="skills-section">
            <h4 className="skill-category-title">State Management</h4>
            <p className="skill-items">
              <span className="skill-tag">Redux Toolkit</span>
              <span className="skill-tag">React Query</span>
              <span className="skill-tag">Zustand</span>
            </p>
          </div>

          <div className="skills-section">
            <h4 className="skill-category-title">Styling & UI</h4>
            <p className="skill-items">
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Shadcn UI</span>
              <span className="skill-tag">Material UI</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">Responsive Design</span>
            </p>
          </div>

          <div className="skills-section">
            <h4 className="skill-category-title">Performance Optimization</h4>
            <p className="skill-items">
              <span className="skill-tag">SSR</span>
              <span className="skill-tag">Code Splitting</span>
              <span className="skill-tag">Lazy Loading</span>
            </p>
          </div>

          <div className="skills-section">
            <h4 className="skill-category-title">APIs & Data Handling</h4>
            <p className="skill-items">
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">WebSockets</span>
              <span className="skill-tag">Real-time Data</span>
            </p>
          </div>

          <div className="skills-section">
            <h4 className="skill-category-title">Tools & Workflow</h4>
            <p className="skill-items">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">GitLab</span>
              <span className="skill-tag">Bitbucket</span>
              <span className="skill-tag">Agile</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Adobe XD</span>
            </p>
          </div>


          <div className="about-quote">
            <p className="quote-text">
              "Building solutions that combine beautiful design with powerful functionality."
            </p>
            <footer className="quote-author">— Ahmed Ashraf</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
