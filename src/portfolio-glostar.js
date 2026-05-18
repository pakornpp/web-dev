import "./portfolio-glostar.css";
import { initPortfolioRibbon } from "./portfolio-ribbon.js";

initPortfolioRibbon(document.getElementById("portfolio-ribbon"));

/* ── Announcement bar close ──────────────────────────────── */
const announceEl = document.getElementById("gs-announce");
const announceClose = document.getElementById("gs-announce-close");

if (announceClose && announceEl) {
  announceClose.addEventListener("click", () => {
    announceEl.classList.add("gs-announce--hidden");
  });
}

/* ── Nav scroll shadow ───────────────────────────────────── */
const navEl = document.getElementById("gs-nav");
if (navEl) {
  const onScroll = () =>
    navEl.classList.toggle("gs-nav--scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ── Mobile burger menu ──────────────────────────────────── */
const burgerBtn = document.getElementById("gs-burger");
const mobileMenu = document.getElementById("gs-mobile-menu");

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("gs-nav__mobile--open");
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });
}

/* ── Bag counter ─────────────────────────────────────────── */
let bagCount = 0;
const bagCountEl = document.getElementById("gs-bag-count");

const updateBagCount = () => {
  if (!bagCountEl) return;
  bagCountEl.textContent = String(bagCount);
  bagCountEl.dataset.zero = bagCount === 0 ? "true" : "false";
};

updateBagCount();

document.querySelectorAll(".gs-add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    bagCount += 1;
    updateBagCount();
    const orig = btn.textContent;
    btn.textContent = "added! ✦";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
    }, 1200);
  });
});

/* ── Product tab filter ──────────────────────────────────── */
const tabs = document.querySelectorAll(".gs-tab");
const cards = document.querySelectorAll(".gs-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("gs-tab--active"));
    tab.classList.add("gs-tab--active");

    const filter = tab.dataset.tab;
    cards.forEach((card) => {
      const cats = card.dataset.category || "";
      card.style.display =
        filter === "all" || cats.split(" ").includes(filter) ? "" : "none";
    });
  });
});

/* ── Newsletter form ─────────────────────────────────────── */
const nlForm = document.getElementById("gs-newsletter-form");
const nlMsg = document.getElementById("gs-nl-msg");

if (nlForm && nlMsg) {
  nlForm.addEventListener("submit", (e) => {
    e.preventDefault();
    nlMsg.textContent = "yay! ur officially part of the glostar fam ⭐";
    nlForm.reset();
  });
}
