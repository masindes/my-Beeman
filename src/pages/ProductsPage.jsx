import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Products from '../components/Products'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        crumb="Products"
        subtitle="100% pure, raw & natural honey — sourced directly from Kenya's highland beekeepers."
      />
      <Products />
      <section className="cta-banner">
        <div className="cta-inner">
          <h2>Need bulk or custom orders?</h2>
          <p>We supply hotels, retailers, exporters, and health brands — at scale.</p>
          <Link to="/contact" className="btn btn-primary">
            Request a Quote <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  )
}
