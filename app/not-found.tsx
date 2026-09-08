import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section className="bloom flex min-h-[70vh] items-center bg-background py-28">
      <Container>
        <div className="flex max-w-xl flex-col gap-6">
          <span className="eyebrow text-brand">404</span>
          <h1 className="text-h1 sm:text-hero">This page doesn&apos;t exist.</h1>
          <p className="text-lg leading-relaxed text-text-2">
            The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you
            back on track.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/contact" variant="link">
              Contact us
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
