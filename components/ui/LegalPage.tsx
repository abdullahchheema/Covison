import { ReactNode } from 'react'
import { Container } from './Container'

interface LegalPageProps {
  title: string
  updated: string
  children: ReactNode
}

/** Shared layout for prose-heavy legal pages with consistent vertical rhythm. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section className="min-h-screen bg-canvas pb-16 pt-16 sm:pt-20">
      <Container size="prose">
        <header className="flex flex-col gap-3 border-b border-line pb-8">
          <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
          <p className="text-sm text-faint">Last updated: {updated}</p>
        </header>
        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted [&_h2]:mt-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_a]:font-medium [&_a]:text-ink [&_a]:underline">
          {children}
        </div>
      </Container>
    </section>
  )
}
