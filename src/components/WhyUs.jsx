import { FlaskConical, MapPin, Leaf, ShieldCheck, Award, Truck } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const FEATURES = [
  { Icon: FlaskConical, title: '100% Pure & Raw',      desc: 'Never heated above hive temperature. No additives, no fillers — just honey as nature made it.' },
  { Icon: MapPin,       title: 'Direct from Source',   desc: 'We partner directly with beekeepers, cutting middlemen and ensuring full traceability from hive to jar.' },
  { Icon: Leaf,         title: 'Ethically Harvested',  desc: 'Sustainable beekeeping practices that protect bees, biodiversity, and Kenya\'s highland ecosystems.' },
  { Icon: ShieldCheck,  title: 'Quality Tested',       desc: 'Every batch is tested for purity, moisture content, and food safety before it reaches you.' },
  { Icon: Award,        title: 'Proudly Kenyan',       desc: 'Supporting local beekeeping communities in Nandi, Baringo, and Kericho counties since 2024.' },
  { Icon: Truck,        title: 'Flexible for B2B',     desc: 'Retail jars to bulk drums — we supply supermarkets, hotels, exporters, and health brands.' },
]

export default function WhyUs() {
  const [ref, visible] = useReveal(0.08)

  return (
    <section className="why-us">
      <div className="section-inner">
        <p className="section-label">Why Beeman</p>
        <h2 className="section-title">The Beeman Difference</h2>
        <div className="section-accent"><span /></div>
        <p className="section-sub">
          We believe the best honey needs nothing added and nothing taken away — here's what makes
          Beeman the choice of discerning consumers and trusted businesses.
        </p>

        <div ref={ref} className={`features-grid reveal-grid${visible ? ' in' : ''}`}>
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <div key={title} className="feature-card" style={{ '--i': i }}>
              <div className="feature-icon-wrap">
                <Icon size={24} strokeWidth={1.6} color="var(--gold)" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
