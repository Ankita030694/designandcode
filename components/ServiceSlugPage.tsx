"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA, Project } from "../app/data/projects";
import Footer from "../app/Components/footer";
import CTA from "../app/Components/cta";

export interface ServiceCapability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceSubDetail {
  title: string;
  description: string;
  bullets?: string[];
  tags?: string[];
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  tag: string;
  title: string;
  introParagraph: string;
  heroGraphic: React.ReactNode;
  
  overviewHeading: string;
  overviewDescription: string;
  
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: ServiceCapability[];
  capabilitiesOutro?: string;
  
  deepDiveTitle: string;
  deepDiveIntro?: string;
  deepDiveItems: ServiceSubDetail[];
  
  faqs: ServiceFAQ[];
  projectTypeFilter: "Custom Code" | "Shopify Store" | "All";
}

export default function ServiceSlugPage({
  tag,
  title,
  introParagraph,
  heroGraphic,
  overviewHeading,
  overviewDescription,
  capabilitiesTitle,
  capabilitiesIntro,
  capabilities,
  capabilitiesOutro,
  deepDiveTitle,
  deepDiveIntro,
  deepDiveItems,
  faqs,
  projectTypeFilter,
}: ServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Dragging states
  const [startX, setStartX] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Filter projects by type on mount
  useEffect(() => {
    let filtered: Project[] = [];
    if (projectTypeFilter === "All") {
      filtered = PROJECTS_DATA.slice(0, 4);
    } else {
      filtered = PROJECTS_DATA.filter(
        (project) => project.projectType === projectTypeFilter
      ).slice(0, 4);
    }
    setFilteredProjects(filtered);
    setCurrentIndex(1);
  }, [projectTypeFilter]);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Display array with cloned elements at boundaries for seamless infinite looping
  const displayProjects = filteredProjects.length > 0 
    ? [
        filteredProjects[filteredProjects.length - 1],
        ...filteredProjects,
        filteredProjects[0],
      ]
    : [];

  const handlePrev = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isAnimating]);

  const handleNext = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating]);

  // Auto play logic: move slides every 4 seconds if not dragging
  useEffect(() => {
    if (isDragging || filteredProjects.length === 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isDragging, currentIndex, handleNext, filteredProjects.length]);

  // Transition wrapping reset
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(filteredProjects.length);
    } else if (currentIndex >= filteredProjects.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  // Re-enable transition after state has updated without it
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Drag / Swiping handlers
  const handleDragStart = (clientX: number) => {
    if (isAnimating) return;
    setStartX(clientX);
    setIsDragging(true);
    setIsTransitioning(false);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentOffset(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    const threshold = 60; // drag threshold to switch slides
    if (currentOffset < -threshold) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    } else if (currentOffset > threshold) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    } else {
      if (currentOffset !== 0) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    }
    setCurrentOffset(0);
  };

  // Touch Event Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  // Mouse Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header spacing offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Dimensional configuration
  const cardWidth = isMobile ? 280 : 440;
  const gap = isMobile ? 16 : 24;
  const itemWidth = cardWidth + gap;
  const shiftOffset = cardWidth / 2;

  // Real active index (0-indexed) for slide indicators
  let activeDotIndex = currentIndex - 1;
  if (currentIndex === 0) {
    activeDotIndex = filteredProjects.length - 1;
  } else if (currentIndex === filteredProjects.length + 1) {
    activeDotIndex = 0;
  }

  const quickLinks = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "deep-dive", label: "Deep Dive" },
    { id: "work", label: "Recent Work" },
    { id: "faqs", label: "FAQs" }
  ];

  return (
    <main className="w-full bg-[#FFFFFF] min-h-screen text-[#0C1833] overflow-x-hidden font-sans pt-24">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1833]/5 to-transparent pt-12 pb-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Breadcrumb Tag */}
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15] animate-pulse" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0C1833]/60">
                  {tag}
                </span>
              </div>

              {/* H1 Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-[#0C1833] max-w-2xl">
                {title}
              </h1>

              {/* Anchor Navigation Quick Links */}
              <div className="flex flex-wrap gap-2.5 my-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-[#0C1833]/5 text-[#0C1833] hover:bg-[#FACC15] hover:text-[#0C1833] border border-transparent hover:border-[#0C1833]/15 transition-all duration-300 shadow-sm cursor-pointer select-none"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Large Intro Paragraph */}
              <p className="text-lg md:text-xl text-[#0C1833]/80 leading-relaxed font-normal max-w-xl">
                {introParagraph}
              </p>
            </div>

            {/* Right Illustration Column (Replaces contact form) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Decorative background glows */}
              <div className="absolute inset-0 bg-[#FACC15]/20 rounded-[40px] blur-3xl -z-10 animate-pulse" style={{ animationDuration: "6s" }} />
              <div className="w-full max-w-[420px] aspect-square rounded-[36px] bg-[#0C1833] border-4 border-white shadow-2xl p-8 flex items-center justify-center relative group overflow-hidden">
                {/* SVG/Decorative Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between text-white">
                  {heroGraphic}
                </div>
                {/* Corner accent glow inside the card */}
                <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Intro / Overview Section */}
      <section id="overview" className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#0C1833]/60 uppercase px-3 py-1 rounded-full bg-[#0C1833]/5">
            Overview
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0C1833] leading-tight">
            {overviewHeading}
          </h2>
          <div className="w-16 h-[3px] bg-[#FACC15]" />
          <p className="text-base sm:text-lg text-[#0C1833]/75 leading-relaxed max-w-3xl">
            {overviewDescription}
          </p>
        </div>
      </section>

      {/* 3. Key Capabilities Grid Section */}
      <section id="capabilities" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FFFFFF] relative border-t border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0C1833]/50 block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0C1833] mb-5">
              {capabilitiesTitle}
            </h2>
            <p className="text-[#0C1833]/70 text-base sm:text-lg leading-relaxed">
              {capabilitiesIntro}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-zinc-150/70 hover:border-[#FACC15] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 relative overflow-hidden group"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FACC15] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#0C1833]/5 group-hover:bg-[#FACC15]/10 flex items-center justify-center text-[#0C1833] group-hover:text-[#0C1833] transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0C1833] group-hover:text-[#FACC15] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0C1833]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {capabilitiesOutro && (
            <p className="text-[#0C1833]/60 text-sm mt-12 text-center max-w-2xl mx-auto italic">
              {capabilitiesOutro}
            </p>
          )}
        </div>
      </section>

      {/* 4. Deep Dive / Detailed Sections */}
      <section id="deep-dive" className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0C1833]/50 block mb-3">
              Deep Dive
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0C1833] mb-5">
              {deepDiveTitle}
            </h2>
            {deepDiveIntro && (
              <p className="text-[#0C1833]/70 text-base sm:text-lg leading-relaxed">
                {deepDiveIntro}
              </p>
            )}
          </div>

          {/* Staggered Detail Blocks */}
          <div className="space-y-12">
            {deepDiveItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 md:p-10 rounded-[32px] bg-gradient-to-r from-zinc-50 to-white hover:from-white hover:to-zinc-50 border border-zinc-100/80 hover:border-[#FACC15]/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left: Number & Main Info */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="text-xs font-bold text-[#FACC15] font-mono tracking-widest">
                    0{idx + 1} / STAGE
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0C1833]">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Custom badges if any */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.tags.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0C1833]/5 text-[#0C1833]/70 border border-[#0C1833]/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Bullet Points */}
                <div className="lg:col-span-7 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-zinc-200/80 lg:pl-10 pt-6 lg:pt-0">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C1833]/40">Key Deliverables</h4>
                  <ul className="space-y-3.5">
                    {item.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3.5 text-zinc-700 text-sm">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-[#FACC15]/20 flex items-center justify-center text-[#0C1833] text-xs font-bold">
                          ✓
                        </span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recent Work Portfolio Section */}
      {filteredProjects.length > 0 && (
        <section id="work" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FFFFFF] text-[#0C1833] overflow-hidden relative border-t border-zinc-100">
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center mb-16 text-center">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#0C1833]/60 uppercase px-3 py-1 rounded-full bg-[#0C1833]/5 mb-3">
                Recent Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0C1833] uppercase">
                Featured Projects
              </h2>
            </div>

            {/* Carousel Draggable Wrapper */}
            <div
              ref={containerRef}
              className="relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[500px] cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleDragEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
            >
              {/* Left Arrow Button (Desktop Only) */}
              <div className="hidden md:block absolute left-0 sm:left-4 z-30">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-zinc-50 active:scale-95 transition-all cursor-pointer group"
                  aria-label="Previous project"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0C1833]/5 group-hover:bg-[#FACC15] transition-colors flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0C1833] fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Right Arrow Button (Desktop Only) */}
              <div className="hidden md:block absolute right-0 sm:right-4 z-30">
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-zinc-50 active:scale-95 transition-all cursor-pointer group"
                  aria-label="Next project"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0C1833]/5 group-hover:bg-[#FACC15] transition-colors flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0C1833] fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Carousel Visual Viewport */}
              <div className="relative w-full h-[410px] sm:h-[450px] overflow-visible">
                {/* Gradient Overlay Fade Left */}
                <div className="absolute left-0 top-0 bottom-0 w-1/6 md:w-1/4 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent pointer-events-none z-20" />
                {/* Gradient Overlay Fade Right */}
                <div className="absolute right-0 top-0 bottom-0 w-1/6 md:w-1/4 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/90 to-transparent pointer-events-none z-20" />

                {/* Slider Row */}
                <div
                  className="absolute left-1/2 top-1/2 flex transition-transform duration-500 ease-out"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    gap: `${gap}px`,
                    transform: `translateX(calc(-${currentIndex * itemWidth}px - ${shiftOffset}px + ${currentOffset}px)) translateY(-50%)`,
                    transition: isTransitioning ? "transform 500ms ease-out" : "none",
                    width: `${displayProjects.length * itemWidth}px`,
                  }}
                >
                  {displayProjects.map((project, idx) => {
                    const isActive = idx === currentIndex;
                    const isLeft = idx === currentIndex - 1;
                    const isRight = idx === currentIndex + 1;

                    let cardStyle = "opacity-0 scale-75 blur-[2px] pointer-events-none";
                    if (isActive) {
                      cardStyle = "opacity-100 scale-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-[#FACC15] z-10 translate-y-[-4px] bg-white";
                    } else if (isLeft || isRight) {
                      cardStyle = "opacity-0 scale-90 pointer-events-none";
                    }

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (isLeft) handlePrev();
                          if (isRight) handleNext();
                        }}
                        style={{ width: `${cardWidth}px` }}
                        className={`h-[380px] sm:h-[420px] shrink-0 bg-white border rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 ease-out select-none ${cardStyle}`}
                      >
                        <div>
                          {/* Visual Mockup Container */}
                          <div className="w-full aspect-[16/10] rounded-2xl bg-zinc-900 border border-zinc-200/50 overflow-hidden mb-6 relative">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono border border-white/10 flex items-center gap-1.5">
                              <span>{project.flag}</span>
                              <span className="uppercase font-bold tracking-wider text-white">{project.projectType}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold tracking-tight mb-2 text-[#0C1833] group-hover:text-[#FACC15] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tags.map((t) => (
                              <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-zinc-100 text-zinc-700">
                                {t}
                              </span>
                            ))}
                          </div>

                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-[#0C1833] hover:text-[#FACC15] transition-colors group/link mt-auto"
                          >
                            <span>Visit website</span>
                            <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setIsTransitioning(true);
                    setCurrentIndex(idx + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeDotIndex ? "w-6 bg-[#FACC15]" : "w-1.5 bg-zinc-200 hover:bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Abstract mesh overlay in background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(250,204,21,0.06),transparent_50%)] pointer-events-none" />
        </section>
      )}

      {/* 6. FAQ Accordion Section */}
      <section id="faqs" className="py-24 px-6 sm:px-8 lg:px-12 bg-white border-t border-zinc-100 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0C1833]/50 block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0C1833] uppercase leading-[1.1] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-[#0C1833]/70 text-sm leading-relaxed max-w-sm">
              We&apos;ve answered the most common questions about our capabilities and how we work with client partners. For anything else, reach out directly.
            </p>
          </div>

          {/* Right Block Accordion */}
          <div className="lg:col-span-7 border-t border-zinc-100">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-b border-zinc-100">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-6 flex justify-between items-center text-left gap-4 hover:text-[#0C1833] focus:outline-none group select-none cursor-pointer"
                  >
                    <span className="text-[16px] sm:text-lg font-bold text-[#0C1833]/90 leading-snug group-hover:text-[#FACC15] transition-colors duration-300">
                      {faq.q}
                    </span>
                    <span className="text-xl font-bold text-[#0C1833]/30 group-hover:text-[#FACC15] select-none flex-shrink-0 transition-colors">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-zinc-500 text-sm sm:text-base leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Block (no form, directs to /ContactUs) */}
      <CTA />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
