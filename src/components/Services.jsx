import React from 'react'
import { content } from '../content/content'
import './Services.css'

export default function Services() {
  const { heading, marf, lines } = content.services

  return (
    <section id="services" className="services">
      <div className="content-wrapper">
        <h2 className="services__heading">{heading}</h2>

        {/* MARF framework explainer */}
        <div className="services__marf">
          <h3 className="services__marf-heading">{marf.heading}</h3>
          <p className="services__marf-body">{marf.body}</p>
          <ul className="services__marf-dimensions">
            {marf.dimensions.map(dim => (
              <li key={dim}>{dim}</li>
            ))}
          </ul>
          <p className="services__marf-output">{marf.output}</p>
        </div>

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
