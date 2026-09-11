import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Figure } from '@/components/ui/Figure'
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

/** Compact row: thumbnail, title, headline result. Used in homepage/service teasers. */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="row-hover flex items-center gap-5 border-b border-line-soft px-1 py-6"
    >
      <Figure
        src={`/images/work/${study.slug}.webp`}
        alt=""
        sizes="56px"
        fallback={
          <div
            className="flex h-full w-full items-center justify-center text-lg font-bold text-foreground"
            style={{ backgroundImage: 'linear-gradient(135deg, var(--color-brand-soft), var(--color-surface-3))' }}
          >
            {monogram(study.client)}
          </div>
        }
        className="h-14 w-14 flex-shrink-0 rounded-lg"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-semibold text-foreground">{study.title}</p>
        <p className="mt-1 text-sm text-text-2">{study.result}</p>
      </div>
      <ArrowRight size={16} className="flex-shrink-0 text-text-3" />
    </Link>
  )
}
