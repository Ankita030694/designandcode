"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "./data/projects";
import ServicesSection from "./Components/ServicesSection";
import FAQ from "./Components/FAQ";
import Footer from "./Components/footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);


  const dropupProjects = PROJECTS_DATA.slice(0, 3);
  const storyboardProjects = [
    {
      title: "Bloom Cafes",
      category: "Specialty Coffee",
      platform: "Figma",
      year: "2026",
      image: "/project/Bloom.svg",
      clipColor: "text-rose-500",
      rotation: "rotate-[2.5deg] hover:rotate-[0deg]",
      link: "/Projects/bloom"
    },
    {
      title: "Bunt India",
      category: "Haute Couture",
      platform: "Figma",
      year: "2026",
      image: "/project/Bunt.svg",
      clipColor: "text-amber-500",
      rotation: "rotate-[-1.5deg] hover:rotate-[0deg]",
      link: "/Projects/bunt"
    },
    {
      title: "Kitchun",
      category: "SaaS",
      platform: "Framer",
      year: "2026",
      image: "/project/Kitchun.svg",
      clipColor: "text-green-500",
      rotation: "rotate-[3deg] hover:rotate-[0deg]",
      link: "/Projects/kitchun"
    },
    {
      title: "Aerolume",
      category: "Architectural Lighting",
      platform: "Photoshop",
      year: "2026",
      image: "/project/Aerolume.svg",
      clipColor: "text-purple-500",
      rotation: "rotate-[-2.5deg] hover:rotate-[0deg]",
      link: "/Projects/aerolume"
    }
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-transparent font-sans scroll-smooth">
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
      <section className="relative min-h-screen w-full py-20 flex flex-col justify-between bg-transparent border-t border-sky-300/40 overflow-hidden font-sans select-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(24, 69, 247, 0.25) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(24, 69, 247, 0.25) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        backgroundAttachment: "fixed"
      }}>
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
                  activeStatIndex === idx ? "w-6 bg-zinc-950" : "w-2 bg-zinc-300"
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
        <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col gap-10 select-none pb-12">
          
          {/* 2x2 Grid of 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
            {storyboardProjects.map((project) => (
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

        </div>
      </section>

      {/* SECTION 4: SERVICES */}
      <ServicesSection />

      {/* SECTION 5: FAQ (ANSWER BEFORE WE STARTS) */}
      <FAQ />
      <Footer />
    </main>
  );
}
