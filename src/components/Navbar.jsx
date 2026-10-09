import { Link, useLocation, useNavigate } from 'react-router-dom'
import { asset } from '../data/projects.js'
import { useTheme } from '../theme.js'
import ThemeTransition from './ThemeTransition.jsx'

const CV_URL = encodeURI(asset('pdf/Gael Griffith CV.pdf'))

const items = [
  { label: 'HOME', section: null },
  { label: 'PROJECTS', section: 'services' },
  { label: 'TOOLKIT', section: 'toolkit' },
  { label: 'ABOUT', section: 'about' },
  { label: 'CONTACT', section: 'contact' },
]

export default function Navbar({ activeSection }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const { theme, toggle: toggleTheme, transition } = useTheme()

  const go = (section) => {
    const scroll = () =>
      section
        ? document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        : window.scrollTo({ top: 0, behavior: 'smooth' })
    if (onHome) {
      scroll()
    } else {
      navigate('/')
      setTimeout(scroll, 60)
    }
  }

  const isActive = (item) => (onHome ? (activeSection ?? null) === item.section : item.section === 'services')

  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Gael Griffith home">
        <span className="brand-mark"><i /><i /><i /></span>
        <span>GAEL GRIFFITH</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        {items.map((item) => (
          <button
            key={item.label}
            className={isActive(item) ? 'nav-item active' : 'nav-item'}
            onClick={() => go(item.section)}
          >
            {item.label}
          </button>
        ))}
        <a className="nav-item" href={CV_URL} target="_blank" rel="noreferrer">CV</a>
      </nav>

      <div className="profile">
        <div className="profile-copy">
          <strong>GAME DEVELOPER</strong>
          <span>GAEL_GRIFFITH</span>
        </div>
        <div className="avatar" aria-hidden="true">GG</div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" fill="currentColor" />
              <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
      {transition && <ThemeTransition to={transition} />}
    </header>
  )
}
