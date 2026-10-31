import {
  FiLayers,
  FiActivity,
  FiSliders,
  FiShield,
  FiShoppingCart,
  FiServer,
  FiCompass,
} from "react-icons/fi";
import { FaWordpress, FaShopify } from "react-icons/fa";
import { servicesAr, processStepsAr, engagementModelsAr, faqsAr } from "./servicesData.ar";

// Each service: card summary (pitch + deliverables) and the details modal
// content (overview, included, idealFor, outcomes).
export const servicesData = [
  {
    id: "web-platforms",
    icon: FiLayers,
    title: "Web Platform Development",
    pitch: "End-to-end web applications — from architecture and APIs to a fast, polished interface.",
    deliverables: [
      "Architecture and data-model design",
      "Modern, responsive web interfaces",
      "Secure APIs and admin panels",
      "Multi-tenant and role-based access",
      "Third-party and payment integrations",
      "Deployment, testing and documentation",
    ],
    overview: [
      "I take your idea or requirements and turn them into a complete, production-ready web platform — the interface your users see, the APIs behind it, and the admin tools your team needs to run the business.",
      "Every project starts with a clear architecture, so the product is easy to extend later instead of being rewritten after the first version.",
    ],
    included: [
      "Requirements analysis and technical planning",
      "System architecture and database design",
      "Responsive web app built with React, Next.js, Angular or Vue",
      "REST APIs with Node.js / Express or Laravel",
      "Admin dashboards, user management and permissions",
      "Authentication, roles and multi-tenant setups",
      "Third-party integrations (payments, maps, SMS, email)",
      "Testing, deployment and handover documentation",
    ],
    idealFor: [
      "Startups building their first product or MVP",
      "Companies replacing spreadsheets or legacy systems",
      "Teams that need an extra senior engineer to ship faster",
    ],
    outcomes: [
      "A scalable platform that is easy to maintain and extend",
      "Clean, documented code your team can own",
      "A fast, consistent experience on desktop and mobile",
    ],
    featured: true,
  },
  {
    id: "dashboards",
    icon: FiActivity,
    title: "Real-time Dashboards & Data Apps",
    pitch: "Dashboards that stay smooth with live, high-frequency data and large datasets.",
    deliverables: [
      "Live operations and market dashboards",
      "Interactive charts, filters and alerts",
      "WebSocket and streaming integrations",
      "Smooth performance with heavy data",
      "Export to Excel, CSV and PDF",
      "Role-based views for every team",
    ],
    overview: [
      "Data is only useful when people can read it quickly. I build dashboards that turn large, constantly changing data into clear charts, tables and alerts — without freezing the browser.",
      "From trading screens to operations and analytics panels, I focus on fast rendering, smart caching and real-time updates that stay accurate.",
    ],
    included: [
      "Dashboard UX and information layout",
      "Interactive charts, KPIs and data tables",
      "Advanced filters, search and saved views",
      "Real-time updates via WebSockets or polling",
      "Alerts, notifications and watchlists",
      "Export to Excel, CSV and PDF",
      "Performance optimization for large datasets",
      "Role-based views for different users",
    ],
    idealFor: [
      "FinTech and trading products",
      "Operations, logistics and HR teams",
      "Businesses that need a clear view of their KPIs",
    ],
    outcomes: [
      "Faster, data-driven decisions",
      "Live data without lag or page reloads",
      "Reports your team actually uses",
    ],
    featured: true,
  },
  {
    id: "builders",
    icon: FiSliders,
    title: "Form, Page & Workflow Builders",
    pitch: "Tools that let non-technical teams build forms, pages and flows without writing code.",
    deliverables: [
      "Dynamic form builder with validation rules",
      "Drag-and-drop page and workflow builders",
      "Conditional fields and required documents",
      "Approval and escalation flows",
      "Permissions for who can build and publish",
      "Reusable templates for common forms",
    ],
    overview: [
      "Instead of asking developers for every new form or process, your team can create and change them on their own. I build configurable, schema-driven builders so new forms, pages and workflows go live in minutes.",
      "This works especially well for onboarding, HR, compliance and content-heavy products where requirements change often.",
    ],
    included: [
      "Form builder with many field types and validation",
      "Conditional logic and dynamic required documents",
      "Drag-and-drop page / layout builder",
      "Visual workflow builder for multi-step processes",
      "Review, approval and escalation steps",
      "Preview before publishing",
      "Permissions for who can build, edit and approve",
    ],
    idealFor: [
      "Products with frequently changing forms",
      "HR, onboarding and compliance processes",
      "Platforms serving many clients with different needs",
    ],
    outcomes: [
      "Less development time for every new form or flow",
      "Business teams that move faster on their own",
      "Consistent, validated data collection",
    ],
  },
  {
    id: "fintech-regtech",
    icon: FiShield,
    title: "FinTech & RegTech Systems",
    pitch: "Compliance-ready platforms for onboarding, verification and risk — built for regulators and real users.",
    deliverables: [
      "KYC / KYB onboarding journeys",
      "Sanctions & PEP screening flows",
      "Risk scoring and investor suitability",
      "Audit trails, reports and monitoring",
      "Review and approval workflows",
      "Dynamic forms and document collection",
    ],
    overview: [
      "Financial products must be easy for customers and strict for regulators at the same time. I build verification, onboarding and compliance platforms that cover the full journey — from collecting data and documents to screening, risk assessment and a documented decision.",
      "I understand regulatory workflows such as CMA and AML requirements, and how to turn them into clear, auditable user flows.",
    ],
    included: [
      "Digital onboarding for individuals and companies",
      "Dynamic forms and document collection",
      "Identity and entity verification flows",
      "Sanctions and PEP screening integration",
      "Risk assessment engine with scores and rationale",
      "Investor suitability and classification",
      "Review, approval and escalation workflows",
      "Ongoing monitoring, alerts and a full audit trail",
    ],
    idealFor: [
      "Banks, brokers and investment platforms",
      "Fintech startups needing compliant onboarding",
      "Companies subject to KYC / AML regulation",
    ],
    outcomes: [
      "Faster, fully digital customer onboarding",
      "Clear, auditable compliance decisions",
      "A lower manual review workload",
    ],
    featured: true,
  },
  {
    id: "ecommerce",
    icon: FiShoppingCart,
    title: "E-commerce & Payment Integration",
    pitch: "Online stores and donation platforms with secure, smooth checkout and online payments.",
    deliverables: [
      "Custom or WooCommerce stores",
      "Payment gateway integration",
      "Product, order and inventory management",
      "Conversion-focused checkout",
      "Discounts, coupons and shipping rules",
      "Sales analytics and conversion tracking",
    ],
    overview: [
      "I build online stores, marketplaces and donation platforms that are fast to browse and easy to pay on — whether that's a fully custom build or a WooCommerce store.",
      "Payments are integrated securely with local and international gateways, so your customers can pay the way they prefer.",
    ],
    included: [
      "Store or marketplace setup (custom or WooCommerce)",
      "Product catalog, categories, filters and search",
      "Cart, checkout and order tracking",
      "Payment gateways such as KNET, Apple Pay and Tap",
      "Inventory, orders and customer management",
      "Discounts, coupons and shipping rules",
      "Analytics and conversion tracking",
    ],
    idealFor: [
      "Brands moving their sales online",
      "Charities and non-profits accepting donations",
      "Multi-vendor marketplaces",
    ],
    outcomes: [
      "More completed purchases with a smoother checkout",
      "Secure, reliable payments",
      "A store your team can manage day to day",
    ],
  },
  {
    id: "wordpress",
    icon: FaWordpress,
    title: "WordPress Websites",
    pitch: "Fast, editable WordPress sites for clinics, brands and companies — easy for your team to manage.",
    deliverables: [
      "Custom themes and page layouts",
      "WooCommerce shops",
      "Bilingual (Arabic / English) content",
      "Speed, SEO and security basics",
      "Responsive design for every device",
      "Contact, booking and lead forms",
    ],
    overview: [
      "For company websites, clinics, brands and content-driven businesses, WordPress is often the fastest way to launch — and the easiest for your team to update.",
      "I build custom, well-structured WordPress sites that look professional, load fast and are simple to edit without breaking the design.",
    ],
    included: [
      "Custom theme design and development",
      "Responsive pages for every device",
      "Arabic / English bilingual setup",
      "WooCommerce shop if needed",
      "Contact, booking and lead forms",
      "On-page SEO and speed optimization",
      "Security hardening and backups",
      "Training so your team can manage content",
    ],
    idealFor: [
      "Clinics and medical centers",
      "Company and brand websites",
      "Small businesses and online shops",
    ],
    outcomes: [
      "A professional website, launched quickly",
      "Content your team can update without a developer",
      "Better visibility in search engines",
    ],
  },
  {
    id: "shopify",
    icon: FaShopify,
    title: "Shopify Stores",
    pitch: "Beautiful, fast Shopify stores that are easy to run — from first launch to custom features.",
    deliverables: [
      "Store setup and configuration",
      "Custom theme design and Liquid development",
      "Product, collection and inventory setup",
      "Payments, shipping and taxes",
      "Apps and third-party integrations",
      "Speed and conversion optimization",
    ],
    overview: [
      "Shopify is one of the fastest ways to start selling online. I set up and customize Shopify stores that match your brand, load quickly and turn visitors into customers.",
      "Whether you need a brand-new store, a custom theme, or help moving from another platform, I'll build it so your team can manage products and orders without a developer.",
    ],
    included: [
      "New store setup and configuration",
      "Custom theme design or theme customization",
      "Liquid sections and templates tailored to your brand",
      "Products, variants, collections and inventory",
      "Payment gateways, shipping zones and taxes",
      "Apps and third-party integrations",
      "Migration from WooCommerce or other platforms",
      "Speed, SEO and conversion optimization",
    ],
    idealFor: [
      "Brands launching their first online store",
      "Businesses moving from another e-commerce platform",
      "Stores that need a custom look or features",
    ],
    outcomes: [
      "A professional store, ready to sell",
      "A shop your team can manage day to day",
      "Faster pages and more completed checkouts",
    ],
  },
  {
    id: "devops",
    icon: FiServer,
    title: "DevOps & Deployment",
    highlight: "Migrating apps to new servers or the cloud",
    pitch: "Get your app online reliably — automated pipelines, containers and properly configured servers.",
    deliverables: [
      "CI/CD pipelines for build, test and deploy",
      "Dockerized apps and environments",
      "Linux server setup with Nginx and SSL",
      "Deployments on AWS, Vercel or Netlify",
      "Staging and production environments",
      "Monitoring, logs and backups",
    ],
    overview: [
      "Shipping should be boring and predictable. I set up automated pipelines, containers and servers so every change is built, tested and deployed the same way — without manual steps or late-night surprises.",
      "Whether you're launching a new app or cleaning up an existing setup, I'll leave you with an environment that's documented and easy to run.",
    ],
    included: [
      "CI/CD pipelines with GitHub Actions or GitLab CI",
      "Docker images and docker-compose environments",
      "Linux server setup, Nginx and reverse proxies",
      "SSL certificates, domains and DNS",
      "Deployments to AWS, Vercel or Netlify",
      "Separate staging and production environments",
      "Environment variables and secrets management",
      "Basic monitoring, logs and backups",
    ],
    idealFor: [
      "Teams deploying manually today",
      "New products that need a production setup",
      "Apps moving to new servers or the cloud",
    ],
    outcomes: [
      "Faster, safer releases",
      "Consistent environments from dev to production",
      "Less downtime and fewer deployment mistakes",
    ],
  },
  {
    id: "consultation",
    icon: FiCompass,
    title: "Technical Consultation",
    pitch: "A second pair of senior eyes on your product, code or team before small problems get expensive.",
    deliverables: [
      "Architecture and tech-stack decisions",
      "Code reviews and performance audits",
      "MVP planning and technical roadmaps",
      "Mentoring and leading engineering teams",
      "Code quality and security reviews",
      "Short-term technical leadership",
    ],
    overview: [
      "Not every problem needs a new build. Sometimes you need an experienced engineer to look at your product, your code or your plans and tell you clearly what to do next.",
      "I help founders and teams make the right technical decisions, fix what slows them down, and plan work that their team can actually deliver.",
    ],
    included: [
      "Architecture review with clear recommendations",
      "Tech-stack selection for new products",
      "Code quality and security review",
      "Performance audits and optimization plans",
      "MVP scoping, estimates and roadmaps",
      "Hiring support and technical interviews",
      "Mentoring and coaching developers",
      "Short-term technical leadership",
    ],
    idealFor: [
      "Founders without a technical co-founder",
      "Teams facing slow, buggy or hard-to-change code",
      "Companies planning a rebuild or a new product",
    ],
    outcomes: [
      "Confident technical decisions",
      "A clear, prioritized action plan",
      "A stronger, more productive team",
    ],
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "We talk through your goals, users and constraints, and I turn them into clear requirements.",
  },
  {
    title: "Plan & architect",
    text: "I propose the architecture, tech stack, milestones and a realistic timeline.",
  },
  {
    title: "Build & review",
    text: "Iterative delivery with regular demos, so you see progress and give feedback early.",
  },
  {
    title: "Launch & support",
    text: "Deployment, monitoring and handover — plus support while the product grows.",
  },
];

