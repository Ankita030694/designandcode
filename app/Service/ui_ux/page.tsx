"use client";

import React from "react";
import ServiceSlugPage from "@/components/ServiceSlugPage";

export default function UiUxDesignService() {
  const heroGraphic = (
    <div className="flex flex-col h-full justify-between select-none">
      {/* Card Header representing UI Editor */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono font-bold">
          UI/UX Canvas
        </span>
      </div>

      {/* Editor Main Canvas Illustration */}
      <div className="flex-1 flex items-center justify-center py-6">
        <svg className="w-full max-h-[170px]" viewBox="0 0 200 120" fill="none">
          {/* Wireframe Mockup Phone */}
          <rect x="15" y="10" width="55" height="100" rx="8" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="42.5" cy="20" r="4" stroke="#38bdf8" strokeWidth="1.2" />
          <rect x="25" y="32" width="35" height="15" rx="3" stroke="#38bdf8" strokeWidth="1.2" />
          <rect x="25" y="54" width="35" height="4" rx="1" fill="#38bdf8" opacity="0.4" />
          <rect x="25" y="62" width="20" height="4" rx="1" fill="#38bdf8" opacity="0.4" />
          <circle cx="42.5" cy="85" r="10" stroke="#fb7185" strokeWidth="1.5" />
          <path d="M42.5 80 v10 M37.5 85 h10" stroke="#fb7185" strokeWidth="1.2" />

          {/* High Fidelity Screen Mockup */}
          <rect x="110" y="10" width="75" height="100" rx="8" fill="#18181b" stroke="#ffffff" strokeWidth="1.5" />
          {/* Screen Top Bar */}
          <rect x="110" y="10" width="75" height="15" rx="8" fill="#fb7185" />
          <circle cx="120" cy="17.5" r="2.5" fill="#09090b" />
          {/* Hero Banner */}
          <rect x="120" y="35" width="55" height="25" rx="4" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeWidth="1" />
          {/* Profile icon */}
          <circle cx="132" cy="47.5" r="5" fill="#c084fc" />
          {/* Text lines */}
          <rect x="144" y="42" width="22" height="4" rx="1.5" fill="#ffffff" />
          <rect x="144" y="50" width="15" height="3" rx="1" fill="#ffffff" fillOpacity="0.6" />
          {/* Cards below */}
          <rect x="120" y="70" width="25" height="25" rx="4" fill="#4ade80" />
          <rect x="150" y="70" width="25" height="25" rx="4" fill="#ffffff" fillOpacity="0.05" stroke="#ffffff" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-mono text-white/40">
        <span>Figma to Production</span>
        <span>100% Responsive</span>
      </div>
    </div>
  );

  const capabilities = [
    {
      title: "User Research & Strategy",
      description: "Analyzing user behavior, interviewing stakeholders, and building data-backed strategies that align directly with your customer needs.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
    },
    {
      title: "Wireframing & Prototyping",
      description: "Building click-through interactive wireframes and interactive prototypes to validate workflows and layouts before writing any code.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      ),
    },
    {
      title: "High-Fidelity Interface Design",
      description: "Crafting beautiful, modern, and pixel-perfect layouts designed to reflect your brand's voice and convert casual visitors.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Scalable Design Systems",
      description: "Developing comprehensive component libraries, styles, and asset guides that ensure consistency across all sub-pages and systems.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Mobile-First Design",
      description: "Ensuring interface compliance with mobile viewports. Layouts optimized for single-thumb scrolling, touch targets, and speed.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Usability Testing & Audit",
      description: "Conducting user testing, heat-map audits, and heuristic evaluations to resolve conversion bottlenecks and optimize usability.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const deepDiveItems = [
    {
      title: "Define & Strategize",
      description: "We align with your team to detail brand requirements, map out comprehensive user journeys, and establish user experience goals.",
      bullets: [
        "Interactive stakeholder alignment workshops",
        "Comprehensive user persona definition and competitor analysis",
        "Information architecture blueprints and core sitemaps",
      ],
      tags: ["Research", "Sitemaps", "Strategy"],
    },
    {
      title: "Wireframe & Validate",
      description: "We compile layout wireframes to test layout flows. This allows us to focus entirely on usability, content priorities, and layouts without getting distracted by color choices.",
      bullets: [
        "Low and mid-fidelity interactive layout wireframes",
        "User flow click-through tests to identify speed bottlenecks",
        "Layout structure and core checkout/CTA validation",
      ],
      tags: ["UX Wireframes", "Prototyping", "Flow Audits"],
    },
    {
      title: "High-Fidelity UI Design",
      description: "We apply typography, custom icons, and visual styles to create a cohesive layout that feels premium, premium-quality, and modern.",
      bullets: [
        "Pixel-perfect high fidelity page visual concepts",
        "Fully componentized Figma file handover",
        "Dynamic animations, micro-interactions, and transition guides",
      ],
      tags: ["Visual Design", "Design Systems", "Figma Design"],
    },
  ];

  const faqs = [
    {
      q: "What design tools do you use?",
      a: "We work almost exclusively in Figma. It allows real-time collaboration, keeps files organized, and provides the easiest inspect-mode details for developers.",
    },
    {
      q: "Do you build design systems from scratch?",
      a: "Yes. For every custom project, we establish global design tokens (colors, typography, grid spacing, shadows) and componentize repeating elements (buttons, inputs, headers, cards) so your design stays consistent.",
    },
    {
      q: "How many rounds of design revisions are included?",
      a: "We include iterative reviews within our design phases. Typically, we go through 2-3 feedback cycles on sitemaps/wireframes, and another 2 cycles on visual designs to ensure you're absolutely happy with the visual layouts.",
    },
    {
      q: "Can you design for complex web dashboards and mobile apps?",
      a: "Absolutely. We specialize in complex UI/UX structures, including SaaS analytics dashboards, CRM portals, iOS/Android mobile application interfaces, and custom e-commerce funnels.",
    },
  ];

  return (
    <ServiceSlugPage
      tag="Specialist Service"
      title="UI/UX Design & User Experience"
      introParagraph="We translate complex product ideas into clean, conversion-focused digital interfaces. Aligned with your brand and engineered for sub-second user comprehension."
      heroGraphic={heroGraphic}
      overviewHeading="User Journeys That Make Sense."
      overviewDescription="Outstanding interface design goes far beyond visual beauty. It's about designing seamless digital pathways that guide your visitors effortlessly. We identify friction, remove barriers, and create interfaces that feel natural and encourage action."
      capabilitiesTitle="Our Key UI/UX Capabilities"
      capabilitiesIntro="We cover all aspects of design, ensuring that sitemaps, wireframes, interface layouts, and developer handoffs are handled with professional precision."
      capabilities={capabilities}
      capabilitiesOutro="We deliver ready-to-develop Figma libraries built directly on standard design system practices."
      deepDiveTitle="Our End-to-End Design Workflow"
      deepDiveIntro="We follow a systematic workflow to ensure that the layout, strategy, and design assets are fully aligned with your business goals."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="Custom Code"
    />
  );
}
