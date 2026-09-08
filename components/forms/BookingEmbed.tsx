import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function BookingEmbed() {
  const calUrl = `https://cal.com/${siteConfig.calLink}`

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-surface-2 p-8 sm:p-10">
      <div className="flex flex-col gap-2">
        <span className="eyebrow">01</span>
        <p className="text-xl font-semibold text-foreground">Book a free strategy call</p>
        <p className="text-sm text-text-2">30 min · Google Meet · No commitment</p>
      </div>

      <a
        href={calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2"
      >
        Schedule your call
        <ArrowRight size={16} />
      </a>

      <p className="text-xs text-text-3">Opens Cal.com in a new tab · Pick any day and time that works for you</p>
    </div>
  )
}
