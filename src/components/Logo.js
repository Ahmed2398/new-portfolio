import React from "react";

// Brand mark: two interlocking "A" strokes (Ahmed Ashraf) sharing one crossbar,
// on a blue→violet badge. The same shape is used for the favicon (public/logo.svg).
export function LogoMark({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="logoBadge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="logoShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#logoBadge)" />
      <rect width="48" height="48" rx="13" fill="url(#logoShine)" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.6">
        <path d="M9 36 L19 13 L29 36" stroke="#ffffff" />
        <path d="M19 36 L29 13 L39 36" stroke="#ffffff" strokeOpacity="0.55" />
        <path d="M13.5 28 H34.5" stroke="#67e8f9" />
      </g>
    </svg>
  );
}

function Logo() {
  return (
    <span className="brand">
      <LogoMark className="brand-mark" />
      <span className="brand-text">
        <span className="brand-name">
          Ahmed <span className="brand-name-accent">Ashraf</span>
        </span>
        <span className="brand-role">Software Engineer</span>
      </span>
    </span>
  );
}

export default Logo;
