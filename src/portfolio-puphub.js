import "./portfolio-puphub.css";
import { initPortfolioRibbon } from "./portfolio-ribbon.js";

initPortfolioRibbon(document.getElementById("portfolio-ribbon"));

/* ── Nav scroll shadow ──────────────────────────────────── */
const ppNav = document.getElementById("pp-nav");
if (ppNav) {
  const onScroll = () => {
    ppNav.classList.toggle("pp-nav--scrolled", window.scrollY > 30);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
