import { useRef, useEffect, useState, useCallback } from 'react'
import './SegmentedPicker.css'

/**
 * Clear Segmented Picker
 * Inspired by the iOS liquid-glass segmented control pattern.
 * A floating glass pill container with a spring-animated indicator
 * that slides to the active tab and hugs its exact width.
 *
 * Props:
 *   tabs     {string[]}  — tab labels
 *   active   {number}    — index of the active tab
 *   onChange {function}  — called with new index on selection
 */
export default function SegmentedPicker({ tabs, active, onChange }) {
  const containerRef = useRef(null)
  const tabRefs = useRef([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const measureTab = useCallback((index) => {
    const el = tabRefs.current[index]
    const container = containerRef.current
    if (!el || !container) return

    // getBoundingClientRect gives viewport-relative rects;
    // subtract container's left to get position relative to container
    const cRect = container.getBoundingClientRect()
    const tRect = el.getBoundingClientRect()

    setIndicatorStyle({
      left: tRect.left - cRect.left,
      width: tRect.width,
      opacity: 1,
    })
  }, [])

  // Re-measure whenever active tab changes
  useEffect(() => {
    measureTab(active)
  }, [active, measureTab])

  // Initial measurement after mount (fonts/layout may need a frame)
  useEffect(() => {
    const id = requestAnimationFrame(() => measureTab(active))
    return () => cancelAnimationFrame(id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Re-measure on window resize
  useEffect(() => {
    const onResize = () => measureTab(active)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [active, measureTab])

  return (
    <div
      ref={containerRef}
      className="seg-picker"
      role="tablist"
      aria-label="Filter case studies by category"
    >
      {/* Sliding glass indicator — sits behind everything */}
      <div
        className="seg-picker__indicator"
        aria-hidden="true"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          opacity: indicatorStyle.opacity,
        }}
      />

      {/* Tab buttons */}
      {tabs.map((tab, i) => (
        <button
          key={tab}
          ref={(el) => { tabRefs.current[i] = el }}
          role="tab"
          aria-selected={active === i}
          className={`seg-picker__tab ${active === i ? 'seg-picker__tab--active' : ''}`}
          onClick={() => onChange(i)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
