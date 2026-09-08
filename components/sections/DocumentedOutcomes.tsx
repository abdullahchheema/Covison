import { getAllCaseStudies } from '@/lib/case-studies'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function DocumentedOutcomes() {
  const studies = getAllCaseStudies().slice(0, 3)

  return (
    <Section spacing="lg">
      <Reveal>
        <SectionHeading
          eyebrow="Real engagements"
          title="What clients get"
          description="A sample of what we've shipped and the outcomes that came with it. Full detail on each lives in our case studies."
        />
      </Reveal>

      <div className="mt-12 grid gap-x-8 gap-y-10 border-t border-line-soft pt-10 sm:mt-14 sm:pt-12 md:grid-cols-3">
        {studies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.06}>
            <div className="flex h-full flex-col gap-3">
              <p className="text-h3">{study.result}</p>
              <h3 className="eyebrow">{study.client}</h3>
              <p className="text-sm leading-relaxed text-text-2">{study.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
