import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const capabilities = [
  { domain: 'AI & agents', stack: 'OpenAI, Anthropic, LangChain, vector databases' },
  { domain: 'Web & product', stack: 'Next.js, React, TypeScript' },
  { domain: 'Automation', stack: 'n8n, Zapier, Make, custom Python pipelines' },
  { domain: 'Data & infrastructure', stack: 'PostgreSQL, Supabase, AWS' },
  { domain: 'Integrations', stack: 'REST & GraphQL APIs, webhooks, CRM/ERP systems' },
  { domain: 'CRM & sales tooling', stack: 'HubSpot, Salesforce, custom pipelines' },
]

export function CapabilityGrid() {
  return (
    <Section variant="surface" spacing="lg">
      <Reveal>
        <SectionHeading
          eyebrow="What we build with"
          title="A stack chosen for the job, not the trend"
          description="No bloated team of specialists per tool. A focused team that covers this ground end to end."
        />
      </Reveal>

      <div className="mt-12 grid gap-x-8 gap-y-8 border-t border-line-soft pt-10 sm:mt-14 sm:grid-cols-2 sm:pt-12 lg:grid-cols-3">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.domain} delay={(i % 3) * 0.06}>
            <div className="flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-foreground">{cap.domain}</p>
              <p className="text-sm text-text-2">{cap.stack}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
