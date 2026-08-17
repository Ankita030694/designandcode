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
      title: "React & Next.js Development",
      description: "We build custom React and Next.js websites with reusable components, dynamic routing and modern rendering strategies.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Headless CMS Development",
      description: "We separate content management from the frontend to create flexible websites that are easier to manage and scale.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Custom API Integrations",
      description: "We connect websites with payment systems, CRMs, databases, third-party platforms and business tools.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: "Core Web Vitals Optimization",
      description: "We optimize code, images, fonts and scripts to improve loading speed, responsiveness and overall website performance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Technical SEO Development",
      description: "We build SEO foundations directly into the website through clean architecture, metadata, sitemaps, canonical URLs and structured data.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      title: "Cloud Deployment & CDN",
      description: "We deploy websites using modern hosting and CDN infrastructure for reliable global performance.",
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
      description: "We design system architecture, plan APIs, and structure content schemas to support fast development and future scaling.",
      bullets: [
        "Technical architecture",
        "CMS and database structure",
        "API integration planning",
        "Hosting and deployment strategy",
      ],
      tags: ["System Architecture", "CMS", "API Mapping"],
    },
    {
      title: "High-Performance Development",
      description: "We build component-driven frontends with responsive styling, smooth micro-interactions, and robust content integrations.",
      bullets: [
        "Responsive frontend development",
        "Reusable components",
        "CMS integration",
        "Animations and interactions",
      ],
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "Performance & Launch",
      description: "We audit Core Web Vitals, implement technical SEO requirements, and configure edge CDN deployments for global speed.",
      bullets: [
        "Performance optimization",
        "Core Web Vitals checks",
        "Technical SEO implementation",
        "Production deployment",
      ],
      tags: ["Performance", "SEO", "Deployment"],
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
      tag="Web Development Services"
      title="HIGH-PERFORMANCE WEB DEVELOPMENT SERVICES"
      introParagraph="We build fast, scalable and SEO-friendly websites using modern technologies such as React and Next.js. Every website is engineered for performance, responsiveness, security and long-term growth."
      heroGraphic={heroGraphic}
      overviewHeading="SAY GOODBYE TO SLOW WEBSITES."
      overviewDescription="Slow websites lose attention, conversions and search visibility. We build modern websites and web applications using clean, scalable architectures designed for speed, security and usability. From marketing websites to custom web platforms, we combine strong frontend engineering with technical SEO and performance optimization."
      capabilitiesTitle="OUR WEB DEVELOPMENT SERVICES"
      capabilitiesIntro="We build complete digital experiences using modern frameworks, flexible content systems and performance-focused development practices."
      capabilities={capabilities}
      capabilitiesOutro="Every website we build is fully responsive, optimized for Core Web Vitals, and secure by design."
      deepDiveTitle="OUR WEB DEVELOPMENT WORKFLOW"
      deepDiveIntro="We follow a structured engineering process from technical architecture to production deployment to ensure maximum reliability and speed."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="Custom Code"
      projectsTitle="WEB PROJECTS BUILT TO PERFORM"
      projectsSubtitle="Explore websites and digital products where thoughtful design meets modern web engineering."
    />
  );
}
