import React from "react";
import { Card } from "react-bootstrap";
import { projectsData } from "../Projects/ProjectsData";
import { useLang } from "../../i18n/LanguageContext";

function ImpactStats() {
  const { t } = useLang();
  return (
    <div className="impact-stats-container">
      <div className="stats-grid">
        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">5+</div>
            <div className="stat-label">{t("Years Experience", "سنين خبرة")}</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">{projectsData.length}</div>
            <div className="stat-label">{t("Projects Delivered", "مشروع اتسلّم")}</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">5</div>
            <div className="stat-label">{t("Companies", "شركات")}</div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-number">4</div>
            <div className="stat-label">{t("Countries · KSA · UAE · KW · EG", "دول · السعودية · الإمارات · الكويت · مصر")}</div>
          </Card.Body>
        </Card>
      </div>

      <div className="side-card now-card">
        <span className="side-label">
          <span className="now-dot" /> {t("Currently", "حالياً")}
        </span>
        <p className="now-title">Senior Software Engineer @ EON Tech</p>
        <p className="now-text">
          {t("Leading a team of 6 on ", "بقود فريق من 6 مهندسين على ")}
          <strong>KYC360</strong>
          {t(
            " — a KYC/KYB & RegTech compliance platform with admin, tenant and investor apps.",
            " — منصة للتحقق من الهوية والامتثال (KYC/KYB) فيها تطبيقات للأدمن والعملاء والمستثمرين."
          )}
        </p>
      </div>

      <div className="side-card">
        <span className="side-label">{t("Industries", "المجالات")}</span>
        <div className="industry-chips">
          {t(
            ["FinTech", "RegTech", "HR Tech", "HealthTech", "Real Estate", "E-commerce"],
            ["التقنية المالية", "الامتثال", "الموارد البشرية", "التقنية الطبية", "العقارات", "التجارة الإلكترونية"]
          ).map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>

      <div className="side-card">
        <span className="side-label">{t("How I work", "طريقة شغلي")}</span>
        <ul className="principles">
          <li>{t("Understand the business before writing code", "أفهم البيزنس قبل ما أكتب كود")}</li>
          <li>{t("Build reusable systems, not one-off screens", "أبني أنظمة قابلة لإعادة الاستخدام، مش شاشات لمرة واحدة")}</li>
          <li>{t("Ship in small steps with regular demos", "أسلّم على خطوات صغيرة مع عروض منتظمة")}</li>
          <li>{t("Measure, then optimize", "أقيس الأول، وبعدين أحسّن")}</li>
        </ul>
      </div>
    </div>
  );
}

export default ImpactStats;
