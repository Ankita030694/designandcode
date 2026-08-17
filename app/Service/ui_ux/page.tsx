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
      title: "User Research & UX Strategy",
      description: "We study user needs, behaviors, pain points and business goals to build a clear product strategy and user experience direction.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
    },
    {
      title: "Wireframing & Prototyping",
      description: "We turn ideas into interactive wireframes and prototypes that help validate user flows, content hierarchy and product functionality before development.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      ),
    },
    {
      title: "High-Fidelity UI Design",
      description: "We create polished, modern interfaces with thoughtful typography, visual hierarchy, interactions and brand expression.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "Design Systems",
      description: "We build scalable component libraries, styles and design guidelines that maintain consistency across products and screens.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Mobile-First Design",
      description: "We design responsive experiences that work naturally across smartphones, tablets and desktop devices.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Usability Testing & UX Audits",
      description: "We identify usability issues, friction points and conversion barriers through structured UX reviews and usability testing.",
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
      description: "We align with your team to understand your audience, research competitive benchmarks, and establish a clear information architecture.",
      bullets: [
        "User research and stakeholder insights",
        "User personas and competitor analysis",
        "User journeys and information architecture",
        "Sitemap and product structure",
      ],
      tags: ["User Research", "UX Strategy", "Information Architecture"],
    },
    {
      title: "Wireframe & Validate",
      description: "We create iterative layout wireframes and user journeys to test layout flows, content hierarchy, and interactions early.",
      bullets: [
        "Interactive wireframes",
        "User flow prototypes",
        "Navigation and content hierarchy",
        "UX usability validation",
      ],
      tags: ["UX Wireframes", "User Flows", "Prototyping"],
    },
    {
      title: "Design & Handoff",
      description: "We apply cohesive typography, component systems, and design tokens for pixel-perfect screens and seamless developer handoff.",
      bullets: [
        "High-fidelity UI designs",
        "Responsive design systems",
        "Interactive prototypes",
        "Developer handoff specifications",
      ],
      tags: ["Visual Design", "Design Systems", "Figma"],
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
      tag="UI/UX Design Services"
      title="UI/UX DESIGN SERVICES FOR DIGITAL PRODUCTS"
      introParagraph="We transform complex ideas into intuitive, conversion-focused digital experiences. From user research and UX strategy to high-fidelity UI design and Figma prototypes, we design products that are easy to understand, use and love."
      heroGraphic={heroGraphic}
      overviewHeading="USER EXPERIENCES THAT MAKE SENSE."
      overviewDescription="Great UI/UX design is about more than creating beautiful screens. It is about understanding how people think, removing friction and creating digital journeys that naturally guide users toward their goals. We combine user research, UX strategy, information architecture and visual design to create websites, mobile apps and digital products that feel intuitive from the first interaction."
      capabilitiesTitle="OUR KEY UI/UX DESIGN SERVICES"
      capabilitiesIntro="We cover the complete UX and UI design process, from understanding your users and defining the product structure to creating polished interfaces and developer-ready design systems."
      capabilities={capabilities}
      capabilitiesOutro="We deliver ready-to-develop Figma libraries built directly on standard design system practices."
      deepDiveTitle="OUR END-TO-END UI/UX DESIGN PROCESS"
      deepDiveIntro="We follow a structured design process from initial research to polished handoff to ensure every screen serves user and business goals."
      deepDiveItems={deepDiveItems}
      faqs={faqs}
      projectTypeFilter="Custom Code"
      projectsTitle="UI/UX PROJECTS THAT TELL STORIES"
      projectsSubtitle="Explore selected website, mobile app and digital product designs created to solve real user and business problems."
    />
  );
}
