import fs from 'node:fs'
import path from 'node:path'

export interface CaseStudyOutcomeRow {
  dimension: string
  before: string
  after: string
}

export interface CaseStudyImage {
  src: string
  alt?: string
  caption?: string
}

export interface CaseStudy {
  /** Derived from the filename (content/case-studies/<slug>.json), not read from the file itself. */
  slug: string
  client: string
  tag: string
  title: string
  /** One-line tagline shown under the title on the detail page. */
  subtitle?: string
  /** Short summary used on index cards, the homepage teaser, and related-project grids. */
  blurb: string
  /** Headline outcome line used on compact cards. */
  result: string
  /** Lower sorts earlier on the index and homepage teaser. Omit to default to the end, alphabetical by slug. */
  order?: number
  meta?: { industry?: string; market?: string; solutions?: string }
  whoFor?: string
  challengeIntro?: string
  challengePoints?: string[]
  identifiedIntro?: string
  /** Pull-quote text shown after `identifiedIntro`. Rendered as text only unless `identifiedImage` is set. */
  identifiedCaption?: string
  /** Set true only once public/images/work/<slug>-identified.png has actually been generated. */
  identifiedImage?: boolean
  builtIntro?: string
  builtPoints?: string[]
  builtOutro?: string
  capabilities?: string[]
  /** Flow diagram stages, left to right. A plain string is a single-label box;
   *  {label, detail} adds a short sub-line for a richer stage (e.g. what that
   *  stage actually does). Mixing both forms in the same array is fine. */
  pipeline?: (string | { label: string; detail?: string })[]
  intelligenceHeading?: string
  intelligenceBody?: string
  whyNotOffTheShelf?: string
  productionReality?: string[]
  outcomeTable?: CaseStudyOutcomeRow[]
  outcomeBullets?: string[]
  /** Optional contextual CTA shown partway down the page, tailored to this
   *  case study's specific pain point (distinct from the generic CTA every
   *  page ends with). Both fields required together. */
  midCtaHeading?: string
  midCtaBody?: string
  /** Extra inline images beyond the hero, rendered as a gallery near the end of the write-up. */
  gallery?: CaseStudyImage[]
  /** A LinkedIn post URL to embed (e.g. https://www.linkedin.com/posts/company_...-activity-1234567890). */
  linkedinEmbed?: string
  /** A YouTube video URL or ID to embed. */
  youtubeEmbed?: string
  /** Link to the live product or client site, shown as a button on the detail page. */
  websiteUrl?: string
  /** Set only for a placeholder entry that isn't a verified real engagement. */
  illustrative?: boolean
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'case-studies')

function readCaseStudyFile(filename: string): CaseStudy {
  const slug = filename.replace(/\.json$/, '')
  const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8')
  const data = JSON.parse(raw) as Omit<CaseStudy, 'slug'>
  return { ...data, slug }
}

/**
 * Every case study, sorted by `order` (ascending, undefined last), then slug.
 * Add a new engagement by dropping a `<slug>.json` file into content/case-studies/
 * (see content/case-studies/README.md for the shape); it appears here automatically,
 * no code changes required.
 */
export function getAllCaseStudies(): CaseStudy[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.json'))
  const studies = files.map(readCaseStudyFile)

  return studies.sort((a, b) => {
    const orderA = a.order ?? Number.POSITIVE_INFINITY
    const orderB = b.order ?? Number.POSITIVE_INFINITY
    if (orderA !== orderB) return orderA - orderB
    return a.slug.localeCompare(b.slug)
  })
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`)
  if (!fs.existsSync(filePath)) return undefined
  return readCaseStudyFile(`${slug}.json`)
}
