// Speed streaks that fly past, each with its own height, length, speed and delay
const STREAKS = [
  { top: 14, len: 22, dur: 7, delay: 0, red: false },
  { top: 27, len: 34, dur: 5.5, delay: 2.2, red: true },
  { top: 41, len: 18, dur: 8, delay: 4.1, red: false },
  { top: 58, len: 40, dur: 6, delay: 1.1, red: true },
  { top: 71, len: 26, dur: 9, delay: 5.3, red: false },
  { top: 84, len: 30, dur: 6.8, delay: 3.2, red: false },
]

export default function CityBackground() {
  return (
    <div className="city" aria-hidden="true">
      <div className="sun-disc" />
      <div className="building building-far-a" />
      <div className="building building-far-b" />
      <div className="building building-mid">
        <span className="window-grid" />
      </div>
      <div className="building building-right">
        <span className="red-stripe" />
      </div>
      <div className="roof-plane" />
      {STREAKS.map((s, i) => (
        <i
          key={i}
          className={s.red ? 'streak streak-red' : 'streak'}
          style={{ top: `${s.top}%`, width: `${s.len}vw`, animationDuration: `${s.dur}s`, animationDelay: `${s.delay}s` }}
        />
      ))}
    </div>
  )
}
