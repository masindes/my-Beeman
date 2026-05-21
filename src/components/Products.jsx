import { Link } from 'react-router-dom'
import { Droplets, Flower2, Sparkles, TreePine, Gift, Package, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export const PRODUCTS = [
  {
    id: 1,
    Icon: Droplets,
    name: 'Raw Wildflower Honey',
    desc: "Unfiltered, unprocessed honey bursting with natural enzymes and antioxidants from Kenya's wildflowers.",
    sizes: ['250g — KES 380', '500g — KES 650', '1kg — KES 1,200'],
    tag: 'Best Seller',
    gradient: 'linear-gradient(140deg, #b86e00 0%, #f0a500 50%, #f5c842 100%)',
    tagBg: '#c47a00',
    iconColor: '#fff',
  },
  {
    id: 2,
    Icon: Flower2,
    name: 'Pure Acacia Honey',
    desc: 'Light golden honey with a delicate floral flavour. Low glycemic index, loved by health-conscious consumers.',
    sizes: ['250g — KES 420', '500g — KES 780'],
    tag: 'Premium',
    gradient: 'linear-gradient(140deg, #8a5c00 0%, #c8860a 50%, #e8a015 100%)',
    tagBg: '#8a5c00',
    iconColor: '#fff',
  },
  {
    id: 3,
    Icon: Sparkles,
    name: 'Creamed Honey',
    desc: 'Smooth, spreadable honey with a velvety texture. Perfect for toast, baking, and gifting.',
    sizes: ['250g — KES 400', '500g — KES 720'],
    tag: 'Popular',
    gradient: 'linear-gradient(140deg, #d4900f 0%, #f0c060 60%, #fde68a 100%)',
    tagBg: '#b87800',
    iconColor: '#8a5c00',
  },
  {
    id: 4,
    Icon: TreePine,
    name: 'Highland Forest Honey',
    desc: 'Dark, rich honey from deep forest blossoms in Nandi County. Bold flavour with a hint of earthiness.',
    sizes: ['250g — KES 450', '500g — KES 850'],
    tag: 'Specialty',
    gradient: 'linear-gradient(140deg, #1a3d18 0%, #2d6b2a 50%, #4a8c45 100%)',
    tagBg: '#2d6b2a',
    iconColor: '#a8d5a2',
  },
  {
    id: 5,
    Icon: Gift,
    name: 'Premium Gift Set',
    desc: 'A beautifully curated set of three signature Beeman honey varieties — the perfect gift for any occasion.',
    sizes: ['3 × 250g — KES 1,350', '3 × 500g — KES 2,200'],
    tag: 'Gift',
    gradient: 'linear-gradient(140deg, #0d1b3e 0%, #1a3a6b 50%, #2556a0 100%)',
    tagBg: '#1a3a6b',
    iconColor: '#f0a500',
  },
  {
    id: 6,
    Icon: Package,
    name: 'Bulk / Export',
    desc: 'Food-service and export-grade honey in large quantities. Ideal for hotels, retailers, and distributors.',
    sizes: ['5kg+', '25kg drums', 'Custom volumes'],
    tag: 'B2B',
    gradient: 'linear-gradient(140deg, #1a3a28 0%, #2a5c40 50%, #3d7a58 100%)',
    tagBg: '#2a5c40',
    iconColor: '#a0d8b8',
  },
]

export default function Products({ limit }) {
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS
  const [ref, visible] = useReveal(0.08)

  return (
    <section className="products">
      <div className="section-inner">
        <p className="section-label">Our Range</p>
        <h2 className="section-title">Pure Honey Products</h2>
        <div className="section-accent"><span /></div>
        <p className="section-sub">
          Every jar is sourced directly from our partner beekeepers in Nandi, Baringo, and Kericho
          counties — tested for purity and bottled with care.
        </p>

        <div ref={ref} className={`products-grid reveal-grid${visible ? ' in' : ''}`}>
          {items.map(({ id, Icon, name, desc, sizes, tag, gradient, tagBg, iconColor }, i) => (
            <div key={id} className="product-card" style={{ '--i': i }}>
              <div className="product-header" style={{ background: gradient }}>
                <div className="product-header-icon">
                  <Icon size={52} strokeWidth={1.2} color={iconColor} />
                </div>
                <span className="product-tag" style={{ background: tagBg }}>{tag}</span>
              </div>
              <div className="product-body">
                <h3 className="product-name">{name}</h3>
                <p className="product-desc">{desc}</p>
                <ul className="product-sizes">
                  {sizes.map((s) => <li key={s}>{s}</li>)}
                </ul>
                <Link to="/contact" className="btn-gold-outline">
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
