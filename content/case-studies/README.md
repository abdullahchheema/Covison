# Adding a case study

Drop a new `<slug>.json` file in this folder and it appears on `/case-studies`
automatically, no code changes needed. The filename (without `.json`) becomes
the URL: `content/case-studies/acme-widget-automation.json` becomes
`/case-studies/acme-widget-automation`.

Only `client`, `tag`, `title`, `blurb`, and `result` are required. Everything
else is optional: add fields as real content becomes available, and the
detail page renders only the sections you've filled in. A file with just the
five required fields still gets a clean page (title, blurb, hero image).

## Minimal example

```json
{
  "client": "Acme Co",
  "tag": "Workflow Automation",
  "title": "Cutting Invoice Processing From Days to Minutes",
  "blurb": "Automated Acme's invoice intake and approval routing, removing a full-time manual bottleneck.",
  "result": "Invoice processing time cut by 90%"
}
```

## Full schema

| Field | Type | Notes |
|---|---|---|
| `client` | string | Required. Also shown as the first row of the "Meet our client" section, which every page renders. |
| `tag` | string | Required. Short category shown as a badge and used for the index filter dropdown. |
| `title` | string | Required. The H1. |
| `subtitle` | string | Optional tagline shown under the title. |
| `blurb` | string | Required. 1-2 sentences, used on index cards, related-project grids, and as the page description if `subtitle` is absent. |
| `result` | string | Required. Headline outcome line shown on compact cards. |
| `order` | number | Lower sorts earlier on the index and homepage teaser. Omit to sort after everything with an order, alphabetically by slug. |
| `meta.industry` / `meta.market` / `meta.solutions` | string | Extra rows in the "Meet our client" section, each with its own icon. Omit any you don't have. |
| `whoFor` | string | "Who this is for" section. |
| `challengeIntro` | string | "The challenge" intro paragraph. |
| `challengePoints` | string[] | Bullet list under the challenge intro. |
| `identifiedIntro` | string | "What we found" section. |
| `identifiedCaption` | string | Optional pull-quote line shown after `identifiedIntro`. |
| `identifiedImage` | boolean | Set `true` only once `public/images/work/<slug>-identified.png` actually exists; otherwise the caption renders as text only. |
| `builtIntro` | string | "What we built" intro paragraph. |
| `builtPoints` | string[] | Rendered as pill badges (e.g. integrations, data sources). |
| `builtOutro` | string | Closing paragraph after the built points. |
| `capabilities` | string[] | Short capability chips shown in a row. |
| `pipeline` | `(string \| {label, detail?})[]` | 2-4 stages rendered as a left-to-right flow diagram. A plain string is a single-label box (e.g. `["Input", "Processing", "Output"]`); `{label, detail}` adds a short sub-line for a richer stage, e.g. `{"label": "Knowledge graph", "detail": "Self-updating, cross-platform"}`. Mixing both forms in the same array is fine. |
| `intelligenceHeading` / `intelligenceBody` | string | An extra named subsection inside "What we built" for a specific differentiator worth calling out. |
| `whyNotOffTheShelf` | string | "Why off-the-shelf tools couldn't substitute" section. |
| `productionReality` | string[] | Bullet list under a "Production reality" heading. |
| `outcomeTable` | `{dimension, before, after}[]` | Rendered as a before/after table under "Outcome". |
| `outcomeBullets` | string[] | Bullet list under "Outcome", alongside or instead of the table. |
| `midCtaHeading` / `midCtaBody` | string | An optional contextual CTA shown right after "Outcome", tailored to this engagement's specific pain point (distinct from the generic CTA every page ends with). Both fields must be set together. |
| `gallery` | `{src, alt?, caption?}[]` | Extra inline images beyond the hero. `src` is a path under `public/`. |
| `linkedinEmbed` | string | A LinkedIn post URL to embed (e.g. `https://www.linkedin.com/posts/...-activity-1234567890`). |
| `youtubeEmbed` | string | A YouTube video URL or ID to embed. |
| `websiteUrl` | string | Link to the live product/client site; renders as a button. |

## Images

The hero image lives at `public/images/work/<slug>.png`. If it doesn't exist
yet, the page shows a tonal gradient plate with the client's initials instead
of a broken image, so it's safe to add the JSON before the artwork is ready.
See `docs/image-prompts.md` for the house visual style (matte 3D abstract
forms, no literal screenshots or UI).

## Never fabricate

Every field above should reflect something actually true about the
engagement. If you don't have the detail for a section yet, leave it out
rather than inventing plausible-sounding specifics; the page degrades
gracefully with whatever's provided.
