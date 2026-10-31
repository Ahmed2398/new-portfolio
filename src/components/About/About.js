import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import {
  FiMapPin,
  FiBriefcase,
  FiGlobe,
  FiCheckCircle,
  FiDownload,
  FiArrowRight,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiHeart,
  FiHome,
  FiShoppingBag,
  FiBookOpen,
  FiMessageCircle,
  FiGithub,
  FiCpu,
} from "react-icons/fi";
import Particle from "../Particle";
import AnimatedIllustration from "./AnimatedIllustration";
import Experience from "../Home/Experience";
import { projectsData } from "../Projects/ProjectsData";
import cv from "../../Assets/Ahmed_Ashraf_Ramadan.pdf";
import "./About.css";

const facts = [
  { icon: FiMapPin, label: "Cairo, Egypt · Remote" },
  { icon: FiBriefcase, label: "Senior Software Engineer" },
  { icon: FiGlobe, label: "Arabic & English" },
  { icon: FiCpu, label: "AI-assisted engineering" },
  { icon: FiCheckCircle, label: "Open to new opportunities", accent: true },
];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: String(projectsData.length), label: "Projects delivered" },
  { value: "5", label: "Companies" },
  { value: "4", label: "Countries" },
];

const domains = [
  {
    icon: FiTrendingUp,
    title: "FinTech & Trading",
    text: "Real-time market dashboards, stock screening, charting, alerts and trading simulators.",
  },
  {
    icon: FiShield,
    title: "RegTech & Compliance",
    text: "KYC/KYB onboarding, sanctions & PEP screening, risk scoring and audit trails (AML / CMA).",
  },
  {
    icon: FiUsers,
    title: "HR Management",
    text: "Payroll, attendance and recruitment modules with a drag-and-drop workflow builder.",
  },
  {
    icon: FiHeart,
    title: "Healthcare SaaS",
    text: "Patient management and clinical workflows, plus clinic and lab-test apps.",
  },
  {
    icon: FiHome,
    title: "Real Estate",
    text: "Investor dashboards, property management and SSR public sites.",
  },
  {
    icon: FiShoppingBag,
    title: "E-commerce & Payments",
    text: "Stores, marketplaces and donation platforms with KNET and Apple Pay payments.",
  },
];

const skills = [
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "PHP"] },
  { title: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "React Native"] },
  { title: "Backend", items: ["Node.js", "Express", "Laravel", "CakePHP", "Filament"] },
  { title: "State & Data", items: ["Redux Toolkit", "React Query", "REST APIs", "WebSockets"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "Firebase", "Supabase"] },
  { title: "DevOps", items: ["Docker", "CI/CD", "Linux", "Nginx", "AWS", "Vercel"] },
  { title: "Styling & UI", items: ["Tailwind CSS", "SASS", "Material UI", "Bootstrap"] },
  { title: "Workflow", items: ["Git", "GitHub", "GitLab", "Figma", "Agile / Scrum"] },
  { title: "AI Tools", items: ["Claude Code", "OpenAI Codex", "Cursor", "Windsurf", "Prompt engineering"] },
];

