import "./portfolio-cafe.css";

/* ── Nav transparency on scroll ─────────────────────────── */
const pcNav = document.getElementById("pc-nav");
if (pcNav) {
  const onScroll = () => {
    pcNav.classList.toggle("pc-nav--scrolled", window.scrollY > 60);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ── Menu tab switching ──────────────────────────────────── */
const tabs = document.querySelectorAll(".pc-tab");
const panels = document.querySelectorAll(".pc-menu-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((t) => {
      t.classList.remove("pc-tab--active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("pc-tab--active");
    tab.setAttribute("aria-selected", "true");

    panels.forEach((panel) => {
      if (panel.id === `tab-${target}`) {
        panel.removeAttribute("hidden");
        panel.classList.add("pc-menu-panel--active");
      } else {
        panel.setAttribute("hidden", "");
        panel.classList.remove("pc-menu-panel--active");
      }
    });
  });
});

/* ── Fade-in on scroll ───────────────────────────────────── */
const fadeEls = document.querySelectorAll(
  ".pc-menu-card, .pc-stat, .pc-visit-block, .pc-gallery-cell"
);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  fadeEls.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    io.observe(el);
  });
}
