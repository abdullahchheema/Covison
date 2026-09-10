import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

// Explicit allow rules for AI crawlers/agents, in addition to the wildcard
// allow-all below, so this site (and the free Covison CRM product) stays
// discoverable to AI assistants and their retrieval crawlers.
const aiCrawlers = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
