"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTA from "../../Components/cta";
import Footer from "../../Components/footer";
import FAQ from "../../Components/FAQ";
import { BLOGS_DETAILS } from "../../../data/blogs";

function BlogDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "7";
  const blog = BLOGS_DETAILS[id] || BLOGS_DETAILS["7"];

  return (
    <main className="relative flex flex-col min-h-screen bg-[#FAFAFC] pt-20">
      {/* ─── HERO IMAGE BANNER ─── */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden bg-zinc-900 border-b border-zinc-200/50">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* ─── BREADCRUMBS SECTION ─── */}
      <div className="border-b border-zinc-200/60 bg-white py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center gap-2 text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-bold">
          <Link href="/" className="hover:text-zinc-800 transition-colors">
            Home
          </Link>
          <span className="text-zinc-300">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
          </span>
          <Link href="/Blogs" className="hover:text-zinc-800 transition-colors">
            Blog
          </Link>
          <span className="text-zinc-300">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
          </span>
          <span className="text-zinc-500 font-semibold truncate max-w-[150px] sm:max-w-none normal-case tracking-normal text-[12px] sm:text-sm">
            {blog.title}
          </span>
        </div>
      </div>

      {/* ─── BLOG HEADER CONTENT ─── */}
      <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 mt-12 sm:mt-16 mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-5">
          {blog.title}
        </h1>
        {blog.subtitle && (
          <p className="text-zinc-500 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            {blog.subtitle}
          </p>
        )}
        <p className="text-zinc-400 text-xs sm:text-sm font-semibold tracking-wide">
          {blog.date} &nbsp;•&nbsp; {blog.author.name}
        </p>
      </div>

      {/* ─── MAIN TWO-COLUMN CONTENT GRID ─── */}
      <div className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 sm:px-8 pb-20 sm:pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ─── Left Column: Main Article Body ─── */}
          <div className="lg:col-span-8 bg-white border border-zinc-200/60 rounded-[32px] p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.015)]">
            <div className="prose prose-zinc max-w-none space-y-6 text-zinc-700 text-[15px] sm:text-[17px] leading-relaxed">
              
              {/* Introduction paragraph */}
              <p className="text-zinc-800 font-regular text-[16px] sm:text-[18px]">
                {blog.content.introduction}
              </p>

              {/* Core sections with dynamic headings and paragraphs */}
              {blog.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-4 pt-4">
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 pt-2 border-b border-zinc-100 pb-2">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, pIdx) => {
                    // Check if it's a list item starting with a number or key phrases for special formatting
                    const isMetric = paragraph.startsWith('"') || paragraph.startsWith('\"') || paragraph.includes("metric emphasis");
                    const isAspirational = paragraph.includes("aspirational extrapolate");
                    
                    return (
                      <p 
                        key={pIdx} 
                        className={`text-zinc-600 font-regular ${
                          isMetric || isAspirational 
                            ? "bg-zinc-50/50 p-4 rounded-xl border-l-2 border-zinc-300 pl-4 italic text-[15px]" 
                            : ""
                        }`}
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              ))}

              {/* Conclusion paragraph */}
              <div className="pt-8 mt-8 border-t border-zinc-150">
                <p className="text-zinc-600 font-regular bg-zinc-50/30 p-5 sm:p-6 rounded-2xl border border-zinc-100/50">
                  {blog.content.conclusion}
                </p>
              </div>

            </div>

            {/* Back button */}
            <div className="mt-12 pt-6 border-t border-zinc-100">
              <Link
                href="/Blogs"
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                </svg>
                Back to Articles
              </Link>
            </div>
          </div>

          {/* ─── Right Column: Sticky Sidebar Cards ─── */}
          <aside className="lg:col-span-4 sticky top-24 space-y-6 self-start">
            
            {/* Card 1: About Author */}
            <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col">
              <h3 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase border-b border-zinc-100 pb-3 mb-5 select-none">
                About Author
              </h3>
              <div className="flex items-center gap-4.5 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-zinc-50 relative border border-zinc-200 shrink-0">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-[15px] sm:text-base leading-tight">
                    {blog.author.name}
                  </h4>
                  <Link href="/About_us" className="text-indigo-600 hover:text-indigo-800 text-[11px] font-bold mt-1 block uppercase tracking-wider transition-colors">
                    View Profile
                  </Link>
                </div>
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mt-2 pl-0.5">
                {blog.author.bio}
              </p>
            </div>

            {/* Card 2: CTA Card - Pipeline Growth */}
            {/* Styled using colors from the website layout: Deep zinc/gradient slate with hover effects */}
            <div className="bg-zinc-950 rounded-3xl p-6 sm:p-7 border border-zinc-850 shadow-xl flex flex-col gap-4 select-none relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-white text-lg font-bold tracking-tight mb-2">
                  Need Pipeline Growth?
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Get expert advice on enterprise GTM and CXO-direct strategies.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/ContactUs"
                    className="w-full text-center bg-white text-zinc-950 text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl hover:bg-zinc-100 hover:scale-[1.01] active:scale-[0.99] transition-all duration-250 shadow-md cursor-pointer"
                  >
                    Book a Strategy Call
                  </Link>
                  <Link
                    href="/ContactUs"
                    className="w-full text-center border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-white text-xs sm:text-sm font-semibold py-3.5 px-4 rounded-xl hover:border-zinc-700 hover:scale-[1.01] active:scale-[0.99] transition-all duration-250 cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>

      <FAQ />
      {/* CTA section */}
      <CTA />

      <Footer />
    </main>
  );
}

export default function BlogDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <BlogDetailContent />
    </Suspense>
  );
}
