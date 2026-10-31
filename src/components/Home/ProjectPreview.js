import React, { useEffect, useState } from "react";
import { projectsData } from "../Projects/ProjectsData";
import "./ProjectPreview.css";

// Token helpers: k = keyword, v = variable, p = property, s = string,
// n = number/boolean, c = comment, x = punctuation / plain text
const line = (...tokens) => tokens;
const k = (t) => ["k", t];
const v = (t) => ["v", t];
const p = (t) => ["p", t];
const s = (t) => ["s", t];
const n = (t) => ["n", t];
const c = (t) => ["c", t];
const x = (t) => ["x", t];

const files = [
  {
    name: "engineer.ts",
    lines: [
      line(c("// hello, world 👋")),
      line(k("const "), v("engineer"), x(" = {")),
      line(x("  "), p("name"), x(": "), s('"Ahmed Ashraf"'), x(",")),
      line(x("  "), p("role"), x(": "), s('"Senior Software Engineer"'), x(",")),
      line(x("  "), p("based"), x(": "), s('"Cairo, Egypt · Remote"'), x(",")),
      line(x("  "), p("experience"), x(": "), s('"5+ years"'), x(",")),
      line(x("  "), p("currently"), x(": "), s('"Leading KYC360 @ EON Tech"'), x(",")),
      line(x("  "), p("openToWork"), x(": "), n("true"), x(",")),
      line(x("};")),
    ],
  },
  {
    name: "stack.ts",
    lines: [
      line(c("// tools I reach for")),
      line(k("export const "), v("stack"), x(" = {")),
      line(x("  "), p("ui"), x(": ["), s('"React"'), x(", "), s('"Next.js"'), x(", "), s('"Angular"'), x(", "), s('"Vue"'), x("],")),
      line(x("  "), p("server"), x(": ["), s('"Node.js"'), x(", "), s('"Express"'), x(", "), s('"Laravel"'), x("],")),
      line(x("  "), p("data"), x(": ["), s('"MySQL"'), x(", "), s('"MongoDB"'), x(", "), s('"Supabase"'), x("],")),
      line(x("  "), p("state"), x(": ["), s('"Redux Toolkit"'), x(", "), s('"React Query"'), x("],")),
      line(x("  "), p("realtime"), x(": ["), s('"WebSockets"'), x("],")),
      line(x("  "), p("languages"), x(": ["), s('"TypeScript"'), x(", "), s('"PHP"'), x("],")),
      line(x("  "), p("ai"), x(": ["), s('"Claude Code"'), x(", "), s('"Codex"'), x(", "), s('"Cursor"'), x("],")),
      line(x("};")),
    ],
  },
  {
    name: "impact.ts",
    lines: [
      line(c("// shipped to production")),
      line(k("export const "), v("impact"), x(" = {")),
      line(x("  "), p("projects"), x(": "), n(String(projectsData.length)), x(",")),
      line(x("  "), p("engineersLed"), x(": "), n("6"), x(",")),
      line(x("  "), p("productsOnOneDesignSystem"), x(": "), n("4"), x(",")),
      line(x("  "), p("fasterFeatureBuilds"), x(": "), s('"~40%"'), x(",")),
      line(x("  "), p("domains"), x(": ["), s('"FinTech"'), x(", "), s('"RegTech"'), x(", "), s('"SaaS"'), x("],")),
      line(x("  "), p("bugsInProduction"), x(": "), n("0"), x(", "), c("// we wish 😄")),
      line(x("};")),
    ],
  },
];

const pipeline = ["lint", "test", "build", "deploy"];
const ROTATE_MS = 7000;

function ProjectPreview() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(() => setActive((i) => (i + 1) % files.length), ROTATE_MS);
    return () => clearTimeout(timer);
  }, [active, paused]);

  const file = files[active];

  return (
    <div className="project-preview-container">
      <div
        className="hc"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hc-bar">
          <div className="hc-dots" aria-hidden="true">
            <span className="red" />
            <span className="yellow" />
            <span className="green" />
          </div>
          <div className="hc-tabs" role="tablist" aria-label="Profile files">
            {files.map((f, i) => (
              <button
                key={f.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`hc-tab ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="hc-ts">TS</span>
                {f.name}
              </button>
            ))}
          </div>
        </div>

        <div className="hc-code" key={file.name} role="tabpanel">
          {file.lines.map((tokens, i) => (
            <div className="hc-line" key={i} style={{ animationDelay: `${i * 110}ms` }}>
              <span className="hc-ln">{i + 1}</span>
              <span className="hc-src">
                {tokens.map(([type, text], j) => (
                  <span key={j} className={`tk-${type}`}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
          <div className="hc-line hc-cursor-line" style={{ animationDelay: `${file.lines.length * 110}ms` }}>
            <span className="hc-ln">{file.lines.length + 1}</span>
            <span className="hc-cursor" />
          </div>
        </div>

        <div className="hc-pipeline" key={`pipe-${file.name}`}>
          <div className="hc-steps">
            {pipeline.map((step, i) => (
              <span className="hc-step" key={step} style={{ animationDelay: `${1.2 + i * 0.55}s` }}>
                <span className="hc-check">✓</span>
                {step}
              </span>
            ))}
          </div>
          <div className="hc-progress">
            <span />
          </div>
          <p className="hc-status">
            <span className="hc-live-dot" />
            All checks passed · deployed to production
          </p>
        </div>
      </div>

      <div className="floating-badge badge-1">React</div>
      <div className="floating-badge badge-2">Node.js</div>
      <div className="floating-badge badge-3">Laravel</div>
    </div>
  );
}

export default ProjectPreview;
