import { caseStudies } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function DocumentedOutcomes() {
  return (
    <Section spacing="lg">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Proof, not promises"
          title="Documented outcomes"
          description="Real metrics from real engagements, with client names anonymised and results verified at 90 days post-deployment."
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Reveal key={study.title} delay={i * 0.08}>
            <div className="card flex h-full flex-col p-7 sm:p-8">
              <p className="text-sheen text-2xl font-semibold leading-snug">{study.result}</p>
              <h3 className="mt-4 text-base font-semibold text-ink">{study.client}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{study.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
