export const siteConfig = {
  name: 'Covison',
  tagline: 'Build the future. Automate the rest.',
  description:
    'Covison designs AI automation systems and exceptional digital experiences for B2B companies ready to operate at a higher level.',
  email: 'hello@covison.co',
  whatsapp: '447417579231',
  calLink: 'covison/30min',
  url: 'https://covison.co',
  // Left empty until a company LinkedIn page exists; Footer renders no icon until this is set.
  linkedin: '',
}

// Covison is affiliated with this UK-registered company, and operates from
// its registered address. Referenced in the footer, About page, and legal
// pages.
export const affiliate = {
  name: 'Prime Galleria Ltd',
  companyNumber: '16604562',
  address: '29 Spring Street, Accrington, BBE0HE',
  country: 'United Kingdom',
  phone: '+44 7417 579231',
}

export const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'Covison CRM', href: '/products/crm' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Our Process', href: '/process' },
    { label: 'Insights', href: '/insights' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Results & Reviews', href: '/results' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export const serviceCategories = [
  {
    id: 'ai-automation',
    label: 'AI & Automation',
    icon: 'Sparkles',
    description: 'Strategy, agents, chatbots, lead gen, CRM automation, and hands-on training.',
  },
  {
    id: 'software-digital',
    label: 'Software & Digital',
    icon: 'Code2',
    description: 'Websites, custom platforms, e-commerce, and the integrations that connect them.',
  },
  {
    id: 'infrastructure-data',
    label: 'Infrastructure & Data',
    icon: 'Server',
    description: 'Cloud architecture, DevOps, and the data pipelines your systems run on.',
  },
  {
    id: 'logistics',
    label: 'Logistics',
    icon: 'Truck',
    description: 'Freight dispatching for owner-operators and small fleets.',
  },
] as const

