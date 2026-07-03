import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider',
        variant === 'accent'
          ? 'border-line-strong bg-white/10 text-ink'
          : 'border-line bg-white/5 text-muted',
      )}
    >
      {children}
    </span>
  )
}
