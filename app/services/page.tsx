import type { Metadata } from 'next'
import {
  Lightbulb,
  Zap,
  Monitor,
  MessageSquare,
  Target,
  Bot,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import { services } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services — AI Automation, Lead Gen, Agents & More',
  description:
    'Explore the services Covison offers: AI consulting, workflow automation, lead generation, custom AI agents, CRM & sales automation, website development, AI chatbots, and AI workshops for B2B companies.',
}

const iconMap = { Lightbulb, Zap, Monitor, MessageSquare, Target, Bot, Users, GraduationCap }

const serviceDetails: Record<string, { problem: string; details: string[] }> = {
  consulting: {
    problem:
      'Most businesses know AI is important but have no clear plan for where to start or how to prioritise.',
    details: [
      'Comprehensive AI readiness audit of your current operations',
      'Identification of your top 3–5 automation opportunities by ROI',
      'Detailed technical and business roadmap with phased delivery',
      'Vendor and tooling recommendations tailored to your stack',
      'Executive presentation deck for stakeholder alignment',
    ],
  },
  automation: {
    problem:
      "Manual, repetitive tasks drain your team's time, introduce errors, and create a ceiling on your capacity to scale.",
    details: [
      'Custom AI agent development for your specific workflows',
      'Integration with your existing tools (CRM, ERP, comms, databases)',
      'Automated data pipelines, reporting, and notifications',
      'End-to-end testing and deployment to production',
      'Monitoring dashboards and ongoing optimisation support',
    ],
  },
  web: {
    problem:
      'Generic websites fail to convert B2B buyers. You need a site that communicates your value with precision and drives qualified action.',
    details: [
      'Custom brand identity and UX design (no templates)',
      'Next.js / React development, optimised for speed and SEO',
      'CMS integration for easy content management (Sanity, Contentful)',
      'Conversion-focused landing pages and lead capture flows',
      'Analytics setup, A/B testing readiness, and performance monitoring',
    ],
  },
  chatbots: {
    problem:
      'Your team spends hours answering the same questions. Prospects don\'t get answers fast enough, and internal knowledge is siloed.',
    details: [
      'Custom AI training on your products, FAQs, and internal docs',
      'Multi-channel deployment (website, Slack, email, WhatsApp)',
      'CRM integration to capture and qualify leads automatically',
      'Escalation flows to route complex queries to human agents',
      'Analytics on resolution rate, topic trends, and satisfaction',
    ],
  },
  'lead-generation': {
    problem:
      'Manual prospecting is slow and inconsistent, and generic outreach gets ignored — leaving your pipeline unpredictable and your sales team chasing the wrong accounts.',
    details: [
      'Ideal customer profile and target account research',
      'Automated prospecting across multiple data sources',
      'AI-personalised outreach sequences at scale',
      'Lead scoring and qualification before handoff to sales',
      'Ongoing pipeline reporting and campaign optimisation',
    ],
  },
  'ai-agents': {
    problem:
      'Off-the-shelf AI tools handle simple prompts but fall short on real, multi-step business processes that require judgment, context, and reliable execution.',
    details: [
      'Agent architecture mapped to your specific workflows',
      'Integration with internal tools, APIs, and data sources',
      'Multi-step reasoning and decision logic, not just single replies',
      'Guardrails and human-in-the-loop checkpoints where it matters',
      'Continuous monitoring and agent performance tuning',
    ],
  },
  'crm-sales': {
    problem:
      'Leads fall through the cracks when follow-up depends on memory, and disconnected tools mean your sales data never tells the full story.',
    details: [
      'CRM setup, migration, and pipeline structure design',
      'Automated lead routing and follow-up sequences',
      'Integration between CRM, email, calendar, and comms tools',
      'Deal-stage triggers and task automation for reps',
      'Live sales dashboards and forecasting reports',
    ],
  },
  workshops: {
    problem:
      'Most teams have access to AI tools but no real training — so adoption stalls, usage stays surface-level, and the ROI never materialises.',
    details: [
      "Live, hands-on workshops tailored to your team's roles and tools",
      'Practical exercises using your real workflows and data',
      'Custom AI usage playbooks your team keeps after the session',
      'Prompting, tooling, and workflow-design best practices',
      'Follow-up office hours to reinforce adoption',
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Eight services. One team. Measurable results."
        description="We focus on high-impact service lines that give B2B companies real competitive advantage — not just deliverables."
      >
        <Button href="/contact">
          Start a project
          <ArrowRight size={16} />
        </Button>
      </PageHeader>

      {services.map((service, i) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap]
        const detail = serviceDetails[service.id]
        const isEven = i % 2 === 0

        return (
          <Section key={service.id} id={service.id} variant={isEven ? 'surface' : 'base'} spacing="lg">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Overview */}
              <Reveal direction={isEven ? 'left' : 'right'}>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Icon size={22} className="text-ink" />
                    </span>
                    <span className="eyebrow">0{i + 1}</span>
                  </div>

                  <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                    {service.title}
                  </h2>

                  <p className="border-b border-line pb-6 text-base leading-relaxed text-muted">
                    <span className="font-semibold text-ink/90">The problem: </span>
                    {detail.problem}
                  </p>

                  <p className="text-base leading-relaxed text-muted">{service.description}</p>

                  <Button href="/contact" variant="secondary" className="w-fit">
                    Get a quote
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </Reveal>

              {/* Deliverables */}
              <Reveal direction={isEven ? 'right' : 'left'} delay={0.12}>
                <div className="rounded-2xl border border-line bg-white/[0.02] p-7 sm:p-9">
                  <p className="eyebrow">What&apos;s included</p>
                  <ul className="mt-6 flex flex-col gap-4">
                    {detail.details.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={17} className="mt-0.5 flex-shrink-0 text-ink" />
                        <span className="text-sm leading-relaxed text-ink/90">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-line pt-6">
                    <p className="eyebrow mb-3">Key outcomes</p>
                    <div className="flex flex-wrap gap-2">
                      {service.outcomes.map((o) => (
                        <Badge key={o}>{o}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Section>
        )
      })}

      <CTASection />
    </>
  )
}
