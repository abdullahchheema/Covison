import { getAllCaseStudies } from '@/lib/case-studies'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { CaseStudyTile } from '@/components/sections/CaseStudyTile'

// Hand-picked pain points that are both common across B2B businesses and
// backed by a real, verifiable case study, so "sound familiar?" leads
// straight to proof rather than a generic claim.
const featured = [
  {
    slug: 'ai-customer-support-automation',
    problem: 'The same five support questions eat the day, while tickets that actually need a human wait in line.',
  },
  {
    slug: 'ai-content-engine',
    problem: 'One good idea gets rewritten three times over, once per platform, before it ever gets published.',
  },
  {
    slug: 'ai-personal-assistant-automation',
    problem: "Checking tomorrow's schedule still means opening five tabs and scanning a calendar by hand.",
  },
  {
    slug: 'cda-smart-bus-management-system',
    problem: 'No live visibility into where a fleet actually is, or what’s showing on a screen at any single stop.',
  },
]

export function PainPoints() {
  const caseStudies = getAllCaseStudies()
  const points = featured.map(({ slug, problem }) => {
    const study = caseStudies.find((cs) => cs.slug === slug)
    if (!study) throw new Error(`Unknown case study slug: ${slug}`)
    return { study, problem }
  })

  // Rendered two at a time (one row of the sm:grid-cols-2 layout per group).
  // The problem text for a row sits in its own grid, so its height (which
  // varies with wrapping) equalizes independently of the case study image
  // below it, and independently of that image's own caption length, which
  // varies just as much between columns. Coupling all three into a single
  // stretched block (as an earlier version did) misaligns the images
  // whenever the two captions wrap to a different number of lines.
  const rows = [points.slice(0, 2), points.slice(2, 4)]

  return (
    <Section spacing="lg">
      <Reveal>
        <SectionHeading eyebrow="Sound familiar?" title="You've probably run into one of these" />
      </Reveal>

      <div className="mt-12 flex flex-col gap-10 border-t border-line-soft pt-10 sm:mt-14 sm:gap-14 sm:pt-12">
        {rows.map((rowItems, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-6">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {rowItems.map(({ problem }, colIndex) => {
                const i = rowIndex * 2 + colIndex
                return (
                  <Reveal key={i} delay={i * 0.06} className="min-w-0">
                    <div className="flex h-full max-w-sm flex-col gap-4">
                      <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-base leading-relaxed text-foreground">{problem}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {rowItems.map(({ study }, colIndex) => {
                const i = rowIndex * 2 + colIndex
                return (
                  <Reveal key={study.slug} delay={0.1 + i * 0.06} className="min-w-0">
                    <div className="max-w-sm">
                      <CaseStudyTile study={study} />
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
