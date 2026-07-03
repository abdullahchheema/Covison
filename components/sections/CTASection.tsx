import { ArrowRight, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

export function CTASection({ className }: { className?: string }) {
  return (
    <section className={cn('bg-canvas py-12 sm:py-16 lg:py-20', className)}>
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-10 text-center sm:px-12 sm:py-11 lg:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <span className="eyebrow">Ready to transform?</span>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build something <span className="text-sheen">exceptional</span>.
              </h2>
              <p className="text-lg leading-relaxed text-muted">
                Book a free 30-minute strategy call. We&apos;ll identify your highest-leverage
                opportunities and propose a tailored plan with clear deliverables and transparent
                pricing.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/contact" size="lg">
                  <Calendar size={18} />
                  Book a free strategy call
                </Button>
                <Button href="/work" variant="secondary" size="lg">
                  See our work
                  <ArrowRight size={18} />
                </Button>
              </div>
              <p className="text-sm text-faint">No commitment. No hard sell. Just clarity.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
