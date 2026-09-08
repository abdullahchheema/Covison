export const siteConfig = {
  name: 'Covison',
  tagline: 'Build the future. Automate the rest.',
  description:
    'Covison designs AI-powered systems and exceptional digital experiences for B2B companies ready to operate at a higher level.',
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

// Covison's own products, distinct from client services. Each gets a
// dedicated page at /products/<id> with its own rich content, not the
// service-detail template.
export const products = [
  {
    id: 'crm',
    icon: 'Users',
    title: 'Covison CRM',
    tagline: 'Your sales pipeline, finally working as one.',
    short: 'Manage leads, relationships, follow-ups, and sales workflows from one unified workspace.',
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
    role: 'Co-Founder, Strategy & Client Delivery',
    linkedin: '',
    bio: [
      "Abdullah runs point on strategy and delivery, making sure every engagement starts with a clear problem and ends with a measurable result, before a single automation gets built.",
      'He owns the client relationship from first call to final handoff, keeping projects scoped, on schedule, and tied to outcomes the client can point to.',
    ],
  },
  {
    name: 'Saad Rabbani',
    role: 'Co-Founder, AI Automation & Web Development',
    linkedin: '',
    bio: [
      "Saad leads Covison's technical build: from AI agents and workflow automations to the websites and applications that put them in front of clients. He thinks in systems, not one-off scripts, so what he ships keeps running long after the handoff.",
      "He sets the technical direction for every engagement, turning a client's operational bottlenecks into automations and interfaces that hold up under real usage, not just demos.",
    ],
  },
  {
    name: 'Muhammad Ali Murtaza',
    role: 'Co-Founder, Growth & Operations',
    linkedin: '',
    bio: [
      'Ali handles the operational and growth side of Covison, from partnerships to day-to-day business operations, so engagements move smoothly without adding overhead to the client relationship.',
      'He works alongside Saad and Abdullah to keep new business, vendor relationships, and internal operations organized, so the whole team can stay focused on delivery.',
    ],
  },
]

// Maps each service id to the tag of its matching case study (see lib/case-studies.ts),
// used to cross-link service pages <-> case study pages without fuzzy string matching.
export const serviceCaseStudyMap: Record<string, string> = {
  consulting: 'Data Modernization',
  automation: 'AI Copilot',
  web: 'Marketplace MVP',
  chatbots: 'AI Voice & Receptionist',
  'lead-generation': 'Lead Qualification',
  'ai-agents': 'Data Intelligence',
  'crm-sales': 'CRM & Sales Automation',
  // No workshop-style engagement among current case studies; that service page
  // simply renders without a "related work" section until one exists.
}

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
  },
]
