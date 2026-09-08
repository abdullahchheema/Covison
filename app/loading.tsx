import Image from 'next/image'

// Shown by Next.js while a route segment is loading (e.g. navigating to a
// page that hasn't been fetched yet). Uses the icon-only mark, not the full
// wordmark lockup, so it stays legible at a small size.
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <Image
        src="/logo-mark.png"
        alt="Loading"
        width={48}
        height={48}
        unoptimized
        className="h-12 w-12 animate-pulse object-contain"
      />
    </div>
  )
}
