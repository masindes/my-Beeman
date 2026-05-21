import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Hexagon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/products', label: 'Products' },
  { to: '/about',    label: 'About'    },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    // Set initial state correctly (e.g. on page refresh mid-scroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Inner pages always show solid nav; home page only when scrolled
  const solid = !isHome || scrolled

  return (
    <nav className={`navbar${solid ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <Hexagon size={22} strokeWidth={1.5} />
          <span>BEEMAN</span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Order Now
            </Link>
          </li>
        </ul>

        <div className="nav-right">
          {/* Sliding pill theme toggle */}
          <button
            className={`theme-pill${theme === 'dark' ? ' dark' : ''}`}
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className="pill-track">
              <Sun  size={13} strokeWidth={2.5} className="pill-sun"  />
              <Moon size={13} strokeWidth={2.5} className="pill-moon" />
              <span className="pill-thumb" />
            </span>
          </button>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
