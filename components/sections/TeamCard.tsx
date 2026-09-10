import { LinkedInIcon } from '@/components/ui/LinkedInIcon'

interface TeamCardProps {
  name: string
  role: string
  education: string
  bio: string[]
  linkedin: string
}

/** Shared co-founder card, used identically on the homepage and About page. */
export function TeamCard({ name, role, education, bio, linkedin }: TeamCardProps) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-xl border border-line-soft bg-surface-2 p-7">
      <div>
        <p className="text-xl font-semibold tracking-tight text-foreground">{name}</p>
        <p className="mt-1 text-sm text-text-2">
          {role} &middot; {education}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-text-2">{bio[0]}</p>

      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="mt-auto flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-3 transition-colors hover:text-foreground"
        >
          <LinkedInIcon size={14} />
        </a>
      )}
    </div>
  )
}
