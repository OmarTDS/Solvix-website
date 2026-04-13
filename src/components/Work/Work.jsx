import './Work.css'

const cases = [
  {
    id: 'nexora',
    label: 'E-Commerce',
    title: 'Nexora — Intelligent Inventory & Demand Forecasting',
    desc: 'Built a full AI-powered inventory management system for a retail chain. The system predicts demand with 94% accuracy, auto-reorders stock, and integrates across 12 warehouse locations.',
    results: ['94% forecast accuracy', '£2.1M cost savings / yr', '3 weeks to deploy'],
    tech: ['Custom ML Model', 'Real-time API', 'React Dashboard'],
    accent: '#39FF14',
  },
  {
    id: 'meridian',
    label: 'Financial Services',
    title: 'Meridian — AI Risk Assessment Engine',
    desc: 'Replaced a legacy underwriting process with a fine-tuned risk scoring model. What took analysts 3 days to process now runs in seconds with higher accuracy than human review.',
    results: ['89% faster processing', '40% fewer false positives', 'Fully compliant'],
    tech: ['LLM Fine-tuning', 'Document AI', 'Audit Trail'],
    accent: '#39FF14',
  },
  {
    id: 'vantage',
    label: 'SaaS / B2B',
    title: 'Vantage — Full AI-Native CRM Platform',
    desc: 'Greenfield build of a B2B CRM with embedded AI throughout — lead scoring, email generation, call summarization, and churn prediction built natively into every workflow.',
    results: ['11k+ active users', '68% faster deal cycles', 'Series A funded'],
    tech: ['Full-Stack Build', 'GPT Integration', 'Voice AI', 'Analytics'],
    accent: '#39FF14',
  },
  {
    id: 'bladehaus',
    label: 'Barbershop & Beauty',
    title: 'BladeHaus — Smart Barbershop Booking Platform',
    desc: 'Built an intelligent booking platform for barbershops that lets clients pick their style and preferred time slot. Dynamic pricing fills empty slots by lowering prices during off-peak hours, driving higher occupancy and reducing no-shows.',
    results: ['35% fewer no-shows', '2x booking capacity', '90% slot fill rate'],
    tech: ['Dynamic Pricing', 'Booking Engine', 'Style Catalog'],
    accent: '#39FF14',
  },
  {
    id: 'aicareerschool',
    label: 'EdTech',
    title: 'AI Career School — Arabic AI Course Platform',
    desc: 'Built a full Arabic-language course platform teaching AI image and video creation tools. Includes video hosting, enrollment management, promo codes, and integrated payment with InstaPay and Paymob for the Egyptian market.',
    results: ['Full Arabic RTL support', 'Sub-2s page loads', '4 payment methods'],
    tech: ['Next.js SSR', 'Supabase', 'Bunny Stream'],
    accent: '#39FF14',
  },
  {
    id: 'loqta',
    label: 'Real Estate',
    title: 'Loqta — AI-Powered Real Estate Platform',
    desc: 'Built a modern property listing and search platform for the Egyptian market. Intelligent filtering, map-based browsing, and automated lead capture turn casual browsers into qualified buyer inquiries.',
    results: ['3x lead conversion', '60% faster property matching', 'Bilingual EN/AR'],
    tech: ['Property Search', 'Map Integration', 'Lead Capture'],
    accent: '#39FF14',
  },
  {
    id: 'trendpredictor',
    label: 'Marketing Intelligence',
    title: 'Trend Predictor — A Market Intelligence Engine',
    desc: 'Scrapes social media and ad platforms to surface what your customers want, what content is trending in your niche, and which ads are actually working — delivered as actionable weekly briefs with velocity scoring.',
    results: ['7-day trend lead time', '5 platforms tracked', 'Weekly actionable briefs'],
    tech: ['Social Scraping', 'Trend Scoring', 'Ad Intelligence'],
    accent: '#39FF14',
  },
]

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="container">
        {/* Header */}
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

        {/* Case Studies */}
        <div className="work__list">
          {cases.map((c, i) => (
            <div
              key={c.id}
              id={`case-${c.id}`}
              className={`case-card reveal delay-${i + 1}`}
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
                </div>

                <div className="case-card__right">
                  {c.results.map((r) => (
                    <div key={r} className="case-result">
                      <span className="case-result__icon">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
        </div>
      </div>
    </section>
  )
}
