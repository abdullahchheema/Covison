'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/cn'

// Drop the brand mark at public/logo.png; falls back to the "C" badge until it exists.
// The mark is a white monochrome asset: on the light theme it's CSS-inverted to render
// dark, in dark mode it's already correct, and on the always-dark footer/ink plate it
// renders unfiltered regardless of theme.
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
  const [failed, setFailed] = useState(false)
  const badgeSize = size === 'nav' ? 'h-10 w-10' : 'h-11 w-11'

  return (
    <Link
      href={href}
      aria-label="Covison home"
      className={cn('flex items-center', size === 'nav' && 'gap-2.5')}
    >
      {failed ? (
        <span
          className={cn(
            'flex items-center justify-center rounded-md text-sm font-semibold',
            onInk ? 'bg-white text-ink' : 'bg-foreground text-background',
            badgeSize,
          )}
        >
          C
        </span>
      ) : (
        <Image
          src="/logo.png"
          alt="Covison"
          width={size === 'nav' ? 40 : 44}
          height={size === 'nav' ? 40 : 44}
          unoptimized
          className={cn('object-contain', badgeSize, !onInk && 'invert dark:invert-0')}
          onError={() => setFailed(true)}
        />
      )}
      {size === 'nav' && (
        <span className="text-lg font-semibold tracking-tight text-foreground">covison</span>
      )}
    </Link>
  )
}
