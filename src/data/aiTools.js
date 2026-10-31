// How Ahmed uses AI coding tools — shared by Home, About, Journey, Services
// and the chatbot so every page tells the same story.
import { FiCompass, FiZap, FiCheckCircle, FiTool, FiBookOpen, FiTrendingUp, FiShield, FiTarget, FiUsers } from "react-icons/fi";

export const aiTools = [
  {
    id: "claude",
    ar: { use: "شريكي الأساسي في البرمجة من التيرمنال — تخطيط الخصائص، إعادة هيكلة الكود في ملفات كتير، كتابة الاختبارات ومراجعة التغييرات." },
    name: "Claude & Claude Code",
    maker: "Anthropic",
    mark: "C",
    color: "#d97757",
    use: "My main pair-programmer in the terminal — planning features, refactoring across many files, writing tests and reviewing changes.",
  },
  {
    id: "codex",
    ar: { use: "بسلّمه مهام واضحة — كود متكرر، migrations ونماذج أولية سريعة — وبراجع كل نتيجة قبل ما تتسلّم." },
    name: "OpenAI Codex",
    maker: "OpenAI",
    mark: "Cx",
    color: "#10a37f",
    use: "Delegating well-defined tasks — boilerplate, migrations and quick prototypes — then reviewing every result before it ships.",
  },
  {
    id: "cursor",
    ar: { use: "محرر كود ذكي للشغل اليومي — تعديلات سريعة، شات فاهم المشروع كله، وتنقّل سريع في المشاريع الكبيرة." },
    name: "Cursor",
    maker: "Anysphere",
    mark: "Cu",
    color: "#6366f1",
    use: "AI-native editor for day-to-day coding — inline edits, codebase-aware chat and fast navigation in large projects.",
  },
  {
    id: "windsurf",
    ar: { use: "تنفيذ تغييرات متعددة الخطوات، وفهم أي كود جديد عليا بسرعة." },
    name: "Windsurf",
    maker: "Codeium",
    mark: "W",
    color: "#06b6d4",
    use: "Agentic flows for multi-step changes and getting up to speed on unfamiliar codebases quickly.",
  },
];

// Where AI fits into the delivery process
export const aiWorkflow = [
  {
    icon: FiCompass,
    title: "Understand & plan",
    ar: { title: "أفهم وأخطط", text: "أحوّل المتطلبات لـ user stories وحالات خاصة وخطط تقنية، وأفهم أي كود جديد في دقايق بدل أيام." },
    text: "Turn requirements into user stories, edge cases and technical plans, and explore unfamiliar codebases in minutes instead of days.",
  },
  {
    icon: FiZap,
    title: "Build faster",
    ar: { title: "أبني أسرع", text: "أجهّز المكونات والـ APIs والنماذج، وأعيد هيكلة الكود بأمان في ملفات كتير — وأنا مركز على المعمارية." },
    text: "Scaffold components, APIs and forms, and refactor safely across many files — while I focus on architecture.",
  },
  {
    icon: FiCheckCircle,
    title: "Test & review",
    ar: { title: "أختبر وأراجع", text: "أكتب unit tests، وأراجع التغييرات، وألاقي الأخطاء والحالات الخاصة قبل ما توصل للـ QA." },
    text: "Generate unit tests, review diffs and catch bugs and edge cases before they ever reach QA.",
  },
  {
    icon: FiTool,
    title: "Debug",
    ar: { title: "أصلّح الأخطاء", text: "أتتبع الأخطاء من الـ logs والـ stack traces، وأتأكد بنفسي من كل حل." },
    text: "Trace errors through logs and stack traces, then verify every proposed fix myself.",
  },
  {
    icon: FiBookOpen,
    title: "Document",
    ar: { title: "أوثّق", text: "أكتب README وتوثيق للـ APIs وإرشادات للفريق، علشان المعرفة ماتبقاش في دماغ شخص واحد." },
    text: "Write READMEs, API docs and team guidelines so knowledge doesn't live in one person's head.",
  },
];

// What it means for clients and teams
export const aiValue = [
  {
    icon: FiTrendingUp,
    title: "Faster delivery",
    ar: { title: "تسليم أسرع", text: "خصائص أكتر في نفس الوقت، ودورات تطوير أقصر." },
    text: "More features in the same time, and shorter feedback loops.",
  },
  {
    icon: FiCheckCircle,
    title: "Higher quality",
    ar: { title: "جودة أعلى", text: "اختبارات ومراجعة أكتر — وأخطاء أقل في الإنتاج." },
    text: "More tests and more review — fewer bugs in production.",
  },
  {
    icon: FiTarget,
    title: "Focus on what matters",
    ar: { title: "تركيز على المهم", text: "وقت أكتر للمعمارية وتجربة المستخدم وفهم البيزنس." },
    text: "More time for architecture, UX and understanding the business.",
  },
  {
    icon: FiUsers,
    title: "A stronger team",
    ar: { title: "فريق أقوى", text: "prompts وإرشادات وطرق شغل بالذكاء الاصطناعي بتطوّر الفريق كله." },
    text: "Shared prompts, guidelines and AI workflows that lift the whole team.",
  },
];

// Responsible use
export const aiPrinciples = [
  { icon: FiCheckCircle, text: "I own every line — AI drafts, I review, test and decide.", ar: { text: "أنا مسؤول عن كل سطر — الذكاء الاصطناعي بيكتب المسودة، وأنا براجع وأختبر وأقرر." } },
  { icon: FiShield, text: "Client code and secrets stay private, following each company's policies.", ar: { text: "كود العملاء وأسرارهم بتفضل خاصة، وبالتزم بسياسات كل شركة." } },
  { icon: FiTarget, text: "Right tool for the job — I know when AI helps and when it doesn't.", ar: { text: "الأداة المناسبة للشغل المناسب — عارف إمتى الذكاء الاصطناعي بيفيد وإمتى لأ." } },
];
