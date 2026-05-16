/**
 * Shared navigation module.
 * @param {string} base - Path prefix for nav hrefs ("" for root, "index.html" for sub-pages).
 */
export function initNav(base = "") {
  const nav = document.querySelector("nav");
  if (!nav) return;

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="${base || "index.html"}" class="logo-container">
        <div class="logo-dot"></div>
        <span class="logo-name">Web4SME</span>
      </a>
      <div class="nav-menu" id="nav-menu">
        <a href="${base ? base + "#work" : "#work"}">Work</a>
        <a href="${base ? base + "#pricing" : "#pricing"}">Pricing</a>
        <a href="${base ? base + "#contact" : "#contact"}">Contact</a>
        <a href="about.html">About</a>
      </div>
      <button class="mobile-menu-toggle" type="button" aria-expanded="false" aria-controls="nav-menu"
        aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="lang-switcher">
        <button data-lang-btn="en" onclick="window.setLanguage('en')">EN</button>
        <button data-lang-btn="th" onclick="window.setLanguage('th')">ไทย</button>
      </div>
      <a class="btn btn-nav nav-cta" href="${base ? base + "#contact" : "#contact"}">Start a project</a>
    </div>
  `;

  const toggle = nav.querySelector(".mobile-menu-toggle");
  const menu = nav.querySelector(".nav-menu");
  const mq = window.matchMedia("(max-width: 720px)");

  function closeMobileMenu() {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mq.matches) closeMobileMenu();
    });
  });

  mq.addEventListener("change", (e) => {
    if (!e.matches) closeMobileMenu();
  });
}
