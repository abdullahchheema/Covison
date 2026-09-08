import Link from 'next/link'
import { ReactNode } from 'react'
import { Section } from './Section'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { Figure } from './Figure'
import { cn } from '@/lib/cn'

interface Crumb {
  label: string
  href: string
}

interface PageHeaderProps {
  eyebrow?: string
  /** Intermediate breadcrumb links between Home and the current page (e.g. [{ label: 'Services', href: '/services' }]). */
  crumbs?: Crumb[]
  title: ReactNode
  description?: string
  children?: ReactNode
  /** Renders as a full-bleed background image behind the header, with a dark scrim and white text, instead of the default light bloom. */
  heroImage?: string
  /** Expands the hero to fill the remaining viewport height below the sticky header, instead of the shorter banner height. */
  heroFullHeight?: boolean
}

export function PageHeader({
  eyebrow,
  crumbs = [],
  title,
  description,
  children,
  heroImage,
  heroFullHeight = false,
}: PageHeaderProps) {
  const hasImage = Boolean(heroImage)

  const content = (
    <div className="flex max-w-3xl flex-col gap-5">
      {eyebrow && (
        <nav
          aria-label="Breadcrumb"
          className={cn('flex flex-wrap items-center gap-2 text-sm', hasImage ? 'text-white/70' : 'text-text-2')}
        >
          <Link href="/" className={cn('transition-colors', hasImage ? 'hover:text-white' : 'hover:text-foreground')}>
            Home
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <span aria-hidden>/</span>
              <Link
                href={crumb.href}
                className={cn('transition-colors', hasImage ? 'hover:text-white' : 'hover:text-foreground')}
              >
                {crumb.label}
              </Link>
            </span>
          ))}
          <span aria-hidden>/</span>
          <span className={cn('font-medium', hasImage ? 'text-white' : 'text-foreground')}>{eyebrow}</span>
        </nav>
      )}
      <h1 className={cn('text-h1 sm:text-hero', hasImage && 'text-white')}>{title}</h1>
      {description && (
        <p className={cn('max-w-[48ch] text-body-lg', hasImage ? 'text-white/80' : 'text-text-2')}>{description}</p>
      )}
      {children && <div className="mt-2">{children}</div>}
    </div>
  )

  if (heroImage) {
    return (
      <section
        className={cn(
          'relative isolate flex items-center overflow-hidden',
          heroFullHeight ? 'min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]' : 'min-h-[55vh] sm:min-h-[60vh]',
        )}
      >
        <div className="absolute inset-0 z-0">
          <Figure src={heroImage} alt="" sizes="100vw" className="h-full w-full" />
        </div>
        <div
          className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/45 to-black/25"
          aria-hidden
        />
        <Container className="relative z-20 py-16">
          <Reveal>{content}</Reveal>
        </Container>
      </section>
    )
  }

  return (
    <Section spacing="lg" className="bloom relative isolate overflow-hidden">
      <Reveal>{content}</Reveal>
    </Section>
  )
}
