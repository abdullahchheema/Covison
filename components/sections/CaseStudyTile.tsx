import Link from 'next/link'
import { Figure } from '@/components/ui/Figure'
import { Badge } from '@/components/ui/Badge'
import { CaseStudy } from '@/lib/case-studies'

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
  return (
    <Link href={`/case-studies/${study.slug}`} className="group flex flex-col gap-4">
      <Figure
        src={`/images/work/${study.slug}.png`}
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
        <div className="flex items-center justify-between gap-2">
          <span className="eyebrow">{study.client}</span>
          <Badge variant="brand">{study.tag}</Badge>
        </div>
        <h3 className="text-h3 transition-colors group-hover:text-brand">{study.title}</h3>
        <p className="text-sm leading-relaxed text-text-2">{study.result}</p>
      </div>
    </Link>
  )
}
