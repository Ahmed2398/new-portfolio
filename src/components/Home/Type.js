import React from "react";
import Typewriter from "typewriter-effect";
import { useLang } from "../../i18n/LanguageContext";

const phrases = {
  en: ["FinTech platforms", "RegTech & compliance", "real-time dashboards", "SaaS products", "team leadership"],
  ar: ["منصات التقنية المالية", "أنظمة الامتثال", "لوحات البيانات اللحظية", "منتجات الـ SaaS", "قيادة الفرق"],
};

function Type() {
  const { lang } = useLang();
  return (
    <Typewriter
      key={lang}
      options={{
        strings: phrases[lang],
        autoStart: true,
        loop: true,
        delay: 55,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
