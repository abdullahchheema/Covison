'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'

interface CarouselProps {
  children: ReactNode[]
  /** Use when the carousel sits on the permanently-dark `--ink` plate. */
  onInk?: boolean
}

export function Carousel({ children, onInk = false }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const total = children.length

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.findIndex((el) => el === entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { root: container, threshold: 0.6 },
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [total])

  const scrollToIndex = (idx: number) => {
    itemRefs.current[idx]?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      inline: 'start',
      block: 'nearest',
    })
  }

  return (
    <div>
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className="w-full flex-shrink-0 snap-start"
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className={cn('eyebrow', onInk && 'eyebrow-invert')}>
          {active + 1} / {total}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            disabled={active === 0}
            aria-label="Previous"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-md border transition-opacity disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2',
              onInk
                ? 'border-white/20 text-white hover:bg-white/10 focus-visible:ring-offset-ink'
                : 'border-border bg-surface text-foreground hover:bg-muted focus-visible:ring-offset-background',
            )}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(total - 1, active + 1))}
            disabled={active === total - 1}
            aria-label="Next"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-md border transition-opacity disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2',
              onInk
                ? 'border-white/20 text-white hover:bg-white/10 focus-visible:ring-offset-ink'
                : 'border-border bg-surface text-foreground hover:bg-muted focus-visible:ring-offset-background',
            )}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
