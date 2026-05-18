import "./portfolio-luxe-watch.css";
import { initPortfolioRibbon } from "./portfolio-ribbon.js";

initPortfolioRibbon(document.getElementById("portfolio-ribbon"));

/* ── Live clock hands ──────────────────────────────────────── */
function tickClock() {
  const now = new Date();
  const s = now.getSeconds();
  const m = now.getMinutes() + s / 60;
  const h = (now.getHours() % 12) + m / 60;

  const hourHand = document.getElementById("lw-hand-hour");
  const minHand = document.getElementById("lw-hand-minute");
  const secHand = document.getElementById("lw-hand-second");

  if (hourHand) hourHand.style.setProperty("--deg", `${h * 30}deg`);
  if (minHand) minHand.style.setProperty("--deg", `${m * 6}deg`);
  if (secHand) secHand.style.setProperty("--deg", `${s * 6}deg`);
}

tickClock();
setInterval(tickClock, 1000);

/* ── Parallax band ─────────────────────────────────────────── */
const parallaxBg = document.getElementById("lw-parallax-bg");
if (parallaxBg) {
  window.addEventListener("scroll", () => {
    const section = parallaxBg.closest(".lw-parallax-band");
    const rect = section.getBoundingClientRect();
    const progress = -rect.top / (rect.height + window.innerHeight);
    parallaxBg.style.transform = `translateY(${progress * 80}px)`;
  }, { passive: true });
}

/* ── Product card parallax ─────────────────────────────────── */
const parallaxCards = document.querySelectorAll("[data-parallax]");
if (parallaxCards.length) {
  window.addEventListener("scroll", () => {
    parallaxCards.forEach((el) => {
      const factor = parseFloat(el.dataset.parallax);
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${center * factor}px)`;
    });
  }, { passive: true });
}

/* ── Nav transparency on scroll ────────────────────────────── */
const lwNav = document.getElementById("lw-nav");
if (lwNav) {
  const onScroll = () => {
    lwNav.classList.toggle("lw-nav--scrolled", window.scrollY > 80);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ── Rotating gears ─────────────────────────────────────────── */
const gear1 = document.getElementById("lw-gear-1");
const gear2 = document.getElementById("lw-gear-2");
const gear3 = document.getElementById("lw-gear-3");

let gearAngle = 0;
function animateGears() {
  gearAngle += 0.15;
  if (gear1) gear1.style.transform = `rotate(${gearAngle}deg)`;
  if (gear2) gear2.style.transform = `rotate(${-gearAngle * 1.6}deg)`;
  if (gear3) gear3.style.transform = `rotate(${gearAngle * 2.8}deg)`;
  requestAnimationFrame(animateGears);
}
animateGears();
