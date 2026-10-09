import { useCallback, useEffect, useState } from 'react'
import { asset } from './data/projects.js'

const KEY = 'music'
const VOLUME = 0.01 // quiet background level: noticeable if you listen, never in the way
const FADE_MS = 3000 // ease in so it feels like ambience rather than a track starting

const readStored = () => {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

// One shared player for the whole site. A single instance means there is never a second,
// uncontrollable copy playing that the mute button can't reach.
let audio = null
const getAudio = () => {
  if (!audio) {
    audio = new Audio(asset('audio/introduction.mp3'))
    audio.loop = true
    audio.volume = VOLUME
  }
  return audio
}

// During dev hot-reloads this module is replaced; stop the old player so it can't keep playing.
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    audio?.pause()
    audio = null
  })
}

// Ramp the volume from silence up to VOLUME. Returns a function that cancels the ramp.
function fadeIn(a) {
  a.volume = 0
  const started = performance.now()
  const id = setInterval(() => {
    const t = Math.min(1, (performance.now() - started) / FADE_MS)
    a.volume = VOLUME * t
    if (t === 1) clearInterval(id)
  }, 100)
  return () => clearInterval(id)
}

// Looping background track. Browsers block sound until the visitor interacts with the page,
// so if autoplay is refused we start on the first click, tap or key press instead.
export function useMusic() {
  const [on, setOn] = useState(() => readStored() !== 'off')

  useEffect(() => {
    const a = getAudio()
    try {
      localStorage.setItem(KEY, on ? 'on' : 'off')
    } catch {
      // storage unavailable; the choice just won't persist
    }
    if (!on) {
      a.pause()
      return
    }

    // `cancelled` makes late promise results from an earlier run (muted meanwhile, or React's
    // double-invoked effects) do nothing instead of starting playback behind the button's back.
    let cancelled = false
    let cancelFade = () => {}
    const begin = () => {
      if (cancelled) return
      cancelFade()
      cancelFade = fadeIn(a)
    }
    const events = ['pointerdown', 'keydown', 'touchstart']
    const removeListeners = () => events.forEach((e) => window.removeEventListener(e, start))
    function start() {
      if (cancelled) return
      a.play().then(() => {
        removeListeners()
        begin()
      }, () => {})
    }
    a.play().then(begin, () => {
      if (!cancelled) events.forEach((e) => window.addEventListener(e, start))
    })

    const onVisibility = () => {
      if (document.hidden) a.pause()
      else if (!cancelled) a.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelled = true
      cancelFade()
      removeListeners()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [on])

  const toggle = useCallback(() => setOn((v) => !v), [])
  return { on, toggle }
}
