"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "./Components/FAQ";
import Footer from "./Components/footer";

export interface ServicePageHeading {
  id: string;
  label: string;
}

export interface ServicePageSection {
  id: string;
  title: string;
  text: string[];
  bullets?: string[];
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  image: string;
  headings: ServicePageHeading[];
  introduction: string[];
  sections: ServicePageSection[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_PAGES_DATA: Record<string, ServicePageData> = {
  "loan-settlement": {
    title: "How to Negotiate a Loan Settlement Legally in India?",
    subtitle: "A comprehensive legal guide on debt settlement procedures, CIBIL impacts, and protecting yourself against harassment.",
    image: "/Web.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "what-is-settlement", label: "1. What is a Loan Settlement?" },
      { id: "settlement-procedure", label: "2. The Step-by-Step Settlement Procedure" },
      { id: "cibil-impact", label: "3. Does it Impact Your CIBIL Score?" },
      { id: "harassment-protection", label: "4. Legal Protections Against Harassment" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "Struggling with unmanageable debt is a stressful reality for many individuals and businesses in India. When regular EMIs become impossible to pay, banks and financial institutions may offer a 'loan settlement' option.",
      "While a settlement can relieve immediate financial pressure, it has long-term implications for your credit profile. This guide explains the legal frameworks, procedural steps, and your consumer rights during a loan settlement negotiation."
    ],
    sections: [
      {
        id: "what-is-settlement",
        title: "1. What is a Loan Settlement?",
        text: [
          "A loan settlement is an agreement between the borrower and the lender where the lender agrees to accept a lower amount than the total outstanding balance and write off the remaining debt. This option is typically proposed only when a borrower is in genuine financial distress and has defaulted for several months.",
          "Once the agreed settled amount is paid, the bank closes the account and reports the status as 'Settled' to credit bureaus like CIBIL."
        ],
        bullets: [
          "Mutual Agreement: Both parties must consent in writing to the terms of the settlement.",
          "Partial Payment: The borrower pays a lump sum (often 25% to 50% of the total outstanding amount).",
          "Debt Write-off: The bank agrees to close the loan and stop all collection and recovery activities."
        ]
      },
      {
        id: "settlement-procedure",
        title: "2. The Step-by-Step Settlement Procedure",
        text: [
          "To legally settle a loan, you must follow a structured process to ensure the agreement is valid and protect yourself from future claims by the lender:",
          "To start the process, assess your finances to determine a realistic lump sum amount you can offer. Next, write a formal request letter to the bank detailing your financial distress (medical emergency, job loss, etc.). From there, negotiate with the bank's settlement committee to arrive at a mutually agreeable amount. Finally, obtain a formal 'Settlement Letter' on official bank letterhead detailing the exact terms before making any payment."
        ],
        bullets: [
          "Get it in Writing: Never pay a settlement without a signed Settlement Letter from the bank.",
          "Check the Terms: Ensure the letter explicitly states that the account will be closed and no future collection actions will be taken.",
          "Obtain an NDC: Once the payment is complete, request a No Dues Certificate (NDC) from the lender."
        ]
      },
      {
        id: "cibil-impact",
        title: "3. Does it Impact Your CIBIL Score?",
        text: [
          "Yes, a loan settlement has a negative impact on your credit score. When a bank reports an account as 'Settled' (rather than 'Closed' or 'Written Off'), it tells future lenders that you did not pay the full agreed amount.",
          "The 'Settled' remark remains on your CIBIL report for 7 years, making it difficult to qualify for new loans or credit cards. If you need to borrow in the future, it is highly recommended to eventually pay off the written-off balance to convert the status to 'Closed'."
        ]
      },
      {
        id: "harassment-protection",
        title: "4. Legal Protections Against Harassment",
        text: [
          "Borrowers are protected by strict regulations established by the Reserve Bank of India (RBI) and judicial rulings:",
          "Lenders and their third-party recovery agents are strictly prohibited from using abusive language, calling at unreasonable hours (outside 8 AM to 7 PM), making continuous calls, or visiting your workplace without prior notice. If you face harassment, you have the legal right to file a police complaint or approach the Banking Ombudsman."
        ]
      }
    ],
    faqs: [
      {
        q: "Is loan settlement a legal option?",
        a: "Yes, loan settlement is a legal agreement between the borrower and the lender governed by contract laws in India and regulated by RBI guidelines."
      },
      {
        q: "How much discount can I expect in a settlement?",
        a: "Discount percentages vary based on the loan type and bank policy, but typically banks may agree to a waiver of 50% to 75% of the total outstanding amount for unsecured loans in cases of extreme distress."
      },
      {
        q: "Can recovery agents visit my house during settlement negotiations?",
        a: "Recovery agents may visit you to communicate, but they must follow the RBI code of conduct. They cannot enter your house without permission, threaten you, or cause public humiliation."
      }
    ]
  },
  "custom-code-vs-wordpress": {
    title: "Why Custom Code is Better than WordPress",
    subtitle: "A detailed guide on Next.js performance, security, and scalability vs monolithic platforms.",
    image: "/Web.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "speed-comparison", label: "1. Page Speed & Core Web Vitals" },
      { id: "security-comparison", label: "2. Security & Vulnerabilities" },
      { id: "scalability", label: "3. Unlimited Scalability" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "Traditional Content Management Systems (CMS) like WordPress have powered a massive portion of the web for over two decades. However, as web standards evolve and users demand near-instant loading times, monolithic architectures are increasingly revealing their limitations.",
      "Custom development leveraging modern React-based frameworks like Next.js represents the new frontier of enterprise web products. By separating the database and operational code from the presentation layer, custom systems deliver unparalleled speed, security, and operational ease."
    ],
    sections: [
      {
        id: "speed-comparison",
        title: "1. Page Speed & Core Web Vitals",
        text: [
          "WordPress relies on server-side database querying on every page request. When a user visits your site, the server must query MySQL, compile the HTML, and send it back. Under high traffic loads, this database query cycle bogs down, leading to high latency.",
          "Next.js, by contrast, compiles your pages into lightweight static HTML files ahead of time. These files are served from a global CDN, loading almost instantly. This performance difference is directly reflected in your Google Core Web Vitals, which is a major factor in search rankings."
        ],
        bullets: [
          "Static Generation: Pages load in milliseconds directly from the nearest edge server.",
          "Optimized Assets: Native Next.js components handle automatic image resizing and font optimization.",
          "Zero Performance Drag: No bloated database queries or unoptimized plugin packages."
        ]
      },
      {
        id: "security-comparison",
        title: "2. Security & Vulnerabilities",
        text: [
          "Monolithic architectures are highly targeted by automated hacking bots. Because WordPress links the administrative login dashboard directly to the same database as the frontend, it presents a large attack surface.",
          "With custom headless frameworks, the frontend is completely decoupled. There is no server dashboard or database exposed to the public internet, making it virtually impossible for malicious agents to inject database queries or breach the administration panel."
        ],
        bullets: [
          "No Database Exposure: The frontend communicates with APIs only via secure read-only keys.",
          "Decoupled Frontend: Hacking the frontend website does not compromise the underlying database.",
          "Reduced Dependency Risk: No need for third-party security plugins that require frequent patching."
        ]
      },
      {
        id: "scalability",
        title: "3. Unlimited Scalability",
        text: [
          "Scaling a WordPress website to handle millions of visitors requires expensive hosting solutions, multi-tier caching architectures, and continuous performance tuning.",
          "A statically generated Next.js website scales automatically. Since the frontend is distributed as static files on a CDN, it can handle hundreds of thousands of concurrent page requests without crashing and without costing a fortune in server resources."
        ]
      }
    ],
    faqs: [
      {
        q: "Is WordPress bad for SEO?",
        a: "WordPress has good plugins like Yoast, but because Page Speed is a direct ranking factor in Google's algorithm, the loading lag of monolithic WordPress sites can severely hold back your organic search ranking potential."
      },
      {
        q: "Is custom coding more expensive than WordPress?",
        a: "While the initial development cost of custom coding is higher, it pays off in the long run by eliminating hosting overheads, database maintenance, plugin license costs, and security audit fees."
      }
    ]
  },
  "why-shopify-is-good-for-e-commerce": {
    title: "Why Shopify is Good for E-Commerce",
    subtitle: "From seamless checkout systems to unlimited scaling, explore why Shopify remains the leading platform.",
    image: "/E-Commerce.png",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "checkout-optimization", label: "1. The Industry-Leading Checkout" },
      { id: "scalability", label: "2. Scale Without Server Crash" },
      { id: "headless-shopify", label: "3. Headless Shopify Options" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "Building a custom e-commerce solution from scratch is a massive undertaking. Managing payment systems, PCI compliance, inventory synchronizations, and shipping APIs requires continuous development overhead.",
      "Shopify has established itself as the gold standard for e-commerce because it abstracts these complex operational pipelines while providing developers with flexible customization tools. In this article, we outline why leading brands trust Shopify for their e-commerce storefronts."
    ],
    sections: [
      {
        id: "checkout-optimization",
        title: "1. The Industry-Leading Checkout",
        text: [
          "Shopify's 'Shop Pay' checkout system is optimized for high-speed conversion. It allows customers to complete transactions in a single tap, significantly reducing abandoned cart rates.",
          "According to industry statistics, Shopify's checkout conversion rate is up to 36% higher than custom-built checkouts because of its optimized form inputs, seamless payment caching, and robust security integrations."
        ]
      },
      {
        id: "scalability",
        title: "2. Scale Without Server Crash",
        text: [
          "During major sales events like Black Friday or Cyber Monday, traffic spikes can easily crash traditional e-commerce platforms. With Shopify, your store runs on a globally distributed, cloud-hosted architecture that scales dynamically under high loads.",
          "Shopify handles millions of checkout requests simultaneously without server lag, giving you peace of mind during your biggest product launches and sales seasons."
        ]
      },
      {
        id: "headless-shopify",
        title: "3. Headless Shopify Options",
        text: [
          "For brands demanding custom animations and unique product configurations, Shopify can be used in a 'headless' mode. This means Shopify manages the backend inventory and payment processing, while a fast framework like Next.js handles the custom frontend design."
        ]
      }
    ],
    faqs: [
      {
        q: "What is Shopify Plus?",
        a: "Shopify Plus is the enterprise version of Shopify, designed for high-volume merchants. It provides advanced API limits, custom checkout scripts, multi-currency support, and dedicated priority support."
      },
      {
        q: "Can I use Shopify with custom domains and branding?",
        a: "Yes, Shopify is fully white-labeled, allowing you to use custom domain configurations, custom themes, and completely unified brand visuals."
      }
    ]
  },
  "power-of-nextjs": {
    title: "The Power of Next.js for Modern Web Apps",
    subtitle: "Explore the core features that make Next.js the industry standard for React-based applications.",
    image: "/Web.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "rendering-strategies", label: "1. Hybrid Rendering Modes" },
      { id: "image-optimization", label: "2. Image and Font Optimization" },
      { id: "routing", label: "3. The Next.js App Router" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "React revolutionized frontend engineering by introducing component-based UI design. However, standard client-side React apps have historically struggled with SEO because search engine crawlers struggle to read JavaScript-heavy single-page applications.",
      "Next.js solves this by introducing hybrid rendering strategies. By compiling components on the server, Next.js delivers ready-to-read HTML pages to crawlers while maintaining the interactive single-page app experience for users."
    ],
    sections: [
      {
        id: "rendering-strategies",
        title: "1. Hybrid Rendering Modes",
        text: [
          "Next.js allows developers to choose their rendering strategy on a page-by-page basis: Server-Side Rendering (SSR), Static Site Generation (SSG), or Incremental Static Regeneration (ISR).",
          "This flexibility means marketing pages can be statically compiled for instant CDN delivery, while dynamic user dashboards compile on demand to show real-time account data."
        ]
      },
      {
        id: "image-optimization",
        title: "2. Image and Font Optimization",
        text: [
          "Unoptimized media files are the leading cause of website lag. Next.js includes native optimization modules that convert images into modern file formats like WebP or AVIF on the fly, and automatically size them according to the screen layout."
        ]
      },
      {
        id: "routing",
        title: "3. The Next.js App Router",
        text: [
          "The modern App Router provides structured file-based routing, nested layouts, and React Server Components (RSC). This reduces the amount of JavaScript sent to the browser, significantly accelerating page rendering."
        ]
      }
    ],
    faqs: [
      {
        q: "What are React Server Components?",
        a: "React Server Components are components that render exclusively on the server, avoiding any browser JavaScript execution costs and allowing direct backend database querying inside your UI components."
      },
      {
        q: "Is Next.js good for SEO?",
        a: "Yes, it is the best framework for React SEO because it automatically delivers pre-compiled, fast-loading static HTML with built-in metadata, Open Graph tags, and layout shift prevention."
      }
    ]
  },
  "branding-and-business-success": {
    title: "How Branding Dictates Business Success",
    subtitle: "Discover why branding is the ultimate foundation for client trust and long-term valuation.",
    image: "/Design.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "perceived-value", label: "1. Perceived Value and Pricing Power" },
      { id: "market-trust", label: "2. Market Trust and Loyalty" },
      { id: "digital-identity", label: "3. The Unified Digital Identity" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "Many business owners assume that branding is simply having a logo, a color palette, and a matching business card. In reality, branding is the psychological sum of all consumer interactions with your business.",
      "Branding determines how much consumers are willing to pay, whether they trust your promises, and whether they choose your service over cheaper competitors. Here is how premium branding drives business growth."
    ],
    sections: [
      {
        id: "perceived-value",
        title: "1. Perceived Value and Pricing Power",
        text: [
          "Why do consumers pay $1,000 for a smartphone from one brand while rejecting a similar device from another at half the cost? The difference lies entirely in perceived value.",
          "A premium brand establishes a sense of quality, prestige, and security. By aligning your business visuals, typography, and website experience with this premium feel, you command high pricing power."
        ]
      },
      {
        id: "market-trust",
        title: "2. Market Trust and Loyalty",
        text: [
          "Consistent branding builds familiarity, and familiarity breeds trust. When all touchpoints - your social channels, website, customer portals, and packaging - look unified, it signals that your organization is stable and professional."
        ]
      },
      {
        id: "digital-identity",
        title: "3. The Unified Digital Identity",
        text: [
          "Your website is the center of your digital brand. A custom-designed, fast website with smooth micro-animations reinforces your brand's commitment to quality far better than a generic, slow template ever could."
        ]
      }
    ],
    faqs: [
      {
        q: "When should a company rebrand?",
        a: "A company should consider rebranding when its target audience shifts, its current visuals look dated compared to competitors, or its core business offerings have significantly evolved."
      },
      {
        q: "Does branding affect employee recruitment?",
        a: "Absolutely. High-quality talent wants to align with successful, recognizable brands. Clear branding helps you recruit and retain top-tier professionals."
      }
    ]
  },
  "future-of-headless-architecture": {
    title: "The Future of Headless Architecture",
    subtitle: "Separating the layout from content APIs to enable unified multi-channel client experiences.",
    image: "/5.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "decoupled-systems", label: "1. The Decoupled Frontend" },
      { id: "omnichannel-delivery", label: "2. Omnichannel Content Delivery" },
      { id: "maintenance", label: "3. Easier System Maintenance" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "In traditional CMS architectures, the admin dashboard and the website display code are bound together. This monolithic structure means a change in your content layout can inadvertently break backend functions.",
      "Headless architecture solves this by separating the backend database (where content is written) from the frontend display. Content is delivered as raw API data, which can be rendered anywhere."
    ],
    sections: [
      {
        id: "decoupled-systems",
        title: "1. The Decoupled Frontend",
        text: [
          "By separating content storage from design layouts, frontend developers can build layouts using fast libraries like Next.js, while copywriters edit text inside a secure backend. The two systems interact only via APIs."
        ]
      },
      {
        id: "omnichannel-delivery",
        title: "2. Omnichannel Content Delivery",
        text: [
          "Because your content resides in a headless API database, it is not tied to a single website. The same API data can be pulled by your website, mobile apps, digital signs, or smartwatches, creating a unified customer journey."
        ]
      },
      {
        id: "maintenance",
        title: "3. Easier System Maintenance",
        text: [
          "In headless architectures, scaling up your backend or editing layouts does not cause website downtime. You can modify components independently without affecting user checkouts or content displays."
        ]
      }
    ],
    faqs: [
      {
        q: "What is a Headless CMS?",
        a: "A Headless CMS is a content management platform that provides content creators with an editor, but delivers the content purely via APIs (JSON/GraphQL) instead of rendering a pre-designed website layout."
      },
      {
        q: "Is headless development complex?",
        a: "It requires more specialized engineering skills to set up initially than standard template platforms, but it delivers massive benefits in scaling, loading speeds, and security."
      }
    ]
  },
  "optimizing-page-speed": {
    title: "Optimizing Page Speed for Conversion",
    subtitle: "Every millisecond counts. Discover the direct link between loading speeds and business revenue.",
    image: "/Data.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "conversion-correlation", label: "1. The Speed-to-Revenue Correlation" },
      { id: "auditing-vitals", label: "2. Auditing Core Web Vitals" },
      { id: "optimization-techniques", label: "3. Crucial Speed Techniques" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "The patience of digital consumers decreases every year. Industry data shows that a page load delay of just one second can result in a 7% drop in e-commerce conversion rates.",
      "If your site takes three seconds or longer to load, over 50% of mobile visitors will abandon the page entirely. Speed optimization is not just a technical metric; it is a critical marketing optimization."
    ],
    sections: [
      {
        id: "conversion-correlation",
        title: "1. The Speed-to-Revenue Correlation",
        text: [
          "Fast loading speeds build momentum. When a user clicks a button and the next page renders instantly, they are more likely to browse more products, add items to their cart, and complete checkouts."
        ]
      },
      {
        id: "auditing-vitals",
        title: "2. Auditing Core Web Vitals",
        text: [
          "Google measures website performance using three Core Web Vitals: LCP (loading speed of the main element), FID (interactivity response time), and CLS (layout stability). Optimizing these metrics is crucial for high SEO rankings."
        ]
      },
      {
        id: "optimization-techniques",
        title: "3. Crucial Speed Techniques",
        text: [
          "To achieve fast loading, we compile static pages, inline critical CSS, load external scripts asynchronously, compress assets using next-gen compression formats, and cache database responses at the CDN edge."
        ]
      }
    ],
    faqs: [
      {
        q: "How do I check my website speed?",
        a: "You can use Google's free PageSpeed Insights tool, which runs a Lighthouse audit and shows real-world loading speed diagnostics."
      },
      {
        q: "What is Cumulative Layout Shift (CLS)?",
        a: "CLS measures how much elements shift on the screen during loading. High CLS occurs when images or ads load slowly and push content down, causing users to misclick elements."
      }
    ]
  },
  "seo-in-digital-growth": {
    title: "The Role of SEO in Modern Digital Growth",
    subtitle: "Why structured search engine optimization is the key to organic client acquisition.",
    image: "/Web.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "organic-traffic", label: "1. High-Intent Organic Traffic" },
      { id: "technical-seo", label: "2. Technical SEO Foundations" },
      { id: "content-strategy", label: "3. Structured Content Mapping" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "Paid advertising on Google and Meta is an excellent way to launch a business. However, as ad bidding costs continue to rise, relying exclusively on paid acquisition channels can squeeze profit margins.",
      "Search Engine Optimization (SEO) establishes a sustainable stream of high-intent organic traffic that does not require ad spend for every click, driving high customer lifetime value."
    ],
    sections: [
      {
        id: "organic-traffic",
        title: "1. High-Intent Organic Traffic",
        text: [
          "When a user searches for a specific problem on Google, they have high commercial intent. Providing detailed answers to their queries positions your brand as a trusted authority, leading to high inquiry conversions."
        ]
      },
      {
        id: "technical-seo",
        title: "2. Technical SEO Foundations",
        text: [
          "Great articles are useless if search crawlers cannot index your site. We optimize technical foundations by generating clean sitemaps, structured schema markup, prevented layout shifts, and mobile-first layouts."
        ]
      },
      {
        id: "content-strategy",
        title: "3. Structured Content Mapping",
        text: [
          "To rank high, you must demonstrate topical authority. We map out content clusters containing comprehensive guides, detailed FAQs, and case studies that cover search queries in detail."
        ]
      }
    ],
    faqs: [
      {
        q: "How long does it take for SEO to show results?",
        a: "SEO is a long-term strategy. Typically, it takes 3 to 6 months to start ranking for competitive keywords as search bots crawl your site and index content authority."
      },
      {
        q: "What is Schema Markup?",
        a: "Schema is a semantic vocabulary of tags added to your HTML to help search engines understand the context of your data, enabling rich snippets like FAQ cards in search results."
      }
    ]
  },
  "maximizing-roas-meta-ads": {
    title: "Maximizing ROAS on Meta Ads",
    subtitle: "A deep dive into ad creative testing, custom audience scaling, and pixel setups.",
    image: "/Data.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "creative-testing", label: "1. High-Frequency Creative Testing" },
      { id: "pixel-tracking", label: "2. The Meta Conversions API Setup" },
      { id: "funnel-strategy", label: "3. Full-Funnel Bidding Strategies" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "Running Facebook and Instagram ads is a powerful engine for digital client acquisition. However, many marketers struggle with unstable ad performance, fluctuating Return on Ad Spend (ROAS), and ad fatigue.",
      "Maximizing ROAS in 2026 requires moving away from complex audience targeting hacks and focusing on high-performing ad creatives, clean tracking pipelines, and customer journey optimization."
    ],
    sections: [
      {
        id: "creative-testing",
        title: "1. High-Frequency Creative Testing",
        text: [
          "The Meta ad auction algorithm is heavily creative-driven. We run structured testing campaigns, iterating on headlines, hook elements, and video lengths to discover winning assets that scale."
        ]
      },
      {
        id: "pixel-tracking",
        title: "2. The Meta Conversions API Setup",
        text: [
          "Conversions API is a server-to-server connection that sends customer events directly from your website server to Meta, overcoming browser cookie blocking and improving custom targeting."
        ]
      },
      {
        id: "funnel-strategy",
        title: "3. Full-Funnel Bidding Strategies",
        text: [
          "By implementing middle and bottom funnel retargeting along with broad interest prospecting, we target ads to users based on their active interest, reducing acquisition cost and stabilizing ROAS."
        ]
      }
    ],
    faqs: [
      {
        q: "What is Conversions API (CAPI)?",
        a: "Conversions API is a server-to-server connection that sends customer events directly from your website server to Meta, overcoming browser cookie blocking and improving custom targeting."
      }
    ]
  },
  "photography-for-luxury-brands": {
    title: "Why High-End Photography is Crucial for Luxury Brands",
    subtitle: "Visual asset quality is the single greatest driver of premium perceived value.",
    image: "/Design.svg",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "luxury-perception", label: "1. Perception of Brand Value" },
      { id: "conversion-lift", label: "2. Visual Asset Conversion Lift" },
      { id: "art-direction", label: "3. Lighting & Art Direction" },
      { id: "faqs", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" }
    ],
    introduction: [
      "For luxury and high-end brands, customer purchase decisions are driven by emotion, status, and aesthetic appreciation rather than practical utility.",
      "High-end visual asset quality makes your product feel exclusive, premium, and worth a premium price tag. Here is why luxury photography is crucial for brand success."
    ],
    sections: [
      {
        id: "luxury-perception",
        title: "1. Perception of Brand Value",
        text: [
          "Low-quality, unedited product photos signal that the underlying item is cheap. High-end art direction, studio lighting, and meticulous retouching elevate the perceived quality of your product before the customer ever touches it."
        ]
      },
      {
        id: "conversion-lift",
        title: "2. Visual Asset Conversion Lift",
        text: [
          "A premium storefront requires high-fidelity, large-scale visual assets. Optimizing lighting and showing detailed textures has a direct correlation with conversion rate lift on product detail pages."
        ]
      },
      {
        id: "art-direction",
        title: "3. Lighting & Art Direction",
        text: [
          "Control key-light setups, dynamic drop shadows, high contrast highlights, and matching color temperature parameters are what separates professional studio photography from home-made phone photos."
        ]
      }
    ],
    faqs: [
      {
        q: "What makes photography look premium?",
        a: "It comes down to professional art direction: using natural or controlled key-light setups, careful composition, precise color grading, and styling that tells a cohesive brand story."
      }
    ]
  }
};

