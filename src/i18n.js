const translations = {
  en: () => import("./locales/en.json"),
  th: () => import("./locales/th.json"),
};

const SUPPORTED_LANGS = Object.keys(translations);
let current = {};

/**
 * Load and apply a language. Falls back to "th" for unsupported codes.
 * Persists the choice in localStorage.
 */
export async function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = "th";

  const module = await translations[lang]();
  current = module.default ?? module;

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  applyTranslations();
  updateLangButtons(lang);
}

/**
 * Bootstrap: reads the saved lang from localStorage (or falls back to "th")
 * and applies it. Call this once on page load.
 */
export function initLanguage() {
  const saved = localStorage.getItem("lang") ?? "th";
  return setLanguage(saved);
}

/** Look up a translation key. Returns the key itself when missing. */
export function t(key) {
  return current[key] ?? key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });
  // <title> is in <head> so querySelectorAll('[data-i18n]') misses it
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) document.title = t(titleEl.dataset.i18n);
}

function updateLangButtons(activeLang) {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === activeLang);
  });
}