export const services = [
  {
    id: 'consulting',
    icon: 'Lightbulb',
    category: 'ai-automation',
    title: 'AI Consulting & Strategy',
    short: 'Map your path to AI adoption with expert guidance.',
    description:
      'We audit your current operations, identify high-impact automation opportunities, and deliver a clear roadmap to competitive advantage. No fluff, just actionable insight tied to real business outcomes.',
    problem:
      'Most businesses know AI is important but have no clear plan for where to start or how to prioritise.',
    details: [
      'Comprehensive AI readiness audit of your current operations',
      'Identification of your top 3–5 automation opportunities by ROI',
      'Detailed technical and business roadmap with phased delivery',
      'Vendor and tooling recommendations tailored to your stack',
      'Executive presentation deck for stakeholder alignment',
    ],
    outcomes: ['AI readiness audit', 'Automation opportunity map', 'Prioritised roadmap', 'ROI projections'],
  },
  {
    id: 'automation',
    icon: 'Zap',
    category: 'ai-automation',
    title: 'AI Workflow Automation',
    short: 'Eliminate manual, repetitive work across your business.',
    description:
      'We build custom automations, intelligent agents, and system integrations that run around the clock without human intervention. Your team focuses on strategy while the machines handle the rest.',
    problem:
      "Manual, repetitive tasks drain your team's time, introduce errors, and create a ceiling on your capacity to scale.",
    details: [
      'Custom AI agent development for your specific workflows',
      'Integration with your existing tools (CRM, ERP, comms, databases)',
      'Automated data pipelines, reporting, and notifications',
      'End-to-end testing and deployment to production',
      'Monitoring dashboards and ongoing optimisation support',
    ],
    outcomes: ['Custom AI agents', 'System integrations', 'Process automation', '24/7 operation'],
  },
  {
    id: 'web',
    icon: 'Monitor',
    category: 'software-digital',
    title: 'Website Design & Development',
    short: 'First impressions win or lose deals.',
    description:
      'We craft premium B2B websites and web applications that establish trust, communicate value, and convert visitors into qualified leads. Performance-optimised, beautifully designed, and built to grow.',
    problem:
      'Generic websites fail to convert B2B buyers. You need a site that communicates your value with precision and drives qualified action.',
    details: [
      'Custom brand identity and UX design (no templates)',
      'Next.js / React development, optimised for speed and SEO',
      'CMS integration for easy content management (Sanity, Contentful)',
      'Conversion-focused landing pages and lead capture flows',
      'Analytics setup, A/B testing readiness, and performance monitoring',
    ],
    outcomes: ['Custom design', 'Next.js / React', 'CMS integration', 'Conversion-focused'],
  },
  {
    id: 'chatbots',
    icon: 'MessageSquare',
    category: 'ai-automation',
    title: 'AI Chatbots & Assistants',
    short: 'Deploy intelligent assistants that never clock out.',
    description:
      'We build AI assistants that handle customer inquiries, onboard new clients, and surface internal knowledge, trained on your business data and available 24/7. Your best team member, always on.',
    problem:
      'Your team spends hours answering the same questions. Prospects don\'t get answers fast enough, and internal knowledge is siloed.',
    details: [
      'Custom AI training on your products, FAQs, and internal docs',
      'Multi-channel deployment (website, Slack, email, WhatsApp)',
      'CRM integration to capture and qualify leads automatically',
      'Escalation flows to route complex queries to human agents',
      'Analytics on resolution rate, topic trends, and satisfaction',
    ],
    outcomes: ['Custom AI training', 'CRM integration', 'Multi-channel deploy', 'Analytics dashboard'],
  },
  {
    id: 'lead-generation',
    icon: 'Target',
    category: 'ai-automation',
    title: 'AI Lead Generation',
    short: 'Fill your pipeline with qualified prospects, not cold names.',
    description:
      'We build AI-powered prospecting and outbound systems that identify, enrich, and engage your ideal buyers at scale, so your sales team spends time closing, not searching.',
    problem:
      'Manual prospecting is slow and inconsistent, and generic outreach gets ignored, leaving your pipeline unpredictable and your sales team chasing the wrong accounts.',
    details: [
      'Ideal customer profile and target account research',
      'Automated prospecting across multiple data sources',
      'AI-personalised outreach sequences at scale',
      'Lead scoring and qualification before handoff to sales',
      'Ongoing pipeline reporting and campaign optimisation',
    ],
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
    category: 'ai-automation',
    title: 'Custom AI Agents',
    short: 'Purpose-built agents that execute real work, not just chat.',
    description:
      'We design and deploy autonomous AI agents tailored to your business logic: handling research, data entry, decision-making, and multi-step tasks that used to require a human in the loop.',
    problem:
      'Off-the-shelf AI tools handle simple prompts but fall short on real, multi-step business processes that require judgment, context, and reliable execution.',
    details: [
      'Agent architecture mapped to your specific workflows',
      'Integration with internal tools, APIs, and data sources',
      'Multi-step reasoning and decision logic, not just single replies',
      'Guardrails and human-in-the-loop checkpoints where it matters',
      'Continuous monitoring and agent performance tuning',
    ],
    outcomes: ['Task-specific agent design', 'Multi-step reasoning', 'Tool & API integration', 'Human-in-the-loop controls'],
  },
  {
    id: 'crm-sales',
    icon: 'Users',
    category: 'ai-automation',
    title: 'CRM & Sales Automation',
    short: 'A sales engine that follows up so nothing falls through.',
    description:
      'We automate your CRM from first touch to closed deal, syncing leads, triggering follow-ups, and giving your sales team a single source of truth instead of scattered spreadsheets.',
    problem:
      'Leads fall through the cracks when follow-up depends on memory, and disconnected tools mean your sales data never tells the full story.',
    details: [
      'CRM setup, migration, and pipeline structure design',
      'Automated lead routing and follow-up sequences',
      'Integration between CRM, email, calendar, and comms tools',
      'Deal-stage triggers and task automation for reps',
      'Live sales dashboards and forecasting reports',
    ],
    outcomes: ['CRM setup & cleanup', 'Automated follow-ups', 'Deal pipeline automation', 'Sales reporting dashboards'],
  },
  {
    id: 'workshops',
    icon: 'GraduationCap',
    category: 'ai-automation',
    title: 'AI Workshops',
    short: 'Get your team fluent in AI, fast.',
    description:
      'We run hands-on workshops that teach your team how to actually use AI in their day-to-day work: from prompting and tooling to spotting the next automation opportunity themselves.',
    problem:
      'Most teams have access to AI tools but no real training, so adoption stalls, usage stays surface-level, and the ROI never materialises.',
    details: [
      "Live, hands-on workshops tailored to your team's roles and tools",
      'Practical exercises using your real workflows and data',
      'Custom AI usage playbooks your team keeps after the session',
      'Prompting, tooling, and workflow-design best practices',
      'Follow-up office hours to reinforce adoption',
    ],
    outcomes: ['Team training sessions', 'Hands-on AI tooling', 'Custom playbooks', 'Ongoing support access'],
  },
  {
    id: 'software',
    icon: 'Boxes',
    category: 'software-digital',
    title: 'Custom Software & Platforms',
    short: 'Build software around the way your business actually works.',
    description:
      'We design and build custom software, internal tools, and business applications tailored to how your team actually operates, not how a generic SaaS template assumes you operate. From first architecture decision to production deployment.',
    problem:
      'Off-the-shelf software forces your team to adapt to its workflow instead of the other way around, and by the time you have bolted on enough workarounds, you are paying for a tool that barely fits.',
    details: [
      'Custom business applications and internal tools built around your actual processes',
      'SaaS platform design and development from architecture to launch',
      'API design and development for internal and external use',
      'Database-backed applications built on a schema that matches your business logic',
      'Legacy system modernisation and migration to a maintainable stack',
    ],
    outcomes: ['Custom business applications', 'API development', 'Database architecture', 'Legacy modernisation'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingBag',
    category: 'software-digital',
    title: 'E-commerce & Digital Commerce',
    short: 'Build digital commerce experiences designed to sell and scale.',
    description:
      'We build and optimise e-commerce platforms, from custom storefronts to Shopify builds, engineered around conversion, not just aesthetics. Every integration, from payments to inventory, is wired to keep orders moving without manual intervention.',
    problem:
      'A store that looks good but checks out poorly, syncs inventory by hand, or cannot talk to your other systems costs you sales every day it stays that way.',
    details: [
      'Custom e-commerce platforms and Shopify development',
      'Payment gateway integration and checkout optimisation',
      'Inventory and order management system integration',
      'Automated order workflows from purchase to fulfilment',
      'Conversion-focused customer experience design',
    ],
    outcomes: ['Custom commerce builds', 'Payment integrations', 'Order automation', 'Conversion optimisation'],
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    category: 'infrastructure-data',
    title: 'Cloud & DevOps',
    short: 'Build the infrastructure your digital systems need to scale.',
    description:
      'We design cloud architecture, manage migrations, and build the CI/CD pipelines and monitoring that keep your systems reliable as usage grows. Infrastructure that scales with you instead of becoming the thing that breaks first.',
    problem:
      'Systems that were fine at low volume start failing under real usage, and without proper infrastructure and monitoring in place, you find out about it from your customers instead of your dashboards.',
    details: [
      'Cloud architecture design across AWS, GCP, and Azure',
      'Cloud migration from on-premise or legacy hosting',
      'CI/CD pipeline setup for reliable, repeatable deployments',
      'Infrastructure automation and infrastructure-as-code',
      'Application monitoring, alerting, and cost optimisation',
    ],
    outcomes: ['Cloud architecture', 'CI/CD pipelines', 'Infrastructure automation', 'Monitoring & optimisation'],
  },
  {
    id: 'data',
    icon: 'Database',
    category: 'infrastructure-data',
    title: 'Data Engineering & Analytics',
    short: 'Turn disconnected business data into infrastructure you can build on.',
    description:
      'We design data pipelines, warehouses, and reporting systems that turn scattered data across your tools into a single, reliable source of truth, the same foundation your future AI systems will need to actually work.',
    problem:
      'Data spread across a dozen tools with no pipeline connecting them means every report is a manual export, and any AI or automation you build on top of it inherits the same mess.',
    details: [
      'Data pipeline design and integration across your existing tools',
      'Data warehouse architecture built for how your team actually queries it',
      'Business intelligence dashboards and reporting systems',
      'Database architecture and schema design',
      'AI-ready data infrastructure for future automation and analytics',
    ],
    outcomes: ['Data pipelines', 'Data warehousing', 'BI dashboards', 'AI-ready infrastructure'],
  },
  {
    id: 'integration',
    icon: 'Plug',
    category: 'software-digital',
    title: 'IT Integration & Digital Systems',
    short: 'Connect the systems your business already depends on.',
    description:
      'We connect your CRM, ERP, e-commerce, payment, and internal tools so they operate as one system instead of a dozen disconnected ones, each requiring someone to manually move data between them.',
    problem:
      'Every tool your business runs on holds a piece of the picture, and when none of them talk to each other, someone on your team becomes the integration layer, copying data by hand and hoping nothing falls out of sync.',
    details: [
      'API integration between CRM, ERP, and internal systems',
      'E-commerce and payment platform integration',
      'Cross-platform workflow synchronisation',
      'Legacy system integration with modern tools',
      'Ongoing monitoring to catch sync failures before they cost you data',
    ],
    outcomes: ['API integrations', 'System synchronisation', 'Cross-platform workflows', 'Legacy connectivity'],
  },
  {
    id: 'truck-dispatching',
    icon: 'Truck',
    category: 'logistics',
    title: 'Truck Dispatching',
    short: 'Experienced freight dispatch support built for owner-operators and small fleets who want to earn more and stress less.',
    description:
      'With over 10 years in the industry and 200+ carriers served, we handle dispatching, brokerage, authority support, and factoring connections so you can stay focused on driving. We work on an 8% commission basis, so you only pay when you earn: no upfront cost, no flat fees.',
    problem:
      'Every hour spent hunting load boards, chasing broker callbacks, or waiting unpaid on Net-30 is money you are not making on the road.',
    details: [
      'Freight dispatching: sourcing and booking loads, negotiating rates, and managing broker and shipper communication',
      'Freight brokerage: connecting carriers directly with vetted freight opportunities through our broker network',
      'MC authority setup and support: helping carriers get authority in place and stay compliant',
      'Factoring services: connecting carriers with fast-pay factoring solutions instead of waiting on Net-30',
      'Rate and lane optimization: maximizing dollars-per-mile through smart lane selection and negotiation',
      'Backhaul and overhaul planning: minimizing empty miles with advance reload planning',
      'Detention prevention: proactive scheduling and communication to cut wait times and protect earnings',
      "Broker vetting: screening every broker's authority, bond status, credit score, and payment history before booking",
    ],
    outcomes: [
      '10+ years of experience',
      '200+ carriers served',
      '8% commission, paid only when you earn',
      'Less deadhead, more earnings',
    ],
  },
]

/** Resolves case-study `tags` (service ids) to their full service records, dropping any that don't match. */
export function getServicesByIds(ids: string[]) {
  return ids
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => Boolean(s))
}

