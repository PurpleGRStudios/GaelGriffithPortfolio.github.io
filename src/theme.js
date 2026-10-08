import { useCallback, useEffect, useRef, useState } from 'react'

const KEY = 'theme'
// Timings (ms) matching the CSS animation in ThemeTransition
const SWITCH_AT = 520
const TOTAL = 1200

const readStored = () => {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export const initialTheme = () =>
  readStored() ?? (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme)
  const [transition, setTransition] = useState(null) // theme being switched to, while animating
  const timers = useRef([])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // storage unavailable; the choice just won't persist
    }
  }, [theme])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const toggle = useCallback(() => {
    if (transition) return
    const next = theme === 'dark' ? 'light' : 'dark'
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setTheme(next)
      return
    }
    setTransition(next)
    timers.current = [
      setTimeout(() => setTheme(next), SWITCH_AT),
      setTimeout(() => setTransition(null), TOTAL),
    ]
  }, [theme, transition])

  return { theme, toggle, transition }
}
