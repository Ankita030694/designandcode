"use client";

import React from "react";
import ServiceSlugPage from "@/components/ServiceSlugPage";

export default function PerformanceMarketingService() {
  const heroGraphic = (
    <div className="flex flex-col h-full justify-between select-none">
      {/* Marketing Console Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono font-bold">
          Ads Dashboard - ROAS
        </span>
      </div>

      {/* Main Campaign Performance Stats */}
      <div className="flex-1 flex flex-col justify-center gap-4 py-4">
        {/* Conversion Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
            <span className="text-[9px] uppercase tracking-wider text-white/50 font-mono">ROAS Target</span>
            <span className="text-lg font-bold text-sky-400">4.8x Achieved</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
            <span className="text-[9px] uppercase tracking-wider text-white/50 font-mono">Conversion Rate</span>
            <span className="text-lg font-bold text-white">+28.4%</span>
          </div>
        </div>

        {/* Funnel illustration (SVG) */}
        <svg className="w-full h-[60px]" viewBox="0 0 200 60" fill="none">
          {/* Funnel layers */}
          <path d="M10 5h180l-20 15H30L10 5z" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeWidth="0.8" />
          <path d="M30 20h140l-25 18H55L30 20z" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeWidth="0.8" />
          <path d="M55 38h90l-30 18H85L55 38z" fill="#38bdf8" />
          
          {/* Text Labels on funnel */}
          <text x="100" y="13" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold" opacity="0.6">TRAFFIC</text>
          <text x="100" y="31" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold" opacity="0.8">ENGAGE</text>
          <text x="100" y="49" textAnchor="middle" fill="#09090b" fontSize="7" fontWeight="bold">LEADS</text>
        </svg>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-mono text-white/40">
        <span>Attribution: GA4 / Offline</span>
        <span>CPA reduction: -22%</span>
      </div>
    </div>
  );

  const capabilities = [
    {
      title: "Google Ads & Paid Search",
      description: "We target high-intent search queries with optimized campaigns designed to generate qualified traffic and conversions.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
    },
    {
      title: "Meta & LinkedIn Advertising",
      description: "We create targeted paid social campaigns across platforms such as Facebook, Instagram and LinkedIn.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zm14 14v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      title: "Landing Pages & CRO",
      description: "We build and optimize campaign landing pages around clear messaging, strong user flows and focused conversion goals.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      title: "Analytics & Attribution",
      description: "We connect advertising activity with accurate conversion tracking so you can understand what is driving results.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      title: "Creative Strategy & Testing",
      description: "We test different messages, hooks, formats and creative concepts to identify what resonates with your audience.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: "Budget & Campaign Optimization",
      description: "We continuously analyze campaign performance and allocate budget toward the audiences, creatives and campaigns delivering stronger results.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const deepDiveItems = [
    {
      title: "Audit & Audience Strategy",
      description: "We analyze historical marketing data, map competitor positioning, and build target audience personas.",
      bullets: [
        "Existing campaign audit",
        "Keyword research",
        "Audience segmentation",
        "Competitor research",
      ],
      tags: ["Campaign Audit", "Keyword Research", "Audience Strategy"],
    },
    {
      title: "Creative & Campaign Deployment",
      description: "We develop high-converting copy, design compelling visual assets, and launch focused multi-channel ad campaigns.",
      bullets: [
        "Search ad copy",
        "Social ad concepts",
        "Landing pages",
        "Campaign setup",
      ],
      tags: ["Ad Copy", "Creative", "Landing Pages"],
    },
    {
      title: "Optimization & Attribution",
      description: "We verify attribution tracking accuracy, analyze performance metrics, and scale winning campaigns systematically.",
      bullets: [
        "Conversion tracking",
        "Performance reporting",
        "Budget optimization",
        "Campaign scaling strategy",
      ],
      tags: ["ROAS", "Attribution", "Budget Optimization"],
    },
  ];

  const faqs = [
    {
      q: "What is your typical onboarding timeline?",
      a: "We usually onboard clients in 2 weeks. This includes auditing historical ad performance, setting up tag containers, mapping keyword strategies, and deploying initial ad creatives.",
    },
    {
      q: "Do you mandate a minimum ad budget spend?",
      a: "We recommend a starting budget of $2,500/month per channel to ensure campaigns gather conversion data. This helps ad platform algorithms optimize target profiles faster.",
    },
    {
      q: "How do you handle attribution tracking post iOS 14.5?",
      a: "We implement Conversions API (CAPI) on Meta and server-side tagging on Google Tag Manager. This passes conversion signals directly from servers, bypassing browser tracking blocks.",
    },
    {
      q: "How often do you report campaign performance?",
      a: "We set up live Google Looker Studio dashboards that track ROAS, CPA, and spend in real-time. We also hold bi-weekly strategy calls to review creatives and pipeline adjustments.",
    },
  ];

  return (
    <ServiceSlugPage
      tag="Performance Marketing Services"
      title="PERFORMANCE MARKETING THAT DRIVES GROWTH"
      introParagraph="We create data-driven paid advertising campaigns designed to attract the right audience, increase conversions and improve return on ad spend across Google, Meta and other high-intent channels."
      heroGraphic={heroGraphic}
      overviewHeading="TURN AD SPEND INTO MEASURABLE GROWTH."
      overviewDescription="Clicks mean very little if they do not lead to meaningful business results. We connect paid advertising with conversion-focused landing pages, creative strategy and accurate attribution to create a complete performance marketing system. Every campaign is measured against the metrics that matter to your business."
      capabilitiesTitle="OUR PERFORMANCE MARKETING SERVICES"
      capabilitiesIntro="We engineer high-ROI performance marketing systems across search, social, and conversion funnels."
      capabilities={capabilities}
      capabilitiesOutro="Every campaign is backed by live attribution dashboards showing customer journeys."
      deepDiveTitle="OUR PERFORMANCE MARKETING WORKFLOW"
      deepDiveIntro="We follow a structured growth process from audit to creative deployment and attribution optimization."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="All"
      projectsTitle="CAMPAIGNS BUILT AROUND RESULTS"
      projectsSubtitle="Explore selected digital campaigns and conversion experiences designed to turn attention into measurable business growth."
    />
  );
}
