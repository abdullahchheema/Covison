import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, Building2, Globe, Layers, ExternalLink } from 'lucide-react'
import { services, serviceCaseStudyMap } from '@/lib/site'
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/case-studies'
import { PageHeader } from '@/components/ui/PageHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { EditorialRow } from '@/components/ui/EditorialRow'
import { ShareLink } from '@/components/ui/ShareLink'
import { FlowSteps } from '@/components/ui/FlowSteps'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'
import { LinkedInEmbed } from '@/components/ui/LinkedInEmbed'
import { CaseStudyTile } from '@/components/sections/CaseStudyTile'
import { CTASection } from '@/components/sections/CTASection'

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return {}
  return {
    alternates: { canonical: `/case-studies/${study.slug}` },
    title: study.title,
    description: study.blurb,
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()

  const relatedServiceId = Object.entries(serviceCaseStudyMap).find(
    ([, tag]) => tag === study.tag,
  )?.[0]
  const relatedService = services.find((s) => s.id === relatedServiceId)
  const otherStudies = getAllCaseStudies().filter((cs) => cs.slug !== study.slug).slice(0, 3)

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Case Studies', href: '/case-studies' }]}
        eyebrow={study.client}
        title={study.title}
        description={study.subtitle ?? study.blurb}
        heroImage={`/images/work/${study.slug}.png`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="brand">{study.tag}</Badge>
          {study.websiteUrl && (
            <Button href={study.websiteUrl} external variant="outline" size="sm">
              Visit {study.client}
              <ExternalLink size={14} />
            </Button>
          )}
        </div>
      </PageHeader>

      {study.meta && (
        <Section spacing="lg">
          <Reveal>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {study.meta.industry && (
                <div className="flex items-start gap-3">
                  <Building2 size={18} className="mt-0.5 flex-shrink-0 text-brand" aria-hidden />
                  <div>
                    <dt className="text-xs text-text-3">Industry</dt>
                    <dd className="text-sm font-medium text-foreground">{study.meta.industry}</dd>
                  </div>
                </div>
              )}
              {study.meta.market && (
                <div className="flex items-start gap-3">
                  <Globe size={18} className="mt-0.5 flex-shrink-0 text-brand" aria-hidden />
                  <div>
                    <dt className="text-xs text-text-3">Market</dt>
                    <dd className="text-sm font-medium text-foreground">{study.meta.market}</dd>
                  </div>
                </div>
              )}
              {study.meta.solutions && (
                <div className="flex items-start gap-3">
                  <Layers size={18} className="mt-0.5 flex-shrink-0 text-brand" aria-hidden />
                  <div>
                    <dt className="text-xs text-text-3">Solutions</dt>
                    <dd className="text-sm font-medium text-foreground">{study.meta.solutions}</dd>
                  </div>
                </div>
              )}
            </dl>
          </Reveal>
        </Section>
      )}

      {/* Rich sections render only when the source content has been supplied. */}
      {study.whoFor && (
        <Section variant="surface" spacing="md">
          <Reveal>
            <p className="eyebrow mb-4">Who this is for</p>
            <p className="max-w-[68ch] text-body-lg text-text-2">{study.whoFor}</p>
          </Reveal>
        </Section>
      )}

      {(study.challengeIntro || study.challengePoints) && (
        <Section spacing="md">
          <Reveal>
            <h2 className="text-h2">The challenge</h2>
            {study.challengeIntro && (
              <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-text-2">{study.challengeIntro}</p>
            )}
          </Reveal>
          {study.challengePoints && (
            <ul className="mt-6 flex flex-col gap-3">
              {study.challengePoints.map((point, i) => (
                <Reveal key={point} delay={Math.min(i * 0.04, 0.16)}>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" aria-hidden />
                    <span className="text-sm leading-relaxed text-foreground">{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </Section>
      )}

      {study.identifiedIntro && (
        <Section variant="surface" spacing="md">
          <Reveal>
            <h2 className="text-h2">What we found</h2>
            <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-text-2">{study.identifiedIntro}</p>
          </Reveal>
          {study.identifiedCaption && study.identifiedImage && (
            <Reveal delay={0.06}>
              <figure className="mt-8">
                <Figure
                  src={`/images/work/${study.slug}-identified.png`}
                  alt=""
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  className="aspect-[21/9] w-full rounded-2xl"
                />
                <figcaption className="mt-3 max-w-[60ch] text-sm italic text-text-2">
                  {study.identifiedCaption}
                </figcaption>
              </figure>
            </Reveal>
          )}
          {study.identifiedCaption && !study.identifiedImage && (
            <Reveal delay={0.06}>
              <blockquote className="mt-8 max-w-[60ch] border-l-2 border-brand pl-5 text-base italic leading-relaxed text-text-2">
                {study.identifiedCaption}
              </blockquote>
            </Reveal>
          )}
        </Section>
      )}

      {(study.builtIntro || study.builtPoints) && (
        <Section spacing="md">
          <Reveal>
            <h2 className="text-h2">What we built</h2>
            {study.builtIntro && (
              <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-text-2">{study.builtIntro}</p>
            )}
          </Reveal>
          {study.builtPoints && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {study.builtPoints.map((point) => (
                <li key={point}>
                  <Badge variant="neutral">{point}</Badge>
                </li>
              ))}
            </ul>
          )}
          {study.builtOutro && (
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-text-2">{study.builtOutro}</p>
            </Reveal>
          )}

          {study.pipeline && (
            <Reveal delay={0.12}>
              <div className="mt-10">
                <FlowSteps steps={study.pipeline} />
              </div>
            </Reveal>
          )}

          {study.capabilities && (
            <Reveal delay={0.16}>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {study.capabilities.map((cap) => (
                  <div key={cap} className="rounded-xl bg-surface-2 p-5 text-sm font-medium text-foreground">
                    {cap}
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {study.intelligenceHeading && study.intelligenceBody && (
            <Reveal delay={0.2}>
              <div className="mt-10 border-t border-line-soft pt-8">
                <h3 className="text-h3">{study.intelligenceHeading}</h3>
                <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-text-2">{study.intelligenceBody}</p>
              </div>
            </Reveal>
          )}
        </Section>
      )}

      {study.whyNotOffTheShelf && (
        <Section variant="surface" spacing="md">
          <Reveal>
            <h2 className="text-h2">Why off-the-shelf tools couldn&apos;t substitute</h2>
            <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-text-2">{study.whyNotOffTheShelf}</p>
          </Reveal>
        </Section>
      )}

      {study.productionReality && (
        <Section spacing="md">
          <Reveal>
            <h2 className="text-h2">Production reality</h2>
          </Reveal>
          <ul className="mt-6 flex flex-col gap-3">
            {study.productionReality.map((point, i) => (
              <Reveal key={point} delay={Math.min(i * 0.04, 0.16)}>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" aria-hidden />
                  <span className="text-sm leading-relaxed text-foreground">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Section>
      )}

      {(study.outcomeTable || study.outcomeBullets) && (
        <Section variant="surface" spacing="md">
          <Reveal>
            <h2 className="text-h2">Outcome</h2>
          </Reveal>

          {study.outcomeTable && (
            <Reveal delay={0.06}>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-line-soft">
                      <th className="py-3 pr-6 font-medium text-text-3">Dimension</th>
                      <th className="py-3 pr-6 font-medium text-text-3">Before</th>
                      <th className="py-3 font-medium text-text-3">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.outcomeTable.map((row) => (
                      <tr key={row.dimension} className="border-b border-line-soft">
                        <td className="py-4 pr-6 font-medium text-foreground">{row.dimension}</td>
                        <td className="py-4 pr-6 text-text-2">{row.before}</td>
                        <td className="py-4 text-foreground">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          )}

          {study.outcomeBullets && (
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {study.outcomeBullets.map((point, i) => (
                <Reveal key={point} delay={Math.min(i * 0.04, 0.16)}>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" aria-hidden />
                    <span className="text-sm leading-relaxed text-foreground">{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </Section>
      )}

      {/* Light entries (full write-up not yet supplied) show just the blurb as body copy. */}
      {!study.whoFor && !study.challengeIntro && !study.outcomeTable && !study.outcomeBullets && (
        <Section spacing="md">
          <Reveal>
            <p className="max-w-[68ch] text-body-lg text-text-2">{study.blurb}</p>
          </Reveal>
        </Section>
      )}

      {study.gallery && study.gallery.length > 0 && (
        <Section spacing="md">
          <Reveal>
            <p className="eyebrow mb-6">Gallery</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {study.gallery.map((img, i) => (
              <Reveal key={img.src} delay={Math.min(i * 0.06, 0.18)}>
                <figure>
                  <Figure
                    src={img.src}
                    alt={img.alt ?? ''}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3] w-full rounded-2xl"
                  />
                  {img.caption && (
                    <figcaption className="mt-3 text-sm text-text-2">{img.caption}</figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {(study.linkedinEmbed || study.youtubeEmbed) && (
        <Section variant="surface" spacing="md">
          <div className="flex flex-col gap-10">
            {study.youtubeEmbed && (
              <Reveal>
                <p className="eyebrow mb-4">Watch</p>
                <YouTubeEmbed url={study.youtubeEmbed} title={study.title} />
              </Reveal>
            )}
            {study.linkedinEmbed && (
              <Reveal delay={0.06}>
                <p className="eyebrow mb-4">From LinkedIn</p>
                <LinkedInEmbed url={study.linkedinEmbed} title={study.title} />
              </Reveal>
            )}
          </div>
        </Section>
      )}

      {relatedService && (
        <Section variant="surface" spacing="md">
          <Reveal>
            <p className="eyebrow mb-8">The service behind this project</p>
          </Reveal>
          <div className="border-t border-line-soft">
            <EditorialRow
              index="→"
              title={relatedService.title}
              description={relatedService.short}
              href={`/services/${relatedService.id}`}
            />
          </div>
        </Section>
      )}

      <Section spacing="sm">
        <ShareLink />
      </Section>

      {otherStudies.length > 0 && (
        <Section variant="surface" spacing="lg">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="text-h2">More case studies</h2>
              <Button href="/case-studies" variant="link">
                View all
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
            {otherStudies.map((s) => (
              <CaseStudyTile key={s.slug} study={s} />
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  )
}
