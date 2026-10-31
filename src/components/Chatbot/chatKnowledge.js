// Rule-based "brain" for the site chatbot. It answers from the same data that
// powers the pages (services, projects), in English or Arabic, and always
// returns links to the right page. Swap `getReply` for an AI call later
// without touching the chat UI.
import { servicesData } from "../Services/servicesData";
import { projectsData } from "../Projects/ProjectsData";
import { experienceData } from "../Home/Experience";
import { processSteps, softSkills } from "../Journey/journeyData";
import { aiTools } from "../../data/aiTools";

const aiToolUseAr = {
  claude: "شريكه الأساسي في البرمجة: تخطيط الخصائص، إعادة هيكلة الكود، كتابة الاختبارات ومراجعة التغييرات",
  codex: "تنفيذ مهام محددة زي الكود المتكرر والنماذج الأولية، مع مراجعة كل نتيجة",
  cursor: "محرر كود ذكي للشغل اليومي وفهم المشاريع الكبيرة بسرعة",
  windsurf: "تغييرات متعددة الخطوات وفهم أي كود جديد بسرعة",
};

export const EMAIL = "ahmedashraf2398@gmail.com";
export const WHATSAPP = "https://wa.me/201147266169";
export const LINKEDIN = "https://www.linkedin.com/in/ahmed-ashraf-a9b62918b/";

const ARABIC = /[؀-ۿ]/;
export const detectLang = (text) => (ARABIC.test(text) ? "ar" : "en");