// Covison's own products, distinct from client services. Each gets a
// dedicated page at /products/<id> with its own rich content, not the
// service-detail template.
export const products = [
  {
    id: 'crm',
    title: 'Covison CRM',
    tagline: 'Your sales pipeline, finally working as one.',
    short: 'Manage leads, relationships, follow-ups, and sales workflows from one unified workspace.',
    free: true,
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
      'We monitor, iterate, and extend your systems as your business evolves, continuously improving ROI.',
  },
]

export const stats = [
  { value: '14', label: 'Focused service lines' },
  { value: '21', label: 'Industries served' },
  { value: '4', label: 'Step delivery process' },
  { value: '3', label: 'Partners, no hand-offs' },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

// No client testimonials yet; Testimonials renders a placeholder state until
// clients agree to be quoted. Do not fabricate quotes, names or companies here.
export const testimonials: Testimonial[] = []

export const faq = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We work with B2B companies across industries, from startups to established enterprises, that want to leverage AI to grow faster, operate leaner, and deliver better client experiences.',
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
      'Absolutely. We integrate with your existing stack: CRM, ERP, communication tools, databases, and build around what you already use wherever possible.',
  },
]

export const team = [
  {
    name: 'Abdullah Imran',
    role: 'Co-Founder',
    education: 'SE @ SEECS',
    linkedin: 'https://www.linkedin.com/in/abdullahimr403/',
    bio: ['Handles the technical direction at Covison, turning ideas into reliable products, systems, and digital experiences.'],
  },
  {
    name: 'Saad Rabbani',
    role: 'Co-Founder',
    education: 'EE @ SEECS',
    linkedin: 'https://www.linkedin.com/in/saad-rabbani-a35208289/',
    bio: ["Shapes the strategy behind Covison’s work, connecting business goals with practical solutions that create real value."],
  },
  {
    name: 'Muhammad Ali Murtaza',
    role: 'Co-Founder',
    education: 'BBA @ NBS',
    linkedin: 'https://www.linkedin.com/in/muhammad-ali-murtaza60/',
    bio: ['Leads business and growth at Covison, building relationships, shaping the brand, and turning opportunities into long-term partnerships.'],
  },
]

