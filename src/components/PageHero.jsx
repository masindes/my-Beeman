import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, crumb, darkNext = false }) {
  return (
    <section className={`page-hero${darkNext ? ' no-fade' : ''}`}>
      <div className="page-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={12} strokeWidth={2.5} />
          <span>{crumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
      </div>
    </section>
  )
}
