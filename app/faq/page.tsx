import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { FAQ } from '@/components/sections/FAQ'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/faq' },
  title: 'FAQ | Frequently Asked Questions',
  description:
    'Answers to common questions about working with Covison on AI automation, website development, and AI chatbot projects.',
}

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Common questions, answered."
        description="Everything you need to know before getting started with Covison."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href="/contact" size="lg">
            Book a strategy call
          </Button>
          <Button href="/services" variant="link">
            View our services
            <ArrowRight size={16} />
          </Button>
        </div>
      </PageHeader>

      <FAQ />

      <CTASection />
    </>
  )
}
