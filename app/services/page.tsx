import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { services, serviceCategories } from '@/lib/site'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { EditorialRow } from '@/components/ui/EditorialRow'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/sections/CTASection'
import { EngagementTiers } from '@/components/sections/EngagementTiers'

export const metadata: Metadata = {
  alternates: { canonical: '/services' },
  title: 'Services | AI, Software, Cloud, Data & Logistics',
  description:
    'Explore the services Covison offers across AI & automation, software & digital, infrastructure & data, and logistics, for B2B companies ready to operate at a higher level.',
}

// Flattened in category order so the numbering (01-14) reads consistently
// whether you scan the grouped sections top to bottom or view the raw list.
const orderedServices = serviceCategories.flatMap((category) =>
  services.filter((s) => s.category === category.id),
)

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Fourteen services. Four disciplines. One team."
        description="We focus on high-impact service lines that give B2B companies real competitive advantage, not just deliverables. Pick a service below for the full breakdown."
      >
        <Button href="/contact">
          Start a project
          <ArrowRight size={16} />
        </Button>
      </PageHeader>

      <EngagementTiers />

      <Section spacing="lg">
        <div className="flex flex-col gap-14">
          {serviceCategories.map((category) => {
            const categoryServices = services.filter((s) => s.category === category.id)
            if (categoryServices.length === 0) return null

            return (
              <div key={category.id}>
                <Reveal>
                  <p className="eyebrow text-brand">{category.label}</p>
                </Reveal>
                <div className="mt-6 border-t border-line-soft">
                  {categoryServices.map((service) => {
                    const globalIndex = orderedServices.indexOf(service)
                    return (
                      <Reveal key={service.id} delay={Math.min(globalIndex * 0.03, 0.24)}>
                        <EditorialRow
                          index={String(globalIndex + 1).padStart(2, '0')}
                          title={service.title}
                          description={service.short}
                          href={`/services/${service.id}`}
                        />
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
