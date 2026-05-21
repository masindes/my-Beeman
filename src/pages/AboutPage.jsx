import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import About from '../components/About'
import WhyUs from '../components/WhyUs'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Beeman"
        crumb="About"
        subtitle="The story behind Kenya's purest honey — from highland hives to your table."
        darkNext
      />
      <About />
      <WhyUs />
      <section className="cta-banner">
        <div className="cta-inner">
          <h2>Partner with Beeman Honey</h2>
          <p>Interested in stocking, distributing, or exporting our products? Let's talk.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  )
}
