import { useState } from 'react'
import { Phone, Mail, MapPin, Globe, CheckCircle2, AlertCircle } from 'lucide-react'
import { useContactForm } from '../hooks/useContactForm'
import { COMPANY } from '../config'

const SUBJECTS = [
  'General Enquiry',
  'Place an Order',
  'Bulk / Export Pricing',
  'Retail Partnership',
  'Wholesale Supply',
  'Other',
]

const INFO_ITEMS = [
  { Icon: Phone, label: 'Phone / WhatsApp', href: (c) => `tel:${c.phone}`,         value: (c) => c.phone  },
  { Icon: Mail,  label: 'Email',            href: (c) => `mailto:${c.email}`,       value: (c) => c.email  },
  { Icon: MapPin,label: 'Headquarters',     href: null,                             value: (c) => c.address },
  { Icon: Globe, label: 'Website',          href: null,                             value: (c) => c.website },
]

export default function Contact() {
  const { status, submit, reset } = useContactForm()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const set = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }))

  if (status === 'success') {
    return (
      <div className="form-success">
        <CheckCircle2 size={56} strokeWidth={1.5} color="var(--gold)" />
        <h2>Message Received!</h2>
        <p>
          Thank you, <strong>{form.name}</strong>. We'll get back to you at{' '}
          <strong>{form.email}</strong> within 24 hours.
        </p>
        <button
          onClick={() => { reset(); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
          className="btn btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="contact-grid">
      <div className="contact-info">
        <h3>We'd love to hear from you</h3>
        <p>
          Whether you're placing a personal order, exploring wholesale pricing, or interested in
          an export partnership — our team is ready to help.
        </p>
        <div className="info-items">
          {INFO_ITEMS.map(({ Icon, label, href, value }) => (
            <div key={label} className="info-item">
              <div className="info-icon-wrap"><Icon size={18} strokeWidth={1.8} /></div>
              <div>
                <strong>{label}</strong>
                {href ? (
                  <a href={href(COMPANY)}>{value(COMPANY)}</a>
                ) : (
                  <span>{value(COMPANY)}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="sourcing-note">
          <strong>Sourcing Regions</strong>
          <div className="region-tags">
            {COMPANY.regions.map((r) => (
              <span key={r} className="region-tag">
                <MapPin size={11} strokeWidth={2.5} /> {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); submit(form) }}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input id="name" type="text" value={form.name} onChange={set('name')} placeholder="Jane Kamau" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input id="email" type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone / WhatsApp</label>
            <input id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+254 7XX XXX XXX" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select id="subject" value={form.subject} onChange={set('subject')} required>
              <option value="">Select a subject…</option>
              {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" rows={5} value={form.message} onChange={set('message')} placeholder="Tell us about your order or enquiry…" required />
        </div>
        {status === 'error' && (
          <div className="form-error">
            <AlertCircle size={16} strokeWidth={2} />
            Something went wrong. Please try again or contact us directly.
          </div>
        )}
        <button type="submit" className="btn btn-primary full-width" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
        <p className="form-note">Your details are saved securely. We respond within 24 hours.</p>
      </form>
    </div>
  )
}
