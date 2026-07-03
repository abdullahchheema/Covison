import { Container } from '@/components/ui/Container'

export function AnnouncementBar() {
  return (
    <div className="border-b border-line bg-[#0c0c0e]">
      <Container className="flex items-center justify-center gap-4 py-3 sm:justify-between md:py-3.5">
        <p className="hidden text-[13px] text-muted sm:block">
          The AI automation partner for fast-moving B2B companies.
        </p>

        <span className="flex items-center gap-4 text-[13px] text-muted">
          <span>
            <strong className="font-semibold text-ink">10+</strong> clients
          </span>
          <span aria-hidden className="text-faint">
            ·
          </span>
          <span>
            <strong className="font-semibold text-ink">4×</strong> avg ROI
          </span>
        </span>
      </Container>
    </div>
  )
}
