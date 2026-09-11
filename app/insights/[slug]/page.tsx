import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts, siteConfig } from '@/lib/site'
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
  const url = `${siteConfig.url}/insights/${post.slug}`
  return {
    alternates: { canonical: `/insights/${post.slug}` },
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      images: [{ url: `${siteConfig.url}${post.image}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${siteConfig.url}${post.image}`],
    },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: siteConfig.name, logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo-mark.png` } },
    mainEntityOfPage: `${siteConfig.url}/insights/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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

          <div className="flex flex-col gap-10 text-base leading-relaxed text-text-2">
            {post.body.map((section) => (
              <div key={section.heading} className="flex flex-col gap-4">
                <h2 className="text-h3 text-foreground">{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-line-soft pt-8">
            <ShareLink />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
