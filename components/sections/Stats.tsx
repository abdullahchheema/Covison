import { stats } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

export function Stats() {
  return (
    <Section spacing="sm" variant="surface">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-soft pt-10 sm:pt-12 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05}>
            <div className="flex flex-col gap-2">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-metric tabular-nums">
                <CountUp value={stat.value} />
              </dd>
              <p className="text-sm leading-snug text-text-2">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
