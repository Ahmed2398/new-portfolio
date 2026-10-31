import React from "react";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";
import ProjectImage from "./ProjectImage";
import { categoryAr } from "./ProjectsData.ar";
import { useLang } from "../../i18n/LanguageContext";

const MAX_TAGS = 4;

function ProjectCards({ project, onOpen }) {
  const { t, pick } = useLang();
  const { title, description, techStack = [], demoLink, category, imgPath } = pick(project);
  const visibleTags = techStack.slice(0, MAX_TAGS);
  const hiddenCount = techStack.length - visibleTags.length;

  return (
    <article className="pp-card">
      <button type="button" className="pp-card-media" onClick={onOpen} aria-label={t(`Open ${title} details`, `افتح تفاصيل ${title}`)}>
        <ProjectImage src={imgPath} title={title} />
        <span className="pp-card-category">{t(category, categoryAr[category])}</span>
      </button>

      <div className="pp-card-body">
        <h3 className="pp-card-title">
          <button type="button" onClick={onOpen}>
            {title}
          </button>
        </h3>
        <p className="pp-card-desc">{description}</p>

        <div className="pp-tags">
          {visibleTags.map((tech) => (
            <span key={tech} className="pp-tag">
              {tech}
            </span>
          ))}
          {hiddenCount > 0 && <span className="pp-tag pp-tag-more">+{hiddenCount}</span>}
        </div>

        <div className="pp-card-actions">
          <button type="button" className="pp-link-btn" onClick={onOpen}>
            {t("Case study", "التفاصيل")} <BsArrowRight />
          </button>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="pp-live-btn">
              {t("Live site", "الموقع")} <BsBoxArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
