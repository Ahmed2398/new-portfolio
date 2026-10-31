import React, { useState } from "react";

// Project screenshot with a branded fallback when the image is missing or fails
function ProjectImage({ src, title, className = "" }) {
  const [failed, setFailed] = useState(!src);
  const initials = title
    .split(/[\s–:-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  if (failed) {
    return (
      <div className={`pp-img-fallback ${className}`} role="img" aria-label={title}>
        <span className="pp-img-initials">{initials}</span>
        <span className="pp-img-name">{title.split(/[–:]/)[0].trim()}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${title} screenshot`}
      className={`pp-img ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default ProjectImage;
