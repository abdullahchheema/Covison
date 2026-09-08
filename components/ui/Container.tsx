import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: ReactNode
  /** `default` = standard content width, `wide` = full editorial width, `prose` = narrow text column. */
  size?: 'default' | 'wide' | 'prose'
  className?: string
}

const sizeMap = {
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  prose: 'max-w-3xl',
}

export function Container({ children, size = 'default', className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-6', sizeMap[size], className)}>
      {children}
    </div>
  )
}
