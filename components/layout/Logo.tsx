'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/cn'

// Drop the brand mark at public/logo.png — falls back to the "C" badge until it exists.
export function Logo({
  href = '/',
  size = 'nav',
}: {
  href?: string
  size?: 'nav' | 'footer'
}) {
  const [failed, setFailed] = useState(false)
  const badgeSize = size === 'nav' ? 'h-14 w-14' : 'h-16 w-16'

  return (
    <Link
      href={href}
      aria-label="Covison home"
      className={cn('flex items-center', size === 'nav' && 'gap-2')}
    >
      {failed ? (
        <span
          className={cn(
            'flex items-center justify-center rounded-lg bg-white text-sm font-bold text-canvas',
            badgeSize,
          )}
        >
          C
        </span>
      ) : (
        <Image
          src="/logo.png"
          alt="Covison"
          width={size === 'nav' ? 56 : 64}
          height={size === 'nav' ? 56 : 64}
          unoptimized
          className={cn('rounded-lg object-contain', badgeSize)}
          onError={() => setFailed(true)}
        />
      )}
      {size === 'nav' && (
        <span className="text-2xl font-bold tracking-tight text-ink">covison</span>
      )}
    </Link>
  )
}
