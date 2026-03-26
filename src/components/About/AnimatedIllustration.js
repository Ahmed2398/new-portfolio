import React from "react";

function AnimatedIllustration() {
  return (
    <div className="animated-illustration-container">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="animated-svg"
      >
        {/* Background with gradient mesh */}
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="40%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.15)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(15, 23, 42, 0.3)" />
          </radialGradient>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>
        <rect width="500" height="500" fill="url(#bgGradient)" />

        {/* Animated background particles */}
        <g className="bg-particles">
          <circle cx="100" cy="100" r="2" fill="#8b5cf6" opacity="0.6" className="float-particle" />
          <circle cx="400" cy="150" r="1.5" fill="#3b82f6" opacity="0.5" className="float-particle" />
          <circle cx="150" cy="400" r="2" fill="#06b6d4" opacity="0.6" className="float-particle" />
          <circle cx="350" cy="380" r="1.5" fill="#8b5cf6" opacity="0.5" className="float-particle" />
          <circle cx="80" cy="250" r="1.8" fill="#3b82f6" opacity="0.4" className="float-particle" />
          <circle cx="420" cy="280" r="1.8" fill="#06b6d4" opacity="0.4" className="float-particle" />
        </g>

        {/* Central developer hub with enhanced design */}
        <g className="developer-hub">
          {/* Outer glow ring */}
          <circle cx="250" cy="200" r="55" fill="none" stroke="url(#techGradient)" strokeWidth="2" opacity="0.3" filter="url(#glow)" />
          
          {/* Main circle */}
          <circle cx="250" cy="200" r="45" fill="rgba(30, 41, 59, 0.95)" stroke="url(#techGradient)" strokeWidth="3" filter="url(#glow)" />
          
          {/* Inner decoration */}
          <circle cx="250" cy="200" r="38" fill="none" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" />
          
          {/* Developer icon */}
          <text x="250" y="190" fontSize="28" fill="url(#techGradient)" textAnchor="middle" filter="url(#glow)">👨‍💻</text>
          <text x="250" y="215" fontSize="11" fill="#a78bfa" fontWeight="700" textAnchor="middle">FULL-STACK</text>
          <text x="250" y="228" fontSize="8" fill="#60a5fa" textAnchor="middle">ENGINEER</text>
        </g>

        {/* Enhanced industry nodes with better visual appeal */}
        <g className="industry-cluster">
          {/* FinTech - Premium node */}
          <g className="industry-node premium-node">
            <circle cx="250" cy="70" r="35" fill="rgba(34, 211, 102, 0.2)" stroke="#25d366" strokeWidth="2.5" />
            <circle cx="250" cy="70" r="28" fill="rgba(34, 211, 102, 0.1)" stroke="#25d366" strokeWidth="1" />
            <text x="250" y="65" fontSize="20" fill="#25d366" textAnchor="middle">💰</text>
            <text x="250" y="80" fontSize="10" fill="#25d366" fontWeight="700" textAnchor="middle">FINTECH</text>
            <circle cx="250" cy="70" r="4" fill="#25d366" className="pulse-dot" />
          </g>

          {/* E-commerce - Premium node */}
          <g className="industry-node premium-node">
            <circle cx="400" cy="200" r="35" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2.5" />
            <circle cx="400" cy="200" r="28" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" />
            <text x="400" y="195" fontSize="20" fill="#3b82f6" textAnchor="middle">🛒</text>
            <text x="400" y="210" fontSize="10" fill="#3b82f6" fontWeight="700" textAnchor="middle">E-COMMERCE</text>
            <circle cx="400" cy="200" r="4" fill="#3b82f6" className="pulse-dot" />
          </g>

          {/* ERP - Premium node */}
          <g className="industry-node premium-node">
            <circle cx="100" cy="200" r="35" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2.5" />
            <circle cx="100" cy="200" r="28" fill="rgba(168, 85, 247, 0.1)" stroke="#a855f7" strokeWidth="1" />
            <text x="100" y="195" fontSize="20" fill="#a855f7" textAnchor="middle">📊</text>
            <text x="100" y="210" fontSize="10" fill="#a855f7" fontWeight="700" textAnchor="middle">ERP</text>
            <circle cx="100" cy="200" r="4" fill="#a855f7" className="pulse-dot" />
          </g>

          {/* Healthcare - Premium node */}
          <g className="industry-node premium-node">
            <circle cx="250" cy="330" r="35" fill="rgba(236, 72, 153, 0.2)" stroke="#ec4899" strokeWidth="2.5" />
            <circle cx="250" cy="330" r="28" fill="rgba(236, 72, 153, 0.1)" stroke="#ec4899" strokeWidth="1" />
            <text x="250" y="325" fontSize="20" fill="#ec4899" textAnchor="middle">🏥</text>
            <text x="250" y="340" fontSize="10" fill="#ec4899" fontWeight="700" textAnchor="middle">HEALTHCARE</text>
            <circle cx="250" cy="330" r="4" fill="#ec4899" className="pulse-dot" />
          </g>
        </g>

        {/* Enhanced connection lines with gradient */}
        <g className="enhanced-connections">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#25d366" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          
          {/* Core connections with gradients */}
          <line x1="250" y1="155" x2="250" y2="105" stroke="url(#lineGradient1)" strokeWidth="3" opacity="0.7" className="connection-line" />
          <line x1="295" y1="200" x2="365" y2="200" stroke="#3b82f6" strokeWidth="3" opacity="0.7" className="connection-line" />
          <line x1="205" y1="200" x2="135" y2="200" stroke="#a855f7" strokeWidth="3" opacity="0.7" className="connection-line" />
          <line x1="250" y1="245" x2="250" y2="295" stroke="url(#lineGradient2)" strokeWidth="3" opacity="0.7" className="connection-line" />
          
          {/* Curved interconnections */}
          <path d="M 280 90 Q 350 140 370 170" stroke="#25d366" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4,2" />
          <path d="M 130 170 Q 140 140 220 90" stroke="#a855f7" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4,2" />
          <path d="M 130 230 Q 140 270 220 310" stroke="#a855f7" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4,2" />
          <path d="M 370 230 Q 360 270 280 310" stroke="#ec4899" strokeWidth="2" opacity="0.4" fill="none" strokeDasharray="4,2" />
        </g>

        {/* Enhanced tech satellites with better styling */}
        <g className="tech-cluster">
          <g className="tech-satellite enhanced-sat">
            <circle cx="320" cy="110" r="22" fill="rgba(97, 218, 251, 0.25)" stroke="#61dafb" strokeWidth="2" />
            <circle cx="320" cy="110" r="16" fill="rgba(97, 218, 251, 0.15)" />
            <text x="320" y="115" fontSize="14" fill="#61dafb" fontWeight="bold" textAnchor="middle">⚛</text>
          </g>

          <g className="tech-satellite enhanced-sat">
            <circle cx="180" cy="110" r="22" fill="rgba(65, 184, 131, 0.25)" stroke="#41b883" strokeWidth="2" />
            <circle cx="180" cy="110" r="16" fill="rgba(65, 184, 131, 0.15)" />
            <text x="180" y="115" fontSize="14" fill="#41b883" fontWeight="bold" textAnchor="middle">V</text>
          </g>

          <g className="tech-satellite enhanced-sat">
            <circle cx="320" cy="290" r="22" fill="rgba(131, 84, 163, 0.25)" stroke="#8354c3" strokeWidth="2" />
            <circle cx="320" cy="290" r="16" fill="rgba(131, 84, 163, 0.15)" />
            <text x="320" y="295" fontSize="14" fill="#8354c3" fontWeight="bold" textAnchor="middle">N</text>
          </g>

          <g className="tech-satellite enhanced-sat">
            <circle cx="180" cy="290" r="22" fill="rgba(255, 71, 87, 0.25)" stroke="#ff4757" strokeWidth="2" />
            <circle cx="180" cy="290" r="16" fill="rgba(255, 71, 87, 0.15)" />
            <text x="180" y="295" fontSize="14" fill="#ff4757" fontWeight="bold" textAnchor="middle">L</text>
          </g>
        </g>

        {/* Enhanced data flow with more particles */}
        <g className="enhanced-data-flow">
          <circle cx="250" cy="125" r="3" fill="#25d366" className="flow-particle" />
          <circle cx="360" cy="200" r="3" fill="#3b82f6" className="flow-particle" />
          <circle cx="140" cy="200" r="3" fill="#a855f7" className="flow-particle" />
          <circle cx="250" cy="275" r="3" fill="#ec4899" className="flow-particle" />
          <circle cx="310" cy="140" r="2" fill="#61dafb" className="flow-particle" />
          <circle cx="190" cy="140" r="2" fill="#41b883" className="flow-particle" />
          <circle cx="310" cy="260" r="2" fill="#8354c3" className="flow-particle" />
          <circle cx="190" cy="260" r="2" fill="#ff4757" className="flow-particle" />
          <circle cx="290" cy="200" r="2" fill="#3b82f6" className="flow-particle" />
          <circle cx="210" cy="200" r="2" fill="#a855f7" className="flow-particle" />
        </g>

        {/* Decorative outer ring with animation */}
        <g className="decorative-ring">
          <circle cx="250" cy="200" r="160" fill="none" stroke="url(#techGradient)" strokeWidth="1" opacity="0.2" strokeDasharray="10,5" />
          <circle cx="250" cy="200" r="185" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1" strokeDasharray="5,10" />
        </g>

        {/* Corner decorations */}
        <g className="corner-decorations">
          <g transform="translate(50, 50)">
            <rect x="-6" y="-6" width="12" height="12" rx="3" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" className="rotate-decoration" />
          </g>
          <g transform="translate(450, 50)">
            <rect x="-6" y="-6" width="12" height="12" rx="3" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6" className="rotate-decoration" />
          </g>
          <g transform="translate(50, 350)">
            <rect x="-6" y="-6" width="12" height="12" rx="3" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.6" className="rotate-decoration" />
          </g>
          <g transform="translate(450, 350)">
            <rect x="-6" y="-6" width="12" height="12" rx="3" fill="none" stroke="#ec4899" strokeWidth="2" opacity="0.6" className="rotate-decoration" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default AnimatedIllustration;
