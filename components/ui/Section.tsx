import { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  /** Background tone. */
  variant?: 'base' | 'surface'
  /** Vertical rhythm. `lg` for primary sections, `md` default, `sm` for tighter bands. */
  spacing?: 'sm' | 'md' | 'lg'
  /** Render without the inner Container (when a section manages its own width). */
  bare?: boolean
  id?: string
  className?: string
}

const spacingMap = {
  sm: 'py-8 sm:py-9',
  md: 'py-10 sm:py-12 lg:py-16',
  lg: 'py-12 sm:py-16 lg:py-20',
}

export function Section({
  children,
  variant = 'base',
  spacing = 'md',
  bare = false,
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacingMap[spacing],
        variant === 'surface' ? 'bg-surface' : 'bg-canvas',
        className,
      )}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  )
}
