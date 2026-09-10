# Covison — Outstanding Items

Everything in this file is blocked on real information only you can provide.
Nothing here will be fabricated (fake pricing, fake client logos would
misrepresent the business). Fill in the blanks below and hand this back and
I'll wire it in.

## 1. Pricing (blocked — need real figures)

Needed per tier:

- [ ] Tier name (e.g. Starter / Professional / Enterprise, or your own naming)
- [ ] Price (flat fee, "from $X", "$X/mo" — whatever your actual model is)
- [ ] What's included (bullet list per tier)
- [ ] Which tier (if any) should be marked "Most popular" / highlighted
- [ ] Does this apply across all 14 services, or specific ones only?

Once provided: build a `PricingTiers` component (3-column card layout,
checkmarked inclusions, highlighted middle tier, CTA button per tier) and
place it on `/services` and/or individual `/services/[slug]` pages.

## 2. Company LinkedIn page (blocked — need the URL)

- [ ] Covison's own company LinkedIn page URL

`siteConfig.linkedin` in `lib/site.ts` is still an empty string; the icon in
the footer is already wired up and appears automatically once this is set.
(The three founders' personal LinkedIn URLs are already filled in and live.)

## 3. Testimonials (blocked — need real quotes)

- [ ] 2-3 real client quotes: name, role, company, and the quote itself
- [ ] Only from clients who've agreed to be quoted publicly

`testimonials` in `lib/site.ts` is still an empty array; the section renders
a "coming soon" placeholder until it's populated. No code change needed once
you have real quotes, just the content.

## 4. Testimonial client logos (optional, only if real + permitted)

- [ ] Logo files (SVG/PNG), only for clients who've agreed to be named/shown
      alongside their testimonial

## 5. Case study artwork (optional, low priority)

Some case studies (e.g. Paris Móviles, Royal Pizza Sahowala, Webhecho) don't
have a hero image yet at `public/images/work/<slug>.png`, so they show the
gradient + monogram placeholder. Not blocking, just flagging the open slot
whenever you're ready to add real project imagery.

---

Already done (this file used to list these as blocked — verified against
the current codebase, no longer outstanding):
- Team LinkedIn URLs — filled in for all three co-founders.
- Insights content — real posts are live, no longer an empty state.
- A real company address is now public (footer "Registered office": Prime
  Galleria Ltd, 29 Spring Street, Accrington, BBE0HE), covering the original
  "office address" ask, though not in the two-column "Our Offices" layout
  originally sketched — say the word if you want that specific layout instead.
