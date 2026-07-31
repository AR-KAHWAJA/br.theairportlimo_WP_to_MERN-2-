import { useState } from 'react'
import { submitContact } from '../api.js'
import './ContactForm.css'

const INQUIRY_TYPES = [
  'General Inquiry',
  'Customer Support',
  'Sales Inquiry',
  'Business Inquiry',
  'Complaint',
  'Feedback',
  'Technical Support',
  'Billing & Payments',
  'Careers',
  'Media & Press',
  'Other'
]

const INITIAL_STATE = {
  fullName: '',
  email: '',
  phone: '',
  inquiryType: INQUIRY_TYPES[0],
  message: ''
}

export default function ContactForm({ heading }) {
  const [form, setForm] = useState(INITIAL_STATE)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      await submitContact(form)
      setStatus('success')
      setForm(INITIAL_STATE)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {heading && <h3>{heading}</h3>}
      <div className="contact-form__row">
        <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      </div>
      <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <select name="inquiryType" value={form.inquiryType} onChange={handleChange}>
        {INQUIRY_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Type your message here"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Submit'}
      </button>

      {status === 'success' && (
        <p className="contact-form__message contact-form__message--success">
          Thanks for reaching out! Our team will get back to you shortly.
        </p>
      )}
      {status === 'error' && <p className="contact-form__message contact-form__message--error">{error}</p>}
    </form>
  )
}
