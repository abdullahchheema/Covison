import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Carousel } from '@/components/ui/Carousel'
import { Button } from '@/components/ui/Button'

interface TestimonialsProps {
  eyebrow?: string
  title?: string
}

export function Testimonials({ eyebrow, title }: TestimonialsProps = {}) {
  return (
    <Section variant="surface" spacing="lg">
      {eyebrow && title && (
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} className="mb-12 sm:mb-14" />
        </Reveal>
      )}
      <div className="border-t border-line-soft pt-10 sm:pt-12">
        {testimonials.length === 0 ? (
          <Reveal>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-dashed border-line px-8 py-14 text-center">
              <span className="eyebrow">Placeholder</span>
              <p className="max-w-[42ch] text-lg leading-relaxed text-text-2">
                Client testimonials will appear here once early engagements are complete and
                clients have agreed to be quoted.
              </p>
              <Button href="/case-studies" variant="outline" size="sm" className="mt-2">
                See our work
              </Button>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <Carousel>
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
                >
                  <Quote size={28} className="text-line" />
                  <blockquote className="text-xl leading-relaxed text-foreground">{t.quote}</blockquote>
                  <figcaption>
                    <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                    <span className="eyebrow mt-1 block">
                      {t.role}, {t.company}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </Carousel>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
