import React from 'react'
import { content } from '../content/content'
import './Footer.css'

export default function Footer() {
  const { logo, tagline, links, legal } = content.footer

  return (
    <footer className="footer">
      <div className="content-wrapper footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{logo}</span>
          <span className="footer__tagline">{tagline}</span>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul>
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="content-wrapper footer__legal">
        <span>{legal}</span>
      </div>
    </footer>
  )
}
