import "./styles.css";
import { initLanguage, setLanguage } from "./i18n.js";
import { initNav } from "./nav.js";
import { initFooter } from "./footer.js";

// Expose setLanguage globally for lang-switcher button onclick handlers
window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");
initLanguage();

// ── Contact form ──────────────────────────────────────────
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name    = form.querySelector('[name="name"]').value.trim();
    const contact = form.querySelector('[name="contact"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !contact || !message) return;

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body    = encodeURIComponent(
      `Name: ${name}\nContact (email / LINE): ${contact}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@webexpressth.com?subject=${subject}&body=${body}`;

    form.querySelector(".contact-form-success").hidden = false;
    form.reset();
  });
}
