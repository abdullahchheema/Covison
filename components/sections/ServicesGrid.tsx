import { ArrowRight } from 'lucide-react'
import { services, serviceCategories } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { getServiceIcon } from '@/lib/service-icons'
import Link from 'next/link'

export function ServicesGrid() {
  return (
    <Section spacing="lg">
      <Reveal>
        <SectionHeading
          eyebrow="What we do"
          title="Fourteen services, four disciplines"
          description="Focused service lines grouped into four disciplines, so you can find the right fit without wading through everything we do."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 border-t border-line-soft pt-10 sm:mt-14 sm:grid-cols-2 sm:pt-12 lg:grid-cols-4">
        {serviceCategories.map((category, i) => {
          const Icon = getServiceIcon(category.icon)
          const count = services.filter((s) => s.category === category.id).length
          return (
            <Reveal key={category.id} delay={i * 0.06}>
              <Link
                href="/services"
                className="group flex h-full flex-col gap-4 rounded-xl border border-line-soft bg-surface-2 p-7 transition-colors hover:bg-surface-3"
              >
                <Icon size={22} className="text-brand" aria-hidden />
                <div className="flex-1">
                  <h3 className="text-h3">{category.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-2">{category.description}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  {count} service{count === 1 ? '' : 's'}
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
