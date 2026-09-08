# Covison — Outstanding Items

Everything in this file is blocked on real information only you can provide.
Nothing here will be fabricated — see the design-system conversation for why
(fake team members, fake client logos/addresses, fake pricing would misrepresent
the business). Fill in the blanks below and hand this back and I'll wire it in.

## 1. Pricing (blocked — need real figures)

You confirmed you want a 3-tier pricing section like the reference site's
Solutions pages. Needed per tier:

- [ ] Tier name (e.g. Starter / Professional / Enterprise, or your own naming)
- [ ] Price (flat fee, "from $X", "$X/mo" — whatever your actual model is)
- [ ] What's included (bullet list per tier)
- [ ] Which tier (if any) should be marked "Most popular" / highlighted
- [ ] Does this apply to all 8 services, or specific ones only?

Once provided: build a `PricingTiers` component (3-column card layout,
checkmarked inclusions, highlighted middle tier, CTA button per tier) and
place it on `/services` and/or individual `/services/[slug]` pages.

## 2. Office address (blocked — need real address)

You confirmed you want a location block in the footer (styled like the
reference's two-column "Our Offices" layout). Needed:

- [ ] Real street address(es) Covison wants listed publicly
- [ ] If more than one location, label for each (e.g. "HQ", city name)

Once provided: add a `Locations` block to `Footer.tsx` in the same two-column
style, using the real address(es) only.

## 3. LinkedIn URLs (left as-is per your last answer)

- [ ] Abdullah Imran's LinkedIn URL
- [ ] Saad Rabbani's LinkedIn URL
- [ ] Muhammad Ali Murtaza's LinkedIn URL
- [ ] Covison company LinkedIn page URL

`siteConfig.linkedin` and `team[].linkedin` in `lib/site.ts` are empty strings
— the icons are already wired up (`Footer.tsx`, `TeamGrid.tsx`) and will
appear automatically the moment these are filled in. No code change needed,
just the URLs.

Team photos were removed by design decision (2026-09-08): the team section
now shows name/role/bio only, no avatar. `public/team/` is no longer
referenced anywhere in the codebase.

## 4. Testimonial client logos (left as-is per your last answer)

- [ ] Logo files (SVG/PNG) for CloudBase Systems, Vantage Analytics, Lumio
      Health — only if these are real clients who've agreed to be named/shown

`Testimonials.tsx` currently renders text-only quotes. If real, permitted
logo files exist, I'll add them next to each quote.

## 5. Insights / blog content (empty state, ready to receive posts)

- [ ] 2-3 real article topics or drafts (bullet points are enough — I'll
      write the full piece in Covison's voice)

`lib/site.ts`'s `posts` array is empty; `/insights` shows a "more coming
soon" state until it's populated. Route/template already built.

## 6. Optional structural polish (not blocked, low priority — my call to skip for now)

- [ ] Extract a few inline JSX blocks (Eyebrow, TeamMember, Testimonial card)
      into standalone components for tidiness — pure refactor, no visual
      change, skipped so far since it doesn't affect what you see.
- [ ] Real screenshots/diagrams for case studies, if you ever want to replace
      the gradient+monogram placeholder tiles with actual project imagery.

---
Delivered without waiting on the above (see conversation for full detail):
design tokens, header/nav incl. Solutions mega-menu, footer restructure,
hero, full homepage rebuild, Services index + 8 dedicated service pages,
Work index + 8 dedicated case-study pages, Services↔Work cross-linking,
Insights section, team grid, testimonials carousel, legal pages, sitemap/
robots/not-found, accessibility (focus states, reduced-motion, alt text),
mobile menu animation. Build and lint both pass clean.
