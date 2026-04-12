/**
 * SolvixLogo — SVG recreation of the brand logo
 * Transparent bg, adapts to dark theme:
 *   - Icon: electric green (#39FF14)
 *   - "SOLVI": white
 *   - "X": electric green
 *
 * Props:
 *   iconOnly  {bool}  — render icon only (for favicon / compact)
 *   height    {num}   — overall height in px (default 32)
 *   className {str}
 */
export default function SolvixLogo({ iconOnly = false, height = 32, className = '' }) {
  const iconSize = height
  const gap = iconOnly ? 0 : iconSize * 0.35
  const textH = iconSize * 0.72
  const textY = iconSize * 0.74
  const totalW = iconOnly ? iconSize : iconSize + gap + iconSize * 3.8

  /* ── Icon paths scaled to `iconSize` ── */
  const s = iconSize / 44          // scale factor

  /* Arrow shaft + arrowhead NE */
  const shaftX1 = 6 * s, shaftY1 = 38 * s
  const shaftX2 = 36 * s, shaftY2 = 8 * s

  /* Arrowhead NE (pointing top-right) */
  const ne = [
    `${38 * s},${6 * s}`,
    `${25 * s},${6 * s}`,
    `${38 * s},${19 * s}`,
  ].join(' ')

  /* Arrowhead SW (pointing bottom-left) */
  const sw = [
    `${6 * s},${38 * s}`,
    `${19 * s},${38 * s}`,
    `${6 * s},${25 * s}`,
  ].join(' ')

  /* S — two arcs forming an S-curve through the centre */
  const sPath = [
    `M ${30 * s} ${14 * s}`,
    `C ${30 * s} ${8 * s}, ${22 * s} ${8 * s}, ${17 * s} ${12 * s}`,
    `C ${12 * s} ${16 * s}, ${14 * s} ${22 * s}, ${22 * s} ${22 * s}`,
    `C ${30 * s} ${22 * s}, ${32 * s} ${28 * s}, ${27 * s} ${32 * s}`,
    `C ${22 * s} ${36 * s}, ${14 * s} ${36 * s}, ${14 * s} ${30 * s}`,
  ].join(' ')

  return (
    <svg
      className={className}
      width={totalW}
      height={iconSize}
      viewBox={`0 0 ${totalW} ${iconSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Solvix logo"
    >
      {/* ── ICON ── */}
      <g>
        {/* S letterform */}
        <path
          d={sPath}
          stroke="#39FF14"
          strokeWidth={4.2 * s}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arrow shaft */}
        <line
          x1={shaftX1} y1={shaftY1}
          x2={shaftX2} y2={shaftY2}
          stroke="#39FF14"
          strokeWidth={4.5 * s}
          strokeLinecap="round"
        />

        {/* Arrowhead NE */}
        <polygon points={ne} fill="#39FF14" />

        {/* Arrowhead SW */}
        <polygon points={sw} fill="#39FF14" />
      </g>

      {/* ── TEXT SOLVIX (skip if iconOnly) ── */}
      {!iconOnly && (
        <g transform={`translate(${iconSize + gap}, 0)`}>
          {/* SOLVI — white */}
          <text
            y={textY}
            fontFamily="'Space Grotesk', 'Inter', sans-serif"
            fontWeight="800"
            fontSize={textH}
            letterSpacing="-0.03em"
            fill="#ffffff"
          >
            SOLVI
          </text>
          {/* X — green, offset after SOLVI */}
          <text
            x={textH * 3.05}
            y={textY}
            fontFamily="'Space Grotesk', 'Inter', sans-serif"
            fontWeight="800"
            fontSize={textH}
            letterSpacing="-0.03em"
            fill="#39FF14"
          >
            X
          </text>
        </g>
      )}
    </svg>
  )
}
