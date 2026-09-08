'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/cn'

// Two source assets:
// - /logo-mark.png: icon-only mark, transparent background, reads correctly
//   on any surface (light canvas, dark canvas, or the permanently-dark ink
//   plate).
// - /logo-full.jpg: full lockup with the "Covison" wordmark baked in, on a
//   flat white background. Only safe on a light surface: in dark mode, or
//   on the always-dark ink plate, it falls back to the mark plus live text
//   instead of showing a white box.
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
  const [fullFailed, setFullFailed] = useState(false)
  const badgeSize = size === 'nav' ? 'h-9 w-9' : 'h-11 w-11'

  const fallbackBadge = (
    <span
      className={cn(
        'flex flex-shrink-0 items-center justify-center rounded-md text-sm font-semibold',
        onInk ? 'bg-white text-ink' : 'bg-foreground text-background',
        badgeSize,
      )}
    >
      C
    </span>
  )

  const mark = markFailed ? (
    fallbackBadge
  ) : (
    <Image
      src="/logo-mark.png"
      alt="Covison"
      width={size === 'nav' ? 36 : 44}
      height={size === 'nav' ? 36 : 44}
      unoptimized
      className={cn('flex-shrink-0 object-contain', badgeSize)}
      onError={() => setMarkFailed(true)}
    />
  )

  const markWithText = (
    <span className={cn('flex items-center', size === 'nav' && 'gap-2.5')}>
      {mark}
      {size === 'nav' && (
        <span className={cn('text-lg font-semibold tracking-tight', onInk ? 'text-white' : 'text-foreground')}>
          covison
        </span>
      )}
    </span>
  )

  return (
    <Link href={href} aria-label="Covison home" className="flex items-center">
      {onInk ? (
        markWithText
      ) : fullFailed ? (
        markWithText
      ) : (
        <>
          <Image
            src="/logo-full.jpg"
            alt="Covison"
            width={136}
            height={36}
            unoptimized
            priority={size === 'nav'}
            className="block h-9 w-auto object-contain dark:hidden"
            onError={() => setFullFailed(true)}
          />
          <span className="hidden dark:block">{markWithText}</span>
        </>
      )}
    </Link>
  )
}
