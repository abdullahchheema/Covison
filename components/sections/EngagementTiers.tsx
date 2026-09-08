import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'

function byId(id: string) {
  const service = services.find((s) => s.id === id)
  if (!service) throw new Error(`Unknown service id: ${id}`)
  return service
}

const tiers = [
  {
    index: '01',
    badge: 'Most common start',
    heading: 'Start with an audit',
    description:
      'A focused engagement to map your operations, find the highest-leverage automation opportunities, and leave you with a roadmap you can act on.',
    serviceIds: ['consulting'],
  },
  {
    index: '02',
    heading: 'Build & ship',
    description:
      'We design, build and deploy the systems themselves: automations, agents, assistants and the websites that put them in front of your customers.',
    serviceIds: ['automation', 'ai-agents', 'chatbots', 'web'],
  },
  {
    index: '03',
    heading: 'Ongoing partnership',
    description:
      'A continuous engagement that keeps pipeline, sales follow-up and internal AI adoption moving well after the first system ships.',
    serviceIds: ['lead-generation', 'crm-sales', 'workshops'],
  },
]

export function EngagementTiers() {
  return (
    <Section variant="surface" spacing="lg">
      <Reveal>
        <SectionHeading eyebrow="How we work" title="Three ways we engage" />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-3">
        {tiers.map((tier, i) => {
          const tierServices = tier.serviceIds.map(byId)
          return (
            <Reveal key={tier.index} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-5 rounded-xl bg-surface-2 p-7 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow">{tier.index}</span>
                  {tier.badge && <Badge variant="brand">{tier.badge}</Badge>}
                </div>

                <h3 className="text-h3 leading-snug">{tier.heading}</h3>
                <p className="text-sm leading-relaxed text-text-2">{tier.description}</p>

                <p className="mt-auto flex flex-wrap gap-x-2 gap-y-1 border-t border-line-soft pt-5 text-xs text-text-3">
                  {tierServices.map((s, idx) => (
                    <span key={s.id}>
                      {s.title}
                      {idx < tierServices.length - 1 && <span className="mx-2">·</span>}
                    </span>
                  ))}
                </p>

                <a
                  href={`/services/${tier.serviceIds[0]}`}
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
                >
                  explore
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
