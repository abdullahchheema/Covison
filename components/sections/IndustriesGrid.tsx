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
  Layers,
} from 'lucide-react'
import { industries } from '@/lib/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'

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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => {
          const Icon = iconMap[industry.icon as keyof typeof iconMap] ?? Layers
          return (
            <Reveal key={industry.id} delay={(i % 6) * 0.04}>
              <article className="flex h-full flex-col gap-4 rounded-xl bg-surface-3 p-7 sm:p-8">
                <Icon size={20} className="text-brand" />

                <h3 className="text-h3">{industry.title}</h3>
                <p className="text-sm leading-relaxed text-text-2">{industry.description}</p>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {industry.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="neutral">{tag}</Badge>
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