// Dark-mode palette for the contribution calendar (empty → most active)
const githubTheme = {
  level0: "#1e293b",
  level1: "#1e3a8a",
  level2: "#1d4ed8",
  level3: "#3b82f6",
  level4: "#93c5fd",
};

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container fluid className="ab">
        {/* Intro */}
        <section className="ab-hero">
          <div className="ab-hero-text">
            <span className="ab-eyebrow">About me</span>
            <h1 className="ab-title">
              Hi, I'm Ahmed — I engineer products <span className="purple">people rely on</span>
            </h1>
            <p className="ab-lead">
              I'm <strong>Ahmed Ashraf Ramadan</strong>, a Senior Software Engineer with 5+ years of experience
              designing, building and leading web platforms for FinTech, RegTech and SaaS companies.
            </p>
            <p className="ab-lead muted">
              I like the hard parts: turning messy business requirements into a clear architecture, building
              systems that other developers can reuse, and keeping interfaces fast when the data gets big. Today I
              lead a team of 6 engineers on KYC360 at EON Tech.
            </p>

            <ul className="ab-facts">
              {facts.map(({ icon: Icon, label, accent }) => (
                <li key={label} className={accent ? "accent" : ""}>
                  <Icon aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="ab-actions">
              <a href={cv} download="Ahmed_Ashraf_Ramadan_CV.pdf" className="ab-btn-primary">
                <FiDownload /> Download CV
              </a>
              <Link to="/contact" className="ab-btn-ghost">
                Get in touch <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="ab-hero-visual">
            <AnimatedIllustration />
          </div>
        </section>

        {/* Stats */}
        <section className="ab-stats" aria-label="Highlights">
          {stats.map((stat) => (
            <div key={stat.label} className="ab-stat">
              <span className="ab-stat-value">{stat.value}</span>
              <span className="ab-stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Domains */}
        <section className="ab-block" aria-labelledby="ab-domains">
          <div className="ab-block-head">
            <span className="ab-eyebrow">Experience across industries</span>
            <h2 id="ab-domains" className="ab-section-title">
              Products I've helped build
            </h2>
          </div>
          <div className="ab-domains">
            {domains.map(({ icon: Icon, title, text }) => (
              <article key={title} className="ab-domain">
                <span className="ab-icon">
                  <Icon />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>

      {/* Career timeline (full-width band) */}
      <Experience />

      <Container fluid className="ab">
        {/* Skills */}
        <section className="ab-block" aria-labelledby="ab-skills">
          <div className="ab-block-head">
            <span className="ab-eyebrow">Toolbox</span>
            <h2 id="ab-skills" className="ab-section-title">
              Skills & technologies
            </h2>
          </div>
          <div className="ab-skills">
            {skills.map((group) => (
              <div key={group.title} className="ab-skill-group">
                <h3>{group.title}</h3>
                <div className="ab-chips">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education, languages & motto */}
        <section className="ab-block ab-split">
          <div className="ab-info-col">
            <div className="ab-info-card">
              <span className="ab-icon">
                <FiBookOpen />
              </span>
              <div>
                <span className="ab-info-label">Education</span>
                <h3>Bachelor's in Management Information Systems</h3>
                <p>Modern Academy, Maadi, Cairo · 2016 – 2020</p>
              </div>
            </div>
            <div className="ab-info-card">
              <span className="ab-icon">
                <FiMessageCircle />
              </span>
              <div>
                <span className="ab-info-label">Languages</span>
                <h3>Arabic · English</h3>
                <p>Native Arabic, professional working English</p>
              </div>
            </div>
          </div>

          <figure className="motto">
            <pre className="motto-code" aria-label="while curious: learn, build, ship, repeat">
              <span className="tk-k">while</span> (<span className="tk-v">curious</span>) {"{"}
              {"\n"}
              {"  "}<span className="tk-f">learn</span>();
              {"\n"}
              {"  "}<span className="tk-f">build</span>();
              {"\n"}
              {"  "}<span className="tk-f">ship</span>();
              {"\n"}
              {"}"} <span className="tk-c">// running since 2019 — no break; in sight</span>
            </pre>
            <figcaption className="motto-text">
              Users never see the architecture — they just feel that everything is fast and makes sense.
              <span className="motto-strong"> That feeling is what I engineer.</span>
              <span className="motto-author">— Ahmed Ashraf</span>
            </figcaption>
          </figure>
        </section>

        {/* GitHub */}
        <section className="ab-block ab-github" aria-labelledby="ab-github">
          <div className="ab-block-head ab-github-head">
            <div>
              <span className="ab-eyebrow">Open source</span>
              <h2 id="ab-github" className="ab-section-title">
                GitHub activity
              </h2>
            </div>
            <a href="https://github.com/Ahmed2398" target="_blank" rel="noreferrer" className="ab-btn-ghost">
              <FiGithub /> @Ahmed2398
            </a>
          </div>
          <div className="ab-github-card">
            <GitHubCalendar
              username="Ahmed2398"
              blockSize={13}
              blockMargin={4}
              fontSize={13}
              theme={githubTheme}
            />
          </div>
          <p className="ab-github-note">Most of my work lives in private company repositories.</p>
        </section>
      </Container>
    </Container>
  );
}

export default About;
