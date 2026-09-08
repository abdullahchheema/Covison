import { ReactNode } from 'react'
import { Container } from './Container'
import { PageHeader } from './PageHeader'

interface LegalPageProps {
  title: string
  updated: string
  children: ReactNode
}

/** Shared layout for prose-heavy legal pages with consistent vertical rhythm. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <PageHeader eyebrow={title} title={title} description={`Last updated: ${updated}`} />
      <section className="bg-background pb-16 pt-16 sm:pt-20">
        <Container size="prose">
          <div className="flex flex-col gap-6 text-sm leading-relaxed text-text-2 [&_h2]:mt-2 [&_h2]:text-h3 [&_h2]:text-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4">
            {children}
          </div>
        </Container>
      </section>
    </>
  )
}
