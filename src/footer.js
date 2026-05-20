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
          <span class="logo-name">Web<span class="gradient-text">Express</span><sup>TH</sup></span>
        </a>
        <p class="footer-tagline" data-i18n="footer.tagline">ยกระดับธุรกิจของคุณบน โลกออนไลน์</p>
      </div>
      <p class="footer-copy">&copy; ${year} WebExpressTH. All rights reserved.</p>
    </div>
  `;
}
