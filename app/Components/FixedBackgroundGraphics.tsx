"use client";

import React from "react";

export default function FixedBackgroundGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none -z-10 overflow-hidden" aria-hidden="true">
      {/* ── Fixed Checkbox Grid Background Pattern ── */}
      <div
        className="absolute inset-0 bg-[#FAF9F6]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(24, 69, 247, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(24, 69, 247, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "0 -1px",
          backgroundAttachment: "fixed",
        }}
      />

      {/* ── Fixed Background Doodles (Graffiti) ── */}

      {/* Top-Right: Rose loop / heart */}
      <div className="fixed top-[15%] right-[10%] w-24 h-24 text-rose-300/60 z-10">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M50,30 C35,10 10,25 10,50 C10,75 50,90 50,90 C50,90 90,75 90,50 C90,25 65,10 50,30 Z" />
        </svg>
      </div>

      {/* Top-Left: Cloud */}
      <div className="fixed top-[20%] left-[10%] w-20 h-16 text-zinc-300/50 z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      </div>

      {/* Mid-Left: Amber Asterisk / Star */}
      <div className="fixed top-[45%] left-[8%] w-20 h-20 text-amber-300/60 z-10">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M50,10 L50,90 M10,50 L90,50 M22,22 L78,78 M22,78 L78,22" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>

      {/* Mid-Right: Amber Pulsing Sparkle */}
      <div className="fixed top-[50%] right-[12%] w-16 h-16 text-amber-300/50 z-10 animate-pulse">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M5.75 19.25l12.5-12.5" />
        </svg>
      </div>

      {/* Bottom-Right: Blue Double Curve */}
      <div className="fixed top-[75%] right-[8%] w-28 h-28 text-blue-300/50 z-10">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M20,50 Q35,25 60,30 Q85,35 70,60 Q55,85 30,70 Z" />
          <path d="M35,60 Q45,35 70,40 Q90,45 80,65 Q70,85 45,75 Z" />
        </svg>
      </div>

      {/* Bottom-Left: Blue Triple Wave */}
      <div className="fixed top-[80%] left-[8%] w-24 h-12 text-blue-300/50 z-10">
        <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10,30 Q25,10 40,30 T70,30 T100,30" />
          <path d="M15,35 Q30,15 45,35 T75,35 T105,35" />
        </svg>
      </div>

      {/* Right Edge: Lightbulb Sketch */}
      <div className="fixed top-[30%] right-[5%] w-10 h-14 text-blue-400/60 z-10">
        <svg viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2C9 2 6 4.5 6 8c0 3 2 5 4 6.5v2.5h4V14.5c2-1.5 4-3.5 4-6.5 0-3.5-3-6-6-6z" />
          <line x1="9" y1="28" x2="15" y2="28" />
          <line x1="10" y1="31" x2="14" y2="31" />
        </svg>
      </div>

      {/* Left Edge: Mint Pointer Cursor */}
      <div className="fixed top-[62%] left-[4%] w-8 h-8 text-[#5BD4A3]/70 z-10">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 2l15 10.5-6.5 2.5 4.5 4.5-2.5 2.5-4.5-4.5-6 6z" />
        </svg>
      </div>

      {/* Top Left: Rotating Sky Star */}
      <div className="fixed top-[13%] left-[4%] w-8 h-8 text-sky-400/60 z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 5" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Top Right: Pink Hand-Drawn Heart */}
      <div className="fixed top-[11%] right-[15%] w-7 h-7 text-pink-400/60 z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Middle Left: Yellow Zigzag Ribbon */}
      <div className="fixed top-[28%] left-[2%] w-16 h-6 text-amber-300/60 z-10">
        <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M5,15 L20,5 L35,15 L50,5 L65,15 L80,5 L95,15" />
        </svg>
      </div>

      {/* Middle Right: Purple Lightning */}
      <div className="fixed top-[29%] right-[3%] w-6 h-8 text-purple-400/60 z-10">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>

      {/* Top Center: Orange Crown Outline */}
      <div className="fixed top-[6%] left-[48%] w-10 h-8 text-orange-400/60 z-10">
        <svg viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M5,25 L10,5 L20,15 L30,5 L40,15 L45,25 Z" />
        </svg>
      </div>
    </div>
  );
}
