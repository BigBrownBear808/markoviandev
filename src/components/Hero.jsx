import React from 'react'
import { content } from '../content/content'
import './Hero.css'

export default function Hero() {
  const { name, tagline, subline, cta, ctaHref } = content.hero

  return (
    <section id="top" className="hero">
      <div className="content-wrapper hero__inner">
        <div className="hero__logo-mark">
          <span className="hero__name-initial">{name[0]}</span>
          <span className="hero__name-rest">{name.slice(1)}</span>
        </div>
        <h1 className="hero__tagline">{tagline}</h1>
        <p className="hero__subline">{subline}</p>
        <a href={ctaHref} className="hero__cta">
          {cta}
        </a>
      </div>
    </section>
  )
}
