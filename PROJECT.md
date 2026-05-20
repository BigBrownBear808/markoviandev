# Markovian — Website Project

## Project Overview

A single-page marketing website for **Markovian**, a London-based AI compliance consultancy.
The site targets CTOs, founders, and technical leads at SME technology companies (10–200 employees)
who need to understand what Markovian does and get in touch.

**Live domain:** markovian.co.uk  
**Tech stack:** React + Vite (single page, scroll-based navigation)  
**Status:** Initial build

---

## Goals

- Clearly communicate what Markovian does and why it matters right now
- Establish technical credibility and professional trust
- Drive inbound contact from qualifying prospects
- Be easy for non-developers to edit (text, team bios, service descriptions)
- Be easy to extend later (new sections, blog, case studies)

---

## Site Structure

All sections live on a single scrollable page. Navigation links anchor-scroll to each section.

| Section | Anchor | Purpose |
|---|---|---|
| Hero | `#top` | Company name, one-line tagline, CTA button |
| What We Do | `#mission` | What Markovian does and who it's for |
| Why Now | `#why-now` | Regulatory urgency — the August 2026 enforcement window |
| MARF | `#marf` | Proprietary risk framework — five-dimension scoring model |
| Services | `#services` | Four service lines (no pricing) |
| About | `#about` | Three team member cards |
| Contact | `#contact` | Email, LinkedIn, simple contact form |

### Future sections (not built yet — placeholders noted in code)
- `#timeline` — Company roadmap / milestones
- `#recognition` — Supported by / BlueDot / awards

---

## Content Summary Per Section

### Hero
- Company name: **Markovian** — "M" in dark forest green (display font), "arkovian" in dark grey
- Tagline: *"AI Compliance Consulting for the Age of Regulated AI"*
- Sub-line: UK/EU AI Act · GDPR · ISO/IEC 42001
- CTA: "Get in Touch" → scrolls to `#contact`

### Mission
- Markovian helps SME technology companies navigate the regulations governing how AI can be built and deployed
- EU AI Act, GDPR, and emerging UK frameworks are now legally binding
- The companies most in need of help are the ones with the least guidance
- Fines reach up to 7% of global annual turnover
- No specialist, technically credible, SME-focused AI compliance firm exists in the UK

### Why Now
Three regulatory forces have converged:
1. **EU AI Act enforcement** — Feb 2025 (prohibitions), Aug 2025 (GPAI/governance), **Aug 2026** (full high-risk obligations, fines up to 7% turnover)
2. **SME AI adoption accelerating** — FinTechs, LegalTechs, HR platforms deploying AI into hiring, lending, diagnostics with no compliance infrastructure
3. **ISO/IEC 42001** — First international AI management system standard (Dec 2023); enterprise procurement and government contracts increasingly requiring it

### MARF

Proprietary risk scoring model used at the start of every engagement. Takes structured inputs about a client's AI system and produces a weighted risk map across five dimensions:
- Regulatory Exposure
- Decision Impact
- Data Sensitivity
- Technical Opacity
- Governance Maturity

### Services

#### Service Line 1: AI Risk Snapshot
- MARF diagnostic report
- Fixed price, 1–2 week turnaround
- Entry point for new clients

#### Service Line 2: AI Compliance Audit
- Full gap analysis for existing or near-complete AI systems
- Reviews documentation, technical interviews, model outputs and data pipelines
- Delivers gap analysis report + prioritised remediation roadmap
- 2–4 week engagement

#### Service Line 3: Compliant AI by Design
- End-to-end compliance partnership for companies building new AI projects
- Embedded advisory from requirements through deployment and monitoring
- 3–12 month retainer engagement

#### Service Line 4: ISO/IEC 42001 Readiness
- Structured path to certification readiness
- Fixed scope engagement

### About Us
Three team members:

**Ben** — Co-Founder. UCL Statistics. Former prediction modelling specialist at Statz.ai. AI safety and development team at GB Bank. Lead AI compliance specialist.

**Mat** — Co-Founder. Cambridge Electrical Engineering. Specialty in Hardware. Company strategy, business development, and operations.

**Sassan** — AI Safety & Research. Cambridge Information Engineering (AI specialisation). AI safety research background. Technical safety framing and research partnerships.

### Contact
- Email: (to be confirmed — use hello@markovian.co.uk as placeholder)
- LinkedIn: (to be added)
- Simple contact form: Name, Email, Message, Send
- Address: London, UK

---

## Design System

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#F5F4F0` | Off-white — page background |
| `--color-surface` | `#EEECEA` | Slightly darker off-white — card/section backgrounds |
| `--color-green` | `#2D5016` | Dark forest green — logo, accents, CTA buttons, highlights |
| `--color-green-light` | `#3D6B1F` | Slightly lighter green — hover states |
| `--color-text-primary` | `#1A1A1A` | Near-black — headings |
| `--color-text-body` | `#3A3A3A` | Dark grey — body copy |
| `--color-text-muted` | `#6B6B6B` | Muted grey — labels, metadata |
| `--color-border` | `#D8D6D0` | Subtle border — dividers, card outlines |

### Typography

- **Display / Logo:** Gothic bold — for the M logo and section headings
- **Body:** Clean, legible serif or refined sans-serif — prioritise readability
- Avoid: Inter, Roboto, Arial, system-ui defaults

### Tone

- Minimal. Professional. Technical without being inaccessible.
- No marketing hyperbole. Short sentences. Direct claims.

### Layout

- Max content width: `1100px`, centred
- Generous vertical spacing between sections (`80px–120px`)
- Mobile responsive — all sections stack cleanly on small screens
- Navigation: fixed top bar with anchor links, hamburger on mobile

---

## File Structure (Vite + React)

```
markovian-site/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Nav.jsx              # Fixed navigation bar
│   │   ├── Hero.jsx             # Landing hero section
│   │   ├── Mission.jsx          # Mission section
│   │   ├── WhyNow.jsx           # Why Now section
│   │   ├── MARF.jsx             # MARF framework section
│   │   ├── Services.jsx         # Four service lines
│   │   ├── About.jsx            # Team section
│   │   ├── Contact.jsx          # Contact form + details
│   │   └── Footer.jsx           # Footer with nav + legal links
│   ├── content/
│   │   └── content.js           # ALL editable text in one place
│   ├── styles/
│   │   └── variables.css        # Design tokens (colours, spacing, fonts)
│   ├── App.jsx                  # Root component, assembles all sections
│   └── main.jsx                 # Vite entry point
├── index.html
├── vite.config.js
├── package.json
└── CLAUDE.md
```

**Key principle:** All copy (headings, body text, team bios, service descriptions) lives in `src/content/content.js`. To change any text on the site, only that file needs editing — no touching component logic.

---

## Commands

```bash
# Install dependencies
npm install

# Run local dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
