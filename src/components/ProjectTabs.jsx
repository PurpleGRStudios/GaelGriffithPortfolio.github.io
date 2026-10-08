import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getProject, getStat, tabs } from '../data/projects.js'

export default function ProjectTabs() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section id="services" className="section">
      <div className="section-head">
        <div className="eyebrow"><span /> SELECT ROUTE</div>
        <h2>Projects<em>.</em></h2>
      </div>

      <div className="filter-bar">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            className={i === active ? 'nav-item active' : 'nav-item'}
            onClick={() => setActive(i)}
          >
            {t.label.toUpperCase()}
          </button>
        ))}
      </div>
      <p className="filter-desc">{tab.description}</p>

      <div className="run-grid">
        {tab.ids.map(getProject).map((p, i) => (
          <Link key={p.id} to={`/projects/${p.id}`} className="run-card">
            <div className="run-thumb">
              <img src={p.thumbnail} alt={p.title} loading="lazy" />
            </div>
            <div className="run-body">
              <span className="run-index">{String(i + 1).padStart(2, '0')}</span>
              <small>{getStat(p, 'Software Used')}</small>
              <h3>{p.title}</h3>
              <div className="run-bar" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
