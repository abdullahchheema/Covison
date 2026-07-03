import type { Metadata } from 'next'
import { LegalPage } from '@/components/ui/LegalPage'

export const metadata: Metadata = { title: 'Terms of Service' }

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="June 2026">
      <p>
        By accessing our website or engaging our services, you agree to these terms. Please read
        them carefully.
      </p>
      <h2>Services</h2>
      <p>
        Covison provides AI automation, website development, and consulting services to business
        clients under separately agreed project contracts or statements of work.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Upon full payment, clients receive full ownership of deliverables produced under their
        project. Covison retains the right to reference the work in a portfolio context.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        Covison is not liable for indirect, incidental, or consequential damages arising from the
        use of our services beyond the total fees paid for the relevant project.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href="mailto:hello@covison.co">hello@covison.co</a>.
      </p>
    </LegalPage>
  )
}
