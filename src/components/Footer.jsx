import { ArrowIcon } from './Icons.jsx'

const links = [
  { label: 'Mail Me', href: 'mailto:gaelgriffith2003@gmail.com' },
  { label: 'My GitHub', href: 'https://github.com/PurpleGRStudios' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gael-griffith-511b6b220/' },
]

export default function Footer() {
  return (
    <section id="contact" className="section contact">
      <div className="section-head">
        <div className="eyebrow"><span /> OPEN CHANNEL</div>
        <h2>Contact<em>.</em></h2>
      </div>
      <div className="contact-links">
        {links.map((l) => (
          <a key={l.label} className="contact-link" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            <span>{l.label}</span>
            <ArrowIcon />
          </a>
        ))}
      </div>
    </section>
  )
}
