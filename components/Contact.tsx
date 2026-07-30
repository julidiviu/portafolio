"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Contact({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).contact
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const onChange = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error')
      setFeedback(dict.form_error_required)
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact form')
      }

      setStatus('success')
      setFeedback(dict.form_success)
      setFormState({ name: '', email: '', subject: '', message: '', website: '' })
    } catch (_error) {
      setStatus('error')
      setFeedback(dict.form_error)
    }
  }

  return (
    <section id="contact" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
        <div className="section-focus-badge">
          <p>{dict.primary_note}</p>
        </div>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <h3>{dict.form_title}</h3>

          <div className="contact-form-grid">
            <label className="contact-label">
              {dict.form_name_label}
              <input
                className="contact-input"
                type="text"
                name="name"
                autoComplete="name"
                required
                value={formState.name}
                onChange={(event) => onChange('name', event.target.value)}
              />
            </label>

            <label className="contact-label">
              {dict.form_email_label}
              <input
                className="contact-input"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={formState.email}
                onChange={(event) => onChange('email', event.target.value)}
              />
            </label>
          </div>

          <label className="contact-label">
            {dict.form_subject_label}
            <input
              className="contact-input"
              type="text"
              name="subject"
              value={formState.subject}
              onChange={(event) => onChange('subject', event.target.value)}
            />
          </label>

          <label className="contact-label">
            {dict.form_message_label}
            <textarea
              className="contact-input contact-textarea"
              name="message"
              rows={5}
              required
              value={formState.message}
              onChange={(event) => onChange('message', event.target.value)}
            />
          </label>

          <label className="contact-honeypot" aria-hidden="true">
            Website
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formState.website}
              onChange={(event) => onChange('website', event.target.value)}
            />
          </label>

          <motion.button
            className="contact-submit"
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {status === 'sending' ? dict.form_sending_label : dict.form_submit_label}
          </motion.button>

          {status === 'error' && feedback && (
            <motion.div
              className="contact-feedback is-error"
              role="status"
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <i className="fa-solid fa-circle-exclamation"></i>
              <span>{feedback}</span>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              className="contact-success-overlay"
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="contact-success-card"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.1 }}
              >
                <div className="contact-success-icon-wrap">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3>{dict.form_success}</h3>
                <button
                  type="button"
                  className="contact-success-btn"
                  onClick={() => {
                    setStatus('idle')
                    setFeedback('')
                  }}
                >
                  {dict.form_reset}
                </button>
              </motion.div>
            </motion.div>
          )}
        </form>

        <aside className="contact-info">
          <motion.article
            className="contact-card"
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <span className="contact-card-badge">01</span>
            <h3>{dict.c2_title}</h3>
            <p className="contact-card-line">{dict.c2_desc}</p>
            <a
              className="contact-card-link"
              href={dict.c2_href}
              target="_blank"
              rel="noreferrer"
            >
              {dict.c2_text}
            </a>
          </motion.article>

          <motion.article
            className="contact-card"
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <span className="contact-card-badge">02</span>
            <h3>{dict.c3_title}</h3>
            <p className="contact-card-line">{dict.c3_desc}</p>
            <a className="contact-card-link" href={dict.c3_href} target="_blank" rel="noreferrer">
              {dict.c3_text}
            </a>
          </motion.article>

          <div className="contact-bar">
            <p className="contact-note">{dict.note1}</p>
            <p className="contact-note">{dict.note2}</p>
            <p className="contact-note">{dict.primary_note}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
