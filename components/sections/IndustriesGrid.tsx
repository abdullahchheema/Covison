import {
  GraduationCap,
  SquarePen,
  Target,
  Megaphone,
  Stethoscope,
  Cpu,
  Zap,
  ShoppingCart,
  CodeXml,
  TrendingUp,
  Landmark,
  Share2,
  Server,
  Building2,
  MapPin,
  Camera,
  Briefcase,
  Coffee,
  Users,
  Download,
  CircleCheckBig,
} from 'lucide-react'
import { industries } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

const iconMap = {
  GraduationCap,
  SquarePen,
  Target,
  Megaphone,
  Stethoscope,
  Cpu,
  Zap,
  ShoppingCart,
  CodeXml,
  TrendingUp,
  Landmark,
  Share2,
  Server,
  Building2,
  MapPin,
  Camera,
  Briefcase,
  Coffee,
  Users,
  Download,
  CircleCheckBig,
}

export function IndustriesGrid() {
  return (
    <Section spacing="lg">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => {
          const Icon = iconMap[industry.icon as keyof typeof iconMap]
          return (
            <Reveal key={industry.id} delay={(i % 6) * 0.06}>
              <article className="card flex h-full flex-col p-7 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon size={22} className="text-ink" />
                </span>

                <h3 className="mt-6 text-xl font-semibold">{industry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{industry.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
