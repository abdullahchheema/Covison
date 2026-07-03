import type { Metadata } from 'next'
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'
import { BookingEmbed } from '@/components/forms/BookingEmbed'

export const metadata: Metadata = {
  title: 'Contact — Book a Strategy Call',
  description:
    'Get in touch with Covison. Book a free 30-minute strategy call or send us a message to start your AI automation or website project.',
}

const contactInfo = [
  { Icon: Mail, label: 'Email us', value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false },
  {
    Icon: MessageCircle,
    label: 'Connect on WhatsApp',
    value: `+${siteConfig.whatsapp}`,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
  },
  { Icon: Clock, label: 'Response time', value: 'Within 24 hours', href: null, external: false },
  { Icon: MapPin, label: 'Based in', value: 'Available globally · Remote-first', href: null, external: false },
]

export default function ContactPage() {
  return (
    <section className="bg-canvas pb-24 pt-32 sm:pb-28 sm:pt-40">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="flex max-w-2xl flex-col gap-5">
            <span className="w-fit">
              <Badge variant="accent">Contact</Badge>
            </span>
            <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl">
              Let&apos;s build something <span className="text-sheen">exceptional</span>.
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Whether you want to automate your operations, launch a premium B2B website, or explore
              where AI can help — start with a conversation. No commitment, no pressure.
            </p>

            <ul className="mt-2 flex flex-col gap-4">
              {contactInfo.map(({ Icon, label, value, href, external }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Icon size={18} className="text-ink" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-xs text-faint">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-sm font-medium text-ink/90 transition-colors hover:text-ink"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-ink/90">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Form + booking */}
        <div id="talk" className="mt-14 scroll-mt-24 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-10">
          <Reveal direction="left">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9">
              <h2 className="text-xl font-semibold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted">
                Prefer email? Fill out the form and we&apos;ll reply within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-semibold">Book a call directly</h2>
                <p className="mt-2 text-sm text-muted">
                  Pick a time that works for you. 30 minutes, zero obligation.
                </p>
              </div>
              <BookingEmbed />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
