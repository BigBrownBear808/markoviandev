import React from 'react'
import { content } from '../content/content'
import './Mission.css'

export default function Mission() {
  const { heading, intro, body, stats } = content.mission

  return (
    <section id="mission" className="mission">
      <div className="content-wrapper">
        <h2 className="mission__heading">{heading}</h2>
        <p className="mission__intro">{intro}</p>
        {body.map((paragraph, i) => (
          <p key={i} className="mission__body">{paragraph}</p>
        ))}

        <div className="mission__stats">
          {stats.map((stat, i) => (
            <div key={i} className="mission__stat">
              <span className="mission__stat-figure">{stat.figure}</span>
              <span className="mission__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
