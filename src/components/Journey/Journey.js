import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import Particle from "../Particle";
import BookCallButton from "../BookCall/BookCall";
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
import { useLang } from "../../i18n/LanguageContext";
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
  const { t, pick } = useLang();
  return (
    <Container fluid className="journey-section">
      <Particle />
      <Container fluid className="jr">
        {/* Hero */}
        <header className="jr-hero">
          <span className="jr-eyebrow">{t("My journey", "رحلتي")}</span>
          <h1 className="jr-title">
            {t("How I work — ", "طريقة شغلي — ")}
            <span className="purple">{t("the story behind every project", "الحكاية ورا كل مشروع")}</span>
          </h1>
          <p className="jr-lead">
            {t(
              "Great products aren't built by code alone. They're built by understanding people, asking the right questions, and leading a team that trusts each other. Here's how I do it — with real examples.",
              "المنتجات العظيمة مش بتتبني بالكود بس. بتتبني بفهم الناس، والأسئلة الصح، وقيادة فريق واثق في بعضه. وده إزاي بعملها — بأمثلة حقيقية."
            )}
          </p>
          <nav className="jr-toc" aria-label={t("On this page", "في الصفحة دي")}>
            <a href="#jr-story">{t("The story", "الحكاية")}</a>
            <a href="#jr-process">{t("My process", "خطوات شغلي")}</a>
            <a href="#jr-ai">{t("Working with AI", "الشغل بالذكاء الاصطناعي")}</a>
            <a href="#jr-teams">{t("Working with teams", "الشغل مع الفرق")}</a>
            <a href="#jr-lead">{t("Leading", "القيادة")}</a>
            <a href="#jr-skills">{t("Skills", "المهارات")}</a>
          </nav>
        </header>

        {/* 1. Story chapters */}
        <section id="jr-story" className="jr-block">
          <SectionHead
            eyebrow={t("Chapter by chapter", "فصل ورا فصل")}
            title={t("From intern to team lead", "من متدرب لقائد فريق")}
            text={t(
              "Every step taught me something that still shapes how I work today.",
              "كل خطوة علمتني حاجة لسه بتشكّل طريقة شغلي لحد النهارده."
            )}
          />
          <ol className="jr-chapters">
            {chapters.map(pick).map((chapter, index) => (
              <li key={chapter.year} className="jr-chapter">
                <div className="jr-chapter-year">
                  <span>{chapter.year}</span>
                </div>
                <div className="jr-chapter-card">
                  <small className="jr-chapter-label">{t(`Chapter ${index + 1}`, `الفصل ${index + 1}`)}</small>
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
            eyebrow={t("My process", "خطوات شغلي")}
            title={t("From a first conversation to production", "من أول كلام لحد الإنتاج")}
            text={t(
              "The same six steps I follow on every project — each one with a real example.",
              "نفس الست خطوات اللي بمشي بيها في كل مشروع — وكل خطوة معاها مثال حقيقي."
            )}
          />
          <ol className="jr-process">
            {processSteps.map(pick).map(({ icon: Icon, title, text, example }, index) => (
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
                    <span className="jr-example-label">{t("Real example", "مثال حقيقي")}</span>
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
            eyebrow={t("AI-assisted engineering", "البرمجة بمساعدة الذكاء الاصطناعي")}
            title={t("How I work with AI", "إزاي بشتغل بالذكاء الاصطناعي")}
            text={t(
              "AI is part of every step of my process. It makes me faster and more thorough — but the decisions, the architecture and the quality stay mine.",
              "الذكاء الاصطناعي جزء من كل خطوة في شغلي. بيخليني أسرع وأدق — بس القرارات والمعمارية والجودة بتفضل مسؤوليتي."
            )}
          />

          <div className="jr-ai-tools">
            {aiTools.map((tool) => (
              <AIToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="jr-ai-grid">
            {aiWorkflow.map(pick).map(({ icon: Icon, title, text }, index) => (
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
            <span className="jr-example-label">{t("How I use it responsibly", "إزاي بستخدمه بمسؤولية")}</span>
            <ul>
              {aiPrinciples.map(pick).map(({ icon: Icon, text }) => (
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
            eyebrow={t("Collaboration", "التعاون")}
            title={t("Working with every department", "الشغل مع كل الأقسام")}
            text={t(
              "Products succeed when every team pulls in the same direction. These are the people I work with — and how.",
              "المنتجات بتنجح لما كل الفرق تشد في نفس الاتجاه. دول الناس اللي بشتغل معاهم — وإزاي."
            )}
          />
          <div className="jr-depts">
            {departments.map(pick).map(({ icon: Icon, team, how, example }) => (
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
              eyebrow={t("Leadership", "القيادة")}
              title={t("How I lead a team", "إزاي بقود فريق")}
              text={t(
                "My goal is simple: make every person on the team faster, more confident and proud of what we ship.",
                "هدفي بسيط: إن كل واحد في الفريق يبقى أسرع وأثق في نفسه وفخور باللي بنسلّمه."
              )}
            />
            <div className="jr-lead-stats">
              <div>
                <span className="jr-lead-label">{t("Currently leading", "بقود حالياً")}</span>
                <strong>{t("KYC360 frontend team", "فريق واجهات KYC360")}</strong>
                <span>{t("EON Tech · RegTech platform", "EON Tech · منصة امتثال")}</span>
              </div>
              <div>
                <span className="jr-lead-label">{t("Previously led", "قدت قبل كده")}</span>
                <strong>{t("ARAM HR team", "فريق ARAM HR")}</strong>
                <span>{t("Nuwas · HR management system", "Nuwas · نظام موارد بشرية")}</span>
              </div>
            </div>
          </div>
          <div className="jr-lead-grid">
            {leadership.map(pick).map(({ icon: Icon, title, text }) => (
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
            eyebrow={t("Skills", "المهارات")}
            title={t("Technical skills meet soft skills", "المهارات التقنية مع المهارات الشخصية")}
            text={t(
              "Strong code gets a product built. Strong communication gets the right product built.",
              "الكود القوي بيبني المنتج. والتواصل القوي بيبني المنتج الصح."
            )}
          />
          <div className="jr-skills">
            <div className="jr-skills-col">
              <h3 className="jr-skills-title">{t("Technical skills", "المهارات التقنية")}</h3>
              {techSkills.map(pick).map((group) => (
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
              <h3 className="jr-skills-title">{t("Soft skills", "المهارات الشخصية")}</h3>
              <div className="jr-soft-grid">
                {softSkills.map(pick).map(({ icon: Icon, title, text }) => (
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
            <h2>{t("Want this process on your next project?", "عايز الطريقة دي في مشروعك الجاي؟")}</h2>
            <p>
              {t(
                "Let's talk about your product, your team and what you need to ship.",
                "يلا نتكلم عن منتجك وفريقك واللي محتاج تسلّمه."
              )}
            </p>
          </div>
          <div className="jr-cta-actions">
            <Link to="/contact" className="jr-btn-primary">
              {t("Let's talk", "يلا نتكلم")} <FiArrowRight />
            </Link>
            <BookCallButton />
          </div>
        </section>
      </Container>
    </Container>
  );
}

export default Journey;
