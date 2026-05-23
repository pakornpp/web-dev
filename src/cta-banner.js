/**
 * Shared CTA banner module.
 * Mount point: <section data-component="cta-banner">
 */
export function initCtaBanner() {
  const el = document.querySelector("[data-component='cta-banner']");
  if (!el) return;

  el.innerHTML = `
    <div class="container">
      <div class="cta-inner">
        <h2 class="cta-title" data-i18n="cta.title">พร้อมสร้างเว็บไซต์หรือยัง?</h2>
        <a class="btn btn-accent" href="contact.html" data-i18n="cta.button">ติดต่อเรา →</a>
      </div>
    </div>
  `;
}
