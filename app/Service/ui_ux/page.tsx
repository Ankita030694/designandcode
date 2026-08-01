"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SpecularButton from "@/components/SpecularButton";
import Footer from "../../Components/footer";
import CTA from "../../Components/cta";
import FAQ from "../../Components/FAQ";


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


  ];

  const tabContent: Record<string, {
    badge: string;
    heading: string;
    description: string;
    cards: {
      title: string;
      description: string;
      image: string;
      step: string;
    }[];
  }> = {
    define: {
      badge: "Define",
      heading: "Journeys That Make Sense.",
      description: "Chart a course for engaging experiences. Every touchpoint defined. Journeys that leave a mark—not confusion.",
      cards: [
        {
          title: "User Journey Mapping",
          description: "Strategic journeys that actually boost engagement—not just look good on paper.",
          image: "/uiux/11.svg",
          step: "01"
        },
        {
          title: "Buyer Journey Consulting",
          description: "Drive conversions with experiences that feel personal—not programmed.",
          image: "/uiux/12.svg",
          step: "02"
        },
        {
          title: "Design Sprints",
          description: "Focused sprints that align design with what you're trying to build.",
          image: "/uiux/13.svg",
          step: "03"
        }
      ]
    },
    compose: {
      badge: "Compose",
      heading: "Crafting Structures That Resonate.",
      description: "Wireframing and information architecture built with clarity and purpose for maximum usability.",
      cards: [
        {
          title: "Information Architecture",
          description: "Organizing complex content into intuitive, clear structural flows.",
          image: "/uiux/12.svg",
          step: "01"
        },
        {
          title: "Low-Fi Wireframing",
          description: "Rapidly prototyping layouts to validate product hierarchy before pixels.",
          image: "/uiux/11.svg",
          step: "02"
        },
        {
          title: "Interactive Prototypes",
          description: "Clickable wireframes that demonstrate core app logic early on.",
          image: "/uiux/13.svg",
          step: "03"
        }
      ]
    },
    design: {
      badge: "Design",
      heading: "Interfaces Loved by Millions.",
      description: "Pixel-perfect visual design with rich micro-interactions and cohesive modern branding.",
      cards: [
        {
          title: "UI Design Systems",
          description: "Scalable component libraries crafted with meticulous design tokens.",
          image: "/uiux/13.svg",
          step: "01"
        },
        {
          title: "Mobile App Design",
          description: "Fluid iOS and Android experiences tailored for touch interactions.",
          image: "/uiux/11.svg",
          step: "02"
        },
        {
          title: "Web Platform Design",
          description: "Responsive web interfaces engineered for modern browser standards.",
          image: "/uiux/12.svg",
          step: "03"
        }
      ]
    },
    optimise: {
      badge: "Optimise",
      heading: "Refining Performance & Flow.",
      description: "Data-driven UX iteration and usability testing that continuously converts and satisfies users.",
      cards: [
        {
          title: "UX Audits & Heatmaps",
          description: "Identifying friction points through comprehensive empirical analysis.",
          image: "/uiux/11.svg",
          step: "01"
        },
        {
          title: "Conversion Optimization",
          description: "A/B testing flows to unlock measurable growth and retention.",
          image: "/uiux/13.svg",
          step: "02"
        },
        {
          title: "Usability Testing",
          description: "Direct user feedback loops to refine micro-copy and interaction patterns.",
          image: "/uiux/12.svg",
          step: "03"
        }
      ]
    },
    scale: {
      badge: "Scale",
      heading: "Design Systems Built to Grow.",
      description: "Robust ecosystems and design tokens ready for seamless engineering integration.",
      cards: [
        {
          title: "Tokenization & Handoff",
          description: "Bridging the gap between Figma designs and production code seamlessly.",
          image: "/uiux/12.svg",
          step: "01"
        },
        {
          title: "Component Libraries",
          description: "Reusable UI kits ensuring brand consistency across multi-platform teams.",
          image: "/uiux/13.svg",
          step: "02"
        },
        {
          title: "Governance & Specs",
          description: "Comprehensive documentation to maintain design purity at enterprise scale.",
          image: "/uiux/11.svg",
          step: "03"
        }
      ]
    }
  };

  const currentTab = tabContent[activeTab] || tabContent.define;

  return (
    <main className="relative flex flex-col flex-1 overflow-hidden pt-20 bg-[#FCFCFD]">
      {/* ── UI/UX Service Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-140px)] overflow-hidden">
        {/* Background glow effects */}
        

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
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#facc15] via-indigo-500 to-violet-500">
                Listen)
                <img src="/Vector 20.svg" alt="" className="absolute left-0 right-0 -bottom-3.5 w-full h-auto select-none pointer-events-none" />
              </span>
              .
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 mt-2">
            A design team that lives and breathes your brand. Human creativity that stands out in a sea of AI-generated sameness.
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
              className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-[#ebebeb]/80 border border-zinc-200/60 rounded-[22px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Card Header Info */}
              <div className="mb-2">
                <h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Graphic Image Display */}
              <div className="relative w-full rounded-2xl overflow-hidden mt-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                />
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

      {/* ── Design Systems / Compose Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 -mt-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Header Left */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-medium shadow-xs mb-4 select-none">
              <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Compose</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight">
              Design Systems That Keep You Consistent.
            </h2>
          </div>

          {/* Header Right */}
          <div className="max-w-md">
            <p className="text-zinc-500 text-md sm:text-md leading-relaxed">
              Consistency at scale. Atomic design systems that prevent the Frankenstein effect—no matter how fast your team ships.
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
              title: "Design System Architecture",
              description: "A system that keeps your brand consistent—even when AI generates the components.",
              image: "/uiux2/21.svg",
            },
            {
              title: "UI Component Libraries",
              description: "Reusable components for rapid deployment. Brand coherence at any speed.",
              image: "/uiux2/22.svg",
            },
            {
              title: "Information Architecture",
              description: "Organise content so users find what they need—without the friction.",
              image: "/uiux2/23.svg",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-white border border-zinc-200/80 rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              {/* Top Graphic Image Display */}
              <div className="relative w-full rounded-2xl overflow-hidden mb-6 bg-[#f7f7f8] flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Bottom Centered Text Info */}
              <div className="text-center flex flex-col items-center">
                <h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
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

      {/* ── Rapid Prototyping / Design Section ── */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 -mt-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Header Left */}
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-800 text-xs font-medium shadow-xs mb-4 select-none">
              <svg className="w-3.5 h-3.5 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" />
                <path d="M12 6v3M12 15v3M6 12h3M15 12h3" />
              </svg>
              <span>Design</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-zinc-900 tracking-tight leading-tight">
              Prototype Fast. Build Faster.
            </h2>
          </div>

          {/* Header Right */}
          <div className="max-w-md">
            <p className="text-zinc-500 text-md sm:text-md leading-relaxed">
              From idea to prototype in days, not weeks. Iterate toward something great before the market moves on.
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
              title: "High-Fidelity Designs",
              description: "See your vision take shape. Detailed designs that leave nothing to interpretation.",
              image: "/uiux3/hifi_designs_2x.avif",
            },
            {
              title: "Rapid Prototyping",
              description: "Test tomorrow. Build next week. Prototypes that work before you commit.",
              image: "/uiux3/interactive_prototyping_2x.avif",
            },
            {
              title: "UI Animations",
              description: "Dynamic elements that guide users and bring interfaces to life.",
              image: "/uiux3/ui_animation_2x.avif",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-[#ebebeb]/80 border border-zinc-200/60 rounded-[22px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Top Graphic Image Display Container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#18181b] flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none"
                />
              </div>

              {/* Bottom Centered Text Info */}
              <div className="text-center flex flex-col items-center">
                <h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
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
            See our design work in action.
          </p>
        </div>

        {/* 2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: Bank Al Etihad */}
          <div className="group cursor-pointer flex flex-col justify-between">
            {/* Top Mockup Banner */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#fbe3d5] via-[#f9e9df] to-[#f4ded4] p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              {/* Bank Al Etihad Dashboard Graphic Mockup */}
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-white text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="ml-2 font-sans text-xs font-semibold text-zinc-300">Bruce Wayne</span>
                  </div>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-[9px] font-sans font-bold">Need Help</span>
                </div>
                <div className="p-3 bg-zinc-50 flex-1 flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-800">
                    <span>Product</span>
                    <span className="text-[10px] text-zinc-400 font-normal">Account &gt; All Products</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-orange-500 text-white rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] opacity-90">3.648,00 USD</span>
                      <span className="text-[10px] font-bold">SALARY ACCOUNT</span>
                    </div>
                    <div className="bg-white border border-zinc-200 rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] text-zinc-400">Current Account</span>
                      <span className="text-[10px] font-bold text-zinc-700">Flexible 24/7</span>
                    </div>
                    <div className="bg-orange-100 text-orange-800 rounded-lg p-2 flex flex-col justify-center">
                      <span className="text-[9px] opacity-80">You saved $3,240</span>
                      <span className="text-[10px] font-bold">SAVING ACCOUNT</span>
                    </div>
                  </div>
                  <div className="h-10 bg-white border border-zinc-200 rounded-lg p-2 text-[10px] text-zinc-500 flex items-center justify-between">
                    <span>Salary Account Details &amp; Statements</span>
                    <span className="text-orange-600 font-bold">View -&gt;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Project Info */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                Bank Al Etihad
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                A fully composable atomic design overhaul that streamlined workflows, reduced friction, and accelerated iterative development.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Atomic Systems
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Enterprise
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  UI/UX
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-xs" title="Jordan">
                  🇯🇴
                </span>
              </div>
            </div>
          </div>

          {/* Project 2: Android Authority */}
          <div className="group cursor-pointer flex flex-col justify-between">
            {/* Top Mockup Banner */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-zinc-200/80 via-zinc-100 to-zinc-200/50 p-6 sm:p-8 overflow-hidden border border-zinc-200/60 shadow-xs transition-transform duration-500 group-hover:scale-[1.01] group-hover:shadow-md aspect-[16/10] flex items-center justify-center">
              {/* Android Authority Website Mockup */}
              <div className="w-full h-full bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-white text-[10px] font-mono">
                  <span className="font-sans font-extrabold text-xs tracking-wider text-emerald-400 uppercase">ANDROID AUTHORITY</span>
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="text-zinc-300">Reviews</span>
                    <span className="text-zinc-300">Best</span>
                    <span className="bg-emerald-500 text-zinc-950 font-bold px-2 py-0.5 rounded">Login</span>
                  </div>
                </div>
                <div className="p-3 bg-zinc-950 text-white flex-1 flex gap-3 items-center">
                  <div className="w-1/3 aspect-square rounded-lg bg-zinc-800 flex items-center justify-center text-[10px] text-emerald-400 font-bold border border-zinc-700">
                    S25 Ultra
                  </div>
                  <div className="w-2/3 space-y-1">
                    <span className="text-[9px] text-emerald-400 font-bold uppercase">Top Stories</span>
                    <h4 className="text-xs font-bold leading-tight">Looks like Samsung was right about S25 Ultra</h4>
                    <p className="text-[9px] text-zinc-400 line-clamp-2">Core Web Vitals enhanced retention by 45% after headless CMS migration.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Project Info */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-emerald-600">
                Android Authority
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Enhancing Core Web Vitals and User Retention with migration to a Headless CMS.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Enterprise
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-xs">
                  Headless
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
