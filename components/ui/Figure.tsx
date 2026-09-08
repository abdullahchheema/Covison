'use client'

import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { cn } from '@/lib/cn'

interface FigureProps {
  src: string
  alt: string
  /** Rendered in place of the image while it's missing or fails to load. Defaults to a tonal violet gradient plate. */
  fallback?: ReactNode
  className?: string
  imgClassName?: string
  sizes?: string
  unoptimized?: boolean
}

/**
 * Image with a graceful fallback for slots awaiting generated artwork
 * (see docs/image-prompts.md). Degrades to a tonal gradient plate instead
 * of a broken image icon until the real asset is dropped in.
 */
export function Figure({ src, alt, fallback, className, imgClassName, sizes, unoptimized }: FigureProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={cn('relative overflow-hidden bg-surface-2', className)}>
      {failed ? (
        fallback ?? (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(135deg, var(--color-brand-soft), var(--color-surface-3))',
            }}
          />
        )
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? '100vw'}
          unoptimized={unoptimized}
          className={cn('object-cover', imgClassName)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
