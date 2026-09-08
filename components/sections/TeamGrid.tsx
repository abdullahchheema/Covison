import { LinkedInIcon } from '@/components/ui/LinkedInIcon'
import { team } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function TeamGrid() {
  return (
    <Section variant="surface" spacing="lg">
      <Reveal>
        <SectionHeading eyebrow="Who you'll work with" title="The founding team" />
      </Reveal>

      <div className="mt-12 grid gap-8 sm:mt-14 sm:grid-cols-3">
        {team.map(({ name, role, bio, linkedin }, i) => (
          <Reveal key={name} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-3 text-center">
              <div>
                <p className="text-base font-semibold text-foreground">{name}</p>
                <p className="mt-1 text-xs text-text-3">{role}</p>
              </div>
              <p className="max-w-[32ch] text-sm leading-relaxed text-text-2">{bio[0]}</p>
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on LinkedIn`}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-3 transition-colors hover:text-foreground"
                >
                  <LinkedInIcon size={14} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
