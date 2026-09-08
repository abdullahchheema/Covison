import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export function AnnouncementBar() {
  return (
    <div className="border-b border-line-soft bg-surface-2">
      <Container className="flex items-center justify-center gap-4 py-2.5 sm:justify-between">
        <p className="hidden text-xs text-text-2 sm:block">
          The AI automation partner for fast-moving B2B companies.
        </p>

        <Link
          href="/contact"
          className="eyebrow inline-flex items-center gap-1.5 text-brand hover:text-brand-hover"
        >
          Book a strategy call
          <ArrowRight size={12} aria-hidden />
        </Link>
      </Container>
    </div>
  )
}
