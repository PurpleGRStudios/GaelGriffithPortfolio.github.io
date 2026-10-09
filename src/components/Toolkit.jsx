import { toolkit } from '../data/toolkit.js'

export default function Toolkit() {
  return (
    <section id="toolkit" className="section">
      <div className="section-head">
        <div className="eyebrow"><span /> LOADOUT</div>
        <h2>Toolkit<em>.</em></h2>
      </div>

      {toolkit.map((group) => (
        <div className="tool-group" key={group.title}>
          <h3 className="tool-group-title">{group.title}</h3>
          <ul className="tool-grid">
            {group.items.map((tool) => (
              <li className="tool" key={tool.name}>
                <span className="tool-badge" aria-hidden="true">{tool.badge}</span>
                <span className="tool-text">
                  <strong>{tool.name}</strong>
                  <small>{tool.note}</small>
                </span>
                {tool.level && <em className="tool-level">{tool.level}</em>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
