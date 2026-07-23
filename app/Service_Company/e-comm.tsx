"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";
import CTA from "../Components/cta";
import FAQ from "../Components/FAQ";

export default function EcommerceServicePage() {
  const [activeToc, setActiveToc] = useState("intro");

  useEffect(() => {
    const sectionIds = ["intro", "headless", "personalisation", "performance", "checkout", "omnichannel", "conclusion"];
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
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Retail Tech</span>
            </div>

            <span className="text-zinc-300 font-bold">•</span>

            {/* Pill 1: Conversion Optimisation */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-zinc-800 font-medium text-xs sm:text-sm">
              <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <span>Conversion Optimisation</span>
            </div>

            {/* Pill 2: Personalisation */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-zinc-800 font-medium text-xs sm:text-sm">
              <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span>Personalisation</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.12] max-w-4xl mb-6">
            Composable Retail &amp; High-Conversion Digital Commerce
          </h1>

          {/* Bottom Metadata Date Bar */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 font-normal">
            <span>July 15, 2026</span>
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
                { id: "headless", label: "1. Headless Storefront Architecture" },
                { id: "personalisation", label: "2. Real-Time Personalisation Engine" },
                { id: "performance", label: "3. Sub-Second Mobile Performance" },
                { id: "checkout", label: "4. Frictionless Checkout Experience" },
                { id: "omnichannel", label: "5. Multi-Channel Inventory Sync" },
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
                The digital retail landscape is shifting dramatically toward headless, modular commerce architectures. High-growth e-commerce brands can no longer rely on rigid monolithic templates that slow down page load times and restrict custom purchasing journeys.
              </p>
              <p>
                Whether you are scaling a D2C brand or modernizing a multi-brand retail marketplace, implementing a composable commerce strategy guarantees sub-second page transitions, higher checkout conversion rates, and seamless omni-channel integration. Here are five critical features defining modern e-commerce engineering.
              </p>
            </div>

            {/* Section 01 */}
            <div id="headless" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 01</span>
                <span>Headless Storefront Architecture</span>
              </h2>
              <p>
                Decouple your Next.js frontend presentation layer from backend commerce engines like Shopify Plus, Commerce Layer, or Commercetools. Enjoy complete creative freedom without sacrificing inventory management reliability.
              </p>
            </div>

            {/* Section 02 */}
            <div id="personalisation" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 02</span>
                <span>Real-Time Personalisation Engine</span>
              </h2>
              <p>
                Deliver dynamic product recommendations, localized currency displays, and tailored promotional banners based on user behavior and purchasing history at the edge without layout cumulative shift (CLS).
              </p>
            </div>

            {/* Section 03 */}
            <div id="performance" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 03</span>
                <span>Sub-Second Mobile Performance</span>
              </h2>
              <p>
                Over 70% of e-commerce traffic originates on mobile devices. Our headless storefronts achieve sub-second Core Web Vitals across iOS and Android browsers, directly reducing cart abandonment rates.
              </p>
            </div>

            {/* Section 04 */}
            <div id="checkout" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 04</span>
                <span>Frictionless Checkout Experience</span>
              </h2>
              <p>
                Streamline one-click purchasing flows, Apple Pay / Google Pay integrations, and dynamic tax calculation services. Convert high-intent traffic with minimum input fields and instant order confirmation.
              </p>
            </div>

            {/* Section 05 */}
            <div id="omnichannel" className="space-y-4 pt-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <span className="text-[#AD8BFF] font-sans font-bold">// 05</span>
                <span>Multi-Channel Inventory Sync</span>
              </h2>
              <p>
                Synchronize product catalogs, inventory availability, and order fulfillment across online stores, physical POS systems, and social commerce channels in real time with zero overselling risk.
              </p>
            </div>

            {/* Conclusion Section */}
            <div id="conclusion" className="space-y-4 pt-6 border-t border-zinc-100 scroll-mt-28">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Conclusion
              </h3>
              <p>
                In e-commerce, speed is revenue. By combining composable storefronts with ultra-fast edge infrastructure and frictionless checkout flows, we empower brands to maximize customer lifetime value and scale revenue effortlessly.
              </p>
            </div>

          </article>

        </div>
      </section>

      {/* ── Related Projects Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-zinc-100">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight mb-3">
            E-Commerce Case Studies
          </h2>
          <p className="text-zinc-500 text-base sm:text-md">
            See our headless commerce engineering work in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: WP Engine */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#e0f2fe] p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col p-4">
                <span className="font-bold text-sky-600 text-sm mb-1">WP ENGINE</span>
                <span className="text-xs text-zinc-500">Headless Digital Storefront</span>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 rounded bg-sky-100 text-sky-700 text-[10px] font-semibold">Headless</span>
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-[10px] font-semibold">Global CDN</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 group-hover:text-sky-600 transition-colors">
                WP Engine
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Implementing composable Headless WordPress architecture and design systems to enhance scalability and personalization.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">Ecommerce</span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">Headless</span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs">🇺🇸</span>
              </div>
            </div>
          </div>

          {/* Project 2: Bank Al Etihad */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#fbe3d5] via-[#f9e9df] to-[#f4ded4] p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col p-4">
                <span className="font-bold text-orange-600 text-sm mb-1">BANK AL ETIHAD</span>
                <span className="text-xs text-zinc-500">Atomic System Architecture</span>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 rounded bg-orange-100 text-orange-700 text-[10px] font-semibold">99.99% Uptime</span>
                  <span className="px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-semibold">Atomic Design</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                Bank Al Etihad
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                A fully composable atomic design overhaul that streamlined enterprise workflows and accelerated checkout conversion.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">Enterprise</span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">Atomic Systems</span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs">🇯🇴</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      {/* CTA section */}
      <CTA />

      {/* Footer component */}
      <Footer />
    </main>
  );
}
