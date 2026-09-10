import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts } from '@/lib/site'
import { PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Figure } from '@/components/ui/Figure'
import { ShareLink } from '@/components/ui/ShareLink'
import { CTASection } from '@/components/sections/CTASection'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    alternates: { canonical: `/insights/${post.slug}` },
    title: post.title,
    description: post.excerpt,
  }
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Insights', href: '/insights' }]}
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <Section spacing="sm" className="!pt-0">
        <Figure
          src={post.image}
          alt=""
          sizes="(min-width: 1024px) 1152px, 100vw"
          className="aspect-[21/9] w-full rounded-2xl"
        />
      </Section>

      <section className="bg-background pb-16 sm:pb-20">
        <Container size="prose">
          <p className="eyebrow mb-8">
            {post.author} · {post.date}
            {post.readingTime && <> · {post.readingTime}</>}
          </p>
          {/* Full article body renders here once written; the excerpt above stands on its own until then. */}
          <div className="border-t border-line-soft pt-8">
            <ShareLink />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
