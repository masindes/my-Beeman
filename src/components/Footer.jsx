import { Link } from 'react-router-dom'
import { Hexagon, Phone, Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react'
import { COMPANY } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Hexagon size={20} strokeWidth={1.5} />
            BEEMAN
          </Link>
          <p className="footer-tagline">{COMPANY.tagline}</p>
          <p className="footer-reg">Registered under the Companies Act, Kenya</p>
        </div>

        <div className="footer-nav">
          <strong>Navigate</strong>
          <ul>
            {[['/', 'Home'], ['/products', 'Products'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <strong>Contact</strong>
          <ul>
            <li>
              <Phone size={13} strokeWidth={2} />
              <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
            </li>
            <li>
              <Mail size={13} strokeWidth={2} />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li>
              <MapPin size={13} strokeWidth={2} />
              <span>{COMPANY.address}</span>
            </li>
            <li>
              <Globe size={13} strokeWidth={2} />
              <span>{COMPANY.website}</span>
            </li>
          </ul>
        </div>

        <div className="footer-regions">
          <strong>Sourcing Regions</strong>
          <ul>
            {COMPANY.regions.map((r) => (
              <li key={r}>
                <MapPin size={12} strokeWidth={2} />
                {r}
              </li>
            ))}
          </ul>
          <div className="footer-markets">
            {['Retail', 'Health & Wellness', 'Food Service', 'Export'].map((m) => (
              <span key={m} className="footer-tag">{m}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Beeman Honey Limited. All rights reserved.</p>
        <p>Est. {COMPANY.established} · Nairobi, Kenya</p>
      </div>
    </footer>
  )
}
