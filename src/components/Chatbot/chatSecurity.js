// Defensive helpers for the chatbot. The bot runs entirely in the visitor's
// browser (nothing is sent to a server), so the goals are: never render
// untrusted markup or links, keep the page responsive under spam or huge
// pastes, and survive tampered sessionStorage.

import { DETAIL_IDS } from "./chatKnowledge";

export const MAX_MESSAGE_LENGTH = 300;
export const MAX_HISTORY = 40;

// Rate limit: at most RATE_MAX messages per RATE_WINDOW_MS, plus a small gap
const RATE_MAX = 8;
const RATE_WINDOW_MS = 30 * 1000;
const MIN_GAP_MS = 700;

// Control chars, zero-width chars and bidi overrides that can spoof or break text
// eslint-disable-next-line no-control-regex
const UNSAFE_CHARS = /[\u0000-\u0008\u000B-\u001F\u007F​-‏‪-‮⁦-⁩﻿]/g;

export function sanitizeInput(raw) {
  if (typeof raw !== "string") return "";
  return raw
    .slice(0, MAX_MESSAGE_LENGTH * 2) // cheap cap before any regex work
    .replace(UNSAFE_CHARS, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_MESSAGE_LENGTH);
}

// Only internal routes, http(s), mailto or the bundled CV download are allowed
export function isSafeLink(link) {
  if (!link || typeof link !== "object" || !link.label || typeof link.label !== "object") return false;
  if (link.download === true) return true;
  if (typeof link.to === "string") return /^\/(?!\/)[\w\-/?=&%.#]*$/.test(link.to);
  if (typeof link.href === "string") return /^(https:\/\/|http:\/\/|mailto:)/i.test(link.href);
  return false;
}

const asText = (value, max = 2000) => (typeof value === "string" ? value.slice(0, max) : "");

// Rebuild stored messages field by field so tampered storage can't inject
// unexpected shapes, scripts or links into the UI
export function sanitizeHistory(saved) {
  if (!Array.isArray(saved)) return null;
  const clean = saved
    .slice(-MAX_HISTORY)
    .filter((m) => m && (m.from === "bot" || m.from === "user") && typeof m.text === "string")
    .map((m) => ({
      from: m.from,
      lang: m.lang === "ar" ? "ar" : "en",
      text: asText(m.text),
      list: Array.isArray(m.list) ? m.list.filter((i) => typeof i === "string").slice(0, 20).map((i) => asText(i, 300)) : null,
      links: Array.isArray(m.links)
        ? m.links.filter(isSafeLink).slice(0, 4).map((l) => ({
            ...(l.download ? { download: true } : {}),
            ...(l.to ? { to: l.to } : {}),
            ...(DETAIL_IDS.includes(l.detail) ? { detail: l.detail } : {}),
            ...(typeof l.param === "string" && /^[a-z-]{1,40}$/.test(l.param) ? { param: l.param } : {}),
            ...(l.href ? { href: l.href } : {}),
            label: { en: asText(l.label.en, 60), ar: asText(l.label.ar, 60) },
          }))
        : null,
      note: asText(m.note, 300) || null,
      suggestions: m.suggestions === true,
    }));
  return clean.length ? clean : null;
}

// Simple sliding-window limiter kept in memory for the session
export function createRateLimiter() {
  let stamps = [];
  return function check(now = Date.now()) {
    stamps = stamps.filter((t) => now - t < RATE_WINDOW_MS);
    const last = stamps[stamps.length - 1];
    if (last && now - last < MIN_GAP_MS) return { ok: false, wait: MIN_GAP_MS - (now - last) };
    if (stamps.length >= RATE_MAX) return { ok: false, wait: RATE_WINDOW_MS - (now - stamps[0]) };
    stamps.push(now);
    return { ok: true, wait: 0 };
  };
}
