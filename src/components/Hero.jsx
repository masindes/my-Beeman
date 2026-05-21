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

const HEX_COUNT = 40

export default function Hero() {
  const scrollDown = () =>
    document.getElementById('home-content')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      {/* Background layers */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hex-layer l1">
          {Array.from({ length: HEX_COUNT }).map((_, i) => <div key={i} className="hex" />)}
        </div>
        <div className="hex-layer l2">
          {Array.from({ length: HEX_COUNT }).map((_, i) => <div key={i} className="hex" />)}
        </div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <p className="hero-label">— Pure Honey from the Kenyan Highlands —</p>
        <h1 className="hero-title">BEEMAN</h1>
        <div className="hero-divider" />
        <p className="hero-tagline">{COMPANY.tagline}</p>
        <p className="hero-sub">
          100% Pure, Raw &amp; Natural Honey sourced from the pristine highlands of Kenya —
          trusted by households, chefs, and export partners worldwide.
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

      {/* Stats bar */}
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
        <ChevronDown size={22} strokeWidth={1.5} />
      </button>
    </section>
  )
}
