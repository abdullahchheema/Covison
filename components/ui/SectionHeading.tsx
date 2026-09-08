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
      {eyebrow && <span className="eyebrow text-brand">{eyebrow}</span>}
      <h2 className="text-h2 md:text-h1">{title}</h2>
      {description && (
        <p
          className={cn(
            'text-body-lg text-text-2',
            centered ? 'max-w-2xl' : 'max-w-[48ch]',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
