import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Work — Case Studies & Client Results',
  description:
    'Explore Covison case studies — real results from AI consulting, workflow automation, lead generation, custom AI agents, CRM automation, website development, AI chatbots, and AI workshops for B2B companies.',
}

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title={
          <>
            Proof in the <span className="text-sheen">numbers</span>.
          </>
        }
        description="Every project we take on has a clear success metric attached. Here's a selection of what we've built and the results clients measured in the months that followed."
      />

      <section className="bg-canvas pb-24 sm:pb-28">
        <Container>
          <div className="flex flex-col gap-6 sm:gap-8">
            {caseStudies.map((study, i) => (
              <Reveal key={study.title} delay={i * 0.08}>
                <article className="overflow-hidden rounded-3xl border border-line bg-surface">
                  {/* Thumbnail placeholder — swap for a real project image later */}
                  <div
                    className="relative flex h-44 w-full items-center justify-center overflow-hidden border-b border-line sm:h-56"
                    style={{ background: 'radial-gradient(circle at 72% 28%, #26262b, #161619)' }}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                      }}
                    />
                    <span className="text-sheen relative px-6 text-center text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                      {study.tag}
                    </span>
                  </div>

                  <div className="grid lg:grid-cols-5">
                    {/* Content */}
                    <div className="flex flex-col items-start gap-5 p-8 sm:p-10 lg:col-span-3">
                      <Badge>{study.tag}</Badge>
                      <div className="flex flex-col gap-2">
                        <p className="eyebrow">{study.client}</p>
                        <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                          {study.title}
                        </h2>
                      </div>
                      <p className="rounded-xl border border-line-strong bg-white/10 px-4 py-2 text-sm font-semibold text-ink">
                        Result: {study.result}
                      </p>
                      <p className="text-sm leading-relaxed text-muted">{study.description}</p>
                      <Button href="/contact" variant="secondary" size="sm">
                        Start a similar project
                        <ArrowRight size={15} />
                      </Button>
                    </div>

                    {/* Metrics */}
                    <dl className="flex flex-col justify-center gap-8 border-t border-line bg-white/[0.015] p-8 sm:p-10 lg:col-span-2 lg:border-l lg:border-t-0">
                      <p className="eyebrow">Key metrics</p>
                      {study.metrics.map((m) => (
                        <div key={m.label} className="flex flex-col gap-1">
                          <dd className="text-sheen text-4xl font-semibold">{m.value}</dd>
                          <dt className="text-sm text-faint">{m.label}</dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-faint/70">
            Client names and identifying details have been anonymised. Metrics verified at 90-day
            post-deployment.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
