import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", lineHeight: "1.8" }}>
            <strong className="purple">Who I Am</strong>
            <br />
            I'm a Full-Stack Engineer with experience building complex digital systems across fintech, e-commerce, logistics, healthcare, and RegTech industries.
            <br />
             <br />
            Over the years, I've worked on:
            <br />
            • FinTech platforms for trading, analytics, and financial data processing
            <br />
            • Enterprise ERP systems handling logistics and invoicing workflows
            <br />
            • Real-time dashboards and analytics platforms
            <br />
            • Multi-vendor e-commerce systems
            <br />
            • Healthcare and medical platforms
            <br />
            • Compliance and regulatory systems (AML / CMA / CTF)
            <br />
            <br />
            I focus on clean architecture, performance optimization, and scalable system design, ensuring every product can grow without breaking.
          </p>

          <p style={{ textAlign: "center", marginTop: "30px", marginBottom: "20px", fontSize: "1.1em", fontWeight: "600", color: "#60a5fa" }}>
            🚀 I don't build "websites" — I build systems that process data, automate operations, and scale businesses.
          </p>

          <h3 className="tech-skills-heading">Technical Skills</h3>
          
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
              <span className="skill-tag">SASS</span>
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

          <div className="skills-section">
            <h4 className="skill-category-title">Backend</h4>
            <p className="skill-items">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">Laravel</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">CakePHP</span>
              <span className="skill-tag">Filament</span>
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
