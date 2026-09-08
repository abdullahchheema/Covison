import { getAllCaseStudies } from '@/lib/case-studies'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { CaseStudyCard } from '@/components/sections/CaseStudyCard'
import { ArrowRight } from 'lucide-react'

export function WorkTeaser() {
  const featured = getAllCaseStudies().slice(0, 3)

  return (
    <Section variant="surface" spacing="lg">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <SectionHeading eyebrow="Selected work" title="Things we've shipped" />
        </Reveal>
        <Reveal delay={0.08}>
          <Button href="/case-studies" variant="link">
            all case studies
            <ArrowRight size={16} />
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 border-t border-line-soft sm:mt-14">
        {featured.map((study, i) => (
          <Reveal key={study.slug} delay={Math.min(i * 0.06, 0.18)}>
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
