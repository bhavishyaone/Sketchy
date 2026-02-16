import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  return (
    <motion.section className="contact-page" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="contact-page__container">
        <div className="contact-page__header">
          <h1 className="contact-page__title">Let's Talk</h1>
          <p className="contact-page__subtitle">Ready to create something bold? Reach out below.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status === 'success' && (
            <div className="contact-form__alert contact-form__alert--success">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="contact-form__alert contact-form__alert--error">
              Something went wrong. Please try again.
            </div>
          )}

          <div className="contact-form__group">
            <label htmlFor="name" className="contact-form__label">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="contact-form__input" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="email" className="contact-form__label">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="contact-form__input"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="message" className="contact-form__label">Message</label>
            <textarea 
              id="message" 
              name="message" 
              className="contact-form__input contact-form__textarea" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </div>

          <Button 
            className="contact-form__submit"
            variant="primary" 
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact
