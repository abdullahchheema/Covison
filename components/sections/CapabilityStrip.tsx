import { Bot, Globe, Workflow, Database, Plug, Users } from 'lucide-react'

const capabilities = [
  { label: 'AI & agents', Icon: Bot },
  { label: 'Web & product', Icon: Globe },
  { label: 'Automation', Icon: Workflow },
  { label: 'Data & infrastructure', Icon: Database },
  { label: 'Integrations', Icon: Plug },
  { label: 'CRM & sales tooling', Icon: Users },
]

/** Thin capability band standing in for a "trusted by" logo bar, without inventing customers (§9.3). */
export function CapabilityStrip() {
  return (
    <section className="border-b border-line-soft bg-surface-2">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="flex-shrink-0 border-b border-line-soft px-6 py-5 sm:border-b-0 sm:border-r sm:py-6">
          <p className="eyebrow whitespace-nowrap">What we build with</p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5 sm:py-6">
          {capabilities.map(({ label, Icon }) => (
            <li key={label} className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-text-2">
              <Icon size={16} className="text-text-3" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
