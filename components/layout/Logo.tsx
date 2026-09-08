'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/cn'

// Icon mark (/logo-mark.png) paired with live "Covison" text, matching the
// sizing and weight of the Covison CRM's own header. Transparent background,
// so it reads correctly on any surface: light canvas, dark canvas, or the
// permanently-dark ink plate.
export function Logo({
  href = '/',
  size = 'nav',
  onInk = false,
}: {
  href?: string
  size?: 'nav' | 'footer'
  /** Render on the permanently-dark `--ink` surface (footer, BrandPlate) rather than the theme-aware canvas. */
  onInk?: boolean
}) {
  const [markFailed, setMarkFailed] = useState(false)
  const badgeSize = size === 'nav' ? 'h-8 w-8' : 'h-11 w-11'

  return (
    <Link
      href={href}
      aria-label="Covison home"
      className={cn('flex items-center', size === 'nav' && 'gap-2')}
    >
      {markFailed ? (
        <span
          className={cn(
            'flex flex-shrink-0 items-center justify-center rounded-md text-sm font-semibold',
            onInk ? 'bg-white text-ink' : 'bg-foreground text-background',
            badgeSize,
          )}
        >
          C
        </span>
      ) : (
        <Image
          src="/logo-mark.png"
          alt="Covison"
          width={size === 'nav' ? 32 : 44}
          height={size === 'nav' ? 32 : 44}
          unoptimized
          priority={size === 'nav'}
          className={cn('flex-shrink-0 object-contain', badgeSize)}
          onError={() => setMarkFailed(true)}
        />
      )}
      {size === 'nav' && (
        <span className={cn('text-xl font-bold tracking-tight', onInk ? 'text-white' : 'text-foreground')}>
          Covison
        </span>
      )}
    </Link>
  )
}
