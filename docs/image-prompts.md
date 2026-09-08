# Image prompts

Every image slot below renders through `components/ui/Figure.tsx`, which
degrades to a tonal violet gradient plate (or a monogram, for case studies)
until the file exists. Nothing breaks if you generate these gradually or
skip some entirely.

Drop each generated file at the exact path listed. No code changes needed;
the components already reference these paths.

## Shared style (prepend to every prompt below)

> Matte 3D abstract composition in electric violet (#6d4aff), soft lavender
> (#8b5cf6), and warm grey, resting on a warm off-white ground (#f8f7f4).
> Soft diffuse studio lighting, gentle warm-toned shadow, subtle matte clay
> texture on the forms. No text, no letters, no numbers, no interface
> elements, no icons, no literal depiction of software, screens, or people.
> Clean, premium, minimal composition with generous negative space where
> headline text sits on the page.

The existing `public/logo.png` is kept as-is and is not part of this list.
Design system §10 describes an eventual violet-gradient-on-transparency
version of the mark; that is a future swap, not something to generate now.

For the 14 service heroes and the CRM hero specifically: keep material,
lighting, and background treatment identical across all of them (same studio
setup, same ground tone, same matte finish) so they read as one curated
system side by side in the nav mega-menu and service index. Vary the number
of forms, geometry, scale, composition, dominant palette color, and depth so
no two feel like the same sculpture re-lit.

**Full-bleed background heroes.** The homepage, About, Contact, every
service page, every case study, and the CRM page all render their hero
image as a full-width background with a dark scrim and white text overlaid
on top (not a framed inset graphic). Generate these wide (roughly 16:9 to
21:9) so `object-cover` has room to crop for different viewport heights
without losing the composition, and keep the main forms away from the
left third of the frame (where breadcrumb, title, and description sit) on
everything except the homepage and CRM hero, which center their text and
so want the composition weighted toward the edges instead. The dark scrim
means these can run slightly moodier/darker than a framed image would.

---

## 1. Shared site hero

**`public/images/hero.png`** (wide, e.g. 1920×1080 or wider)

Used as a full-bleed background hero (dark scrim, white text overlaid) on
the homepage, About, and Contact, per your request for a single shared
hero image across those three pages.

Three or four softly rounded interlocking forms in electric violet, lavender
and warm grey, arranged as a flowing, ascending composition suggesting
momentum and systems connecting to each other. Wide, airy framing with the
forms occupying the center-right two-thirds of the frame.

## 2–5. Homepage feature story illustrations

Square compositions, one per featured service, each a distinct abstract
scene evoking its theme without depicting any literal UI, robot, or person.

**`public/images/feature-consulting.png`** (1:1, e.g. 1200×1200)
A single large violet form with a clear, deliberate path or channel carved
through it, like a route being mapped through solid material. Suggests
clarity and direction.

**`public/images/feature-automation.png`** (1:1, e.g. 1200×1200)
Three interlocking rounded forms arranged in a continuous loop, mid-rotation,
suggesting a self-sustaining cycle running without intervention.

**`public/images/feature-web.png`** (1:1, e.g. 1200×1200)
Layered, overlapping translucent-edged panes of violet and lavender glass-like
material stacked with a soft offset, suggesting structure and craft.

**`public/images/feature-chatbots.png`** (1:1, e.g. 1200×1200)
Two soft rounded forms in a close, balanced dialogue-like arrangement, one
violet and one warm grey, connected by a thin glowing channel of light.

## 6. Brand plate ambient texture

**`public/images/ink-texture.png`** (21:9, e.g. 2100×900)

For the permanently-dark `--ink` plate: a very dark (near-black, #120f1a
base), subtle, moody abstract texture with soft violet and deep indigo glow
concentrated off-center, large soft-edged forms barely emerging from the
darkness. Restrained, ambient, not busy: this sits behind centered text at
low opacity, so keep contrast low and avoid bright highlights.

## 7. Social share image

**`public/og.png`** (1200×630 exactly)

Same visual language as the hero, simplified: one or two large soft violet
and lavender forms off-center (left two-thirds), generous warm off-white
negative space on the right third where a platform may overlay the site
name. No text baked into the image itself, Next.js metadata handles the
title separately.

---

## 8. Service hero images (14)

Wide compositions (21:9, e.g. 2100×900), one per service, shown at the top
of each `/services/<id>` page. Each needs a distinct visual metaphor for
that service's discipline while sharing the exact art direction described
above.

**`public/images/services/consulting-hero.png`**
A single violet form with a clear, deliberate path or channel carved through
it, like a route being mapped through solid material. Clarity and direction.

**`public/images/services/automation-hero.png`**
Several interlocking rounded forms arranged in a continuous loop, mid-motion,
suggesting a self-sustaining cycle running without intervention.

**`public/images/services/web-hero.png`**
Layered, overlapping translucent-edged panes of violet and lavender
glass-like material, stacked with a soft offset, suggesting structure and
craft.

**`public/images/services/chatbots-hero.png`**
Two soft rounded forms in close, balanced dialogue-like proximity, one
violet and one warm grey, connected by a thin glowing channel of light.

**`public/images/services/lead-generation-hero.png`**
A wide fan of small lavender forms radiating outward from one violet source
point, suggesting reach and outward momentum.

**`public/images/services/ai-agents-hero.png`**
A single violet form following a visible looping path among several warm
grey waypoint forms, suggesting autonomous, self-directed movement.

**`public/images/services/crm-sales-hero.png`**
A warm grey form and a violet form connected by a steady glowing thread that
loops back on itself, suggesting a relationship that is followed up on, not
dropped.

**`public/images/services/workshops-hero.png`**
A cluster of similarly sized rounded forms in warm grey gradually shifting
color toward violet across the group, suggesting shared knowledge spreading.

**`public/images/services/software-hero.png`**
A dense, precise stack of interlocking geometric blocks in violet and warm
grey, built up like modular architecture, suggesting custom construction
rather than an off-the-shelf shape.

**`public/images/services/ecommerce-hero.png`**
A tidy grid of small uniform rounded forms flowing into a single funnel-like
shape, suggesting many individual transactions converging into one smooth
stream.

**`public/images/services/cloud-hero.png`**
Several softly rounded forms suspended at varying depths above a warm grey
base plane, connected by thin violet threads, suggesting distributed
infrastructure held together as one system.

**`public/images/services/data-hero.png`**
Multiple thin ribbon-like violet and lavender forms flowing from scattered
starting points into a single well-organized braid, suggesting disparate
data converging into structure.

**`public/images/services/integration-hero.png`**
Several distinct warm grey and violet forms of different shapes, each
plugged into a shared central lavender node, suggesting many separate
systems operating as one.

**`public/images/services/truck-dispatching-hero.png`**
A single confident violet form following a long, clear, mostly straight
path across the frame, with a few warm grey waypoint forms along the way,
minimal negative space either side, suggesting a direct, efficient route
with no wasted distance. Keep this one visually calmer and more grounded
than the AI-service heroes, avoiding anything that reads as "tech
product," consistent with Truck Dispatching being a logistics service
rather than a software offering.

## 9. Covison CRM product hero

**`public/images/products/crm-hero.png`** (16:10, e.g. 1600×1000)

Same art direction as the service heroes, at the homepage-hero aspect ratio.
Two or three interlocking forms, one clearly "central" (representing the
unified pipeline) with several smaller forms feeding into it from different
angles, in violet, lavender, and warm grey, suggesting scattered inputs
resolving into one coherent system. This is a real Covison product, not a
client service, so keep it a step more polished and composed than the
service heroes: fewer forms, more negative space, a slightly more premium,
considered arrangement.

## 10. Case study tiles

Each of these files does double duty: a framed 4:3 crop on the
`/case-studies` index and related-project grids, and a full-bleed
background (with dark scrim, see above) on that case study's own detail
page. Generate at a wide landscape ratio (e.g. 16:9, 1600×900) so both
crops work; `object-cover` handles the rest.

**Already generated, just renamed** (produced for an earlier set of
placeholder case studies and reassigned by theme to the current real
projects; no regeneration needed):

| File | Reused for |
|---|---|
| `sanjh-localized-hiring-marketplace-mvp.png` | Sanjh |
| `bridgebot-ai-copilot-knowledge-graph.png` | BridgeBot |
| `bizmila-ai-startup-quality-investor-readiness.png` | Bizmila |
| `noah-secure-ai-legacy-code-regulated-environments.png` | NOAH |
| `strong-franchise-lead-qualification-at-scale.png` | Strong |
| `yourdelivery-hybrid-address-intelligence.png` | YourDelivery |
| `confidential-fmcg-data-modernization.png` | Confidential FMCG |
| `smallbiz-acquisitions-crm-daily-ai-qualification.png` | SmallBiz Acquisitions |

**Still needed** (3 case study tiles, plus one supporting image for
BridgeBot's "What we found" pull-quote):

**`public/images/work/t1c-neuromorphic-sdk.png`**
A dense, precise lattice of small interlocking geometric forms in violet and
warm grey, suggesting a foundational, technical infrastructure layer built
with exacting structure.

**`public/images/work/infinity-genai-logo-prototyping.png`**
One warm grey form branching into several softly varied violet and lavender
copies arranged in a fan, suggesting rapid creative iteration from a single
starting point.

**`public/images/work/no-answer-production-ai-receptionist-platform.png`**
Concentric soft rounded rings in violet and lavender emanating outward from
a central warm grey form, suggesting a calm, always-on voice or signal.

**`public/images/work/bridgebot-ai-copilot-knowledge-graph-identified.png`** (21:9, e.g. 2100×900)
A supporting image for the "What we found" section: several warm grey forms
loosely scattered, each linked by thin glowing violet threads converging on
one central form, suggesting fragmented sources being pulled into a single
continuous thread.

## 11. Insight article images (6)

4:3 compositions (e.g. 1200×900) for the six CRM-related articles on
`/insights` and the "From the blog" section of `/products/crm`. Editorial,
slightly more abstract-illustrative than literal, same house style.

**`public/images/insights/why-modern-businesses-are-moving-beyond-traditional-crms.png`**
A single rigid grid of small warm grey forms with one corner breaking free
into a looser, more organic violet arrangement, suggesting a shift away
from a rigid old structure.

**`public/images/insights/how-automated-follow-ups-prevent-leads-from-slipping-through-the-cracks.png`**
Small lavender forms falling toward a gap between two surfaces, with a
violet form positioned to catch them before they fall through, suggesting a
safety net.

**`public/images/insights/from-scattered-leads-to-one-intelligent-sales-pipeline.png`**
Scattered small warm grey and lavender forms across the frame, each with a
faint violet thread drawing it toward one central well-formed shape.

**`public/images/insights/why-your-crm-should-work-around-your-business.png`**
An irregularly shaped warm grey form with a violet form that has flexed and
molded itself precisely around it, rather than forcing a rigid fit.

**`public/images/insights/how-ai-is-changing-the-modern-sales-workflow.png`**
A violet form actively reshaping a cluster of smaller warm grey forms into a
tidier arrangement in real time, suggesting active, ongoing work rather than
a finished state.

**`public/images/insights/building-a-sales-system-that-never-forgets-a-follow-up.png`**
A continuous unbroken violet loop threading through a series of warm grey
checkpoints, with no gaps in the line, suggesting a process with nothing
dropped.
