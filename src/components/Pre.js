import React, { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import "./Pre.css";

// Branded preloader: the "AA" mark draws itself, then the screen fades out
// once `load` turns false. Stays mounted for the exit transition only.
function Pre({ load }) {
  const [visible, setVisible] = useState(true);
  const { t } = useLang();

  useEffect(() => {
    if (load) return undefined;
    const timer = setTimeout(() => setVisible(false), 600);
    return () => clearTimeout(timer);
  }, [load]);

  if (!visible) return null;

  return (
    <div className={`preloader ${load ? "" : "is-done"}`} role="status" aria-live="polite">
      <div className="pl-grid" aria-hidden="true" />
      <div className="pl-glow" aria-hidden="true" />

      <div className="pl-center">
        <div className="pl-mark">
          <svg viewBox="0 0 48 48" width="96" height="96" aria-hidden="true">
            <defs>
              <linearGradient id="plBadge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <rect className="pl-badge" width="48" height="48" rx="13" fill="url(#plBadge)" />
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.6">
              <path className="pl-stroke s1" d="M9 36 L19 13 L29 36" stroke="#ffffff" />
              <path className="pl-stroke s2" d="M19 36 L29 13 L39 36" stroke="#ffffff" strokeOpacity="0.55" />
              <path className="pl-stroke s3" d="M13.5 28 H34.5" stroke="#67e8f9" />
            </g>
          </svg>
          <span className="pl-ring" aria-hidden="true" />
        </div>

        <p className="pl-name">
          {t("Ahmed", "أحمد")} <span>{t("Ashraf", "أشرف")}</span>
        </p>
        <p className="pl-role">{t("Software Engineer", "مهندس برمجيات")}</p>

        <div className="pl-progress" aria-hidden="true">
          <span />
        </div>
        <span className="sr-only">{t("Loading…", "جاري التحميل…")}</span>
      </div>
    </div>
  );
}

export default Pre;
