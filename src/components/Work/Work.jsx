import { useState, useEffect } from 'react'
import './Work.css'
import SegmentedPicker from '../SegmentedPicker/SegmentedPicker'

const FILTER_TABS = ['All', 'Platforms', 'AI & Data', 'SaaS']

const cases = [
  {
    id: 'bladehaus',
    category: 'Platforms',
    label: 'Barbershop & Beauty',
    title: 'BladeHaus — Smart Barbershop Booking Platform',
    desc: 'Built an intelligent booking platform for barbershops that lets clients pick their style and preferred time slot. Dynamic pricing fills empty slots by lowering prices during off-peak hours, driving higher occupancy and reducing no-shows.',
    results: ['35% fewer no-shows', '2x booking capacity', '90% slot fill rate'],
    tech: ['Dynamic Pricing', 'Booking Engine', 'Style Catalog'],
    url: 'https://golden-cut-booking.vercel.app/',
  },
  {
    id: 'aicareerschool',
    category: 'Platforms',
    label: 'EdTech',
    title: 'AI Career School — Arabic AI Course Platform',
    desc: 'Built a full Arabic-language course platform teaching AI image and video creation. Includes video hosting, enrollment management, promo codes, and integrated payment with InstaPay and Paymob for the Egyptian market.',
    results: ['Full Arabic RTL support', 'Sub-2s page loads', '4 payment methods'],
    tech: ['Next.js SSR', 'Supabase', 'Bunny Stream'],
  },
  {
    id: 'trendpredictor',
    category: 'AI & Data',
    label: 'Marketing Intelligence',
    title: 'Trend Predictor — Market Intelligence Engine',
    desc: 'Scrapes social media and ad platforms to surface what your customers want, what content is trending in your niche, and which ads are actually working — delivered as actionable weekly briefs with velocity scoring.',
    results: ['7-day trend lead time', '5 platforms tracked', 'Weekly actionable briefs'],
    tech: ['Social Scraping', 'Trend Scoring', 'Ad Intelligence'],
    url: 'https://trendsetter-insight-hub.vercel.app/',
  },
  {
    id: 'loqta',
    category: 'Platforms',
    label: 'Real Estate',
    title: 'Loqta — AI-Powered Real Estate Platform',
    desc: 'Built a modern property listing and search platform for the Egyptian market. Intelligent filtering, map-based browsing, and automated lead capture turn casual browsers into qualified buyer inquiries.',
    results: ['3x lead conversion', '60% faster property matching', 'Bilingual EN/AR'],
    tech: ['Property Search', 'Map Integration', 'Lead Capture'],
    url: 'https://loqta-your-great-catch.vercel.app/',
  },
  {
    id: 'nexora',
    category: 'AI & Data',
    label: 'E-Commerce',
    title: 'Nexora — Intelligent Inventory & Demand Forecasting',
    desc: 'Built a full AI-powered inventory management system for a retail chain. The system predicts demand with 94% accuracy, auto-reorders stock, and integrates across 12 warehouse locations.',
    results: ['94% forecast accuracy', '£2.1M cost savings / yr', '3 weeks to deploy'],
    tech: ['Custom ML Model', 'Real-time API', 'React Dashboard'],
  },
  {
    id: 'meridian',
    category: 'AI & Data',
    label: 'Financial Services',
    title: 'Meridian — AI Risk Assessment Engine',
    desc: 'Replaced a legacy underwriting process with a fine-tuned risk scoring model. What took analysts 3 days to process now runs in seconds with higher accuracy than human review.',
    results: ['89% faster processing', '40% fewer false positives', 'Fully compliant'],
    tech: ['LLM Fine-tuning', 'Document AI', 'Audit Trail'],
  },
  {
    id: 'vantage',
    category: 'SaaS',
    label: 'SaaS / B2B',
    title: 'Vantage — Full AI-Native CRM Platform',
    desc: 'Greenfield build of a B2B CRM with embedded AI throughout — lead scoring, email generation, call summarization, and churn prediction built natively into every workflow.',
    results: ['11k+ active users', '68% faster deal cycles', 'Series A funded'],
    tech: ['Full-Stack Build', 'GPT Integration', 'Voice AI', 'Analytics'],
  },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState(0)
  const [listKey, setListKey] = useState(0)
  const [activeDemo, setActiveDemo] = useState(null)

  // Handle filter change — bump listKey to re-trigger card entry animations
  const handleFilter = (i) => {
    if (i === activeFilter) return
    setListKey((k) => k + 1)
    setActiveFilter(i)
  }

  const filteredCases =
    activeFilter === 0
      ? cases
      : cases.filter((c) => c.category === FILTER_TABS[activeFilter])

  // ESC closes demo modal
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setActiveDemo(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Body scroll lock while demo is open
  useEffect(() => {
    document.body.classList.toggle('demo-open', !!activeDemo)
    return () => document.body.classList.remove('demo-open')
  }, [activeDemo])

  return (
    <section className="work section" id="work">
      <div className="container">

        {/* ── Header ── */}
        <div className="work__header reveal">
          <span className="section-label">Case Studies</span>
          <h2 className="section-heading">
            Proven Results,
            <br />
            <span className="accent">Real Businesses</span>
          </h2>
          <p className="section-sub">
            Here's what we've built for companies that decided to stop
            waiting and start scaling with AI.
          </p>
        </div>

        {/* ── Segmented Filter ── */}
        <div className="work__filter reveal delay-1">
          <SegmentedPicker
            tabs={FILTER_TABS}
            active={activeFilter}
            onChange={handleFilter}
          />
          <span className="work__filter-count">
            {filteredCases.length} project{filteredCases.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* ── Case Study Cards ── */}
        <div className="work__list" key={listKey}>
          {filteredCases.map((c, i) => (
            <div
              key={c.id}
              id={`case-${c.id}`}
              className="case-card"
              style={{ '--stagger': i }}
            >
              <div className="case-card__meta">
                <span className="case-label">{c.label}</span>
              </div>

              <div className="case-card__body">
                <div className="case-card__left">
                  <h3 className="case-card__title">{c.title}</h3>
                  <p className="case-card__desc">{c.desc}</p>

                  {/* Tech stack */}
                  <div className="case-card__tech">
                    {c.tech.map((t) => (
                      <span key={t} className="case-tech-tag">{t}</span>
                    ))}
                  </div>

                  {/* Try It Live — only when url exists */}
                  {c.url && (
                    <button
                      className="case-card__demo-btn"
                      onClick={() => setActiveDemo(c)}
                    >
                      Try It Live →
                    </button>
                  )}
                </div>

                <div className="case-card__right">
                  {c.results.map((r) => (
                    <div key={r} className="case-result">
                      <span className="case-result__icon">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-card__number">0{i + 1}</div>
            </div>
          ))}

          {/* Empty state */}
          {filteredCases.length === 0 && (
            <div className="work__empty">
              <p>No projects in this category yet — more coming soon.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Demo Modal ── */}
      {activeDemo && (
        <>
          <div className="demo-modal-overlay" onClick={() => setActiveDemo(null)}>
            <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
              <div className="demo-modal__header">
                <span className="demo-modal__title">{activeDemo.title}</span>
                <button className="demo-modal__close" onClick={() => setActiveDemo(null)}>✕</button>
              </div>
              <iframe
                src={activeDemo.url}
                className="demo-modal__iframe"
                title={activeDemo.title}
              />
            </div>
          </div>
          {/* Floating close — always reachable on mobile */}
          <button
            className="demo-modal__close-float"
            onClick={() => setActiveDemo(null)}
            aria-label="Close demo"
          >✕</button>
        </>
      )}
    </section>
  )
}
