import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/site'
import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Figure } from '@/components/ui/Figure'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: { canonical: '/insights' },
  title: 'Insights | Notes on AI, Automation & Building Systems That Ship',
  description:
    'Covison’s notes on AI automation, workflow design, and building systems that hold up in production.',
}

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the work."
        description="What we're learning while building AI systems and websites for B2B companies, published as we ship, not on a content calendar."
      />

      <Section spacing="lg" className="!pt-0">
        {posts.length === 0 ? (
          <Reveal>
            <div className="flex flex-col items-start gap-4 border-t border-line-soft pt-10">
              <p className="eyebrow">More coming soon</p>
              <p className="max-w-[48ch] text-lg leading-relaxed text-text-2">
                We&apos;re writing up what we&apos;ve learned from recent client work. In the
                meantime, see what we&apos;ve shipped or get in touch directly.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/case-studies">See our work</Button>
                <Button href="/contact" variant="outline">
                  Get in touch
                </Button>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-x-8 gap-y-14 border-t border-line-soft pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i * 0.06, 0.24)}>
                <Link href={`/insights/${post.slug}`} className="group flex flex-col gap-4">
                  <Figure
                    src={post.image}
                    alt=""
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3] w-full rounded-2xl"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="eyebrow">
                      {post.category} · {post.readingTime ?? post.date}
                    </p>
                    <h2 className="text-h3 leading-snug transition-colors group-hover:text-brand">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-text-2">{post.excerpt}</p>
                    <p className="text-xs text-text-3">
                      {post.author} · {post.date}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <CTASection />
    </>
  )
}
