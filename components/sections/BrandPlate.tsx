import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Logo } from '@/components/layout/Logo'

/**
 * Full-bleed permanently-dark plate: the page's single change of register (§9.8).
 * Renders identically in both themes; text stays white/70, never `text-2`.
 */
export function BrandPlate() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 sm:py-28 text-white">
      <div className="absolute inset-0 -z-10 opacity-60">
        <Figure src="/images/ink-texture.png" alt="" fallback={<div aria-hidden />} className="h-full w-full" />
      </div>

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-6 text-center">
        <Reveal>
          <Logo size="footer" onInk />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-h2 md:text-h1">
            We build systems that keep running long after the handoff.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-[48ch] text-body-lg text-white/70">
            No dashboards nobody opens, no automations that quietly break in week three. If it
            ships, it holds up under real use, documented well enough that your team can own it.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
