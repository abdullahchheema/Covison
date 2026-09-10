import { ArrowRight } from 'lucide-react'

type Step = string | { label: string; detail?: string }

/** Left-to-right flow diagram of labeled steps, e.g. a pipeline or workflow stage list. */
export function FlowSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {steps.map((step, i) => {
        const label = typeof step === 'string' ? step : step.label
        const detail = typeof step === 'string' ? undefined : step.detail
        return (
          <div key={label} className="flex items-center gap-3">
            <div className="flex-1 rounded-xl bg-surface-2 px-5 py-4 text-center sm:flex-none sm:w-48">
              <p className="text-sm font-medium text-foreground">{label}</p>
              {detail && <p className="mt-1 text-xs leading-snug text-text-2">{detail}</p>}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight size={18} className="hidden flex-shrink-0 text-text-3 sm:block" aria-hidden />
            )}
          </div>
        )
      })}
    </div>
  )
}
