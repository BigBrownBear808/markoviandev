import React, { useState } from 'react'
import { content } from '../content/content'
import './MARF.css'

export default function MARF() {
  const { heading, body, dimensions, outputNote } = content.marf
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="marf" className="marf">
      <div className="content-wrapper">
        <h2 className="marf__heading">{heading}</h2>
        <p className="marf__body">{body}</p>

        <ul className="marf__dimensions">
          {dimensions.map((dim, i) => {
            const isOpen = openIndex === i
            return (
              <li key={dim.name} className={`marf__dimension${isOpen ? ' marf__dimension--open' : ''}`}>
                <button
                  className="marf__dimension-header"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="marf__dimension-name">{dim.name}</span>
                  <span className="marf__dimension-summary">{dim.summary}</span>
                  <span className="marf__dimension-toggle" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Collapsible panel — max-height transition from 0 to open */}
                <div className="marf__dimension-panel">
                  <div className="marf__dimension-panel-inner">
                    <p className="marf__dimension-description">{dim.description}</p>
                    <div className="marf__client-note">
                      <span className="marf__client-note-label">What this means for you</span>
                      <p className="marf__client-note-body">{dim.clientNote}</p>
                    </div>
                    <ul className="marf__anchors">
                      {dim.anchors.map(anchor => (
                        <li key={anchor} className="marf__anchor">{anchor}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="marf__output">
          <h3 className="marf__output-heading">{outputNote.heading}</h3>
          <p className="marf__output-body">{outputNote.body}</p>
        </div>
      </div>
    </section>
  )
}
