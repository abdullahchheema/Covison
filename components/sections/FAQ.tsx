'use client'

import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const answerRefs = useRef<(HTMLParagraphElement | null)[]>([])

  return (
    <section className="bg-canvas py-12 sm:py-16 lg:py-20">
      <Container size="prose">
        <div className="flex flex-col gap-3">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={cn(
                    'rounded-2xl border transition-colors duration-200',
                    isOpen ? 'border-line-strong bg-white/[0.04]' : 'border-line bg-surface',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-ink">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        'flex-shrink-0 text-ink transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? `${answerRefs.current[i]?.scrollHeight ?? 0}px` : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p
                      ref={(el) => {
                        answerRefs.current[i] = el
                      }}
                      className="px-6 pb-6 text-sm leading-relaxed text-muted"
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
