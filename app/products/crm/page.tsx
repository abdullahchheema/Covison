import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { posts } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FlowSteps } from '@/components/ui/FlowSteps'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/products/crm' },
  title: 'Covison CRM | Your Sales Pipeline, Finally Working as One',
  description:
    'Covison CRM is a business platform for managing leads, customers, sales pipelines, and follow-ups from one unified workspace.',
}

const problemPoints = [
  'Leads land in an inbox, a spreadsheet, a form tool, and a messaging app, and nobody owns pulling them into one place.',
  'Follow-ups depend on someone remembering, so the deals that go quiet are usually the ones that were closest to yes.',
  'The sales process lives in habits and side conversations instead of a system, so it breaks the moment someone is out sick or a new rep joins.',
  'Leadership asks how the pipeline looks and gets a guess, not an answer, because visibility means someone manually compiling a report.',
  'Reps spend real selling time on data entry and status updates instead of the conversations that actually move deals forward.',
]

const crmCapabilities = [
  {
    title: 'Contacts',
    description: 'Every contact in one place, with notes and search so nothing gets lost between conversations.',
  },
  {
    title: 'Pipeline',
    description:
      'A kanban view of deals moving through stages, seeded with a working pipeline from the moment your workspace is created.',
  },
  {
    title: 'Tasks',
    description: "Assign work to the right person, with a due date attached instead of a mental note.",
  },
  {
    title: 'Tickets',
    description: 'Track support and service requests alongside the sales relationship, not in a separate tool.',
  },
  {
    title: 'Reports',
    description: 'Dashboard stats that reflect what is actually happening in your pipeline, without a manual export.',
  },
]

const crmAutomations = [
  {
    title: 'Automatic setup',
    description:
      'Create an account and your workspace is ready immediately: your profile is provisioned and a working sales pipeline is already in place, no blank-slate setup screen.',
  },
  {
    title: 'Assignment notifications',
    description:
      'Assign a contact, company, deal, task, or ticket to a teammate and they are notified in the app the moment it lands on their plate. Assign something to yourself and it stays quiet.',
  },
  {
    title: 'Automatic audit trail',
    description:
      'Every change to a contact, company, deal, or task is logged automatically, before and after, including when something is archived. Nobody has to remember to keep records.',
  },
]

// The default pipeline every new workspace is seeded with. Deals end in
// either Won or Lost, shown here as one terminal stage rather than implying
// Lost happens after Won.
const workflowStages = ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Won / Lost']

const crmPosts = posts.filter((p) => p.relatedProduct === 'crm')

export default function CrmProductPage() {
  return (
    <>
      {/* 01: Hero */}
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Figure src="/images/products/crm-hero.png" alt="" sizes="100vw" className="h-full w-full" />
        </div>
        <div
          className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/45 to-black/25"
          aria-hidden
        />
        <Container className="relative z-20 py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="eyebrow text-brand-violet">A Covison Product</span>
            <h1 className="mt-6 text-h1 sm:text-hero md:text-display text-white">
              Your sales pipeline, finally working as one.
            </h1>
            <p className="mt-7 max-w-[50ch] text-body-lg text-white/85">
              Manage leads, relationships, follow-ups, and sales workflows from one unified
              workspace, built by Covison.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href="/contact" size="lg">
                Book a demo
              </Button>
              <Button href="https://crm.covison.com" variant="outline" size="lg" external>
                See how it works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 02: The Problem */}
      <Section variant="surface" spacing="lg">
        <Reveal>
          <SectionHeading eyebrow="The problem" title="Sales pipelines fall apart in the gaps between tools" />
        </Reveal>
        <div className="mt-10 flex flex-col gap-5 border-t border-line-soft pt-10">
          {problemPoints.map((point, i) => (
            <Reveal key={point} delay={Math.min(i * 0.05, 0.2)}>
              <p className="max-w-[68ch] text-base leading-relaxed text-text-2">{point}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 03: The Product */}
      <Section spacing="lg">
        <Reveal>
          <SectionHeading
            eyebrow="The product"
            title="One workspace for the whole sales relationship"
            description="Covison CRM brings contacts, companies, deals, tasks, and tickets into a single system, so your team works from one source of truth instead of stitching one together every morning."
          />
        </Reveal>
      </Section>

      {/* 04: Core Capabilities (renders once populated) */}
      {crmCapabilities.length > 0 && (
        <Section variant="surface" spacing="lg">
          <Reveal>
            <SectionHeading eyebrow="Core capabilities" title="What's inside Covison CRM" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {crmCapabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={Math.min(i * 0.04, 0.2)}>
                <div className="flex h-full flex-col gap-2 rounded-xl bg-surface-2 p-6">
                  <h3 className="text-h3">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-text-2">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 05: CRM Workflow */}
      <Section id="workflow" spacing="lg">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="How a deal moves through the pipeline"
            description="Every new workspace starts with this pipeline already built, so deals work immediately instead of waiting on a setup step."
          />
        </Reveal>
        <div className="mt-12">
          <FlowSteps steps={workflowStages} />
        </div>
      </Section>

      {/* 06: Automation (renders once populated) */}
      {crmAutomations.length > 0 && (
        <Section variant="surface" spacing="lg">
          <Reveal>
            <SectionHeading
              eyebrow="Automation"
              title="Less admin, more selling"
              description="A few things happen automatically in the background, so your team spends less time on setup and record-keeping."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {crmAutomations.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.05, 0.2)}>
                <div className="flex h-full flex-col gap-2 rounded-xl bg-surface-2 p-6">
                  <h3 className="text-h3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-2">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 07: Product Story */}
      {crmPosts.length > 0 && (
        <Section spacing="lg">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <SectionHeading eyebrow="From the blog" title="Notes on modern sales systems" />
            </Reveal>
            <Reveal delay={0.06}>
              <Button href="/insights" variant="link">
                All insights
                <ArrowRight size={16} />
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {crmPosts.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i * 0.05, 0.2)}>
                <Link href={`/insights/${post.slug}`} className="group flex flex-col gap-4">
                  <Figure
                    src={`/images/insights/${post.slug}.png`}
                    alt=""
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3] w-full rounded-2xl"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="brand">{post.category}</Badge>
                      {post.readingTime && <span className="text-xs text-text-3">{post.readingTime}</span>}
                    </div>
                    <h3 className="text-h3 leading-snug transition-colors group-hover:text-brand">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-2">{post.excerpt}</p>
                    <p className="text-xs text-text-3">{post.date}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  )
}
