// ============================================================
// content.js — single source of truth for all site copy.
// To change any text on the site, edit only this file.
// Never hardcode strings inside component files.
// ============================================================

export const content = {

  nav: {
    logo: 'M',
    links: [
      { label: 'What We Do', href: '#mission'  },
      { label: 'Why Now',   href: '#why-now'  },
      { label: 'MARF',      href: '#marf'     },
      { label: 'Services',  href: '#services' },
      { label: 'About',     href: '#about'    },
      { label: 'Contact',   href: '#contact'  },
    ],
  },

  hero: {
    name: 'Markovian',
    tagline: 'AI Compliance Consulting for the Age of Regulated AI',
    subline: 'UK/EU AI Act · GDPR · ISO/IEC 42001',
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

  marf: {
    heading: 'The Markovian AI Risk Framework (MARF)',
    body:
      'Our proprietary risk scoring model is used at the start of every engagement. It takes structured inputs about a client\'s AI system and produces a weighted risk map across five dimensions.',
    dimensions: [
      {
        name: 'Regulatory Exposure',
        summary: 'Which laws apply to your system, and how severely.',
        description:
          'Not every AI system carries the same legal burden. Regulatory Exposure maps the specific frameworks that apply to a client\'s system based on their sector, geography, and what their AI actually does. A credit scoring model used by a UK FinTech serving EU customers will sit under the EU AI Act, GDPR, FCA model risk guidance, and Consumer Duty simultaneously. A recruitment tool deployed into the EU triggers EU AI Act high-risk classification automatically. This dimension identifies that stack — and the severity of each obligation — before anything else is assessed.',
        clientNote:
          'You may be subject to regulations you are not aware of. The first step is knowing exactly which ones apply and what they require, so that nothing is missed.',
        anchors: [
          'EU AI Act — risk tier classification (unacceptable / high / limited / minimal)',
          'GDPR — applicability based on data subjects and processing activities',
          'UK Data (Use and Access) Act 2025',
          'FCA model risk guidance (for regulated financial services firms)',
        ],
      },
      {
        name: 'Decision Impact',
        summary: 'How serious and irreversible the consequences are if your AI gets it wrong.',
        description:
          'AI systems that inform or make decisions affecting people\'s access to credit, employment, healthcare, or legal outcomes carry a fundamentally different risk profile than those that recommend a playlist. Decision Impact scores the severity of harm a wrong output could cause, how reversible that harm is, and how directly the AI\'s output drives the decision versus a human remaining in the loop. A model that automatically rejects a loan application with no human review scores higher than one that flags candidates for human shortlisting. This dimension directly determines whether a system qualifies as high-risk under the EU AI Act and whether GDPR Article 22 protections apply.',
        clientNote:
          'If your system makes or materially influences consequential decisions about people, specific legal obligations follow — including the right to human review, meaningful explanation, and the ability to contest the outcome. This dimension tells you whether you are in that territory.',
        anchors: [
          'EU AI Act Article 6 — high-risk AI system classification criteria',
          'GDPR Article 22 — automated decision-making and profiling',
          'EU AI Act Annex III — high-risk use case list (credit, employment, education, healthcare, law enforcement)',
        ],
      },
      {
        name: 'Data Sensitivity',
        summary: 'What personal data your system processes, and the obligations that creates.',
        description:
          'AI systems are data-intensive by nature — but not all data carries the same legal weight. Data Sensitivity assesses the classification and volume of personal data a client\'s system processes, with particular attention to special category data under GDPR (health, biometric, racial or ethnic origin, political opinions, religious beliefs, sexual orientation). It also covers whether the system processes data about children, whether it generates inferences that constitute personal data even if raw inputs do not, and whether data is used for training in ways that require separate legal basis. The larger the volume and the more sensitive the category, the stricter the obligations around lawful basis, data minimisation, retention, and subject rights.',
        clientNote:
          'If your model touches health records, financial data, biometric identifiers, or any data that could be used to profile individuals, you face a higher compliance burden — and a higher risk of enforcement action if that burden is not met.',
        anchors: [
          'GDPR Article 9 — special category data',
          'GDPR Article 22 — profiling',
          'ISO/IEC 42001 Section A.7 — AI-specific data governance requirements',
          'EU AI Act Article 10 — data governance obligations for high-risk systems',
        ],
      },
      {
        name: 'Technical Opacity',
        summary: 'How explainable your model is — and whether regulators can audit it.',
        description:
          'Regulatory frameworks increasingly require that AI systems be explainable, auditable, and transparent — not just accurate. Technical Opacity assesses how interpretable a client\'s model is: whether it can produce meaningful explanations for its outputs, whether its decision logic can be interrogated by a developer or a regulator, and whether the system maintains sufficient logs to reconstruct why a given decision was made. A large language model generating free-text outputs scores differently from a logistic regression on tabular data. This dimension also evaluates whether the client\'s existing documentation — model cards, data sheets, system logs — meets the standard required under the EU AI Act for high-risk systems.',
        clientNote:
          '"The model said so" is not a legally sufficient explanation. If your system cannot explain its outputs in human-understandable terms — or cannot be audited after the fact — you face exposure under both GDPR and the EU AI Act. This dimension identifies where that gap is and what needs to be documented or rebuilt.',
        anchors: [
          'GDPR Recital 71 — right to explanation for automated decisions',
          'EU AI Act Articles 13–14 — logging, traceability, human oversight',
          'ISO/IEC 42001 Section B.6 — AI system transparency and explainability',
          'EU AI Act Article 11 — technical documentation requirements for high-risk systems',
        ],
      },
      {
        name: 'Governance Maturity',
        summary: 'How much oversight, documentation, and process your organisation already has in place.',
        description:
          'Technical compliance is necessary but not sufficient. Regulators also assess whether an organisation has the governance infrastructure to manage AI risk on an ongoing basis — not just at a point in time. Governance Maturity evaluates the gap between a client\'s current state and what is required: Does a risk register exist? Is there a defined process for monitoring model performance in production? Who is accountable when the AI produces a harmful output? Has the system undergone any form of conformity assessment? Does the organisation have a policy for training data management, model versioning, or incident response? This dimension maps the distance between where the client is and where ISO/IEC 42001 certification — or EU AI Act compliance — requires them to be.',
        clientNote:
          'The EU AI Act does not just regulate AI systems — it regulates the organisations deploying them. Without governance processes, even a technically sound model can expose the company to enforcement action. This dimension tells you how much organisational work sits alongside the technical work.',
        anchors: [
          'ISO/IEC 42001 — AI management system requirements (full standard)',
          'EU AI Act Article 9 — risk management system obligations for high-risk AI',
          'SOC 2 Trust Services Criteria — availability, processing integrity, confidentiality',
          'EU AI Act Article 17 — quality management system requirements',
        ],
      },
    ],
    outputNote: {
      heading: 'Output: Risk Tier',
      body:
        'After all five dimensions are scored, MARF produces a risk tier (Critical / High / Medium / Low), a prioritised list of the top 3–5 vulnerabilities identified, and a recommended action plan ordered by regulatory urgency and implementation effort.',
    },
  },

  services: {
    heading: 'Services',
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
    team: [
      {
        name: 'Ben',
        role: 'Co-Founder — Lead AI Compliance Specialist',
        bio: 'UCL Statistics. Former prediction modelling specialist at Statz.ai. AI safety and development at GB Bank.',
        //linkedin: '#', // confirm LinkedIn URL before going live
      },
      {
        name: 'Mat',
        role: 'Co-Founder — Strategy & Operations',
        bio: 'Cambridge Electrical Engineering. Specialty in Hardware.\nCompany strategy, business development, and operations.',
        //linkedin: 'https://www.linkedin.com/in/matyas-vecsei/', // confirm LinkedIn URL before going live
      },
      {
        name: 'Sassan',
        role: 'AI Safety & Research',
        bio: 'Cambridge Information Engineering. AI safety research background.\nTechnical safety framing and research partnerships.',
        //linkedin: '#', // confirm LinkedIn URL before going live
      },
    ],
  },

  contact: {
    heading: 'Contact',
    email: 'contact@markovian.co.uk', // confirm correct address before going live
    //linkedin: 'N/A', // confirm URL before going live
    address: 'London, UK',
    form: {
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Tell us more',
      submit: 'Send Message',
      submitting: 'Sending…',
      successMessage: "Thanks — we'll be in touch shortly.",
      errorMessage: 'Something went wrong. Please try emailing us directly.',
      // Paste your Formspree endpoint URL here (looks like https://formspree.io/f/xxxxxxxx)
      formspreeEndpoint: 'https://formspree.io/f/mlgvjnvp',
    },
  },

  footer: {
    logo: 'Markovian',
    tagline: 'AI Compliance Consulting',
    links: [
      { label: 'What We Do', href: '#mission'  },
      { label: 'Why Now',   href: '#why-now'  },
      { label: 'MARF',      href: '#marf'     },
      { label: 'Services',  href: '#services' },
      { label: 'About',     href: '#about'    },
      { label: 'Contact',   href: '#contact'  },
    ],
    legal: `© ${new Date().getFullYear()} Markovian. All rights reserved.`,
  },
}
