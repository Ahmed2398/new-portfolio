import {
  FiMessageSquare,
  FiMap,
  FiPenTool,
  FiCode,
  FiLink,
  FiTrendingUp,
  FiBriefcase,
  FiServer,
  FiCheckSquare,
  FiCreditCard,
  FiShield,
  FiUsers,
  FiTarget,
  FiBookOpen,
  FiGitPullRequest,
  FiLifeBuoy,
  FiCompass,
  FiClock,
  FiRefreshCw,
  FiZap,
} from "react-icons/fi";
import {
  chaptersAr,
  processStepsAr,
  departmentsAr,
  leadershipAr,
  techSkillsAr,
  softSkillsAr,
} from "./journeyData.ar";

// Story chapters — career milestones told as "what changed for me"
export const chapters = [
  {
    year: "2019",
    title: "Learning the craft",
    place: "Altsolutions · Intern",
    story:
      "My first real team. I turned UI/UX designs into reusable components and learned how an Agile team actually works — sprint planning, stand-ups and code reviews.",
    lesson: "Good code is code your teammates can read and reuse.",
  },
  {
    year: "2020",
    title: "Shipping for real clients",
    place: "Macber · Developer",
    story:
      "Many e-commerce and enterprise projects. Every client was different, so I learned to listen first, ask the right questions, and work closely with designers and backend engineers.",
    lesson: "Understanding the business is half of the engineering.",
  },
  {
    year: "2023",
    title: "Owning the architecture",
    place: "Nuwas · Senior Engineer",
    story:
      "I owned the architecture of a FinTech trading platform and led the team behind an HR system. I built a component library shared across products that made feature delivery much faster.",
    lesson: "Systems scale teams — not just more people.",
  },
  {
    year: "2025",
    title: "Leading teams & products",
    place: "EON Tech & Key Frame · Senior / Lead",
    story:
      "Today I lead the engineering team on KYC360, gather requirements directly with business stakeholders, and own a shared design system across three apps — while building no-code builders and payment integrations on the side.",
    lesson: "My job is to make the whole team faster.",
  },
];

// The process — each step backed by a real example
export const processSteps = [
  {
    icon: FiMessageSquare,
    title: "Collect requirements",
    text: "I start with people, not code. I sit with stakeholders and users, ask “why” until the real problem is clear, and write it down so everyone agrees on the same thing.",
    example:
      "On KYC360 I gathered requirements from business and compliance stakeholders and mapped the full KYC/KYB journey — from creating a verification request to the final, documented decision.",
  },
  {
    icon: FiMap,
    title: "Plan & architect",
    text: "I turn requirements into user flows, a scope, and an architecture that can grow. Big goals are broken into small, deliverable milestones.",
    example:
      "For Key Frame I designed a schema-driven Form & Page Builder, so new forms are configuration — not new code.",
  },
  {
    icon: FiPenTool,
    title: "Design with the team",
    text: "I work with designers early, turn designs into a shared component system, and document how to use it — so every screen stays consistent.",
    example:
      "I own one shared design system across KYC360's admin, tenant and investor platforms, with documented guidelines for the team.",
  },
  {
    icon: FiCode,
    title: "Build & review",
    text: "Work is split into clear tasks with owners. Every change goes through code review, and I keep the codebase modular so features don't step on each other.",
    example:
      "Leading the ARAM HR team, we delivered modular payroll, attendance and recruitment modules plus a drag-and-drop workflow builder.",
  },
  {
    icon: FiLink,
    title: "Integrate across teams",
    text: "I agree on API contracts with backend engineers and coordinate with external providers, so integrations are predictable and type-safe.",
    example:
      "For the Kuwait Food Bank I worked directly with the payment provider to gather requirements, then integrated a secure KNET donation flow.",
  },
  {
    icon: FiTrendingUp,
    title: "Ship, measure & improve",
    text: "After launch I measure real usage and performance, then improve what matters most to users and the business.",
    example:
      "On Kwealth I optimized rendering for high-frequency market data with memoization, lazy loading and structured state — keeping the UI smooth under load.",
  },
];

