import React from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ProjectImage from "./ProjectImage";
import { categoryAr } from "./ProjectsData.ar";
import { useLang } from "../../i18n/LanguageContext";

function ProjectModal({ show, handleClose, project }) {
  const { t, pick, isAr } = useLang();
  if (!project) return null;
  const { title, description, fullDescription, techStack = [], demoLink, category, imgPath, role, features = [] } =
    pick(project);
  const paragraphs = (fullDescription || "").split("\n").filter((line) => line.trim());

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="pp-modal" scrollable>
      <div className="pp-modal-media">
        <ProjectImage src={imgPath} title={title} />
        <button type="button" className="pp-modal-close" onClick={handleClose} aria-label={t("Close", "قفل")}>
          <FaTimes />
        </button>
      </div>

      <Modal.Body className="pp-modal-body">
        <span className="pp-eyebrow">{t(category, categoryAr[category])}</span>
        <h2 className="pp-modal-title">{title}</h2>
        {role && <p className="pp-role">{role}</p>}

        <div className="pp-tags">
          {techStack.map((tech) => (
            <span key={tech} className="pp-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* In Arabic: the translated summary, then the full English case study */}
        {isAr && <p className="pp-modal-summary">{description}</p>}
        {isAr && paragraphs.length > 0 && (
          <span className="pp-modal-en-note">التفاصيل الكاملة (بالإنجليزي):</span>
        )}
        <div className="pp-modal-desc" dir={isAr ? "ltr" : undefined}>
          {paragraphs.length ? (
            paragraphs.map((line, index) => <p key={index}>{line}</p>)
          ) : (
            <p>{t("No detailed description available.", "مفيش تفاصيل إضافية.")}</p>
          )}
        </div>

        {features.length > 0 && (
          <section className="pp-features">
            <h3 className="pp-features-title">{t("Product features", "خصائص المنتج")}</h3>
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
            {t("Visit live site", "زيارة الموقع")} <BsBoxArrowUpRight />
          </a>
        </div>
      )}
    </Modal>
  );
}

export default ProjectModal;
