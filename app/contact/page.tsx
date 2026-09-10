import type { Metadata } from 'next'
import { MessageCircle, Mail, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { BookingEmbed } from '@/components/forms/BookingEmbed'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact | Book a Strategy Call',
  description:
    'Get in touch with Covison. Book a free 30-minute strategy call to start your AI automation or website project.',
}

const nextSteps = [
  { title: 'You reach out', description: 'Book a call, message us, or send an email: whatever is easiest.' },
  { title: 'We review', description: "We look at your business and come prepared, not with a generic pitch." },
  { title: 'We talk', description: 'A focused 30-minute call to understand your goals and constraints.' },
  { title: 'You get a plan', description: 'A tailored proposal with clear deliverables and transparent pricing.' },
]

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent("Hi! I'd like to talk about a project.")

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something exceptional."
        description="Whether you want to automate your operations, launch a premium B2B website, or explore where AI can help, start with a conversation. No commitment, no pressure."
        heroImage="/images/hero.png"
        heroFullHeight
      />

      <section className="bg-background pb-24 pt-20 sm:pb-28 sm:pt-24">
        <Container>
          {/* Conversion paths */}
          <div id="talk" className="scroll-mt-24">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Reveal delay={0.05}>
                <BookingEmbed />
              </Reveal>

              <Reveal delay={0.1}>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col gap-6 rounded-xl border border-line-soft bg-surface-2 p-8 transition-colors hover:bg-surface-3 sm:p-10"
                >
                  <div className="flex flex-col gap-2">
                    <span className="eyebrow">02</span>
                    <p className="text-xl font-semibold text-foreground">Message us on WhatsApp</p>
                    <p className="text-sm text-text-2">Usually replies within a few hours</p>
                  </div>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground">
                    <MessageCircle size={16} />
                    Start a chat
                    <ArrowRight size={16} />
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.15}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex h-full flex-col gap-6 rounded-xl border border-line-soft bg-surface-2 p-8 transition-colors hover:bg-surface-3 sm:p-10"
                >
                  <div className="flex flex-col gap-2">
                    <span className="eyebrow">03</span>
                    <p className="text-xl font-semibold text-foreground">Send us an email</p>
                    <p className="text-sm text-text-2">{siteConfig.email}</p>
                  </div>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground">
                    <Mail size={16} />
                    Write an email
                    <ArrowRight size={16} />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>

          {/* What happens next */}
          <Reveal delay={0.1}>
            <div className="mt-20 sm:mt-24">
              <p className="eyebrow mb-8">What happens next</p>
              <ol className="grid grid-cols-1 gap-x-8 gap-y-10 border-t border-line-soft pt-10 sm:grid-cols-4">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex flex-col gap-2">
                    <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-base font-semibold text-foreground">{step.title}</p>
                    <p className="text-sm leading-relaxed text-text-2">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
