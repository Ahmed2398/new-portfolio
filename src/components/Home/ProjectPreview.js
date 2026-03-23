import React from "react";
import { Card } from "react-bootstrap";

function ProjectPreview() {
  return (
    <div className="project-preview-container">
      <Card className="preview-card">
        <div className="preview-header">
          <div className="preview-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="preview-title">Dashboard.tsx</div>
        </div>
        <Card.Body className="preview-body">
          <div className="code-preview">
            <div className="code-line">
              <span className="code-keyword">import</span>{" "}
              <span className="code-text">&#123; useState, useEffect &#125;</span>{" "}
              <span className="code-keyword">from</span>{" "}
              <span className="code-string">'react'</span>
            </div>
            <div className="code-line">
              <span className="code-keyword">import</span>{" "}
              <span className="code-text">&#123; useQuery &#125;</span>{" "}
              <span className="code-keyword">from</span>{" "}
              <span className="code-string">'react-query'</span>
            </div>
            <div className="code-line empty"></div>
            <div className="code-line">
              <span className="code-keyword">const</span>{" "}
              <span className="code-function">Dashboard</span> ={" "}
              <span className="code-text">() =&gt; &#123;</span>
            </div>
            <div className="code-line indent">
              <span className="code-keyword">const</span> &#123;{" "}
              <span className="code-text">data, isLoading</span> &#125; ={" "}
              <span className="code-function">useQuery</span>
              <span className="code-text">()</span>
            </div>
            <div className="code-line indent"></div>
            <div className="code-line indent">
              <span className="code-keyword">return</span>{" "}
              <span className="code-text">&lt;Analytics data=&#123;data&#125; /&gt;</span>
            </div>
            <div className="code-line">
              <span className="code-text">&#125;</span>
            </div>
          </div>
          
          <div className="preview-stats">
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-value">+35%</div>
                <div className="stat-label">Performance</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🚀</div>
              <div className="stat-content">
                <div className="stat-value">12+</div>
                <div className="stat-label">Projects</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🌐</div>
              <div className="stat-content">
                <div className="stat-value">20+</div>
                <div className="stat-label">APIs</div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      
      <div className="floating-badge badge-1">React</div>
      <div className="floating-badge badge-2">TypeScript</div>
      <div className="floating-badge badge-3">Next.js</div>
    </div>
  );
}

export default ProjectPreview;
