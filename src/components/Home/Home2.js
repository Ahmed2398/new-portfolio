import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiLayers, FiActivity, FiSliders, FiBox, FiZap, FiUsers } from "react-icons/fi";
import ImpactStats from "./ImpactStats";
import { useLang } from "../../i18n/LanguageContext";
import "./Home2.css";

const capabilities = [
  {
    icon: FiLayers,
    title: "Architecture & Full-Stack Delivery",
    ar: { title: "المعمارية والتنفيذ الكامل", text: "بصمم وببني منصات معقدة من الأول للآخر — نموذج البيانات، الـ APIs، لوحات التحكم وواجهة مستخدم احترافية.", proof: "لوحات تحكم متعددة للأدمن والعملاء والمستثمرين" },
    text: "Design and build complex platforms end to end — data model, APIs, admin panels and a polished UI.",
    proof: "Multi-tenant admin, tenant & investor apps",
  },
  {
    icon: FiActivity,
    title: "Real-time Data",
    ar: { title: "البيانات اللحظية", text: "شاشات تداول ولوحات بيانات وتحليلات لحظية بالـ WebSockets، فضلت سريعة حتى تحت ضغط عالي.", proof: "لوحات السوق، فلاتر الأسهم والتنبيهات" },
    text: "Trading screens, live dashboards and analytics fed by WebSockets that stay smooth under heavy load.",
    proof: "Market dashboards, screeners & alerts",
  },
  {
    icon: FiSliders,
    title: "No-code Builders",
    ar: { title: "أدوات بدون كود", text: "منشئ نماذج وصفحات وسير عمل بالـ Schema، علشان فرق البيزنس تشتغل من غير ما تستنى المطورين.", proof: "16 نوع حقل · سير عمل بالسحب والإفلات" },
    text: "Schema-driven form, page and workflow builders so business teams ship without waiting on developers.",
    proof: "16 field types · drag-and-drop workflows",
  },
  {
    icon: FiBox,
    title: "Shared Design Systems",
    ar: { title: "أنظمة تصميم مشتركة", text: "مكتبات مكونات بـ APIs واضحة وإرشادات استخدام، بيستخدمها أكتر من منتج وفريق.", proof: "مستخدمة في 4 منتجات · تسليم أسرع بـ 40–50%" },
    text: "Component libraries with typed APIs and usage guidelines, reused across products and teams.",
    proof: "Adopted by 4 products · ~40–50% faster builds",
  },
  {
    icon: FiZap,
    title: "Performance",
    ar: { title: "الأداء", text: "واجهات سريعة مع بيانات ضخمة ومتغيرة باستمرار باستخدام memoization و lazy loading وإدارة حالة منظمة.", proof: "ريندر أقل، وسرعة ثابتة تحت الضغط" },
    text: "Fast interfaces with large, high-frequency data using memoization, lazy loading and structured state.",
    proof: "Fewer re-renders, smooth under load",
  },
  {
    icon: FiUsers,
    title: "Team Leadership",
    ar: { title: "قيادة الفرق", text: "بقود المهندسين، وبجمع المتطلبات مع أصحاب المصلحة، وبحوّل احتياجات البيزنس لخطة واضحة.", proof: "قدت فرق من 6 و 3 مهندسين" },
    text: "Lead engineers, gather requirements with stakeholders, and turn business needs into a clear plan.",
    proof: "Led teams of 6 and 3 engineers",
  },
];

const stack = [
  { title: "Languages", ar: "اللغات", items: ["JavaScript (ES6+)", "TypeScript", "PHP"] },
  { title: "Frontend", ar: "الواجهات", items: ["React", "Next.js", "Angular", "Vue", "React Native"] },
  { title: "Backend", ar: "الباك إند", items: ["Node.js", "Express", "Laravel", "CakePHP", "REST APIs"] },
  { title: "State & Real-time", ar: "إدارة الحالة واللحظي", items: ["Redux Toolkit", "React Query", "WebSockets"] },
  { title: "Databases & Cloud", ar: "قواعد البيانات والسحابة", items: ["MySQL", "MongoDB", "Firebase", "Supabase"] },
  { title: "DevOps", ar: "DevOps", items: ["Docker", "CI/CD", "Nginx", "AWS", "Vercel"] },
  { title: "AI Tools", ar: "أدوات الذكاء الاصطناعي", items: ["Claude Code", "OpenAI Codex", "Cursor", "Windsurf"] },
  { title: "Styling & UI", ar: "التصميم والواجهات", items: ["Tailwind CSS", "SASS", "Material UI", "Bootstrap"] },
  { title: "Architecture", ar: "المعمارية", items: ["Design Systems", "Schema-driven UIs", "SSR", "Multi-tenancy"] },
];

function Home2() {
  const { t, pick } = useLang();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container fluid>
        <Row>
          <Col md={12} className="home-about-header">
            <span className="h2-eyebrow">{t("What I bring", "اللي بقدمه")}</span>
            <h1 className="impact-heading">
              {t("Complex requirements in,", "متطلبات معقدة تدخل،")}
              <br />
              <span className="purple">{t("fast, reliable products out", "منتجات سريعة وموثوقة تطلع")}</span>
            </h1>
            <p className="impact-subtitle">
              {t(
                "For 5+ years I've built and led web platforms across FinTech, RegTech, HR and healthcare SaaS — owning the architecture, the code and the people who ship it.",
                "من أكتر من 5 سنين ببني وبقود منصات ويب في التقنية المالية والامتثال والموارد البشرية والـ SaaS الطبي — مسؤول عن المعمارية والكود والفريق اللي بيسلّم."
              )}
            </p>
          </Col>
        </Row>

        <Row className="overview-content">
          <Col lg={7} md={12} className="overview-text">
            <div className="info-block">
              <h2 className="block-title">{t("What I Do", "بعمل إيه")}</h2>
              <div className="cap-grid">
                {capabilities.map((cap) => pick(cap)).map(({ icon: Icon, title, text, proof }) => (
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
              <h2 className="block-title">{t("Core Stack", "التقنيات الأساسية")}</h2>
              <div className="stack-grid">
                {stack.map((group) => (
                  <div className="stack-category" key={group.title}>
                    <h3 className="stack-category-title">{t(group.title, group.ar)}</h3>
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
