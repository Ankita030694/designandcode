"use client";

import React from "react";
import ServiceSlugPage from "@/components/ServiceSlugPage";

export default function WebDevelopmentService() {
  const heroGraphic = (
    <div className="flex flex-col h-full justify-between select-none">
      {/* Code Editor Window Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono font-bold">
          VS Code - index.tsx
        </span>
      </div>

      {/* Editor Main Code Lines */}
      <div className="flex-1 flex flex-col justify-center gap-2.5 font-mono text-[11px] py-4 text-white/90">
        <div>
          <span className="text-purple-400">import</span>{" "}
          <span className="text-blue-300">React</span>{" "}
          <span className="text-purple-400">from</span>{" "}
          <span className="text-green-300">&quot;react&quot;</span>;
        </div>
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-300">DesignncodeApp</span> = () =&gt; &#123;
        </div>
        <div className="pl-4">
          <span className="text-purple-400">return</span> (
        </div>
        <div className="pl-8">
          <span className="text-gray-500">&lt;</span>
          <span className="text-yellow-400">div</span>{" "}
          <span className="text-blue-300">className</span>=
          <span className="text-green-300">&quot;w-full bg-navy&quot;</span>
          <span className="text-gray-500">&gt;</span>
        </div>
        <div className="pl-12 flex items-center gap-1.5">
          <span className="text-gray-500">&lt;</span>
          <span className="text-yellow-400">h1</span>
          <span className="text-gray-500">&gt;</span>
          <span className="text-white font-bold">Fast &amp; Secure</span>
          <span className="text-gray-500">&lt;/</span>
          <span className="text-yellow-400">h1</span>
          <span className="text-gray-500">&gt;</span>
        </div>
        <div className="pl-8">
          <span className="text-gray-500">&lt;/</span>
          <span className="text-yellow-400">div</span>
          <span className="text-gray-500">&gt;</span>
        </div>
        <div className="pl-4">
          );
        </div>
        <div>
          &#125;;
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-mono text-white/40">
        <span>TypeScript</span>
        <span>Lighthouse: 100/100</span>
      </div>
    </div>
  );

  const capabilities = [
    {
      title: "React & Next.js Engineering",
      description: "Developing custom Next.js websites using static compilation, server rendering, and dynamic routing for unbeatable speeds.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Headless CMS Architectures",
      description: "Decoupling content management from the frontend layout. Use clean editor consoles like Sanity or Strapi without monolithic code drag.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Custom API Integrations",
      description: "Connecting third-party services, secure payment gateways, inventory CRMs, and database pipelines via lightweight rest or graph APIs.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: "Core Web Vitals & Auditing",
      description: "Optimizing code execution, asset bundling, font layouts, and image sizes to reach perfect scores on Google PageSpeed Insight.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Technical SEO Foundation",
      description: "Integrating search engine metadata, automatic sitemap configurations, canonical configurations, and robots configurations directly into page logic.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      title: "Cloud Deployment & CDN",
      description: "Deploying code on global CDNs like Vercel, Netlify, or AWS, ensuring close-proximity server delivery and near-zero downtime.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ];

  const deepDiveItems = [
    {
      title: "Architecture & Data Mapping",
      description: "We design the backend data schemas and outline API connections. This ensures your CMS structure maps clean fields before writing UI logic.",
      bullets: [
        "Interactive schemas mapping page models in headless CMS consoles",
        "API pipeline structure diagrams outlining third-party service mappings",
        "Scalable hosting models and repository configurations",
      ],
      tags: ["Data Schemas", "System Architecture", "CMS Models"],
    },
    {
      title: "High-Performance Engineering",
      description: "Our developers translate design components into semantic, reusable React components, keeping CSS payloads light.",
      bullets: [
        "Next.js App Router code structured for search engine crawlers",
        "Utility-driven component styling with Tailwind CSS or custom CSS modules",
        "GSAP and Framer Motion layout configurations for micro-animations",
      ],
      tags: ["Next.js React", "Tailwind CSS", "GSAP Animations"],
    },
    {
      title: "Speed Tuning & Launch",
      description: "We optimize all scripts, image formats, and fonts to ensure absolute page load speeds before deploying globally.",
      bullets: [
        "Code splitting, tree shaking, and asset caching config checks",
        "Lighthouse performance validations achieving perfect mobile scores",
        "Sitemap, schema markup, and search console registration setups",
      ],
      tags: ["Performance Optimization", "Vercel CDN", "Speed Audit"],
    },
  ];

  const faqs = [
    {
      q: "Why is custom code better than standard WordPress?",
      a: "Monolithic CMS platforms require database querying on every page request, leading to database delay. Next.js statically builds your pages, loading them instantly from edge servers. Custom code also exposes zero database vulnerabilities to the public internet.",
    },
    {
      q: "What headless CMS engines do you work with?",
      a: "We work with leading headless platforms, including Sanity.io, Strapi, Contentful, and Decap CMS. This allows your team to edit text and media in a clean console while keeping the frontend fast.",
    },
    {
      q: "Do you provide hosting and deployment setups?",
      a: "Yes. We set up automatic continuous delivery models using Vercel, Netlify, or AWS. Every time code is updated, the changes build and deploy globally in seconds with near-zero downtime.",
    },
    {
      q: "Will we be able to edit page content without a developer?",
      a: "Absolutely. We connect all sitemaps and text layouts to your headless CMS console, allowing non-technical marketing members to create posts, update texts, and add images easily.",
    },
  ];

  return (
    <ServiceSlugPage
      tag="Engineering Service"
      title="High-Performance Next.js Engineering"
      introParagraph="We build fast, secure, and modular websites using modern headless architectures. Designed to perform, scale, and capture search engine rankings."
      heroGraphic={heroGraphic}
      overviewHeading="Say Goodbye to Slow Page Loads."
      overviewDescription="In a digital world where every millisecond affects conversion rates, bloated websites cost customers. We engineer custom digital products on composable architectures, delivering sub-second page rendering, absolute security, and a beautiful content-editing experience."
      capabilitiesTitle="Our Web Engineering Capabilities"
      capabilitiesIntro="We use a modern stack of Next.js, React, headless APIs, and cloud CDN edge servers to build durable websites that grow with your company."
      capabilities={capabilities}
      capabilitiesOutro="Every website we build is fully responsive, optimized for Core Web Vitals, and secure by design."
      deepDiveTitle="Our Web Development Workflow"
      deepDiveIntro="We follow a systematic workflow from data schema definition to code optimization, ensuring absolute performance at launch."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="Custom Code"
    />
  );
}
