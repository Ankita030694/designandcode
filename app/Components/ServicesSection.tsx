"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesSection() {
  const [openServices, setOpenServices] = useState<Record<number, boolean>>({});

  const toggleService = (idx: number) => {
    setOpenServices((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="relative w-full py-16 md:py-24 flex flex-col justify-center overflow-hidden font-sans select-none">
      {/* ── STATEMENT/TITLE CONTAINER ── */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 mb-16 select-none">
        {/* Services Sticker (Pinned with clip) */}
        <div className="relative mb-6 transform -rotate-12 bg-[#e0f2fe] border border-sky-200 shadow-md rounded-xl px-5 py-2 text-zinc-900 font-extrabold text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
          {/* Paperclip */}
          <div className="absolute -top-3.5 left-3 text-zinc-400">
            <svg
              className="w-4 h-6 transform -rotate-12"
              viewBox="0 0 20 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Yellow Loop Doodle */}
          <div className="absolute -top-5 left-12 w-6 h-6 text-amber-400 pointer-events-none select-none">
            <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5,15 C10,5 20,5 25,15 C20,25 10,25 5,15 Z" strokeLinecap="round" />
            </svg>
          </div>
          {/* Blue Pushpin representation */}
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-500 rounded-full border border-white shadow-xs" />

          {/* Book icon */}
          <svg
            className="w-4 h-4 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <span className="pl-1">Services</span>
        </div>

        <h2 className="text-zinc-950 font-medium text-4xl sm:text-5xl md:text-[52px] tracking-tight uppercase leading-[1.05] max-w-3xl text-center select-none">
          WHERE I<br />CAN HELP YOU
        </h2>
      </div>

      {/* ── SERVICES LIST ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col gap-4 px-6 select-none">
        {/* Card 1: UI/UX Design */}
        <Link
          href="/Service/ui_ux"
          className="bg-[#F0F7FF] hover:bg-[#E5F1FF] border border-[#D5E6FA]/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5 hover:scale-[1.005]"
          onClick={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault();
              toggleService(1);
            }
          }}
        >
          {/* Header (Always Visible) */}
          <div className="w-full flex items-center justify-between">
            <span className="text-zinc-900 font-bold text-xl md:text-2xl tracking-tight">
              UI/UX Design
            </span>

            {/* Logo / Icon on Right */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
              {/* Back offset shadow circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-300/50 translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              {/* Front main circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#6CA2F1] text-white flex items-center justify-center border border-white/50 shadow-xs">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  <path d="M13 13l6 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown Content */}
          <div
            className={`grid transition-all duration-300 ease-in-out w-full ${
              openServices[1]
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-2">
              <span className="text-zinc-500 font-semibold text-sm">
                Expert Design Partners (and good listeners)
              </span>
              <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                We translate complex ideas into intuitive, beautiful, and conversion-focused digital
                interfaces. Aligned with your brand vision and powered by industry-leading UX best
                practices.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  "User Research",
                  "Wireframing & Prototyping",
                  "Interface Design",
                  "Design Systems",
                  "Mobile & Web Apps",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold text-[#4B7DBE] bg-white border border-[#D5E6FA] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-Only CTA Link */}
              <div className="block md:hidden mt-4 pt-4 border-t border-[#D5E6FA]/40">
                <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#4B7DBE] hover:underline">
                  View Service Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 2: Web Development */}
        <Link
          href="/Service/web_dev"
          className="bg-[#FDF2F2] hover:bg-[#FBEAEA] border border-[#F3DBDB]/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5 hover:scale-[1.005]"
          onClick={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault();
              toggleService(2);
            }
          }}
        >
          {/* Header (Always Visible) */}
          <div className="w-full flex items-center justify-between">
            <span className="text-zinc-900 font-bold text-xl md:text-2xl tracking-tight">
              Web Development
            </span>

            {/* Logo / Icon on Right */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
              {/* Back offset shadow circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-300/50 translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              {/* Front main circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E59A9A] text-white flex items-center justify-center border border-white/50 shadow-xs">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown Content */}
          <div
            className={`grid transition-all duration-300 ease-in-out w-full ${
              openServices[2]
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-2">
              <span className="text-zinc-500 font-semibold text-sm">
                What if Technology wasn&apos;t an obstacle?
              </span>
              <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                Beautifully built, hyper-fast, and scalable websites designed to convert. We build
                lightweight Next.js websites, headless architectures, and custom web applications
                optimized for growth.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  "React & Next.js",
                  "Headless CMS",
                  "Shopify E-Commerce",
                  "API Integrations",
                  "Speed Optimization",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold text-[#BE7070] bg-white border border-[#F3DBDB] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-Only CTA Link */}
              <div className="block md:hidden mt-4 pt-4 border-t border-[#F3DBDB]/40">
                <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#BE7070] hover:underline">
                  View Service Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 3: Shopify Development */}
        <Link
          href="/ecommerce"
          className="bg-[#ECFDF5] hover:bg-[#D1FAE5] border border-[#BCEFD5]/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5 hover:scale-[1.005]"
          onClick={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault();
              toggleService(3);
            }
          }}
        >
          {/* Header (Always Visible) */}
          <div className="w-full flex items-center justify-between">
            <span className="text-zinc-900 font-bold text-xl md:text-2xl tracking-tight">
              Shopify Development
            </span>

            {/* Logo / Icon on Right */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
              {/* Back offset shadow circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-300/50 translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              {/* Front main circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#5BD4A3] text-white flex items-center justify-center border border-white/50 shadow-xs">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown Content */}
          <div
            className={`grid transition-all duration-300 ease-in-out w-full ${
              openServices[3]
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-2">
              <span className="text-zinc-500 font-semibold text-sm">
                High-Converting E-Commerce Stores
              </span>
              <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                Building high-converting, custom Shopify & e-commerce stores designed for seamless user
                checkout and rapid sales scaling.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  "Liquid Dev",
                  "Custom Themes",
                  "App Integrations",
                  "Headless Shopify",
                  "Checkout Optimization",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold text-[#3BA67D] bg-white border border-[#BCEFD5] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-Only CTA Link */}
              <div className="block md:hidden mt-4 pt-4 border-t border-[#BCEFD5]/40">
                <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#3BA67D] hover:underline">
                  View Service Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 4: Performance Marketing */}
        <Link
          href="/Service/perf_marketing"
          className="bg-[#FEFCE8] hover:bg-[#FEF9C3] border border-[#F3EFA2]/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5 hover:scale-[1.005]"
          onClick={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault();
              toggleService(4);
            }
          }}
        >
          {/* Header (Always Visible) */}
          <div className="w-full flex items-center justify-between">
            <span className="text-zinc-900 font-bold text-xl md:text-2xl tracking-tight">
              Performance Marketing
            </span>

            {/* Logo / Icon on Right */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
              {/* Back offset shadow circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-300/50 translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              {/* Front main circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F3DB5D] text-white flex items-center justify-center border border-white/50 shadow-xs">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown Content */}
          <div
            className={`grid transition-all duration-300 ease-in-out w-full ${
              openServices[4]
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-2">
              <span className="text-zinc-500 font-semibold text-sm">
                Bring your users into focus.
              </span>
              <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                Data-driven marketing managed with precision to deliver efficient growth and
                measurable returns. We help you target, acquire, and convert high-intent customers.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  "Google Ads",
                  "Meta Ads (FB/IG)",
                  "Search Engine Marketing",
                  "CRO Strategy",
                  "Attribution & Tracking",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold text-[#B5A133] bg-white border border-[#F3EFA2] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-Only CTA Link */}
              <div className="block md:hidden mt-4 pt-4 border-t border-[#F3EFA2]/40">
                <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#B5A133] hover:underline">
                  View Service Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 5: SEO & Organic Growth */}
        <Link
          href="/Service/seo"
          className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-[#DFDAFA]/60 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-0.5 hover:scale-[1.005]"
          onClick={(e) => {
            if (window.innerWidth < 768) {
              e.preventDefault();
              toggleService(5);
            }
          }}
        >
          {/* Header (Always Visible) */}
          <div className="w-full flex items-center justify-between">
            <span className="text-zinc-900 font-bold text-xl md:text-2xl tracking-tight">
              SEO & Organic Growth
            </span>

            {/* Logo / Icon on Right */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
              {/* Back offset shadow circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-300/50 translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              {/* Front main circle */}
              <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#9C8DF6] text-white flex items-center justify-center border border-white/50 shadow-xs">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dropdown Content */}
          <div
            className={`grid transition-all duration-300 ease-in-out w-full ${
              openServices[5]
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-2">
              <span className="text-zinc-500 font-semibold text-sm">
                Dominating organic search results
              </span>
              <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                Dominating organic search results with data-backed technical SEO, keyword strategy,
                and high-authority content execution.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[
                  "Technical SEO",
                  "Content Architecture",
                  "Backlink Strategy",
                  "Analytics & Reports",
                  "Core Web Vitals",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold text-[#7768CD] bg-white border border-[#DFDAFA] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mobile-Only CTA Link */}
              <div className="block md:hidden mt-4 pt-4 border-t border-[#DFDAFA]/40">
                <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#7768CD] hover:underline">
                  View Service Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
