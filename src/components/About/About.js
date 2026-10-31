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
import { useLang } from "../../i18n/LanguageContext";
import "./About.css";

const facts = [
  { icon: FiMapPin, label: "Cairo, Egypt · Remote", ar: "القاهرة، مصر · عن بعد" },
  { icon: FiBriefcase, label: "Senior Software Engineer", ar: "مهندس برمجيات سينيور" },
  { icon: FiGlobe, label: "Arabic & English", ar: "عربي وإنجليزي" },
  { icon: FiCpu, label: "AI-assisted engineering", ar: "برمجة بمساعدة الذكاء الاصطناعي" },
  { icon: FiCheckCircle, label: "Open to new opportunities", ar: "متاح لفرص جديدة", accent: true },
];

const stats = [
  { value: "5+", label: "Years experience", ar: "سنين خبرة" },
  { value: String(projectsData.length), label: "Projects delivered", ar: "مشروع اتسلّم" },
  { value: "5", label: "Companies", ar: "شركات" },
  { value: "4", label: "Countries", ar: "دول" },
];

const domains = [
  {
    icon: FiTrendingUp,
    title: "FinTech & Trading",
    ar: { title: "التقنية المالية والتداول", text: "لوحات سوق لحظية، فلترة أسهم، رسوم بيانية، تنبيهات ومحاكيات تداول." },
    text: "Real-time market dashboards, stock screening, charting, alerts and trading simulators.",
  },
  {
    icon: FiShield,
    title: "RegTech & Compliance",
    ar: { title: "الامتثال والرقابة", text: "تسجيل KYC/KYB، فحص قوائم العقوبات، تقييم المخاطر وسجل تدقيق (مكافحة غسل الأموال / هيئة السوق المالية)." },
    text: "KYC/KYB onboarding, sanctions & PEP screening, risk scoring and audit trails (AML / CMA).",
  },
  {
    icon: FiUsers,
    title: "HR Management",
    ar: { title: "إدارة الموارد البشرية", text: "وحدات الرواتب والحضور والتوظيف مع منشئ سير عمل بالسحب والإفلات." },
    text: "Payroll, attendance and recruitment modules with a drag-and-drop workflow builder.",
  },
  {
    icon: FiHeart,
    title: "Healthcare SaaS",
    ar: { title: "الـ SaaS الطبي", text: "إدارة المرضى وسير العمل الإكلينيكي، وتطبيقات للعيادات والتحاليل." },
    text: "Patient management and clinical workflows, plus clinic and lab-test apps.",
  },
  {
    icon: FiHome,
    title: "Real Estate",
    ar: { title: "العقارات", text: "لوحات بيانات للمستثمرين، إدارة العقارات ومواقع عامة بالـ SSR." },
    text: "Investor dashboards, property management and SSR public sites.",
  },
  {
    icon: FiShoppingBag,
    title: "E-commerce & Payments",
    ar: { title: "التجارة الإلكترونية والدفع", text: "متاجر وأسواق ومنصات تبرعات بدفع KNET و Apple Pay." },
    text: "Stores, marketplaces and donation platforms with KNET and Apple Pay payments.",
  },
];