// Normalise Arabic letter variants and strip punctuation so keywords match
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[ً-ْ]/g, "")
    .replace(/[^\p{L}\p{N}\s/+#.-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const serviceNamesAr = {
  "web-platforms": "تطوير المنصات والتطبيقات الويب",
  dashboards: "لوحات التحكم والبيانات اللحظية",
  builders: "منشئ النماذج والصفحات وسير العمل",
  "fintech-regtech": "أنظمة التقنية المالية والامتثال",
  ecommerce: "التجارة الإلكترونية وبوابات الدفع",
  wordpress: "مواقع ووردبريس",
  shopify: "متاجر شوبيفاي",
  devops: "DevOps والنشر على السيرفرات",
  consultation: "الاستشارات التقنية",
};

// Extra words that point at a specific service (EN + AR)
const serviceKeywords = {
  "web-platforms": ["web app", "platform", "website", "saas", "mvp", "full stack", "fullstack", "منصه", "تطبيق ويب", "موقع", "نظام"],
  dashboards: ["dashboard", "real-time", "realtime", "chart", "analytics", "websocket", "لوحه", "داشبورد", "تحليلات", "رسوم بيانيه"],
  builders: ["form builder", "builder", "workflow", "no-code", "nocode", "drag", "نموذج", "نماذج", "سير العمل", "منشئ"],
  "fintech-regtech": ["fintech", "regtech", "kyc", "kyb", "aml", "compliance", "bank", "trading", "مالي", "ماليه", "امتثال", "بنك", "تداول"],
  ecommerce: ["ecommerce", "e-commerce", "store", "shop", "payment", "checkout", "knet", "متجر", "دفع", "تجاره الكترونيه", "بوابه دفع"],
  wordpress: ["wordpress", "woocommerce", "ووردبريس", "وردبريس", "ووكومرس"],
  shopify: ["shopify", "liquid", "شوبيفاي", "شوبفاي"],
  devops: ["devops", "docker", "ci/cd", "cicd", "deploy", "deployment", "server", "nginx", "aws", "vercel", "hosting", "migration", "سيرفر", "استضافه", "نشر", "دوكر"],
  consultation: ["consult", "consultation", "advice", "code review", "audit", "mentor", "استشاره", "استشارات", "مراجعه كود", "نصيحه"],
};

// Generic intents — keywords in both languages
const intents = [
  { id: "greeting", words: ["hi", "hello", "hey", "good morning", "good evening", "مرحبا", "اهلا", "السلام", "هاي", "صباح الخير", "مساء الخير"] },
  { id: "thanks", words: ["thanks", "thank you", "thx", "great", "awesome", "شكرا", "متشكر", "تسلم", "جميل"] },
  { id: "services", words: ["service", "services", "offer", "provide", "what do you do", "help me", "can you build", "خدمات", "خدمه", "تقدم", "بتقدم", "تعمل ايه", "بتعمل ايه", "تقدر تعمل"] },
  { id: "projects", words: ["project", "projects", "portfolio", "work", "examples", "case study", "clients", "مشاريع", "مشروع", "اعمال", "اعمالك", "شغلك", "امثله"] },
  { id: "skills", words: ["skill", "skills", "tech", "stack", "technologies", "languages", "react", "angular", "vue", "laravel", "node", "مهارات", "تقنيات", "لغات", "تكنولوجيا"] },
  { id: "experience", words: ["experience", "years", "companies", "worked", "career", "background", "خبره", "خبرتك", "سنين", "شركات", "اشتغلت"] },
  { id: "about", words: ["who are you", "about you", "about ahmed", "yourself", "introduce", "مين انت", "من انت", "عرفني", "نبذه", "عن نفسك"] },
  { id: "process", words: ["process", "how do you work", "how you work", "team", "lead", "leadership", "requirements", "soft skills", "journey", "طريقه شغلك", "طريقه العمل", "فريق", "قياده", "متطلبات", "رحلتك"] },
  { id: "contact", words: ["contact", "reach", "email", "whatsapp", "phone", "call", "talk", "hire", "message", "تواصل", "اتواصل", "ايميل", "واتساب", "رقم", "توظيف", "اكلمك"] },
  { id: "cv", words: ["cv", "resume", "download", "سيره ذاتيه", "السيره", "سي في", "الcv"] },
  { id: "availability", words: ["available", "availability", "freelance", "full-time", "full time", "open to", "job", "متاح", "متاحه", "فريلانس", "دوام", "وظيفه"] },
  { id: "ai", words: ["ai", "artificial intelligence", "claude", "claude code", "codex", "cursor", "windsurf", "copilot", "chatgpt", "gpt", "llm", "prompt", "ذكاء اصطناعي", "الذكاء الاصطناعي", "كلود", "كيرسر", "ويندسيرف"] },
  { id: "pricing", words: ["price", "pricing", "cost", "rate", "budget", "how much", "quote", "سعر", "الاسعار", "تكلفه", "بكام", "ميزانيه"] },
  { id: "location", words: ["where", "location", "based", "timezone", "time zone", "country", "remote", "فين", "مكان", "موقعك", "توقيت", "عن بعد"] },
];

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const matches = (text, word) => {
  const w = normalize(word);
  // Arabic words take prefixes/suffixes (ال، ب، ها…), so match them as substrings
  if (ARABIC.test(w) || w.includes(" ")) return text.includes(w);
  // English: whole word, allowing a plural "s"/"es"
  return new RegExp(`(^|\\s)${escapeRegex(w)}(s|es)?(\\s|$)`).test(text);
};

// `detail` = show a short summary in the chat first (see getDetail); links
// without it navigate straight to the page.
const page = (to, en, ar, detail, param) => ({
  to,
  label: { en, ar },
  ...(detail ? { detail } : {}),
  ...(param ? { param } : {}),
});
const ext = (href, en, ar) => ({ href, label: { en, ar } });

function findService(text) {
  let best = null;
  let bestScore = 0;
  servicesData.forEach((service) => {
    const words = [service.title, ...(serviceKeywords[service.id] || [])];
    const score = words.filter((w) => matches(text, w)).length;
    if (score > bestScore) {
      best = service;
      bestScore = score;
    }
  });
  return best;
}

function findProject(text) {
  return projectsData.find((project) => {
    const name = normalize(project.title.split(/[–:]/)[0]);
    return name.length > 2 && text.includes(name);
  });
}

function scoreIntents(text) {
  return intents
    // Phrases count double so "how do you work" beats the single word "work"
    .map((intent) => ({
      id: intent.id,
      score: intent.words.filter((w) => matches(text, w)).reduce((sum, w) => sum + (w.includes(" ") ? 2 : 1), 0),
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

const t = (lang, en, ar) => (lang === "ar" ? ar : en);
// Use an item's Arabic copy (attached by the data files) when replying in Arabic
const loc = (lang, item) => (lang === "ar" && item && item.ar ? { ...item, ...item.ar } : item);

// ---------------------------------------------------------------------------
// Answers
// ---------------------------------------------------------------------------
const answers = {
  greeting: (lang) => ({
    text: t(
      lang,
      "Hi there! 👋 I'm **Ahmed AI Assistant**. I know everything about Ahmed's services, projects and experience (and absolutely nothing about the weather 😄). What can I help you with?",
      "أهلاً بيك! 👋 أنا **مساعد أحمد الذكي**. أعرف كل حاجة عن خدمات أحمد ومشاريعه وخبرته (ومعرفش أي حاجة عن الطقس 😄). أقدر أساعدك في إيه؟"
    ),
    suggestions: true,
  }),

  thanks: (lang) => ({
    text: t(
      lang,
      "Anytime! 🤖💙 My circuits are happy to help. Anything else?",
      "العفو! 🤖💙 الدوائر بتاعتي مبسوطة إنها ساعدتك. في حاجة تانية؟"
    ),
    suggestions: true,
  }),

  services: (lang) => ({
    text: t(
      lang,
      `Ahmed offers ${servicesData.length} services:`,
      `أحمد بيقدم ${servicesData.length} خدمات:`
    ),
    list: servicesData.map((s) => (lang === "ar" ? serviceNamesAr[s.id] || s.title : s.title)),
    links: [
      page("/services", "How it works", "إزاي بيشتغل", "services"),
      page("/contact", "Discuss a project", "ناقش مشروعك", "contact"),
    ],
  }),

  service: (lang, service) => ({
    text: t(
      lang,
      `Yes! **${service.title}** — ${service.pitch}`,
      `أكيد! **${serviceNamesAr[service.id] || service.title}** — من الخدمات اللي أحمد بيقدمها. تقدر تشوف التفاصيل الكاملة في صفحة الخدمات.`
    ),
    list: loc(lang, service).deliverables.slice(0, 4),
    links: [
      page("/services", "What's included", "الخدمة بتشمل إيه", "service", service.id),
      page(`/contact?service=${encodeURIComponent(service.title)}`, "Discuss this service", "اطلب الخدمة دي"),
    ],
  }),

  projects: (lang) => {
    const featured = projectsData.filter((p) => p.featured);
    return {
      text: t(
        lang,
        `Ahmed has delivered ${projectsData.length} projects across FinTech, RegTech, HR, healthcare and e-commerce. Highlights:`,
        `أحمد نفّذ ${projectsData.length} مشروع في مجالات التقنية المالية، الامتثال، الموارد البشرية، الصحة والتجارة الإلكترونية. أبرزها:`
      ),
      list: featured.map((p) => loc(lang, p).title),
      links: [page("/project", "More about these projects", "تفاصيل المشاريع", "projects")],
    };
  },

  project: (lang, project) => ({
    text: t(lang, `**${project.title}** — ${project.description}`, `**${project.title}** — من أبرز مشاريع أحمد. تقدر تشوف التفاصيل الكاملة في صفحة المشاريع.`),
    links: [
      page("/project", "Open in projects", "افتح صفحة المشاريع"),
      ...(project.demoLink ? [ext(project.demoLink, "Visit live site", "زيارة الموقع")] : []),
    ],
  }),

  skills: (lang) => ({
    text: t(lang, "Ahmed works across the whole stack:", "أحمد بيشتغل على كل طبقات المشروع:"),
    list: [
      t(lang, "Frontend: React, Next.js, Angular, Vue, React Native", "الواجهات: React، Next.js، Angular، Vue، React Native"),
      t(lang, "Backend: Node.js, Express, Laravel, PHP", "الباك إند: Node.js، Express، Laravel، PHP"),
      t(lang, "Data: MySQL, MongoDB, Supabase, WebSockets", "البيانات: MySQL، MongoDB، Supabase، WebSockets"),
      t(lang, "DevOps: Docker, CI/CD, Nginx, AWS, Vercel", "DevOps: Docker، CI/CD، Nginx، AWS، Vercel"),
    ],
    links: [
      page("/about", "Soft skills too", "المهارات الشخصية", "softskills"),
    ],
  }),

  experience: (lang) => ({
    text: t(
      lang,
      "Ahmed has 5+ years of experience. He's currently a Senior Software Engineer at EON Tech, leading the KYC360 team, and previously worked at Key Frame, Nuwas, Macber and Altsolutions.",
      "أحمد عنده خبرة أكتر من 5 سنين. حالياً Senior Software Engineer في EON Tech وبيقود فريق KYC360، وقبل كده اشتغل في Key Frame و Nuwas و Macber و Altsolutions."
    ),
    links: [
      page("/about", "Full experience", "الخبرة بالتفصيل", "experience"),
      page("/journey", "How he works", "طريقة شغله", "journey"),
    ],
  }),

  about: (lang) => ({
    text: t(
      lang,
      "Ahmed Ashraf is a Senior Software Engineer based in Cairo, Egypt. He designs, builds and leads web platforms for FinTech, RegTech and SaaS companies — from architecture and APIs to fast, real-time interfaces.",
      "أحمد أشرف Senior Software Engineer من القاهرة، مصر. بيصمم ويبني ويقود منصات ويب لشركات التقنية المالية والامتثال والـ SaaS — من المعمارية والـ APIs لحد الواجهات السريعة."
    ),
    links: [page("/about", "More about Ahmed", "اعرف أكتر عن أحمد", "about")],
  }),

  process: (lang) => ({
    text: t(
      lang,
      "Ahmed's process: collect requirements with stakeholders → plan & architect → design with the team → build & review → integrate across teams → ship, measure & improve. He works closely with business, design, backend, QA and external providers.",
      "طريقة شغل أحمد: جمع المتطلبات مع أصحاب المصلحة ← التخطيط والمعمارية ← التصميم مع الفريق ← التنفيذ والمراجعة ← التكامل مع باقي الفرق ← الإطلاق والقياس والتحسين."
    ),
    links: [page("/journey", "The process in detail", "الخطوات بالتفصيل", "journey")],
  }),

  contact: (lang) => ({
    text: t(lang, "You can reach Ahmed any of these ways:", "تقدر تتواصل مع أحمد بأي طريقة من دول:"),
    list: [`Email: ${EMAIL}`, "WhatsApp: +20 114 726 6169"],
    links: [
      page("/contact", "Contact form", "نموذج التواصل", "contact"),
      ext(WHATSAPP, "WhatsApp", "واتساب"),
      ext(`mailto:${EMAIL}`, "Send email", "إرسال إيميل"),
    ],
  }),

  cv: (lang) => ({
    text: t(lang, "Here's Ahmed's CV — you can view it online or download the PDF.", "دي السيرة الذاتية لأحمد — تقدر تشوفها أونلاين أو تحمّلها PDF."),
    links: [
      page("/resume", "What's in the CV", "الـ CV فيه إيه", "resume"),
      { download: true, label: { en: "Download CV", ar: "تحميل الـ CV" } },
    ],
  }),

  availability: (lang) => ({
    text: t(
      lang,
      "Yes — Ahmed is open to freelance projects, full-time / lead roles and consultation. The quickest way to start is the contact form.",
      "أيوه — أحمد متاح لمشاريع فريلانس، وظائف دوام كامل أو قيادة فرق، والاستشارات. أسرع طريقة تبدأ بيها هي نموذج التواصل."
    ),
    links: [page("/contact", "Get in touch", "تواصل معه", "contact"), page("/services", "See services", "شوف الخدمات", "services")],
  }),

  ai: (lang) => ({
    text: t(
      lang,
      "Yes! Ahmed uses AI coding tools every day — they make him faster and more thorough, while he stays in charge of the architecture and quality:",
      "أيوه! أحمد بيستخدم أدوات الذكاء الاصطناعي في البرمجة كل يوم — بتخليه أسرع وأدق، وهو اللي بيتحكم في المعمارية والجودة:"
    ),
    list: aiTools.map((tool) => `${tool.name} — ${lang === "ar" ? aiToolUseAr[tool.id] : tool.use}`),
    note: t(
      lang,
      "AI drafts, Ahmed reviews, tests and owns every line. The full workflow is on the Journey page 👇",
      "الذكاء الاصطناعي بيكتب المسودة، وأحمد بيراجع ويختبر ومسؤول عن كل سطر. طريقة الشغل كاملة في صفحة الرحلة 👇"
    ),
    links: [page("/journey#jr-ai", "How he uses AI", "إزاي بيستخدم الذكاء الاصطناعي")],
  }),

  pricing: (lang) => ({
    text: t(
      lang,
      "Pricing depends on the scope, timeline and type of work (project, role or consultation). Share a few details and Ahmed will send you a clear estimate.",
      "التكلفة بتعتمد على حجم الشغل والمدة ونوعه (مشروع، وظيفة أو استشارة). ابعت تفاصيل بسيطة وأحمد هيبعتلك تقدير واضح."
    ),
    links: [page("/contact", "Request a quote", "اطلب عرض سعر", "contact")],
  }),

  location: (lang) => ({
    text: t(
      lang,
      "Ahmed is based in Cairo, Egypt (GMT+2) and works remotely with teams in Saudi Arabia, the UAE, Kuwait and Europe.",
      "أحمد مقيم في القاهرة، مصر (GMT+2) وبيشتغل عن بعد مع فرق في السعودية والإمارات والكويت وأوروبا."
    ),
    links: [page("/contact", "Contact Ahmed", "تواصل مع أحمد", "contact")],
  }),

  fallback: (lang) => ({
    text: t(
      lang,
      "Bzzt… my circuits came up empty on that one 🤖💭 — but the human version of Ahmed can definitely answer it. Or try one of these:",
      "بززز… الدوائر بتاعتي مالقتش إجابة للسؤال ده 🤖💭 — بس أحمد الأصلي (البشري) أكيد هيرد عليك. أو جرب حاجة من دول:"
    ),
    links: [page("/contact", "Ask Ahmed directly", "اسأل أحمد مباشرة", "contact")],
    suggestions: true,
  }),
};

// Quick-reply chips shown under the greeting / fallback
export const suggestionChips = {
  en: ["What services do you offer?", "Show me your projects", "Do you use AI tools?", "What's your experience?", "Download CV"],
  ar: ["إيه الخدمات اللي بتقدمها؟", "وريني مشاريعك", "بتستخدم الذكاء الاصطناعي؟", "خبرتك إيه؟", "السيرة الذاتية"],
};

export function getReply(message) {
  // Hard cap so even a direct call with a huge string stays fast
  const safe = typeof message === "string" ? message.slice(0, 600) : "";
  const lang = detectLang(safe);
  const text = normalize(safe);
  // Small talk ("hello", "thanks") only wins when nothing else was asked
  const ranked = scoreIntents(text);
  const meaningful = ranked.filter((r) => r.id !== "greeting" && r.id !== "thanks");
  const top = (meaningful[0] || ranked[0] || {}).id || null;

  // Intents that should keep their own answer even when a service is named
  const keepIntent = ["contact", "cv", "location", "pricing", "process", "availability"];

  // A named project or service beats a generic intent
  const project = findProject(text);
  if (project && !keepIntent.includes(top)) return { lang, ...answers.project(lang, project) };

  const service = findService(text);
  if (service && !keepIntent.includes(top)) {
    return { lang, ...answers.service(lang, service) };
  }

  if (top && answers[top]) return { lang, ...answers[top](lang) };
  if (service) return { lang, ...answers.service(lang, service) };
  return { lang, ...answers.fallback(lang) };
}

export function getGreeting(lang = "en") {
  return { lang, ...answers.greeting(lang) };
}

// ---------------------------------------------------------------------------
// Detail replies — a short summary in the chat, then a pointer to the page
// that has the rest.
// ---------------------------------------------------------------------------
const more = (lang, pageEn, pageAr) =>
  t(lang, `The rest of the details are on the ${pageEn} page 👇`, `باقي التفاصيل موجودة في صفحة ${pageAr} 👇`);

const details = {
  experience: (lang) => ({
    text: t(lang, "Here's a quick look at Ahmed's career:", "دي نظرة سريعة على مسيرة أحمد المهنية:"),
    list: experienceData.map((raw) => {
      const job = loc(lang, raw);
      return `${job.role} — ${job.company} (${job.period})`;
    }),
    note: more(lang, "About", "عن أحمد"),
    links: [page("/about", "Open About page", "افتح صفحة عن أحمد")],
  }),

  journey: (lang) => ({
    text: t(lang, "Ahmed follows the same steps on every project:", "أحمد بيمشي بنفس الخطوات في كل مشروع:"),
    list: processSteps.map((step) => loc(lang, step).title),
    note: more(lang, "Journey", "الرحلة"),
    links: [page("/journey", "Open Journey page", "افتح صفحة الرحلة")],
  }),

  softskills: (lang) => ({
    text: t(lang, "Besides the tech, Ahmed brings these soft skills:", "غير المهارات التقنية، أحمد عنده المهارات الشخصية دي:"),
    list: softSkills.map((skill) => loc(lang, skill).title),
    note: more(lang, "Journey", "الرحلة"),
    links: [page("/journey", "Open Journey page", "افتح صفحة الرحلة")],
  }),

  projects: (lang) => ({
    text: t(lang, "A few highlights:", "شوية من أبرز المشاريع:"),
    list: projectsData.filter((p) => p.featured).map((p) => `${loc(lang, p).title} · ${p.category}`),
    note: t(
      lang,
      `There are ${projectsData.length} projects in total, with filters and case studies on the Projects page 👇`,
      `في ${projectsData.length} مشروع في المجمل، مع فلاتر وتفاصيل كل مشروع في صفحة المشاريع 👇`
    ),
    links: [page("/project", "Open Projects page", "افتح صفحة المشاريع")],
  }),

  services: (lang) => ({
    text: t(lang, "You can work with Ahmed in three ways:", "تقدر تشتغل مع أحمد بـ 3 طرق:"),
    list: [
      t(lang, "Freelance project — a defined scope delivered end to end", "مشروع فريلانس — شغل محدد بيتسلم كامل"),
      t(lang, "Full-time / lead role — joining your team", "وظيفة دوام كامل أو قيادة فريق — ينضم لفريقك"),
      t(lang, "Consultation — reviews, audits and technical advice", "استشارة — مراجعات وتقييم ونصايح تقنية"),
    ],
    note: more(lang, "Services", "الخدمات"),
    links: [page("/services", "Open Services page", "افتح صفحة الخدمات")],
  }),

  service: (lang, serviceId) => {
    const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
    return {
      text: t(lang, `**${service.title}** includes:`, `**${serviceNamesAr[service.id] || service.title}** بتشمل:`),
      list: loc(lang, service).included.slice(0, 5),
      note: more(lang, "Services", "الخدمات"),
      links: [
        page("/services", "Open Services page", "افتح صفحة الخدمات"),
        page(`/contact?service=${encodeURIComponent(service.title)}`, "Request this service", "اطلب الخدمة دي"),
      ],
    };
  },

  about: (lang) => ({
    text: t(lang, "A few quick facts:", "شوية معلومات سريعة:"),
    list: [
      t(lang, "Senior Software Engineer · Cairo, Egypt · works remotely", "Senior Software Engineer · القاهرة، مصر · بيشتغل عن بعد"),
      t(lang, "FinTech, RegTech, HR, healthcare and e-commerce products", "منتجات تقنية مالية، امتثال، موارد بشرية، صحة وتجارة إلكترونية"),
      t(lang, "Bachelor's in Management Information Systems", "بكالوريوس نظم معلومات إدارية"),
      t(lang, "Speaks Arabic and English", "بيتكلم عربي وإنجليزي"),
    ],
    note: more(lang, "About", "عن أحمد"),
    links: [page("/about", "Open About page", "افتح صفحة عن أحمد")],
  }),

  resume: (lang) => ({
    text: t(lang, "Ahmed's CV covers:", "الـ CV بتاع أحمد فيه:"),
    list: [
      t(lang, "Professional summary", "ملخص مهني"),
      t(lang, "Work experience at 5 companies", "الخبرة العملية في 5 شركات"),
      t(lang, "Education and core technical skills", "التعليم والمهارات التقنية"),
      t(lang, "Key projects and languages", "أهم المشاريع واللغات"),
    ],
    note: more(lang, "Resume", "السيرة الذاتية"),
    links: [
      page("/resume", "Open Resume page", "افتح صفحة السيرة الذاتية"),
      { download: true, label: { en: "Download CV", ar: "تحميل الـ CV" } },
    ],
  }),

  contact: (lang) => ({
    text: t(
      lang,
      "The contact form only takes a minute: your name, email, what you need help with, and a short message. Ahmed usually replies within one business day.",
      "نموذج التواصل بياخد دقيقة: اسمك، إيميلك، محتاج مساعدة في إيه، ورسالة قصيرة. أحمد عادةً بيرد خلال يوم عمل."
    ),
    note: t(lang, "You'll find the form on the Contact page 👇", "هتلاقي النموذج في صفحة التواصل 👇"),
    links: [page("/contact", "Open Contact page", "افتح صفحة التواصل"), ext(WHATSAPP, "WhatsApp", "واتساب")],
  }),
};

export const DETAIL_IDS = Object.keys(details);

export function getDetail(detail, lang = "en", param) {
  const build = details[detail];
  return build ? { lang, ...build(lang === "ar" ? "ar" : "en", param) } : null;
}
