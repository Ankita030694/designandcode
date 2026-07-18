"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../Components/footer";


const MedalLensIcon = () => (
  <span className="relative inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mx-2 align-middle select-none">
    <svg className="w-full h-full drop-shadow-md" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="awardLensBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="50%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="awardMetalRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="30%" stopColor="#d4d4d8" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
        <radialGradient id="awardLensGlass" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#27272a" />
          <stop offset="70%" stopColor="#09090b" />
          <stop offset="100%" stopColor="#020202" />
        </radialGradient>
      </defs>
      {/* Outer rounded container */}
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#awardLensBg)" stroke="#09090b" strokeWidth="1.5" />
      <rect x="3" y="3" width="58" height="58" rx="15" stroke="#9ca3af" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      {/* Metal rim */}
      <circle cx="32" cy="32" r="18" fill="url(#awardMetalRing)" />
      {/* Lens glass */}
      <circle cx="32" cy="32" r="14" fill="url(#awardLensGlass)" stroke="#09090b" strokeWidth="1.5" />
      
      {/* Medal icon inside lens */}
      <circle cx="32" cy="28" r="4.5" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.95" fill="none" />
      <path d="M29.5 32l-1 5.5 3.5-2.5 3.5 2.5-1-5.5" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.95" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* Lens glint reflection */}
      <ellipse cx="27" cy="24" rx="2.5" ry="1.2" transform="rotate(-30 27 24)" fill="#ffffff" opacity="0.65" />
    </svg>
  </span>
);

export default function UiUxDesignService() {
  const [activeTab, setActiveTab] = useState("define");

  const dockItems = [
    {
      id: "define",
      label: "Define",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M9 15h6M9 11h6" />
        </svg>
      )
    },
    {
      id: "compose",
      label: "Compose",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )
    },
    {
      id: "design",
      label: "Design",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" />
          <path d="M12 6v3M12 15v3M6 12h3M15 12h3" />
        </svg>
      )
    },
    {
      id: "optimise",
      label: "Optimise",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
        </svg>
      )
    },
    {
      id: "scale",
      label: "Scale",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      )
    }
  ];

  return (
    <main className="relative flex flex-col flex-1 homepage-grid-bg overflow-hidden pt-20">
      {/* ── UI/UX Service Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-140px)] overflow-hidden">
        {/* Background glow effects */}
        <div className="hero-glow w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bottom-[-100px] right-[-100px] opacity-75" />
        <div className="hero-glow w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] top-[-100px] left-[-100px] opacity-35" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
          
          {/* Laurel Wreath Kicker */}
          <div className="flex items-center justify-center gap-3 mb-6 select-none">
            <img src="/left.svg" alt="" className="h-6 w-auto object-contain" />
            <span className="text-zinc-500 font-medium text-xs sm:text-sm tracking-wide uppercase">
              UI / UX Design
            </span>
            <img src="/right.svg" alt="" className="h-6 w-auto object-contain" />
          </div>

          {/* Heading Title */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-tight max-w-5xl mb-6">
            Award-Winning <MedalLensIcon /> Design Partners{" "}
            <span className="block mt-2">
              (Who Actually{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500">
                Listen)
                <img src="/Marker.svg" alt="" className="absolute left-0 right-0 -bottom-3.5 w-full h-auto select-none pointer-events-none" />
              </span>
              .
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 mt-2">
            A design team that lives and breathes your brand. Human creativity that stands out in a sea of AI-generated sameness.
          </p>

          {/* Action CTA Button */}
          <button className="flex items-center gap-2.5 bg-white border border-zinc-200 rounded-full px-6 py-3 text-sm font-medium text-zinc-800 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 select-none cursor-pointer">
            <svg className="w-4 h-4 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="8" cy="10" r="0.5" fill="currentColor" />
              <circle cx="12" cy="10" r="0.5" fill="currentColor" />
              <circle cx="16" cy="10" r="0.5" fill="currentColor" />
            </svg>
            <span>Let&apos;s Build Together</span>
          </button>
        </div>

        {/* Floating Capsule Toolbar / Dock */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-auto px-4 select-none ">
          <div className="flex items-center gap-1 bg-black backdrop-blur-md border border-zinc-700/60 rounded-full p-1.5 shadow-md shadow-black/60">
            {dockItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
