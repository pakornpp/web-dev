/**
 * Shared footer module.
 * @param {string} base - Path to root index ("" for root, "index.html" for sub-pages).
 */
export function initFooter(base = "") {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="${base || "index.html"}" class="footer-logo-link">
          <div class="footer-logo-dot"></div>
          <span class="footer-logo-name">Web4SME</span>
        </a>
        <p class="footer-tagline" data-i18n="footer.tagline">Building the web's next great startups.</p>
      </div>
      <p class="footer-copy">&copy; ${year} Web4SME. All rights reserved.</p>
    </div>
  `;
}
