import { stats } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export function Stats() {
  return (
    <Section spacing="md">
      <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
        <dl className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="flex flex-col gap-2 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-sheen text-4xl font-semibold sm:text-5xl">{stat.value}</dd>
                <p className="text-sm leading-snug text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  )
}
