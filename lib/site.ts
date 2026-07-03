export const siteConfig = {
  name: 'Covison',
  tagline: 'Build the future. Automate the rest.',
  description:
    'Covison designs AI-powered systems and exceptional digital experiences for B2B companies ready to operate at a higher level.',
  email: 'hello@covison.co',
  whatsapp: '923376044451',
  // Booking: set calLink to your real Cal.com path (e.g. 'covison/30min') and flip calConfigured to true.
  calLink: 'covison/strategy-call',
  calConfigured: false,
  url: 'https://covison.co',
}

export const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

export const services = [
  {
    id: 'consulting',
    icon: 'Lightbulb',
    title: 'AI Consulting & Strategy',
    short: 'Map your path to AI adoption with expert guidance.',
    description:
      'We audit your current operations, identify high-impact automation opportunities, and deliver a clear roadmap to competitive advantage. No fluff — just actionable insight tied to real business outcomes.',
    outcomes: ['AI readiness audit', 'Automation opportunity map', 'Prioritised roadmap', 'ROI projections'],
  },
  {
    id: 'automation',
    icon: 'Zap',
    title: 'AI Workflow Automation',
    short: 'Eliminate manual, repetitive work across your business.',
    description:
      'We build custom automations, intelligent agents, and system integrations that run around the clock without human intervention. Your team focuses on strategy while the machines handle the rest.',
    outcomes: ['Custom AI agents', 'System integrations', 'Process automation', '24/7 operation'],
  },
  {
    id: 'web',
    icon: 'Monitor',
    title: 'Website Design & Development',
    short: 'First impressions win or lose deals.',
    description:
      'We craft premium B2B websites and web applications that establish trust, communicate value, and convert visitors into qualified leads. Performance-optimised, beautifully designed, and built to grow.',
    outcomes: ['Custom design', 'Next.js / React', 'CMS integration', 'Conversion-focused'],
  },
  {
    id: 'chatbots',
    icon: 'MessageSquare',
    title: 'AI Chatbots & Assistants',
    short: 'Deploy intelligent assistants that never clock out.',
    description:
      'We build AI assistants that handle customer inquiries, onboard new clients, and surface internal knowledge — trained on your business data and available 24/7. Your best team member, always on.',
    outcomes: ['Custom AI training', 'CRM integration', 'Multi-channel deploy', 'Analytics dashboard'],
  },
  {
    id: 'lead-generation',
    icon: 'Target',
    title: 'AI Lead Generation',
    short: 'Fill your pipeline with qualified prospects, not cold names.',
    description:
      'We build AI-powered prospecting and outbound systems that identify, enrich, and engage your ideal buyers at scale — so your sales team spends time closing, not searching.',
    outcomes: [
      'Ideal customer profiling',
      'Automated prospecting',
      'Personalised outreach',
      'Qualified pipeline growth',
    ],
  },
  {
    id: 'ai-agents',
    icon: 'Bot',
    title: 'Custom AI Agents',
    short: 'Purpose-built agents that execute real work, not just chat.',
    description:
      'We design and deploy autonomous AI agents tailored to your business logic — handling research, data entry, decision-making, and multi-step tasks that used to require a human in the loop.',
    outcomes: ['Task-specific agent design', 'Multi-step reasoning', 'Tool & API integration', 'Human-in-the-loop controls'],
  },
  {
    id: 'crm-sales',
    icon: 'Users',
    title: 'CRM & Sales Automation',
    short: 'A sales engine that follows up so nothing falls through.',
    description:
      'We automate your CRM from first touch to closed deal — syncing leads, triggering follow-ups, and giving your sales team a single source of truth instead of scattered spreadsheets.',
    outcomes: ['CRM setup & cleanup', 'Automated follow-ups', 'Deal pipeline automation', 'Sales reporting dashboards'],
  },
  {
    id: 'workshops',
    icon: 'GraduationCap',
    title: 'AI Workshops',
    short: 'Get your team fluent in AI, fast.',
    description:
      'We run hands-on workshops that teach your team how to actually use AI in their day-to-day work — from prompting and tooling to spotting the next automation opportunity themselves.',
    outcomes: ['Team training sessions', 'Hands-on AI tooling', 'Custom playbooks', 'Ongoing support access'],
  },
]

