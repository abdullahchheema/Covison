import type { Metadata } from 'next'
import { LegalPage } from '@/components/ui/LegalPage'
import { affiliate, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="September 2026">
      <p>
        These terms govern your use of covison.co, Covison CRM at crm.covison.com, and any
        services Covison provides. By accessing our website, creating a Covison CRM account, or
        engaging our services, you agree to these terms. Please read them carefully. If you are
        agreeing on behalf of a business, you confirm you have the authority to bind that business
        to these terms.
      </p>

      <h2>1. Company information</h2>
      <p>
        Covison is affiliated with {affiliate.name}, a company registered in {affiliate.country}{' '}
        under company number {affiliate.companyNumber}, with a registered address at{' '}
        {affiliate.address}.
      </p>

      <h2>2. Our services</h2>
      <p>
        Covison provides AI automation, custom software, cloud and data infrastructure, and
        logistics dispatching services to business clients, delivered under separately agreed
        project contracts or statements of work. Covison also builds and operates its own
        products, including Covison CRM, which is offered free of charge on the terms in this
        document and any product-specific terms shown at sign-up.
      </p>

      <h2>3. Client engagements</h2>
      <p>
        For paid services, the scope, deliverables, timeline, fees, and payment terms for a given
        engagement are set out in the applicable proposal, statement of work, or project
        agreement, which forms part of these terms for that engagement. If anything in a signed
        statement of work conflicts with this page, the statement of work controls for that
        engagement. Clients are responsible for providing accurate information, timely feedback,
        and any access or credentials reasonably required for us to deliver the work.
      </p>

      <h2>4. Covison CRM</h2>
      <p>
        Covison CRM is currently provided free of charge, with no trial period and no credit card
        required to create an account. You are responsible for maintaining the confidentiality of
        your account credentials and for all activity under your account. You agree not to use
        Covison CRM for any unlawful purpose, to store data you do not have the right to store, or
        to attempt to disrupt, reverse engineer, or gain unauthorized access to the platform. We
        may suspend or terminate accounts that violate these terms.
      </p>
      <p>
        Covison CRM is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We
        aim to keep it reliable and continuously improve it, but we do not guarantee uninterrupted
        availability, and we may update, change, or discontinue features from time to time.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        Upon full payment for a client project, the client receives full ownership of the
        deliverables produced specifically for that project, except for any pre-existing tools,
        libraries, or frameworks Covison owned before the engagement or develops for general use
        across clients, which Covison retains. Covison retains the right to reference completed
        work in its portfolio and marketing materials, including case studies, unless otherwise
        agreed in writing. All rights in Covison CRM, our website, and our brand remain the
        property of Covison and {affiliate.name}.
      </p>

      <h2>6. Confidentiality</h2>
      <p>
        Each party agrees to keep confidential any non-public information disclosed by the other
        party in connection with an engagement, and to use it only for the purposes of that
        engagement, except where disclosure is required by law.
      </p>

      <h2>7. Warranties and disclaimers</h2>
      <p>
        We perform paid services with reasonable skill and care. Other than as expressly stated in
        a signed statement of work, our services and Covison CRM are provided without warranties
        of any kind, express or implied, including any implied warranty of merchantability,
        fitness for a particular purpose, or non-infringement, to the fullest extent permitted by
        law.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Covison is not liable for indirect, incidental, or
        consequential damages arising from the use of our services or Covison CRM. For paid
        services, our total liability arising out of or relating to an engagement is limited to
        the total fees paid for that engagement. Because Covison CRM is provided free of charge,
        our total liability arising out of or relating to your use of Covison CRM is limited to
        the fullest extent permitted by law.
      </p>

      <h2>9. Termination</h2>
      <p>
        For paid engagements, either party may terminate in accordance with the terms of the
        applicable statement of work. For Covison CRM, you may stop using the product and delete
        your account at any time, and we may suspend or terminate accounts that violate these
        terms or if we discontinue the product, with reasonable notice where practicable.
      </p>

      <h2>10. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. Material changes will be reflected by an
        updated &ldquo;Last updated&rdquo; date at the top of this page, and continued use of our
        services or Covison CRM after changes take effect constitutes acceptance of the revised
        terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales, and any disputes arising from
        them will be subject to the exclusive jurisdiction of the courts of England and Wales,
        unless a signed statement of work specifies otherwise.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms? Email us at{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  )
}
