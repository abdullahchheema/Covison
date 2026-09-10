// LinkedIn post URNs come in a few types (ugcPost, activity, share) that are
// NOT interchangeable, embedding the wrong type 404s. If the given URL
// already contains a full urn (e.g. pasted straight from LinkedIn's own
// "Embed this post" code), use it as-is rather than guessing at a type.
function extractEmbedUrn(url: string): string | null {
  const urnMatch = url.match(/urn:li:\w+:\d+/)
  if (urnMatch) return urnMatch[0]
  const activityMatch = url.match(/activity[:-](\d+)/)
  return activityMatch ? `urn:li:activity:${activityMatch[1]}` : null
}

export function LinkedInEmbed({ url, title }: { url: string; title: string }) {
  const urn = extractEmbedUrn(url)
  if (!urn) return null

  return (
    // LinkedIn's own embed widget is a fixed 504px wide, narrow/tall format.
    // Stretching the iframe to the full column width doesn't reflow the post
    // content, it just leaves it small and centred inside a wide empty frame,
    // which is what made a document attached to a post unreadable.
    <div className="mx-auto w-full max-w-[504px] overflow-hidden rounded-2xl bg-surface-2">
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/${urn}`}
        title={title}
        className="h-[600px] w-full"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
