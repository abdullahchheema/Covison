'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function WhatsAppWidget() {
  const message = encodeURIComponent("Hi! I'd like to talk about a project.")

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-canvas shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 ease-out hover:scale-105 hover:bg-white/90 focus-visible:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-white/25 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100" />
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  )
}
