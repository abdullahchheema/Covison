'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Figure } from '@/components/ui/Figure'
import { siteConfig } from '@/lib/site'

const ease = [0.16, 1, 0.3, 1] as const
const eyebrowItems = ['AI Automation', 'Website Development', 'Workflow Systems']

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? {} : { opacity: 0, y: 16 }
  const animate = prefersReducedMotion ? {} : { opacity: 1, y: 0 }

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Figure src="/images/hero.png" alt="" sizes="100vw" className="h-full w-full" />
      </div>
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/45 to-black/25"
        aria-hidden
      />

      <Container className="relative z-20 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, ease }}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
          >
            {eyebrowItems.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="eyebrow text-brand-violet">{item}</span>
                {i < eyebrowItems.length - 1 && (
                  <span aria-hidden className="text-white/40">
                    ·
                  </span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mt-6 text-h1 sm:text-hero md:text-display"
          >
            <span className="block text-white/80">Build the future.</span>
            <span className="block text-white">Automate the rest.</span>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.16, ease }}
            className="mt-7 max-w-[50ch] text-body-lg text-white/85"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.24, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Button href="/contact" size="lg">
              Book a strategy call
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View our services
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
