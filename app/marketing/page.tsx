"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";
import CTA from "../Components/cta";
import FAQ from "../Components/FAQ";

const TargetLensIcon = () => (
  <span className="relative inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mx-2 align-middle select-none">
    <svg className="w-full h-full drop-shadow-md" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="targetLensBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="50%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="targetMetalRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f4f5" />
          <stop offset="30%" stopColor="#d4d4d8" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#targetLensBg)" stroke="#09090b" strokeWidth="1.5" />
      <rect x="3" y="3" width="58" height="58" rx="15" stroke="#9ca3af" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <circle cx="32" cy="32" r="18" fill="url(#targetMetalRing)" />
      <circle cx="32" cy="32" r="14" fill="#09090b" stroke="#09090b" strokeWidth="1.5" />
      
      {/* Target Crosshair */}
      <circle cx="32" cy="32" r="7" stroke="#ffffff" strokeWidth="2" fill="none" />
      <circle cx="32" cy="32" r="2" fill="#ffffff" />
      <line x1="32" y1="20" x2="32" y2="23" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="41" x2="32" y2="44" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="32" x2="23" y2="32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <line x1="41" y1="32" x2="44" y2="32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </span>
);

export default function PerformanceMarketingService() {
  const [activeTab, setActiveTab] = useState("analyse");
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
      id: "analyse",
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
      id: "acquire",
      label: "Acquire",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
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
    }
  ];

  const tabContent: Record<string, {
    badge: string;
    heading: string;
    description: string;
    cards: {
      title: string;
      description: string;
      image: string;
      icon?: React.ReactNode;
    }[];
  }> = {
    analyse: {
      badge: "Strategise",
      heading: "Know Your Customers. Not Just Their Clicks.",
      description: "Beyond click-through rates. User persona analysis that reveals who your customers actually are—and what they need.",
      cards: [
        {
          title: "CDP & Customer Data",
          description: "Unified customer data that powers personalisation and drives real decisions.",
          image: "/marketing/11.svg",
          icon: (
            <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          )
        },
        {
          title: "Persona Discovery",
          description: "Know who you're talking to. Build strategies that speak to real people—not segments.",
          image: "/marketing/discovery_analysis_2x.avif",
          icon: (
            <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          )
        },
        {
          title: "Measurement Planning",
          description: "Set up measurement frameworks that track meaningful metrics, aligning insights with your goals.",
          image: "/marketing/measurement_2x.avif",
          icon: (
            <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          )
        }
      ]
    },
    acquire: {
      badge: "Acquire",
      heading: "Scalable Paid Acquisition.",
      description: "High-ROI campaign execution across Google Search, Meta, LinkedIn, and programmatic ad networks.",
      cards: [
        {
          title: "Paid Search & Shopping",
          description: "Capturing high-intent customer search traffic with optimized bidding strategies.",
          image: "/marketing/discovery_analysis_2x.avif"
        },
        {
          title: "Paid Social Growth",
          description: "Thumb-stopping ad creative and dynamic retargeting tailored for conversion.",
          image: "/marketing/11.svg"
        },
        {
          title: "Programmatic Display",
          description: "Targeted media buying with fraud-filtered, premium ad placements.",
          image: "/marketing/measurement_2x.avif"
        }
      ]
    },
    optimise: {
      badge: "Optimise",
      heading: "Continuous ROAS Maximization.",
      description: "Relentless A/B testing of ad creative, landing page funnels, and bid algorithms.",
      cards: [
        {
          title: "Conversion Rate Optimization",
          description: "Removing friction from landing pages to double conversion efficiency.",
          image: "/marketing/measurement_2x.avif"
        },
        {
          title: "Creative A/B Testing",
          description: "Rapid iteration cycles testing copy, hooks, and visual formats.",
          image: "/marketing/11.svg"
        },
        {
          title: "CAC & LTV Scaling",
          description: "Optimizing unit economics to scale budget predictably without diminishing returns.",
          image: "/marketing/discovery_analysis_2x.avif"
        }
      ]
    }
  };

  const currentTab = tabContent[activeTab] || tabContent.analyse;

  return (
    <main className="relative flex flex-col flex-1 overflow-hidden pt-20 bg-[#FCFCFD]">
      {/* ── Performance Marketing Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-140px)] overflow-hidden">
        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
          
          {/* Laurel Wreath Kicker */}
          <div className="flex items-center justify-center gap-3 mb-6 select-none">
            <img src="/left.svg" alt="" className="h-6 w-auto object-contain" />
            <span className="text-zinc-500 font-medium text-xs sm:text-sm tracking-wide uppercase">
              Performance Marketing
            </span>
            <img src="/right.svg" alt="" className="h-6 w-auto object-contain" />
          </div>

          {/* Heading Title */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-tight max-w-5xl mb-6">
            Driven by Data. <TargetLensIcon />{" "}
            <span className="block mt-2">
              Scaled with{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] via-indigo-500 to-violet-500">
                Precision.
                <img src="/Vector 20.svg" alt="" className="absolute left-0 right-0 -bottom-3.5 w-full h-auto select-none pointer-events-none" />
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 mt-2">
            Performance marketing strategies that amplify reach, lower acquisition costs, and maximize revenue growth predictably.
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
              className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-white border border-zinc-200/80 rounded-[28px] p-6 sm:p-7 flex flex-col justify-start shadow-xs hover:shadow-md transition-all duration-300 group text-left items-start"
            >
              {/* Graphic Image Display */}
              <div className="relative w-full rounded-2xl overflow-hidden mb-4 bg-[#f7f7f8] flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Card Header Info */}
              <div className="flex flex-col items-start w-full">
                <h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight flex items-center gap-2">
                  {card.icon}
                  <span>{card.title}</span>
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

      {/* ── Architecture That Keeps You Safe Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 -mt-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Header Left */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-medium shadow-xs mb-4 select-none">
              <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Architect</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight">
              Architecture That Keeps<br />You Safe.
            </h2>
          </div>

          {/* Header Right */}
          <div className="max-w-md">
            <p className="text-zinc-500 text-md sm:text-md leading-relaxed">
              Security keeping you up? Data architecture that protects your business and your customers&apos; trust.
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
              title: "Privacy & Compliance",
              description: "Stay compliant. Stay secure. Keep your customers' trust.",
              image: "/marketing 2/11.avif",
            },
            {
              title: "CRM & ERP Integration",
              description: "Connect your systems. Make data flow where it needs to go.",
              image: "/marketing 2/12.avif",
            },
            {
              title: "Business Intelligence",
              description: "BI solutions that turn raw data into strategy your team can actually use.",
              image: "/marketing 2/13.avif",
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

      {/* ── Clarity on Demand / Visualise Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 -mt-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Header Left */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-medium shadow-xs mb-4 select-none">
              <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
              </svg>
              <span>Visualise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight">
              Clarity on Demand.
            </h2>
          </div>

          {/* Header Right */}
          <div className="max-w-md">
            <p className="text-zinc-500 text-md sm:text-md leading-relaxed">
              Get instant clarity with custom dashboards and visualisations. We make it easy to monitor trends and user behaviour and turn them into actionable insights.
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
              title: "Reporting & Visualisation",
              description: "Visual insights that make decisions easier—not more complicated.",
              image: "/marketing 3/11.avif",
            },
            {
              title: "Custom Dashboards",
              description: "Your data. Your metrics. One dashboard built around what you actually need to know.",
              image: "/marketing 3/12.avif",
            },
            {
              title: "Journey Tracking",
              description: "Follow your customers across every device. Understand the full picture.",
              image: "/marketing 3/13.avif",
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
            See our marketing and growth campaigns in action.
          </p>
        </div>

        {/* 2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: Android Authority */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div className="relative rounded-[28px] bg-gradient-to-br from-zinc-200/80 via-zinc-100 to-zinc-200/50 p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-white text-[10px] font-mono">
                  <span className="font-sans font-extrabold text-xs tracking-wider text-emerald-400 uppercase">ANDROID AUTHORITY</span>
                  <span className="bg-emerald-500 text-zinc-950 font-bold px-2 py-0.5 rounded">Growth</span>
                </div>
                <div className="p-3 bg-zinc-950 text-white flex-1 flex gap-3 items-center">
                  <div className="w-1/3 aspect-square rounded-lg bg-zinc-800 flex items-center justify-center text-[10px] text-emerald-400 font-bold border border-zinc-700">
                    +145% LTV
                  </div>
                  <div className="w-2/3 space-y-1">
                    <span className="text-[9px] text-emerald-400 font-bold uppercase">Paid Acquisition</span>
                    <h4 className="text-xs font-bold leading-tight">Scalable Organic &amp; Paid User Growth</h4>
                    <p className="text-[9px] text-zinc-400 line-clamp-2">Optimized CAC through data-driven multi-touch channel allocation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-emerald-600">
                Android Authority
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Enhancing Core Web Vitals, organic search visibility, and User Retention through targeted campaign strategies.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Marketing
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Enterprise
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  UI/UX
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs" title="Canada">
                  🇨🇦
                </span>
              </div>
            </div>
          </div>

          {/* Project 2: Bank Al Etihad */}
          <div className="group cursor-pointer flex flex-col justify-between">
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#fbe3d5] via-[#f9e9df] to-[#f4ded4] p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-white text-[10px] font-mono">
                  <span className="font-sans font-bold text-xs text-orange-400">BANK AL ETIHAD</span>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-[9px] font-sans font-bold">CRO &amp; Funnels</span>
                </div>
                <div className="p-3 bg-zinc-50 flex-1 flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-800">
                    <span>Performance Campaign</span>
                    <span className="text-[10px] text-zinc-400 font-normal">Conversion Rate +48%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-orange-500 text-white rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] opacity-90">CAC Lowered</span>
                      <span className="text-[10px] font-bold">-35% COST</span>
                    </div>
                    <div className="bg-white border border-zinc-200 rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] text-zinc-400">Retention</span>
                      <span className="text-[10px] font-bold text-zinc-700">High LTV</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-orange-600">
                Bank Al Etihad
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                A fully integrated digital performance campaign that reduced customer acquisition costs and accelerated account signups.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Marketing
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Enterprise
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs" title="Jordan">
                  🇯🇴
                </span>
              </div>
            </div>
          </div>
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
