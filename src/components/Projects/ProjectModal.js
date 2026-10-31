import React from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ProjectImage from "./ProjectImage";

function ProjectModal({ show, handleClose, project }) {
  if (!project) return null;
  const { title, fullDescription, techStack = [], demoLink, category, imgPath, role, features = [] } = project;
  const paragraphs = (fullDescription || "").split("\n").filter((line) => line.trim());

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="pp-modal" scrollable>
      <div className="pp-modal-media">
        <ProjectImage src={imgPath} title={title} />
        <button type="button" className="pp-modal-close" onClick={handleClose} aria-label="Close">
          <FaTimes />
        </button>
      </div>

      <Modal.Body className="pp-modal-body">
        <span className="pp-eyebrow">{category}</span>
        <h2 className="pp-modal-title">{title}</h2>
        {role && <p className="pp-role">{role}</p>}

        <div className="pp-tags">
          {techStack.map((tech) => (
            <span key={tech} className="pp-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="pp-modal-desc">
          {paragraphs.length ? (
            paragraphs.map((line, index) => <p key={index}>{line}</p>)
          ) : (
            <p>No detailed description available.</p>
          )}
        </div>

        {features.length > 0 && (
          <section className="pp-features">
            <h3 className="pp-features-title">Product features</h3>
            <ul className="pp-features-grid">
              {features.map((feature) => (
                <li key={feature.title} className="pp-feature-item">
                  <strong>{feature.title}</strong>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Modal.Body>

      {demoLink && (
        <div className="pp-modal-footer">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="pp-live-btn">
            Visit live site <BsBoxArrowUpRight />
          </a>
        </div>
      )}
    </Modal>
  );
}

export default ProjectModal;
