import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { DocumentedOutcomes } from '@/components/sections/DocumentedOutcomes'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/results' },
  title: 'Results & Reviews | What We Deliver',
  description:
    'Real outcomes from Covison engagements across AI automation, website development, and AI chatbot projects, plus client feedback as it comes in.',
}

export default function ResultsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client results"
        title="What we deliver, and what clients say."
        description="Real outcomes from the engagements we run, alongside client feedback as it comes in."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href="/contact" size="lg">
            Book a strategy call
          </Button>
          <Button href="/case-studies" variant="link">
            See our work
            <ArrowRight size={16} />
          </Button>
        </div>
      </PageHeader>

      <DocumentedOutcomes />

      <Testimonials eyebrow="Client feedback" title="What clients say" />

      <CTASection />
    </>
  )
}
