import { Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    name: 'Amina Wanjiku',
    role: 'Health & Wellness Coach · Nairobi',
    text: 'Beeman honey has completely replaced processed sugar in my household. The wildflower variety has a depth of flavour unlike anything from supermarket shelves — you can taste the highlands.',
    initials: 'AW',
    color: '#e8a015',
  },
  {
    name: 'David Otieno',
    role: 'Head Chef · Serena Hotel, Nairobi',
    text: 'We switched all kitchen honey to Beeman six months ago. The quality is consistent, traceable, and our guests have noticed the difference in our pastries and sauces.',
    initials: 'DO',
    color: '#1a4e8a',
  },
  {
    name: 'Grace Njoroge',
    role: 'Natural Foods Retailer · Mombasa',
    text: 'Our customers ask for Beeman by name now. Authentic, ethically sourced, beautifully packaged. The team is responsive and supply has always been reliable.',
    initials: 'GN',
    color: '#2d6e4a',
  },
]

function Stars() {
  return (
    <div className="t-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section className="testimonials">
      <div className="section-inner">
        <p className="section-label">What People Say</p>
        <h2 className="section-title">Trusted by Kenyans</h2>
        <p className="section-sub">
          From home kitchens to five-star hotels — here's what our customers have to say about
          Beeman honey.
        </p>

        <div ref={ref} className={`t-grid reveal-grid${visible ? ' in' : ''}`}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="t-card"
              style={{ '--i': i }}
            >
              <div className="t-quote-mark">"</div>
              <Stars />
              <p className="t-text">{t.text}</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <strong className="t-name">{t.name}</strong>
                  <span className="t-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
