'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/site'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-6.75rem)] flex-col overflow-hidden bg-canvas md:min-h-[calc(100svh-8rem)]">
      {/* Faint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      <Container className="flex flex-1 flex-col items-start justify-center py-6 sm:py-8">
        <div className="flex max-w-4xl flex-col gap-5">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line-strong bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            AI Automation &amp; Website Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Build the future.
            <br />
            <span className="text-sheen">Automate the rest.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="flex flex-col items-start gap-5 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href="/contact" size="lg">
                <Calendar size={18} />
                Book a strategy call
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View our services
                <ArrowRight size={18} />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['SK', 'MD', 'PN'].map((initials, i) => (
                  <span
                    key={initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-canvas text-xs font-semibold text-ink"
                    style={{ background: ['#2a2a2e', '#3a3a40', '#4a4a52'][i] }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium text-ink">Trusted by 10+ businesses</p>
                <p className="text-xs text-faint">Averaging 4× ROI in the first 90 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
