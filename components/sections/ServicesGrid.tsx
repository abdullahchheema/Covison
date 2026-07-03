'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Lightbulb,
  Zap,
  Monitor,
  MessageSquare,
  Target,
  Bot,
  Users,
  GraduationCap,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { services } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const iconMap = { Lightbulb, Zap, Monitor, MessageSquare, Target, Bot, Users, GraduationCap }

const FEATURED_COUNT = 4

function ServiceCard({ service, delay }: { service: (typeof services)[number]; delay: number }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap]
  return (
    <Reveal delay={delay}>
      <Link
        href={`/services#${service.id}`}
        className="card card-hover group flex h-full flex-col p-7 sm:p-8"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-transform duration-300 group-hover:scale-110">
          <Icon size={22} className="text-ink" />
        </span>

        <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {service.outcomes.map((o) => (
            <li
              key={o}
              className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-muted"
            >
              {o}
            </li>
          ))}
        </ul>

        <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-all duration-200 group-hover:gap-2.5">
          Learn more
          <ArrowRight size={15} />
        </span>
      </Link>
    </Reveal>
  )
}

export function ServicesGrid() {
  const [expanded, setExpanded] = useState(false)
  const featured = services.slice(0, FEATURED_COUNT)
  const rest = services.slice(FEATURED_COUNT)

  return (
    <Section spacing="md" className="pt-0">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title="Everything you need to lead with AI"
          description="Focused services that work together to help B2B companies automate operations, attract the right clients, and grow without adding overhead."
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
        {featured.map((service, i) => (
          <ServiceCard key={service.id} service={service} delay={i * 0.08} />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="more-services"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="grid gap-5 pt-5 sm:gap-6 sm:pt-6 md:grid-cols-2">
                  {rest.map((service, i) => (
                    <ServiceCard key={service.id} service={service} delay={i * 0.06} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="btn-pill border border-line-strong bg-white/[0.03] px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/[0.06]"
            >
              {expanded ? 'Show fewer services' : `View all ${services.length} services`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </>
      )}
    </Section>
  )
}
