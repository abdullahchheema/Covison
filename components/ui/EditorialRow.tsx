import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface EditorialRowProps {
  index: string
  title: ReactNode
  description?: ReactNode
  meta?: ReactNode
  href?: string
  className?: string
}

/** Numbered editorial row: index, title, description and optional meta, on a hairline grid. */
export function EditorialRow({ index, title, description, meta, href, className }: EditorialRowProps) {
  const content = (
    <div
      className={cn(
        'row-hover grid grid-cols-1 gap-3 border-b border-line-soft px-1 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10',
        className,
      )}
    >
      <span className="eyebrow sm:col-span-1">{index}</span>
      <h3 className="text-h3 sm:col-span-4 lg:col-span-3">{title}</h3>
      {description && (
        <p className="text-sm leading-relaxed text-text-2 sm:col-span-6 lg:col-span-6">
          {description}
        </p>
      )}
      {(meta || href) && (
        <div className="flex items-center gap-2 sm:col-span-1 sm:justify-end lg:col-span-2">
          {meta}
          {href && (
            <ArrowRight
              size={16}
              className="flex-shrink-0 text-text-3 transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group block">
        {content}
      </Link>
    )
  }

  return content
}
