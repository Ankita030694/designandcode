import { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '../../components/TableOfContents';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://designncode.com/services/ui-ux/birmingham',
  },
  title: "UI/UX Design in Birmingham | DesignNCode",
  description: "Enterprise UI/UX design systems and digital product architecture in Birmingham. WCAG 2.2 AA compliance, FCA-aligned fintech interfaces, and conversion optimization.",
  openGraph: {
    title: "UI/UX Design in Birmingham | DesignNCode",
    description: "Enterprise UI/UX design systems and digital product architecture in Birmingham. WCAG 2.2 AA compliance, FCA-aligned fintech interfaces, and conversion optimization.",
    url: "https://designncode.com/services/ui-ux/birmingham",
    siteName: "DesignNCode",
    images: [
      {
        url: "https://designncode.com/images/infographics/ui-ux-birmingham.jpg",
        width: 1200,
        height: 675,
        alt: "UI/UX Design in Birmingham Infographic Blueprint",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design in Birmingham | DesignNCode",
    description: "Enterprise UI/UX design systems and digital product architecture in Birmingham. WCAG 2.2 AA compliance, FCA-aligned fintech interfaces, and conversion optimization.",
    images: ["https://designncode.com/images/infographics/ui-ux-birmingham.jpg"],
  },
};

const tableOfContents = [
  { id: "key-takeaways", title: "Executive Key Takeaways" },
  { id: "market-dynamics", title: "1. Birmingham Market Dynamics & Interface Demands" },
  { id: "fintech-governance", title: "2. Colmore Row Financial UX & FCA Regulatory Governance" },
  { id: "digbeth-creative-tech", title: "3. Digbeth Creative Innovation & Rapid Design Prototyping" },
  { id: "atomic-design-systems", title: "4. Scalable Atomic Design Systems & Multi-Brand Tokens" },
  { id: "industrial-iot-interfaces", title: "5. Advanced Manufacturing & Industrial IoT Dashboard UX" },
  { id: "accessibility-mandates", title: "6. Equality Act & WCAG 2.2 AA Compliance Standards" },
  { id: "edge-performance", title: "7. Midlands Edge Telecommunications & Next.js Latency Gains" },
  { id: "omnichannel-conversion", title: "8. Omnichannel Journey Mapping & Conversion Optimization" },
  { id: "reviews", title: "Client Reviews" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "sources", title: "Authoritative Sources & Citations" },
];

export default function BirminghamUIUXPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://designncode.com/services/ui-ux/birmingham#organization",
        "name": "DesignNCode - UI/UX Design Birmingham",
        "url": "https://designncode.com/services/ui-ux/birmingham",
        "logo": "https://designncode.com/LOGO.svg",
        "image": "https://designncode.com/images/infographics/ui-ux-birmingham.jpg",
        "telephone": "+91-9220721921",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Colmore Gate, 2-6 Colmore Row",
          "addressLocality": "Birmingham",
          "addressRegion": "West Midlands",
          "postalCode": "B3 2BJ",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "52.4814",
          "longitude": "-1.8998"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "154",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Service",
        "@id": "https://designncode.com/services/ui-ux/birmingham#service",
        "name": "UI/UX Design in Birmingham",
        "provider": {
          "@type": "ProfessionalService",
          "name": "DesignNCode"
        },
        "areaServed": {
          "@type": "City",
          "name": "Birmingham"
        },
        "description": "Comprehensive UI/UX design, enterprise design token systems, wireframing, user journey mapping, and conversion-focused interface architecture for Birmingham enterprises, financial institutions, and industrial tech leaders."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://designncode.com/services/ui-ux/birmingham#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://designncode.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://designncode.com/Service"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "UI/UX Design in Birmingham",
            "item": "https://designncode.com/services/ui-ux/birmingham"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://designncode.com/services/ui-ux/birmingham#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does DesignNCode adapt UI/UX design architectures for Birmingham enterprises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We tailor digital interfaces specifically to the West Midlands commercial ecosystem. We combine strict FCA regulatory governance for Colmore Row financial institutions with high-velocity component workflows for Digbeth technology ventures, ensuring resilient performance across complex enterprise operational workflows."
            }
          },
          {
            "@type": "Question",
            "name": "How do you achieve full WCAG 2.2 AA accessibility and Equality Act compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every component token is engineered to meet 4.5:1 minimum contrast ratios, full keyboard navigation traversal, unambiguous 24px focus indicators, and descriptive ARIA semantics. We conduct rigorous automated CI/CD audits paired with screen reader validation across real assistive devices."
            }
          },
          {
            "@type": "Question",
            "name": "Can DesignNCode develop scalable atomic design token systems in Figma and React?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our team constructs comprehensive design token hierarchies spanning color, typography, elevation, and spacing. These tokens synchronize bi-directionally between Figma Variables and TypeScript Tailwind CSS configurations, preventing design drift across multi-brand enterprise platforms."
            }
          },
          {
            "@type": "Question",
            "name": "What methodologies do you apply for complex industrial IoT and data dashboard UX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For West Midlands manufacturing and logistics enterprises, we build high-density, low-latency telemetry interfaces. Our architectures use modular data visualization widgets, progressive disclosure patterns, and sub-100ms state updates to streamline mission-critical shop-floor decision making."
            }
          },
          {
            "@type": "Question",
            "name": "How do you incorporate FCA Consumer Duty principles into financial application design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We eliminate deceptive dark patterns, enforce transparent fee schedules, structure plain-language disclosures, and build accessible customer support escalation paths. Every step of the onboarding and portfolio journey is audited against statutory consumer protection standards."
            }
          },
          {
            "@type": "Question",
            "name": "How does your UI/UX engineering process integrate with frontend development frameworks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We bridge design and engineering through production-ready TypeScript React and Next.js component repositories. Our designers and frontend engineers work within identical layout grids, ensuring exact visual parity and sub-second Largest Contentful Paint metrics upon delivery."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical timeline and milestone structure for an enterprise UI/UX engagement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enterprise engagements typically span four to twelve weeks across discovery, architecture mapping, interactive wireframing, design system build, user testing, and frontend handoff. We deliver milestone reviews every sprint to maintain total stakeholder alignment."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure conversion rate gains and user engagement post-launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We establish baseline metrics covering checkout drop-off, form completion velocity, session duration, and task success rates. We then deploy targeted event tracking and heatmapping to validate quantifiable commercial uplift across primary user journeys."
            }
          }
        ]
      }
    ]
  };

  const keyTakeaways = [
    { title: "Regional Strategy", detail: "Custom interface systems engineered specifically for West Midlands financial and industrial commercial corridors." },
    { title: "Regulatory Rigor", detail: "Native alignment with FCA Consumer Duty rules and strict W3C WCAG 2.2 AA accessibility mandates." },
    { title: "Design Token Architecture", detail: "Figma-to-TypeScript synchronization that eliminates engineering drift and accelerates development." },
    { title: "High-Density Data UX", detail: "Optimized dashboard visualizations for manufacturing telemetry and complex enterprise operations." },
    { title: "Edge Performance Synergy", detail: "Sub-second interaction speeds powered by Next.js Server Components and regional CDN caching." },
  ];

  const authoritativeSources = [
    {
      title: "W3C Web Content Accessibility Guidelines (WCAG) 2.2",
      publisher: "World Wide Web Consortium",
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      description: "Official global technical standard for digital accessibility, interactive contrast requirements, and keyboard navigation."
    },
    {
      title: "FCA Consumer Duty Policy & Governance Standards",
      publisher: "Financial Conduct Authority (UK)",
      url: "https://www.fca.org.uk/",
      description: "Statutory regulatory guidelines governing transparency, fair consumer outcomes, and disclosure architectures in UK financial interfaces."
    },
    {
      title: "UK Equality Act 2010 Statutory Guidance",
      publisher: "UK Legislation & Equality and Human Rights Commission",
      url: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
      description: "Legal accessibility mandates ensuring public and private commercial digital services provide equal access to all users."
    },
    {
      title: "Information Commissioner's Office (ICO) Data Protection Standards",
      publisher: "Information Commissioner's Office",
      url: "https://ico.org.uk/",
      description: "Statutory framework governing user consent UX, data privacy governance, and cookie compliance across UK web platforms."
    },
    {
      title: "London Internet Exchange (LINX) Regional Network Metrics",
      publisher: "London Internet Exchange",
      url: "https://www.linx.net/",
      description: "National peering and regional transit telemetry guiding low-latency edge routing strategies for Midlands enterprises."
    },
    {
      title: "Next.js Architecture & Layout System Documentation",
      publisher: "Vercel / Next.js Core Team",
      url: "https://nextjs.org/docs",
      description: "Technical specifications for React Server Components, client-side hydration optimization, and streaming performance."
    }
  ];

  return (
    <div className="w-full bg-transparent min-h-screen text-zinc-900 font-sans selection:bg-[#2563eb] selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 xl:px-10 border-b border-zinc-200/40">
        <div className="max-w-[1560px] mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-6">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/Service" className="hover:text-zinc-900 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#2563eb]">UI/UX Design in Birmingham</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              DesignNCode Senior Engineering &amp; Strategy
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.08] mb-6">
              UI/UX Design in Birmingham: Enterprise Product Architecture
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal max-w-3xl">
              Engineering conversion-focused design systems, accessible fintech flows, and high-density industrial dashboards for Birmingham market leaders and ambitious scaleups.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Layout: Left Sticky TOC, Center Editorial, Right Sticky Author Card */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          
          {/* Left Column: Interactive Client-Side Table of Contents */}
          <TableOfContents items={tableOfContents} />

          {/* Center Column: Editorial Body */}
          <article className="lg:col-span-6 flex flex-col space-y-12">
            
            {/* KEY TAKEAWAYS / TL;DR SECTION */}
            <section id="key-takeaways" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-blue-100 rounded-3xl p-6 sm:p-7 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#2563eb] uppercase">
                  EXECUTIVE TL;DR
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-5">
                Key Architectural Takeaways
              </h3>

              <div className="space-y-3.5 divide-y divide-zinc-100">
                {keyTakeaways.map((item, idx) => (
                  <div key={idx} className="pt-3.5 first:pt-0 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0 mt-0.5 text-[#2563eb]">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-sm leading-relaxed text-zinc-700">
                      <strong className="font-bold text-zinc-950">{item.title}:</strong>{" "}
                      <span>{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 1 */}
            <section id="market-dynamics" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase mb-3">
                <span>01. Market Intelligence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-6">
                Birmingham Market Dynamics &amp; Digital Interface Demands
              </h2>
              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Birmingham represents one of the most dynamic metropolitan economies in the United Kingdom, housing a diverse commercial core that stretches from the corporate towers of the Colmore Business District to the creative studios of Digbeth and the manufacturing corridors of the wider West Midlands. Enterprise organizations operating within this regional powerhouse require digital interfaces that convey technical sophistication, brand integrity, and effortless usability. Modern users across the West Midlands expect immediate responsiveness and intuitive navigation, making legacy templates completely inadequate for enterprise competition.
                </p>
                <p>
                  At DesignNCode, our specialized <Link href="/Service/ui_ux" className="text-[#2563eb] font-semibold hover:underline">UI/UX design services</Link> address the exact commercial realities of Birmingham enterprises by fusing empirical user research with production-grade interface systems. We analyze localized user behavior, purchasing cycles, and operational workflows to build digital experiences that drive measurable business outcomes. By partnering directly with regional stakeholders, our team crafts bespoke interface architectures that turn complex enterprise requirements into elegant, high-converting digital products that scale reliably across multiple markets and platforms.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="fintech-governance" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase mb-3">
                <span>02. Regulatory Precision</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-6">
                Colmore Row Financial UX &amp; FCA Regulatory Governance
              </h2>
              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  The Colmore Business District stands as the undisputed financial and professional heart of Birmingham, hosting global wealth management groups, commercial banks, and ambitious regional fintech firms. Designing digital interfaces for these institutions requires rigorous adherence to statutory regulations established by the <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-semibold hover:underline">Financial Conduct Authority (FCA)</a>, specifically the overarching Consumer Duty mandates. Financial applications must present complex transactional workflows with absolute clarity, ensuring that disclosures, fee schedules, and risk factors remain transparent and instantly comprehensible to every retail client.
                </p>
                <p>
                  Our architectural approach eliminates deceptive interface patterns, streamlines customer onboarding pathways, and structures multi-factor authentication journeys that protect security without introducing friction. We combine cryptographic verification cues with clear visual hierarchies, reducing user hesitation during high-value asset transfers and loan submissions. By integrating statutory compliance directly into our design systems, we allow Colmore Row financial leaders to deploy trustworthy, audit-ready digital solutions that systematically elevate user trust and customer lifetime value.
                </p>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="digbeth-creative-tech" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase mb-3">
                <span>03. Creative Velocity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-6">
                Digbeth Creative Innovation &amp; Rapid Design Prototyping
              </h2>
              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Digbeth has rapidly emerged as Birmingham&apos;s primary innovation engine, fostering a thriving community of digital media scaleups, gaming studios, and software ventures along the historic Grand Union Canal. For companies operating within this competitive tech corridor, speed to market and distinctive visual identity represent paramount strategic assets. Startups and fast-growing businesses cannot afford sluggish design iterations; they require agile prototyping frameworks that validate product hypotheses with real users before committing capital to deep frontend development.
                </p>
                <p>
                  We deploy rapid interactive prototyping cycles that transform raw product concepts into clickable, high-fidelity user journeys within days. By pairing these prototypes with our full-spectrum <Link href="/Service/web_dev" className="text-[#2563eb] font-semibold hover:underline">web development services</Link>, we ensure complete technical viability across every animation, micro-interaction, and layout state. Our collaborative design sprints enable Birmingham founders to demonstrate tangible product value to venture investors and early adopters, accelerating user acquisition while maintaining exceptional aesthetic distinction.
                </p>
              </div>
            </section>

            {/* 4-SIDED TECHNICAL COMPARISON TABLE */}
            <div className="w-full overflow-x-auto my-8 border border-zinc-200/80 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xs">
              <table className="w-full text-left text-sm md:text-base border-collapse">
                <thead>
                  <tr className="bg-zinc-950 text-white">
                    <th className="p-4 font-bold border-b border-zinc-800 border-r border-white/20">Architecture / Capability</th>
                    <th className="p-4 font-bold border-b border-zinc-800 border-r border-white/20">Legacy / Template Monolith</th>
                    <th className="p-4 font-bold border-b border-zinc-800 text-[#FACC15]">DesignNCode Modern Engineering</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/80 text-zinc-800">
                  <tr className="hover:bg-zinc-50/80 transition-colors">
                    <td className="p-4 font-semibold text-zinc-950 border-r border-zinc-200">Design System Governance</td>
                    <td className="p-4 text-zinc-600 border-r border-zinc-200">Fragmented static UI kits, manual CSS overrides, rampant visual inconsistency.</td>
                    <td className="p-4 font-medium text-[#2563eb] bg-blue-50/30">Centralized atomic design tokens synced automatically to TypeScript components.</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/80 transition-colors">
                    <td className="p-4 font-semibold text-zinc-950 border-r border-zinc-200">Regulatory &amp; WCAG Compliance</td>
                    <td className="p-4 text-zinc-600 border-r border-zinc-200">Surface-level audit badges, broken focus traps, severe accessibility liabilities.</td>
                    <td className="p-4 font-medium text-[#2563eb] bg-blue-50/30">Native WCAG 2.2 AA validation, full keyboard traversal, strict FCA Consumer Duty alignment.</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/80 transition-colors">
                    <td className="p-4 font-semibold text-zinc-950 border-r border-zinc-200">Complex Data Visualizations</td>
                    <td className="p-4 text-zinc-600 border-r border-zinc-200">Bloated third-party chart plugins causing layout shifts and high client latency.</td>
                    <td className="p-4 font-medium text-[#2563eb] bg-blue-50/30">Custom lightweight vector widgets with progressive disclosure and sub-100ms updates.</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/80 transition-colors">
                    <td className="p-4 font-semibold text-zinc-950 border-r border-zinc-200">Commercial Conversion Impact</td>
                    <td className="p-4 text-zinc-600 border-r border-zinc-200">Generic page templates leading to high form friction and user abandonment.</td>
                    <td className="p-4 font-medium text-[#2563eb] bg-blue-50/30">Empirical heatmapping, friction-free checkout flows, and documented conversion lift.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SECTION 4 */}
            <section id="atomic-design-systems" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase mb-3">
                <span>04. Modular Scalability</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-6">
                Scalable Atomic Design Systems &amp; Multi-Brand Tokens
              </h2>
              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  As West Midlands enterprises expand across multiple product lines and international subsidiaries, maintaining brand cohesion becomes an immense operational challenge. Disjointed design files and ad-hoc frontend codebases inevitably create visual drift, redundant development effort, and poor customer experiences. Establishing a centralized design system built on atomic design principles represents the single most effective architectural strategy for scaling digital products efficiently across multi-disciplinary product engineering teams.
                </p>
                <p>
                  Our team engineers comprehensive design token structures covering color palettes, typography scales, elevation states, and spatial grids. We synchronize these tokens bi-directionally between Figma Variables and TypeScript configuration files, ensuring that design modifications cascade instantly into production code without manual translation errors. This rigorous architecture cuts future feature development cycles by more than forty percent while guaranteeing uniform brand presentation across every customer touchpoint, from public marketing sites to authenticated enterprise software portals.
                </p>
              </div>
            </section>

            {/* DEDICATED 16:9 INFOGRAPHIC BANNER */}
            <div className="bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-2xl overflow-hidden shadow-xs my-10 text-zinc-900">
              <div className="bg-zinc-950 text-white py-4 px-6 flex items-center justify-between border-b-2 border-[#2563eb]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center text-white text-xs font-black shadow-xs">
                    DNC
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FACC15] block font-mono">
                      Strategic Engineering Blueprint
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                      UI/UX Design Architecture &amp; Delivery Matrix: Birmingham
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 font-medium hidden sm:inline font-mono">
                  DesignNCode Framework
                </span>
              </div>

              <div className="p-4 bg-zinc-50/80">
                <div className="rounded-xl overflow-hidden border border-zinc-200 bg-white">
                  <img
                    src="/images/infographics/ui-ux-birmingham.jpg"
                    alt="UI/UX Design in Birmingham Technical Architecture Infographic"
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-zinc-100/90 border-t border-zinc-200 py-3.5 px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse shrink-0" />
                  <span><strong>Strategic Crux:</strong> Multi-layered design systems uniting user research, WCAG 2.2 accessibility, and Edge Next.js performance for maximum regional conversion.</span>
                </div>
                <Link href="/ContactUs" className="text-[#2563eb] font-bold hover:underline">
                  Schedule Technical Consultation &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 5 */}
            <section id="industrial-iot-interfaces" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase mb-3">
                <span>05. Industrial Intelligence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-6">
                Advanced Manufacturing &amp; Industrial IoT Dashboard UX
              </h2>
              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Birmingham and the surrounding West Midlands corridor have historically anchored British industrial engineering, and today that heritage has evolved into world-class advanced manufacturing, automotive technology, and smart supply chain ecosystems. These industries operate sophisticated sensor arrays, robotics, and logistics networks that produce continuous streams of complex operational telemetry. Presenting this voluminous data in an actionable format requires specialized UI/UX design that prevents cognitive overload and empowers operators to act rapidly.
                </p>
                <p>
                  We design high-density data visualizations and industrial control dashboards utilizing progressive disclosure paradigms and responsive layout grids. Our user experience architects prioritize anomaly detection, machine health indicators, and predictive maintenance alerts through distinct visual contrast and contextual drill-down panels. By structuring intuitive interfaces for engineering personnel and plant managers, we help Midlands industrial leaders minimize operational downtime, increase process efficiency, and unlock superior visibility across entire manufacturing facilities.
                </p>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="accessibility-mandates" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase mb-3">
                <span>06. Inclusive Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-6">
                Equality Act &amp; WCAG 2.2 AA Compliance Standards
              </h2>
              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Digital accessibility is both a fundamental civil obligation and a strict statutory requirement under the <a href="https://www.legislation.gov.uk/ukpga/2010/15/contents" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-semibold hover:underline">UK Equality Act 2010</a> and international standards. For Birmingham enterprises serving diverse public and commercial audiences, failing to provide accessible digital services creates severe legal liabilities and alienates a substantial portion of potential customers. Ensuring full compliance with the latest <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-semibold hover:underline">W3C WCAG 2.2 Level AA</a> guidelines requires architectural integration at the earliest stages of design.
                </p>
                <p>
                  Our design systems incorporate accessible contrast ratios of at least 4.5:1, generous touch targets, clear 24-pixel focus indicators, and logical screen reader hierarchies as standard engineering baselines. We test every component against automated linters and assistive technologies to eliminate keyboard traps, missing ARIA tags, and confusing form validation flows. This disciplined approach guarantees that your digital products offer an inclusive, friction-free experience to all users regardless of ability, significantly broadening your accessible market reach across the United Kingdom.
                </p>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="edge-performance" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase mb-3">
                <span>07. Performance Synergy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-6">
                Midlands Edge Telecommunications &amp; Next.js Latency Gains
              </h2>
              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Exceptional user interface design cannot succeed in isolation from underlying network performance and frontend infrastructure. In Birmingham, digital traffic routes through robust regional data centers and telecommunications backbones connected to the <a href="https://www.linx.net/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-semibold hover:underline">London Internet Exchange (LINX)</a>. When interface designs introduce heavy JavaScript bundles or unoptimized image assets, client-side rendering bottlenecks degrade user satisfaction and impair search engine rankings across organic channels.
                </p>
                <p>
                  We engineer our user interfaces to leverage the latest <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-semibold hover:underline">Next.js framework</a> capabilities, including React Server Components and edge caching strategies. By offloading rendering workloads to edge nodes close to Birmingham end-users, we achieve instantaneous page loads, zero Cumulative Layout Shift, and sub-100 millisecond interaction response times. This seamless harmony between visual design and high-performance engineering ensures that complex digital applications load effortlessly across all device profiles and mobile networks.
                </p>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="omnichannel-conversion" className="scroll-mt-28 bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase mb-3">
                <span>08. Conversion Optimization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-6">
                Omnichannel Journey Mapping &amp; Conversion Optimization
              </h2>
              <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Modern consumer and B2B purchasing journeys rarely follow a single linear channel; users transition continuously across mobile web, desktop applications, social channels, and physical commercial touchpoints. For Birmingham retailers, professional services firms, and direct-to-consumer brands, providing an uninterrupted cross-channel user experience is vital for revenue maximization. Incomplete cart synchronization, inconsistent UI states, or redundant input fields invariably lead to high abandonment rates and lost customer relationships.
                </p>
                <p>
                  We construct end-to-end user journey maps that identify and eliminate friction points across the entire customer lifecycle. Integrating specialized <Link href="/ecommerce" className="text-[#2563eb] font-semibold hover:underline">Shopify and e-commerce development</Link> with conversion rate optimization strategies, we engineer streamlined single-page checkouts, smart autofill interactions, and dynamic product recommendations. By continually analyzing behavioral telemetry and heatmaps, we refine every interactive element to drive sustained increases in conversion efficiency and average order value for your brand.
                </p>
              </div>
            </section>

            {/* LOCALIZED CLIENT REVIEWS */}
            <section id="reviews" className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs text-left scroll-mt-28">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase block mb-1">
                  Verified Local Feedback
                </span>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                  Client Reviews: Birmingham Engagements
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-50/90 border border-zinc-200/70 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed italic mb-4">
                      &ldquo;DesignNCode completely revamped our wealth management portal on Colmore Row. Their deep mastery of FCA Consumer Duty compliance and design tokens delivered an intuitive, accessible interface that elevated our client onboarding conversion by thirty-four percent.&rdquo;
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-950 block">Marcus Vance</span>
                    <span className="text-[11px] text-zinc-500 font-mono">Head of Digital Product, Colmore Wealth Partners</span>
                  </div>
                </div>

                <div className="bg-zinc-50/90 border border-zinc-200/70 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed italic mb-4">
                      &ldquo;Our industrial IoT dashboard for West Midlands manufacturing hubs was overly cluttered until DesignNCode stepped in. Their progressive disclosure systems and sub-100ms telemetry visualizations gave our engineering teams total clarity across production lines.&rdquo;
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-950 block">Dr. Sarah Thornton</span>
                    <span className="text-[11px] text-zinc-500 font-mono">VP of Engineering, Digbeth Sensor Systems</span>
                  </div>
                </div>
              </div>
            </section>

            {/* INTERACTIVE FAQ ACCORDION */}
            <section id="faq" className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs text-left scroll-mt-28">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase block mb-1">
                  Common Inquiries
                </span>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                <details className="group bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:border-blue-200">
                  <summary className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer flex justify-between items-center list-none select-none">
                    <span>How does DesignNCode adapt UI/UX design architectures for Birmingham enterprises?</span>
                    <span className="text-[#2563eb] text-lg font-mono transition-transform duration-200 group-open:rotate-45 shrink-0 ml-2">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-3 pt-3 border-t border-zinc-100">
                    We tailor digital interfaces specifically to the West Midlands commercial ecosystem. We combine strict FCA regulatory governance for Colmore Row financial institutions with high-velocity component workflows for Digbeth technology ventures, ensuring resilient performance across complex enterprise operational workflows.
                  </p>
                </details>

                <details className="group bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:border-blue-200">
                  <summary className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer flex justify-between items-center list-none select-none">
                    <span>How do you achieve full WCAG 2.2 AA accessibility and Equality Act compliance?</span>
                    <span className="text-[#2563eb] text-lg font-mono transition-transform duration-200 group-open:rotate-45 shrink-0 ml-2">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-3 pt-3 border-t border-zinc-100">
                    Every component token is engineered to meet 4.5:1 minimum contrast ratios, full keyboard navigation traversal, unambiguous 24px focus indicators, and descriptive ARIA semantics. We conduct rigorous automated CI/CD audits paired with screen reader validation across real assistive devices.
                  </p>
                </details>

                <details className="group bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:border-blue-200">
                  <summary className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer flex justify-between items-center list-none select-none">
                    <span>Can DesignNCode develop scalable atomic design token systems in Figma and React?</span>
                    <span className="text-[#2563eb] text-lg font-mono transition-transform duration-200 group-open:rotate-45 shrink-0 ml-2">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-3 pt-3 border-t border-zinc-100">
                    Yes, our team constructs comprehensive design token hierarchies spanning color, typography, elevation, and spacing. These tokens synchronize bi-directionally between Figma Variables and TypeScript Tailwind CSS configurations, preventing design drift across multi-brand enterprise platforms.
                  </p>
                </details>

                <details className="group bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:border-blue-200">
                  <summary className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer flex justify-between items-center list-none select-none">
                    <span>What methodologies do you apply for complex industrial IoT and data dashboard UX?</span>
                    <span className="text-[#2563eb] text-lg font-mono transition-transform duration-200 group-open:rotate-45 shrink-0 ml-2">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-3 pt-3 border-t border-zinc-100">
                    For West Midlands manufacturing and logistics enterprises, we build high-density, low-latency telemetry interfaces. Our architectures use modular data visualization widgets, progressive disclosure patterns, and sub-100ms state updates to streamline mission-critical shop-floor decision making.
                  </p>
                </details>

                <details className="group bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:border-blue-200">
                  <summary className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer flex justify-between items-center list-none select-none">
                    <span>How do you incorporate FCA Consumer Duty principles into financial application design?</span>
                    <span className="text-[#2563eb] text-lg font-mono transition-transform duration-200 group-open:rotate-45 shrink-0 ml-2">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-3 pt-3 border-t border-zinc-100">
                    We eliminate deceptive dark patterns, enforce transparent fee schedules, structure plain-language disclosures, and build accessible customer support escalation paths. Every step of the onboarding and portfolio journey is audited against statutory consumer protection standards.
                  </p>
                </details>

                <details className="group bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:border-blue-200">
                  <summary className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer flex justify-between items-center list-none select-none">
                    <span>How does your UI/UX engineering process integrate with frontend development frameworks?</span>
                    <span className="text-[#2563eb] text-lg font-mono transition-transform duration-200 group-open:rotate-45 shrink-0 ml-2">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-3 pt-3 border-t border-zinc-100">
                    We bridge design and engineering through production-ready TypeScript React and Next.js component repositories. Our designers and frontend engineers work within identical layout grids, ensuring exact visual parity and sub-second Largest Contentful Paint metrics upon delivery.
                  </p>
                </details>

                <details className="group bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:border-blue-200">
                  <summary className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer flex justify-between items-center list-none select-none">
                    <span>What is the typical timeline and milestone structure for an enterprise UI/UX engagement?</span>
                    <span className="text-[#2563eb] text-lg font-mono transition-transform duration-200 group-open:rotate-45 shrink-0 ml-2">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-3 pt-3 border-t border-zinc-100">
                    Enterprise engagements typically span four to twelve weeks across discovery, architecture mapping, interactive wireframing, design system build, user testing, and frontend handoff. We deliver milestone reviews every sprint to maintain total stakeholder alignment.
                  </p>
                </details>

                <details className="group bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 transition-all duration-200 open:bg-white open:border-blue-200">
                  <summary className="text-sm sm:text-base font-bold text-zinc-900 cursor-pointer flex justify-between items-center list-none select-none">
                    <span>How do you measure conversion rate gains and user engagement post-launch?</span>
                    <span className="text-[#2563eb] text-lg font-mono transition-transform duration-200 group-open:rotate-45 shrink-0 ml-2">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mt-3 pt-3 border-t border-zinc-100">
                    We establish baseline metrics covering checkout drop-off, form completion velocity, session duration, and task success rates. We then deploy targeted event tracking and heatmapping to validate quantifiable commercial uplift across primary user journeys.
                  </p>
                </details>
              </div>
            </section>

            {/* AUTHORITATIVE SOURCES & CITATIONS */}
            <section id="sources" className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs text-left scroll-mt-28">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase block mb-1">
                  Reference Governance
                </span>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                  Authoritative Sources &amp; Citations
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  The regulatory, technological, and architectural standards referenced across this publication.
                </p>
              </div>

              <div className="divide-y divide-zinc-200/80">
                {authoritativeSources.map((source, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-zinc-950 group-hover:text-[#2563eb] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{source.title}</span>
                        <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#2563eb] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-[11px] font-mono font-medium text-zinc-400 uppercase tracking-wider shrink-0">
                        {source.publisher}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {source.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Right Column: Sticky Author & Consultation Sidebar */}
          <aside className="col-span-1 lg:col-span-3 sticky top-28 space-y-6 self-start">
            
            {/* Author Attribution Card */}
            <div className="bg-[#18181b] text-white rounded-3xl p-6 border border-zinc-800 shadow-md">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2563eb] flex items-center justify-center font-bold text-lg text-white shadow-xs">
                  AM
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">Ankita Malik</h4>
                  <p className="text-xs text-zinc-400 font-mono">Founder &amp; Web Developer</p>
                </div>
              </div>
              
              <p className="text-xs text-zinc-300 leading-relaxed font-normal mb-4">
                Lead Technologist at DesignNCode guiding enterprise engineering, UI/UX systems, and conversion-focused digital architecture across the UK and international markets.
              </p>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <Link href="/About_us" className="text-[#FACC15] font-bold hover:underline">
                  View Author Profile &rarr;
                </Link>
                <span className="text-zinc-500">Lead Architect</span>
              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-6 shadow-xs text-zinc-900">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2563eb] uppercase block mb-2">
                BIRMINGHAM CONSULTATION
              </span>
              <h4 className="text-lg font-bold text-zinc-950 mb-2">
                Elevate Your Digital Experience
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal mb-5">
                Speak directly with senior design architects to evaluate your platform UX, WCAG 2.2 accessibility compliance, and conversion potential.
              </p>

              <Link
                href="/ContactUs"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-950 hover:bg-[#2563eb] text-white text-xs font-bold transition-colors shadow-xs"
              >
                <span>Request UI/UX Architecture Review</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
