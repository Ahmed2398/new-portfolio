import React from "react";
import { Container } from "react-bootstrap";
import "./Experience.css";

export const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "EON Tech",
    period: "Oct 2025 – Present",
    location: "Jeddah, KSA · Remote",
    current: true,
    points: [
      "Lead a team of 6 engineers on Kyc360, a KYC/KYB & RegTech compliance platform — own the architecture and a shared design system across its admin, tenant and investor apps.",
      "Develop the investor platform for Tarh: a real-time dashboard and an SSR public site with type-safe API integration.",
      "Architect a medical SaaS platform covering patient management and clinical workflows.",
      "Create shared components and dashboard modules reused across products, with documented guidelines.",
    ],
    tags: ["React", "Next.js", "Design System", "Team Lead"],
  },
  {
    role: "Senior Software Engineer · Part-Time",
    company: "Key Frame",
    period: "Jul 2025 – Mar 2026",
    location: "Cairo, Egypt · Remote",
    points: [
      "Architected a schema-driven Form Builder and Page Builder (16 field types) so non-technical users can create pages and forms without code.",
      "Integrated a secure KNET online payment flow into the Kuwait Food Bank donation platform.",
      "Set up Google Analytics on the public website to give stakeholders visibility into traffic and engagement.",
    ],
    tags: ["Schema-driven UI", "Payments", "Analytics"],
  },
  {
    role: "Senior Software Engineer",
    company: "Nuwas",
    period: "Sep 2023 – Sep 2025",
    location: "Jeddah, KSA",
    points: [
      "Owned the architecture of Kwealth, a FinTech trading platform — real-time market dashboards, stock screening, charting, alerts and a trading simulator.",
      "Led a team of 3 on ARAM HR: 12 modular React modules (payroll, attendance, recruitment…) and a drag-and-drop workflow builder.",
      "Built a UI component library adopted across 4 products, cutting feature build time by ~40–50%.",
      "Optimized rendering for large, high-frequency datasets with memoization, lazy loading and structured state.",
    ],
    tags: ["FinTech", "WebSockets", "Component Library", "Angular"],
  },
  {
    role: "Software Engineer",
    company: "Macber",
    period: "Sep 2020 – Sep 2023",
    location: "Cairo, Egypt",
    points: [
      "Built and maintained React SPAs across 8 e-commerce and enterprise projects with reusable UI components.",
      "Worked with designers and engineers on application architecture, API integration and state management.",
      "Delivered responsive, cross-browser, accessible layouts.",
    ],
    tags: ["React", "E-commerce", "Responsive UI"],
  },
  {
    role: "Software Engineer Intern",
    company: "Altsolutions",
    period: "Jun 2019 – Sep 2019",
    location: "Cairo, Egypt",
    points: [
      "Built responsive UI components for client-facing web apps, translating UI/UX designs into reusable code.",
      "Worked in an Agile team — sprint planning, stand-ups and code reviews.",
    ],
    tags: ["Agile", "UI Components"],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <div className="experience-inner">
        <div className="experience-header">
          <h2 className="impact-heading">
            Work <span className="purple">Experience</span>
          </h2>
          <p className="impact-subtitle">
            From building reusable components to leading engineering teams and owning architecture.
          </p>
        </div>

        <ol className="timeline">
          {experienceData.map((job) => (
            <li className="timeline-item" key={`${job.company}-${job.period}`}>
              <span className={`timeline-dot ${job.current ? "current" : ""}`} aria-hidden="true" />
              <article className="timeline-card">
                <header className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">
                      {job.company}
                      <span className="timeline-location"> · {job.location}</span>
                    </p>
                  </div>
                  <span className={`timeline-period ${job.current ? "current" : ""}`}>
                    {job.period}
                  </span>
                </header>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {job.tags.map((tag) => (
                    <span className="timeline-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}

export default Experience;
