import React from "react";
import "./AnimatedIllustration.css";

// Decorative "engineering workspace": a dashboard window, a design-system panel
// and a component snippet — the kind of work described on this page.
function AnimatedIllustration() {
  return (
    <div className="workspace" aria-hidden="true">
      <div className="workspace-glow" />

      <div className="ws-window">
        <div className="ws-window-bar">
          <span className="ws-dot red" />
          <span className="ws-dot yellow" />
          <span className="ws-dot green" />
          <span className="ws-url">app.dashboard / overview</span>
        </div>

        <div className="ws-window-body">
          <aside className="ws-sidebar">
            <span className="ws-logo" />
            <span className="ws-nav active" />
            <span className="ws-nav" />
            <span className="ws-nav" />
            <span className="ws-nav" />
          </aside>

          <div className="ws-main">
            <div className="ws-kpis">
              <div className="ws-kpi">
                <span className="ws-kpi-label" />
                <span className="ws-kpi-value blue" />
              </div>
              <div className="ws-kpi">
                <span className="ws-kpi-label" />
                <span className="ws-kpi-value green" />
              </div>
              <div className="ws-kpi">
                <span className="ws-kpi-label" />
                <span className="ws-kpi-value purple" />
              </div>
            </div>

            <div className="ws-chart">
              <div className="ws-chart-head">
                <span className="ws-live">
                  <span className="ws-live-dot" /> Live
                </span>
              </div>
              <svg viewBox="0 0 300 110" preserveAspectRatio="none" className="ws-chart-svg">
                <defs>
                  <linearGradient id="wsArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g className="ws-grid">
                  <line x1="0" y1="27" x2="300" y2="27" />
                  <line x1="0" y1="55" x2="300" y2="55" />
                  <line x1="0" y1="83" x2="300" y2="83" />
                </g>
                <path
                  className="ws-area"
                  d="M0,85 C25,80 40,60 65,64 C90,68 105,40 130,44 C155,48 170,70 195,58 C220,46 235,22 260,26 C280,29 290,18 300,14 L300,110 L0,110 Z"
                  fill="url(#wsArea)"
                />
                <path
                  className="ws-line"
                  d="M0,85 C25,80 40,60 65,64 C90,68 105,40 130,44 C155,48 170,70 195,58 C220,46 235,22 260,26 C280,29 290,18 300,14"
                />
                <path
                  className="ws-line secondary"
                  d="M0,96 C30,92 50,86 80,88 C110,90 130,76 160,78 C190,80 210,70 240,66 C265,63 285,60 300,56"
                />
              </svg>
            </div>

            <div className="ws-rows">
              <span className="ws-row" />
              <span className="ws-row" />
              <span className="ws-row" />
            </div>
          </div>
        </div>
      </div>

      <div className="ws-card ws-design-system">
        <p className="ws-card-title">Design System</p>
        <div className="ws-swatches">
          <span style={{ background: "#3b82f6" }} />
          <span style={{ background: "#8b5cf6" }} />
          <span style={{ background: "#10b981" }} />
          <span style={{ background: "#f59e0b" }} />
          <span style={{ background: "#e2e8f0" }} />
        </div>
        <div className="ws-components">
          <span className="ws-btn">Button</span>
          <span className="ws-badge">Badge</span>
        </div>
        <span className="ws-input">
          <span className="ws-caret" />
        </span>
      </div>

      <div className="ws-card ws-code">
        <code>
          <span className="tk-tag">&lt;Button</span>
          <br />
          &nbsp;&nbsp;<span className="tk-attr">variant</span>=<span className="tk-str">"primary"</span>
          <br />
          &nbsp;&nbsp;<span className="tk-attr">size</span>=<span className="tk-str">"lg"</span>
          <br />
          <span className="tk-tag">/&gt;</span>
        </code>
      </div>

      <div className="ws-chip ws-chip-react">React</div>
      <div className="ws-chip ws-chip-ts">TypeScript</div>
      <div className="ws-chip ws-chip-next">Next.js</div>
    </div>
  );
}

export default AnimatedIllustration;