export function AMAServiceLayout({ slug }: { slug: string }) {
  const pageData = SERVICE_PAGES_DATA[slug];
  const [activeHeadingId, setActiveHeadingId] = useState("intro");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    if (!pageData) return;
    const handleScroll = () => {
      let currentActive = "intro";
      const elements = [
        { id: "intro" },
        ...pageData.headings.filter((h) => h.id !== "intro")
      ];
      for (const item of elements) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            currentActive = item.id;
          }
        }
      }
      setActiveHeadingId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageData]);

  if (!pageData) {
    return <div className="min-h-screen bg-white pt-32 text-center text-zinc-500">Resource not found.</div>;
  }

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen bg-transparent pt-24 text-zinc-900 font-sans">
      <div className="max-w-9xl lg:max-w-[1600px] mx-auto w-full px-6 sm:px-8 py-12">
        {/* Title and Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-4">
          {pageData.title}
        </h1>
        <p className="text-zinc-500 text-lg sm:text-xl font-normal leading-relaxed max-w-4xl mb-8">
          {pageData.subtitle}
        </p>

        {/* Hero Banner Image */}
        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-sm border border-zinc-100 bg-zinc-50">
          <Image
            src={pageData.image}
            alt={pageData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Sticky Table of Contents (Left) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100">
            <h3 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-4">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-2">
              {pageData.headings.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleTocClick(e, item.id)}
                  className={`text-sm font-medium border-l-2 pl-3 py-1 transition-all duration-200 ${
                    activeHeadingId === item.id
                      ? "border-sky-500 text-sky-600 font-semibold bg-sky-50/40"
                      : "border-transparent text-zinc-500 hover:text-zinc-900 hover:border-zinc-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Column 2: Article Body (Middle) */}
          <article className="col-span-1 lg:col-span-6 space-y-12">
            
            {/* Introduction */}
            <section id="intro" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">Introduction</h2>
              {pageData.introduction.map((para, i) => (
                <p key={i} className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                  {para}
                </p>
              ))}
            </section>

            {/* Sections */}
            {pageData.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">{sec.title}</h2>
                {sec.text.map((t, i) => (
                  <p key={i} className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                    {t}
                  </p>
                ))}
                {sec.bullets && sec.bullets.length > 0 && (
                  <div className="bg-rose-50/40 border-l-4 border-rose-400 p-5 rounded-r-2xl space-y-2 mt-4">
                    <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-1">
                      {sec.bullets.map((b, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: b }} />
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* FAQs */}
            {pageData.faqs && pageData.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-28 space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">Frequently Asked Questions</h2>
                
                <div className="space-y-4 border-t border-zinc-100 pt-4">
                  {pageData.faqs.map((item, idx) => (
                    <div key={idx} className="border-b border-zinc-100 pb-4">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="flex justify-between items-center w-full text-left py-2 font-semibold text-zinc-800 hover:text-sky-600 transition-colors"
                      >
                        <span>{item.q}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${openFaqIndex === idx ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaqIndex === idx && (
                        <p className="text-sm text-zinc-500 mt-2 leading-relaxed pl-1">
                          {item.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Conclusion */}
            <section id="conclusion" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">Conclusion</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Whether you are launching a new site or optimizing an existing digital presence, selecting clean architectures, optimized designs, and data-driven marketing plays sets up long-term operational success and premium brand representation.
              </p>
            </section>

          </article>

          {/* Column 3: Sticky Sidebar (Right) */}
          <aside className="col-span-1 lg:col-span-3 sticky top-28 space-y-8 self-start">
            
            {/* Widget 1: Connect with Us */}
            <div className="bg-zinc-950 rounded-3xl p-6 border border-zinc-800 shadow-xl flex flex-col relative overflow-hidden text-white select-none">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-rose-400/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-lg font-bold tracking-tight">Connect with Us</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Speak with our enterprise solutions specialist to scope out your next project.
                </p>
                <div className="space-y-3.5 py-2">
                  <a href="tel:+919220721921" className="flex items-center gap-3 hover:text-sky-400 transition-colors text-white">
                    <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-semibold">+91 92207 21921</span>
                  </a>
                  <a href="mailto:info@designncode.com" className="flex items-center gap-3 hover:text-sky-400 transition-colors text-white">
                    <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">info@designncode.com</span>
                  </a>
                </div>
                <div className="pt-1">
                  <Link
                    href="/ContactUs"
                    className="w-full block text-center bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md cursor-pointer"
                  >
                    Request Callback
                  </Link>
                </div>
              </div>
            </div>

            {/* Widget 2: Related Resources (List) */}
            <div className="bg-white border border-zinc-150 rounded-3xl p-6 shadow-xs flex flex-col">
              <h4 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase border-b border-zinc-100 w-full pb-3 mb-4 select-none">
                Related Resources
              </h4>
              <ul className="space-y-3.5">
                {Object.keys(SERVICE_PAGES_DATA)
                  .filter((s) => s !== slug)
                  .slice(0, 4)
                  .map((s) => (
                    <li key={s}>
                      <Link
                        href={`/Blogs/${s}`}
                        className="text-sm font-semibold text-zinc-800 hover:text-rose-600 transition-colors leading-snug block"
                      >
                        {SERVICE_PAGES_DATA[s].title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Widget 3: Firm Statistics Card */}
            <div className="bg-white border border-zinc-150 rounded-3xl p-6 shadow-xs flex flex-col">
              <h4 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase border-b border-zinc-100 w-full pb-3 mb-5 select-none">
                Designncode Metrics
              </h4>
              <div className="space-y-4 text-zinc-700">
                <div>
                  <div className="text-2xl font-bold text-sky-500">150+ Projects</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Delivered globally with custom designs.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-rose-500">45% Faster</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Average page loading speed improvement.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-500">98% CSAT</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Client satisfaction rating year-over-year.</div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>



      <FAQ />
      <Footer />
    </main>
  );
}
