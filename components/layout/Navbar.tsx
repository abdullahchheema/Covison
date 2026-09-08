'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { navigation, services, serviceCategories, products, siteConfig } from '@/lib/site'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/layout/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { getServiceIcon } from '@/lib/service-icons'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const menuTransition = { duration: 0.18, ease: [0.16, 1, 0.3, 1] as const }
  // Matches the sticky header's actual bottom edge, not just the navbar's own
  // height: the AnnouncementBar sits above it and hasn't scrolled away yet
  // when the page is at the top, which would otherwise leave a gap where the
  // header shows through above the drawer.
  const [drawerTop, setDrawerTop] = useState(64)

  const [lastPathname, setLastPathname] = useState(pathname)
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setOpen(false)
    setServicesOpen(false)
    setProductsOpen(false)
  }

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'

    const updateDrawerTop = () => {
      if (headerRef.current) setDrawerTop(headerRef.current.getBoundingClientRect().bottom)
    }
    updateDrawerTop()
    window.addEventListener('resize', updateDrawerTop)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    menuRef.current?.querySelector<HTMLElement>('a, button')?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('resize', updateDrawerTop)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
    <header ref={headerRef} className="sticky top-0 z-40 h-16 border-b border-line-soft bg-bg/80 backdrop-blur-sm md:h-20">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          <ul className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              const isServices = item.href === '/services'
              const isProducts = item.href === '/products'
              const hasMenu = isServices || isProducts
              const menuOpen = isServices ? servicesOpen : isProducts ? productsOpen : false
              const setMenuOpen = isServices ? setServicesOpen : isProducts ? setProductsOpen : undefined
              return (
                <li
                  key={item.href}
                  className={cn(hasMenu && 'group relative')}
                  onMouseEnter={() => setMenuOpen?.(true)}
                  onMouseLeave={() => setMenuOpen?.(false)}
                  onFocus={() => setMenuOpen?.(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setMenuOpen?.(false)
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative flex items-center gap-1 py-2 text-[15px] font-medium transition-colors',
                      active ? 'text-foreground' : 'text-text-2 hover:text-foreground',
                    )}
                  >
                    {item.label}
                    {hasMenu && (
                      <ChevronDown
                        size={14}
                        className={cn('transition-transform duration-200', menuOpen && 'rotate-180')}
                        aria-hidden
                      />
                    )}
                    {active && (
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-brand" aria-hidden />
                    )}
                  </Link>

                  {isServices && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                          transition={menuTransition}
                          className="absolute left-0 top-full w-[min(36rem,calc(100vw-3rem))] pt-3 lg:w-[min(64rem,calc(100vw-3rem))]"
                        >
                          <div className="rounded-2xl bg-surface p-8 shadow-xl">
                            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr]">
                              <div className="flex flex-col gap-4">
                                <Link
                                  href="/services"
                                  onClick={() => setServicesOpen(false)}
                                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-brand"
                                >
                                  View all services
                                  <ArrowRight size={14} />
                                </Link>
                                <p className="text-sm leading-relaxed text-text-2">
                                  {siteConfig.description}
                                </p>
                                <div className="mt-2 hidden lg:block">
                                  <Button href="/contact" size="sm" onClick={() => setServicesOpen(false)}>
                                    Start a project
                                    <ArrowRight size={14} />
                                  </Button>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
                                {serviceCategories.map((category) => (
                                  <div key={category.id} className="flex flex-col gap-3">
                                    <p className="eyebrow text-text-3">{category.label}</p>
                                    <ul className="flex flex-col gap-1">
                                      {services
                                        .filter((s) => s.category === category.id)
                                        .map((service) => {
                                          const Icon = getServiceIcon(service.icon)
                                          return (
                                            <li key={service.id}>
                                              <Link
                                                href={`/services/${service.id}`}
                                                onClick={() => setServicesOpen(false)}
                                                className="-mx-2 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-text-2 transition-colors hover:bg-surface-2 hover:text-foreground"
                                              >
                                                <Icon size={14} className="flex-shrink-0 text-brand" aria-hidden />
                                                <span>{service.title}</span>
                                              </Link>
                                            </li>
                                          )
                                        })}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="mt-8 border-t border-line-soft pt-6 lg:hidden">
                              <Button href="/contact" size="sm" onClick={() => setServicesOpen(false)}>
                                Start a project
                                <ArrowRight size={14} />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {isProducts && (
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                          transition={menuTransition}
                          className="absolute left-0 top-full w-[min(22rem,calc(100vw-3rem))] pt-3"
                        >
                          <div className="rounded-2xl bg-surface p-6 shadow-xl">
                            <div className="flex flex-col gap-1">
                              {products.map((product) => {
                                const Icon = getServiceIcon(product.icon)
                                return (
                                  <Link
                                    key={product.id}
                                    href={`/products/${product.id}`}
                                    onClick={() => setProductsOpen(false)}
                                    className="-m-2 flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-surface-2"
                                  >
                                    <Icon size={18} className="mt-0.5 flex-shrink-0 text-brand" aria-hidden />
                                    <span className="flex flex-col gap-0.5">
                                      <span className="text-sm font-semibold text-foreground">{product.title}</span>
                                      <span className="text-xs leading-relaxed text-text-2">{product.short}</span>
                                    </span>
                                  </Link>
                                )
                              })}
                            </div>
                            <div className="mt-6 border-t border-line-soft pt-5">
                              <Button href="/products" variant="link" onClick={() => setProductsOpen(false)}>
                                View all products
                                <ArrowRight size={14} />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button href="/contact#talk" variant="outline" size="sm">
              Book a call
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              onClick={() => {
                if (!open && headerRef.current) {
                  setDrawerTop(headerRef.current.getBoundingClientRect().bottom)
                }
                setOpen((v) => !v)
              }}
              className="rounded-md p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>
    </header>

      {/* Rendered as a sibling of <header>, not inside it: the header's
          backdrop-blur establishes a CSS containing block for `position:
          fixed` descendants, which would collapse this drawer to the
          header's own height instead of the full viewport. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            ref={menuRef}
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ top: drawerTop }}
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-background md:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 pt-6">
                {navigation.map((item, i) => {
                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
                  return (
                    <motion.li
                      key={item.href}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.04 }}
                      className="border-b border-line-soft"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'block py-4 text-2xl font-semibold transition-colors',
                          active ? 'text-foreground' : 'text-text-3 hover:text-foreground',
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
              <div className="mt-8">
                <Button href="/contact#talk" className="w-full">
                  Book a call
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
