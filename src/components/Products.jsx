import { Link } from 'react-router-dom'
import { Droplets, Flower2, Sparkles, TreePine, Gift, Package, ArrowRight } from 'lucide-react'

export const PRODUCTS = [
  {
    id: 1,
    Icon: Droplets,
    name: 'Raw Wildflower Honey',
    desc: "Unfiltered, unprocessed honey bursting with natural enzymes and antioxidants from Kenya's wildflowers.",
    sizes: ['250g — KES 380', '500g — KES 650', '1kg — KES 1,200'],
    tag: 'Best Seller',
    accent: '#e8a015',
  },
  {
    id: 2,
    Icon: Flower2,
    name: 'Pure Acacia Honey',
    desc: 'Light golden honey with a delicate floral flavour. Low glycemic index, loved by health-conscious consumers.',
    sizes: ['250g — KES 420', '500g — KES 780'],
    tag: 'Premium',
    accent: '#c8860a',
  },
  {
    id: 3,
    Icon: Sparkles,
    name: 'Creamed Honey',
    desc: 'Smooth, spreadable honey with a velvety texture. Perfect for toast, baking, and gifting.',
    sizes: ['250g — KES 400', '500g — KES 720'],
    tag: 'Popular',
    accent: '#d4900f',
  },
  {
    id: 4,
    Icon: TreePine,
    name: 'Highland Forest Honey',
    desc: 'Dark, rich honey from deep forest blossoms in Nandi County. Bold flavour with a hint of earthiness.',
    sizes: ['250g — KES 450', '500g — KES 850'],
    tag: 'Specialty',
    accent: '#5a7a3a',
  },
  {
    id: 5,
    Icon: Gift,
    name: 'Premium Gift Set',
    desc: 'A beautifully curated set of three signature Beeman honey varieties — the perfect gift for any occasion.',
    sizes: ['3 × 250g — KES 1,350', '3 × 500g — KES 2,200'],
    tag: 'Gift',
    accent: '#1a4e8a',
  },
  {
    id: 6,
    Icon: Package,
    name: 'Bulk / Export',
    desc: 'Food-service and export-grade honey in large quantities. Ideal for hotels, retailers, and distributors.',
    sizes: ['5kg+', '25kg drums', 'Custom volumes'],
    tag: 'B2B',
    accent: '#2d6e4a',
  },
]

export default function Products({ limit }) {
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS

  return (
    <section className="products">
      <div className="section-inner">
        <p className="section-label">Our Range</p>
        <h2 className="section-title">Pure Honey Products</h2>
        <p className="section-sub">
          Every jar is sourced directly from our partner beekeepers in Nandi, Baringo, and Kericho
          counties — tested for purity and bottled with care.
        </p>

        <div className="products-grid">
          {items.map(({ id, Icon, name, desc, sizes, tag, accent }) => (
            <div key={id} className="product-card">
              <div className="product-icon-wrap" style={{ background: `${accent}14`, borderColor: `${accent}28` }}>
                <Icon size={44} strokeWidth={1.2} color={accent} />
                <span className="product-tag" style={{ background: accent }}>{tag}</span>
              </div>
              <div className="product-body">
                <h3 className="product-name">{name}</h3>
                <p className="product-desc">{desc}</p>
                <ul className="product-sizes">
                  {sizes.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <Link to="/contact" className="btn btn-gold-outline">
                  Enquire / Order
                </Link>
              </div>
            </div>
          ))}
        </div>

        {limit && PRODUCTS.length > limit && (
          <div className="section-cta">
            <Link to="/products" className="btn btn-primary">
              View All Products <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
