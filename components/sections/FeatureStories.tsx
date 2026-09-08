import { services } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

const featuredIds = ['consulting', 'automation', 'web', 'chatbots']
const images: Record<string, string> = {
  consulting: '/images/feature-consulting.png',
  automation: '/images/feature-automation.png',
  web: '/images/feature-web.png',
  chatbots: '/images/feature-chatbots.png',
}

export function FeatureStories() {
  const stories = featuredIds.map((id) => {
    const service = services.find((s) => s.id === id)
    if (!service) throw new Error(`Unknown service id: ${id}`)
    return service
  })

  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-20 sm:gap-24">
        {stories.map((service, i) => {
          const flipped = i % 2 === 1
          return (
            <Reveal key={service.id}>
              <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={cn('flex flex-col gap-5', flipped && 'md:order-2')}>
                  <span className="eyebrow text-brand">{service.outcomes[0]}</span>
                  <h3 className="text-h1">{service.title}</h3>
                  <p className="text-body-lg text-text-2">{service.description}</p>
                  <Button href={`/services/${service.id}`} variant="link" className="mt-2 w-fit">
                    Learn more
                    <ArrowRight size={14} />
                  </Button>
                </div>
                <Figure
                  src={images[service.id]}
                  alt=""
                  sizes="(min-width: 768px) 544px, 100vw"
                  className={cn('aspect-square w-full rounded-2xl', flipped && 'md:order-1')}
                />
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
