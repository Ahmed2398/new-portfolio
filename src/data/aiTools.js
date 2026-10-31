// How Ahmed uses AI coding tools — shared by Home, About, Journey, Services
// and the chatbot so every page tells the same story.
import { FiCompass, FiZap, FiCheckCircle, FiTool, FiBookOpen, FiTrendingUp, FiShield, FiTarget, FiUsers } from "react-icons/fi";

export const aiTools = [
  {
    id: "claude",
    name: "Claude & Claude Code",
    maker: "Anthropic",
    mark: "C",
    color: "#d97757",
    use: "My main pair-programmer in the terminal — planning features, refactoring across many files, writing tests and reviewing changes.",
  },
  {
    id: "codex",
    name: "OpenAI Codex",
    maker: "OpenAI",
    mark: "Cx",
    color: "#10a37f",
    use: "Delegating well-defined tasks — boilerplate, migrations and quick prototypes — then reviewing every result before it ships.",
  },
  {
    id: "cursor",
    name: "Cursor",
    maker: "Anysphere",
    mark: "Cu",
    color: "#6366f1",
    use: "AI-native editor for day-to-day coding — inline edits, codebase-aware chat and fast navigation in large projects.",
  },
  {
    id: "windsurf",
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
    text: "Turn requirements into user stories, edge cases and technical plans, and explore unfamiliar codebases in minutes instead of days.",
  },
  {
    icon: FiZap,
    title: "Build faster",
    text: "Scaffold components, APIs and forms, and refactor safely across many files — while I focus on architecture.",
  },
  {
    icon: FiCheckCircle,
    title: "Test & review",
    text: "Generate unit tests, review diffs and catch bugs and edge cases before they ever reach QA.",
  },
  {
    icon: FiTool,
    title: "Debug",
    text: "Trace errors through logs and stack traces, then verify every proposed fix myself.",
  },
  {
    icon: FiBookOpen,
    title: "Document",
    text: "Write READMEs, API docs and team guidelines so knowledge doesn't live in one person's head.",
  },
];

// What it means for clients and teams
export const aiValue = [
  {
    icon: FiTrendingUp,
    title: "Faster delivery",
    text: "More features in the same time, and shorter feedback loops.",
  },
  {
    icon: FiCheckCircle,
    title: "Higher quality",
    text: "More tests and more review — fewer bugs in production.",
  },
  {
    icon: FiTarget,
    title: "Focus on what matters",
    text: "More time for architecture, UX and understanding the business.",
  },
  {
    icon: FiUsers,
    title: "A stronger team",
    text: "Shared prompts, guidelines and AI workflows that lift the whole team.",
  },
];

// Responsible use
export const aiPrinciples = [
  { icon: FiCheckCircle, text: "I own every line — AI drafts, I review, test and decide." },
  { icon: FiShield, text: "Client code and secrets stay private, following each company's policies." },
  { icon: FiTarget, text: "Right tool for the job — I know when AI helps and when it doesn't." },
];
