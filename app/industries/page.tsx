import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/industries' },
  title: 'Industries | AI Automation Across 20+ Verticals',
  description:
    'See how Covison builds AI automation, outbound systems, and custom software across dental, e-commerce, finance, agencies, SaaS, and more than 20 other industries.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Proven across verticals."
        description="From dental practices to enterprise teams, we build AI systems that ship and scale across more than 20 industries. Here's where we've made the biggest impact."
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

      <IndustriesGrid />

      <CTASection />
    </>
  )
}
