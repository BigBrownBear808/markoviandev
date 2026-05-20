import React from 'react'
import { content } from '../content/content'
import './WhyNow.css'

export default function WhyNow() {
  const { heading, intro, forces } = content.whyNow

  return (
    <section id="why-now" className="why-now">
      <div className="content-wrapper">
        <h2 className="why-now__heading">{heading}</h2>
        <p className="why-now__intro">{intro}</p>

        <div className="why-now__forces">
          {forces.map(force => (
            <div key={force.number} className="why-now__force">
              <span className="why-now__number">{force.number}</span>
              <div className="why-now__force-content">
                <h3 className="why-now__force-title">{force.title}</h3>
                <p className="why-now__force-body">{force.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
