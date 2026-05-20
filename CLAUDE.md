# CLAUDE.md — Markovian Website

Instructions for Claude (or any AI assistant) working on this codebase.
Read this file before making any changes.

---

## Project Context

This is the marketing website for **Markovian**, a Cambridge-based AI compliance consultancy.
It is a single-page React + Vite site. The owner is non-technical and needs to be able to edit
content easily. Keep all code changes simple, explicit, and well-commented.

Full project context is in `PROJECT.md`.

---

## Core Rules

1. **Never change content without being asked.** All copy, names, and descriptions are
   intentional. Do not rewrite, rephrase, or "improve" text unless explicitly instructed.

2. **All editable text lives in `src/content/content.js`.** This is the single source of truth
   for every string on the site. When adding new sections, add their content here first.
   Never hardcode copy inside component files.

3. **Never change the colour palette or typography without being asked.** The design tokens
   are defined in `src/styles/variables.css`. All components must use these CSS variables —
   never hardcode hex values in component files.

4. **Keep components simple and readable.** This codebase will be maintained by someone
   learning web development. Avoid clever abstractions. Prefer explicit, readable code over
   brevity. Add a short comment above any logic that isn't immediately obvious.

5. **One component per section.** Each page section (Hero, Mission, WhyNow, etc.) is its
   own file in `src/components/`. Do not merge sections or split them further without good reason.

6. **Mobile-first.** All new components must be responsive. Test that content stacks cleanly
   on small screens. Use the breakpoints defined in `variables.css`.

---

## How to Edit Content

All site copy is in **`src/content/content.js`**. It exports a single object.
To change any text on the site, only this file needs to be edited.

```js
// Example structure
export const content = {
  hero: {
    tagline: "AI Compliance Consulting for the Age of Regulated AI",
    subline: "Cambridge-based. UK/EU AI Act · GDPR · ISO/IEC 42001",
    cta: "Get in Touch",
  },
  mission: {
    heading: "...",
    body: "...",
  },
  // etc.
}
```

Components import what they need:
```js
import { content } from '../content/content'
const { heading, body } = content.mission
```

---

## How to Add a New Section

Follow these steps exactly:

1. **Add content** to `src/content/content.js` under a new key
2. **Create the component** in `src/components/NewSection.jsx`
3. **Import and place** it in `src/App.jsx` in the correct scroll order
4. **Add a nav link** in `src/components/Nav.jsx` pointing to the new anchor ID
5. **Add the anchor ID** (`id="new-section"`) to the section's outer `<section>` tag

Sections already stubbed out but not yet built (add when ready):
- `#timeline` — Company roadmap / milestones
- `#recognition` — Supported by logos (BlueDot Impact, etc.)

---

## Design Tokens

All colours, spacing, and font references must use CSS variables from `src/styles/variables.css`.

```css
/* Colours */
--color-bg             /* Off-white page background */
--color-surface        /* Slightly darker off-white — cards, alternating sections */
--color-green          /* Dark forest green — logo, accents, CTAs */
--color-green-light    /* Hover state for green elements */
--color-text-primary   /* Near-black — headings */
--color-text-body      /* Dark grey — body copy */
--color-text-muted     /* Muted grey — labels, metadata */
--color-border         /* Subtle border — dividers, card edges */

/* Spacing */
--section-padding-y    /* Vertical padding for page sections */
--content-max-width    /* 1100px — max width for all content */
```

**Never use hardcoded hex values in component files.**

---

## Component Conventions

```jsx
// Standard component structure
import React from 'react'
import { content } from '../content/content'
import './ComponentName.css'   // scoped styles for this component only

export default function ComponentName() {
  const { heading, body } = content.componentName

  return (
    <section id="anchor-name" className="component-name">
      <div className="content-wrapper">
        {/* section content here */}
      </div>
    </section>
  )
}
```

- Use `className` not inline `style` for layout and design
- Use inline `style` only for truly dynamic values (e.g. a calculated width)
- Each component has its own `.css` file for scoped styles
- The outer `<section>` always has the anchor `id` and a descriptive `className`
- The inner `<div className="content-wrapper">` handles max-width and centering

---

## What Not To Do

- **Do not** install new npm packages without checking with the owner first
- **Do not** add animations or motion effects unless asked — the design is intentionally static
- **Do not** use any CSS framework (Tailwind, Bootstrap, etc.) — this project uses plain CSS with variables
- **Do not** add a router or multiple pages — this is a single-page scroll site
- **Do not** connect the contact form to any backend without explicit instruction — render it as UI only until instructed
- **Do not** use `localStorage`, `sessionStorage`, or any browser storage APIs
- **Do not** hardcode any personal information (email addresses, LinkedIn URLs) that isn't already confirmed — use placeholder comments instead

---

## Placeholder Values (Confirm Before Going Live)

These values are not yet confirmed and should be treated as placeholders:

| Location | Placeholder | Notes |
|---|---|---|
| `content.contact.email` | `hello@markovian.co.uk` | Confirm correct address |
| `content.contact.linkedin` | `linkedin.com/company/markovian` | Confirm URL |
| `content.contact.address` | `Cambridge, UK` | Add full address if desired |
| `content.team.ben.linkedin` | `#` | Add LinkedIn URL |
| `content.team.mat.linkedin` | `#` | Add LinkedIn URL |
| `content.team.sassan.linkedin` | `#` | Add LinkedIn URL |

---

## Vite + React Notes

- Dev server: `npm run dev` → runs at `http://localhost:5173`
- Build: `npm run build` → outputs to `dist/`
- Entry point: `src/main.jsx` → renders `<App />` into `index.html`
- `App.jsx` assembles all section components in scroll order
- No routing library needed — navigation uses anchor links (`href="#section-id"`)

---

## Git Conventions (when using version control)

- Commit messages should describe *what changed and why*, not just what file was touched
- Good: `Update WhyNow section headings to reflect Aug 2026 deadline`
- Bad: `edit content.js`
- One logical change per commit where possible
