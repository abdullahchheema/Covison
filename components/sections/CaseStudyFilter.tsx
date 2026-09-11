'use client'

import { useMemo, useState } from 'react'
import { CaseStudy } from '@/lib/case-studies'
import { getServicesByIds } from '@/lib/site'
import { CaseStudyTile } from '@/components/sections/CaseStudyTile'

export function CaseStudyFilter({ studies }: { studies: CaseStudy[] }) {
  const [serviceId, setServiceId] = useState('all')
  const serviceOptions = useMemo(() => {
    const ids = new Set(studies.flatMap((s) => s.tags))
    return getServicesByIds(Array.from(ids)).sort((a, b) => a.title.localeCompare(b.title))
  }, [studies])
  const filtered = serviceId === 'all' ? studies : studies.filter((s) => s.tags.includes(serviceId))

  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor="case-study-filter" className="eyebrow">
          Filter
        </label>
        <select
          id="case-study-filter"
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
          className="h-9 rounded-md border border-border bg-surface px-3 text-sm shadow-xs transition-[border-color,box-shadow] focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20"
        >
          <option value="all">All solutions</option>
          {serviceOptions.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
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