export interface InsightPost {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  author: string
  readingTime?: string
  /** Set when a post is also featured on a product page (e.g. 'crm' surfaces it on /products/crm). */
  relatedProduct?: string
  /** Reuses an existing case-study image (abstract, client-agnostic) rather than a dedicated /images/insights/ asset. */
  image: string
  /** Full article body, rendered as H2 sections on the post's own page. */
  body: { heading: string; paragraphs: string[] }[]
}

export const posts: InsightPost[] = [
  {
    slug: 'why-modern-businesses-are-moving-beyond-traditional-crms',
    title: 'Why modern businesses are moving beyond traditional CRMs',
    category: 'Sales Ops',
    date: 'September 2026',
    excerpt:
      'Traditional CRMs were built to store contact records. Modern sales teams need something that actively works the pipeline with them, not just logs what already happened.',
    author: 'Covison Team',
    readingTime: '4 min read',
    relatedProduct: 'crm',
    image: '/images/work/smallbiz-acquisitions-crm-daily-ai-qualification.png',
    body: [
      {
        heading: 'The CRM as a filing cabinet',
        paragraphs: [
          'Traditional CRMs were designed to solve one problem: give a sales team a shared place to store contact records instead of scattering them across spreadsheets and inboxes. That was a real improvement over sticky notes and personal notebooks, and for a long time it was enough.',
          'But storing information and acting on it are two different jobs. A contact record only tells you what happened. It does not follow up when a lead goes quiet, flag a deal that has stalled, or nudge a rep before a renewal date slips past. Most CRMs still expect a human to notice all of that and act on it manually, every single day.',
        ],
      },
      {
        heading: 'What working the pipeline actually looks like',
        paragraphs: [
          'A modern CRM does not wait to be checked. It watches the pipeline continuously and takes the next obvious step on its own: sending a follow-up when a lead has not replied, moving a deal to the next stage once a condition is met, or surfacing the few accounts that need attention today instead of burying them in a list of two hundred.',
          'The difference is not a new dashboard. It is the system doing part of the job that used to depend entirely on someone remembering to do it.',
        ],
      },
      {
        heading: 'Why this shift is happening now',
        paragraphs: [
          'This was technically possible years ago, but it used to require custom engineering that only larger sales teams could justify. What has changed is that AI-assisted automation has made active follow-up and routing achievable without a dedicated ops team building it from scratch.',
          'That shift is why "CRM" increasingly means something closer to a sales operating system than a database with a search bar.',
        ],
      },
      {
        heading: 'What to look for if you are switching',
        paragraphs: [
          'If you are evaluating a move away from a traditional CRM, the question worth asking is not whether it stores everything you need. Almost every option on the market does that. Ask instead what it does automatically once the information is in there: does it follow up without being told to, does it flag risk before a deal is already lost, and does it give you one place to see the whole pipeline instead of five.',
          'That is the standard we built Covison CRM against, and it is free to use with no trial period and no credit card required, so it costs nothing to see whether it clears that bar for your own pipeline.',
        ],
      },
    ],
  },
  {
    slug: 'how-automated-follow-ups-prevent-leads-from-slipping-through-the-cracks',
    title: 'How automated follow-ups prevent leads from slipping through the cracks',
    category: 'Automation',
    date: 'September 2026',
    excerpt:
      "Most lost deals are not lost to a competitor, they are lost to silence. Automated follow-up sequences close the gap between interest and action.",
    author: 'Covison Team',
    readingTime: '3 min read',
    relatedProduct: 'crm',
    image: '/images/work/strong-franchise-lead-qualification-at-scale.png',
    body: [
      {
        heading: 'Most deals are lost to silence',
        paragraphs: [
          'When a deal falls through, it is tempting to assume a competitor won it. In practice, a lot more deals are lost to silence: a prospect showed real interest, a rep meant to follow up, and the moment passed. No one decided to lose the deal, it just was not followed up in time.',
          'Silence is a much harder problem to notice than a lost deal to a competitor, because there is no clear signal, just an inbox that quietly stops getting a reply.',
        ],
      },
      {
        heading: 'Why manual follow-up breaks down at volume',
        paragraphs: [
          "Following up on five leads by memory is manageable. Following up on fifty, on top of calls, demos, and everything else on a rep's plate, is where things start slipping, not because reps are careless but because memory was never a reliable system to build a sales process on.",
          'The leads most likely to fall through are not the ones that said no. They are the ones that went quiet after showing interest, exactly the ones worth the most effort to win back.',
        ],
      },
      {
        heading: 'What an automated sequence actually does',
        paragraphs: [
          'An automated follow-up sequence removes the dependency on someone remembering. When a lead goes quiet for a set number of days, the system sends the next message on its own, whether that is a check-in, a piece of useful content, or a direct nudge to schedule a call.',
          "The rep still owns the relationship and steps in the moment there is a real reply. The system's job is only to make sure silence never wins by default.",
        ],
      },
      {
        heading: 'Keeping it from feeling automated',
        paragraphs: [
          'The failure mode to avoid is a sequence that reads like it was written for everyone and sent to no one in particular. The fix is not to avoid automation, it is to make the follow-up specific: reference what the lead actually asked about, keep the tone conversational, and stop the sequence the instant a real reply comes in.',
          "That is the exact gap Covison CRM's automated follow-ups are built to close, and because it is free to use, testing it against your own pipeline costs nothing but the time it takes to set up a sequence.",
        ],
      },
    ],
  },
  {
    slug: 'from-scattered-leads-to-one-intelligent-sales-pipeline',
    title: 'From scattered leads to one intelligent sales pipeline',
    category: 'Product',
    date: 'August 2026',
    excerpt:
      'When leads live across inboxes, spreadsheets, and sticky notes, nobody has the full picture. Consolidating them into one pipeline changes how a sales team actually operates.',
    author: 'Covison Team',
    readingTime: '5 min read',
    relatedProduct: 'crm',
    image: '/images/work/yourdelivery-hybrid-address-intelligence.png',
    body: [
      {
        heading: 'The cost of a scattered pipeline',
        paragraphs: [
          'Ask five people on a sales team where a specific lead currently stands and you will often get five different answers: one from an inbox, one from a spreadsheet, one from memory. None of them are wrong exactly, they are just incomplete, because the information is split across tools that do not talk to each other.',
          'The real cost is not the extra clicking between tabs. It is the decisions made on partial information: a deal chased that should have been deprioritized, or a hot lead left waiting because nobody had the full picture at the moment it mattered.',
        ],
      },
      {
        heading: 'What "one pipeline" actually fixes',
        paragraphs: [
          'Consolidating leads into a single pipeline does not just tidy things up visually. It means everyone, from a rep working a deal to a manager reviewing forecasts, is looking at the same source of truth instead of reconciling versions of it after the fact.',
          'It also makes automation possible in the first place. A system cannot follow up on a lead it does not know about, and it cannot flag a stalled deal that lives in someone\'s personal notes instead of the pipeline.',
        ],
      },
      {
        heading: 'Consolidation is a process change, not just a tool',
        paragraphs: [
          'Buying a CRM does not automatically consolidate anything. Leads stay scattered if the team keeps working around the tool instead of through it, logging some deals and skipping others because the old habit was faster in the moment.',
          'The tools that actually get adopted are the ones that fit into how the team already works closely enough that logging a lead is the path of least resistance, not an extra chore layered on top of the real work.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'The most direct starting point is not migrating everything at once. It is picking the single source that currently causes the most confusion, usually a shared inbox or a spreadsheet everyone half-trusts, and moving just that into the pipeline first.',
          'Covison CRM was built around that kind of gradual consolidation rather than an all-or-nothing migration, and since it is free to use, there is no cost to trying it with just that one messy source before deciding to move the rest.',
        ],
      },
    ],
  },
  {
    slug: 'why-your-crm-should-work-around-your-business',
    title: 'Why your CRM should work around your business, not the other way around',
    category: 'Product',
    date: 'August 2026',
    excerpt:
      'Most teams end up adapting their process to fit their software. It should be the other way around.',
    author: 'Covison Team',
    readingTime: '4 min read',
    relatedProduct: 'crm',
    image: '/images/work/bridgebot-ai-copilot-knowledge-graph.png',
    body: [
      {
        heading: 'The default CRM trap',
        paragraphs: [
          'Most CRMs ship with a default pipeline: a handful of generic stages meant to apply to any business. It is an easy starting point, which is exactly why so many teams never move past it, even when their actual sales process does not look like that at all.',
          "Over time, the gap between the tool's assumptions and how the business actually sells becomes a quiet source of friction: stages that do not apply, fields nobody fills in, and workarounds that exist purely to make the software cooperate.",
        ],
      },
      {
        heading: 'Signs your process is bending to fit the software',
        paragraphs: [
          'A few reliable signs: reps keeping a second, unofficial tracker because the CRM does not capture something that matters to how you sell. Deal stages that get skipped or renamed informally because the built-in ones do not map to reality. Reports that need manual cleanup before anyone trusts them.',
          "None of these are people problems. They are evidence that the software's structure does not match the business's structure, and the team is quietly compensating for it.",
        ],
      },
      {
        heading: 'What flexible actually means in practice',
        paragraphs: [
          'Flexible does not mean unlimited custom code. It means the pipeline stages, the fields that matter, and the automation triggers can be shaped around how deals actually move through your business, whether that is a short transactional sale or a longer, multi-stakeholder process.',
          'The test is simple: can someone on your team set this up to match your process without waiting on a developer, or does every adjustment turn into a ticket in someone else\'s backlog.',
        ],
      },
      {
        heading: 'Configuring, not customizing',
        paragraphs: [
          'The distinction worth caring about is configuring versus customizing. Configuring means adjusting settings within a tool built to bend. Customizing usually means paying someone to modify code, which is slower, more fragile, and rarely gets revisited once the business changes again.',
          'That is the principle behind how Covison CRM is structured, and because it is free to use with no trial period, it is a low-effort way to see whether your actual process fits without a migration project attached to finding out.',
        ],
      },
    ],
  },
  {
    slug: 'how-ai-is-changing-the-modern-sales-workflow',
    title: 'How AI is changing the modern sales workflow',
    category: 'AI',
    date: 'August 2026',
    excerpt:
      "AI's role in sales is shifting from writing better cold emails to actively managing the busywork that happens between conversations.",
    author: 'Covison Team',
    readingTime: '5 min read',
    relatedProduct: 'crm',
    image: '/images/work/noah-secure-ai-legacy-code-regulated-environments.png',
    body: [
      {
        heading: 'From writing assistant to workflow participant',
        paragraphs: [
          'The first wave of AI in sales was mostly about writing: a better cold email, a faster proposal draft, a cleaner meeting summary. Useful, but it left the actual workflow, the follow-ups, the routing, the tracking, exactly as manual as it was before.',
          'The more meaningful shift is AI moving from a tool a rep opens on request to something embedded in the workflow itself, doing the busywork that happens between conversations rather than just helping draft the conversation.',
        ],
      },
      {
        heading: 'Where AI actually saves time today',
        paragraphs: [
          "The clearest wins are not glamorous. It is AI drafting a follow-up the moment a lead goes quiet, without a rep remembering to write one from scratch. It is classifying an inbound inquiry so it lands with the right person automatically. It is summarizing a long email thread into the two lines that actually matter before a call.",
          "None of that requires the AI to make judgment calls on strategy. It requires it to reliably handle the repetitive parts so a rep's attention goes to the conversations that actually need a human.",
        ],
      },
      {
        heading: 'What AI should not replace',
        paragraphs: [
          'The judgment calls, when to push and when to back off, how to read a hesitant prospect, whether a discount is worth offering, still belong to a person who knows the account and the relationship. AI is well suited to consistency and speed, not to reading a room.',
          'The systems that hold up in practice treat AI as the layer that removes busywork, with a clear handoff to a human the moment a conversation needs actual judgment.',
        ],
      },
      {
        heading: 'Adopting it without overhauling your stack',
        paragraphs: [
          'You do not need to replace your tools to get this benefit. Most of it comes from adding an automation layer on top of what you already use: your CRM, your inbox, your calendar, wired together so the busywork happens without anyone opening five different tabs to do it by hand.',
          'That is the layer Covison CRM is built to provide, and because it is free to use, testing it against one real workflow, like automated follow-ups, is a reasonable place to start before deciding how far to take it.',
        ],
      },
    ],
  },
  {
    slug: 'building-a-sales-system-that-never-forgets-a-follow-up',
    title: 'Building a sales system that never forgets a follow-up',
    category: 'Sales Ops',
    date: 'July 2026',
    excerpt:
      'A sales system is only as reliable as its memory. The best pipelines make forgetting structurally impossible.',
    author: 'Covison Team',
    readingTime: '3 min read',
    relatedProduct: 'crm',
    image: '/images/work/confidential-fmcg-data-modernization.png',
    body: [
      {
        heading: 'Memory is the weakest link in most sales processes',
        paragraphs: [
          'Ask most sales teams why a deal went cold and the honest answer is often some version of "we meant to follow up." Not a lack of interest from the buyer, not a lost negotiation, just a follow-up that depended on someone remembering to send it, and they did not.',
          'A sales process that relies on memory is only as reliable as the busiest day of everyone involved, and there is always a busier day coming.',
        ],
      },
      {
        heading: '"Never forgets" as an operational property',
        paragraphs: [
          'A system that never forgets a follow-up is not about hiring someone more organized. It means every lead that goes quiet has a trigger attached to it: a set number of days of silence automatically queues the next message, without anyone needing to notice the gap first.',
          "The reps still write the message and make the judgment call on tone, but the trigger to act does not depend on anyone's memory or willpower on a given day.",
        ],
      },
      {
        heading: 'Designing for structure, not discipline',
        paragraphs: [
          'Telling a team to "be better about follow-ups" rarely works for long, because it treats a structural problem as a discipline problem. The fix that actually holds up is removing the dependency on memory entirely, so forgetting is no longer a possible failure mode.',
          'This is the same reason checklists work in high-stakes fields that are far more disciplined than most sales teams: structure outperforms willpower at scale, every time.',
        ],
      },
      {
        heading: 'The compounding effect',
        paragraphs: [
          'The value of never missing a follow-up is not obvious from any single deal. It shows up over a quarter, in the accumulated leads that would have gone quiet and did not, each one a small compounding return on a system doing the remembering instead of a person.',
          "That is the specific gap Covison CRM's automated follow-up triggers are built to close, and since it is free to use with no trial period, setting it up on even one pipeline is enough to see the effect start compounding.",
        ],
      },
    ],
  },
]