export const engagementModels = [
  {
    title: "Freelance project",
    text: "A defined scope — a new product, a feature set, or a rebuild — delivered end to end.",
  },
  {
    title: "Full-time / lead role",
    text: "Joining your team as a senior engineer or tech lead, on-site or remote.",
  },
  {
    title: "Consultation",
    text: "Hourly or short engagements for architecture reviews, code audits and technical advice.",
  },
];

export const faqs = [
  {
    q: "Do you use AI tools?",
    a: "Yes — every day. I use Claude Code, OpenAI Codex, Cursor and Windsurf to plan, build, test and document faster. AI drafts; I review, test and own every line, and client code and secrets always stay private.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. I'm based in Cairo (GMT+2) and have worked remotely with teams in Saudi Arabia, the UAE and Kuwait, with good overlap for Gulf and European time zones.",
  },
  {
    q: "Can you take over an existing project?",
    a: "Yes. I usually start with a short code and architecture review, then propose a plan to stabilize, improve and extend it.",
  },
  {
    q: "How do we communicate during a project?",
    a: "Through your preferred tools — Slack, WhatsApp, Teams or email — with regular demos and progress updates.",
  },
  {
    q: "Which tech stack will you use?",
    a: "Whatever fits your product and team best. My main tools are React, Next.js, Node.js and Laravel, and I'm comfortable with Angular, Vue and WordPress.",
  },
];

// Attach the Arabic copy (see servicesData.ar.js); components read it via `pick()`
servicesData.forEach((service) => {
  service.ar = servicesAr[service.id];
});
processSteps.forEach((step, i) => {
  step.ar = processStepsAr[i];
});
engagementModels.forEach((model, i) => {
  model.ar = engagementModelsAr[i];
});
faqs.forEach((item, i) => {
  item.ar = faqsAr[i];
});
