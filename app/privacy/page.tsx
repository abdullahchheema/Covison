import type { Metadata } from 'next'
import { LegalPage } from '@/components/ui/LegalPage'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        Covison (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting
        your personal information. This policy explains what data we collect, how we use it, and your
        rights.
      </p>
      <h2>Data we collect</h2>
      <p>
        We collect information you provide directly (name, email, company, project details via our
        contact form) and basic analytics data (page views, referral sources) to improve our site.
      </p>
      <h2>How we use it</h2>
      <p>
        We use your information solely to respond to your inquiry and, with your consent, to send
        relevant updates about our services. We do not sell your data to third parties.
      </p>
      <h2>Contact</h2>
      <p>
        For any privacy questions, email us at <a href="mailto:hello@covison.co">hello@covison.co</a>
        .
      </p>
    </LegalPage>
  )
}
