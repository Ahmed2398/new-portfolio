import React from "react";
import { Container } from "react-bootstrap";
import { useLang } from "../../i18n/LanguageContext";
import "./Experience.css";

export const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "EON Tech",
    ar: {
      period: "أكتوبر 2025 – حتى الآن",
      location: "جدة، السعودية · عن بعد",
      points: [
        "بقود فريق من 6 مهندسين على KYC360، منصة للتحقق من الهوية والامتثال (KYC/KYB) — مسؤول عن المعمارية ونظام تصميم مشترك بين تطبيقات الأدمن والعملاء والمستثمرين.",
        "بطوّر منصة المستثمرين لـ Tarh: لوحة بيانات لحظية وموقع عام بالـ SSR مع ربط APIs آمن.",
        "بصمم معمارية منصة SaaS طبية لإدارة المرضى وسير العمل الإكلينيكي.",
        "ببني مكونات مشتركة ووحدات لوحات تحكم بتتستخدم في أكتر من منتج، مع إرشادات موثّقة.",
      ],
    },
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
    ar: {
      role: "Senior Software Engineer · دوام جزئي",
      period: "يوليو 2025 – مارس 2026",
      location: "القاهرة، مصر · عن بعد",
      points: [
        "صممت منشئ نماذج وصفحات بالـ Schema (16 نوع حقل) علشان المستخدمين غير التقنيين يعملوا صفحات ونماذج من غير كود.",
        "ربطت بوابة دفع KNET آمنة في منصة التبرعات الخاصة ببنك الطعام الكويتي.",
        "فعّلت Google Analytics على الموقع العام علشان الإدارة تتابع الزيارات والتفاعل.",
      ],
    },
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
    ar: {
      period: "سبتمبر 2023 – سبتمبر 2025",
      location: "جدة، السعودية",
      points: [
        "كنت مسؤول عن معمارية Kwealth، منصة تداول مالية — لوحات سوق لحظية، فلترة أسهم، رسوم بيانية، تنبيهات ومحاكي تداول.",
        "قدت فريق من 3 على ARAM HR: 12 وحدة React (الرواتب، الحضور، التوظيف…) ومنشئ سير عمل بالسحب والإفلات.",
        "بنيت مكتبة مكونات اتستخدمت في 4 منتجات، وقللت وقت تطوير الخصائص بحوالي 40–50%.",
        "حسّنت أداء عرض البيانات الضخمة والمتغيرة باستمرار بالـ memoization والـ lazy loading وإدارة حالة منظمة.",
      ],
    },
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
    ar: {
      period: "سبتمبر 2020 – سبتمبر 2023",
      location: "القاهرة، مصر",
      points: [
        "بنيت وطوّرت تطبيقات React في 8 مشاريع تجارة إلكترونية ومؤسسات بمكونات قابلة لإعادة الاستخدام.",
        "اشتغلت مع المصممين والمهندسين على معمارية التطبيقات وربط الـ APIs وإدارة الحالة.",
        "سلّمت واجهات متجاوبة شغالة على كل المتصفحات وسهلة الاستخدام.",
      ],
    },
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
    ar: {
      period: "يونيو 2019 – سبتمبر 2019",
      location: "القاهرة، مصر",
      points: [
        "بنيت مكونات واجهات متجاوبة لتطبيقات العملاء، وحوّلت تصميمات UI/UX لكود قابل لإعادة الاستخدام.",
        "اشتغلت في فريق Agile — تخطيط السبرنت، الاجتماعات اليومية ومراجعة الكود.",
      ],
    },
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
  const { t, pick } = useLang();
  return (
    <Container fluid className="experience-section" id="experience">
      <div className="experience-inner">
        <div className="experience-header">
          <h2 className="impact-heading">
            {t("Work ", "الخبرة ")}
            <span className="purple">{t("Experience", "العملية")}</span>
          </h2>
          <p className="impact-subtitle">
            {t(
              "From building reusable components to leading engineering teams and owning architecture.",
              "من بناء مكونات قابلة لإعادة الاستخدام لحد قيادة فرق هندسية والمسؤولية عن المعمارية."
            )}
          </p>
        </div>

        <ol className="timeline">
          {experienceData.map(pick).map((job) => (
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
