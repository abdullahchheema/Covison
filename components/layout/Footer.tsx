import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/layout/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  const columns = [
    {
      title: 'Services',
      links: [
        ...services.slice(0, 4).map((s) => ({ label: s.title, href: `/services#${s.id}` })),
        { label: 'All Services', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Work', href: '/work' },
        { label: 'Industries', href: '/industries' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Our Process', href: '/process' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Results & Reviews', href: '/results' },
      ],
    },
  ]

  return (
    <footer className="border-t border-line bg-[#0c0c0e]">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* CTA */}
          <div className="flex flex-col gap-5 lg:max-w-xs">
            <div className="flex flex-col gap-1.5">
              <span className="text-sm text-muted">Work with us</span>
              <p className="text-lg font-semibold leading-snug text-ink sm:text-xl">
                Start with a free, thirty-minute strategy call.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-pill w-fit bg-white px-5 py-2.5 text-sm font-medium text-canvas hover:bg-white/90"
            >
              Let&apos;s talk
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-16">
            {columns.map((col) => (
              <nav key={col.title} className="flex flex-col gap-4">
                <h3 className="eyebrow">{col.title}</h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <Logo size="footer" />

          <p className="text-xs text-faint">© {year} Covison. All rights reserved.</p>

          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs text-faint transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-faint transition-colors hover:text-ink">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
