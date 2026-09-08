import {
  Lightbulb,
  Zap,
  Monitor,
  MessageSquare,
  Target,
  Bot,
  Users,
  GraduationCap,
  Boxes,
  ShoppingBag,
  Cloud,
  Database,
  Plug,
  Truck,
  Sparkles,
  Code2,
  Server,
  Layers,
  type LucideIcon,
} from 'lucide-react'

const serviceIconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Zap,
  Monitor,
  MessageSquare,
  Target,
  Bot,
  Users,
  GraduationCap,
  Boxes,
  ShoppingBag,
  Cloud,
  Database,
  Plug,
  Truck,
  Sparkles,
  Code2,
  Server,
}

/** Resolves a service/product `icon` string (see lib/site.ts) to its Lucide component, falling back to a generic icon. */
export function getServiceIcon(name: string): LucideIcon {
  return serviceIconMap[name] ?? Layers
}
