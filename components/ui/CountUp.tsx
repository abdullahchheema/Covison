'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

function parseValue(value: string) {
  const match = value.match(/^([\d,.]+)(.*)$/)
  if (!match) return null
  const numStr = match[1].replace(/,/g, '')
  const number = parseFloat(numStr)
  if (Number.isNaN(number)) return null
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  return { number, decimals, suffix: match[2] }
}

export function CountUp({ value, duration = 1200 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)
  const [display, setDisplay] = useState(value)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const parsed = parseValue(value)
    const el = ref.current
    if (!parsed || !el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated.current) return
          hasAnimated.current = true

          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            if (progress < 1) {
              setDisplay(`${(parsed.number * eased).toFixed(parsed.decimals)}${parsed.suffix}`)
              requestAnimationFrame(tick)
            } else {
              setDisplay(value)
            }
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, prefersReducedMotion])

  return <span ref={ref}>{display}</span>
}
