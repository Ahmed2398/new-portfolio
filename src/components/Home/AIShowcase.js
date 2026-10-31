import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { aiTools, aiValue } from "../../data/aiTools";
import { useLang } from "../../i18n/LanguageContext";
import "./AIShowcase.css";

export function AIToolCard({ tool: raw }) {
  const { pick } = useLang();
  const tool = pick(raw);
  return (
    <article className="ai-tool" style={{ "--tool-color": tool.color }}>
      <span className="ai-tool-mark" aria-hidden="true">
        {tool.mark}
      </span>
      <div>
        <h3>{tool.name}</h3>
        <span className="ai-tool-maker">{tool.maker}</span>
        <p>{tool.use}</p>
      </div>
    </article>
  );
}

function AIShowcase() {
  const { t, pick } = useLang();
  return (
    <section className="ai-section" id="ai">
      <div className="ai-inner">
        <div className="ai-head">
          <span className="ai-eyebrow">
            <HiSparkles aria-hidden="true" /> {t("AI-powered engineering", "هندسة برمجيات بالذكاء الاصطناعي")}
          </span>
          <h2 className="ai-title">
            {t("Senior judgment, ", "خبرة سينيور، ")}
            <span className="purple">{t("AI speed", "وسرعة الذكاء الاصطناعي")}</span>
          </h2>
          <p className="ai-sub">
            {t(
              "I use AI coding tools every day to plan, build, test and document faster — while I stay in charge of the architecture, the quality and every line that ships.",
              "بستخدم أدوات الذكاء الاصطناعي في البرمجة كل يوم علشان أخطط وأبني وأختبر وأوثّق أسرع — وأنا اللي متحكم في المعمارية والجودة وكل سطر بيتسلّم."
            )}
          </p>
        </div>

        <div className="ai-tools">
          {aiTools.map((tool) => (
            <AIToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="ai-value">
          {aiValue.map(pick).map(({ icon: Icon, title, text }) => (
            <div key={title} className="ai-value-item">
              <Icon aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/journey#jr-ai" className="ai-cta">
          {t("See how I use AI in my process", "شوف إزاي بستخدم الذكاء الاصطناعي في شغلي")} <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default AIShowcase;
