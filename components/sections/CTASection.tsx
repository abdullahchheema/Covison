import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/site'

export function CTASection({ spacing = 'lg' }: { spacing?: 'sm' | 'md' | 'lg' }) {
  return (
    <Section variant="warm" spacing={spacing}>
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="eyebrow text-brand">Ready to talk?</span>
          <h2 className="text-h1 md:text-hero">Let&apos;s see if this is a fit.</h2>
          <p className="text-body-lg text-text-2">
            30 minutes. No deck, no pressure, just tell us what you&apos;re building and
            we&apos;ll tell you honestly whether we can help.
          </p>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/contact">Book a strategy call</Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-brand"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
