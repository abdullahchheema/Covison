function extractYouTubeId(input: string): string | null {
  const trimmed = input.trim()
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed

  try {
    const url = new URL(trimmed)
    if (url.hostname.includes('youtu.be')) return url.pathname.slice(1)
    if (url.hostname.includes('youtube.com')) {
      const v = url.searchParams.get('v')
      if (v) return v
      const match = url.pathname.match(/\/embed\/([\w-]{11})/)
      if (match) return match[1]
    }
  } catch {
    return null
  }
  return null
}

export function YouTubeEmbed({ url, title }: { url: string; title: string }) {
  const id = extractYouTubeId(url)
  if (!id) return null

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-surface-2">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
