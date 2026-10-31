import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to the top on page change, or to the #section when the URL has a hash
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    // wait a tick so the new page has rendered its sections
    const timer = setTimeout(() => {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}

export default ScrollToTop;
