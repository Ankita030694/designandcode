"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "./data/projects";
import EyeFollower from "./Components/EyeFollower";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
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
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden z-10">
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

        {/* 3. Headline & Stickers Section */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center max-w-6xl mx-auto px-6 py-12 select-none">
          <div className="relative py-12">
            
            {/* A. UI/UX Design Sticker (Top-Right of Headline) */}
            <div 
              className="absolute top-[-30px] right-[40px] sm:right-[120px] z-30 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-xl border border-zinc-200/50 rotate-[6deg] hover:scale-105 hover:rotate-[2deg] transition-all duration-300 cursor-pointer mt-15 -mx-50"
              style={{ transformOrigin: "center" }}
            >
              {/* Paperclip graphic */}
              <div className="absolute -top-3.5 left-4 pointer-events-none">
                <svg className="w-5 h-8 text-zinc-400 drop-shadow-md transform -rotate-12" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Icon circle */}
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white fill-white" viewBox="0 0 24 24">
                  <path d="M4 2l18 10-7 3 5 5-3 3-5-5-3 7L4 2z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 pr-1">UI/UX Design</span>
              {/* Folded corner peel effect */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-700 rounded-bl-sm shadow-xs" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
            </div>

            {/* B. Illustration Sticker (Center of Headline, overlapping) */}
            <div 
              className="absolute top-[85px] right-[30px] sm:right-[150px] z-40 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-xl border border-zinc-200/50 rotate-[-4deg] hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-pointer"
              style={{ transformOrigin: "center" }}
            >
              {/* Paperclip graphic */}
              <div className="absolute -top-3.5 left-4 pointer-events-none">
                <svg className="w-5 h-8 text-zinc-400 drop-shadow-md transform -rotate-12" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Icon circle */}
              <div className="w-5 h-5 rounded-full bg-fuchsia-500 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 pr-1">Illustration</span>
              {/* Folded corner peel effect */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-fuchsia-700 rounded-bl-sm shadow-xs" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
            </div>

            {/* C. 3D Design Sticker (Left side of Headline, overlapping) */}
            <div 
              className="absolute bottom-[80px] left-[10px] sm:left-[80px] z-30 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-xl border border-zinc-200/50 rotate-[-6deg] hover:scale-105 hover:rotate-[-2deg] transition-all duration-300 cursor-pointer"
              style={{ transformOrigin: "center" }}
            >
              {/* Paperclip graphic */}
              <div className="absolute -top-3.5 left-4 pointer-events-none">
                <svg className="w-5 h-8 text-zinc-400 drop-shadow-md transform -rotate-12" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Icon circle */}
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 pr-1">3D Design</span>
              {/* Folded corner peel effect */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-blue-700 rounded-bl-sm shadow-xs" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
            </div>

            {/* Main Typography Heading */}
            <h1 className="text-5xl sm:text-7xl md:text-[84px] font-bold tracking-tight text-white leading-[0.9] max-w-5xl">
              DESIGN THAT<br />
              MAKES PEOPLE<br />
              LOOK TWICE
            </h1>
          </div>
        </div>

        {/* 4. Bottom Elements (Left Text and Right Case Study Card) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-60 items-end px-6 pb-8 md:pb-12 select-none">
          
          {/* Left: Tagline */}
          <div className="md:col-span-3 flex items-start gap-3 text-white leading-relaxed mb-4 md:mb-10">
            <span className="text-white text-lg font-bold">—</span>
            <div className="flex flex-col">
              <span className="text-[25px] font-medium text-white">Not just visuals. I make digital things look alive</span>
            </div>
          </div>

          {/* Right: Stacked case study card layout with dropup fanning animation */}
          <div className="md:col-span-3 flex justify-end relative h-24 z-40">
            <div 
              className="relative group w-full max-w-[280px] h-full cursor-pointer select-none"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Card 3: Aerolume (Back Layer) */}
              <Link 
                href="/Projects/aerolume"
                className={`absolute inset-x-0 bottom-0 h-24 rounded-2xl p-3 shadow-xl transition-all duration-500 ease-out flex items-center justify-between gap-3 group/card ${
                  isOpen 
                    ? "z-30 translate-y-[-208px] scale-100 bg-white/15 backdrop-blur-md border border-white/20 opacity-100 pointer-events-auto" 
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
                
                <div className={`relative w-14 h-14 rounded-xl overflow-hidden border border-white/20 bg-zinc-900 flex-shrink-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
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
                className={`absolute inset-x-0 bottom-0 h-24 rounded-2xl p-3 shadow-xl transition-all duration-500 ease-out flex items-center justify-between gap-3 group/card ${
                  isOpen 
                    ? "z-30 translate-y-[-104px] scale-100 bg-white/15 backdrop-blur-md border border-white/20 opacity-100 pointer-events-auto" 
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
                
                <div className={`relative w-14 h-14 rounded-xl overflow-hidden border border-white/20 bg-zinc-900 flex-shrink-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
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
                className={`absolute inset-x-0 bottom-0 h-24 rounded-2xl p-3 shadow-xl transition-all duration-500 ease-out flex items-center justify-between gap-3 group/card z-40 bg-white/15 backdrop-blur-md border border-white/20 ${
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
                
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/20 bg-zinc-900 flex-shrink-0">
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
      <section className="relative min-h-screen w-full py-20 flex flex-col justify-between bg-[#FAF9F6] border-t border-zinc-200/50 overflow-hidden font-sans select-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 149, 255, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 149, 255, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
        backgroundAttachment: "fixed"
      }}>
        {/* Absolute Doodles & Graffiti */}
        
        {/* Top-Left: Eyes & Pink Circle */}
        <div className="absolute top-[8%] left-[5%] flex gap-1.5 pointer-events-none select-none">
          <div className="w-5 h-5 rounded-full border-[1.8px] border-zinc-900 bg-white relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full absolute top-1.5 left-1.5" />
          </div>
          <div className="w-5 h-5 rounded-full border-[1.8px] border-zinc-900 bg-white relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full absolute top-1.5 left-1.5" />
          </div>
        </div>

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

        {/* Near Heading Yellow Loop */}
        <div className="absolute top-[17%] right-[30%] w-10 h-10 text-amber-400/80 pointer-events-none select-none">
          <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M10,25 Q20,10 30,15 T35,30 T20,35 Z" strokeLinecap="round" />
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



        {/* Light Bulb & Cursor Sticker (Bottom Right area) */}
        <div className="absolute bottom-[35%] right-[5%] flex items-center gap-2 pointer-events-none select-none rotate-[-6deg]">
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

        {/* Yellow scribble lines (Left bottom margin) */}
        <div className="absolute bottom-[20%] left-[2%] w-16 h-6 text-amber-300 pointer-events-none select-none opacity-80">
          <svg viewBox="0 0 80 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5,10 C15,12 25,8 35,12 C45,10 55,14 65,10" />
          </svg>
        </div>

        {/* Yellow scribble lines (Right middle margin) */}
        <div className="absolute top-[42%] right-[10%] w-24 h-6 text-amber-300 pointer-events-none select-none opacity-80">
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

          <h2 className="text-zinc-950 font-extrabold text-4xl sm:text-5xl md:text-[52px] tracking-tight uppercase leading-[1.05] max-w-3xl text-center select-none">
            I MAKE DESIGNS<br />PEOPLE REMEMBER
          </h2>

          <p className="text-zinc-800 text-base sm:text-xl md:text-[22px] font-medium leading-relaxed max-w-2xl text-center mt-6 select-none">
            I design clean websites, apps, and brand systems<br />
            that help ideas look sharper, feel trusted<br />
            <span className="font-bold text-zinc-900">— and work with purpose.</span>
          </p>

          {/* Pinned Start a Project Button */}
          <div className="relative mt-10 transform rotate-3 hover:scale-105 transition-transform duration-200">
            {/* Red Pushpin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 z-10 flex items-center justify-center text-red-500 drop-shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M16 12V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v8l-2 2v2h5.2v4.8l.8.8.8-.8V18H18v-2l-2-2z" />
              </svg>
            </div>
            
            <button className="bg-white border border-zinc-200/80 rounded-xl px-7 py-3 shadow-md hover:shadow-lg text-zinc-900 font-extrabold text-sm tracking-wide select-none cursor-pointer">
              Start a project
            </button>
          </div>
        </div>

        {/* ── STATS CARDS ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-28 select-none">
          
          {/* Card 1: 8+ Years */}
          <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-48 transform -rotate-2 hover:scale-[1.02] hover:-rotate-1 transition-all duration-300">
            {/* Pushpin */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-rose-500 rounded-full shadow-xs" />
            
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
          <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-48 transform -rotate-1 hover:scale-[1.02] hover:rotate-0 transition-all duration-300">
            {/* Pushpin */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-rose-500 rounded-full shadow-xs" />
            
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
          <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-48 transform rotate-1 hover:scale-[1.02] hover:rotate-0 transition-all duration-300">
            {/* Pushpin */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-rose-500 rounded-full shadow-xs" />
            
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
          <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-48 transform rotate-2 hover:scale-[1.02] hover:rotate-1 transition-all duration-300">
            {/* Pushpin */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-rose-500 rounded-full shadow-xs" />
            
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

      </section>

      {/* SECTION 3: PROJECTS THAT TELL STORIES */}
      <section className="relative min-h-screen w-full py-24 flex flex-col justify-center overflow-hidden z-10">
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
      <EyeFollower />
    </main>
  );
}
