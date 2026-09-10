import { team } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { TeamCard } from '@/components/sections/TeamCard'

export function TeamGrid() {
  return (
    <Section variant="surface" spacing="lg">
      <Reveal>
        <SectionHeading eyebrow="Who you'll work with" title="The founding team" />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-3">
        {team.map((person, i) => (
          <Reveal key={person.name} delay={i * 0.08} className="min-w-0">
            <TeamCard {...person} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
