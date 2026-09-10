import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { CTASection } from '@/components/sections/CTASection'
import { CaseStudyFilter } from '@/components/sections/CaseStudyFilter'
import { getAllCaseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  alternates: { canonical: '/case-studies' },
  title: 'Case Studies | Production AI Systems We Have Shipped',
  description:
    'Real Covison engagements across AI copilots, legacy modernization, lead qualification, CRM automation, and more: what we built, why it worked, and what changed.',
}

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies()

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Production AI systems we've shipped."
        description={`${studies.length} engagements across AI copilots, legacy modernization, lead qualification, and more. Here's what we built, why it worked, and what changed.`}
      />

      <Section spacing="lg" className="!pt-0">
        <CaseStudyFilter studies={studies} />
      </Section>

      <CTASection />
    </>
  )
}
