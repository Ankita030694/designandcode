"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "./Components/FAQ";
import Footer from "./Components/footer";
import { SERVICE_PAGES_DATA, ServicePageHeading, ServicePageSection, ServicePageData } from "./data/articles";

export { SERVICE_PAGES_DATA };
export type { ServicePageHeading, ServicePageSection, ServicePageData };

export function AMAServiceLayout({ slug }: { slug: string }) {
  const pageData = SERVICE_PAGES_DATA[slug];
  const [activeHeadingId, setActiveHeadingId] = useState("intro");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    if (!pageData) return;
    const handleScroll = () => {
      let currentActive = "intro";
      const elements = [
        { id: "intro" },
        ...pageData.headings.filter((h) => h.id !== "intro")
      ];
      for (const item of elements) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            currentActive = item.id;
          }
        }
      }
      setActiveHeadingId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageData]);

  if (!pageData) {
    return <div className="min-h-screen bg-white pt-32 text-center text-zinc-500">Resource not found.</div>;
  }

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen bg-transparent pt-24 text-zinc-900 font-sans">
      <div className="max-w-9xl lg:max-w-[1600px] mx-auto w-full px-6 sm:px-8 py-12">
        {/* Title and Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-4">
          {pageData.title}
        </h1>
        <p className="text-zinc-500 text-lg sm:text-xl font-normal leading-relaxed max-w-4xl mb-8">
          {pageData.subtitle}
        </p>

        {/* Hero Banner Image */}
        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-sm border border-zinc-100 bg-zinc-50">
          <Image
            src={pageData.image}
            alt={pageData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Sticky Table of Contents (Left) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100">
            <h3 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-4">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-2">
              {pageData.headings.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleTocClick(e, item.id)}
                  className={`text-sm font-medium border-l-2 pl-3 py-1 transition-all duration-200 ${
                    activeHeadingId === item.id
                      ? "border-sky-500 text-sky-600 font-semibold bg-sky-50/40"
                      : "border-transparent text-zinc-500 hover:text-zinc-900 hover:border-zinc-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Column 2: Article Body (Middle) */}
          <article className="col-span-1 lg:col-span-6 space-y-12">
            
            {/* Introduction */}
            <section id="intro" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">Introduction</h2>
              {pageData.introduction.map((para, i) => (
                <p key={i} className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                  {para}
                </p>
              ))}
            </section>

            {/* Sections */}
            {pageData.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">{sec.title}</h2>
                {sec.text.map((t, i) => (
                  <p key={i} className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                    {t}
                  </p>
                ))}
                {sec.bullets && sec.bullets.length > 0 && (
                  <div className="bg-rose-50/40 border-l-4 border-rose-400 p-5 rounded-r-2xl space-y-2 mt-4">
                    <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-1">
                      {sec.bullets.map((b, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: b }} />
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* FAQs */}
            {pageData.faqs && pageData.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-28 space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">Frequently Asked Questions</h2>
                
                <div className="space-y-4 border-t border-zinc-100 pt-4">
                  {pageData.faqs.map((item, idx) => (
                    <div key={idx} className="border-b border-zinc-100 pb-4">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="flex justify-between items-center w-full text-left py-2 font-semibold text-zinc-800 hover:text-sky-600 transition-colors"
                      >
                        <span>{item.q}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${openFaqIndex === idx ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaqIndex === idx && (
                        <p className="text-sm text-zinc-500 mt-2 leading-relaxed pl-1">
                          {item.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Conclusion */}
            <section id="conclusion" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">Conclusion</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Whether you are launching a new site or optimizing an existing digital presence, selecting clean architectures, optimized designs, and data-driven marketing plays sets up long-term operational success and premium brand representation.
              </p>
            </section>

          </article>

          {/* Column 3: Sticky Sidebar (Right) */}
          <aside className="col-span-1 lg:col-span-3 sticky top-28 space-y-8 self-start">
            
            {/* Widget 1: Connect with Us */}
            <div className="bg-zinc-950 rounded-3xl p-6 border border-zinc-800 shadow-xl flex flex-col relative overflow-hidden text-white select-none">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-rose-400/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-lg font-bold tracking-tight">Connect with Us</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Speak with our enterprise solutions specialist to scope out your next project.
                </p>
                <div className="space-y-3.5 py-2">
                  <a href="tel:+919220721921" className="flex items-center gap-3 hover:text-sky-400 transition-colors text-white">
                    <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-semibold">+91 92207 21921</span>
                  </a>
                  <a href="mailto:info@designncode.com" className="flex items-center gap-3 hover:text-sky-400 transition-colors text-white">
                    <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">info@designncode.com</span>
                  </a>
                </div>
                <div className="pt-1">
                  <Link
                    href="/ContactUs"
                    className="w-full block text-center bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl transition-colors shadow-md cursor-pointer"
                  >
                    Request Callback
                  </Link>
                </div>
              </div>
            </div>

            {/* Widget 2: Related Resources (List) */}
            <div className="bg-white border border-zinc-150 rounded-3xl p-6 shadow-xs flex flex-col">
              <h4 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase border-b border-zinc-100 w-full pb-3 mb-4 select-none">
                Related Resources
              </h4>
              <ul className="space-y-3.5">
                {Object.keys(SERVICE_PAGES_DATA)
                  .filter((s) => s !== slug)
                  .slice(0, 4)
                  .map((s) => (
                    <li key={s}>
                      <Link
                        href={`/Blogs/${s}`}
                        className="text-sm font-semibold text-zinc-800 hover:text-rose-600 transition-colors leading-snug block"
                      >
                        {SERVICE_PAGES_DATA[s].title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Widget 3: Firm Statistics Card */}
            <div className="bg-white border border-zinc-150 rounded-3xl p-6 shadow-xs flex flex-col">
              <h4 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase border-b border-zinc-100 w-full pb-3 mb-5 select-none">
                Designncode Metrics
              </h4>
              <div className="space-y-4 text-zinc-700">
                <div>
                  <div className="text-2xl font-bold text-sky-500">150+ Projects</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Delivered globally with custom designs.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-rose-500">45% Faster</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Average page loading speed improvement.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-500">98% CSAT</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Client satisfaction rating year-over-year.</div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>



      <FAQ />
      <Footer />
    </main>
  );
}
