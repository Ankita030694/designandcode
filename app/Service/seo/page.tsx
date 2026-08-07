"use client";

import React from "react";
import ServiceSlugPage from "@/components/ServiceSlugPage";

export default function SeoService() {
  const heroGraphic = (
    <div className="flex flex-col h-full justify-between select-none">
      {/* Search Engine Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono font-bold">
          Google Search - Ranking #1
        </span>
      </div>

      {/* Main Google Search Rankings Illustration */}
      <div className="flex-1 flex flex-col justify-center gap-3.5 py-4">
        {/* Mock Search Result #1 */}
        <div className="bg-[#FACC15]/10 border border-[#FACC15]/40 rounded-xl p-3 flex flex-col gap-1.5 relative overflow-hidden">
          {/* Rank Badge #1 */}
          <div className="absolute top-0 right-0 bg-[#FACC15] text-[#0C1833] text-[8px] font-bold px-2 py-0.5 rounded-bl font-mono">
            RANK #1
          </div>
          <span className="text-[9px] text-[#FACC15] font-mono">https://designncode.com/seo</span>
          <span className="text-[11px] font-bold text-white leading-tight">Designncode: Senior Specialists in SEO &amp; Code</span>
          <rect className="w-4/5 h-2.5 bg-white/20 rounded-sm mt-0.5" />
        </div>

        {/* Mock Search Result #2 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1.5 opacity-60">
          <span className="text-[9px] text-white/40 font-mono">https://competitor.com/marketing</span>
          <span className="text-[11px] font-bold text-white/80 leading-tight">Generic Marketing Firm - Services Overview</span>
          <rect className="w-3/4 h-2.5 bg-white/20 rounded-sm mt-0.5" />
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-mono text-white/40">
        <span>Organic Traffic Boost</span>
        <span>DA/PA Score: 92/100</span>
      </div>
    </div>
  );

  const capabilities = [
    {
      title: "Technical SEO Auditing",
      description: "Resolving redirect chains, indexing bugs, server crawl logs, sitemap configurations, and crawler accessibility issues.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Keyword & Search Intent Map",
      description: "Mapping search intent categories (informational, transactional, commercial) to match queries with conversion pages.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "On-Page Schema & Metadata",
      description: "Integrating JSON-LD schema markings (Articles, FAQs, LocalBusiness, Products) directly into page HTML header logic.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" />
        </svg>
      ),
    },
    {
      title: "Speed Optimization & Core Vitals",
      description: "Tuning script bundle payloads, lazy loading assets, and minimizing server response times to hit perfect mobile SEO metrics.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Link Building & Authority Scaling",
      description: "Securing high-authority editorial mentions, partner backlinks, and directory registrations to boost root domain search scores.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: "Ranking Tracking & Reports",
      description: "Providing automated dashboards tracking keyword positions, click volumes, impression numbers, and domain authority score trends.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
  ];

  const deepDiveItems = [
    {
      title: "Audit & Opportunity Discovery",
      description: "We audit historical crawlers' search errors, run keyword competition audits, and identify conversion-focused search gaps.",
      bullets: [
        "Index mapping audits on Google Search Console to fix crawl bottlenecks",
        "Competitor keyword opportunity maps pinpointing rankable keywords",
        "XML sitemap and canonical logic configuration design reviews",
      ],
      tags: ["Technical Audit", "Keyword Maps", "Google Console"],
    },
    {
      title: "HTML Optimization & Speed Code",
      description: "We hardcode JSON-LD schema tags, sitemap logic, and optimize code files for search engine indexers.",
      bullets: [
        "Integrating structured rich schema data profiles directly",
        "Optimizing page load speeds to pass all Core Web Vitals",
        "Optimizing header structures (H1, H2, canonicals) in Next.js models",
      ],
      tags: ["Technical SEO", "Schema Markup", "Core Web Vitals"],
    },
    {
      title: "Content Scale & Link Acquisition",
      description: "We write conversion-focused articles and configure link acquisitions to grow root domain authority.",
      bullets: [
        "Developing structured informational content modules to capture informational terms",
        "Outbound content outreach securing backlink mentions on authority sites",
        "Weekly position tracking reviews mapping conversions to lead targets",
      ],
      tags: ["Content Strategy", "Link Outreach", "Rank Reports"],
    },
  ];

  const faqs = [
    {
      q: "How long does it take to see organic search ranking improvements?",
      a: "SEO is a compounding asset. Typically, initial code and index improvements show indexing updates within 4-6 weeks. Major organic traffic growth and page ranking boosts materialize within 3-6 months.",
    },
    {
      q: "Do you focus on link building / authority backlinks?",
      a: "Yes. High-quality links act as authority signals for search engine algorithms. We secure links from authoritative blogs, commercial portals, and directories to build domain authority score points.",
    },
    {
      q: "How does site speed affect search rankings?",
      a: "Google uses Page Speed (Core Web Vitals) as a direct search ranking factor. Slow-loading websites are downranked in mobile searches. We optimize Next.js rendering paths to ensure top-tier loading speeds.",
    },
    {
      q: "Do you configure sitemaps and index pages?",
      a: "Yes. We verify that all page canonicals, dynamic XML sitemaps, robots configurations, and Google Search Console tags are configured correctly to ensure search crawlers access and index your site without issues.",
    },
  ];

  return (
    <ServiceSlugPage
      tag="SEO Service"
      title="SEO & Organic Growth Engineering"
      introParagraph="We manage data-backed technical SEO and keyword content strategies. Engineered to boost search rankings and drive high-intent organic leads."
      heroGraphic={heroGraphic}
      overviewHeading="Rank Higher. Capture High-Intent Leads."
      overviewDescription="Unlike paid search ads that stop delivering traffic the moment your ad budget is turned off, SEO compiles compounding search value over time. By optimizing site rendering speeds, structure metadata schema scripts, and building authority backlink pipelines, we place your service pages on Google's first page."
      capabilitiesTitle="Our SEO Capabilities"
      capabilitiesIntro="We use a detailed search optimization strategy to improve technical page indexing, keyword maps, and link configurations."
      capabilities={capabilities}
      capabilitiesOutro="All search strategies conform fully to Google Webmaster Guidelines."
      deepDiveTitle="Our SEO Optimization Workflow"
      deepDiveIntro="We follow a systematic optimization workflow from technical diagnostics to authority link acquisition, ensuring search value grows weekly."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="All"
    />
  );
}
