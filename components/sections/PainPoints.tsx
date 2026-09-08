import { getAllCaseStudies } from '@/lib/case-studies'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { ArrowRight } from 'lucide-react'

// Hand-picked pain points that are both common across B2B businesses and
// backed by a real, verifiable case study, so "sound familiar?" leads
// straight to proof rather than a generic claim.
const featured = [
  {
    slug: 'smallbiz-acquisitions-crm-daily-ai-qualification',
    problem:
      "Leads slip through a CRM that's fallen out of sync, and one person manually qualifying every lead can only cover so many hours in a day.",
    linkLabel: 'Read how we fixed this for SmallBiz Acquisitions',
  },
  {
    slug: 'confidential-fmcg-data-modernization',
    problem:
      'Forecasts still live across a dozen disconnected spreadsheets, and every cycle means days of manual reconciliation before anyone trusts the numbers.',
    linkLabel: 'Read how we fixed this for a global FMCG leader',
  },
  {
    slug: 'no-answer-production-ai-receptionist-platform',
    problem:
      "Missed calls quietly become missed bookings, and staffing a receptionist around the clock isn't realistic for most small operators.",
    linkLabel: 'Read the No-Answer case study',
  },
  {
    slug: 'yourdelivery-hybrid-address-intelligence',
    problem:
      'Incoming data is such a mess that only a small fraction is usable without manual correction, and that stops scaling the moment volume goes up.',
    linkLabel: 'Read the YourDelivery case study',
  },
]

export function PainPoints() {
  const caseStudies = getAllCaseStudies()
  const points = featured.map(({ slug, problem, linkLabel }) => {
    const study = caseStudies.find((cs) => cs.slug === slug)
    if (!study) throw new Error(`Unknown case study slug: ${slug}`)
    return { study, problem, linkLabel }
  })

  return (
    <Section spacing="lg">
      <Reveal>
        <SectionHeading eyebrow="Sound familiar?" title="You've probably run into one of these" />
      </Reveal>

      <ol className="mt-12 grid gap-x-8 gap-y-10 border-t border-line-soft pt-10 sm:mt-14 sm:grid-cols-2 sm:pt-12">
        {points.map(({ study, problem, linkLabel }, i) => (
          <Reveal key={study.slug} delay={i * 0.06}>
            <li className="flex flex-col gap-4">
              <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-base leading-relaxed text-foreground">{problem}</p>
              <Button href={`/case-studies/${study.slug}`} variant="link">
                {linkLabel}
                <ArrowRight size={14} />
              </Button>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
