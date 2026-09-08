'use client'

import { useMemo, useState } from 'react'
import { CaseStudy } from '@/lib/case-studies'
import { CaseStudyTile } from '@/components/sections/CaseStudyTile'

export function CaseStudyFilter({ studies }: { studies: CaseStudy[] }) {
  const [tag, setTag] = useState('all')
  const tags = useMemo(() => Array.from(new Set(studies.map((s) => s.tag))).sort(), [studies])
  const filtered = tag === 'all' ? studies : studies.filter((s) => s.tag === tag)

  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor="case-study-filter" className="eyebrow">
          Filter
        </label>
        <select
          id="case-study-filter"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="h-9 rounded-md border border-border bg-surface px-3 text-sm shadow-xs transition-[border-color,box-shadow] focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20"
        >
          <option value="all">All solutions</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((study) => (
          <CaseStudyTile key={study.slug} study={study} />
        ))}
      </div>
    </div>
  )
}
