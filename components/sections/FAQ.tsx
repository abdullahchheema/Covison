'use client'

import { useState } from 'react'
import { faq } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <Section containerSize="prose" spacing="lg">
      <div className="border-t border-line-soft">
        {faq.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
              <div className="border-b border-line-soft">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="row-hover flex w-full items-center justify-between gap-4 rounded-md px-1 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                  <span
                    className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center text-foreground"
                    aria-hidden
                  >
                    <span className="absolute h-px w-3 bg-current" />
                    <span
                      className={cn(
                        'absolute h-3 w-px bg-current transition-transform duration-200',
                        isOpen && 'scale-y-0',
                      )}
                    />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-1 pb-6 text-sm leading-relaxed text-text-2">{item.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
