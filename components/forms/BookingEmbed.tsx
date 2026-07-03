'use client'

import { Calendar, Mail, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function BookingEmbed() {
  const calUrl = `https://cal.com/${siteConfig.calLink}?embed=true&theme=dark&brandColor=ffffff`

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="flex items-center gap-3 border-b border-line px-6 py-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
          <Calendar size={18} className="text-ink" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">Book a free strategy call</p>
          <p className="text-xs text-faint">30 min · Zoom · No commitment</p>
        </div>
      </div>

      {siteConfig.calConfigured ? (
        <iframe
          src={calUrl}
          width="100%"
          height="580"
          title="Book a strategy call with Covison"
          className="block bg-surface"
        />
      ) : (
        <div className="flex flex-col items-center gap-5 px-8 py-14 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line-strong bg-white/[0.06]">
            <Calendar size={24} className="text-ink" />
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold text-ink">Scheduling opens soon</p>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted">
              Our online booking is being set up. In the meantime, email us and we&apos;ll send you a
              few times that work.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.email}?subject=Strategy%20call%20request`}
            className="btn-pill bg-white px-5 py-2.5 text-sm font-medium text-canvas hover:bg-white/90"
          >
            <Mail size={15} />
            Request a time
            <ArrowRight size={15} />
          </a>
        </div>
      )}
    </div>
  )
}
