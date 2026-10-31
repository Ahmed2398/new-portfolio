import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

// Lightweight i18n: English / Egyptian Arabic. Components call
// `t("English text", "النص العربي")`; data files carry an `ar` copy and use
// `pick(item)` to read the right fields.
const STORAGE_KEY = "site-lang";
const LanguageContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch (err) {
    // storage unavailable — fall back to the browser language
  }
  return typeof navigator !== "undefined" && /^ar\b/i.test(navigator.language || "") ? "ar" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      // ignore
    }
  }, [lang]);

  const setLang = useCallback((next) => setLangState(next === "ar" ? "ar" : "en"), []);
  const toggle = useCallback(() => setLangState((l) => (l === "ar" ? "en" : "ar")), []);

  const value = useMemo(() => {
    const isAr = lang === "ar";
    return {
      lang,
      isAr,
      dir: isAr ? "rtl" : "ltr",
      setLang,
      toggle,
      t: (en, ar) => (isAr && ar !== undefined ? ar : en),
      // Merge an item's `ar` overrides on top of the English fields
      pick: (item) => (isAr && item && item.ar ? { ...item, ...item.ar } : item),
    };
  }, [lang, setLang, toggle]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
