import React from 'react'
import { content } from '../content/content'
import './Contact.css'

export default function Contact() {
  const { heading, intro, email, linkedin, address, form } = content.contact

  /* Form is UI-only — no backend connected yet */
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section id="contact" className="contact">
      <div className="content-wrapper contact__inner">

        {/* Contact details */}
        <div className="contact__details">
          <h2 className="contact__heading">{heading}</h2>
          <p className="contact__intro">{intro}</p>

          <dl className="contact__list">
            <div className="contact__item">
              <dt className="contact__item-label">Email</dt>
              <dd>
                <a href={`mailto:${email}`} className="contact__link">{email}</a>
              </dd>
            </div>
            <div className="contact__item">
              <dt className="contact__item-label">LinkedIn</dt>
              <dd>
                {/* LinkedIn URL not yet confirmed */}
                <a href={`https://${linkedin}`} className="contact__link" target="_blank" rel="noopener noreferrer">
                  {linkedin}
                </a>
              </dd>
            </div>
            <div className="contact__item">
              <dt className="contact__item-label">Location</dt>
              <dd className="contact__text">{address}</dd>
            </div>
          </dl>
        </div>

        {/* Contact form */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="contact-name" className="contact__label">Name</label>
            <input
              id="contact-name"
              type="text"
              className="contact__input"
              placeholder={form.namePlaceholder}
              autoComplete="name"
            />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-email" className="contact__label">Email</label>
            <input
              id="contact-email"
              type="email"
              className="contact__input"
              placeholder={form.emailPlaceholder}
              autoComplete="email"
            />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-message" className="contact__label">Message</label>
            <textarea
              id="contact-message"
              className="contact__input contact__textarea"
              placeholder={form.messagePlaceholder}
              rows={5}
            />
          </div>
          <button type="submit" className="contact__submit">
            {form.submit}
          </button>
        </form>

      </div>
    </section>
  )
}
