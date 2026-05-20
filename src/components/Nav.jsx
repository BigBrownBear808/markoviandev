import React, { useState } from 'react'
import { content } from '../content/content'
import './Nav.css'

export default function Nav() {
  const { logo, links } = content.nav
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(prev => !prev)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="content-wrapper nav__inner">
        <a href="#top" className="nav__logo" onClick={closeMenu}>
          {logo}
        </a>

        {/* Desktop link list */}
        <ul className="nav__links">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="nav__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          <ul>
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav__mobile-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
