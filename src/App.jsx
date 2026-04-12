import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Process from './components/Process/Process'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <>
      {/* ── Global Liquid Glass Background ── */}
      <div className="global-scene" aria-hidden="true">
        <div className="g-blob g-blob--1"></div>
        <div className="g-blob g-blob--2"></div>
        <div className="g-blob g-blob--3"></div>
        <div className="g-blob g-blob--4"></div>
        <div className="g-grid"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  )
}

export default App
