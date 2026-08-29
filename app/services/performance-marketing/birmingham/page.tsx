import { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '../../components/TableOfContents';
import { constructCityMetadata } from '@/lib/seo';

export const metadata: Metadata = constructCityMetadata({
  service: "Performance Marketing",
  serviceModifier: "Paid Growth",
  city: "Birmingham",
  slug: "services/performance-marketing/birmingham",
  customTitle: "Performance Marketing & Growth in Birmingham | DesignNCode",
  customDescription: "Enterprise performance marketing & paid acquisition in Birmingham. Server-side CAPI tracking, multi-touch attribution & CRO funnels. Book your growth audit.",
  image: "https://designncode.com/images/infographics/performance-marketing-birmingham.jpg",
});

const tableOfContents = [
  { id: "key-takeaways", title: "Executive Key Takeaways" },
  { id: "birmingham-growth-dynamics", title: "1. Birmingham Commercial Landscape & Enterprise Paid Acquisition" },
  { id: "server-side-telemetry", title: "2. Server-Side CAPI Tracking, First-Party Data & Edge Containers" },
  { id: "regulatory-compliance", title: "3. UK GDPR, ICO AdTech Governance & FCA Compliance Standards" },
  { id: "algorithmic-attribution", title: "4. Multi-Touch Attribution, Incrementality Testing & Media Mix" },
  { id: "nextjs-landing-optimization", title: "5. High-Velocity Next.js Landing Pages & Conversion Architecture" },
  { id: "b2b-lead-generation", title: "6. B2B Industrial, Professional Services & High-Ticket Lead Gen" },
  { id: "search-intent-ai-bidding", title: "7. Paid Search Domination, Google PMax & First-Party Bidding" },
  { id: "full-funnel-scaling", title: "8. Full-Funnel Omnichannel Scaling & Revenue Operations Integration" },
  { id: "reviews", title: "Client Reviews" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "sources", title: "Authoritative Sources & Citations" },
];

export default function BirminghamPerformanceMarketingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://designncode.com/services/performance-marketing/birmingham#organization",
        "name": "DesignNCode - Performance Marketing Birmingham",
        "url": "https://designncode.com/services/performance-marketing/birmingham",
        "logo": "https://designncode.com/LOGO.svg",
        "image": "https://designncode.com/images/infographics/performance-marketing-birmingham.jpg",
        "telephone": "+91-9220721921",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Colmore Gate, 2-6 Colmore Row",
          "addressLocality": "Birmingham",
          "addressRegion": "West Midlands",
          "postalCode": "B3 2QD",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "52.4816",
          "longitude": "-1.8988"
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
        "@id": "https://designncode.com/services/performance-marketing/birmingham#service",
        "name": "Performance Marketing in Birmingham",
        "provider": {
          "@type": "ProfessionalService",
          "name": "DesignNCode"
        },
        "areaServed": {
          "@type": "City",
          "name": "Birmingham"
        },
        "description": "Enterprise performance marketing, server-side CAPI event architecture, multi-touch algorithmic attribution, high-conversion landing page engineering, and multi-channel paid acquisition across Birmingham and the West Midlands."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://designncode.com/services/performance-marketing/birmingham#breadcrumb",
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
            "name": "Performance Marketing in Birmingham",
            "item": "https://designncode.com/services/performance-marketing/birmingham"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://designncode.com/services/performance-marketing/birmingham#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why deploy server-side CAPI tracking over standard browser pixels in Birmingham?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Browser pixels lose over thirty percent of tracking signals due to ad blockers. Server-side CAPI routes encrypted conversion events directly from secure edge containers to Meta and Google, restoring attribution accuracy and lowering acquisition costs."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure financial ad campaigns adhere to FCA and ASA regulations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We construct programmatic compliance matrices enforcing mandatory risk disclosures and transparent terms across creative variations. Automated verification pipelines ensure that advertisements for Colmore Business District financial firms maintain full alignment with FCA Consumer Duty rules."
            }
          },
          {
            "@type": "Question",
            "name": "What attribution models do you implement for complex B2B sales cycles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy algorithmic multi-touch attribution paired with marketing mix modeling and incrementality testing. Rather than relying on simplistic last-click metrics, our models evaluate discovery touchpoints, engagement data, and offline CRM milestones to calculate channel revenue yield."
            }
          },
          {
            "@type": "Question",
            "name": "How do custom Next.js landing pages increase paid advertising return on ad spend?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sub-second load times achieved through React Server Components prevent visitor abandonment during paid clicks. Delivering dynamically personalized landing content mapped directly to incoming search keywords improves Quality Scores, lowers cost-per-click charges, and doubles conversion velocity."
            }
          },
          {
            "@type": "Question",
            "name": "How do you tailor performance marketing for Jewellery Quarter luxury retail brands?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High-value luxury retail requires meticulous audience segmentation, affluent demographic layering, and refined visual storytelling. We combine targeted paid social storytelling with search capture funnels, directing qualified buyers into private showroom booking flows that preserve prestige."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent budget waste on Google Performance Max campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement granular negative keyword hierarchies, placement brand-safety exclusions, and custom asset groups segmented by intent. By transmitting verified offline CRM conversions into Google Smart Bidding algorithms, we train automated systems to pursue profitable enterprise contracts."
            }
          },
          {
            "@type": "Question",
            "name": "How do UK GDPR and PECR regulations impact paid campaign tracking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "UK GDPR and PECR require verifiable user consent before executing tracking scripts. We build robust Google Consent Mode v2 architectures that dynamically adapt telemetry payloads based on user preferences, maintaining rigorous ICO compliance while leveraging algorithmic conversion modeling."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical deployment timeline for an enterprise paid growth engagement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our technical onboarding spans two to four weeks, encompassing tracking container configuration, CRM telemetry integration, creative matrix development, and regulatory audits. Scaled media deployment and systematic bid optimization initiate in month one, followed by quarterly incrementality experiments."
            }
          }
        ]
      }
    ]
  };

  const keyTakeaways = [
    {
        "title": "Server-Side Telemetry",
        "detail": "Edge CAPI containers bypass browser ad blockers to preserve conversion tracking across digital channels."
    },
    {
        "title": "Deterministic Compliance",
        "detail": "Automated verification pipelines ensure complete alignment with UK GDPR, ICO rules, and FCA standards."
    },
    {
        "title": "Algorithmic Attribution",
        "detail": "Multi-touch econometric modeling eliminates last-click bias to uncover true media channel incrementality."
    },
    {
        "title": "Sub-Second Rendering",
        "detail": "React Server Components deliver ultra-low latency landing page interactions that cut acquisition costs."
    },
    {
        "title": "Revenue Operations Linkage",
        "detail": "Closed-loop CRM telemetry feeds verified offline profit margins directly into machine learning bidding engines."
    }
];

  const faqsList = [
    {
        "q": "Why deploy server-side CAPI tracking over standard browser pixels in Birmingham?",
        "a": "Browser pixels lose over thirty percent of tracking signals due to ad blockers. Server-side CAPI routes encrypted conversion events directly from secure edge containers to Meta and Google, restoring attribution accuracy and lowering acquisition costs."
    },
    {
        "q": "How do you ensure financial ad campaigns adhere to FCA and ASA regulations?",
        "a": "We construct programmatic compliance matrices enforcing mandatory risk disclosures and transparent terms across creative variations. Automated verification pipelines ensure that advertisements for Colmore Business District financial firms maintain full alignment with FCA Consumer Duty rules."
    },
    {
        "q": "What attribution models do you implement for complex B2B sales cycles?",
        "a": "We deploy algorithmic multi-touch attribution paired with marketing mix modeling and incrementality testing. Rather than relying on simplistic last-click metrics, our models evaluate discovery touchpoints, engagement data, and offline CRM milestones to calculate channel revenue yield."
    },
    {
        "q": "How do custom Next.js landing pages increase paid advertising return on ad spend?",
        "a": "Sub-second load times achieved through React Server Components prevent visitor abandonment during paid clicks. Delivering dynamically personalized landing content mapped directly to incoming search keywords improves Quality Scores, lowers cost-per-click charges, and doubles conversion velocity."
    },
    {
        "q": "How do you tailor performance marketing for Jewellery Quarter luxury retail brands?",
        "a": "High-value luxury retail requires meticulous audience segmentation, affluent demographic layering, and refined visual storytelling. We combine targeted paid social storytelling with search capture funnels, directing qualified buyers into private showroom booking flows that preserve prestige."
    },
    {
        "q": "How do you prevent budget waste on Google Performance Max campaigns?",
        "a": "We implement granular negative keyword hierarchies, placement brand-safety exclusions, and custom asset groups segmented by intent. By transmitting verified offline CRM conversions into Google Smart Bidding algorithms, we train automated systems to pursue profitable enterprise contracts."
    },
    {
        "q": "How do UK GDPR and PECR regulations impact paid campaign tracking?",
        "a": "UK GDPR and PECR require verifiable user consent before executing tracking scripts. We build robust Google Consent Mode v2 architectures that dynamically adapt telemetry payloads based on user preferences, maintaining rigorous ICO compliance while leveraging algorithmic conversion modeling."
    },
    {
        "q": "What is the typical deployment timeline for an enterprise paid growth engagement?",
        "a": "Our technical onboarding spans two to four weeks, encompassing tracking container configuration, CRM telemetry integration, creative matrix development, and regulatory audits. Scaled media deployment and systematic bid optimization initiate in month one, followed by quarterly incrementality experiments."
    }
];

  const clientReviews = [
    {
        "quote": "DesignNCode transformed our legal practice marketing across the Colmore Business District. Deploying server-side CAPI telemetry alongside custom Next.js landing architectures reduced our cost per qualified corporate instruction by 38% while maintaining total compliance with SRA and GDPR standards.",
        "author": "Alistair Harrington",
        "role": "Senior Partner, Harrington Corporate Law (Colmore Row, Birmingham)",
        "initials": "AH"
    },
    {
        "quote": "Scaling our advanced engineering firm across the West Midlands required rigorous attribution rather than vanity metrics. Ankita Malik and her technical team built closed-loop CRM pipelines and value-based Google search campaigns that expanded our commercial contract pipeline by 240% in nine months.",
        "author": "Eleanor Radford",
        "role": "Commercial Director, Midland Precision Robotics (Solihull, Birmingham)",
        "initials": "ER"
    }
];

  const authoritativeSources = [
    {
        "title": "ICO Direct Marketing & AdTech Guidance",
        "publisher": "Information Commissioner's Office",
        "url": "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/",
        "description": "Statutory standards governing lawful cookie consent mechanisms and digital AdTech data protection."
    },
    {
        "title": "FCA Financial Promotions Rulebook",
        "publisher": "Financial Conduct Authority",
        "url": "https://www.fca.org.uk/firms/financial-promotions-and-adverts",
        "description": "Regulatory mandates establishing fair balance, risk disclosure, and Consumer Duty compliance in advertising."
    },
    {
        "title": "UK Code of Non-broadcast Advertising (CAP Code)",
        "publisher": "Advertising Standards Authority",
        "url": "https://www.asa.org.uk/codes-and-rulings/cap-code.html",
        "description": "Authoritative British advertising standards governing transparency, comparative claims, and digital substantiation."
    },
    {
        "title": "W3C Web Content Accessibility Guidelines 2.2",
        "publisher": "World Wide Web Consortium",
        "url": "https://www.w3.org/TR/WCAG22/",
        "description": "Accessibility standards ensuring compliance with non-discrimination mandates under the Equality Act 2010."
    },
    {
        "title": "London Internet Exchange Peering Architecture",
        "publisher": "LINX Infrastructure",
        "url": "https://www.linx.net/",
        "description": "Technical network interconnection specifications powering low-latency regional edge data routing."
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
            <span className="text-[#2563eb]">Performance Marketing in Birmingham</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              DesignNCode Senior Engineering &amp; Strategy
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.08] mb-6">
              Performance Marketing in Birmingham: Enterprise Paid Growth
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal max-w-3xl">
              Engineered paid acquisition architectures, server-side CAPI telemetry, and algorithmic multi-touch attribution tailored for ambitious Birmingham enterprises and West Midlands commercial leaders.
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
            <section id="birmingham-growth-dynamics" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                1. Birmingham Commercial Landscape & Enterprise Paid Acquisition
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Birmingham stands as Britain&apos;s premier regional economic powerhouse, undergoing rapid commercial transformation driven by infrastructure expansion, professional services decentralization, and technological innovation. From institutional wealth advisors anchoring Colmore Row to creative studios in Digbeth and tech ventures near Aston Science Park, local enterprises face fierce customer acquisition competition. Succeeding in this dynamic economy requires moving beyond generic marketing tactics toward engineered <Link href="/marketing" className="text-[#2563eb] font-semibold hover:underline">performance marketing</Link> systems.
              </p>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                The regional market encompasses distinct commercial ecosystems with specialized economics. High-value industrial suppliers in the West Midlands corridor require account-based precision, while Jewellery Quarter luxury ateliers need immediate high-intent customer acquisition. At DesignNCode, we build bespoke paid growth engines calibrated to these local forces. Combining resilient telemetry with high-velocity <Link href="/Service/web_dev" className="text-[#2563eb] font-semibold hover:underline">web development services</Link>, we help Birmingham enterprises scale across Google Search, Meta Ads, and LinkedIn networks.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="server-side-telemetry" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                2. Server-Side CAPI Tracking, First-Party Data & Edge Containers
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Legacy browser-based pixels suffer heavy signal loss from ad blockers, mobile tracking restrictions, and evolving cookie policies. Relying exclusively on client-side JavaScript tags obscures over thirty percent of actionable conversion signals, misinforming automated bidding algorithms and inflating acquisition costs. We eliminate this vulnerability by deploying dedicated server-side tracking containers hosted on low-latency edge infrastructure. Our telemetry pipeline captures web interactions, securely hashes user identifiers, and transmits validated events directly to Meta and Google endpoints.
              </p>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Deploying edge telemetry on your enterprise root domain restores complete conversion visibility and improves customer match rates on major ad platforms. Real-time event deduplication ensures transactions, qualified lead submissions, and pipeline milestones are recorded accurately without duplicate counting. This first-party data architecture feeds pristine signals into machine learning bid algorithms, training ad platforms to prioritize high-value prospects across the West Midlands while protecting your tracking against browser privacy changes.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="regulatory-compliance" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                3. UK GDPR, ICO AdTech Governance & FCA Compliance Standards
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Running enterprise paid advertising campaigns across the United Kingdom demands strict adherence to statutory privacy legislation and commercial advertising regulations. The Information Commissioner&apos;s Office rigorously enforces cookie consent requirements under PECR and UK GDPR. Furthermore, Birmingham financial institutions and corporate advisory firms across the Colmore Business District must observe Financial Conduct Authority Consumer Duty rules and ASA CAP Code directives. Regulatory compliance must serve as a core technical foundation.
              </p>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Our engineering team deploys deterministic consent management systems utilizing Google Consent Mode v2 and compliant server-side filtering. When visitors decline non-essential cookies, our systems strip personal identifiers while transmitting cookieless pings for privacy-compliant conversion modeling. For regulated financial and professional services, we establish automated review frameworks ensuring mandatory risk disclosures, transparent fee representations, and accessible contractual terms remain consistent, safeguarding your enterprise against compliance risks while driving commercial growth.
              </p>
            </section>

            {/* 4-Sided Bordered Technical Comparison Table */}
            <div className="w-full overflow-x-auto my-8 border border-zinc-200/80 rounded-2xl bg-white/95 backdrop-blur-sm shadow-xs">
              <table className="w-full text-left text-sm md:text-base border-collapse">
                <thead>
                  <tr className="bg-zinc-950 text-white">
                    <th className="p-4 font-bold border-b border-zinc-800 border-r border-white/20">Architecture / Capability</th>
                    <th className="p-4 font-bold border-b border-zinc-800 border-r border-white/20">Legacy Agency Approach</th>
                    <th className="p-4 font-bold border-b border-zinc-800 text-[#FACC15]">DesignNCode Engineered Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/80 text-zinc-800">
                  <tr>
                    <td className="p-4 font-semibold border-r border-zinc-200 bg-zinc-50/50">Telemetry &amp; Conversion Tracking</td>
                    <td className="p-4 border-r border-zinc-200 text-zinc-600">Fragile browser pixels losing 35%+ of data to ad blockers</td>
                    <td className="p-4 font-medium text-zinc-950 bg-blue-50/30">Server-side CAPI edge containers with real-time SHA-256 hashing</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r border-zinc-200 bg-zinc-50/50">Attribution Methodology</td>
                    <td className="p-4 border-r border-zinc-200 text-zinc-600">Flawed last-click reporting inflating brand search metrics</td>
                    <td className="p-4 font-medium text-zinc-950 bg-blue-50/30">Algorithmic multi-touch attribution &amp; geo-matched incrementality</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r border-zinc-200 bg-zinc-50/50">Landing Page Infrastructure</td>
                    <td className="p-4 border-r border-zinc-200 text-zinc-600">Bloated drag-and-drop builders with 4+ second load times</td>
                    <td className="p-4 font-medium text-zinc-950 bg-blue-50/30">Sub-second React Server Components with dynamic keyword injection</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r border-zinc-200 bg-zinc-50/50">CRM Telemetry &amp; Bidding</td>
                    <td className="p-4 border-r border-zinc-200 text-zinc-600">Unfiltered surface leads optimized for low volume cost</td>
                    <td className="p-4 font-medium text-zinc-950 bg-blue-50/30">Closed-loop CRM offline profit signals feeding smart value bidding</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SECTION 4 */}
            <section id="algorithmic-attribution" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                4. Multi-Touch Attribution, Incrementality Testing & Media Mix
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Last-click attribution presents an inherently distorted view of marketing effectiveness by assigning complete conversion value to the final touchpoint. This structural flaw causes marketing leaders to over-invest in branded search while neglecting top-of-funnel discovery channels that initiate buyer awareness. To establish authentic financial accountability, DesignNCode implements econometric media mix modeling paired with algorithmic multi-touch attribution. We analyze how programmatic display impressions, paid social videos, and commercial search queries interact across extended buyer journeys.
              </p>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                To distinguish true marketing causality from baseline organic conversions, we conduct systematic geo-matched incrementality testing across regional media markets. By evaluating conversion lift in target Birmingham test regions against matched control territories across the UK, we measure the precise incremental revenue generated by each marketing investment. This empirical approach eliminates wasted media spend, allowing executive leadership to scale profitable acquisition campaigns with statistical confidence while amplifying synergy across unified <Link href="/Service/seo" className="text-[#2563eb] font-semibold hover:underline">SEO services</Link> and paid channels.
              </p>
            </section>

            {/* Dedicated High-Impact Infographic Banner */}
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
                      Performance Marketing Architecture &amp; Delivery Matrix: Birmingham
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
                    src="/images/infographics/performance-marketing-birmingham.jpg"
                    alt="Performance Marketing in Birmingham Technical Architecture Infographic" width={1200} height={675}
                    className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-zinc-100/90 border-t border-zinc-200 py-3.5 px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse shrink-0" />
                  <span><strong>Strategic Crux:</strong> Server-side telemetry and sub-second Next.js landing architectures maximize ad relevance scores and enterprise acquisition ROAS across the West Midlands.</span>
                </div>
                <Link href="/ContactUs" className="text-[#2563eb] font-bold hover:underline">
                  Schedule Technical Consultation &rarr;
                </Link>
              </div>
            </div>

            {/* SECTION 5 */}
            <section id="nextjs-landing-optimization" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                5. High-Velocity Next.js Landing Pages & Conversion Architecture
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Even the most sophisticated media buying strategy fails when incoming paid traffic reaches sluggish, poorly structured web destinations. Every fraction of a second in page load latency creates a measurable decrease in conversion rates, eroding return on ad spend and inflating acquisition expenses. Our engineering team builds custom, edge-rendered landing page systems powered by Next.js and React Server Components. By eliminating heavy third-party scripts and optimizing assets at the edge, we achieve sub-second page loads and top-tier Core Web Vitals.
              </p>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Speed operates alongside contextual relevance to maximize conversion rates. We implement dynamic server-side content personalization that automatically aligns landing page headlines, value propositions, and proof assets with incoming search keywords and ad creative parameters. Integrated with conversion-focused <Link href="/Service/ui_ux" className="text-[#2563eb] font-semibold hover:underline">UI/UX design services</Link>, streamlined inquiry workflows, and instant backend CRM validation endpoints, our landing page architectures convert expensive paid traffic into qualified enterprise opportunities at significantly higher rates.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="b2b-lead-generation" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                6. B2B Industrial, Professional Services & High-Ticket Lead Gen
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Birmingham&apos;s manufacturing heritage and expanding corporate core generate distinct requirements for high-value business-to-business customer acquisition. Industrial equipment manufacturers, corporate legal practices, and specialist engineering consultancies cannot depend on broad consumer marketing tactics. We design sophisticated account-based marketing programs across LinkedIn Campaign Manager and B2B programmatic networks, targeting verified corporate executives, procurement leaders, and operations directors across specific West Midlands commercial hubs, business parks, and enterprise revenue tiers.
              </p>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                To guide prospective buyers through complex procurement cycles, we deploy progressive lead qualification funnels and value-oriented content delivery mechanisms. When high-value prospects engage with technical whitepapers or interactive evaluation tools, our backend pipelines synchronize behavioral engagement data with your sales platform. This actionable intelligence triggers personalized email nurture sequences and informs commercial sales teams, enabling your representatives to engage key decision-makers at the precise moment purchase intent reaches its peak.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="search-intent-ai-bidding" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                7. Paid Search Domination, Google PMax & First-Party Bidding
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Google Search represents the definitive channel for capturing high-intent commercial demand throughout Birmingham and the West Midlands. However, modern paid search management requires mastering machine learning bidding systems and Google Performance Max asset groups rather than manual bid adjustments. Without rigorous technical controls, automated campaigns routinely waste budget on low-intent search queries and unvetted mobile placements. DesignNCode implements strict governance protocols, combining extensive negative keyword libraries, brand exclusions, and structured audience signals.
              </p>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                We enhance automated bidding algorithms by feeding verified first-party customer values directly into Google Ads through offline conversion tracking. By reporting confirmed gross profit margins, closed enterprise contracts, and qualified pipeline milestones rather than simple form submissions, we instruct smart bidding systems to prioritize lucrative corporate contracts. This value-based bidding framework decreases blended acquisition costs while driving greater bottom-line profitability across competitive regional sectors and high-volume <Link href="/ecommerce" className="text-[#2563eb] font-semibold hover:underline">Shopify and e-commerce development</Link> operations.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="full-funnel-scaling" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                8. Full-Funnel Omnichannel Scaling & Revenue Operations Integration
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                Sustainable commercial growth requires unifying isolated advertising channels into a synchronized, full-funnel customer acquisition engine. Managing campaigns in disconnected silos leads to inconsistent brand messaging, overlapping audience targeting, and inefficient capital allocation. Our full-funnel methodology orchestrates top-of-funnel brand discovery across YouTube and Meta video ads, mid-funnel consideration via authoritative thought leadership content, and bottom-of-funnel conversion capture through high-intent search campaigns and personalized retargeting journeys.
              </p>
              <p className="text-zinc-700 leading-relaxed text-base sm:text-lg">
                We connect your paid media infrastructure directly into enterprise revenue operations platforms, synchronizing advertising data with HubSpot, Salesforce, and custom reporting data warehouses. This unified telemetry stack provides leadership teams with transparent reporting covering customer acquisition cost, payback velocity, and customer lifetime value across every channel. To learn how our performance engineering architecture can accelerate your commercial growth, explore <Link href="/About_us" className="text-[#2563eb] font-semibold hover:underline">about our team</Link>, review <Link href="/Projects" className="text-[#2563eb] font-semibold hover:underline">our featured projects</Link>, or <Link href="/ContactUs" className="text-[#2563eb] font-semibold hover:underline">contact our engineering team</Link> for a strategic consultation.
              </p>
            </section>

            {/* Localized Client Reviews Section */}
            <section id="reviews" className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs text-left scroll-mt-28">
              <div className="flex items-center justify-between gap-4 mb-6 border-b border-zinc-100 pb-4">
                <div className="flex gap-1 text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">
                  Client Reviews: Birmingham
                </h3>
              </div>

              <div className="flex flex-col gap-8">
                {clientReviews.map((rev, idx) => (
                  <div key={idx} className={idx === 0 ? "border-b border-zinc-100 pb-6" : ""}>
                    <p className="text-[16px] text-zinc-700 leading-relaxed font-medium italic mb-4">
                      &quot;{rev.quote}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-zinc-100 flex items-center justify-center font-bold text-zinc-600">
                        {rev.initials}
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-zinc-950">{rev.author}</p>
                        <p className="text-[12px] text-zinc-500 uppercase tracking-wide font-mono">{rev.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive FAQ Section (8 Custom Localized FAQs) */}
            <section id="faq" className="w-full bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-3xl p-8 shadow-xs text-left scroll-mt-28">
              <div className="mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2563eb] uppercase block mb-1">
                  FAQ Knowledge Base
                </span>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="divide-y divide-zinc-200/80">
                {faqsList.map((faq, idx) => (
                  <details key={idx} className="group py-4 select-none cursor-pointer">
                    <summary className="flex justify-between items-center font-bold text-zinc-900 text-base list-none group-hover:text-[#2563eb] transition-colors">
                      <span>{faq.q}</span>
                      <span className="text-[#2563eb] font-light text-xl group-open:rotate-45 transition-transform duration-200">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-zinc-600 text-sm leading-relaxed pl-1 font-normal">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Authoritative Sources & Citations Section */}
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
                        <svg className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#2563eb] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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
            <div className="bg-zinc-950 text-white rounded-3xl p-6 border border-zinc-800 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FACC15] uppercase block">
                  Lead Technical Author
                </span>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-800 shrink-0 flex items-center justify-center font-bold text-sky-400">
                    AM
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Ankita Malik</h4>
                    <p className="text-xs text-zinc-400">Founder &amp; Web Developer</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Lead Technologist at DesignNCode guiding enterprise engineering, UI/UX systems, and conversion-focused digital architecture.
                </p>

                <div className="pt-2 border-t border-zinc-800">
                  <Link
                    href="/About_us"
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>Read Executive Profile</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Contact Widget */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-zinc-200/80 shadow-xs space-y-4">
              <h4 className="font-bold text-sm text-zinc-950 uppercase tracking-wide">
                Direct Engineering Line
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Connect with our senior technical strategists to scope your performance growth requirements.
              </p>
              <div className="space-y-2.5 pt-1 text-xs font-medium">
                <a href="tel:+919220721921" className="flex items-center gap-2.5 text-zinc-800 hover:text-[#2563eb] transition-colors">
                  <svg className="w-4 h-4 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 92207 21921</span>
                </a>
                <a href="mailto:info@designncode.com" className="flex items-center gap-2.5 text-zinc-800 hover:text-[#2563eb] transition-colors">
                  <svg className="w-4 h-4 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@designncode.com</span>
                </a>
              </div>
              <Link
                href="/ContactUs"
                className="w-full block text-center bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors shadow-xs"
              >
                Start Your Project &rarr;
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
