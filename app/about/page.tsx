import type { Metadata } from 'next'
import Image from 'next/image'
import { existsSync } from 'fs'
import { join } from 'path'
import { ArrowRight, Target, Cpu, Users, TrendingUp } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About — Who We Are & How We Work',
  description:
    'Learn about Covison — the team, values, and approach behind our AI automation and website services for B2B companies.',
}

const values = [
  {
    Icon: Target,
    title: 'Outcome-obsessed',
    description:
      'We measure success by business impact, not deliverables. Every decision is tied back to a real outcome — more revenue, less waste, or stronger positioning.',
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
      'Everything we build is designed to grow with your business — modular, maintainable, and documented so your team can own it over time.',
  },
]

const approachPoints = [
  "We audit before we build. Every engagement starts with understanding your actual operations, not selling you a solution we've already decided on.",
  "We set clear success metrics upfront. You know exactly what we're building for before a line of code is written.",
  'We document everything. Your team inherits systems that are understandable and maintainable — not black boxes.',
]

const focusMetrics = [
  { label: 'Avg. project value', value: '$12K' },
  { label: 'Client retention', value: '90%' },
  { label: 'Avg. time to ROI', value: '30 days' },
  { label: 'NPS score', value: '72' },
]

const team = [
  {
    // Drop the headshot at public/team/saad-rabbani.jpg
    photo: '/team/saad-rabbani.jpg',
    initials: 'SR',
    name: 'Saad Rabbani',
    role: 'Co-Founder — AI Automation & Web Development',
    bio: [
      "Saad leads Covison's technical build — from AI agents and workflow automations to the websites and applications that put them in front of clients. He thinks in systems, not one-off scripts, so what he ships keeps running long after the handoff.",
      "He sets the technical direction for every engagement, turning a client's operational bottlenecks into automations and interfaces that hold up under real usage, not just demos.",
    ],
  },
  {
    // Drop the headshot at public/team/abdullah-imran.jpg
    photo: '/team/abdullah-imran.jpg',
    initials: 'AI',
    name: 'Abdullah Imran',
    role: 'Co-Founder — Strategy & Client Delivery',
    bio: [
      "Abdullah runs point on strategy and delivery, making sure every engagement starts with a clear problem and ends with a measurable result — before a single automation gets built.",
      'He owns the client relationship from first call to final handoff, keeping projects scoped, on schedule, and tied to outcomes the client can point to.',
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Covison"
        title={
          <>
            We help businesses operate at a <span className="text-sheen">higher level</span>.
          </>
        }
      >
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted">
          <p>
            Covison was founded on a simple belief: most B2B companies are sitting on enormous
            untapped potential. They&apos;re losing hours to manual work, losing deals to weak
            digital presence, and leaving money on the table because they haven&apos;t yet unlocked
            AI.
          </p>
          <p>
            We exist to change that — by combining deep AI expertise with premium design and
            development, delivered as a focused, senior team that actually cares about your results.
          </p>
        </div>
      </PageHeader>

      {/* Positioning */}
      <Section variant="surface" spacing="lg">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow="Our approach"
                title="Less noise. More signal."
                description="The AI space is flooded with hype. We cut through it. We only build what creates real, measurable value — and we're direct about what won't."
              />
              <ul className="flex flex-col gap-5">
                {approachPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-ink">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-line-strong bg-white/[0.05] p-8 text-center sm:p-10">
              <p className="text-sheen text-6xl font-semibold">B2B</p>
              <p className="mt-3 text-lg font-semibold text-ink">100% B2B focused</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We don&apos;t try to be everything to everyone. We understand the B2B buying journey,
                the longer sales cycles, and what it takes to build trust with decision-makers.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-8 text-left">
                {focusMetrics.map((m) => (
                  <div key={m.label}>
                    <dd className="text-sheen text-2xl font-semibold">{m.value}</dd>
                    <dt className="mt-1 text-xs text-faint">{m.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section spacing="lg">
        <Reveal>
          <SectionHeading align="center" eyebrow="Our values" title="What we believe in" />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {values.map(({ Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="card h-full p-8 sm:p-9">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Icon size={20} className="text-ink" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section variant="surface" spacing="lg">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="The team"
            title="Senior talent, no hand-offs"
            description="When you work with Covison, you work directly with the people building your project — not a project manager translating your requirements through a chain of contractors."
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:mt-16 sm:grid-cols-2">
          {team.map(({ photo, initials, name, role, bio }, i) => {
            const hasPhoto = existsSync(join(process.cwd(), 'public', photo))

            return (
              <Reveal key={name} delay={0.1 + i * 0.08}>
                <div className="card-hover flex h-full flex-col gap-6 rounded-3xl border border-line bg-white/[0.03] p-7 transition-colors sm:p-8">
                  <div
                    className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line-strong"
                    style={{ background: 'radial-gradient(circle at 30% 20%, #3a3a40, #131316)' }}
                  >
                    {hasPhoto ? (
                      <Image
                        src={photo}
                        alt={name}
                        fill
                        sizes="(min-width: 640px) 22rem, 90vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-5xl font-bold text-ink/70">
                        {initials}
                      </span>
                    )}
                  </div>

                  <div>
                    <p className="text-2xl font-bold tracking-tight text-ink">{name}</p>
                    <p className="mt-1 text-sm font-semibold text-sheen">{role}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {bio.map((paragraph, j) => (
                      <p key={j} className="text-sm leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" size="sm">
              Work with us
              <ArrowRight size={15} />
            </Button>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  )
}
