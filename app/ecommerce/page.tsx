"use client";

import React from "react";
import ServiceSlugPage from "@/components/ServiceSlugPage";

export default function ShopifyDevelopmentService() {
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
          VS Code - shopify-checkout.tsx
        </span>
      </div>

      {/* Editor Main Code Lines */}
      <div className="flex-1 flex flex-col justify-center gap-2.5 font-mono text-[11px] py-4 text-white/90">
        <div>
          <span className="text-purple-400">import</span>{" "}
          <span className="text-blue-300">Shopify</span>{" "}
          <span className="text-purple-400">from</span>{" "}
          <span className="text-green-300">&quot;@shopify/shopify-api&quot;</span>;
        </div>
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-300">ShopPayButton</span> = () =&gt; &#123;
        </div>
        <div className="pl-4">
          <span className="text-purple-400">return</span> (
        </div>
        <div className="pl-8">
          <span className="text-gray-500">&lt;</span>
          <span className="text-yellow-400">div</span>{" "}
          <span className="text-blue-300">className</span>=
          <span className="text-green-300">&quot;w-full shopify-pay&quot;</span>
          <span className="text-gray-500">&gt;</span>
        </div>
        <div className="pl-12 flex items-center gap-1.5">
          <span className="text-gray-500">&lt;</span>
          <span className="text-yellow-400">button</span>{" "}
          <span className="text-blue-300">onClick</span>=
          <span className="text-purple-400">&#123;</span>
          <span className="text-blue-300">redirectToShopPay</span>
          <span className="text-purple-400">&#125;</span>
          <span className="text-gray-500">&gt;</span>
        </div>
        <div className="pl-16 text-white font-bold">
          Express Checkout
        </div>
        <div className="pl-12">
          <span className="text-gray-500">&lt;/</span>
          <span className="text-yellow-400">button</span>
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
        <span>TypeScript React</span>
        <span>Lighthouse: 100/100</span>
      </div>
    </div>
  );

  const capabilities = [
    {
      title: "Theme & Liquid Development",
      description: "Crafting customized Shopify Liquid templates from scratch. Optimized for speed, branding, and layout consistency without bloated apps.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Headless Shopify Storefronts",
      description: "Decoupling backend commerce pipelines from frontend layouts. We build Next.js storefronts that fetch products via Shopify Storefront APIs.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Custom App & API Integrations",
      description: "Connecting third-party logistics (3PL), ERP systems, CRM pipelines, and payment providers to Shopify through secure webhooks.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: "Checkout & Conversion Tuning",
      description: "Optimizing conversion funnels by setting up Shop Pay, streamlining dynamic pricing, and minimizing input fields for checkout speed.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Core Web Vitals Optimization",
      description: "Improving page speeds by auditing third-party scripts, lazy loading media, compressing images, and minimizing critical CSS payloads.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Multi-Channel Catalog Syncing",
      description: "Setting up real-time inventory management across POS terminals, social media platforms, and distribution channels to avoid overselling.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18" />
        </svg>
      ),
    },
  ];

  const deepDiveItems = [
    {
      title: "Architecture & Data Mapping",
      description: "We review your e-commerce dependencies, outline third-party API configurations, and model custom metafield structures.",
      bullets: [
        "Mapping custom Shopify metafields and data objects for clean catalog structures",
        "Detailing custom app requirements and third-party API webhook endpoints",
        "Selecting optimal headless vs. Liquid hosting configurations based on traffic needs",
      ],
      tags: ["Metafield Design", "API Mappings", "Hosting Models"],
    },
    {
      title: "Theme & Storefront Engineering",
      description: "Our developers build fast, accessible storefront layouts, prioritizing high-fidelity product imagery and smooth cart drawer scripts.",
      bullets: [
        "Semantic Liquid / Tailwind component structures with zero unnecessary app script drag",
        "Framer Motion or GSAP micro-animations for interactive cart additions and product views",
        "Mobile-first responsive design ensuring thumb-friendly checkout actions",
      ],
      tags: ["Liquid / Next.js", "Cart Animations", "Mobile UI"],
    },
    {
      title: "Performance Audits & Store Launch",
      description: "We optimize all third-party scripts, set up checkout funnel tracking, and coordinate sitemaps before launch.",
      bullets: [
        "Auditing and script-tag-bundling third-party review, marketing, and chat widgets",
        "Validating conversion tracking APIs and GA4 purchase funnel events",
        "Sitemap setup, canonical configurations, and domain launch routing checklists",
      ],
      tags: ["PageSpeed Tuning", "GA4 Attribution", "Launch Checklists"],
    },
  ];

  const faqs = [
    {
      q: "Why is a custom Shopify theme better than a pre-made template?",
      a: "Pre-made templates are built to suit thousands of stores, which makes them heavy and full of unused code. A custom Shopify theme contains only the CSS, JavaScript, and HTML your store actually needs, which results in faster page load speeds and significantly higher conversion rates.",
    },
    {
      q: "What is headless Shopify, and when should we use it?",
      a: "Headless Shopify separates your storefront's visual design (built with Next.js/React) from your backend checkout and catalog data. You should consider a headless setup if you require complex product configurators, custom interactive animations, or sub-second international loading speeds.",
    },
    {
      q: "Will you optimize our store's mobile checkout experience?",
      a: "Absolutely. With mobile shopping accounting for over 70% of e-commerce traffic, we design thumb-friendly navigation, quick-add drawers, and streamline digital wallet options like Shop Pay, Apple Pay, and Google Pay to maximize conversion.",
    },
    {
      q: "Can you connect Shopify to our legacy ERP, CRM, or POS system?",
      a: "Yes. We specialize in building secure API connections and custom Shopify apps to synchronize inventories, customer profiles, and order data between Shopify and platforms like SAP, NetSuite, Salesforce, or retail POS terminals.",
    },
  ];

  return (
    <ServiceSlugPage
      tag="E-Commerce Service"
      title="High-Converting Shopify Development"
      introParagraph="We build fast, secure, and fully customized Shopify storefronts. Optimized for high-intent shoppers, fast checkout transitions, and seamless integrations."
      heroGraphic={heroGraphic}
      overviewHeading="Fast Storefronts. Higher Conversion Rates."
      overviewDescription="In retail, every fraction of a second directly impacts your conversion rate. Bloated themes and unoptimized third-party apps cause customer drop-off. We develop custom Liquid themes and headless storefronts on modern architectures, delivering sub-second edge rendering, seamless checkouts, and absolute catalog reliability."
      capabilitiesTitle="Our Shopify Engineering Capabilities"
      capabilitiesIntro="We use a detailed development strategy to build custom themes, manage headless architectures, and integrate core operations APIs."
      capabilities={capabilities}
      capabilitiesOutro="Every storefront is fully optimized for mobile responsiveness and Core Web Vitals."
      deepDiveTitle="Our E-Commerce Workflow"
      deepDiveIntro="We follow a systematic workflow from inventory mapping to performance tuning, ensuring high performance at launch."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="Shopify Store"
    />
  );
}
