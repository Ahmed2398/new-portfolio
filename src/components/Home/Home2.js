import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiLayers, FiActivity, FiSliders, FiBox, FiZap, FiUsers } from "react-icons/fi";
import ImpactStats from "./ImpactStats";
import "./Home2.css";

const capabilities = [
  {
    icon: FiLayers,
    title: "Architecture & Full-Stack Delivery",
    text: "Design and build complex platforms end to end — data model, APIs, admin panels and a polished UI.",
    proof: "Multi-tenant admin, tenant & investor apps",
  },
  {
    icon: FiActivity,
    title: "Real-time Data",
    text: "Trading screens, live dashboards and analytics fed by WebSockets that stay smooth under heavy load.",
    proof: "Market dashboards, screeners & alerts",
  },
  {
    icon: FiSliders,
    title: "No-code Builders",
    text: "Schema-driven form, page and workflow builders so business teams ship without waiting on developers.",
    proof: "16 field types · drag-and-drop workflows",
  },
  {
    icon: FiBox,
    title: "Shared Design Systems",
    text: "Component libraries with typed APIs and usage guidelines, reused across products and teams.",
    proof: "Adopted by 4 products · ~40–50% faster builds",
  },
  {
    icon: FiZap,
    title: "Performance",
    text: "Fast interfaces with large, high-frequency data using memoization, lazy loading and structured state.",
    proof: "Fewer re-renders, smooth under load",
  },
  {
    icon: FiUsers,
    title: "Team Leadership",
    text: "Lead engineers, gather requirements with stakeholders, and turn business needs into a clear plan.",
    proof: "Led teams of 6 and 3 engineers",
  },
];

const stack = [
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "PHP"] },
  { title: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "React Native"] },
  { title: "Backend", items: ["Node.js", "Express", "Laravel", "CakePHP", "REST APIs"] },
  { title: "State & Real-time", items: ["Redux Toolkit", "React Query", "WebSockets"] },
  { title: "Databases & Cloud", items: ["MySQL", "MongoDB", "Firebase", "Supabase"] },
  { title: "DevOps", items: ["Docker", "CI/CD", "Nginx", "AWS", "Vercel"] },
  { title: "AI Tools", items: ["Claude Code", "OpenAI Codex", "Cursor", "Windsurf"] },
  { title: "Styling & UI", items: ["Tailwind CSS", "SASS", "Material UI", "Bootstrap"] },
  { title: "Architecture", items: ["Design Systems", "Schema-driven UIs", "SSR", "Multi-tenancy"] },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container fluid>
        <Row>
          <Col md={12} className="home-about-header">
            <span className="h2-eyebrow">What I bring</span>
            <h1 className="impact-heading">
              Complex requirements in,
              <br />
              <span className="purple">fast, reliable products out</span>
            </h1>
            <p className="impact-subtitle">
              For 5+ years I've built and led web platforms across FinTech, RegTech, HR and healthcare SaaS —
              owning the architecture, the code and the people who ship it.
            </p>
          </Col>
        </Row>

        <Row className="overview-content">
          <Col lg={7} md={12} className="overview-text">
            <div className="info-block">
              <h2 className="block-title">What I Do</h2>
              <div className="cap-grid">
                {capabilities.map(({ icon: Icon, title, text, proof }) => (
                  <article className="cap-card" key={title}>
                    <span className="cap-icon">
                      <Icon />
                    </span>
                    <h3 className="cap-title">{title}</h3>
                    <p className="cap-text">{text}</p>
                    <span className="cap-proof">{proof}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="info-block">
              <h2 className="block-title">Core Stack</h2>
              <div className="stack-grid">
                {stack.map((group) => (
                  <div className="stack-category" key={group.title}>
                    <h3 className="stack-category-title">{group.title}</h3>
                    <div className="stack-chips">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
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
