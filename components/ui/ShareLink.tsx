'use client'

import { useState } from 'react'
import { Link2, Check } from 'lucide-react'
import { cn } from '@/lib/cn'

export function ShareLink() {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable; nothing more we can do here.
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className={cn('flex h-5 w-5 items-center justify-center', copied && 'text-success')}>
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </span>
      {copied ? 'Copied' : 'Share this post'}
    </button>
  )
}
