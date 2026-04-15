import { useState } from 'react'
import './Contact.css'

const dataFlowSteps = [
  {
    icon: '📝',
    label: 'You fill the form',
    desc: 'Your name, phone, and message are entered on this page.',
  },
  {
    icon: '🔒',
    label: 'Secure transmission',
    desc: 'Data is sent via HTTPS encryption directly through EmailJS — no third-party database stores your info.',
  },
  {
    icon: '📧',
    label: 'Lands in our inbox',
    desc: "Your inquiry arrives directly in Solvix's business email. No middleman, no CRM, just a direct channel.",
  },
  {
    icon: '📞',
    label: 'We call you back',
    desc: 'Within 24 hours, a member of our team reaches out to schedule your free consultation.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', service: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [showDataFlow, setShowDataFlow] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission (replace with EmailJS when email is configured)
    await new Promise((r) => setTimeout(r, 1500))

    // TODO: Replace with real EmailJS call:
    // await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')

    setStatus('sent')
    setForm({ name: '', phone: '', email: '', message: '', service: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact__header reveal">
          <span className="section-label">Book a Consultation</span>
          <h2 className="section-heading">
            Ready to Build Your
            <br />
            <span className="accent">AI Advantage?</span>
          </h2>
          <p className="section-sub">
            Tell us about your business. We'll get back to you within 24 hours
            to schedule your free strategy consultation.
          </p>
        </div>

        <div className="contact__grid">
          {/* Form */}
          <div className="contact__form-wrap reveal-left">
            {status === 'sent' ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>
                  We'll be in touch within 24 hours to schedule your free
                  consultation. Keep an eye on your inbox.
                </p>
                <button className="btn-outline" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} id="consultation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Phone Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 7700 000000"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Business Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service" className="form-label">Service You're Interested In</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="">Select a service...</option>
                    <option value="ai-chatbot">AI Chatbot / Virtual Agent</option>
                    <option value="automation">Business Process Automation</option>
                    <option value="custom-ai">Custom AI Model</option>
                    <option value="full-system">Full AI-Powered System</option>
                    <option value="analytics">Data Analytics & Intelligence</option>
                    <option value="consulting">AI Strategy & Consulting</option>
                    <option value="unsure">Not Sure — Need Advice</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Tell Us About Your Business *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your business, the challenge you're facing, and what you'd like to achieve with AI..."
                    className="form-input form-textarea"
                    required
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  disabled={status === 'sending'}
                  id="contact-submit-btn"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Book My Free Consultation
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="form-note">
                  🔒 Your data is encrypted and never shared with third parties.
                </p>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="contact__side reveal-right">
            {/* Direct contact info */}
            <div className="contact__info-card">
              <h3 className="contact__info-title">Or Reach Us Directly</h3>
              <div className="contact__info-items">
                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.5 3A1.5 1.5 0 002 4.5v.528c0 3.956 2.256 7.394 5.591 9.126l.553.291.553-.29C12.02 12.42 14.5 8.76 14.5 4.5V4.5A1.5 1.5 0 0013 3h-1.38a1.5 1.5 0 00-1.342.83L9.5 5.5h-1L7.72 3.83A1.5 1.5 0 006.38 3H3.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact__info-label">Phone</div>
                    <a href="tel:+201099641622" className="contact__info-value">+201099641622</a>
                  </div>
                </div>
                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2 5l7 5 7-5M2 4h14v10H2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact__info-label">Email</div>
                    <a href="mailto:omar@solvix.soltutions" className="contact__info-value">omar@solvix.solutions</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Data flow */}
            <div className="contact__dataflow">
              <button
                className="contact__dataflow-toggle"
                onClick={() => setShowDataFlow(!showDataFlow)}
                id="data-flow-toggle"
              >
                <span>What happens to my data?</span>
                <svg
                  width="16" height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ transform: showDataFlow ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {showDataFlow && (
                <div className="contact__dataflow-content">
                  {dataFlowSteps.map((step, i) => (
                    <div key={i} className="dataflow-step">
                      <div className="dataflow-step__icon">{step.icon}</div>
                      <div>
                        <div className="dataflow-step__label">{step.label}</div>
                        <div className="dataflow-step__desc">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                  <p className="dataflow-note">
                    We do not sell, share, or store your personal data beyond what is needed to respond to your inquiry. You can request deletion at any time by emailing us.
                  </p>
                </div>
              )}
            </div>

            {/* Response time */}
            <div className="contact__promise">
              <div className="contact__promise-icon">⚡</div>
              <div>
                <div className="contact__promise-title">24-Hour Response Guarantee</div>
                <div className="contact__promise-sub">
                  A real human from our team — not a bot — will reach out within one business day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
