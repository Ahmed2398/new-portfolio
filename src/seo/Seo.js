import { useEffect } from "react";
import { useLang } from "../i18n/LanguageContext";

export const SITE_URL = "https://new-portfolio-seven-red.vercel.app";
const SITE_NAME = "Ahmed Ashraf";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href, hreflang) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-page SEO: title, description, canonical, hreflang, Open Graph / Twitter
 * and robots. English lives at /path, Arabic at /path?lang=ar.
 */
function Seo({ title, description, path = "/", noindex = false }) {
  const { lang, t } = useLang();
  const resolvedTitle = typeof title === "object" ? t(title.en, title.ar) : title;
  const resolvedDesc = typeof description === "object" ? t(description.en, description.ar) : description;

  useEffect(() => {
    // Add the site name unless the title already contains it
    const hasName = /Ahmed Ashraf|أحمد أشرف/.test(resolvedTitle);
    const fullTitle = hasName ? resolvedTitle : `${resolvedTitle} | ${t(SITE_NAME, "أحمد أشرف")}`;
    const enUrl = `${SITE_URL}${path}`;
    const arUrl = `${SITE_URL}${path}${path.includes("?") ? "&" : "?"}lang=ar`;
    const url = lang === "ar" ? arUrl : enUrl;

    document.title = fullTitle;
    setMeta("name", "description", resolvedDesc);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");

    setLink("canonical", url);
    setLink("alternate", enUrl, "en");
    setLink("alternate", arUrl, "ar");
    setLink("alternate", enUrl, "x-default");

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", resolvedDesc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("property", "og:locale", lang === "ar" ? "ar_EG" : "en_US");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", resolvedDesc);
  }, [resolvedTitle, resolvedDesc, path, noindex, lang, t]);

  return null;
}

export default Seo;
