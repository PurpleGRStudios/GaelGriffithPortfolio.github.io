import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStat } from '../data/projects.js'
import { BoltIcon } from './Icons.jsx'

const INTERVAL_MS = 5000
const pad = (n) => String(n + 1).padStart(2, '0')

// Featured project card + side index, cycles through the highlighted projects
export default function Slider({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, slides.length])

  const p = slides[index]

  return (
    <>
      <Link
        to={`/projects/${p.id}`}
        className="mission-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {p.thumbnail && (
          <div className="mission-thumb">
            <img key={p.id} src={p.thumbnail} alt={p.title} />
          </div>
        )}
        <div className="card-number">{pad(index)}</div>
        <div className="mission-body">
          <div className="mission-status"><i /> FEATURED PROJECT</div>
          <p className="mission-type">{getStat(p, 'Software Used').toUpperCase()}</p>
          <h2>{p.title}</h2>
          <div className="mission-meta">
            <div><span>TYPE</span><strong>{getStat(p, 'Project Type').replace(' Project', '')}</strong></div>
            <div><span>STATUS</span><strong>{getStat(p, 'Project Status')}</strong></div>
          </div>
          <div className="reward">
            <span className="reward-icon"><BoltIcon /></span>
            <span><small>CASE FILE</small><strong>View project</strong></span>
          </div>
        </div>
      </Link>

      <div className="side-index">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.title}`}
          >
            {pad(i)}
          </button>
        ))}
        <i />
      </div>
    </>
  )
}
