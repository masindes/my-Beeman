import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, crumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} strokeWidth={2.5} />
          <span>{crumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      </div>
    </section>
  )
}
