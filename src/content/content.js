// ============================================================
// content.js — single source of truth for all site copy.
// To change any text on the site, edit only this file.
// Never hardcode strings inside component files.
// ============================================================

export const content = {

  nav: {
    logo: 'M',
    links: [
      { label: 'Mission',  href: '#mission'  },
      { label: 'Why Now',  href: '#why-now'  },
      { label: 'Services', href: '#services' },
      { label: 'About',    href: '#about'    },
      { label: 'Contact',  href: '#contact'  },
    ],
  },

  hero: {
    logo: 'M',
    tagline: 'AI Compliance Consulting for the Age of Regulated AI',
    subline: 'Cambridge-based. UK/EU AI Act · GDPR · ISO/IEC 42001',
    cta: 'Get in Touch',
    ctaHref: '#contact',
  },

  mission: {
    heading: 'What We Do',
    intro:
      'Markovian helps SME technology companies navigate the regulations governing how AI can be built and deployed.',
    body: [
      'EU AI Act, GDPR, and emerging UK frameworks are now legally binding — and the companies most in need of guidance are the ones receiving the least.',
      'Fines under the EU AI Act reach up to 7% of global annual turnover. No specialist, technically credible, SME-focused AI compliance firm yet exists in the UK. That is the gap Markovian fills.',
    ],
    stats: [
      { figure: '7%', label: 'of global annual turnover — maximum EU AI Act fine' },
      { figure: 'Aug 2026', label: 'full high-risk obligations and penalty enforcement begin' },
      { figure: 'SME-focused', label: 'the only technically credible UK firm built for this market' },
    ],
  },

  whyNow: {
    heading: 'Why Now',
    intro: 'Three regulatory forces have converged — and the enforcement window is closing.',
    forces: [
      {
        number: '01',
        title: 'EU AI Act enforcement',
        body:
          'Prohibitions took effect February 2025. GPAI and governance obligations followed August 2025. Full high-risk obligations — with fines up to 7% of global turnover — come into force August 2026.',
      },
      {
        number: '02',
        title: 'SME AI adoption accelerating',
        body:
          'FinTechs, LegalTechs, and HR platforms are deploying AI into hiring, lending, and diagnostics with no compliance infrastructure. The liability is real and growing.',
      },
      {
        number: '03',
        title: 'ISO/IEC 42001',
        body:
          'The first international AI management system standard (published December 2023) is increasingly required by enterprise procurement and government contracts — before a deal can close.',
      },
    ],
  },

  services: {
    heading: 'Services',
    marf: {
      heading: 'The Markovian AI Risk Framework (MARF)',
      body:
        'Our proprietary risk scoring model is used at the start of every engagement. It takes structured inputs about a client\'s AI system and produces a weighted risk map across five dimensions.',
      dimensions: [
        'Regulatory Exposure',
        'Decision Impact',
        'Data Sensitivity',
        'Technical Opacity',
        'Governance Maturity',
      ],
      output:
        'Output: risk tier (Critical / High / Medium / Low), top vulnerabilities, and a prioritised remediation plan.',
    },
    lines: [
      {
        number: '01',
        title: 'AI Risk Snapshot',
        description:
          'MARF diagnostic report. Fixed price, 1–2 week turnaround. The entry point for new clients.',
        duration: '1–2 weeks',
      },
      {
        number: '02',
        title: 'AI Compliance Audit',
        description:
          'Full gap analysis for existing or near-complete AI systems. Reviews documentation, technical interviews, model outputs, and data pipelines. Delivers a gap analysis report and prioritised remediation roadmap.',
        duration: '2–4 weeks',
      },
      {
        number: '03',
        title: 'Compliant AI by Design',
        description:
          'End-to-end compliance partnership for companies building new AI projects. Embedded advisory from requirements through deployment and monitoring.',
        duration: '3–12 month retainer',
      },
      {
        number: '04',
        title: 'ISO/IEC 42001 Readiness',
        description:
          'A structured path to certification readiness. Fixed scope engagement covering the full standard.',
        duration: 'Fixed scope',
      },
    ],
  },

  about: {
    heading: 'About Us',
    intro: 'We are not a slideshow factory. We are practitioners.',
    team: [
      {
        name: 'Ben',
        role: 'Co-Founder — Lead AI Compliance Specialist',
        bio: 'UCL Statistics. Former prediction modelling specialist at Statz.ai. AI safety and development at GB Bank.',
        linkedin: '#', // confirm LinkedIn URL before going live
      },
      {
        name: 'Mat',
        role: 'Co-Founder — Strategy & Operations',
        bio: 'Cambridge Electrical Engineering. GPU engineering internship at Qualcomm. Company strategy, business development, and operations.',
        linkedin: '#', // confirm LinkedIn URL before going live
      },
      {
        name: 'Sassan',
        role: 'AI Safety & Research',
        bio: 'Cambridge Information Engineering (AI specialisation). AI safety research background. Technical safety framing and research partnerships.',
        linkedin: '#', // confirm LinkedIn URL before going live
      },
    ],
  },

  contact: {
    heading: 'Get in Touch',
    intro: 'We respond within 24 hours.',
    email: 'hello@markovian.co.uk', // confirm correct address before going live
    linkedin: 'linkedin.com/company/markovian', // confirm URL before going live
    address: 'Cambridge, UK',
    form: {
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Tell us about your AI system and what you need help with',
      submit: 'Send Message',
    },
  },

  footer: {
    logo: 'Markovian',
    tagline: 'AI Compliance Consulting',
    links: [
      { label: 'Mission',  href: '#mission'  },
      { label: 'Why Now',  href: '#why-now'  },
      { label: 'Services', href: '#services' },
      { label: 'About',    href: '#about'    },
      { label: 'Contact',  href: '#contact'  },
    ],
    legal: `© ${new Date().getFullYear()} Markovian. All rights reserved.`,
  },
}
