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
        <div className="bg-emerald-500/15 border border-emerald-400/40 rounded-xl p-3 flex flex-col gap-1.5 relative overflow-hidden">
          {/* Rank Badge #1 */}
          <div className="absolute top-0 right-0 bg-emerald-400 text-zinc-950 text-[8px] font-bold px-2 py-0.5 rounded-bl font-mono">
            RANK #1
          </div>
          <span className="text-[9px] text-emerald-400 font-mono">https://designncode.com/seo</span>
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
      title: "Technical SEO Audits",
      description: "We identify crawlability, indexing, redirects, sitemap, canonical and technical issues that can limit search performance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Keyword Research & Search Intent",
      description: "We identify relevant search opportunities and map keywords to the pages and content that can best satisfy user intent.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "On-Page SEO & Metadata",
      description: "We optimize page structure, headings, metadata, internal links and content to make pages clearer for users and search engines.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" />
        </svg>
      ),
    },
    {
      title: "Schema & Structured Data",
      description: "We implement relevant structured data to help search engines better understand your website and its content.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      title: "Core Web Vitals & Speed Optimization",
      description: "We improve loading performance, responsiveness and visual stability to create a better experience for both users and search engines.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Link Building & Authority",
      description: "We develop ethical authority-building strategies designed to strengthen your website's credibility and organic visibility.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  const deepDiveItems = [
    {
      title: "SEO Audit & Opportunity Discovery",
      description: "We audit crawlability, search console indexes, and identify competitive keyword opportunities to build search visibility.",
      bullets: [
        "Technical SEO audit",
        "Keyword opportunity research",
        "Competitor analysis",
        "Search Console review",
      ],
      tags: ["Technical Audit", "Keyword Research", "Search Console"],
    },
    {
      title: "On-Page & Technical Optimization",
      description: "We optimize site architecture, metadata tags, structured schema markup, and speed metrics for search engine crawlers.",
      bullets: [
        "Metadata optimization",
        "Heading structure",
        "Schema implementation",
        "Performance optimization",
      ],
      tags: ["Technical SEO", "Schema", "Core Web Vitals"],
    },
    {
      title: "Content & Authority Growth",
      description: "We develop content frameworks and ethical link acquisition strategies to scale domain authority and organic rankings.",
      bullets: [
        "SEO content strategy",
        "Content optimization",
        "Authority building",
        "Ranking and traffic reports",
      ],
      tags: ["Content Strategy", "Link Building", "Rank Tracking"],
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
      tag="SEO Services"
      title="SEO SERVICES FOR SUSTAINABLE ORGANIC GROWTH"
      introParagraph="We combine technical SEO, search intent research, content strategy and performance optimization to improve organic visibility and attract high-intent traffic to your website."
      heroGraphic={heroGraphic}
      overviewHeading="RANK HIGHER. REACH THE RIGHT AUDIENCE."
      overviewDescription="SEO is not just about ranking for more keywords. It is about being visible when the right people are searching for what your business offers. We build SEO strategies around technical performance, search intent, content structure and website authority to create sustainable organic growth and stronger search visibility."
      capabilitiesTitle="OUR SEO SERVICES"
      capabilitiesIntro="We deliver comprehensive search engine optimization strategies built for long-term growth."
      capabilities={capabilities}
      capabilitiesOutro="All search strategies conform fully to Google Webmaster Guidelines."
      deepDiveTitle="OUR SEO OPTIMIZATION WORKFLOW"
      deepDiveIntro="We follow a structured optimization process from diagnostic auditing to authority and ranking growth."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="All"
      projectsTitle="SEO STRATEGIES BUILT FOR LONG-TERM GROWTH"
      projectsSubtitle="Explore selected digital projects where technical performance, content structure and search visibility work together."
    />
  );
}