export const industries = [
  {
    id: 'education',
    icon: 'GraduationCap',
    title: 'Education',
    description:
      'We help education businesses turn scattered content and manual support into a system that runs on its own. Students get onboarded automatically, common questions get answered instantly, and engagement stays high without a full-time community team behind it.',
    tags: ['Community Automation', 'AI Curriculum', 'Student Engagement'],
  },
  {
    id: 'content-media',
    icon: 'SquarePen',
    title: 'Content writing & media',
    description:
      'Content teams live and die by output. We build AI writing and editing pipelines that speed up production without flattening the voice, along with the workflow tools that keep writers, editors, and clients in sync as volume grows.',
    tags: ['AI Content Generation', 'Editorial Workflows', 'Writer Management'],
  },
  {
    id: 'ppc-agencies',
    icon: 'Target',
    title: 'PPC agencies',
    description:
      'Managing dozens of ad accounts by hand does not scale. We build bid management automation, AI-assisted copy testing, and reporting dashboards that pull performance data from every platform into one place, so account managers spend less time in spreadsheets and more time on strategy.',
    tags: ['Bid Automation', 'Ad Copy AI', 'Cross-Platform Reporting'],
  },
  {
    id: 'digital-marketing',
    icon: 'Megaphone',
    title: 'Digital marketing agencies',
    description:
      'Agencies grow fastest when the repetitive parts run themselves. We build cold outbound systems, client onboarding flows, and automated reporting that give your team room to focus on strategy and client relationships instead of admin work.',
    tags: ['Cold Email', 'Client Onboarding', 'AI Reporting'],
  },
  {
    id: 'dental-healthcare',
    icon: 'Stethoscope',
    title: 'Dental & healthcare',
    description:
      'Patient acquisition is not like typical lead generation. Sales cycles run longer, compliance matters more, and trust has to be earned before anyone books an appointment. We build outbound systems and ad optimization tools for dental practices and healthcare providers that respect those constraints while still filling the calendar.',
    tags: ['Patient Lead Gen', 'PPC Optimization', 'CRM Automation'],
  },
  {
    id: 'ai-automation-agencies',
    icon: 'Cpu',
    title: 'AI & automation agencies',
    description:
      'Some of our best work happens behind the scenes for other agencies. We build white-label AI systems and delivery infrastructure that partner agencies rebrand and resell, so they can offer automation services without building the backend themselves.',
    tags: ['White-Label AI', 'Partner Delivery', 'Resellable Automations'],
  },
  {
    id: 'creative-agencies',
    icon: 'Zap',
    title: 'Creative agencies',
    description:
      'Creative teams do not need AI to replace their judgment, they need it to handle the repetitive parts. We build ad creation workflows, copywriting automation, and creative brief generators that let teams test more variations in less time.',
    tags: ['Ad Creation AI', 'Copywriting Automation', 'Creative Briefs'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce',
    description:
      'Online stores generate more data than most teams can act on by hand. We build product recommendation engines, automated email flows, and inventory forecasting tools that turn that data into fewer stockouts, higher average order value, and less manual support work.',
    tags: ['Email Automation', 'Product AI', 'Customer Support Bots'],
  },
  {
    id: 'software-saas',
    icon: 'CodeXml',
    title: 'Software & SaaS companies',
    description:
      'Growth in SaaS comes from activation and retention as much as new signups. We build onboarding automation, churn prediction models, and support systems that help product-led teams get users to value faster and keep them around longer.',
    tags: ['PLG Automation', 'Churn Prediction', 'AI Onboarding'],
  },
  {
    id: 'investment-finance',
    icon: 'TrendingUp',
    title: 'Investment & finance',
    description:
      'Fund managers need clean, current numbers more than they need another dashboard nobody trusts. We build portfolio analysis tools, automated reporting pipelines, and investor communication systems that keep data accurate and reports on schedule.',
    tags: ['Data Pipelines', 'Automated Reporting', 'Investor CRM'],
  },
  {
    id: 'brokers-financial-services',
    icon: 'Landmark',
    title: 'Brokers & financial services',
    description:
      'Financial services move slowly because compliance has to come first. We build onboarding automation, document processing, and outbound systems designed around KYC requirements, so deals close faster without cutting corners.',
    tags: ['KYC Automation', 'Document Processing', 'Outbound Compliance'],
  },
  {
    id: 'linkedin-social-media',
    icon: 'Share2',
    title: 'LinkedIn & social media agencies',
    description:
      'Growing an audience takes a consistency most teams cannot sustain by hand. We build outreach automation, AI-assisted ghostwriting, and engagement systems that help social and LinkedIn-focused agencies scale output without burning out their team.',
    tags: ['Outreach Automation', 'AI Ghostwriting', 'Audience Growth'],
  },
  {
    id: 'managed-service-providers',
    icon: 'Server',
    title: 'Managed service providers',
    description:
      'MSPs live or die by response time. We build ticket triage automation, client health scoring, and SLA reporting that catch problems earlier and free up technicians to focus on the tickets that actually need a human.',
    tags: ['Ticket Triage AI', 'Client Health Scoring', 'SLA Automation'],
  },
  {
    id: 'real-estate-development',
    icon: 'Building2',
    title: 'Real estate development',
    description:
      'Development deals involve a lot of moving pieces, investors, pre-sale units, and shifting market data. We build CRM automation, deal flow tracking, and market analysis tools that keep it all organized and easy to act on.',
    tags: ['Investor CRM', 'Deal Flow Tracking', 'Market Analysis AI'],
  },
  {
    id: 'local-services',
    icon: 'MapPin',
    title: 'Local services',
    description:
      'Home service businesses often lose leads simply because nobody followed up fast enough. We build lead generation and booking automation for contractors, cleaning companies, and landscapers that keeps the calendar full without anyone manning the phones all day.',
    tags: ['Google Maps Scraping', 'Booking Automation', 'Review Management'],
  },
  {
    id: 'photography-agencies',
    icon: 'Camera',
    title: 'Photography agencies',
    description:
      'Between shoots, edits, and client delivery, photography studios have a lot to coordinate. We build scheduling systems, client delivery portals, and outbound pipelines that help studios book more corporate and wedding work without adding administrative overhead.',
    tags: ['Scheduling Systems', 'Client Portals', 'Outbound Lead Gen'],
  },
  {
    id: 'enterprise-corporate',
    icon: 'Briefcase',
    title: 'Enterprise & corporate',
    description:
      'Large organizations need systems that hold up across departments, data sources, and approval chains. We build custom integrations and AI strategy support for enterprise teams working with complex infrastructure and high stakes.',
    tags: ['Enterprise Integrations', 'AI Strategy', 'Data Infrastructure'],
  },
  {
    id: 'hospitality-luxury',
    icon: 'Coffee',
    title: 'Hospitality & luxury',
    description:
      'Guests expect a personal touch even when a system is doing the work. We build concierge automation and booking systems for hospitality and luxury travel brands that keep service consistent without ever feeling automated.',
    tags: ['Concierge AI', 'VIP Management', 'Booking Automation'],
  },
  {
    id: 'hr-recruiting',
    icon: 'Users',
    title: 'HR & recruiting',
    description:
      'Screening candidates by hand does not scale past a handful of open roles. We build AI-assisted screening, interview scheduling, and pipeline tools that help recruiting teams move faster without lowering their bar.',
    tags: ['Candidate Screening AI', 'Interview Scheduling', 'Pipeline Automation'],
  },
  {
    id: 'info-products',
    icon: 'Download',
    title: 'Info products',
    description:
      'Course creators and digital product businesses live or die by retention. We build onboarding sequences and content delivery systems that keep customers engaged well past the first purchase, turning one-time buyers into repeat ones.',
    tags: ['Funnel Automation', 'Onboarding Sequences', 'Retention Systems'],
  },
  {
    id: 'coaching-consulting',
    icon: 'CircleCheckBig',
    title: 'Coaching & consulting',
    description:
      'High-touch service is hard to scale without losing what makes it valuable. We build client intake automation and progress-tracking dashboards that let coaches and consultants take on more clients without stretching themselves thin.',
    tags: ['Client Intake AI', 'Discovery Automation', 'Progress Dashboards'],
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We audit your operations, map bottlenecks, and identify where AI creates the most measurable value for your business.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We design and develop your custom AI systems or website using best-in-class tools and proven engineering practices.',
  },
  {
    number: '03',
    title: 'Automate',
    description:
      'We deploy, integrate, and rigorously test your solution against real business conditions before going live.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'We monitor, iterate, and extend your systems as your business evolves — continuously improving ROI.',
  },
]

export const stats = [
  { value: '10+', label: 'Businesses transformed' },
  { value: '500+', label: 'Hours saved per client monthly' },
  { value: '98%', label: 'Client satisfaction rate' },
  { value: '4×', label: 'Average ROI in first 90 days' },
]

export const testimonials = [
  {
    quote:
      'Covison automated our entire onboarding workflow. What used to take our team 3 hours now runs in minutes, flawlessly. The ROI was visible within two weeks.',
    name: 'Sarah K.',
    role: 'Operations Director',
    company: 'CloudBase Systems',
  },
  {
    quote:
      'The website they built converted 2× better than our previous one in the first month alone. Clear ROI from day one, with a design that finally matches our brand ambitions.',
    name: 'Marcus D.',
    role: 'Founder & CEO',
    company: 'Vantage Analytics',
  },
  {
    quote:
      "Their AI strategy work was an eye-opener. We found six automation opportunities we'd never considered — and Covison built three of them within the same engagement.",
    name: 'Priya N.',
    role: 'Head of Growth',
    company: 'Lumio Health',
  },
]

export const faq = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We work with B2B companies across industries — from startups to established enterprises — that want to leverage AI to grow faster, operate leaner, and deliver better client experiences.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary by scope. An AI automation project typically takes 2–4 weeks. A full website build runs 3–6 weeks. Strategy engagements are usually 1–2 weeks. We\'ll give you a clear timeline before we start.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. We offer ongoing maintenance, optimisation, and support retainers so your systems keep improving as your business evolves.',
  },
  {
    question: "What's your process for getting started?",
    answer:
      'Book a free 30-minute strategy call. We\'ll learn about your business, identify the highest-leverage opportunities, and propose a tailored plan with clear deliverables and transparent pricing.',
  },
  {
    question: 'Can you work with our existing tools and platforms?',
    answer:
      'Absolutely. We integrate with your existing stack — CRM, ERP, communication tools, databases — and build around what you already use wherever possible.',
  },
]

