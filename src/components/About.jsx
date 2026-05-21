import { MapPin, ShoppingCart, Heart, UtensilsCrossed, Plane } from 'lucide-react'
import { COMPANY } from '../config'

const REGIONS = [
  { name: 'Nandi County',   desc: 'Highland forest honey — rich, dark, and bold.' },
  { name: 'Baringo County', desc: 'Acacia and wildflower varieties from semi-arid lowlands.' },
  { name: 'Kericho County', desc: 'Tea-region florals producing light, aromatic honey.' },
]

const MARKETS = [
  { Icon: ShoppingCart,    name: 'Retail',            desc: 'Supermarkets, health stores, and online platforms.' },
  { Icon: Heart,           name: 'Health & Wellness', desc: 'Organic & natural food brands, pharmacies, gyms.' },
  { Icon: UtensilsCrossed, name: 'Food Service',      desc: 'Hotels, restaurants, bakeries, and caterers.' },
  { Icon: Plane,           name: 'Export',            desc: 'International markets — EU, Middle East, and beyond.' },
]

export default function About() {
  return (
    <section className="about">
      <div className="section-inner">
        <p className="section-label light">Our Story</p>
        <h2 className="section-title light">About Beeman Honey</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Founded in <strong>{COMPANY.established}</strong> and headquartered in Nairobi,{' '}
              <strong>Beeman Honey Limited</strong> was born out of a commitment to bring the finest,
              most authentic Kenyan honey to homes and businesses — locally and globally.
            </p>
            <p>
              We work directly with trusted beekeepers across three of Kenya's most pristine
              highland counties, ensuring every jar is traceable, ethical, and holds the full
              nutritional value nature intended.
            </p>
            <p>
              Registered under the Companies Act of Kenya, we operate with full compliance and
              transparency — from hive to shelf.
            </p>
            <div className="company-details">
              {[
                ['Headquarters', COMPANY.address],
                ['Registration', 'Companies Act, Kenya'],
                ['Website',      COMPANY.website],
                ['Email',        COMPANY.email],
                ['Phone',        COMPANY.phone],
              ].map(([label, value]) => (
                <div key={label} className="detail-row">
                  <span className="detail-label">{label}</span>
                  <span className="detail-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-regions">
            <h3 className="sub-heading">Sourcing Regions</h3>
            {REGIONS.map((r) => (
              <div key={r.name} className="region-card">
                <MapPin size={16} strokeWidth={2} color="var(--gold)" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <strong>{r.name}</strong>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="markets-section">
          <h3 className="sub-heading light center">Core Markets</h3>
          <div className="markets-grid">
            {MARKETS.map(({ Icon, name, desc }) => (
              <div key={name} className="market-card">
                <div className="market-icon-wrap">
                  <Icon size={28} strokeWidth={1.5} color="var(--gold-light)" />
                </div>
                <strong>{name}</strong>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
