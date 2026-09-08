import { ArrowRight } from 'lucide-react'

/** Left-to-right flow diagram of short labeled steps, e.g. a pipeline or workflow stage list. */
export function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <div className="flex-1 rounded-xl bg-surface-2 px-5 py-4 text-center text-sm font-medium text-foreground sm:flex-none sm:w-44">
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={18} className="hidden flex-shrink-0 text-text-3 sm:block" aria-hidden />
          )}
        </div>
      ))}
    </div>
  )
}