export const caseStudies = [
  {
    tag: 'Workflow Automation',
    client: 'E-commerce Brand',
    title: 'Automated Order Processing & Fulfilment',
    result: '87% reduction in manual processing time',
    description:
      'Built an end-to-end AI pipeline that reads incoming orders, triggers warehouse logic, syncs inventory, and sends customer updates — all without human intervention.',
    metrics: [
      { value: '87%', label: 'Less manual work' },
      { value: '3 hrs', label: 'Saved daily' },
      { value: '0', label: 'Processing errors' },
    ],
  },
  {
    tag: 'Website Development',
    client: 'B2B SaaS Company',
    title: 'Full Brand & Website Relaunch',
    result: '2.4× increase in demo requests',
    description:
      'Redesigned and rebuilt their marketing site from the ground up — new brand identity, conversion-focused copy, and a polished Next.js build that loads in under 1 second.',
    metrics: [
      { value: '2.4×', label: 'More demo requests' },
      { value: '<1s', label: 'Page load time' },
      { value: '94', label: 'Lighthouse score' },
    ],
  },
  {
    tag: 'AI Chatbot',
    client: 'Professional Services Firm',
    title: 'AI Client Assistant Deployment',
    result: '340+ hours saved per month',
    description:
      'Deployed a custom AI assistant trained on their internal knowledge base to handle tier-1 client inquiries, freeing their team for high-value advisory work.',
    metrics: [
      { value: '340+', label: 'Hours saved/month' },
      { value: '24/7', label: 'Availability' },
      { value: '91%', label: 'Resolution rate' },
    ],
  },
  {
    tag: 'AI Consulting & Strategy',
    client: 'Manufacturing Company',
    title: 'AI Readiness Audit & Automation Roadmap',
    result: '$180K in projected annual savings identified',
    description:
      'Audited operations across three departments, mapped every manual process to an automation opportunity, and delivered a phased roadmap leadership could act on immediately.',
    metrics: [
      { value: '12', label: 'Opportunities identified' },
      { value: '$180K', label: 'Projected annual savings' },
      { value: '6 wks', label: 'Audit to roadmap' },
    ],
  },
  {
    tag: 'AI Lead Generation',
    client: 'B2B Marketing Agency',
    title: 'Outbound Prospecting System Overhaul',
    result: '3.1x more qualified meetings booked',
    description:
      'Replaced manual list-building and generic outreach with an AI-driven prospecting engine that identifies, enriches, and personalises outreach to ideal-fit accounts at scale.',
    metrics: [
      { value: '3.1x', label: 'Qualified meetings' },
      { value: '68%', label: 'Reply rate lift' },
      { value: '40 hrs', label: 'Saved per month' },
    ],
  },
  {
    tag: 'Custom AI Agents',
    client: 'Logistics Company',
    title: 'Autonomous Shipment Tracking Agent',
    result: '95% of exceptions resolved without a human',
    description:
      'Built a custom agent that monitors shipments across carriers, flags exceptions, and resolves them automatically via carrier APIs — only escalating the cases that truly need a person.',
    metrics: [
      { value: '95%', label: 'Exceptions auto-resolved' },
      { value: '4.5x', label: 'Faster response time' },
      { value: '0', label: 'Added headcount' },
    ],
  },
  {
    tag: 'CRM & Sales Automation',
    client: 'Financial Services Firm',
    title: 'End-to-End CRM Rebuild & Follow-Up Automation',
    result: '52% faster average deal cycle',
    description:
      'Rebuilt their CRM pipeline from the ground up, connected it to email and calendar, and automated every follow-up touchpoint so no lead waited on a rep to remember them.',
    metrics: [
      { value: '52%', label: 'Faster deal cycle' },
      { value: '0', label: 'Leads gone cold' },
      { value: '3x', label: 'Rep capacity' },
    ],
  },
  {
    tag: 'AI Workshops',
    client: 'Regional Real Estate Team',
    title: 'Team-Wide AI Adoption Workshop Series',
    result: '80% of staff using AI tools daily within 30 days',
    description:
      'Ran a hands-on workshop series covering prompting, tooling, and workflow design tailored to their day-to-day work, followed by office hours to lock in adoption.',
    metrics: [
      { value: '80%', label: 'Daily AI tool usage' },
      { value: '4', label: 'Workshops delivered' },
      { value: '30 days', label: 'To full adoption' },
    ],
  },
]

export const budgetOptions = [
  { value: '', label: 'Select a budget range' },
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-15k', label: '$5,000 – $15,000' },
  { value: '15k-30k', label: '$15,000 – $30,000' },
  { value: '30k-plus', label: '$30,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
]
