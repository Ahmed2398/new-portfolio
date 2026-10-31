import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import Particle from "../Particle";
import { AIToolCard } from "../Home/AIShowcase";
import { aiTools, aiWorkflow, aiPrinciples } from "../../data/aiTools";
import {
  chapters,
  processSteps,
  departments,
  leadership,
  techSkills,
  softSkills,
} from "./journeyData";
import "./Journey.css";

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="jr-head">
      <span className="jr-eyebrow">{eyebrow}</span>
      <h2 className="jr-section-title">{title}</h2>
      {text && <p className="jr-section-text">{text}</p>}
    </div>
  );
}

function Journey() {
  return (
    <Container fluid className="journey-section">
      <Particle />
      <Container fluid className="jr">
        {/* Hero */}
        <header className="jr-hero">
          <span className="jr-eyebrow">My journey</span>
          <h1 className="jr-title">
            How I work — <span className="purple">the story behind every project</span>
          </h1>
          <p className="jr-lead">
            Great products aren't built by code alone. They're built by understanding people, asking the right
            questions, and leading a team that trusts each other. Here's how I do it — with real examples.
          </p>
          <nav className="jr-toc" aria-label="On this page">
            <a href="#jr-story">The story</a>
            <a href="#jr-process">My process</a>
            <a href="#jr-ai">Working with AI</a>
            <a href="#jr-teams">Working with teams</a>
            <a href="#jr-lead">Leading</a>
            <a href="#jr-skills">Skills</a>
          </nav>
        </header>

        {/* 1. Story chapters */}
        <section id="jr-story" className="jr-block">
          <SectionHead
            eyebrow="Chapter by chapter"
            title="From intern to team lead"
            text="Every step taught me something that still shapes how I work today."
          />
          <ol className="jr-chapters">
            {chapters.map((chapter, index) => (
              <li key={chapter.year} className="jr-chapter">
                <div className="jr-chapter-year">
                  <span>{chapter.year}</span>
                </div>
                <div className="jr-chapter-card">
                  <small className="jr-chapter-label">Chapter {index + 1}</small>
                  <h3>{chapter.title}</h3>
                  <span className="jr-chapter-place">{chapter.place}</span>
                  <p>{chapter.story}</p>
                  <p className="jr-lesson">
                    <FiStar aria-hidden="true" />
                    <span>{chapter.lesson}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 2. Process */}
        <section id="jr-process" className="jr-block">
          <SectionHead
            eyebrow="My process"
            title="From a first conversation to production"
            text="The same six steps I follow on every project — each one with a real example."
          />
          <ol className="jr-process">
            {processSteps.map(({ icon: Icon, title, text, example }, index) => (
              <li key={title} className="jr-step">
                <div className="jr-step-rail" aria-hidden="true">
                  <span className="jr-step-num">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="jr-step-card">
                  <div className="jr-step-head">
                    <span className="jr-icon">
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <p>{text}</p>
                  <div className="jr-example">
                    <span className="jr-example-label">Real example</span>
                    <p>{example}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* AI in the process */}
        <section id="jr-ai" className="jr-block">
          <SectionHead
            eyebrow="AI-assisted engineering"
            title="How I work with AI"
            text="AI is part of every step of my process. It makes me faster and more thorough — but the decisions, the architecture and the quality stay mine."
          />

          <div className="jr-ai-tools">
            {aiTools.map((tool) => (
              <AIToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="jr-ai-grid">
            {aiWorkflow.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="jr-ai-step">
                <span className="jr-ai-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="jr-icon">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="jr-ai-rules">
            <span className="jr-example-label">How I use it responsibly</span>
            <ul>
              {aiPrinciples.map(({ icon: Icon, text }) => (
                <li key={text}>
                  <Icon aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Departments */}
        <section id="jr-teams" className="jr-block">
          <SectionHead
            eyebrow="Collaboration"
            title="Working with every department"
            text="Products succeed when every team pulls in the same direction. These are the people I work with — and how."
          />
          <div className="jr-depts">
            {departments.map(({ icon: Icon, team, how, example }) => (
              <article key={team} className="jr-dept">
                <span className="jr-icon">
                  <Icon />
                </span>
                <h3>{team}</h3>
                <p>{how}</p>
                <span className="jr-dept-example">{example}</span>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Leadership */}
        <section id="jr-lead" className="jr-block jr-lead-block">
          <div className="jr-lead-intro">
            <SectionHead
              eyebrow="Leadership"
              title="How I lead a team"
              text="My goal is simple: make every person on the team faster, more confident and proud of what we ship."
            />
            <div className="jr-lead-stats">
              <div>
                <span className="jr-lead-label">Currently leading</span>
                <strong>KYC360 frontend team</strong>
                <span>EON Tech · RegTech platform</span>
              </div>
              <div>
                <span className="jr-lead-label">Previously led</span>
                <strong>ARAM HR team</strong>
                <span>Nuwas · HR management system</span>
              </div>
            </div>
          </div>
          <div className="jr-lead-grid">
            {leadership.map(({ icon: Icon, title, text }) => (
              <article key={title} className="jr-lead-card">
                <span className="jr-icon">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Skills */}
        <section id="jr-skills" className="jr-block">
          <SectionHead
            eyebrow="Skills"
            title="Technical skills meet soft skills"
            text="Strong code gets a product built. Strong communication gets the right product built."
          />
          <div className="jr-skills">
            <div className="jr-skills-col">
              <h3 className="jr-skills-title">Technical skills</h3>
              {techSkills.map((group) => (
                <div key={group.title} className="jr-tech-group">
                  <span>{group.title}</span>
                  <div className="jr-chips">
                    {group.items.map((item) => (
                      <em key={item}>{item}</em>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="jr-skills-col">
              <h3 className="jr-skills-title">Soft skills</h3>
              <div className="jr-soft-grid">
                {softSkills.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="jr-soft">
                    <Icon aria-hidden="true" />
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="jr-cta">
          <div>
            <h2>Want this process on your next project?</h2>
            <p>Let's talk about your product, your team and what you need to ship.</p>
          </div>
          <div className="jr-cta-actions">
            <Link to="/contact" className="jr-btn-primary">
              Let's talk <FiArrowRight />
            </Link>
            <Link to="/project" className="jr-btn-ghost">
              See the projects
            </Link>
          </div>
        </section>
      </Container>
    </Container>
  );
}

export default Journey;
