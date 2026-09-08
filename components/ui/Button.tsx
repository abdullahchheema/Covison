import Link from 'next/link'
import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'default' | 'outline' | 'secondary' | 'ghost' | 'soft' | 'destructive' | 'link'
type Size = 'sm' | 'default' | 'lg' | 'icon'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  /** Use when the button sits on the permanently-dark `--ink` plate (BrandPlate, Footer, dark CTA). */
  onInk?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
  'aria-label'?: string
}

const variantStyles: Record<Variant, string> = {
  default: 'bg-primary text-primary-foreground shadow-sm hover:bg-brand-hover',
  outline: 'border border-border bg-surface hover:bg-muted',
  secondary: 'bg-muted text-foreground hover:bg-surface-3',
  ghost: 'hover:bg-muted',
  soft: 'bg-brand-soft text-primary hover:bg-brand-soft/70',
  destructive: 'bg-danger text-danger-foreground shadow-sm hover:bg-danger/90',
  link: 'eyebrow gap-2 !text-foreground hover:!text-primary p-0 h-auto [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5',
}

const onInkVariantStyles: Record<Variant, string> = {
  default: 'bg-white text-ink hover:bg-white/90',
  outline: 'border border-white/20 text-white hover:bg-white/10',
  secondary: 'bg-white/10 text-white hover:bg-white/15',
  ghost: 'text-white/70 hover:text-white hover:bg-white/10',
  soft: 'bg-white/10 text-white hover:bg-white/15',
  destructive: 'bg-danger text-danger-foreground shadow-sm hover:bg-danger/90',
  link: 'eyebrow gap-2 !text-white hover:!text-brand-violet p-0 h-auto [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5',
}

const sizeStyles: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs',
  default: 'h-9 px-4 text-sm',
  lg: 'h-10 px-8 text-base',
  icon: 'h-9 w-9',
}

export function Button({
  children,
  href,
  onClick,
  variant = 'default',
  size = 'default',
  onInk = false,
  className,
  type = 'button',
  disabled = false,
  external = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const isLink = variant === 'link'
  const classes = cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
    onInk ? onInkVariantStyles[variant] : variantStyles[variant],
    !isLink && sizeStyles[size],
    isLink && '[&_svg]:size-3.5',
    !isLink && '[&_svg]:size-4',
    className,
  )

  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
