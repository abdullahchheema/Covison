import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { BookingEmbed } from '@/components/forms/BookingEmbed'

export const metadata: Metadata = {
  title: 'Contact — Book a Strategy Call',
  description:
    'Get in touch with Covison. Book a free 30-minute strategy call to start your AI automation or website project.',
}

export default function ContactPage() {
  return (
    <section className="bg-canvas pb-24 pt-32 sm:pb-28 sm:pt-40">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
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
          </div>
        </Reveal>

        {/* Booking */}
        <div id="talk" className="mx-auto mt-14 max-w-2xl scroll-mt-24 sm:mt-16">
          <Reveal delay={0.1}>
            <BookingEmbed />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
