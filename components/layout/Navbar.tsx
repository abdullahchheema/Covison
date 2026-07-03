'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/lib/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Covison home">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-canvas">
        C
      </span>
      <span className="text-xl font-bold tracking-tight text-ink">covison</span>
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 backdrop-blur-md transition-colors duration-300',
        scrolled ? 'border-b border-line bg-canvas/85' : 'border-b border-transparent bg-canvas/60',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      active ? 'bg-white/[0.06] text-ink' : 'text-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden md:block">
            <Button href="/contact#talk" size="sm">
              Book a call
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-line pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-3">
              {navigation.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                        active ? 'bg-white/[0.06] text-ink' : 'text-muted hover:text-ink',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
              <li className="mt-3 px-4">
                <Button href="/contact#talk" className="w-full">
                  Book a call
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}
