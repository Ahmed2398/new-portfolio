import React from "react";

function AnimatedIllustration() {
  return (
    <div className="animated-illustration-container">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="animated-svg"
      >
        {/* Background circles */}
        <circle cx="250" cy="250" r="200" className="bg-circle-1" opacity="0.1" />
        <circle cx="250" cy="250" r="150" className="bg-circle-2" opacity="0.15" />
        <circle cx="250" cy="250" r="100" className="bg-circle-3" opacity="0.2" />

        {/* Central monitoring screen */}
        <g className="central-screen">
          <rect x="180" y="180" width="140" height="100" rx="8" fill="rgba(30, 41, 59, 0.9)" stroke="#3b82f6" strokeWidth="2" />
          
          {/* Code lines inside screen */}
          <line x1="195" y1="200" x2="275" y2="200" stroke="#60a5fa" strokeWidth="2" className="code-line-1" />
          <line x1="195" y1="215" x2="255" y2="215" stroke="#93c5fd" strokeWidth="2" className="code-line-2" />
          <line x1="195" y1="230" x2="285" y2="230" stroke="#60a5fa" strokeWidth="2" className="code-line-3" />
          <line x1="195" y1="245" x2="265" y2="245" stroke="#93c5fd" strokeWidth="2" className="code-line-4" />
          <line x1="195" y1="260" x2="290" y2="260" stroke="#60a5fa" strokeWidth="2" className="code-line-5" />
        </g>

        {/* Frontend badge - top left */}
        <g className="badge frontend-badge">
          <rect x="80" y="120" width="90" height="35" rx="17.5" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
          <text x="125" y="142" fontSize="12" fill="#60a5fa" fontWeight="600" textAnchor="middle">FRONTEND</text>
          <circle cx="95" cy="137.5" r="3" fill="#10b981" className="pulse-dot" />
        </g>

        {/* Backend badge - top right */}
        <g className="badge backend-badge">
          <rect x="330" y="120" width="90" height="35" rx="17.5" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
          <text x="375" y="142" fontSize="12" fill="#60a5fa" fontWeight="600" textAnchor="middle">BACKEND</text>
          <circle cx="405" cy="137.5" r="3" fill="#10b981" className="pulse-dot" />
        </g>

        {/* Database badge - bottom left */}
        <g className="badge database-badge">
          <rect x="70" y="345" width="100" height="35" rx="17.5" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
          <text x="120" y="367" fontSize="12" fill="#60a5fa" fontWeight="600" textAnchor="middle">DATABASE</text>
          <circle cx="85" cy="362.5" r="3" fill="#10b981" className="pulse-dot" />
        </g>

        {/* API badge - bottom right */}
        <g className="badge api-badge">
          <rect x="340" y="345" width="90" height="35" rx="17.5" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
          <text x="385" y="367" fontSize="12" fill="#60a5fa" fontWeight="600" textAnchor="middle">REST API</text>
          <circle cx="415" cy="362.5" r="3" fill="#10b981" className="pulse-dot" />
        </g>

        {/* Connecting lines/data flow */}
        <g className="data-flow">
          {/* Frontend to Center */}
          <path d="M 170 137 L 180 230" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="flow-line-1" fill="none" />
          
          {/* Backend to Center */}
          <path d="M 330 137 L 320 230" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="flow-line-2" fill="none" />
          
          {/* Center to Database */}
          <path d="M 180 280 L 170 345" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="flow-line-3" fill="none" />
          
          {/* Center to API */}
          <path d="M 320 280 L 340 345" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="flow-line-4" fill="none" />
        </g>

        {/* Floating particles/data points */}
        <circle cx="150" cy="250" r="4" fill="#60a5fa" className="particle particle-1" />
        <circle cx="350" cy="250" r="4" fill="#60a5fa" className="particle particle-2" />
        <circle cx="250" cy="150" r="4" fill="#60a5fa" className="particle particle-3" />
        <circle cx="250" cy="350" r="4" fill="#60a5fa" className="particle particle-4" />

        {/* Tech icons placeholders */}
        <g className="tech-icon tech-icon-1">
          <rect x="100" y="200" width="30" height="30" rx="5" fill="rgba(59, 130, 246, 0.3)" />
          <text x="115" y="220" fontSize="16" fill="#60a5fa" fontWeight="bold" textAnchor="middle">R</text>
        </g>

        <g className="tech-icon tech-icon-2">
          <rect x="370" y="200" width="30" height="30" rx="5" fill="rgba(59, 130, 246, 0.3)" />
          <text x="385" y="220" fontSize="16" fill="#60a5fa" fontWeight="bold" textAnchor="middle">N</text>
        </g>

        <g className="tech-icon tech-icon-3">
          <rect x="100" y="270" width="30" height="30" rx="5" fill="rgba(59, 130, 246, 0.3)" />
          <text x="115" y="290" fontSize="16" fill="#60a5fa" fontWeight="bold" textAnchor="middle">D</text>
        </g>

        <g className="tech-icon tech-icon-4">
          <rect x="370" y="270" width="30" height="30" rx="5" fill="rgba(59, 130, 246, 0.3)" />
          <text x="385" y="290" fontSize="16" fill="#60a5fa" fontWeight="bold" textAnchor="middle">A</text>
        </g>
      </svg>
    </div>
  );
}

export default AnimatedIllustration;
