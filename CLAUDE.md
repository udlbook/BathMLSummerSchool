# Claude Code — Frontend Development Guidelines

## Project Overview

This project is a **frontend website** built with standard JavaScript and CSS. Use `npm` for package management. Material UI (MUI) is available as an optional component library when richer UI components are needed.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Language | Vanilla JavaScript (ES2020+) |
| Styling | Standard CSS (with CSS custom properties) |
| Package Manager | npm |
| UI Components | Material UI (MUI) — optional |
| Build Tool | Vite (preferred) or plain HTML/JS if no bundler is needed |

---

## Project Setup

### Initialising a new project

```bash
npm create vite@latest . -- --template vanilla
npm install
```

### Adding Material UI (only when needed)

Install MUI and its peer dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material   # optional — only if icons are required
```

Add the Roboto font and MUI baseline to your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
/>
```

---

## File & Folder Structure

```
project-root/
├── index.html
├── package.json
├── vite.config.js          # if using Vite
├── src/
│   ├── main.js             # entry point
│   ├── app.js              # root app logic
│   ├── components/         # reusable UI components
│   │   └── *.js
│   ├── styles/
│   │   ├── main.css        # global styles & CSS variables
│   │   └── components/     # per-component stylesheets
│   ├── utils/              # helper functions
│   └── assets/             # images, fonts, icons
├── public/                 # static files served as-is
└── CLAUDE.md
```

---

## JavaScript Guidelines

- Use **ES modules** (`import`/`export`) throughout.
- Use `const` by default; `let` only when reassignment is needed. Never use `var`.
- Prefer `async/await` over raw Promise chains.
- Keep functions small and single-purpose.
- Use **JSDoc comments** for all exported functions.
- Do not introduce TypeScript unless explicitly requested.
- Avoid framework code (React, Vue, Svelte) — this is a vanilla JS project.

```js
// ✅ Good
/** @param {string} id @returns {Promise<object>} */
export async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch user: ${res.status}`);
  return res.json();
}

// ❌ Avoid
var fetchUser = function(id) {
  return fetch('/api/users/' + id).then(function(r) { return r.json(); });
};
```

---

## CSS Guidelines

- Define all design tokens as **CSS custom properties** on `:root`.
- Use **BEM naming** for component classes: `block__element--modifier`.
- Avoid inline styles except for dynamic values that cannot be expressed via classes.
- Use `rem` for font sizes, `em` or `rem` for spacing; avoid `px` for scalable values.
- Media queries should be **mobile-first** (`min-width` breakpoints).
- Group stylesheets logically: reset/base → tokens → layout → components → utilities.

```css
/* ✅ Good — tokens + BEM */
:root {
  --color-primary: #1976d2;
  --space-md: 1rem;
  --radius-card: 8px;
}

.card { border-radius: var(--radius-card); padding: var(--space-md); }
.card__title { font-size: 1.25rem; color: var(--color-primary); }
.card--featured { border: 2px solid var(--color-primary); }
```

---

## Material UI Usage (optional)

Use MUI when the design calls for established, interactive components (data tables, dialogs, form controls, etc.). **Do not use MUI for basic layout or typography** that plain CSS handles easily.

### Importing MUI components

```js
// Individual named imports only — never import from the root barrel
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack, Box } from '@mui/material';
```

### Theming

Create a centralised theme file and wrap the app once:

```js
// src/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
```

```js
// src/main.js
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme.js';

// Wrap your root render with <ThemeProvider theme={theme}><CssBaseline />{app}</ThemeProvider>
```

### When NOT to use MUI

| Situation | Use instead |
|---|---|
| Simple button / link | Plain `<button>` + CSS |
| Page layout / grid | CSS Grid or Flexbox |
| Headings, paragraphs | Semantic HTML + CSS |
| Simple hover effects | CSS `:hover` / transitions |

---

## npm Scripts

Ensure `package.json` always includes these scripts:

```json
{
  "scripts": {
    "dev":     "vite",
    "build":   "vite build",
    "preview": "vite preview",
    "lint":    "eslint src"
  }
}
```

Run the dev server with:

```bash
npm run dev
```

---

## HTML Guidelines

- Use **semantic HTML5 elements** (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- Every page must have exactly one `<h1>`.
- All images require a descriptive `alt` attribute.
- Include `<meta name="viewport" content="width=device-width, initial-scale=1" />`.
- Load JavaScript via `<script type="module" src="...">` — never use `defer` + classic scripts.

---

## Accessibility

- All interactive elements must be keyboard-navigable and have visible focus styles.
- Use ARIA attributes only when native HTML semantics are insufficient.
- Colour contrast must meet WCAG AA (4.5:1 for text, 3:1 for UI components).
- Form inputs must have associated `<label>` elements.

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|---|---|
| Use ES modules and modern JS | Use `var`, CommonJS `require()`, or global scripts |
| Keep CSS in `.css` files | Write styles inside JS strings |
| Use MUI selectively for complex components | Import the entire MUI library for simple elements |
| Write semantic, accessible HTML | Use `<div>` and `<span>` for everything |
| Commit `package-lock.json` | Commit `node_modules/` |
| Run `npm run build` before declaring done | Ship un-bundled source |

---

## Definition of Done

Before considering a task complete:

1. `npm run dev` starts without errors.
2. `npm run build` completes successfully.
3. The page is responsive at 320 px, 768 px, and 1280 px viewports.
4. No console errors or warnings in the browser.
5. All interactive elements are keyboard-accessible.

## Design Skill

Before writing any frontend code — components, pages, layouts, or styling — read and
follow the design skill located at:

  ./frontend-design.md

This is mandatory. The skill defines aesthetic direction, typography rules,
color/motion guidelines, and the visual standard for what "done" looks like.
Treat it as the single source of truth for all UI decisions.