import type { MetadataRoute } from 'next'
import { siteConfig, services, products, posts } from '@/lib/site'
import { getAllCaseStudies } from '@/lib/case-studies'

const staticRoutes = [
  '',
  '/services',
  '/products',
  '/industries',
  '/about',
  '/case-studies',
  '/results',
  '/process',
  '/faq',
  '/insights',
  '/contact',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.id}`),
    ...products.map((p) => `/products/${p.id}`),
    ...getAllCaseStudies().map((cs) => `/case-studies/${cs.slug}`),
    ...posts.map((p) => `/insights/${p.slug}`),
  ]

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
