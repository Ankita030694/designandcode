"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SpecularButton from "@/components/SpecularButton";
import Footer from "../Components/footer";
import CTA from "../Components/cta";
import FAQ from "../Components/FAQ";
import { PROJECTS_DATA } from "../data/projects";

const MagicWandIcon = () => (
  <span className="relative inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mx-2 align-middle select-none">
    <svg className="w-full h-full drop-shadow-md" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="wandLensBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="50%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="wandMetalRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="30%" stopColor="#d4d4d8" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
      </defs>
      {/* Outer container */}
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#wandLensBg)" stroke="#09090b" strokeWidth="1.5" />
      <rect x="3" y="3" width="58" height="58" rx="15" stroke="#9ca3af" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      {/* Inner lens */}
      <circle cx="32" cy="32" r="18" fill="url(#wandMetalRing)" />
      <circle cx="32" cy="32" r="14" fill="#09090b" stroke="#09090b" strokeWidth="1.5" />
      
      {/* Magic Wand Graphic */}
      <path d="M22 42L42 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 17L39.5 21L43.5 22.5L39.5 24L38 28L36.5 24L32.5 22.5L36.5 21Z" fill="#ffffff" />
      <circle cx="21" cy="23" r="1.2" fill="#ffffff" />
      <circle cx="27" cy="43" r="1.2" fill="#ffffff" />
    </svg>
  </span>
);

