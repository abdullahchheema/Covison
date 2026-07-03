'use client'

import { useState, ReactNode } from 'react'
import { useForm, type FieldError } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contactSchema, type ContactFormData } from '@/lib/validation'
import { budgetOptions } from '@/lib/site'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const fieldBase =
  'w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/40'

function fieldClass(hasError?: FieldError) {
  return cn(fieldBase, hasError ? 'border-red-500/50' : 'border-line-strong')
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: FieldError
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-ink/85">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400">{error.message}</p>}
    </div>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong')
      }
      setStatus('success')
      reset()
    } catch (e) {
      setStatus('error')
      setErrorMsg(e instanceof Error ? e.message : 'Please try again')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/5 px-8 py-16 text-center">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-semibold">Message received!</h3>
        <p className="text-sm text-muted">
          We&apos;ll get back to you within 24 hours. Alternatively, book a call directly using the
          scheduler.
        </p>
        <button onClick={() => setStatus('idle')} className="mt-3 text-sm text-ink underline">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <Field label="Full name *" error={errors.name}>
        <input
          {...register('name')}
          type="text"
          placeholder="Jane Smith"
          className={fieldClass(errors.name)}
        />
      </Field>

      <Field label="Work email *" error={errors.email}>
        <input
          {...register('email')}
          type="email"
          placeholder="jane@company.com"
          className={fieldClass(errors.email)}
        />
      </Field>

      <Field label="Company *" error={errors.company}>
        <input
          {...register('company')}
          type="text"
          placeholder="Acme Corp"
          className={fieldClass(errors.company)}
        />
      </Field>

      <Field label="Budget range *" error={errors.budget}>
        <select {...register('budget')} className={cn(fieldClass(errors.budget), 'cursor-pointer')}>
          {budgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about your project *" error={errors.message}>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Describe your business, what you're looking to automate or build, and any specific goals or timelines..."
          className={cn(fieldClass(errors.message), 'resize-y')}
        />
      </Field>

      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.08] p-4">
          <AlertCircle size={16} className="text-red-400" />
          <p className="text-sm text-red-400">
            {errorMsg || 'Something went wrong. Please try again.'}
          </p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </Button>

      <p className="text-center text-xs text-faint">We respond within 24 hours. No spam, ever.</p>
    </form>
  )
}
