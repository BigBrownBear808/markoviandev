import React from 'react'
import { content } from '../content/content'
import './Services.css'

export default function Services() {
  const { heading, lines } = content.services

  return (
    <section id="services" className="services">
      <div className="content-wrapper">
        <h2 className="services__heading">{heading}</h2>

        {/* Four service lines */}
        <div className="services__lines">
          {lines.map(line => (
            <div key={line.number} className="services__line">
              <span className="services__line-number">{line.number}</span>
              <div className="services__line-content">
                <h3 className="services__line-title">{line.title}</h3>
                <p className="services__line-desc">{line.description}</p>
                <span className="services__line-duration">{line.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
