import type { Metadata } from 'next'
import { ArrowRight, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Our Process — How We Deliver AI Systems',
  description:
    'A proven four-step process for delivering AI automation and website projects: discover, build, automate, and scale.',
}

export default function ProcessPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-canvas">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          }}
        />

        <Container className="flex flex-col items-start py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="flex max-w-3xl flex-col gap-5">
              <span className="w-fit">
                <Badge variant="accent">How it works</Badge>
              </span>

              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                From first call to full <span className="text-sheen">deployment</span>.
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                A proven four-step process that moves fast, stays transparent, and delivers
                results you can measure.
              </p>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/contact" size="lg">
                  <Calendar size={18} />
                  Book a strategy call
                </Button>
                <Button href="/work" variant="secondary" size="lg">
                  See our work
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ProcessSteps />

      <CTASection />
    </>
  )
}
