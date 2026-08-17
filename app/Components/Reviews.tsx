"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Reviews() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const handleReviewScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    // Account for padding and offsets by dividing by actual scroll width per card
    const cardWidth = container.scrollWidth / 3;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeReviewIndex && newIndex >= 0 && newIndex <= 2) {
      setActiveReviewIndex(newIndex);
    }
  };

  return (
    <div className="bg-transparent w-full">
      {/* REVIEWS SECTION (CLIENTS LIKED THE PIXELS) */}
      <section
        className="relative w-full pt-16 md:pt-24 pb-36 md:pb-60 flex flex-col justify-start bg-transparent overflow-hidden font-sans select-none"
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
        {/* Fixed background doodles — same positions, sticks with grid on scroll */}
        {/* Row 1 */}
        <div className="fixed top-[15%] right-[10%] w-24 h-24 text-rose-300/60 pointer-events-none select-none z-10">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M50,30 C35,10 10,25 10,50 C10,75 50,90 50,90 C50,90 90,75 90,50 C90,25 65,10 50,30 Z" />
          </svg>
        </div>
        <div className="fixed top-[20%] left-[10%] w-20 h-16 text-zinc-300/50 pointer-events-none select-none z-10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>
        {/* Row 2 */}
        <div className="fixed top-[45%] left-[8%] w-20 h-20 text-amber-300/60 pointer-events-none select-none z-10">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M50,10 L50,90 M10,50 L90,50 M22,22 L78,78 M22,78 L78,22" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>
        </div>
        <div className="fixed top-[50%] right-[12%] w-16 h-16 text-amber-300/50 pointer-events-none select-none z-10 animate-pulse">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M5.75 19.25l12.5-12.5" />
          </svg>
        </div>
        {/* Row 3 */}
        <div className="fixed top-[75%] right-[8%] w-28 h-28 text-blue-300/50 pointer-events-none select-none z-10">
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

        {/* ── HEADING CONTAINER ── */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 mb-16 select-none">
          {/* Reviews Sticker */}
          <div className="relative mb-6 transform rotate-[-8deg] bg-sky-100 border border-sky-200 shadow-md rounded-xl px-5 py-2 text-zinc-900 font-extrabold text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
            {/* Paperclip */}
            <div className="absolute -top-3.5 left-3 text-zinc-400">
              <svg className="w-4 h-6" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" />
              </svg>
            </div>
            {/* Blue dot */}
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-500 rounded-full border border-white" />
            {/* Camera icon */}
            <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span className="pl-1">Reviews</span>
          </div>

          <h2 className="text-zinc-950 font-medium text-4xl sm:text-5xl md:text-[52px] tracking-tight uppercase leading-[1.05] max-w-3xl text-center select-none">
            CLIENTS LIKED<br />THE PIXELS
          </h2>
        </div>

        {/* ── TESTIMONIAL CARDS (Desktop View: hidden on mobile) ── */}
        <div className="hidden md:block relative z-20 w-full max-w-6xl mx-auto px-6 select-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1 – Sarah M. */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col gap-4 transform rotate-[-5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
              {/* Pin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 pointer-events-none drop-shadow-md">
                <Image src="/pin.png" alt="Pin" width={24} height={24} className="object-contain" />
              </div>
              {/* Folded corner */}
              <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M0 56 L56 0 L56 56 Z" fill="#0f172a" />
                  <path d="M0 56 L56 56 L0 0 Z" fill="#fb923c" opacity="0.9" />
                </svg>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 flex-shrink-0 bg-zinc-100">
                  <Image src="/jennifer.png" alt="Sarah M." width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-900 leading-tight">Sarah M.</span>
                  <span className="text-xs text-zinc-400 font-medium">Founder</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-xl font-regular text-zinc-950 leading-snug tracking-tight">
                &ldquo;The website finally feels like our brand.&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 text-blue-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-500">Fitas</span>
              </div>

              {/* Detail text */}
              <p className="text-xs text-zinc-400 leading-relaxed">
                She turned our idea into a polished website that felt premium, and easy to understand.
              </p>
            </div>

            {/* Card 2 – Daniel R. (shifted down) */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col gap-4 transform rotate-[5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 md:mt-16">
              {/* Pin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 pointer-events-none drop-shadow-md">
                <Image src="/pin.png" alt="Pin" width={24} height={24} className="object-contain" />
              </div>
              {/* Folded corner */}
              <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M0 56 L56 0 L56 56 Z" fill="#0f172a" />
                  <path d="M0 56 L56 56 L0 0 Z" fill="#fb923c" opacity="0.9" />
                </svg>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 flex-shrink-0 bg-zinc-100">
                  <Image src="/dewey.png" alt="Daniel R." width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-900 leading-tight">Daniel R.</span>
                  <span className="text-xs text-zinc-400 font-medium">Product Lead</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-xl font-regular text-zinc-950 leading-snug tracking-tight">
                &ldquo;The flow became much easier to use.&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-500">Bond</span>
              </div>

              {/* Detail text */}
              <p className="text-xs text-zinc-400 leading-relaxed">
                She cleaned up the user journey, and made the product feel more focused and professional.
              </p>
            </div>

            {/* Card 3 – Ayesha K. */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col gap-4 transform rotate-[-5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300">
              {/* Pin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 pointer-events-none drop-shadow-md">
                <Image src="/pin.png" alt="Pin" width={24} height={24} className="object-contain" />
              </div>
              {/* Folded corner */}
              <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M0 56 L56 0 L56 56 Z" fill="#0f172a" />
                  <path d="M0 56 L56 56 L0 0 Z" fill="#fb923c" opacity="0.9" />
                </svg>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 flex-shrink-0 bg-zinc-100">
                  <Image src="/ankita.png" alt="Ayesha K." width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-900 leading-tight">Ayesha K.</span>
                  <span className="text-xs text-zinc-400 font-medium">Creative Director</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-xl font-regular text-zinc-950 leading-snug tracking-tight">
                &ldquo;Sharp design without overcomplicating it.&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-500">Arsha.</span>
              </div>

              {/* Detail text */}
              <p className="text-xs text-zinc-400 leading-relaxed">
                The final design looked modern, but still felt practical. Everything was ready to hand off.
              </p>
            </div>
          </div>
        </div>

        {/* ── TESTIMONIAL CARDS CAROUSEL (Mobile View: block md:hidden) ── */}
        <div className="block md:hidden relative z-20 w-full select-none">
          <div
            id="mobile-reviews-carousel"
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory px-8 pb-6"
            onScroll={handleReviewScroll}
          >
            {/* Card 1 – Sarah M. */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col gap-4 snap-center w-[calc(100vw-64px)] flex-shrink-0">
              {/* Pin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 pointer-events-none drop-shadow-md">
                <Image src="/pin.png" alt="Pin" width={24} height={24} className="object-contain" />
              </div>
              {/* Folded corner */}
              <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M0 56 L56 0 L56 56 Z" fill="#0f172a" />
                  <path d="M0 56 L56 56 L0 0 Z" fill="#fb923c" opacity="0.9" />
                </svg>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 flex-shrink-0 bg-zinc-100">
                  <Image src="/jennifer.png" alt="Sarah M." width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-900 leading-tight">Sarah M.</span>
                  <span className="text-xs text-zinc-400 font-medium">Founder</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-lg font-regular text-zinc-950 leading-snug tracking-tight">
                &ldquo;The website finally feels like our brand.&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 text-blue-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-500">Fitas</span>
              </div>

              {/* Detail text */}
              <p className="text-xs text-zinc-400 leading-relaxed">
                She turned our idea into a polished website that felt premium, and easy to understand.
              </p>
            </div>

            {/* Card 2 – Daniel R. */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col gap-4 snap-center w-[calc(100vw-64px)] flex-shrink-0">
              {/* Pin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 pointer-events-none drop-shadow-md">
                <Image src="/pin.png" alt="Pin" width={24} height={24} className="object-contain" />
              </div>
              {/* Folded corner */}
              <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M0 56 L56 0 L56 56 Z" fill="#0f172a" />
                  <path d="M0 56 L56 56 L0 0 Z" fill="#fb923c" opacity="0.9" />
                </svg>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 flex-shrink-0 bg-zinc-100">
                  <Image src="/dewey.png" alt="Daniel R." width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-900 leading-tight">Daniel R.</span>
                  <span className="text-xs text-zinc-400 font-medium">Product Lead</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-lg font-regular text-zinc-950 leading-snug tracking-tight">
                &ldquo;The flow became much easier to use.&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-500">Bond</span>
              </div>

              {/* Detail text */}
              <p className="text-xs text-zinc-400 leading-relaxed">
                She cleaned up the user journey, and made the product feel more focused and professional.
              </p>
            </div>

            {/* Card 3 – Ayesha K. */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col gap-4 snap-center w-[calc(100vw-64px)] flex-shrink-0">
              {/* Pin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 pointer-events-none drop-shadow-md">
                <Image src="/pin.png" alt="Pin" width={24} height={24} className="object-contain" />
              </div>
              {/* Folded corner */}
              <div className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none">
                <svg viewBox="0 0 56 56" fill="none">
                  <path d="M0 56 L56 0 L56 56 Z" fill="#0f172a" />
                  <path d="M0 56 L56 56 L0 0 Z" fill="#fb923c" opacity="0.9" />
                </svg>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 flex-shrink-0 bg-zinc-100">
                  <Image src="/ankita.png" alt="Ayesha K." width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-900 leading-tight">Ayesha K.</span>
                  <span className="text-xs text-zinc-400 font-medium">Creative Director</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-lg font-regular text-zinc-950 leading-snug tracking-tight">
                &ldquo;Sharp design without overcomplicating it.&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-zinc-500">Arsha.</span>
              </div>

              {/* Detail text */}
              <p className="text-xs text-zinc-400 leading-relaxed">
                The final design looked modern, but still felt practical. Everything was ready to hand off.
              </p>
            </div>
          </div>

          {/* Progressive dots */}
          <div className="flex justify-center items-center gap-2 mt-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  const container = document.getElementById("mobile-reviews-carousel");
                  if (container) {
                    const cardWidth = container.scrollWidth / 3;
                    container.scrollTo({
                      left: idx * cardWidth,
                      behavior: "smooth",
                    });
                  }
                  setActiveReviewIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeReviewIndex === idx ? "w-6 bg-zinc-950" : "w-2 bg-zinc-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
