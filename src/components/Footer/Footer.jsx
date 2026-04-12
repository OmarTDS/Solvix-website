import './Footer.css'
import SolvixLogo from '../SolvixLogo/SolvixLogo'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <a
              href="#"
              className="footer__logo"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              <SolvixLogo height={30} />
            </a>
            <p className="footer__tagline">
              Building the intelligence behind tomorrow's businesses.
            </p>
            <div className="footer__social">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Twitter/X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__nav">
            <div className="footer__nav-col">
              <h4 className="footer__nav-title">Services</h4>
              <ul>
                <li><button onClick={() => scrollTo('services')}>AI Chatbots</button></li>
                <li><button onClick={() => scrollTo('services')}>Process Automation</button></li>
                <li><button onClick={() => scrollTo('services')}>Custom AI Models</button></li>
                <li><button onClick={() => scrollTo('services')}>Full AI Systems</button></li>
                <li><button onClick={() => scrollTo('services')}>Data Analytics</button></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <h4 className="footer__nav-title">Company</h4>
              <ul>
                <li><button onClick={() => scrollTo('work')}>Our Work</button></li>
                <li><button onClick={() => scrollTo('process')}>Our Process</button></li>
                <li><button onClick={() => scrollTo('contact')}>Contact Us</button></li>
              </ul>
            </div>
            <div className="footer__nav-col">
              <h4 className="footer__nav-title">Get Started</h4>
              <button
                className="btn-primary footer__cta"
                onClick={() => scrollTo('contact')}
                id="footer-cta-btn"
              >
                Book a Free Call
              </button>
              <p className="footer__cta-note">No commitment. No fluff.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© {currentYear} Solvix. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
