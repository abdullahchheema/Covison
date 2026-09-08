import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { CapabilityStrip } from '@/components/sections/CapabilityStrip'
import { PainPoints } from '@/components/sections/PainPoints'
import { FeatureStories } from '@/components/sections/FeatureStories'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WorkTeaser } from '@/components/sections/WorkTeaser'
import { Stats } from '@/components/sections/Stats'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { BrandPlate } from '@/components/sections/BrandPlate'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} | AI Automation & Website Services for B2B`,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <PainPoints />
      <FeatureStories />
      <ServicesGrid />
      <WorkTeaser />
      <Stats />
      <ProcessSteps spacing="lg" />
      <BrandPlate />
      <TeamGrid />
      <CTASection />
    </>
  )
}
