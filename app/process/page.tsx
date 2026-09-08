import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/process' },
  title: 'Our Process | How We Deliver AI Systems',
  description:
    'A proven four-step process for delivering AI automation and website projects: discover, build, automate, and scale.',
}

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From first call to full deployment."
        description="A proven four-step process that moves fast, stays transparent, and delivers results you can measure."
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

      <ProcessSteps />

      <CTASection />
    </>
  )
}
