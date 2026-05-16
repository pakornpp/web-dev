import "./styles.css";
import { initLanguage, setLanguage } from "./i18n.js";
import { initNav } from "./nav.js";
import { initFooter } from "./footer.js";

// Expose setLanguage globally for lang-switcher button onclick handlers
window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");
initLanguage();
