import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        crumb="Contact"
        subtitle="Reach out for orders, wholesale enquiries, partnerships, or just to say hello."
      />
      <section className="contact-section">
        <div className="section-inner">
          <Contact />
        </div>
      </section>
    </>
  )
}
