import React from 'react'
import { content } from '../content/content'
import './About.css'

export default function About() {
  const { heading, intro, team } = content.about

  return (
    <section id="about" className="about">
      <div className="content-wrapper">
        <h2 className="about__heading">{heading}</h2>
        <p className="about__intro">{intro}</p>

        <div className="about__team">
          {team.map(member => (
            <div key={member.name} className="about__card">
              <div className="about__card-initial">{member.name[0]}</div>
              <div className="about__card-body">
                <h3 className="about__card-name">{member.name}</h3>
                <p className="about__card-role">{member.role}</p>
                <p className="about__card-bio">{member.bio}</p>
                {/* LinkedIn URL not yet confirmed — placeholder href */}
                <a href={member.linkedin} className="about__card-linkedin" aria-label={`${member.name} on LinkedIn`}>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
