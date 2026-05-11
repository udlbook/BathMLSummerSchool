import { useState, useEffect } from 'react'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
  { href: '#about',        label: 'About' },
  { href: '#programme',    label: 'Programme' },
  { href: '#speakers',     label: 'Speakers' },
  { href: '#bath',         label: 'Visit Bath' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /** @param {React.MouseEvent<HTMLAnchorElement>} e */
  function handleLinkClick(e) {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const offset = 80
        const top = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#about" className="navbar__logo" onClick={handleLinkClick}>
        {/* <img
          src={`${BASE}Uni of Bath logo (white).png`}
          alt="University of Bath"
          className="navbar__uob-logo"
        /> */}
        <span className="navbar__logo-sep" aria-hidden="true" />
        Bath <span>ML</span>
      </a>

      <nav aria-label="Primary navigation">
        <ul className={`navbar__nav${menuOpen ? ' is-open' : ''}`} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__link" onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#registration"
              className="navbar__register"
              onClick={handleLinkClick}
            >
              Register
            </a>
          </li>
        </ul>
      </nav>

      <button
        className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  )
}
