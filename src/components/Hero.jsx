import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { COMPANY } from '../config'

const STATS = [
  { num: `Est. ${COMPANY.established}`, label: 'Founded' },
  { num: '3',    label: 'Sourcing Counties' },
  { num: '100%', label: 'Pure & Natural'    },
  { num: '4',    label: 'Core Markets'      },
]

export default function Hero() {
  const scrollDown = () =>
    document.getElementById('home-content')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hex-grid">
          {Array.from({ length: 35 }).map((_, i) => <div key={i} className="hex" />)}
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-label">— OFFICIAL COMPANY PROFILE —</p>
        <h1 className="hero-title">BEEMAN</h1>
        <p className="hero-tagline">{COMPANY.tagline}</p>
        <p className="hero-sub">
          100% Pure, Raw &amp; Natural Honey sourced from the pristine highlands of Kenya.
          Trusted by households, health-conscious consumers, and export partners worldwide.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">
            Explore Products <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="hero-stats">
        {STATS.map((s, i) => (
          <Fragment key={s.label}>
            <div className="stat">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
            {i < STATS.length - 1 && <div className="stat-divider" />}
          </Fragment>
        ))}
      </div>

      <button className="hero-scroll" onClick={scrollDown} aria-label="Scroll down">
        <ChevronDown size={24} strokeWidth={1.5} />
      </button>
    </section>
  )
}
