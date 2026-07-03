'use client'

import { Calendar, ArrowRight, Video } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function BookingEmbed() {
  const calUrl = `https://cal.com/${siteConfig.calLink}`

  return (
    <div className="flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-line bg-surface px-8 py-14 text-center sm:px-12 sm:py-16">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line-strong bg-white/[0.06]">
        <Calendar size={28} className="text-ink" />
      </span>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-ink">Book a free strategy call</p>
        <p className="mx-auto flex max-w-xs items-center justify-center gap-1.5 text-sm text-muted">
          <Video size={14} className="text-faint" />
          30 min · Google Meet · No commitment
        </p>
      </div>

      <a
        href={calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pill bg-white px-7 py-3.5 text-base font-semibold text-canvas shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-transform duration-200 hover:scale-[1.03] hover:bg-white/90"
      >
        Schedule your call
        <ArrowRight size={17} />
      </a>

      <p className="text-xs text-faint">Opens Cal.com in a new tab · Pick any day and time that works for you</p>
    </div>
  )
}
