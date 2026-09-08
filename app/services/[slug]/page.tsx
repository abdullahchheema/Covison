import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { services, serviceCaseStudyMap, processSteps } from '@/lib/site'
import { getAllCaseStudies } from '@/lib/case-studies'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { CaseStudyCard } from '@/components/sections/CaseStudyCard'
import { EditorialRow } from '@/components/ui/EditorialRow'
import { CTASection } from '@/components/sections/CTASection'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  if (!service) return {}
  return {
    alternates: { canonical: `/services/${service.id}` },
    title: service.title,
    description: service.short,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  if (!service) notFound()

  const relatedCaseStudy = getAllCaseStudies().find((cs) => cs.tag === serviceCaseStudyMap[service.id])

  // Truck Dispatching gets its own hero headline, subheadline, and CTA copy
  // (a trucker-facing pitch, not the AI-agency framing used elsewhere), while
  // keeping the breadcrumb, listings, and page structure identical to every
  // other service.
  const isTruckDispatching = service.id === 'truck-dispatching'
  const heroTitle = isTruckDispatching ? 'Maximize your miles. Minimize your headaches.' : service.title
  const heroDescription = isTruckDispatching
    ? 'Experienced dispatch support for owner-operators and small fleets who want to earn more per mile and spend less time on the phone with brokers.'
    : service.short
  const ctaLabel = isTruckDispatching ? 'Get Your Free Dispatch Consultation' : 'Get a quote'

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Services', href: '/services' }]}
        eyebrow={service.title}
        title={heroTitle}
        description={heroDescription}
        heroImage={`/images/services/${service.id}-hero.png`}
      >
        <Button href="/contact">
          {ctaLabel}
          <ArrowRight size={16} />
        </Button>
      </PageHeader>

      <Section spacing="lg">
        <div className="flex flex-col gap-4 border-b border-line-soft pb-8">
          <p className="text-base leading-relaxed text-text-2">
            <span className="font-semibold text-foreground">The problem: </span>
            {service.problem}
          </p>
          <p className="text-base leading-relaxed text-text-2">{service.description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-5">What&apos;s included</p>
            <ul className="flex flex-col gap-4">
              {service.details.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow mb-5">Key outcomes</p>
            <div className="flex flex-wrap gap-2">
              {service.outcomes.map((o) => (
                <Badge key={o} variant="brand">
                  {o}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section variant="surface" spacing="lg">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="How we work" title="From first call to full deployment" />
            <Button href="/process" variant="link">
              See the full process
              <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>
        <div className="mt-10 border-t border-line-soft">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={Math.min(i * 0.05, 0.2)}>
              <EditorialRow index={step.number} title={step.title} description={step.description} />
            </Reveal>
          ))}
        </div>
      </Section>

      {relatedCaseStudy && (
        <Section spacing="lg">
          <Reveal>
            <SectionHeading eyebrow="Proof it works" title="Related work" />
          </Reveal>
          <div className="mt-10 border-t border-line-soft">
            <CaseStudyCard study={relatedCaseStudy} />
          </div>
        </Section>
      )}

      <CTASection />
    </>
  )
}
