import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info'

interface BadgeProps {
  children: ReactNode
  variant?: Variant
}

const variantStyles: Record<Variant, string> = {
  neutral: 'bg-surface-3 text-text-2',
  brand: 'bg-brand-soft text-primary',
  success: 'bg-success-soft text-success',
  warning: 'bg-warning-soft text-warning',
  danger: 'bg-danger-soft text-danger',
  info: 'bg-info-soft text-info',
}

export function Badge({ children, variant = 'neutral' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
        variantStyles[variant],
      )}
    >
      {children}
    </span>
  )
}
