'use client'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: number
  prefix?: string
  suffix?: string
  durationMs?: number
}

// A number that counts up from 0 the first time it scrolls into view.
// It renders the final value on the server and for visitors who prefer
// reduced motion, so the real number is always there without JavaScript.
export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  durationMs = 1600,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setShown(0)
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs)
          // Ease out, so the count slows as it reaches the final value.
          const eased = 1 - Math.pow(1 - t, 3)
          setShown(Math.round(value * eased))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, durationMs])

  const format = (n: number) => `${prefix}${n.toLocaleString('en-US')}${suffix}`

  return (
    <span ref={ref}>
      <span aria-hidden="true">{format(shown)}</span>
      <span className="sr-only">{format(value)}</span>
    </span>
  )
}
