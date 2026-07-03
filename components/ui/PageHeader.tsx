import { ReactNode } from 'react'
import { Container } from './Container'
import { Badge } from './Badge'
import { Reveal } from './Reveal'

interface PageHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  children?: ReactNode
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-canvas pb-9 pt-16 sm:pb-11 sm:pt-20">
      <Container>
        <Reveal>
          <div className="flex max-w-3xl flex-col gap-5">
            {eyebrow && (
              <span className="w-fit">
                <Badge variant="accent">{eyebrow}</Badge>
              </span>
            )}
            <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
            {description && <p className="text-lg leading-relaxed text-muted">{description}</p>}
            {children && <div className="mt-2">{children}</div>}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
