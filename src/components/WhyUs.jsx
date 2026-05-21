import { FlaskConical, MapPin, Leaf, ShieldCheck, Award, Truck } from 'lucide-react'

const FEATURES = [
  {
    Icon: FlaskConical,
    title: '100% Pure & Raw',
    desc: 'Never heated above hive temperature. No additives, no fillers — just honey as nature made it.',
  },
  {
    Icon: MapPin,
    title: 'Direct from Source',
    desc: 'We partner directly with beekeepers, cutting middlemen and ensuring full traceability from hive to jar.',
  },
  {
    Icon: Leaf,
    title: 'Ethically Harvested',
    desc: 'Sustainable beekeeping practices that protect bees, biodiversity, and the highland ecosystems.',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality Tested',
    desc: 'Every batch is tested for purity, moisture content, and food safety before it reaches you.',
  },
  {
    Icon: Award,
    title: 'Proudly Kenyan',
    desc: 'Supporting local beekeeping communities in Nandi, Baringo, and Kericho counties since 2024.',
  },
  {
    Icon: Truck,
    title: 'Flexible for B2B',
    desc: 'Retail jars to bulk drums — we supply supermarkets, hotels, exporters, and health brands.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="section-inner">
        <p className="section-label">Why Beeman</p>
        <h2 className="section-title">The Beeman Difference</h2>
        <p className="section-sub">
          We believe the best honey needs nothing added and nothing taken away. Here's what makes
          Beeman the choice of discerning consumers and trusted businesses.
        </p>
        <div className="features-grid">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon-wrap">
                <Icon size={26} strokeWidth={1.5} color="var(--gold)" />
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
