import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: ReactNode
  /** `default` = wide marketing width, `prose` = narrow text column. */
  size?: 'default' | 'prose'
  className?: string
}

const sizeMap = {
  default: 'max-w-7xl',
  prose: 'max-w-3xl',
}

export function Container({ children, size = 'default', className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-5 sm:px-8 lg:px-10', sizeMap[size], className)}>
      {children}
    </div>
  )
}
