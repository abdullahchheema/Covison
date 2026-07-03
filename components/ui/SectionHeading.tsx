import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={cn('flex flex-col gap-4', centered && 'items-center text-center', className)}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">{title}</h2>
      {description && (
        <p className={cn('text-lg leading-relaxed text-muted', centered ? 'max-w-2xl' : 'max-w-xl')}>
          {description}
        </p>
      )}
    </div>
  )
}
