import './Services.css'

const services = [
  {
    id: 'ai-chatbots',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 22l2-2h8l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="14" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="19" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'AI Chatbots & Virtual Agents',
    desc: 'Custom-trained conversational AI deployed across your website, CRM, or internal tools. Handles support, lead qualification, and scheduling 24/7.',
    tags: ['NLP', 'LLM Fine-Tuning', 'Integrations'],
  },
  {
    id: 'process-automation',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v4M14 20v4M4 14H8M20 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7l2.5 2.5M18.5 18.5L21 21M7 21l2.5-2.5M18.5 9.5L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Business Process Automation',
    desc: 'We map, analyze, and automate your repetitive workflows — from data entry to invoice processing — cutting operational costs by up to 70%.',
    tags: ['RPA', 'Workflow AI', 'API Orchestration'],
  },
  {
    id: 'custom-ai',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14c0-5 4-9 9-9s9 4 9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 22c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
        <path d="M5 14H3M25 14h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Custom AI Model Development',
    desc: 'Proprietary models trained on your data — for predictive analytics, image recognition, anomaly detection, or domain-specific intelligence.',
    tags: ['ML Engineering', 'Data Pipeline', 'Model Ops'],
  },
  {
    id: 'ai-systems',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7.5h4M7.5 12v4M20.5 12v4M12 20.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Full AI-Powered Systems',
    desc: 'End-to-end platforms built from the ground up with AI at the core. ERP systems, SaaS products, internal dashboards — all driven by intelligence.',
    tags: ['Full-Stack', 'System Design', 'AI Integration'],
  },
  {
    id: 'data-analytics',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L10 14l5 4 4-6 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="22" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Data Analytics & Intelligence',
    desc: 'Turn raw data into strategic insights. We build dashboards, reporting pipelines, and AI-driven forecasting systems tailored to your KPIs.',
    tags: ['BI Tools', 'Predictive Models', 'Real-time Data'],
  },
  {
    id: 'ai-consulting',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 23c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 5l1.5 1.5L24 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI Strategy & Consulting',
    desc: 'Not sure where to start? We audit your business, identify AI opportunities, and create a tailored roadmap to maximize ROI from AI investments.',
    tags: ['AI Audit', 'ROI Planning', 'Tech Roadmap'],
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        {/* Header */}
        <div className="services__header reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="section-heading">
            AI Solutions Built for
            <br />
            <span className="accent">Real Business Impact</span>
          </h2>
          <p className="section-sub">
            From standalone AI tools to fully integrated intelligent systems —
            we design and deploy solutions that scale with your ambition.
          </p>
        </div>

        {/* Grid */}
        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`service-card reveal delay-${(i % 3) + 1}`}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <div className="service-card__tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
              <div className="service-card__arrow">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
