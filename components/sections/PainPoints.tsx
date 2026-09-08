import { services } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const featuredIds = ['consulting', 'automation', 'web', 'lead-generation']

export function PainPoints() {
  const points = featuredIds.map((id) => {
    const service = services.find((s) => s.id === id)
    if (!service) throw new Error(`Unknown service id: ${id}`)
    return service
  })

  return (
    <Section spacing="lg">
      <Reveal>
        <SectionHeading eyebrow="Sound familiar?" title="You've probably run into one of these" />
      </Reveal>

      <ol className="mt-12 grid gap-x-8 gap-y-10 border-t border-line-soft pt-10 sm:mt-14 sm:grid-cols-2 sm:pt-12">
        {points.map((service, i) => (
          <Reveal key={service.id} delay={i * 0.06}>
            <li className="flex flex-col gap-3">
              <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-base leading-relaxed text-foreground">{service.problem}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