const skills = [
  { title: "Languages", ar: "اللغات", items: ["JavaScript (ES6+)", "TypeScript", "PHP"] },
  { title: "Frontend", ar: "الواجهات", items: ["React", "Next.js", "Angular", "Vue", "React Native"] },
  { title: "Backend", ar: "الباك إند", items: ["Node.js", "Express", "Laravel", "CakePHP", "Filament"] },
  { title: "State & Data", ar: "إدارة الحالة والبيانات", items: ["Redux Toolkit", "React Query", "REST APIs", "WebSockets"] },
  { title: "Databases", ar: "قواعد البيانات", items: ["MySQL", "MongoDB", "Firebase", "Supabase"] },
  { title: "DevOps", ar: "DevOps", items: ["Docker", "CI/CD", "Linux", "Nginx", "AWS", "Vercel"] },
  { title: "Styling & UI", ar: "التصميم والواجهات", items: ["Tailwind CSS", "SASS", "Material UI", "Bootstrap"] },
  { title: "Workflow", ar: "أدوات العمل", items: ["Git", "GitHub", "GitLab", "Figma", "Agile / Scrum"] },
  { title: "AI Tools", ar: "أدوات الذكاء الاصطناعي", items: ["Claude Code", "OpenAI Codex", "Cursor", "Windsurf", "Prompt engineering"] },
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
  const { t, pick, isAr } = useLang();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container fluid className="ab">
        {/* Intro */}
        <section className="ab-hero">
          <div className="ab-hero-text">
            <span className="ab-eyebrow">{t("About me", "عني")}</span>
            <h1 className="ab-title">
              {t("Hi, I'm Ahmed — I engineer products ", "أهلاً، أنا أحمد — ببني منتجات ")}
              <span className="purple">{t("people rely on", "الناس بتعتمد عليها")}</span>
            </h1>
            <p className="ab-lead">
              {t("I'm ", "أنا ")}
              <strong>{t("Ahmed Ashraf Ramadan", "أحمد أشرف رمضان")}</strong>
              {t(
                ", a Senior Software Engineer with 5+ years of experience designing, building and leading web platforms for FinTech, RegTech and SaaS companies.",
                "، مهندس برمجيات سينيور عندي خبرة أكتر من 5 سنين في تصميم وبناء وقيادة منصات ويب لشركات التقنية المالية والامتثال والـ SaaS."
              )}
            </p>
            <p className="ab-lead muted">
              {t(
                "I like the hard parts: turning messy business requirements into a clear architecture, building systems that other developers can reuse, and keeping interfaces fast when the data gets big. Today I lead a team of 6 engineers on KYC360 at EON Tech.",
                "بحب الأجزاء الصعبة: إني أحوّل متطلبات بيزنس ملخبطة لمعمارية واضحة، وأبني أنظمة باقي المطورين يقدروا يعيدوا استخدامها، وأخلي الواجهات سريعة حتى لما البيانات تكبر. حالياً بقود فريق من 6 مهندسين على KYC360 في EON Tech."
              )}
            </p>

            <ul className="ab-facts">
              {facts.map(({ icon: Icon, label, ar, accent }) => (
                <li key={label} className={accent ? "accent" : ""}>
                  <Icon aria-hidden="true" />
                  {t(label, ar)}
                </li>
              ))}
            </ul>

            <div className="ab-actions">
              <a href={cv} download="Ahmed_Ashraf_Ramadan_CV.pdf" className="ab-btn-primary">
                <FiDownload /> {t("Download CV", "تحميل الـ CV")}
              </a>
              <Link to="/contact" className="ab-btn-ghost">
                {t("Get in touch", "تواصل معايا")} <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="ab-hero-visual">
            <AnimatedIllustration />
          </div>
        </section>

        {/* Stats */}
        <section className="ab-stats" aria-label={t("Highlights", "أبرز الأرقام")}>
          {stats.map((stat) => (
            <div key={stat.label} className="ab-stat">
              <span className="ab-stat-value">{stat.value}</span>
              <span className="ab-stat-label">{t(stat.label, stat.ar)}</span>
            </div>
          ))}
        </section>

        {/* Domains */}
        <section className="ab-block" aria-labelledby="ab-domains">
          <div className="ab-block-head">
            <span className="ab-eyebrow">{t("Experience across industries", "خبرة في مجالات مختلفة")}</span>
            <h2 id="ab-domains" className="ab-section-title">
              {t("Products I've helped build", "منتجات شاركت في بنائها")}
            </h2>
          </div>
          <div className="ab-domains">
            {domains.map(pick).map(({ icon: Icon, title, text }) => (
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
            <span className="ab-eyebrow">{t("Toolbox", "أدواتي")}</span>
            <h2 id="ab-skills" className="ab-section-title">
              {t("Skills & technologies", "المهارات والتقنيات")}
            </h2>
          </div>
          <div className="ab-skills">
            {skills.map((group) => (
              <div key={group.title} className="ab-skill-group">
                <h3>{t(group.title, group.ar)}</h3>
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
                <span className="ab-info-label">{t("Education", "التعليم")}</span>
                <h3>{t("Bachelor's in Management Information Systems", "بكالوريوس نظم المعلومات الإدارية")}</h3>
                <p>{t("Modern Academy, Maadi, Cairo · 2016 – 2020", "أكاديمية المعادي الحديثة، القاهرة · 2016 – 2020")}</p>
              </div>
            </div>
            <div className="ab-info-card">
              <span className="ab-icon">
                <FiMessageCircle />
              </span>
              <div>
                <span className="ab-info-label">{t("Languages", "اللغات")}</span>
                <h3>{t("Arabic · English", "العربية · الإنجليزية")}</h3>
                <p>{t("Native Arabic, professional working English", "العربية لغتي الأم، والإنجليزية بمستوى مهني")}</p>
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
              {"}"} <span className="tk-c">{"// running since 2019 — no break; in sight"}</span>
            </pre>
            <figcaption className="motto-text">
              {t(
                "Users never see the architecture — they just feel that everything is fast and makes sense.",
                "المستخدمين عمرهم ما بيشوفوا المعمارية — هم بس بيحسوا إن كل حاجة سريعة ومنطقية."
              )}
              <span className="motto-strong">
                {" "}
                {t("That feeling is what I engineer.", "والإحساس ده هو اللي أنا ببنيه.")}
              </span>
              <span className="motto-author">— {t("Ahmed Ashraf", "أحمد أشرف")}</span>
            </figcaption>
          </figure>
        </section>

        {/* GitHub */}
        <section className="ab-block ab-github" aria-labelledby="ab-github">
          <div className="ab-block-head ab-github-head">
            <div>
              <span className="ab-eyebrow">{t("Open source", "مفتوح المصدر")}</span>
              <h2 id="ab-github" className="ab-section-title">
                {t("GitHub activity", "نشاطي على GitHub")}
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
              labels={
                isAr
                  ? {
                      months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                      totalCount: "{{count}} مساهمة في آخر سنة",
                      legend: { less: "أقل", more: "أكتر" },
                    }
                  : undefined
              }
            />
          </div>
          <p className="ab-github-note">
            {t("Most of my work lives in private company repositories.", "معظم شغلي موجود في مستودعات خاصة بالشركات.")}
          </p>
        </section>
      </Container>
    </Container>
  );
}

export default About;