// Departments I work with every day
export const departments = [
  {
    icon: FiBriefcase,
    team: "Business & stakeholders",
    how: "Gather requirements, align on priorities and explain technical trade-offs in plain language.",
    example: "Requirement sessions for KYC360 with business stakeholders.",
  },
  {
    icon: FiUsers,
    team: "Product & end users",
    how: "Turn real needs into features — especially tools that non-technical people can use alone.",
    example: "Form, page and workflow builders for non-technical teams.",
  },
  {
    icon: FiPenTool,
    team: "Design",
    how: "Review designs early, give feasibility feedback and turn them into a reusable design system.",
    example: "Shared design system across three KYC360 apps.",
  },
  {
    icon: FiServer,
    team: "Backend engineering",
    how: "Agree on API contracts, data models and real-time flows before building.",
    example: "Type-safe API integration for Tarh's investor dashboard.",
  },
  {
    icon: FiCheckSquare,
    team: "QA & testing",
    how: "Share acceptance criteria early, fix issues fast and keep releases stable.",
    example: "Code reviews and sprint rituals on every team since 2019.",
  },
  {
    icon: FiCreditCard,
    team: "External providers",
    how: "Coordinate with third parties to collect technical requirements and integrate safely.",
    example: "KNET payment integration with the gateway provider.",
  },
  {
    icon: FiShield,
    team: "Compliance",
    how: "Translate regulations into clear, auditable user flows and approval steps.",
    example: "CMA and AML workflows: screening, risk scoring and audit trails.",
  },
];

// How I lead a team
export const leadership = [
  {
    icon: FiTarget,
    title: "Clear goals & ownership",
    text: "Everyone knows what we're building, why, and which part they own.",
  },
  {
    icon: FiGitPullRequest,
    title: "Code reviews that teach",
    text: "Reviews are for sharing knowledge and raising the bar — not just catching bugs.",
  },
  {
    icon: FiBookOpen,
    title: "Documented standards",
    text: "Shared components and written guidelines so the team moves fast and stays consistent.",
  },
  {
    icon: FiLifeBuoy,
    title: "Unblock & mentor",
    text: "I remove blockers early and help each engineer grow into bigger responsibilities.",
  },
];

export const techSkills = [
  { title: "Frontend", items: ["React", "Next.js", "Angular", "Vue", "React Native", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "Express", "Laravel", "PHP", "REST APIs"] },
  { title: "Data & real-time", items: ["MySQL", "MongoDB", "Supabase", "WebSockets", "React Query", "Redux Toolkit"] },
  { title: "DevOps", items: ["Docker", "CI/CD", "Linux", "Nginx", "AWS", "Vercel"] },
  { title: "Architecture", items: ["Design Systems", "Schema-driven UIs", "Multi-tenancy", "SSR", "Performance"] },
  { title: "AI tools", items: ["Claude Code", "OpenAI Codex", "Cursor", "Windsurf", "Prompt engineering"] },
];

export const softSkills = [
  { icon: FiMessageSquare, title: "Communication", text: "Explaining technical ideas clearly to business, design and engineering." },
  { icon: FiCompass, title: "Requirement analysis", text: "Finding the real problem behind a request and writing it down." },
  { icon: FiUsers, title: "Leadership & mentoring", text: "Leading engineering teams and helping every member grow." },
  { icon: FiZap, title: "Problem solving", text: "Breaking big, messy problems into small, solvable steps." },
  { icon: FiTarget, title: "Ownership", text: "Caring about the result, not just finishing the ticket." },
  { icon: FiLink, title: "Collaboration", text: "Working smoothly across departments and with external partners." },
  { icon: FiClock, title: "Time management", text: "Balancing a full-time lead role with part-time projects." },
  { icon: FiRefreshCw, title: "Adaptability", text: "Moving between React, Angular, Vue and backend work as needed." },
];

// Attach the Arabic copy (see journeyData.ar.js); components read it via `pick()`
const attach = (list, arList) => list.forEach((item, i) => {
  item.ar = arList[i];
});
attach(chapters, chaptersAr);
attach(processSteps, processStepsAr);
attach(departments, departmentsAr);
attach(leadership, leadershipAr);
attach(softSkills, softSkillsAr);
techSkills.forEach((group, i) => {
  group.ar = { title: techSkillsAr[i] };
});
