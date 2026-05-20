import React from 'react'
import { content } from '../content/content'
import './Hero.css'

export default function Hero() {
  const { logo, tagline, subline, cta, ctaHref } = content.hero

  return (
    <section id="top" className="hero">
      <div className="content-wrapper hero__inner">
        <div className="hero__logo-mark">{logo}</div>
        <h1 className="hero__tagline">{tagline}</h1>
        <p className="hero__subline">{subline}</p>
        <a href={ctaHref} className="hero__cta">
          {cta}
        </a>
      </div>
    </section>
  )
}
