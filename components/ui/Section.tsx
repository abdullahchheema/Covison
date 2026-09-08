import { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  /** Background tone. */
  variant?: 'base' | 'warm' | 'surface' | 'ink'
  /** Vertical rhythm. `lg` for primary sections, `md` default, `sm` for tighter bands. */
  spacing?: 'sm' | 'md' | 'lg'
  /** Container width, forwarded to Container when not bare. */
  containerSize?: 'default' | 'wide' | 'prose'
  /** Render without the inner Container (when a section manages its own width). */
  bare?: boolean
  id?: string
  className?: string
}

const spacingMap = {
  sm: 'py-16',
  md: 'py-20',
  lg: 'py-24 sm:py-28',
}

const variantMap = {
  base: 'bg-background',
  warm: 'bg-bg-warm',
  surface: 'bg-surface',
  ink: 'bg-ink text-white',
}

export function Section({
  children,
  variant = 'base',
  spacing = 'md',
  containerSize = 'default',
  bare = false,
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacingMap[spacing],
        variantMap[variant],
        variant === 'ink' && 'relative isolate overflow-hidden',
        className,
      )}
    >
      {bare ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  )
}
