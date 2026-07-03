import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { Stats } from '@/components/sections/Stats'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CTASection } from '@/components/sections/CTASection'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} — AI Automation & Website Services for B2B`,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Stats />
      <ServicesGrid />
      <CTASection className="pt-0" />
    </>
  )
}
