import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiFolder, FiLayers, FiMail, FiArrowRight } from "react-icons/fi";
import { useLang } from "../../i18n/LanguageContext";
import "./NotFound.css";

const suggestions = [
  { to: "/project", label: "Projects", text: "See what I've built", ar: { label: "المشاريع", text: "شوف أنا بنيت إيه" }, icon: FiFolder },
  { to: "/services", label: "Services", text: "How I can help", ar: { label: "الخدمات", text: "إزاي أقدر أساعدك" }, icon: FiLayers },
  { to: "/contact", label: "Contact", text: "Start a conversation", ar: { label: "تواصل", text: "ابدأ محادثة" }, icon: FiMail },
];

function NotFound() {
  const { pathname } = useLocation();
  const { t, pick } = useLang();


  return (
    <main className="nf">
      <div className="nf-glow" aria-hidden="true" />

      <div className="nf-inner">
        <div className="nf-terminal" aria-hidden="true">
          <div className="nf-terminal-bar">
            <span className="red" />
            <span className="yellow" />
            <span className="green" />
            <em>~/portfolio</em>
          </div>
          <pre>
            <span className="nf-prompt">$</span> curl -I {window.location.host}
            <span className="nf-path">{pathname}</span>
            {"\n"}
            <span className="nf-status">HTTP/2 404</span> Not Found
            {"\n"}
            <span className="nf-comment"># this route doesn't exist (yet)</span>
            {"\n"}
            <span className="nf-prompt">$</span> <span className="nf-cursor" />
          </pre>
        </div>

        <h1 className="nf-code">
          4<span>0</span>4
        </h1>
        <h2 className="nf-title">{t("This page took a wrong turn", "الصفحة دي تاهت في السكة")}</h2>
        <p className="nf-text">
          {t(
            "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
            "الصفحة اللي بتدور عليها مش موجودة أو اتنقلت. تعالى نرجعك للطريق الصح."
          )}
        </p>

        <Link to="/" className="nf-home">
          <FiHome /> {t("Back to home", "ارجع للرئيسية")}
        </Link>

        <div className="nf-suggestions">
          {suggestions.map(pick).map(({ to, label, text, icon: Icon }) => (
            <Link key={to} to={to} className="nf-card">
              <span className="nf-card-icon">
                <Icon />
              </span>
              <span className="nf-card-text">
                <strong>{label}</strong>
                <span>{text}</span>
              </span>
              <FiArrowRight className="nf-card-arrow" />
            </Link>
          ))}
        </div>

        <p className="nf-hint">{t("Still lost? Ask the AI assistant in the corner 🤖", "لسه تايه؟ اسأل المساعد الذكي اللي في الركن 🤖")}</p>
      </div>
    </main>
  );
}

export default NotFound;
