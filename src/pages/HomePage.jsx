import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="home-content">
        <Products limit={4} />
        <WhyUs />
        <Testimonials />
        <section className="cta-banner">
          <div className="cta-inner">
            <h2>Ready to taste the difference?</h2>
            <p>
              Order directly, explore bulk pricing, or partner with us to bring Beeman
              honey to your customers.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link to="/products" className="btn btn-outline">
                Browse All Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
