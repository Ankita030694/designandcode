"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";
import FAQ from "../Components/FAQ";

const EnterpriseLensIcon = () => (
  <span className="relative inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mx-2 align-middle select-none">
    <svg className="w-full h-full drop-shadow-md" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="enterpriseLensBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="enterpriseMetalRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="30%" stopColor="#d4d4d8" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#enterpriseLensBg)" stroke="#09090b" strokeWidth="1.5" />
      <rect x="3" y="3" width="58" height="58" rx="15" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <circle cx="32" cy="32" r="18" fill="url(#enterpriseMetalRing)" />
      <circle cx="32" cy="32" r="14" fill="#09090b" stroke="#09090b" strokeWidth="1.5" />
      
      {/* Shield Building Icon inside Lens */}
      <path d="M32 22v20M24 26l8-4 8 4M24 38l8 4 8-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function EnterpriseServicePage() {
  const [activeToc, setActiveToc] = useState("intro");

  useEffect(() => {
    const sectionIds = ["intro", "automation", "wellness", "indoor", "materials", "sanctuary", "conclusion"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 200) {
          setActiveToc(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative flex flex-col flex-1 bg-transparent pt-20">
      {/* ── Hero Section (Matching Image Design) ── */}
      <section className="relative flex flex-col items-start justify-center py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-transparent">
        <div className="relative z-10 flex flex-col items-start w-full max-w-5xl mx-auto text-left">
          
          {/* Top Kicker & Category Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-6 select-none">
            {/* Fundamentals Item */}
            <div className="flex items-center gap-2 text-zinc-600 font-medium text-sm sm:text-base">
              <svg className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <span>Fundamentals</span>
            </div>

            <span className="text-zinc-300 font-bold">•</span>

            {/* Pill 1: Data & Analytics */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-zinc-800 font-medium text-xs sm:text-sm">
              <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="12" rx="2" />
                <path d="M12 15v4" />
                <path d="M8 21h8" />
                <path d="M7 9l3-2 3 4 4-3" />
              </svg>
              <span>Data & Analytics</span>
            </div>

            {/* Pill 2: Marketing */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-zinc-800 font-medium text-xs sm:text-sm">
              <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Marketing</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.12] max-w-4xl mb-6">
            B2B Marketing Attribution Is Broken (Here&apos;s the Fix)
          </h1>

          {/* Bottom Metadata Date Bar */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 font-normal">
            <span>June 22, 2026</span>
            <span className="text-zinc-300 font-bold">•</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-100/90 text-zinc-700 text-xs font-semibold border border-zinc-200/50">
              Last Updated: June 22, 2026
            </span>
          </div>

        </div>
      </section>

      {/* ── Table of Contents & Article Content Section ── */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-white border-t border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 self-start sticky top-28 z-30 select-none">
            <span className="text-[11px] font-bold tracking-[0.15em] text-zinc-400 uppercase block mb-6">
              TABLE OF CONTENTS
            </span>
            <nav className="flex flex-col space-y-3">
              {[
                { id: "intro", label: "Introduction" },
                { id: "automation", label: "1. Architectural Governance" },
                { id: "wellness", label: "2. Legacy Monolith Modernisation" },
                { id: "indoor", label: "3. Global Edge Infrastructure" },
                { id: "materials", label: "4. Zero-Trust Security & Compliance" },
                { id: "sanctuary", label: "5. Automated CI/CD & SLAs" },
                { id: "conclusion", label: "Conclusion" },
              ].map((item) => {
                const isActive = activeToc === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveToc(item.id);
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className={`text-sm sm:text-base transition-all duration-200 block ${
                      isActive
                        ? "text-[#AD8BFF] font-semibold pl-3 border-l-2 border-[#AD8BFF]"
                        : "text-zinc-400 hover:text-zinc-700 pl-3 border-l-2 border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* Right Column: Main Article Body */}
          <article className="lg:col-span-8 flex flex-col space-y-12 text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
            
            {/* Introduction Section */}
            <div id="intro" className="space-y-6 scroll-mt-28">
              <p>
                Enterprise software architecture has undergone a profound shift in recent years. Today, high-growth global platforms look beyond monolithic frameworks or rigid stacks. True enterprise power is now defined by composable microservices, fault-tolerant edge infrastructure, and systems that respond intelligently as engineering teams scale.
              </p>
              <p>
                Whether you are planning to decouple legacy backend applications or building a global cloud-native architecture, understanding these modern engineering pillars ensures you invest in a platform that offers both immediate performance and long-term business value. Here are five critical pillars defining modern enterprise architectures.
              </p>
            </div>

            {/* Section 01 */}
            <div id="automation" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 01</span>
                <span>Architectural Governance</span>
              </h2>
              <p>
                Composable blueprints engineered for 99.99% uptime and zero-vulnerability enterprise standards. We enforce strict component interfaces, automated schema validation, and decoupled service layers so individual product teams can ship feature updates independently without breaking core production pipelines.
              </p>
            </div>

            {/* Section 02 */}
            <div id="wellness" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 02</span>
                <span>Legacy Monolith Modernisation</span>
              </h2>
              <p>
                Safely decouple legacy backend systems into agile, high-performance microservices without service interruption. Using strangler-fig migration patterns and event-driven data streaming, we ensure continuous operational availability while phasing out costly legacy debt.
              </p>
            </div>

            {/* Section 03 */}
            <div id="indoor" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 03</span>
                <span>Global Edge Infrastructure</span>
              </h2>
              <p>
                Multi-region CDN deployment and continuous edge routing scaling across global endpoints. Compute execution is distributed closer to your users, guaranteeing sub-50ms latency across global markets while absorbing viral traffic surges without latency drag.
              </p>
            </div>

            {/* Section 04 */}
            <div id="materials" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 04</span>
                <span>Zero-Trust Security &amp; Compliance</span>
              </h2>
              <p>
                Role-based access control, SOC2 compliance frameworks, and end-to-end encrypted identity management. Every API gateway endpoint is protected by granular rate limiting, continuous threat detection, and immutable audit logs.
              </p>
            </div>

            {/* Section 05 */}
            <div id="sanctuary" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 05</span>
                <span>Automated CI/CD &amp; SLAs</span>
              </h2>
              <p>
                Automated testing pipelines with instant rollback protection for zero-risk deployments. Backed by round-the-clock infrastructure monitoring and dedicated technical account managers delivering 99.99% SLA guarantees.
              </p>
            </div>

            {/* Conclusion Section */}
            <div id="conclusion" className="space-y-4 pt-6 border-t border-zinc-100 scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Conclusion
              </h3>
              <p>
                Modern enterprise architecture isn&apos;t built overnight - it is intentionally designed. By pairing composable systems with robust security and automated pipelines, we empower enterprises to innovate faster, scale globally, and outperform competition.
              </p>
            </div>

          </article>

        </div>
      </section>

      {/* ── Related Projects Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 -mt-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight mb-3">
            Related Projects
          </h2>
          <p className="text-zinc-500 text-base sm:text-md">
            See our enterprise engineering &amp; architecture work in action.
          </p>
        </div>

        {/* 2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: Bank Al Etihad */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#fbe3d5] via-[#f9e9df] to-[#f4ded4] p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-white text-[10px] font-mono">
                  <span className="font-sans font-bold text-xs text-orange-400">BANK AL ETIHAD</span>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-[9px] font-sans font-bold">Atomic Design</span>
                </div>
                <div className="p-3 bg-zinc-50 flex-1 flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-800">
                    <span>Composable Architecture</span>
                    <span className="text-[10px] text-zinc-400 font-normal">99.99% Uptime</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-orange-500 text-white rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] opacity-90">Microservices</span>
                      <span className="text-[10px] font-bold">Enterprise</span>
                    </div>
                    <div className="bg-white border border-zinc-200 rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] text-zinc-400">Scale</span>
                      <span className="text-[10px] font-bold text-zinc-700">10M+ Users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-orange-600">
                Bank Al Etihad
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                A fully composable atomic design overhaul that streamlined enterprise workflows and accelerated developer velocity.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Enterprise
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Atomic Systems
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs" title="Jordan">
                  🇯🇴
                </span>
              </div>
            </div>
          </div>

          {/* Project 2: WP Engine */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#e0f2fe] p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-white text-[10px] font-mono">
                  <span className="font-sans font-bold text-xs text-sky-400">WP ENGINE</span>
                  <span className="bg-sky-500 text-white px-2 py-0.5 rounded text-[9px] font-sans font-bold">Headless</span>
                </div>
                <div className="p-3 bg-zinc-50 flex-1 flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-800">
                    <span>Headless WordPress</span>
                    <span className="text-[10px] text-zinc-400 font-normal">Sub-second Latency</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-sky-600 text-white rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] opacity-90">Design System</span>
                      <span className="text-[10px] font-bold">Global CDN</span>
                    </div>
                    <div className="bg-white border border-zinc-200 rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] text-zinc-400">Security</span>
                      <span className="text-[10px] font-bold text-zinc-700">Hardened</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-sky-600">
                WP Engine
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Implementing composable Headless WordPress architecture and design systems to enhance scalability and personalization.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Enterprise
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Headless
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs" title="USA">
                  🇺🇸
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Footer component */}
      <Footer />
    </main>
  );
}
