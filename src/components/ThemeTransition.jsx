import { createPortal } from 'react-dom'

// Runners sprint across the screen ahead of a skewed colour wipe. `to` is the theme being switched to.
// Lower on screen = closer = bigger. Fixed spread (no randomness) so every switch looks the same.
const COUNT = 6
const RUNNERS = Array.from({ length: COUNT }, (_, i) => {
  const lane = (i * 7) % COUNT // scatter heights instead of ordering them
  const bottom = 4 + (lane / (COUNT - 1)) * 70
  return {
    bottom,
    scale: 1.8 - (bottom / 74) * 1.15,
    delay: ((i * 5) % COUNT) * 0.016,
    dur: 0.74 + ((i * 3) % 5) * 0.025,
  }
})

function Runner({ bottom, scale, delay, dur }) {
  return (
    <div className="tt-runner" style={{ bottom: `${bottom}%`, animationDelay: `${delay}s`, animationDuration: `${dur}s` }}>
      <div className="tt-figure" style={{ '--s': scale }}>
        <span className="tt-trail" />
        <div className="tt-bob">
          <span className="tt-head" />
          <span className="tt-body" />
          <span className="tt-arm tt-arm-a" />
          <span className="tt-arm tt-arm-b" />
          <span className="tt-leg tt-leg-a" />
          <span className="tt-leg tt-leg-b" />
        </div>
      </div>
    </div>
  )
}

export default function ThemeTransition({ to }) {
  return createPortal(
    <div className={`tt tt-to-${to}`} aria-hidden="true">
      <i className="tt-bar tt-bar-red" />
      <i className="tt-bar tt-bar-edge" />
      <i className="tt-bar tt-bar-fill" />
      {RUNNERS.map((r, i) => (
        <Runner key={i} {...r} />
      ))}
    </div>,
    document.body,
  )
}
