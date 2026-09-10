import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/site'
import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { CTASection } from '@/components/sections/CTASection'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: '/products' },
  title: 'Products | Software Covison Builds and Runs',
  description: 'Covison-built products, starting with Covison CRM: a business platform for managing leads, customers, and sales pipelines.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Software we build, not just software we ship for clients."
        description="Alongside client work, we build and run our own products. Here's what's live today."
      />

      <Section spacing="lg" className="!pt-0">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {products.map((product, i) => {
            return (
              <Reveal key={product.id} delay={i * 0.06}>
                <Link href={`/products/${product.id}`} className="group flex flex-col gap-5">
                  <Figure
                    src={`/images/products/${product.id}-hero.png`}
                    alt=""
                    sizes="(min-width: 640px) 50vw, 100vw"
                    fallback={
                      <Image
                        src="/logo-mark.png"
                        alt=""
                        width={64}
                        height={64}
                        unoptimized
                        className="m-auto h-16 w-16 object-contain"
                      />
                    }
                    className="aspect-[16/10] w-full rounded-2xl"
                  />
                  <div>
                    <h2 className="text-h3 transition-colors group-hover:text-brand">{product.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-text-2">{product.short}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground">
                    Explore {product.title}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
