"use client";

import React from "react";
import Footer from "../app/Components/footer";
import FAQ from "../app/Components/FAQ";
import FeaturedProjects from "../app/Components/FeaturedProjects";

export interface ServiceCapability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceSubDetail {
  title: string;
  description: string;
  bullets?: string[];
  tags?: string[];
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  tag: string;
  title: string;
  introParagraph: string;
  heroGraphic: React.ReactNode;
  
  overviewHeading: string;
  overviewDescription: string;
  
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: ServiceCapability[];
  capabilitiesOutro?: string;
  
  deepDiveTitle: string;
  deepDiveIntro?: string;
  deepDiveItems: ServiceSubDetail[];
  
  faqs?: ServiceFAQ[];
  projectTypeFilter?: "Custom Code" | "Shopify Store" | "All";
  projectsTitle?: string;
  projectsSubtitle?: string;
}

export default function ServiceSlugPage({
  tag,
  title,
  introParagraph,
  heroGraphic,
  overviewHeading,
  overviewDescription,
  capabilitiesTitle,
  capabilitiesIntro,
  capabilities,
  capabilitiesOutro,
  deepDiveTitle,
  deepDiveIntro,
  deepDiveItems,
  projectsTitle,
  projectsSubtitle,
}: ServicePageProps) {
  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header spacing offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "deep-dive", label: "Deep Dive" },
    { id: "work", label: "Recent Work" },
    { id: "faqs", label: "FAQs" },
  ];

  const capabilityAccents = [
    { border: "hover:border-sky-400", bar: "bg-sky-400", iconBg: "group-hover:bg-sky-100", iconText: "group-hover:text-sky-600", title: "group-hover:text-sky-600" },
    { border: "hover:border-rose-400", bar: "bg-rose-400", iconBg: "group-hover:bg-rose-100", iconText: "group-hover:text-rose-600", title: "group-hover:text-rose-600" },
    { border: "hover:border-amber-400", bar: "bg-amber-400", iconBg: "group-hover:bg-amber-100", iconText: "group-hover:text-amber-600", title: "group-hover:text-amber-600" },
    { border: "hover:border-emerald-400", bar: "bg-emerald-400", iconBg: "group-hover:bg-emerald-100", iconText: "group-hover:text-emerald-600", title: "group-hover:text-emerald-600" },
    { border: "hover:border-purple-400", bar: "bg-purple-400", iconBg: "group-hover:bg-purple-100", iconText: "group-hover:text-purple-600", title: "group-hover:text-purple-600" },
    { border: "hover:border-orange-400", bar: "bg-orange-400", iconBg: "group-hover:bg-orange-100", iconText: "group-hover:text-orange-600", title: "group-hover:text-orange-600" },
  ];

  const stageAccents = [
    { text: "text-sky-500", checkBg: "bg-sky-100 text-sky-700", border: "hover:border-sky-300" },
    { text: "text-rose-500", checkBg: "bg-rose-100 text-rose-700", border: "hover:border-rose-300" },
    { text: "text-emerald-500", checkBg: "bg-emerald-100 text-emerald-700", border: "hover:border-emerald-300" },
    { text: "text-purple-500", checkBg: "bg-purple-100 text-purple-700", border: "hover:border-purple-300" },
  ];

  return (
    <main className="w-full bg-transparent min-h-screen text-zinc-900 overflow-x-hidden font-sans pt-24">
      {/* 1. Hero Section */}
      <section className="bg-transparent pt-12 pb-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Breadcrumb Tag */}
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-500">
                  {tag}
                </span>
              </div>

              {/* H1 Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-zinc-950 max-w-2xl">
                {title}
              </h1>

              {/* Anchor Navigation Quick Links */}
              <div className="flex flex-wrap gap-2.5 my-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 hover:bg-zinc-900 hover:text-white border border-zinc-200/60 hover:border-zinc-900 transition-all duration-300 shadow-xs cursor-pointer select-none"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Large Intro Paragraph */}
              <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-normal max-w-xl">
                {introParagraph}
              </p>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Decorative background glows */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-rose-400/20 to-purple-400/20 rounded-[40px] blur-3xl -z-10 animate-pulse" style={{ animationDuration: "6s" }} />
              <div className="w-full max-w-[420px] aspect-square rounded-[36px] bg-zinc-950 border-4 border-white shadow-2xl p-8 flex items-center justify-center relative group overflow-hidden">
                {/* SVG/Decorative Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between text-white">
                  {heroGraphic}
                </div>
                {/* Corner accent glow inside the card */}
                <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Intro / Overview Section */}
      <section id="overview" className="py-20 px-6 sm:px-8 lg:px-12 bg-transparent border-t border-zinc-200/50">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase px-3 py-1 rounded-full bg-zinc-100">
            Overview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
            {overviewHeading}
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400 rounded-full" />
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-3xl">
            {overviewDescription}
          </p>
        </div>
      </section>

      {/* 3. Key Capabilities Grid Section */}
      <section id="capabilities" className="py-24 px-6 sm:px-8 lg:px-12 bg-transparent relative border-t border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-500 block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-5">
              {capabilitiesTitle}
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
              {capabilitiesIntro}
            </p>
          </div>

          {/* Capabilities Grid with Vibrant Cycling Accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => {
              const accent = capabilityAccents[idx % capabilityAccents.length];
              return (
                <div
                  key={idx}
                  className={`bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-zinc-200/80 ${accent.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 relative overflow-hidden group`}
                >
                  {/* Accent line on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${accent.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-2xl bg-zinc-100 ${accent.iconBg} flex items-center justify-center text-zinc-800 ${accent.iconText} transition-colors duration-300`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold text-zinc-900 ${accent.title} transition-colors duration-300`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {capabilitiesOutro && (
            <p className="text-zinc-500 text-sm mt-12 text-center max-w-2xl mx-auto italic">
              {capabilitiesOutro}
            </p>
          )}
        </div>
      </section>

      {/* 4. Deep Dive / Detailed Sections */}
      <section id="deep-dive" className="py-24 px-6 sm:px-8 lg:px-12 bg-transparent">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-500 block mb-3">
              Deep Dive
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-5">
              {deepDiveTitle}
            </h2>
            {deepDiveIntro && (
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                {deepDiveIntro}
              </p>
            )}
          </div>

          {/* Staggered Detail Blocks with Colorful Accents */}
          <div className="space-y-12">
            {deepDiveItems.map((item, idx) => {
              const stageAccent = stageAccents[idx % stageAccents.length];
              return (
                <div
                  key={idx}
                  className={`group p-8 md:p-10 rounded-[32px] bg-white/90 backdrop-blur-sm border border-zinc-200/80 ${stageAccent.border} hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`}
                >
                  {/* Left: Number & Main Info */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className={`text-xs font-bold ${stageAccent.text} font-mono tracking-widest`}>
                      0{idx + 1} / STAGE
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Custom badges if any */}
                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.tags.map((t) => (
                          <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 text-zinc-700 border border-zinc-200/60">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Bullet Points */}
                  <div className="lg:col-span-7 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-zinc-200/80 lg:pl-10 pt-6 lg:pt-0">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Key Deliverables</h4>
                    <ul className="space-y-3.5">
                      {item.bullets?.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3.5 text-zinc-700 text-sm">
                          <span className={`shrink-0 w-5 h-5 rounded-full ${stageAccent.checkBg} flex items-center justify-center text-xs font-bold`}>
                            ✓
                          </span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Recent Work Featured Projects Section */}
      <div id="work" className="w-full">
        <FeaturedProjects stickerText="Projects" title={projectsTitle || "PROJECTS THAT\nTELL STORIES"} />
        {projectsSubtitle && (
          <p className="text-zinc-500 text-center text-sm sm:text-base max-w-xl mx-auto -mt-10 mb-12 px-6">
            {projectsSubtitle}
          </p>
        )}
      </div>

      {/* 6. Shared FAQ Component */}
      <div id="faqs" className="w-full">
        <FAQ />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
