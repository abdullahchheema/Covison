function extractActivityUrn(url: string): string | null {
  const match = url.match(/activity[:-](\d+)/)
  return match ? `urn:li:activity:${match[1]}` : null
}

export function LinkedInEmbed({ url, title }: { url: string; title: string }) {
  const urn = extractActivityUrn(url)
  if (!urn) return null

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-surface-2">
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
