import type { Metadata } from 'next'
import { ArrowRight, Target, Cpu, Users, TrendingUp } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { team, affiliate } from '@/lib/site'
import { CTASection } from '@/components/sections/CTASection'
import { CapabilityGrid } from '@/components/sections/CapabilityGrid'
import { Testimonials } from '@/components/sections/Testimonials'

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About | Who We Are & How We Work',
  description:
    'Learn about Covison: the team, values, and approach behind our AI automation and website services for B2B companies.',
}

const values = [
  {
    Icon: Target,
    title: 'Outcome-obsessed',
    description:
      'We measure success by business impact, not deliverables. Every decision is tied back to a real outcome: more revenue, less waste, or stronger positioning.',
  },
  {
    Icon: Cpu,
    title: 'Technical depth',
    description:
      'We work at the frontier of AI and modern web development. We use the right tools for the job, not whatever is trending on Twitter.',
  },
  {
    Icon: Users,
    title: 'Partners, not vendors',
    description:
      "We think like a member of your team. We push back when something won't work, propose better paths, and stay accountable to results.",
  },
  {
    Icon: TrendingUp,
    title: 'Built to scale',
    description:
      'Everything we build is designed to grow with your business: modular, maintainable, and documented so your team can own it over time.',
  },
]

const approachPoints = [
  "We audit before we build. Every engagement starts with understanding your actual operations, not selling you a solution we've already decided on.",
  "We set clear success metrics upfront. You know exactly what we're building for before a line of code is written.",
  'We document everything. Your team inherits systems that are understandable and maintainable, not black boxes.',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Covison"
        title="We help businesses operate at a higher level."
        heroImage="/images/hero.png"
        heroFullHeight
      />

      {/* Intro */}
      <Section spacing="sm">
        <Reveal>
          <div className="flex max-w-3xl flex-col gap-4 text-lg leading-relaxed text-text-2">
            <p>
              Covison was founded on a simple belief: most B2B companies are sitting on enormous
              untapped potential. They&apos;re losing hours to manual work, losing deals to weak
              digital presence, and leaving money on the table because they haven&apos;t yet unlocked
              AI.
            </p>
            <p>
              We exist to change that, by combining deep AI expertise with premium design and
              development, delivered as a focused, senior team that actually cares about your results.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Positioning */}
      <Section variant="surface" spacing="lg">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow="Our approach"
                title="Less noise. More signal."
                description="The AI space is flooded with hype. We cut through it. We only build what creates real, measurable value, and we're direct about what won't."
              />
              <ul className="flex flex-col gap-5 border-t border-line-soft pt-6">
                {approachPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="eyebrow flex-shrink-0">0{i + 1}</span>
                    <p className="text-sm leading-relaxed text-text-2">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl bg-surface-2 p-8 text-center sm:p-10">
              <p className="text-metric">B2B</p>
              <p className="mt-3 text-lg font-semibold text-foreground">100% B2B focused</p>
              <p className="mt-2 text-sm leading-relaxed text-text-2">
                We don&apos;t try to be everything to everyone. We understand the B2B buying journey,
                the longer sales cycles, and what it takes to build trust with decision-makers.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section spacing="lg">
        <Reveal>
          <SectionHeading eyebrow="Our values" title="What we believe in" />
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-10 border-t border-line-soft pt-10 sm:mt-14 sm:grid-cols-2 sm:pt-12">
          {values.map(({ Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="flex flex-col gap-3">
                <Icon size={20} className="text-brand" />
                <h3 className="text-h3">{title}</h3>
                <p className="text-sm leading-relaxed text-text-2">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CapabilityGrid />

      {/* Team */}
      <Section spacing="lg">
        <Reveal>
          <SectionHeading
            eyebrow="The team"
            title="Senior talent, no hand-offs"
            description="When you work with Covison, you work directly with the people building your project, not a project manager translating your requirements through a chain of contractors."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 border-t border-line-soft pt-10 sm:mt-14 sm:grid-cols-3 sm:pt-12">
          {team.map(({ name, role, bio }, i) => (
            <Reveal key={name} delay={0.06 + i * 0.06}>
              <div className="flex h-full flex-col gap-6">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-foreground">{name}</p>
                  <p className="eyebrow mt-1">{role}</p>
                </div>

                <div className="flex flex-col gap-3">
                  {bio.map((paragraph, j) => (
                    <p key={j} className="text-sm leading-relaxed text-text-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center sm:mt-14">
            <Button href="/contact" size="sm">
              Work with us
              <ArrowRight size={15} />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Testimonials eyebrow="What clients say" title="What our clients say about us" />

      {/* Company information */}
      <Section variant="surface" spacing="sm">
        <Reveal>
          <p className="eyebrow mb-3">Company information</p>
          <p className="max-w-[68ch] text-sm leading-relaxed text-text-2">
            Covison is affiliated with {affiliate.name}, a company registered in {affiliate.country}{' '}
            under company number {affiliate.companyNumber}, with a registered address at{' '}
            {affiliate.address}.
          </p>
        </Reveal>
      </Section>

      <CTASection />
    </>
  )
}
