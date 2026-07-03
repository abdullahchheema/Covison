import { processSteps } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export function ProcessSteps() {
  return (
    <Section variant="surface" spacing="lg">
      <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.08}>
            <li className="flex flex-col gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line-strong bg-white/10 text-sm font-semibold text-ink">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