export default function WebDevelopmentService() {
  const shopifyProjects = PROJECTS_DATA.filter((p) => p.projectType === "Shopify Store").slice(0, 2);
  const [activeTab, setActiveTab] = useState("strategise");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.scrollWidth / 3;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex >= 0 && newIndex < 3) {
      setActiveCardIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const itemWidth = container.scrollWidth / 3;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
    setActiveCardIndex(index);
  };

  const [activeCardIndex2, setActiveCardIndex2] = useState(0);
  const sliderRef2 = useRef<HTMLDivElement>(null);

  const handleScroll2 = () => {
    if (!sliderRef2.current) return;
    const container = sliderRef2.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.scrollWidth / 3;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex >= 0 && newIndex < 3) {
      setActiveCardIndex2(newIndex);
    }
  };

  const scrollToCard2 = (index: number) => {
    if (!sliderRef2.current) return;
    const container = sliderRef2.current;
    const itemWidth = container.scrollWidth / 3;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
    setActiveCardIndex2(index);
  };

  const [activeCardIndex3, setActiveCardIndex3] = useState(0);
  const sliderRef3 = useRef<HTMLDivElement>(null);

  const handleScroll3 = () => {
    if (!sliderRef3.current) return;
    const container = sliderRef3.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.scrollWidth / 3;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex >= 0 && newIndex < 3) {
      setActiveCardIndex3(newIndex);
    }
  };

  const scrollToCard3 = (index: number) => {
    if (!sliderRef3.current) return;
    const container = sliderRef3.current;
    const itemWidth = container.scrollWidth / 3;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
    setActiveCardIndex3(index);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveCardIndex(0);
    setActiveCardIndex2(0);
    setActiveCardIndex3(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    if (sliderRef2.current) {
      sliderRef2.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    if (sliderRef3.current) {
      sliderRef3.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const dockItems = [
    {
      id: "strategise",
      label: "Strategise",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 0-7.07 17.07M12 2a10 10 0 0 1 7.07 17.07" />
          <path d="M12 6a6 6 0 0 0-4.24 10.24M12 6a6 6 0 0 1 4.24 10.24" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      id: "build",
      label: "Build",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="m12 12 8-4.5M12 12v9M12 12 4 7.5" />
        </svg>
      )
    },
    {
      id: "optimise",
      label: "Optimise",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 4V2M15 16v-2M8 9h2M20 9h-2M17.8 4.2l-1.4 1.4M17.8 13.8l-1.4-1.4M12.2 4.2l1.4 1.4M12.2 13.8l1.4-1.4" />
          <path d="M4 14l8-8 3 3 5-5" />
        </svg>
      )
    },
    
   
  ];

  const tabContent: Record<string, {
    badge: string;
    heading: string;
    description: string;
    cards: {
      title: string;
      description: string;
      image: string;
    }[];
  }> = {
    strategise: {
      badge: "Strategise",
      heading: "Architecture With Intent.",
      description: "Strategies that turn your architecture into an asset - not a liability you're stuck maintaining.",
      cards: [
        {
          title: "Headless Development Consulting",
          description: "Future-proof, headless architecture that's built to last - and actually manageable.",
          image: "/webd/11.avif"
        },
        {
          title: "Composable Tech Stack Implementation",
          description: "A modular tech stack that grows with you. No vendor lock-in. No unnecessary complexity.",
          image: "/webd/12.avif"
        },
        {
          title: "Unified Control Plane",
          description: "One system. One source of truth. Scale without the integration headaches.",
          image: "/webd/13.avif"
        }
      ]
    },
    build: {
      badge: "Build",
      heading: "High-Performance Codebases.",
      description: "Next.js, TypeScript, and modern frameworks engineered to load fast and convert higher.",
      cards: [
        {
          title: "Next.js & React Frontend",
          description: "Server-side rendered web apps with instant page transitions.",
          image: "/webd/12.avif"
        },
        {
          title: "Headless CMS Integration",
          description: "Empowering content editors with flexible, structured page builders.",
          image: "/webd/11.avif"
        },
        {
          title: "Custom Component APIs",
          description: "Production-ready code libraries matching design tokens pixel-by-pixel.",
          image: "/webd/13.avif"
        }
      ]
    },
    optimise: {
      badge: "Optimise",
      heading: "Speed, Security & Core Vitals.",
      description: "Continuous performance tuning to maximize Core Web Vitals and SEO rankings.",
      cards: [
        {
          title: "Core Web Vitals Tuning",
          description: "Sub-second load times and 100/100 Lighthouse performance benchmarks.",
          image: "/webd/13.avif"
        },
        {
          title: "SEO & Accessibility",
          description: "Semantic HTML5, WCAG compliance, and dynamic metadata strategies.",
          image: "/webd/11.avif"
        },
        {
          title: "Security Auditing",
          description: "Hardened edge networks, API rate-limiting, and zero-vulnerability builds.",
          image: "/webd/12.avif"
        }
      ]
    }
  };

  const currentTab = tabContent[activeTab] || tabContent.strategise;

  return (
    <main className="relative flex flex-col flex-1 overflow-hidden pt-20 bg-[#F4F8FF]">
      {/* ── Web Development Service Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-140px)] overflow-hidden">
        {/* Background glow effects */}
        

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
          
          {/* Laurel Wreath Kicker */}
          <div className="flex items-center justify-center gap-3 mb-6 select-none">
            <img src="/left.svg" alt="" className="h-6 w-auto object-contain" />
            <span className="text-zinc-500 font-medium text-xs sm:text-sm tracking-wide uppercase">
              Web Development
            </span>
            <img src="/right.svg" alt="" className="h-6 w-auto object-contain" />
          </div>

          {/* Heading Title */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-tight max-w-5xl mb-6">
            Composable Without <MagicWandIcon />{" "}
            <span className="block mt-2">
              the{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] via-indigo-500 to-violet-500">
                Chaos.
                <img src="/Vector 20.svg" alt="" className="absolute left-0 right-0 -bottom-3.5 w-full h-auto select-none pointer-events-none" />
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 mt-2">
            Architecture that gives you agility now and resilience later. Composable done right - without the 50-vendor sprawl.
          </p>

          {/* Action CTA Button */}
          <SpecularButton
            href="/ContactUs"
            className="flex items-center gap-2.5 py-2.5 px-6"
            baseColor="#18181b"
            textColor="#ffffff"
            lineColor="#ffffff"
            radius={9999}
            intensity={1.2}
          >
            <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="8" cy="10" r="0.5" fill="currentColor" />
              <circle cx="12" cy="10" r="0.5" fill="currentColor" />
              <circle cx="16" cy="10" r="0.5" fill="currentColor" />
            </svg>
            <span>Let&apos;s Build Together</span>
          </SpecularButton>
        </div>

        {/* Floating Capsule Toolbar / Dock */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-auto px-4 select-none">
          <div className="flex items-center gap-1 bg-black backdrop-blur-md border border-zinc-700/60 rounded-full p-1.5 shadow-md shadow-black/60">
            {dockItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
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

      {/* ── Interactive Process Details Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Header Left */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-medium shadow-xs mb-4 select-none">
              <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="14" y2="12" />
                <line x1="4" y1="18" x2="18" y2="18" />
              </svg>
              <span>{currentTab.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight">
              {currentTab.heading}
            </h2>
          </div>

          {/* Header Right */}
          <div className="max-w-md">
            <p className="text-zinc-500 text-md sm:text-md leading-relaxed">
              {currentTab.description}
            </p>
          </div>
        </div>

        {/* 3 Cards Slider (Mobile) / Grid (Desktop) */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 gap-5 sm:gap-8 pb-4 md:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing select-none"
        >
          {currentTab.cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-[#ebebeb]/80 border border-zinc-200/60 rounded-[22px] p-6 sm:p-7 flex flex-col justify-start transition-all duration-300 group"
            >
              {/* Graphic Image Display */}
              <div className="relative w-full rounded-2xl overflow-hidden mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Card Header Info */}
              <div className="flex flex-col">
                <h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight sm:min-h-[56px]">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Dots Indicator (Mobile Only) */}
        <div className="flex items-center justify-center gap-2.5 mt-6 md:hidden select-none">
          {currentTab.cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCardIndex === idx
                  ? "w-7 bg-zinc-900 shadow-xs"
                  : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Composable Architecture / Build Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 -mt-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Header Left */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-medium shadow-xs mb-4 select-none">
              <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                <path d="m12 12 8-4.5M12 12v9M12 12 4 7.5" />
              </svg>
              <span>Build</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight">
              Architecture That Fits<br />Together.
            </h2>
          </div>

          {/* Header Right */}
          <div className="max-w-md">
            <p className="text-zinc-500 text-md sm:text-md leading-relaxed">
              Modular pieces that click together. Reconfigure as you grow. No forced fits.
            </p>
          </div>
        </div>

        {/* 3 Cards Slider (Mobile) / Grid (Desktop) */}
        <div
          ref={sliderRef2}
          onScroll={handleScroll2}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 gap-5 sm:gap-8 pb-4 md:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing select-none"
        >
          {[
            {
              title: "Composable CMS Architecture",
              description: "A flexible, modular CMS. One hub. Many front-ends. Full control.",
              image: "/webd2/21 (2).svg",
            },
            {
              title: "Headless Development",
              description: "Decoupled front-ends that move fast while your content stays organised.",
              image: "/webd2/22.avif",
            },
            {
              title: "Microservices Integration",
              description: "Modular services that integrate cleanly - not the tangle you're used to.",
              image: "/webd2/23.avif",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-white border border-zinc-200/80 rounded-[28px] p-6 sm:p-7 flex flex-col justify-start shadow-xs hover:shadow-md transition-all duration-300 group text-left items-start"
            >
              {/* Top Graphic Image Display */}
              <div className="relative w-full rounded-2xl overflow-hidden mb-4 bg-[#f7f7f8] flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Bottom Card Text Info */}
              <div className="flex flex-col items-start w-full">
                <h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Dots Indicator (Mobile Only) */}
        <div className="flex items-center justify-center gap-2.5 mt-6 md:hidden select-none">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard2(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCardIndex2 === idx
                  ? "w-7 bg-zinc-900 shadow-xs"
                  : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Optimised Always / Optimise Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 -mt-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Header Left */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-medium shadow-xs mb-4 select-none">
              <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 4V2M15 16v-2M8 9h2M20 9h-2M17.8 4.2l-1.4 1.4M17.8 13.8l-1.4-1.4M12.2 4.2l1.4 1.4M12.2 13.8l1.4-1.4" />
                <path d="M4 14l8-8 3 3 5-5" />
              </svg>
              <span>Optimise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight">
              Optimised. Always.
            </h2>
          </div>

          {/* Header Right */}
          <div className="max-w-md">
            <p className="text-zinc-500 text-md sm:text-md leading-relaxed">
              Fast, reliable, ready to scale. Performance that doesn&apos;t degrade as you grow.
            </p>
          </div>
        </div>

        {/* 3 Cards Slider (Mobile) / Grid (Desktop) */}
        <div
          ref={sliderRef3}
          onScroll={handleScroll3}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 gap-5 sm:gap-8 pb-4 md:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing select-none"
        >
          {[
            {
              title: "Frontend Performance Optimisation",
              description: "Smooth experiences. Fast loads. Users who don't bounce.",
              image: "/webd3/31.avif",
            },
            {
              title: "Architecture Audits",
              description: "Regular audits that catch problems before they become outages.",
              image: "/webd3/32.avif",
            },
            {
              title: "Rapid Prototyping & CI/CD Stack",
              description: "Ship faster. Iterate continuously. Zero-downtime deployments.",
              image: "/webd3/33.avif",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-white border border-zinc-200/80 rounded-[28px] p-6 sm:p-7 flex flex-col justify-start shadow-xs hover:shadow-md transition-all duration-300 group text-left items-start"
            >
              {/* Top Graphic Image Display */}
              <div className="relative w-full rounded-2xl overflow-hidden mb-4 bg-[#f7f7f8] flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Bottom Card Text Info (Left Aligned) */}
              <div className="flex flex-col items-start w-full">
                <h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Dots Indicator (Mobile Only) */}
        <div className="flex items-center justify-center gap-2.5 mt-6 md:hidden select-none">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard3(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCardIndex3 === idx
                  ? "w-7 bg-zinc-900 shadow-xs"
                  : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Related Projects Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 -mt-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight mb-3">
            Related Projects
          </h2>
          <p className="text-zinc-500 text-base sm:text-md">
            See our engineering work in action.
          </p>
        </div>

        {/* 2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {shopifyProjects.map((project) => (
            <Link href={`/Projects/${project.slug}`} key={project.slug} className="group block cursor-pointer">
              <article>
                <div className={`relative rounded-[28px] bg-gradient-to-br ${project.bg} overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center p-6`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-zinc-900 mb-2 group-hover:text-black transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200/60">
                      {project.projectType}
                    </span>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white text-black text-xs font-medium shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-zinc-150"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <FAQ />
      {/* CTA section */}
      <CTA />

      {/* Footer component */}
      <Footer />
    </main>
  );
}
