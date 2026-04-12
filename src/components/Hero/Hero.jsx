import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const scrollY = window.scrollY
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" ref={heroRef} id="home">
      {/* Liquid Glass blob scene */}
      <div className="scene" aria-hidden="true" ref={parallaxRef}>
        <div className="scene__blob scene__blob--1"></div>
        <div className="scene__blob scene__blob--2"></div>
        <div className="scene__blob scene__blob--3"></div>
        <div className="hero__grid"></div>
      </div>

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="particle" style={{
            '--delay': `${Math.random() * 8}s`,
            '--x': `${Math.random() * 100}%`,
            '--dur': `${4 + Math.random() * 6}s`,
            '--size': `${2 + Math.random() * 4}px`,
          }}></span>
        ))}
      </div>

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          AI-Powered Business Solutions
        </div>

        {/* Heading */}
        <h1 className="hero__heading">
          We Build the
          <br />
          <span className="hero__heading-accent">Intelligence</span>
          <br />
          Behind Your Business
        </h1>

        {/* Subtext */}
        <p className="hero__sub">
          Solvix delivers custom AI systems, automation pipelines, and
          intelligent software that transforms how businesses operate — at scale.
        </p>

        {/* CTA Row */}
        <div className="hero__actions">
          <button className="btn-primary hero__cta" onClick={handleCTA} id="hero-cta-btn">
            Book a Free Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-outline" onClick={handleWork}>
            View Our Work
          </button>
        </div>

        {/* Stats row */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">AI Systems Deployed</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">98%</span>
            <span className="hero__stat-label">Client Retention</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">3×</span>
            <span className="hero__stat-label">Avg. Efficiency Gain</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot"></div>
        </div>
      </div>
    </section>
  )
}
