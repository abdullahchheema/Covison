import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

const avatarBg = ['#2a2a2e', '#3a3a40', '#4a4a52']

export function Testimonials() {
  return (
    <Section variant="surface" spacing="lg">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-white/[0.02] p-7 sm:p-8">
              <Quote size={26} className="text-white/40" />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-ink/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-ink"
                  style={{ background: avatarBg[i % avatarBg.length] }}
                >
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-faint">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
