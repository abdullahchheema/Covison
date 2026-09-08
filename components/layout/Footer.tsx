import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'
import { LinkedInIcon } from '@/components/ui/LinkedInIcon'
import { services, footerNav, siteConfig, affiliate } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/layout/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  const columns = [
    {
      title: 'Services',
      links: [
        ...services.slice(0, 4).map((s) => ({ label: s.title, href: `/services/${s.id}` })),
        { label: 'All Services', href: '/services' },
      ],
    },
    { title: 'Company', links: footerNav.company },
    { title: 'Resources', links: footerNav.resources },
    { title: 'Legal', links: footerNav.legal },
  ]

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Identity + contact */}
          <div className="flex flex-col gap-6 lg:max-w-xs">
            <div className="flex items-center gap-4">
              <Logo size="footer" onInk />
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Covison on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10"
                >
                  <LinkedInIcon size={16} />
                </a>
              )}
            </div>

            <p className="max-w-[30ch] text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-brand-violet"
              >
                <Mail size={15} />
                {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-brand-violet"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-x-12">
            {columns.map((col) => (
              <nav key={col.title} className="flex flex-col gap-4">
                <h3 className="eyebrow eyebrow-invert">{col.title}</h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
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

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center">
          <p className="eyebrow eyebrow-invert">© {year} Covison. All rights reserved.</p>
          <p className="max-w-md text-xs text-white/50">
            Covison is affiliated with {affiliate.name}, registered in {affiliate.country} (company
            no. {affiliate.companyNumber}), {affiliate.address}.
          </p>
        </div>
      </Container>
    </footer>
  )
}
