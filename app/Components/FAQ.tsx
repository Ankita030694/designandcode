"use client";

import React, { useState } from "react";

/* ── FAQ Pill: absolutely positioned, smooth CSS max-height animation, no layout shift (Desktop) ── */
function FAQPill({
  question,
  answer,
  color,
}: {
  question: string;
  answer: string;
  color: string;
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
      {/* Answer — animates via max-height, NO layout shift because pill is absolutely positioned */}
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
  color,
}: {
  question: string;
  answer: string;
  color: string;
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

export default function FAQ() {
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
      {/* ── Fixed background doodles (same positions = sticks with grid) ── */}
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

      {/* Extra fixed doodles specific to FAQ section feel */}
      <div className="fixed top-[30%] right-[5%] w-10 h-14 text-blue-400/60 pointer-events-none select-none z-10">
        <svg viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2C9 2 6 4.5 6 8c0 3 2 5 4 6.5v2.5h4V14.5c2-1.5 4-3.5 4-6.5 0-3.5-3-6-6-6z" />
          <line x1="9" y1="28" x2="15" y2="28" />
          <line x1="10" y1="31" x2="14" y2="31" />
        </svg>
      </div>
      <div className="fixed top-[62%] left-[4%] w-8 h-8 text-[#5BD4A3]/70 pointer-events-none select-none z-10">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 2l15 10.5-6.5 2.5 4.5 4.5-2.5 2.5-4.5-4.5-6 6z" />
        </svg>
      </div>

      {/* ── ABSOLUTE LAYOUT: heading + scattered pills all in one tall container (Desktop only) ── */}
      <div className="hidden md:block relative z-20 w-full" style={{ height: "680px" }}>
        {/* FAQs sticker – floats near heading */}
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
            ANSWER BEFORE<br />WE STARTS
          </h2>
        </div>

        {/* ── Absolutely placed FAQ pills ── */}

        {/* Top-left: What can you design? */}
        <div className="absolute left-[3%] top-[5%] w-[260px] sm:w-[290px] mx-30">
          <FAQPill
            question="What can you design?"
            answer="I design websites, mobile apps, brand identities, and digital products — from wireframes to pixel-perfect Figma files."
            color="bg-[#FBDDE0]"
          />
        </div>

        {/* Top-right: Do you build in Framer? */}
        <div className="absolute right-[3%] top-[2%] w-[260px] sm:w-[290px] mx-30">
          <FAQPill
            question="Do you build in Framer?"
            answer="Yes! I build fully responsive, production-ready websites in Framer — no code required on your end."
            color="bg-[#D9F2C4]"
          />
        </div>

        {/* Middle-left: How fast can we start? */}
        <div className="absolute left-[2%] top-[48%] w-[240px] sm:w-[270px] mx-35 -mt-10">
          <FAQPill
            question="How fast can we start?"
            answer="Usually within 3–5 days of onboarding. I keep a limited client load to ensure dedicated focus for every project."
            color="bg-[#C4DCF5]"
          />
        </div>

        {/* Centered below heading: Do you only design visuals? */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[38%] w-[280px] sm:w-[320px] z-30 mt-20">
          <FAQPill
            question="Do you only design visuals?"
            answer="No — I also help with UX flows, content hierarchy, copy suggestions, design systems, and hand-off specs for developer integration."
            color="bg-[#D9F2C4]"
          />
        </div>

        {/* Middle-right: What do you need from me? */}
        <div className="absolute right-[2%] top-[50%] w-[240px] sm:w-[270px] mx-35 -mt-10">
          <FAQPill
            question="What do you need from me?"
            answer="A brief, your brand references, and access to any existing assets. I'll handle the rest and check in regularly."
            color="bg-[#FEFBCC]"
          />
        </div>
      </div>

      {/* ── STACKED LAYOUT: Mobile responsive view (Mobile only) ── */}
      <div className="block md:hidden relative z-20 w-full px-6 flex flex-col items-center select-none pb-12">
        {/* FAQs sticker */}
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

        {/* Heading */}
        <h2 className="text-zinc-950 font-bold text-[28px] sm:text-3xl tracking-tight uppercase leading-[1.1] text-center mb-8 w-full">
          ANSWER BEFORE<br />WE STARTS
        </h2>

        {/* Stacked FAQ Cards */}
        <div className="flex flex-col gap-4 w-full max-w-[480px]">
          <MobileFAQPill
            question="What can you design?"
            answer="I design websites, mobile apps, brand identities, and digital products — from wireframes to pixel-perfect Figma files."
            color="bg-[#FDDDE0]"
          />
          <MobileFAQPill
            question="Do you build in framer?"
            answer="Yes! I build fully responsive, production-ready websites in Framer — no code required on your end."
            color="bg-[#E5FF7F]"
          />
          <MobileFAQPill
            question="What do you need from me?"
            answer="A brief, your brand references, and access to any existing assets. I'll handle the rest and check in regularly."
            color="bg-[#FEFBCC]"
          />
          <MobileFAQPill
            question="How fast can we start?"
            answer="Usually within 3–5 days of onboarding. I keep a limited client load to ensure dedicated focus for every project."
            color="bg-[#C4DCF5]"
          />
          <MobileFAQPill
            question="Do you only design visuals?"
            answer="No — I also help with UX flows, content hierarchy, copy suggestions, design systems, and hand-off specs for developer integration."
            color="bg-[#C2F5D9]"
          />
        </div>
      </div>
    </section>
  );
}
