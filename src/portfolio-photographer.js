import "./portfolio-photographer.css";

// ─── Intersection Observer — fade-in on scroll ───────────────────────────────
const fadeEls = document.querySelectorAll(
  ".ph-about-inner, .ph-work-item, .ph-testi-card, .ph-exp-item, .ph-service-item, .ph-gallery-cell"
);

fadeEls.forEach((el) => el.classList.add("ph-fade-in"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add("is-visible"));
}

// ─── Work list — stagger fade-in ─────────────────────────────────────────────
const workItems = document.querySelectorAll(".ph-work-item");
workItems.forEach((item, i) => {
  item.style.transitionDelay = `${i * 80}ms`;
});
