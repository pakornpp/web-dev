# Web Template

A generic website starter with webpack, English/Thai i18n, and gh-pages deployment.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload at `localhost:8080` |
| `npm run build` | Production build into `dist/` |
| `npm run deploy` | Deploy `dist/` to GitHub Pages via `gh-pages` |

## Structure

```
src/
  index.html        # Page template (add more pages alongside this)
  index.js          # Entry point (import CSS, init nav/footer/i18n)
  styles.css        # Global styles + CSS variables
  i18n.js           # Language switching (setLanguage / t / initLanguage)
  nav.js            # Shared nav component
  footer.js         # Shared footer component
  locales/
    en.json         # English strings
    th.json         # Thai strings
webpack.common.js   # Shared webpack config
webpack.dev.js      # Dev server config (merges common)
webpack.prod.js     # Production config (merges common)
```

## Adding a new page

1. Create `src/about.html` (copy `index.html` as a base).
2. Create `src/about.js` — import CSS and call `initNav`, `initFooter`, `initLanguage`.
3. Add the entry and `HtmlWebpackPlugin` instance in `webpack.common.js`.
4. Add nav links in `src/nav.js` and `src/footer.js`.
5. Add translation keys to `src/locales/en.json` and `src/locales/th.json`.

## Deployment

Before running `npm run deploy`, set the `homepage` field in `package.json` to your GitHub Pages URL so `gh-pages` publishes to the right place:

```json
"homepage": "https://<username>.github.io/<repo>"
```
