import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

// Dark is the default design; visitors can switch to light. The choice is
// stored per visitor and applied as <html data-theme="light|dark">.
const STORAGE_KEY = "site-theme";
const ThemeContext = createContext(null);

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (err) {
    // storage unavailable — use the default
  }
  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f1f5f9" : "#0f172a");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === "light" ? "dark" : "light")), []);
  const value = useMemo(() => ({ theme, isLight: theme === "light", toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
