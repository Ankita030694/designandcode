"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";
import CTA from "../Components/cta";

export default function StartupServicePage() {
  const [activeToc, setActiveToc] = useState("intro");

  useEffect(() => {
    const sectionIds = ["intro", "mvp", "stack", "velocity", "fundraising", "scaling", "conclusion"];
    const handleScroll = () => {
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
    <main className="relative flex flex-col flex-1 bg-white pt-20">
      {/* ── Hero Section (Matching Image Design) ── */}
      <section className="relative flex flex-col items-start justify-center py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="relative z-10 flex flex-col items-start w-full max-w-5xl mx-auto text-left">
          
          {/* Top Kicker & Category Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-6 select-none">
            {/* Fundamentals Item */}
            <div className="flex items-center gap-2 text-zinc-600 font-medium text-sm sm:text-base">
              <svg className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
              </svg>
              <span>Startup Tech</span>
            </div>

            <span className="text-zinc-300 font-bold">•</span>

            {/* Pill 1: Rapid MVP */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-zinc-800 font-medium text-xs sm:text-sm">
              <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span>Rapid Growth</span>
            </div>

            {/* Pill 2: Scalable Architecture */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-zinc-800 font-medium text-xs sm:text-sm">
              <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <span>Scalable Tech</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.12] max-w-4xl mb-6">
            Building Disruption At Warp Speed (The Startup Blueprint)
          </h1>

          {/* Bottom Metadata Date Bar */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 font-normal">
            <span>July 18, 2026</span>
            <span className="text-zinc-300 font-bold">•</span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-100/90 text-zinc-700 text-xs font-semibold border border-zinc-200/50">
              Last Updated: July 20, 2026
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
                { id: "mvp", label: "1. Rapid MVP Development" },
                { id: "stack", label: "2. Modern Composable Stack" },
                { id: "velocity", label: "3. High Velocity Iteration" },
                { id: "fundraising", label: "4. Investor Readiness Tech" },
                { id: "scaling", label: "5. Seamless Scale Engine" },
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
                In the fast-moving startup ecosystem, speed to market is everything. Modern founders cannot afford to waste months rebuilding boilerplate infrastructure or wrestling with legacy monolithic tech stacks. True startup advantage lies in rapid validation, continuous iteration, and composable systems that scale seamlessly from pre-seed to Series B.
              </p>
              <p>
                Whether you are launching your initial Minimum Viable Product (MVP) or preparing for hyper-growth, understanding these core startup technology pillars ensures you ship faster without accumulating unmanageable technical debt. Here are the five key strategies driving successful startup engineering.
              </p>
            </div>

            {/* Section 01 */}
            <div id="mvp" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 01</span>
                <span>Rapid MVP Development</span>
              </h2>
              <p>
                Turn product ideas into production-ready web applications in record time. By utilizing reusable UI component libraries, serverless APIs, and edge deployment, we help startups validate core value propositions with real users in weeks rather than quarters.
              </p>
            </div>

            {/* Section 02 */}
            <div id="stack" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 02</span>
                <span>Modern Composable Stack</span>
              </h2>
              <p>
                Adopt a modern stack built on Next.js, Headless CMS, and composable micro-services. This decoupled approach allows engineering teams to swap out authentication, analytics, or payment providers without rewriting core application logic.
              </p>
            </div>

            {/* Section 03 */}
            <div id="velocity" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 03</span>
                <span>High Velocity Iteration</span>
              </h2>
              <p>
                Establish continuous deployment pipelines that allow your team to ship multiple production updates daily with total confidence. Automated branch previews, instant rollbacks, and automated testing ensure zero downtime during rapid product iterations.
              </p>
            </div>

            {/* Section 04 */}
            <div id="fundraising" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 04</span>
                <span>Investor Readiness Tech</span>
              </h2>
              <p>
                Build clean, well-documented codebases and SOC2-compliant data security frameworks that pass investor technical due diligence with flying colors. Show VCs a scalable foundation that&apos;s ready to absorb funding and scale immediately.
              </p>
            </div>

            {/* Section 05 */}
            <div id="scaling" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 05</span>
                <span>Seamless Scale Engine</span>
              </h2>
              <p>
                Prepare your application for exponential user growth with global CDN edge distribution and auto-scaling serverless databases. Handle viral traffic spikes seamlessly without sudden infra cost explosions or server crashes.
              </p>
            </div>

            {/* Conclusion Section */}
            <div id="conclusion" className="space-y-4 pt-6 border-t border-zinc-100 scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Conclusion
              </h3>
              <p>
                Disruption requires both speed and precision. By combining agile development methodologies with composable modern architecture, we empower ambitious startups to out-innovate legacy competitors and build platforms that endure.
              </p>
            </div>

          </article>

        </div>
      </section>

      {/* ── Related Projects Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-zinc-100">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight mb-3">
            Startup Case Studies
          </h2>
          <p className="text-zinc-500 text-base sm:text-md">
            See how we helped high-growth startups build and scale fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: Amplifidor */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#fbcfe8]/30 via-[#f472b6]/20 to-[#a78bfa]/20 p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col p-4">
                <span className="font-bold text-pink-600 text-sm mb-1">AMPLIFIDOR</span>
                <span className="text-xs text-zinc-500">Creator &amp; Influencer Platform</span>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 rounded bg-pink-100 text-pink-700 text-[10px] font-semibold">Scale</span>
                  <span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-[10px] font-semibold">UI/UX</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 group-hover:text-pink-600 transition-colors">
                Amplifidor
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Creating a scalable, user-focused platform using composable design systems for creator marketing.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">Startup</span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">UI/UX</span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs">🇸🇦</span>
              </div>
            </div>
          </div>

          {/* Project 2: Android Authority */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div className="relative rounded-[28px] bg-gradient-to-br from-zinc-200/60 via-zinc-100/40 to-zinc-200/30 p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col p-4">
                <span className="font-bold text-zinc-900 text-sm mb-1">ANDROID AUTHORITY</span>
                <span className="text-xs text-zinc-500">Media Platform Migration</span>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 rounded bg-zinc-100 text-zinc-800 text-[10px] font-semibold">Headless</span>
                  <span className="px-2 py-1 rounded bg-zinc-100 text-zinc-800 text-[10px] font-semibold">50M+ Monthly Visits</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 group-hover:text-zinc-700 transition-colors">
                Android Authority
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Enhancing Core Web Vitals and User Retention with migration to a Headless CMS architecture.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">Media</span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">Headless</span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs">🇨🇦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <CTA />

      {/* Footer component */}
      <Footer />
    </main>
  );
}
