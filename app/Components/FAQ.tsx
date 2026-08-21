"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  color?: string;
}

export interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

/* ── FAQ Pill: absolutely positioned, smooth CSS max-height animation, no layout shift (Desktop) ── */
function FAQPill({
  question,
  answer,
  color = "bg-[#FBDDE0]",
}: {
  question: string;
  answer: string;
  color?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${color} border border-zinc-200/40 rounded-2xl px-5 py-3.5 shadow-md cursor-pointer w-full select-none`}
      style={{ transition: "box-shadow 0.2s" }}
      onClick={() => setOpen(!open)}
    >
      {/* Question row */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-zinc-900 font-semibold text-sm sm:text-base leading-snug">{question}</span>
        {/* + button that rotates to × */}
        <div
          className="w-6 h-6 rounded-full border border-zinc-400/60 flex items-center justify-center flex-shrink-0"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
        >
          <svg className="w-3.5 h-3.5 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      {/* Answer */}
      <div
        style={{
          maxHeight: open ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="border-t border-zinc-200/60 mt-3 pt-3">
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile FAQ Pill: stacked layout, solid box shadows, custom responsiveness ── */
function MobileFAQPill({
  question,
  answer,
  color = "bg-[#FDDDE0]",
}: {
  question: string;
  answer: string;
  color?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${color} border border-zinc-900/10 rounded-2xl px-5 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)] cursor-pointer w-full select-none transition-all duration-200`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-zinc-900 font-extrabold text-[15px] sm:text-base leading-snug">{question}</span>
        <div
          className="w-6 h-6 rounded-full border border-zinc-900/20 flex items-center justify-center flex-shrink-0 bg-white/20"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
        >
          <svg className="w-3.5 h-3.5 text-zinc-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      <div
        style={{
          maxHeight: open ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="border-t border-zinc-900/10 mt-3 pt-3">
          <p className="text-[13px] sm:text-sm text-zinc-800 leading-relaxed font-semibold">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ items, title, subtitle, badge }: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // If custom items are provided (e.g. inside a blog post), render an elegant accordion
  if (items && items.length > 0) {
    return (
      <section className="relative bg-[#FFFCF5] py-20 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-zinc-100/60 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 flex flex-col justify-start">
            <div className="space-y-4">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block">
                {badge || "Article FAQ"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight uppercase">
                {title || "Frequently Asked Questions"}
              </h2>
              {subtitle && (
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="md:col-span-7 divide-y divide-zinc-200/80 border-t border-b border-zinc-200/80">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left gap-4 hover:text-indigo-600 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="text-[16px] sm:text-[17px] font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                    <span className="text-xl font-light text-indigo-600 select-none shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-3 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Default Agency Scattered Pills Design
  return (
    <section
      className="relative md:min-h-screen w-full py-12 md:py-24 pt-12 md:pt-12 pb-12 flex flex-col justify-center bg-transparent overflow-hidden font-sans select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(24, 69, 247, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(24, 69, 247, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        backgroundPosition: "0 -1px",
        backgroundAttachment: "fixed",
        clipPath: "inset(0)",
      }}
    >
      {/* ── Fixed background doodles ── */}
      <div className="fixed top-[15%] right-[10%] w-24 h-24 text-rose-300 pointer-events-none select-none z-10">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M50,30 C35,10 10,25 10,50 C10,75 50,90 50,90 C50,90 90,75 90,50 C90,25 65,10 50,30 Z" />
        </svg>
      </div>
      <div className="fixed top-[20%] left-[10%] w-20 h-16 text-zinc-300 pointer-events-none select-none z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      </div>
      <div className="fixed top-[45%] left-[8%] w-20 h-20 text-amber-300 pointer-events-none select-none z-10">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M50,10 L50,90 M10,50 L90,50 M22,22 L78,78 M22,78 L78,22" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>
      <div className="fixed top-[50%] right-[12%] w-16 h-16 text-amber-300 pointer-events-none select-none z-10 animate-pulse">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M5.75 19.25l12.5-12.5" />
        </svg>
      </div>
      <div className="fixed top-[75%] right-[8%] w-28 h-28 text-blue-300 pointer-events-none select-none z-10">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M20,50 Q35,25 60,30 Q85,35 70,60 Q55,85 30,70 Z" />
          <path d="M35,60 Q45,35 70,40 Q90,45 80,65 Q70,85 45,75 Z" />
        </svg>
      </div>
      <div className="fixed top-[80%] left-[8%] w-24 h-12 text-blue-300/50 pointer-events-none select-none z-10">
        <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10,30 Q25,10 40,30 T70,30 T100,30" />
          <path d="M15,35 Q30,15 45,35 T75,35 T105,35" />
        </svg>
      </div>

      {/* ── ABSOLUTE LAYOUT: Desktop ── */}
      <div className="hidden md:block relative z-20 w-full" style={{ height: "680px" }}>
        <div className="absolute left-1/2 top-[2%] transform -translate-x-[60%] -translate-y-2 rotate-[-6deg] bg-sky-100 border border-sky-200 shadow-md rounded-xl px-5 py-2 text-zinc-900 font-extrabold text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer z-30">
          <div className="absolute -top-3.5 left-3 text-zinc-400">
            <svg className="w-4 h-6" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" />
            </svg>
          </div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-500 rounded-full border border-white" />
          <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="pl-1">FAQs</span>
        </div>

        {/* Central Heading */}
        <div className="absolute inset-x-0 top-[14%] flex flex-col items-center text-center select-none pointer-events-none">
          <h2 className="text-zinc-950 font-medium text-4xl sm:text-5xl md:text-[56px] tracking-tight uppercase leading-[1.05] max-w-3xl">
            FREQUENTLY ASKED<br />QUESTIONS
          </h2>
        </div>

        {/* Scattered FAQ Pills */}
        <div className="absolute left-[3%] top-[5%] w-[260px] sm:w-[290px] mx-30">
          <FAQPill
            question="What does DesignNCode do?"
            answer="DesignNCode provides UI/UX design, web development, Shopify development, e-commerce design, SEO and performance marketing services for businesses and digital brands."
            color="bg-[#FBDDE0]"
          />
        </div>

        <div className="absolute right-[3%] top-[2%] w-[260px] sm:w-[290px] mx-30">
          <FAQPill
            question="Do you design and develop websites?"
            answer="Yes. We handle the complete website process from strategy and UX design to UI design, development, testing and launch."
            color="bg-[#D9F2C4]"
          />
        </div>

        <div className="absolute left-[2%] top-[48%] w-[240px] sm:w-[270px] mx-35 -mt-10">
          <FAQPill
            question="Can you redesign an existing website?"
            answer="Yes. We can audit your existing website, identify UX and performance issues and redesign the experience to improve usability, visual quality and conversions."
            color="bg-[#C4DCF5]"
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[38%] w-[280px] sm:w-[320px] z-30 mt-20">
          <FAQPill
            question="Do you offer Shopify development?"
            answer="Yes. We design and develop custom Shopify stores, themes and e-commerce experiences focused on usability, performance and conversions."
            color="bg-[#D9F2C4]"
          />
        </div>

        <div className="absolute right-[2%] top-[50%] w-[240px] sm:w-[270px] mx-35 -mt-10">
          <FAQPill
            question="Do you build with React & Next.js?"
            answer="Yes. We use modern technologies including React and Next.js to build fast, scalable and responsive websites and web applications."
            color="bg-[#FEFBCC]"
          />
        </div>
      </div>

      {/* ── STACKED LAYOUT: Mobile ── */}
      <div className="block md:hidden relative z-20 w-full px-6 flex flex-col items-center select-none pb-12">
        <div className="relative mb-6 transform -rotate-12 bg-sky-100 border border-sky-200 shadow-md rounded-xl px-5 py-2 text-zinc-900 font-extrabold text-sm flex items-center gap-2 self-start ml-2">
          <div className="absolute -top-3.5 left-3 text-zinc-400">
            <svg className="w-4 h-6 transform -rotate-12" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-500 rounded-full border border-white" />
          <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="pl-1">FAQs</span>
        </div>

        <h2 className="text-zinc-950 font-bold text-[28px] sm:text-3xl tracking-tight uppercase leading-[1.1] text-center mb-8 w-full">
          FREQUENTLY ASKED<br />QUESTIONS
        </h2>

        <div className="flex flex-col gap-4 w-full max-w-[480px]">
          <MobileFAQPill
            question="What does DesignNCode do?"
            answer="DesignNCode provides UI/UX design, web development, Shopify development, e-commerce design, SEO and performance marketing services for businesses and digital brands."
            color="bg-[#FDDDE0]"
          />
          <MobileFAQPill
            question="Do you design and develop websites?"
            answer="Yes. We handle the complete website process from strategy and UX design to UI design, development, testing and launch."
            color="bg-[#E5FF7F]"
          />
          <MobileFAQPill
            question="Can you redesign an existing website?"
            answer="Yes. We can audit your existing website, identify UX and performance issues and redesign the experience to improve usability, visual quality and conversions."
            color="bg-[#FEFBCC]"
          />
          <MobileFAQPill
            question="Do you offer Shopify development?"
            answer="Yes. We design and develop custom Shopify stores, themes and e-commerce experiences focused on usability, performance and conversions."
            color="bg-[#C4DCF5]"
          />
          <MobileFAQPill
            question="Do you build with React & Next.js?"
            answer="Yes. We use modern technologies including React and Next.js to build fast, scalable and responsive websites and web applications."
            color="bg-[#C2F5D9]"
          />
        </div>
      </div>
    </section>
  );
}

