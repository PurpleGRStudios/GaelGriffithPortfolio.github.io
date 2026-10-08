import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject, parseStat } from '../data/projects.js'

function Block({ block }) {
  switch (block.type) {
    case 'heading': {
      const Tag = `h${block.level ?? 2}`
      return <Tag>{block.text}</Tag>
    }
    case 'text':
      return block.lines ? (
        <div className="lines">
          {block.lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      ) : (
        <p>{block.text}</p>
      )
    case 'figure':
      return (
        <figure className="figure">
          <p className="figure-title">{block.title}</p>
          <img src={block.src} alt={block.title} loading="lazy" />
          <p>{block.caption}</p>
        </figure>
      )
    default:
      return null
  }
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = getProject(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="project-page">
        <Link className="back-link" to="/">← BACK HOME</Link>
        <h1 className="page-title">Not found</h1>
      </div>
    )
  }

  return (
    <article className="project-page">
      <Link className="back-link" to="/">← ALL PROJECTS</Link>
      <div className="eyebrow"><span /> PROJECT FILE</div>
      <h1 className="page-title">{project.title}</h1>

      <div className="project-layout">
        <aside className="stat-panel">
          <small><i /> PROJECT DATA</small>
          {project.stats.map(parseStat).map((s) => (
            <div className="stat" key={s.label}>
              <span>{s.label.replace('Project ', '')}</span>
              <strong>{s.value}</strong>
            </div>
          ))}
        </aside>

        <div className="project-main">
          <div className="hero-shot">
            <img src={project.thumbnail} alt={project.title} />
          </div>

          <h2 className="lead">About</h2>
          <p>{project.about}</p>
          {project.link && (
            <a className="text-link" href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label} →
            </a>
          )}

          {project.lists?.map((list) => (
            <div key={list.title}>
              <h2>{list.title}</h2>
              <ul>
                {list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {project.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>
    </article>
  )
}
