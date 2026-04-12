import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: "We start with a free consultation to understand your business, challenges, and goals. No pitches — just deep listening and expert questions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI Audit & Roadmap',
    desc: "We audit your current processes, data assets, and tech stack to identify where AI delivers the highest ROI. You get a clear, actionable roadmap.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design & Build',
    desc: "Our engineers design, train, and develop your AI solution with full transparency. You see weekly progress, give feedback, and stay in control.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Deploy & Integrate',
    desc: "We handle deployment, integration into your existing tools, and staff training. Zero disruption to your live operations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Monitor & Optimise',
    desc: "AI isn't a one-time product. We monitor performance, retrain models, and continuously optimise your system as your business evolves.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
        {/* Header */}
        <div className="process__header reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-heading">
            Our Process is
            <br />
            <span className="accent">Transparent by Design</span>
          </h2>
          <p className="section-sub">
            From first conversation to long-term partnership — here's exactly
            how we transform your business with AI.
          </p>
        </div>

        {/* Steps */}
        <div className="process__steps">
          {steps.map((step, i) => (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className={`process-step reveal delay-${i + 1}`}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="process-step__connector"></div>
              )}

              <div className="process-step__icon">
                {step.icon}
              </div>

              <div className="process-step__content">
                <div className="process-step__num">{step.number}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
