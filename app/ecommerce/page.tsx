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
      title: "Custom Shopify Theme Development",
      description: "We create custom Shopify themes that reflect your brand while keeping the storefront fast, responsive and easy to manage.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Headless Shopify Development",
      description: "We build modern headless storefronts using technologies such as Next.js and Shopify APIs for greater flexibility and performance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Shopify App & API Integrations",
      description: "We connect your Shopify store with CRMs, ERPs, payment platforms, logistics systems and other business tools.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: "Checkout & Conversion Optimization",
      description: "We simplify shopping journeys, improve product discovery and reduce friction throughout the cart and checkout experience.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Shopify Performance Optimization",
      description: "We audit scripts, images, apps and frontend code to improve loading speed and Core Web Vitals.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Multi-Channel Catalog Management",
      description: "We help connect product catalogs and inventory across relevant sales channels to create a more consistent commerce operation.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18" />
        </svg>
      ),
    },
  ];

  const deepDiveItems = [
    {
      title: "Store Architecture & Data Mapping",
      description: "We review your e-commerce data needs, map custom metafield models, and plan key API integration requirements.",
      bullets: [
        "Shopify data structure",
        "Metafield planning",
        "API mapping",
        "Integration requirements",
      ],
      tags: ["Shopify Architecture", "APIs", "Metafields"],
    },
    {
      title: "Theme & Storefront Development",
      description: "Our developers engineer responsive theme templates and custom shopping components designed for maximum speed.",
      bullets: [
        "Custom theme development",
        "Product and collection templates",
        "Responsive storefront",
        "Cart and shopping interactions",
      ],
      tags: ["Shopify Liquid", "Next.js", "Mobile UX"],
    },
    {
      title: "Optimization & Store Launch",
      description: "We execute comprehensive performance audits, verify analytics tracking, and streamline checkout operations before launch.",
      bullets: [
        "Speed optimization",
        "Conversion tracking",
        "Checkout testing",
        "SEO and sitemap setup",
      ],
      tags: ["Performance", "CRO", "Analytics"],
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
      tag="Shopify Development Services"
      title="HIGH-CONVERTING SHOPIFY DEVELOPMENT"
      introParagraph="We design and develop fast, flexible Shopify stores built around better shopping experiences, smoother checkout journeys and higher conversions."
      heroGraphic={heroGraphic}
      overviewHeading="FAST STORES. BETTER SHOPPING EXPERIENCES."
      overviewDescription="Your online store should make buying simple. We build custom Shopify experiences that combine strong e-commerce UX, fast performance and scalable technology. From custom Liquid themes to headless Shopify storefronts, we create stores designed around your customers and business goals."
      capabilitiesTitle="OUR SHOPIFY DEVELOPMENT SERVICES"
      capabilitiesIntro="We build scalable, high-converting e-commerce experiences with modern Shopify technology."
      capabilities={capabilities}
      capabilitiesOutro="Every storefront is fully optimized for mobile responsiveness and Core Web Vitals."
      deepDiveTitle="OUR SHOPIFY DEVELOPMENT WORKFLOW"
      deepDiveIntro="We follow a structured e-commerce workflow from store architecture to optimization and launch."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="Shopify Store"
      projectsTitle="E-COMMERCE PROJECTS THAT SELL"
      projectsSubtitle="Explore selected digital commerce experiences designed to make products easier to discover, understand and purchase."
    />
  );
}
