import { useState, useEffect, useRef, useCallback } from 'react'
import './Navbar.css'
import SolvixLogo from '../SolvixLogo/SolvixLogo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work'     },
  { label: 'Process',  href: '#process'  },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]        = useState(false)
  const [activeSection,  setActiveSection]   = useState('')
  const [navIndicator,   setNavIndicator]    = useState({ left: 0, width: 0, opacity: 0 })

  const menuRef          = useRef(null)
  const linksContainerRef = useRef(null)
  const linkRefs         = useRef([])

  // ── Measure active link position for the sliding indicator ──
  const measureActiveLink = useCallback(() => {
    const activeIdx = navLinks.findIndex(
      (l) => l.href.replace('#', '') === activeSection
    )

    if (activeIdx === -1) {
      setNavIndicator((s) => ({ ...s, opacity: 0 }))
      return
    }

    const el        = linkRefs.current[activeIdx]
    const container = linksContainerRef.current
    if (!el || !container) return

    const cRect = container.getBoundingClientRect()
    const tRect = el.getBoundingClientRect()

    setNavIndicator({
      left:    tRect.left - cRect.left,
      width:   tRect.width,
      opacity: 1,
    })
  }, [activeSection])

  // Re-measure whenever active section changes
  useEffect(() => {
    requestAnimationFrame(measureActiveLink)
  }, [measureActiveLink])

  // Re-measure on window resize
  useEffect(() => {
    window.addEventListener('resize', measureActiveLink, { passive: true })
    return () => window.removeEventListener('resize', measureActiveLink)
  }, [measureActiveLink])

  // ── Scroll detection + active section tracking ──
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['services', 'work', 'process', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Body scroll lock when mobile menu is open ──
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  // ── Close mobile menu on outside click ──
  useEffect(() => {
    const handleOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown',  handleOutside)
    document.addEventListener('touchstart', handleOutside)
    return () => {
      document.removeEventListener('mousedown',  handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [menuOpen])

  // ── Close on Escape ──
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handleLinkClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <>
      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        ref={menuRef}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner container">

          {/* ── Logo ── */}
          <a
            href="#"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            aria-label="Solvix — back to top"
          >
            <SolvixLogo height={45} />
          </a>

          {/* ── Desktop links — glass pill with sliding indicator ── */}
          <div
            ref={linksContainerRef}
            className="navbar__links"
            role="navigation"
            aria-label="Site sections"
          >
            {/* Sliding glass indicator */}
            <div
              className="navbar__link-indicator"
              aria-hidden="true"
              style={{
                left:    `${navIndicator.left}px`,
                width:   `${navIndicator.width}px`,
                opacity: navIndicator.opacity,
              }}
            />

            {navLinks.map((link, i) => (
              <button
                key={link.label}
                ref={(el) => { linkRefs.current[i] = el }}
                className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <button
            className="btn-primary navbar__cta"
            onClick={() => handleLinkClick('#contact')}
          >
            Book a Call
          </button>

          {/* ── Hamburger ── */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          id="mobile-menu"
          className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <div className="navbar__mobile-inner">
            <nav className="navbar__mobile-links" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <button
                  key={link.label}
                  className={`navbar__mobile-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.href)}
                  style={{ '--i': i }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span className="navbar__mobile-link-num">0{i + 1}</span>
                  {link.label}
                  <svg className="navbar__mobile-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </nav>

            <div className="navbar__mobile-footer">
              <button
                className="btn-primary navbar__mobile-cta"
                onClick={() => handleLinkClick('#contact')}
                tabIndex={menuOpen ? 0 : -1}
              >
                Book a Free Consultation →
              </button>
              <p className="navbar__mobile-note">No commitment. No fluff.</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
