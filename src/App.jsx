import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import CityBackground from './components/CityBackground.jsx'
import Navbar from './components/Navbar.jsx'
import StatusBar from './components/StatusBar.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

const SECTIONS = ['services', 'toolkit', 'about', 'contact']

// Highlights the nav item for the section currently in view on the home page
function useActiveSection(enabled) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!enabled) return
    const onScroll = () => {
      const line = window.innerHeight * 0.4
      let current = null
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enabled])

  return active
}

export default function App() {
  const { pathname } = useLocation()
  const activeSection = useActiveSection(pathname === '/')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="game-shell">
      <CityBackground />
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <button
        className={showTop ? 'to-top show' : 'to-top'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        TOP ↑
      </button>
      <StatusBar />
    </main>
  )
}
