import Link from 'next/link'
import { Figure } from '@/components/ui/Figure'
import { Badge } from '@/components/ui/Badge'
import { CaseStudy } from '@/lib/case-studies'
import { getServicesByIds } from '@/lib/site'

function monogram(client: string) {
  return client
    .split(' ')
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

/** Grid card for the case-studies index and related-projects lists: image on top, client + tag, title below. */
export function CaseStudyTile({ study }: { study: CaseStudy }) {
  const matchedServices = getServicesByIds(study.tags)

  return (
    <Link href={`/case-studies/${study.slug}`} className="group flex flex-col gap-4">
      <Figure
        src={`/images/work/${study.slug}.webp`}
        alt=""
        sizes="(min-width: 1024px) 363px, (min-width: 640px) 50vw, 100vw"
        fallback={
          <div
            className="flex h-full w-full items-center justify-center text-2xl font-bold text-foreground"
            style={{ backgroundImage: 'linear-gradient(135deg, var(--color-brand-soft), var(--color-surface-3))' }}
          >
            {monogram(study.client)}
          </div>
        }
        className="aspect-[4/3] w-full rounded-xl transition-transform duration-200 group-hover:scale-[1.01]"
      />
      <div className="flex flex-col gap-2">
        <span className="eyebrow">{study.client}</span>
        {/* min-h reserves space for the worst case (2 lines of wrapped badges,
            e.g. two long service names) so every card's title lines up with its
            row siblings regardless of how many lines its own badges wrap to.
            Kept on its own row (not sharing a line with the eyebrow above) so
            that reservation is a fixed, predictable amount. */}
        <div className="flex min-h-12 flex-wrap items-start gap-1.5">
          {matchedServices.map((service) => (
            <Badge key={service.id} variant="brand">
              {service.title}
            </Badge>
          ))}
        </div>
        <h3 className="text-h3 transition-colors group-hover:text-brand">{study.title}</h3>
        <p className="text-sm leading-relaxed text-text-2">{study.result}</p>
      </div>
    </Link>
  )
}
