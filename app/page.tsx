"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "./data/projects";
import EyeFollower from "./Components/EyeFollower";
import Footer from "./Components/footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [openServices, setOpenServices] = useState<Record<number, boolean>>({});

  const toggleService = (idx: number) => {
    setOpenServices(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

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

  const dropupProjects = PROJECTS_DATA.slice(0, 3);
  const storyboardProjects = [
    {
      title: "WaxyWeb",
      category: "Branding & Website",
      platform: "Figma",
      year: "2026",
      image: "/E-Commerce.png",
      clipColor: "text-blue-500",
      rotation: "rotate-[-3deg] hover:rotate-[0deg]",
      link: "/Projects/waxyweb"
    },
    {
      title: "Krem",
      category: "Website Design",
      platform: "Figma",
      year: "2026",
      image: "/project/Bloom.svg",
      clipColor: "text-rose-500",
      rotation: "rotate-[2.5deg] hover:rotate-[0deg]",
      link: "/Projects/krem"
    },
    {
      title: "Sunoma",
      category: "Branding",
      platform: "Figma",
      year: "2026",
      image: "/project/Bunt.svg",
      clipColor: "text-amber-500",
      rotation: "rotate-[-1.5deg] hover:rotate-[0deg]",
      link: "/Projects/sunoma"
    },
    {
      title: "Wild Pup",
      category: "Branding & Website",
      platform: "Framer",
      year: "2026",
      image: "/project/Kitchun.svg",
      clipColor: "text-green-500",
      rotation: "rotate-[3deg] hover:rotate-[0deg]",
      link: "/Projects/wild-pup"
    },
    {
      title: "Miro",
      category: "Brand Identity",
      platform: "Photoshop",
      year: "2026",
      image: "/project/Aerolume.svg",
      clipColor: "text-purple-500",
      rotation: "rotate-[-2.5deg] hover:rotate-[0deg]",
      link: "/Projects/miro"
    }
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-zinc-950 font-sans scroll-smooth">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100vh] md:min-h-screen w-full flex flex-col justify-between overflow-hidden z-10 pt-24 pb-20 md:pt-0 md:pb-0">
        {/* 1. Background Image (Green hills and sky) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Green hills and sky"
            fill
            priority
            className="object-cover object-center select-none"
          />
          {/* Soft atmospheric overlay for high text contrast */}
          <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
        </div>

        {/* Mobile-Only Interactive Doodles */}
        {/* Top-Right Sparkle */}
        <div className="absolute top-[18%] right-[10%] w-9 h-9 text-[#bef264]/70 pointer-events-none select-none block md:hidden z-20 animate-pulse">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M5.75 19.25l12.5-12.5" />
          </svg>
        </div>

        {/* Top-Left Ribbon Wavy Scribble */}
        <div className="absolute top-[22%] left-[8%] w-18 h-7 text-rose-400/60 pointer-events-none select-none block md:hidden z-20">
          <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
            <path d="M5,10 Q15,5 25,12 T45,8 T65,13 T85,7" />
          </svg>
        </div>

        {/* Center-Left Loop */}
        <div className="absolute bottom-[35%] left-[8%] w-10 h-10 text-sky-400/70 pointer-events-none select-none block md:hidden z-20">
          <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M10,25 Q20,10 30,15 T35,30 T20,35 Z" />
          </svg>
        </div>

        {/* 3. Headline & Stickers Section */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center max-w-6xl mx-auto px-6 py-6 md:py-12 select-none">
          <div className="relative py-6 md:py-12 max-w-full">
            {/* Main Typography Heading */}
            <h1 className="text-5xl sm:text-7xl md:text-[84px] font-bold tracking-tight text-white leading-[0.9] max-w-5xl">
              DESIGN THAT<br />
              MAKES PEOPLE<br />
              LOOK TWICE
            </h1>

            {/* Pinned Start a Project Button in Hero Section */}
            <div className="relative mt-8 md:mt-12 inline-block transform rotate-3 hover:scale-105 transition-transform duration-200 pointer-events-auto">
              {/* Red Pushpin */}
              <div className="absolute -top-6 left-[46%] -translate-x-1/2 w-8 h-8 z-10 flex items-center justify-center drop-shadow-md">
                <Image 
                  src="/pin.png" 
                  alt="Pin" 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
              </div>
              
              <Link href="/ContactUs">
                <button className="bg-white border border-zinc-200/80 rounded-xl px-7 py-3 shadow-md hover:shadow-lg text-zinc-900 font-extrabold text-sm tracking-wide select-none cursor-pointer">
                  Start a project
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Bottom Elements (Left Text and Right Case Study Card) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between px-6 pb-4 md:pb-10 select-none gap-4 md:gap-8">
          
          {/* Left: Tagline */}
          <div className="hidden md:flex flex-1 max-w-[300px] sm:max-w-[340px] items-center justify-center text-center md:text-left md:items-start gap-2 text-white leading-relaxed mb-0">
            <span className="text-white text-base md:text-lg font-bold">—</span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-[22px] font-medium text-white leading-snug">Not just visuals. I make digital things look alive</span>
            </div>
          </div>

          {/* Right: Stacked case study card layout with dropup fanning animation */}
          <div className="flex justify-center md:justify-end relative w-full max-w-[270px] sm:max-w-[280px] h-20 sm:h-24 z-40 mb-0">
            <div 
              className="relative group w-full h-full cursor-pointer select-none"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Card 3: Aerolume (Back Layer) */}
              <Link 
                href="/Projects/aerolume"
                className={`absolute inset-x-0 bottom-0 h-20 sm:h-24 rounded-2xl p-3 shadow-xl transition-all duration-500 ease-out flex items-center justify-between gap-3 group/card ${
                  isOpen 
                    ? "z-30 translate-y-[-170px] sm:translate-y-[-208px] scale-100 bg-white/15 backdrop-blur-md border border-white/20 opacity-100 pointer-events-auto" 
                    : "z-10 translate-y-4 scale-90 bg-white/5 border border-white/5 opacity-40 pointer-events-none"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`flex flex-col justify-between h-full py-0.5 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono font-bold tracking-wider text-white/50 uppercase">Shopify Store</span>
                    <span className="text-xs font-bold text-white mt-0.5 tracking-wide">Aerolume</span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-white/70 group-hover/card:text-white mt-1">
                    View Project ↗
                  </span>
                </div>
                
                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-white/20 bg-zinc-900 flex-shrink-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                  <Image 
                    src="/project/Aerolume.svg" 
                    alt="Aerolume" 
                    fill 
                    className="object-cover scale-105" 
                  />
                </div>
              </Link>

              {/* Card 2: Adorna Casa (Middle Layer) */}
              <Link 
                href="/Projects/adorna-casa"
                className={`absolute inset-x-0 bottom-0 h-20 sm:h-24 rounded-2xl p-3 shadow-xl transition-all duration-500 ease-out flex items-center justify-between gap-3 group/card ${
                  isOpen 
                    ? "z-30 translate-y-[-85px] sm:translate-y-[-104px] scale-100 bg-white/15 backdrop-blur-md border border-white/20 opacity-100 pointer-events-auto" 
                    : "z-20 translate-y-2 scale-95 bg-white/10 border border-white/10 opacity-70 pointer-events-none"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`flex flex-col justify-between h-full py-0.5 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono font-bold tracking-wider text-white/50 uppercase">Shopify Store</span>
                    <span className="text-xs font-bold text-white mt-0.5 tracking-wide">Adorna Casa</span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-white/70 group-hover/card:text-white mt-1">
                    View Project ↗
                  </span>
                </div>
                
                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-white/20 bg-zinc-900 flex-shrink-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                  <Image 
                    src="/project/Adorna_casa.svg" 
                    alt="Adorna Casa" 
                    fill 
                    className="object-cover scale-105" 
                  />
                </div>
              </Link>

              {/* Card 1: AMA Legal Solutions (Front Layer, Always Visible) */}
              <Link 
                href="/Projects/ama"
                className={`absolute inset-x-0 bottom-0 h-20 sm:h-24 rounded-2xl p-3 shadow-xl transition-all duration-500 ease-out flex items-center justify-between gap-3 group/card z-40 bg-white/15 backdrop-blur-md border border-white/20 ${
                  isOpen ? "-translate-y-1 hover:bg-white/20" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col justify-between h-full py-0.5">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono font-bold tracking-wider text-white/50 uppercase">Custom Code</span>
                    <span className="text-xs font-bold text-white mt-0.5 tracking-wide">AMA Legal Solutions</span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-white/70 group-hover/card:text-white mt-1">
                    View Project ↗
                  </span>
                </div>
                
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-white/20 bg-zinc-900 flex-shrink-0">
                  <Image 
                    src="/project/AMA.svg" 
                    alt="AMA Legal Solutions" 
                    fill 
                    className="object-cover scale-105" 
                  />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: STATS & STATEMENT */}
      <section className="relative min-h-screen w-full py-20 flex flex-col justify-between bg-[#FAF9F6] border-t border-[#0d2ed2] overflow-hidden font-sans select-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(24, 69, 247, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(24, 69, 247, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        backgroundAttachment: "fixed"
      }}>
        {/* Absolute Doodles & Graffiti */}
        
        {/* Top-Left: Eyes & Pink Circle */}
        

        <div 
          className="absolute top-[12%] left-[10%] w-8 h-8 rounded-full pointer-events-none select-none opacity-85" 
          style={{ 
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2.5px, #f43f5e 2.5px, #f43f5e 5px)" 
          }} 
        />

        {/* Top-Left Blue Scribble */}
        <div className="absolute top-[9%] left-[23%] w-24 h-6 text-blue-400/80 pointer-events-none select-none">
          <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5,10 Q15,5 25,12 T45,8 T65,13 T85,7" />
          </svg>
        </div>

        {/* Top-Right Blue Wavy Crowns */}
        <div className="absolute top-[8%] right-[6%] w-24 h-16 text-sky-400/70 pointer-events-none select-none">
          <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M10,20 C15,10 20,10 25,20 C30,10 35,10 40,20 C45,10 50,10 55,20" />
            <path d="M15,30 C20,20 25,20 30,30 C35,20 40,20 45,30 C50,20 55,20 60,30" />
          </svg>
        </div>

        {/* Middle-Left Cloud */}
        <div className="absolute top-[28%] left-[16%] w-10 h-8 text-zinc-600/60 pointer-events-none select-none">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>

        {/* Left Green Double crescent Doodle */}
        <div className="absolute top-[34%] left-[6%] w-36 h-36 text-lime-400/80 pointer-events-none select-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20,50 Q35,25 60,30 Q85,35 70,60 Q55,85 30,70 Z" strokeLinecap="round" />
            <path d="M35,60 Q45,35 70,40 Q90,45 80,65 Q70,85 45,75 Z" strokeLinecap="round" />
          </svg>
        </div>

        

        {/* Middle-Right Pen Nib */}
        <div className="absolute top-[18%] right-[18%] w-8 h-8 text-zinc-800/70 pointer-events-none select-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L4 10v4l4 4h8l4-4v-4L12 2z" />
            <path d="M12 2v10" />
            <circle cx="12" cy="14" r="1.2" fill="currentColor" />
          </svg>
        </div>

        {/* NEW DOODLE 1: Rotating Blue Flower/Star (Top Left) */}
        <div className="absolute top-[13%] left-[4%] w-8 h-8 text-sky-400 pointer-events-none select-none z-10 opacity-75">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 5" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* NEW DOODLE 2: Pink Hand-drawn Heart (Top Right) */}
        <div className="absolute top-[11%] right-[15%] w-7 h-7 text-pink-400 pointer-events-none select-none z-10 opacity-80">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* NEW DOODLE 3: Yellow Zigzag Ribbon (Middle Left) */}
        <div className="absolute top-[28%] left-[2%] w-16 h-6 text-amber-300 pointer-events-none select-none z-10 opacity-75">
          <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5,15 L20,5 L35,15 L50,5 L65,15 L80,5 L95,15" />
          </svg>
        </div>

        {/* NEW DOODLE 4: Purple Lightning Bolt (Middle Right) */}
        <div className="absolute top-[29%] right-[3%] w-6 h-8 text-purple-400 pointer-events-none select-none z-10 opacity-75">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>

        {/* NEW DOODLE 5: Orange Crown Outline (Above Heading Center) */}
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-10 h-8 text-orange-400 pointer-events-none select-none z-10 opacity-80">
          <svg viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5,25 L10,5 L20,15 L30,5 L40,15 L45,25 Z" />
          </svg>
        </div>

        
        {/* Light Bulb & Cursor Sticker (Relocated to Hero Top-Right, Mobile Only) */}
        <div className="absolute top-[34%] right-[4%] flex items-center gap-2 pointer-events-none select-none rotate-[-6deg] block md:hidden z-10">
          {/* Bulb Icon */}
          <div className="w-8 h-8 bg-orange-100 border border-orange-200 rounded-lg flex items-center justify-center shadow-sm text-orange-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1c-.37.26-.59.69-.59 1.15V16h-4.52v-1.75c0-.46-.22-.89-.59-1.15C7.79 12.18 7 10.66 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.66-.79 3.18-2.15 4.1z" />
            </svg>
          </div>
          {/* Cursor SVG */}
          <div className="w-5 h-5 text-purple-600 fill-purple-600 transform -rotate-12">
            <svg viewBox="0 0 24 24">
              <path d="M4.5 2l15 10.5-6.5 2.5 4.5 4.5-2.5 2.5-4.5-4.5-6 6z" />
            </svg>
          </div>
        </div>

        {/* Yellow scribble lines (Relocated to Hero Left, Mobile Only) */}
        <div className="absolute top-[26%] left-[2%] w-16 h-6 text-amber-300 pointer-events-none select-none opacity-80 block md:hidden z-10">
          <svg viewBox="0 0 80 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5,10 C15,12 25,8 35,12 C45,10 55,14 65,10" />
          </svg>
        </div>

        {/* Yellow scribble lines (Relocated to Hero Right, Mobile Only) */}
        <div className="absolute top-[38%] right-[12%] w-24 h-6 text-amber-300 pointer-events-none select-none opacity-80 block md:hidden z-10">
          <svg viewBox="0 0 80 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5,10 C15,12 25,8 35,12 C45,10 55,14 65,10" />
          </svg>
        </div>

        {/* ── STATEMENT CONTAINER ── */}
        <div className="relative z-20 flex-grow flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-6 pt-16 pb-12 select-none">
          
          {/* About Sticker (Pinned with clip) */}
          <div className="relative mb-6 transform -rotate-12 bg-sky-50 border border-sky-100 shadow-sm rounded-xl px-5 py-1.5 text-sky-600 font-extrabold text-sm flex items-center gap-1.5 hover:scale-105 transition-transform duration-200 select-none">
            {/* Paperclip representation */}
            <div className="absolute -top-3.5 left-3 text-zinc-400">
              <svg className="w-4 h-6" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" />
              </svg>
            </div>
            <span className="pl-2">About</span>
          </div>

          <h2 className="text-zinc-950 font-medium text-4xl sm:text-5xl md:text-[52px] tracking-tight uppercase leading-[1.05] max-w-3xl text-center select-none">
            WE MAKE DESIGNS<br />PEOPLE REMEMBER
          </h2>

          <p className="text-zinc-800 text-base sm:text-xl md:text-[22px] font-medium leading-relaxed max-w-2xl text-center mt-6 select-none">
            We design clean websites, apps, and brand systems<br />
            that help ideas look sharper, feel trusted<br />
            <span className="font-bold text-zinc-900">— and work with purpose.</span>
          </p>

        </div>

        {/* ── STATS CARDS ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto pb-10 md:pb-28 select-none">
          <div 
            id="mobile-stats-carousel"
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 overflow-x-auto sm:overflow-x-visible scrollbar-none snap-x snap-mandatory sm:snap-none"
            onScroll={(e) => {
              const container = e.currentTarget;
              const scrollLeft = container.scrollLeft;
              // Divide scrollLeft by width of one card (including gap/margins) to get active index
              const cardWidth = container.scrollWidth / 4;
              const newIndex = Math.round(scrollLeft / cardWidth);
              if (newIndex !== activeStatIndex && newIndex >= 0 && newIndex <= 3) {
                setActiveStatIndex(newIndex);
              }
            }}
          >
            {/* Card 1: 8+ Years */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-48 transform -rotate-2 hover:scale-[1.02] hover:-rotate-1 transition-all duration-300 snap-center min-w-[calc(100vw-48px)] sm:min-w-0">
              {/* Pushpin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 select-none pointer-events-none drop-shadow-md">
                <Image 
                  src="/pin.png" 
                  alt="Pin" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              
              {/* Folder Flap */}
              <svg className="absolute top-0 right-0 w-9 h-9 pointer-events-none" viewBox="0 0 40 40" fill="none">
                <path d="M0 0 H40 V40 Z" fill="#0f172a" />
                <path d="M0 0 L40 40 H0 Z" fill="#bef264" />
              </svg>

              <div className="mt-2 flex flex-col">
                <span className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-none">8+</span>
                <span className="text-sm font-bold text-zinc-800 mt-2 select-none">Years of Experience</span>
              </div>
              <p className="text-xs font-medium text-zinc-500 leading-relaxed mt-2 select-none">
                Designing websites, apps, and digital products with a clear focus on usability.
              </p>
            </div>

            {/* Card 2: 40+ Projects */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-48 transform -rotate-1 hover:scale-[1.02] hover:rotate-0 transition-all duration-300 snap-center min-w-[calc(100vw-48px)] sm:min-w-0">
              {/* Pushpin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 select-none pointer-events-none drop-shadow-md">
                <Image 
                  src="/pin.png" 
                  alt="Pin" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              
              {/* Folder Flap */}
              <svg className="absolute top-0 right-0 w-9 h-9 pointer-events-none" viewBox="0 0 40 40" fill="none">
                <path d="M0 0 H40 V40 Z" fill="#0f172a" />
                <path d="M0 0 L40 40 H0 Z" fill="#bef264" />
              </svg>

              <div className="mt-2 flex flex-col">
                <span className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-none">40+</span>
                <span className="text-sm font-bold text-zinc-800 mt-2 select-none">Projects Designed</span>
              </div>
              <p className="text-xs font-medium text-zinc-500 leading-relaxed mt-2 select-none">
                From landing pages to complete Framer websites, responsive and robust.
              </p>
            </div>

            {/* Card 3: 12+ Industries */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-48 transform rotate-1 hover:scale-[1.02] hover:rotate-0 transition-all duration-300 snap-center min-w-[calc(100vw-48px)] sm:min-w-0">
              {/* Pushpin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 select-none pointer-events-none drop-shadow-md">
                <Image 
                  src="/pin.png" 
                  alt="Pin" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              
              {/* Folder Flap */}
              <svg className="absolute top-0 right-0 w-9 h-9 pointer-events-none" viewBox="0 0 40 40" fill="none">
                <path d="M0 0 H40 V40 Z" fill="#0f172a" />
                <path d="M0 0 L40 40 H0 Z" fill="#bef264" />
              </svg>

              <div className="mt-2 flex flex-col">
                <span className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-none">12+</span>
                <span className="text-sm font-bold text-zinc-800 mt-2 select-none">Industries explored</span>
              </div>
              <p className="text-xs font-medium text-zinc-500 leading-relaxed mt-2 select-none">
                Worked across SaaS, fintech, AI, agencies, finance, and service businesses.
              </p>
            </div>

            {/* Card 4: 100% Framer */}
            <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-48 transform rotate-2 hover:scale-[1.02] hover:rotate-1 transition-all duration-300 snap-center min-w-[calc(100vw-48px)] sm:min-w-0">
              {/* Pushpin */}
              <div className="absolute top-2 left-2 w-6 h-6 z-10 select-none pointer-events-none drop-shadow-md">
                <Image 
                  src="/pin.png" 
                  alt="Pin" 
                  width={24} 
                  height={24} 
                  className="object-contain"
                />
              </div>
              
              {/* Folder Flap */}
              <svg className="absolute top-0 right-0 w-9 h-9 pointer-events-none" viewBox="0 0 40 40" fill="none">
                <path d="M0 0 H40 V40 Z" fill="#0f172a" />
                <path d="M0 0 L40 40 H0 Z" fill="#bef264" />
              </svg>

              <div className="mt-2 flex flex-col">
                <span className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-none">100%</span>
                <span className="text-sm font-bold text-zinc-800 mt-2 select-none">Framer Native</span>
              </div>
              <p className="text-xs font-medium text-zinc-500 leading-relaxed mt-2 select-none">
                Responsive Framer websites designed, built, and published with perfection.
              </p>
            </div>
          </div>

          {/* Progress dots below stats cards - visible on mobile only */}
          <div className="flex sm:hidden justify-center items-center gap-2 mt-6">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                onClick={() => {
                  const container = document.getElementById("mobile-stats-carousel");
                  if (container) {
                    const cardWidth = container.scrollWidth / 4;
                    container.scrollTo({
                      left: idx * cardWidth,
                      behavior: "smooth"
                    });
                  }
                  setActiveStatIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStatIndex === idx ? "w-6 bg-[#0d2ed2]" : "w-2 bg-zinc-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </section>

      {/* SECTION 3: PROJECTS THAT TELL STORIES */}
      <section className="relative min-h-screen w-full py-12 md:py-24 flex flex-col justify-center overflow-hidden z-10">
        {/* Background Image (Same as Hero section) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Green hills and sky background"
            fill
            priority
            className="object-cover object-center select-none"
          />
          {/* Soft atmospheric overlay for text legibility */}
          <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
        </div>

        {/* ── STATEMENT/TITLE CONTAINER ── */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 mb-16 select-none">
          {/* Projects Sticker (Pinned with clip) */}
          <div className="relative mb-6 transform -rotate-12 bg-sky-50 border border-sky-100 shadow-md rounded-xl px-5 py-1.5 text-sky-600 font-extrabold text-sm flex items-center gap-1.5 hover:scale-105 transition-transform duration-200">
            {/* Paperclip */}
            <div className="absolute -top-3.5 left-3 text-zinc-400">
              <svg className="w-4 h-6" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" />
              </svg>
            </div>
            <span className="pl-2">Projects</span>
          </div>

          <h2 className="text-white font-extrabold text-4xl sm:text-5xl md:text-[52px] tracking-tight uppercase leading-[1.05] max-w-3xl text-center select-none drop-shadow-md">
            PROJECTS THAT<br />TELL STORIES
          </h2>
        </div>

        {/* ── PROJECTS GRID & FLEX ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col gap-10 select-none pb-12">
          
          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {storyboardProjects.slice(0, 3).map((project) => (
              <Link 
                href={project.link}
                key={project.title}
                className="w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`relative bg-white border border-zinc-200/80 rounded-2xl p-3.5 shadow-xl transition-all duration-300 ${project.rotation} w-full flex flex-col justify-between select-none`}>
                  
                  {/* Paperclip */}
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 z-30 drop-shadow-md ${project.clipColor}`}>
                    <svg className="w-5 h-8 transform -rotate-12" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* macOS traffic light buttons */}
                  <div className="flex gap-1.5 mb-2.5 px-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C5C]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFCC00]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#32CD32]" />
                  </div>

                  {/* Image Preview Container */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-150 bg-zinc-900 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover scale-105"
                    />
                  </div>

                  {/* Bottom Text bar */}
                  <div className="flex items-center justify-between pt-3 px-1">
                    <span className="text-sm font-extrabold text-zinc-950 uppercase tracking-wide">
                      {project.title}
                    </span>
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.platform}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* Row 2: 2 Cards (Centered) */}
          <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
            {storyboardProjects.slice(3, 5).map((project) => (
              <Link 
                href={project.link}
                key={project.title}
                className="w-full md:w-[31.5%]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`relative bg-white border border-zinc-200/80 rounded-2xl p-3.5 shadow-xl transition-all duration-300 ${project.rotation} w-full flex flex-col justify-between select-none`}>
                  
                  {/* Paperclip */}
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 z-30 drop-shadow-md ${project.clipColor}`}>
                    <svg className="w-5 h-8 transform -rotate-12" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* macOS traffic light buttons */}
                  <div className="flex gap-1.5 mb-2.5 px-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C5C]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFCC00]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#32CD32]" />
                  </div>

                  {/* Image Preview Container */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-150 bg-zinc-900 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover scale-105"
                    />
                  </div>

                  {/* Bottom Text bar */}
                  <div className="flex items-center justify-between pt-3 px-1">
                    <span className="text-sm font-extrabold text-zinc-950 uppercase tracking-wide">
                      {project.title}
                    </span>
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.platform}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: SERVICES (WHERE I CAN HELP YOU) */}
      <section className="relative md:min-h-screen w-full py-12 md:py-24 flex flex-col justify-center bg-[#FAF9F6] border-t border-[#0d2ed2] overflow-hidden font-sans select-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(24, 69, 247, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(24, 69, 247, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        backgroundAttachment: "fixed",
        clipPath: "inset(0)"
      }}>
        {/* Fixed background doodles (Stick with grid while scrolling) */}
        {/* Row 1 Doodles */}
        <div className="fixed top-[15%] right-[10%] w-24 h-24 text-rose-300/60 pointer-events-none select-none z-10">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M50,30 C35,10 10,25 10,50 C10,75 50,90 50,90 C50,90 90,75 90,50 C90,25 65,10 50,30 Z" />
          </svg>
        </div>

        <div className="fixed top-[20%] left-[10%] w-20 h-16 text-zinc-300/50 pointer-events-none select-none z-10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>

        {/* Row 2 Doodles */}
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

        {/* Row 3 Doodles */}
        <div className="fixed top-[75%] right-[8%] w-28 h-28 text-blue-300/50 pointer-events-none select-none z-10">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M20,50 Q35,25 60,30 Q85,35 70,60 Q55,85 30,70 Z" />
            <path d="M35,60 Q45,35 70,40 Q90,45 80,65 Q70,85 45,75 Z" />
          </svg>
        </div>

        <div className="fixed top-[80%] left-[8%] w-24 h-12 text-blue-300/50 pointer-events-none select-none z-10">
          <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,30 Q25,10 40,30 T70,30 T100,30" />
            <path d="M15,35 Q30,15 45,35 T75,35 T105,35" />
          </svg>
        </div>

        {/* Hand-Drawn Arrow pointing to first card */}
        <div className="absolute top-[280px] left-[15%] md:left-[22%] w-16 h-16 text-rose-500/80 pointer-events-none select-none z-20 hidden md:block">
          <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,10 Q25,12 35,30" />
            <path d="M28,28 L35,30 L37,23" />
          </svg>
        </div>

        {/* Floating cloud near Brand Identity card */}
        <div className="absolute top-[560px] left-[4%] w-12 h-10 text-zinc-400/60 pointer-events-none select-none z-20">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        </div>

        {/* Sparkle/Star near Framer Builds card */}
        <div className="absolute bottom-[240px] right-[4%] w-8 h-8 text-[#5BD4A3]/75 pointer-events-none select-none z-20 animate-pulse">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M5.75 19.25l12.5-12.5" />
          </svg>
        </div>

        {/* ── STATEMENT/TITLE CONTAINER ── */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 mb-16 select-none">
          
          

          {/* Services Sticker (Pinned with clip) */}
          <div className="relative mb-6 transform -rotate-12 bg-[#e0f2fe] border border-sky-200 shadow-md rounded-xl px-5 py-2 text-zinc-900 font-extrabold text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
            {/* Paperclip */}
            <div className="absolute -top-3.5 left-3 text-zinc-400">
              <svg className="w-4 h-6 transform -rotate-12" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" strokeLinecap="round" strokeLinejoin="round" />
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
            <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
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
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    <path d="M13 13l6 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dropdown Content */}
            <div className={`grid transition-all duration-300 ease-in-out w-full ${openServices[1] ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"}`}>
              <div className="overflow-hidden flex flex-col gap-2">
                <span className="text-zinc-500 font-semibold text-sm">
                  Expert Design Partners (and good listeners)
                </span>
                <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                  We translate complex ideas into intuitive, beautiful, and conversion-focused digital interfaces. Aligned with your brand vision and powered by industry-leading UX best practices.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["User Research", "Wireframing & Prototyping", "Interface Design", "Design Systems", "Mobile & Web Apps"].map(tag => (
                    <span key={tag} className="text-[11px] font-bold text-[#4B7DBE] bg-white border border-[#D5E6FA] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile-Only CTA Link */}
                <div className="block md:hidden mt-4 pt-4 border-t border-[#D5E6FA]/40">
                  <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#4B7DBE] hover:underline">
                    View Service Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
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
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dropdown Content */}
            <div className={`grid transition-all duration-300 ease-in-out w-full ${openServices[2] ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"}`}>
              <div className="overflow-hidden flex flex-col gap-2">
                <span className="text-zinc-500 font-semibold text-sm">
                  What if Technology wasn&apos;t an obstacle?
                </span>
                <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                  Beautifully built, hyper-fast, and scalable websites designed to convert. We build lightweight Next.js websites, headless architectures, and custom web applications optimized for growth.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["React & Next.js", "Headless CMS", "Shopify E-Commerce", "API Integrations", "Speed Optimization"].map(tag => (
                    <span key={tag} className="text-[11px] font-bold text-[#BE7070] bg-white border border-[#F3DBDB] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile-Only CTA Link */}
                <div className="block md:hidden mt-4 pt-4 border-t border-[#F3DBDB]/40">
                  <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#BE7070] hover:underline">
                    View Service Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
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
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dropdown Content */}
            <div className={`grid transition-all duration-300 ease-in-out w-full ${openServices[3] ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"}`}>
              <div className="overflow-hidden flex flex-col gap-2">
                <span className="text-zinc-500 font-semibold text-sm">
                  High-Converting E-Commerce Stores
                </span>
                <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                  Building high-converting, custom Shopify & e-commerce stores designed for seamless user checkout and rapid sales scaling.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Liquid Dev", "Custom Themes", "App Integrations", "Headless Shopify", "Checkout Optimization"].map(tag => (
                    <span key={tag} className="text-[11px] font-bold text-[#3BA67D] bg-white border border-[#BCEFD5] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile-Only CTA Link */}
                <div className="block md:hidden mt-4 pt-4 border-t border-[#BCEFD5]/40">
                  <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#3BA67D] hover:underline">
                    View Service Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
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
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dropdown Content */}
            <div className={`grid transition-all duration-300 ease-in-out w-full ${openServices[4] ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"}`}>
              <div className="overflow-hidden flex flex-col gap-2">
                <span className="text-zinc-500 font-semibold text-sm">
                  Bring your users into focus.
                </span>
                <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                  Data-driven marketing managed with precision to deliver efficient growth and measurable returns. We help you target, acquire, and convert high-intent customers.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Google Ads", "Meta Ads (FB/IG)", "Search Engine Marketing", "CRO Strategy", "Attribution & Tracking"].map(tag => (
                    <span key={tag} className="text-[11px] font-bold text-[#B5A133] bg-white border border-[#F3EFA2] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile-Only CTA Link */}
                <div className="block md:hidden mt-4 pt-4 border-t border-[#F3EFA2]/40">
                  <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#B5A133] hover:underline">
                    View Service Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
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
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dropdown Content */}
            <div className={`grid transition-all duration-300 ease-in-out w-full ${openServices[5] ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100 md:mt-0"}`}>
              <div className="overflow-hidden flex flex-col gap-2">
                <span className="text-zinc-500 font-semibold text-sm">
                  Dominating organic search results
                </span>
                <p className="text-zinc-600 text-sm max-w-2xl mt-1">
                  Dominating organic search results with data-backed technical SEO, keyword strategy, and high-authority content execution.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Technical SEO", "Content Architecture", "Backlink Strategy", "Analytics & Reports", "Core Web Vitals"].map(tag => (
                    <span key={tag} className="text-[11px] font-bold text-[#7768CD] bg-white border border-[#DFDAFA] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Mobile-Only CTA Link */}
                <div className="block md:hidden mt-4 pt-4 border-t border-[#DFDAFA]/40">
                  <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#7768CD] hover:underline">
                    View Service Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>

    <div className="bg-[#FAF9F6] w-full">
      {/* SECTION 5: REVIEWS (CLIENTS LIKED THE PIXELS) */}
      <section className="relative md:min-h-screen w-full py-12 md:py-24 pt-12 md:pt-24 pb-12 flex flex-col justify-center bg-[#FAF9F6] overflow-hidden font-sans select-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(24, 69, 247, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(24, 69, 247, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        backgroundPosition: "0 -1px",
        backgroundAttachment: "fixed",
        clipPath: "inset(0)"
      }}>
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
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 text-blue-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
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
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
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
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" /></svg>
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
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 text-blue-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
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
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
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
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>

              {/* Logo */}
              <div className="flex items-center gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" /></svg>
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
                      behavior: "smooth"
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

      {/* SECTION 6: FAQ (ANSWER BEFORE WE STARTS) */}
      <section className="relative md:min-h-screen w-full py-12 md:py-24 pt-12 md:pt-12 pb-12 flex flex-col justify-center bg-[#FAF9F6] overflow-hidden font-sans select-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(24, 69, 247, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(24, 69, 247, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        backgroundPosition: "0 -1px",
        backgroundAttachment: "fixed",
        clipPath: "inset(0)"
      }}>
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
              <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
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
              <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
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
    </div>
      <EyeFollower />
      <Footer />
    </main>
  );
}

/* ── FAQ Pill: absolutely positioned, smooth CSS max-height animation, no layout shift ── */
function FAQPill({
  question,
  answer,
  color,
}: {
  question: string;
  answer: string;
  color: string;
}) {
  const [open, setOpen] = React.useState(false);
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
  const [open, setOpen] = React.useState(false);
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
