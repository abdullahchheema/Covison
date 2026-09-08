import { processSteps } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { EditorialRow } from '@/components/ui/EditorialRow'
import { Reveal } from '@/components/ui/Reveal'

export function ProcessSteps({ spacing = 'lg' }: { spacing?: 'sm' | 'md' | 'lg' }) {
  return (
    <Section spacing={spacing}>
      <div className="border-t border-line-soft">
        {processSteps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.06}>
            <EditorialRow index={step.number} title={step.title} description={step.description} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
