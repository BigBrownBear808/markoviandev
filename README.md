# Markovian

Marketing website for [Markovian](https://markovian.co.uk) — a London-based AI compliance consultancy helping SME technology companies navigate the EU AI Act, GDPR, and ISO/IEC 42001.

**Stack:** React + Vite · Plain CSS with design tokens · Single-page scroll site

---

## Local development

```bash
npm install
npm run dev       # runs at http://localhost:5173
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

---

## Editing content

All site copy (headings, body text, team bios, service descriptions) lives in one file:

```
src/content/content.js
```

To change any text on the site, only that file needs to be edited — no touching component code.

---

## Project structure

```
src/
├── components/     # One component per page section (Hero, Mission, WhyNow, MARF, Services, About, Contact, Footer, Nav)
├── content/
│   └── content.js  # All editable copy
└── styles/
    └── variables.css  # Design tokens (colours, spacing, fonts)
```

---

## Contributing

See [CLAUDE.md](./CLAUDE.md) for full development guidelines, component conventions, and design token reference.
