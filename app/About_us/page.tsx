"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";
import FAQ from "../Components/FAQ";
import CurvedLoop from "@/components/CurvedLoop";

const AnimatedCounter = ({ target, suffix = "", duration = 1500 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};


const teamMembers = [
  {
    name: "Ankita Malik",
    role: "Founder & Web Developer",
    bio: "Leading DesignNCode with a focus on business strategy, creative direction and building meaningful digital experiences for ambitious brands.",
    imageSrc: "/Ankita.webp",
  },
  {
    name: "Bhavya",
    role: "Software Developer",
    bio: "Focused on building reliable and scalable digital solutions while bringing modern development practices to every project.",
    imageSrc: "/Bhavya.webp",
  },
  {
    name: "Zaib",
    role: "UI/UX Designer & Frontend Developer",
    bio: "Bringing UI/UX design and frontend development together to create interfaces that are visually engaging, responsive and easy to use.",
    imageSrc: "/Zaib.webp",
  },
  {
    name: "Piyush",
    role: "Junior Software Developer",
    bio: "Supporting development projects while learning and contributing to modern web development and digital product experiences.",
    imageSrc: "/Piyush.webp",
  },
];

const statsItems = [
  {
    target: 40,
    suffix: "+",
    label: "Projects",
    desc: "Websites, digital products, e-commerce experiences and creative projects delivered for growing businesses.",
  },
  {
    target: 12,
    suffix: "+",
    label: "Industries",
    desc: "Experience across technology, e-commerce, finance, SaaS, professional services and other digital industries.",
  },
  {
    target: 100,
    suffix: "%",
    label: "Focus on Quality",
    desc: "Every project receives focused attention across strategy, design, development and final execution.",
  },
];

const storyData = {
  kicker: "Our Story",
  title: "Craft that started with a simple promise",
  paragraphs: [
    "DesignNCode started with a simple belief: great digital experiences should never be a compromise between design, technology and business goals.",
    "From our first project, we have focused on creating websites and digital products where every detail has a purpose. From the structure of a landing page to the smallest interaction, we think about usability, performance, visual quality and the people using the product.",
    "Today, our expertise spans UI/UX design, web development, e-commerce, Shopify, digital products and modern web technologies. We bring designers and developers together to create experiences that are not only visually engaging but also fast, responsive and built to perform.",
    "For us, success is more than delivering a beautiful interface. It is creating a website that converts, a product that users understand or a digital experience that helps a business move forward. That is the kind of work we are proud to build."
  ],
  cards: [
    {
      title: "Consistent Branding",
      description: "We create digital experiences that stay consistent with your brand across websites, products, campaigns and customer touchpoints."
    },
    {
      title: "Smart Design & Development",
      description: "We combine thoughtful UI/UX design with modern development to create experiences that are visually strong, functional and easy to use."
    },
    {
      title: "Scalable Solutions",
      description: "We build digital experiences with performance, flexibility and future growth in mind, helping your website or product evolve with your business."
    }
  ]
};

export default function AboutUs() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
    } else {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = carouselRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftStart(container.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = carouselRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftStart - walk;
  };

  return (
    <main className="relative flex flex-col flex-1 overflow-hidden pt-20 bg-transparent">
      {/* ── About Us Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center pt-8 pb-24 sm:pt-12 sm:pb-16 lg:pt-8 lg:pb-12 px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background glow effects */}
       

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center px-4 sm:px-6 -mt-8 sm:-mt-10 lg:-mt-14">
          
          {/* Header Title */}
          <h1 className="text-4xl sm:text-6xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-tight max-w-4xl mb-3 sm:mb-4">
            What&apos;s{" "}
            <span className="inline-flex items-center align-middle mx-1.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 p-2 rounded-xl shadow-md border border-zinc-800 w-10 h-10 sm:w-12 sm:h-12 justify-center">
              <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>{" "}
            the deal with{" "}
            <span className="relative bg-gradient-to-r from-sky-500 via-rose-500 to-amber-500 bg-clip-text text-transparent decoration-blue-500/30 decoration-2 underline-offset-8">
              Designncode?
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-6 sm:mb-8">
            We create beautiful, seamless digital experiences through UI/UX design, web development, and smart strategy that help businesses grow.
          </p>

          {/* Interactive Orbiting Visuals Area */}
          <div className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center select-none -mt-2 sm:-mt-3 md:p-[10px]">
            <Image
              src="/About us New.svg"
              alt="About Us Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Curved Loop for Mobile Version */}
        <CurvedLoop
          marqueeText="DESIGNNCODE • DESIGN • ENGINEERING • MARKETING • DEVELOPMENT • "
          className="fill-[#000000] font-extrabold uppercase"
          containerClassName="block md:hidden absolute bottom-[8%] left-0 right-0 w-full h-[120px] flex items-center justify-center select-none overflow-hidden z-20"
          curveAmount={80}
          speed={1.5}
        />
      </section>



      {/* ── Our Story Section ── */}
      <section className="relative w-full max-w-7xl mx-auto -mt-10 sm:mt-0 pt-2 pb-16 sm:py-16 px-6 sm:px-8 lg:px-12 z-10">
        {/* Top block: left kicker/title, right paragraphs */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-[45%] flex flex-col items-start">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm select-none">
              <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="2" width="3" height="3" rx="0.5" />
                <rect x="7" y="2" width="3" height="3" rx="0.5" />
                <rect x="2" y="7" width="3" height="3" rx="0.5" />
                <rect x="7" y="7" width="3" height="3" rx="0.5" />
                <rect x="2" y="12" width="3" height="3" rx="0.5" />
                <rect x="7" y="12" width="3" height="3" rx="0.5" />
              </svg>
              <span>{storyData.kicker}</span>
            </div>
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mt-4 leading-tight">
              {storyData.title}
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[50%] flex flex-col gap-6 text-black text-md sm:text-base leading-relaxed font-light">
            {storyData.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>

        {/* ─── Our Values Section ─── */}
        <div className="mt-28">
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-none::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {/* Desktop View (md and up) */}
          <div className="hidden md:block max-w-5xl mx-auto">
            {/* Header Block */}
            <div className="flex flex-col justify-center text-left pr-4 mb-10">
              <span className="text-xs font-regular tracking-[0.2em] text-[#000000] mb-3">
                Why DesignNCode
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-[#000000] leading-[1.1]">
                Trusted by businesses for digital & design success
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base font-medium mt-3 max-w-2xl">
                We believe great digital work comes from combining creative thinking with a clear understanding of business goals.
              </p>
            </div>

            {/* Three Cards in a Row */}
            <div className="grid grid-cols-3 gap-8 items-stretch">
              {/* Card 1: Pastel Sky */}
              <div className="rounded-[28px] bg-[#e0f2fe]/95 backdrop-blur-sm border border-sky-200/80 text-zinc-900 p-7 flex flex-col justify-between h-[270px] select-none cursor-default shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Layer Stack Icon */}
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-600 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl tracking-tight mb-2 uppercase leading-none text-zinc-900">
                    Consistent Branding
                  </h3>
                  <p className="text-xs font-medium text-zinc-600 leading-relaxed">
                    We create digital experiences that stay consistent with your brand across websites, products, campaigns and customer touchpoints.
                  </p>
                </div>
              </div>

              {/* Card 2: Pastel Rose */}
              <div className="rounded-[28px] bg-[#ffe4e6]/95 backdrop-blur-sm border border-rose-200/80 text-zinc-900 p-7 flex flex-col justify-between h-[270px] select-none cursor-default shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Nodes/Connections Icon */}
                <div className="w-12 h-12 rounded-2xl bg-rose-500/15 text-rose-600 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A3 3 0 1018 2A3 3 0 0018 8zM6 15A3 3 0 106 9A3 3 0 006 15zM18 22A3 3 0 1018 16A3 3 0 0018 22z" />
                    <path d="M8.59 13.51l5.83 3.4M14.4 7.1l-5.8 3.4" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl tracking-tight mb-2 uppercase leading-none text-zinc-900">
                    Smart Design & Development
                  </h3>
                  <p className="text-xs font-medium text-zinc-600 leading-relaxed">
                    We combine thoughtful UI/UX design with modern development to create experiences that are visually strong, functional and easy to use.
                  </p>
                </div>
              </div>

              {/* Card 3: Pastel Emerald */}
              <div className="rounded-[28px] bg-[#ecfdf5]/95 backdrop-blur-sm border border-emerald-200/80 text-zinc-900 p-7 flex flex-col justify-between h-[270px] select-none cursor-default shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Scale/Resize Icon */}
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12H5M12 5l3 3M12 5L9 8M12 19l3-3M12 19l-3-3" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl tracking-tight mb-2 uppercase leading-none text-zinc-900">
                    Scalable Solutions
                  </h3>
                  <p className="text-xs font-medium text-zinc-600 leading-relaxed">
                    We build digital experiences with performance, flexibility and future growth in mind, helping your website or product evolve with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel View (md:hidden) */}
          <div className="block md:hidden max-w-md mx-auto">
            {/* Header */}
            <div className="flex flex-col justify-center text-left px-6 mb-6">
              <span className="text-xs font-regular tracking-[0.2em] text-[#000000] mb-2">
                Why DesignNCode
              </span>
              <h2 className="text-3xl font-medium uppercase tracking-tight text-[#000000] leading-[1.1]">
                Trusted by businesses for digital & design success
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm font-medium mt-2">
                We believe great digital work comes from combining creative thinking with a clear understanding of business goals.
              </p>
            </div>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none cursor-grab active:cursor-grabbing px-6 py-2"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {/* Card 1: Pastel Sky */}
              <div className="snap-center shrink-0 w-[82vw] max-w-[280px] rounded-[28px] bg-[#e0f2fe]/95 backdrop-blur-sm border border-sky-200/80 text-zinc-900 p-6 flex flex-col justify-between h-[250px] select-none shadow-md">
                {/* Layer Stack Icon */}
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-600 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg tracking-tight mb-1.5 uppercase leading-none text-zinc-900">
                    Consistent Branding
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    We create digital experiences that stay consistent with your brand across websites, products, campaigns and customer touchpoints.
                  </p>
                </div>
              </div>

              {/* Card 2: Pastel Rose */}
              <div className="snap-center shrink-0 w-[82vw] max-w-[280px] rounded-[28px] bg-[#ffe4e6]/95 backdrop-blur-sm border border-rose-200/80 text-zinc-900 p-6 flex flex-col justify-between h-[250px] select-none shadow-md">
                {/* Nodes/Connections Icon */}
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-600 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A3 3 0 1018 2A3 3 0 0018 8zM6 15A3 3 0 106 9A3 3 0 006 15zM18 22A3 3 0 1018 16A3 3 0 0018 22z" />
                    <path d="M8.59 13.51l5.83 3.4M14.4 7.1l-5.8 3.4" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg tracking-tight mb-1.5 uppercase leading-none text-zinc-900">
                    Smart Design & Development
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    We combine thoughtful UI/UX design with modern development to create experiences that are visually strong, functional and easy to use.
                  </p>
                </div>
              </div>

              {/* Card 3: Pastel Emerald */}
              <div className="snap-center shrink-0 w-[82vw] max-w-[280px] rounded-[28px] bg-[#ecfdf5]/95 backdrop-blur-sm border border-emerald-200/80 text-zinc-900 p-6 flex flex-col justify-between h-[250px] select-none shadow-md">
                {/* Scale/Resize Icon */}
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12H5M12 5l3 3M12 5L9 8M12 19l3-3M12 19l-3-3" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg tracking-tight mb-1.5 uppercase leading-none text-zinc-900">
                    Scalable Solutions
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    We build digital experiences with performance, flexibility and future growth in mind, helping your website or product evolve with your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 flex justify-center">
              <div className="relative w-[120px] h-[3px] bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 bottom-0 bg-zinc-900 rounded-full transition-transform duration-100 ease-out"
                  style={{
                    width: "40px",
                    transform: `translateX(${(scrollProgress / 100) * 80}px)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="relative w-full max-w-6xl mx-auto py-20 px-6 sm:px-8 lg:px-12 z-10 border-t border-zinc-100 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {statsItems.map((item, index) => (
            <div key={index} className="flex flex-col text-left">
              {/* Number */}
              <div className="text-[64px] sm:text-[80px] font-bold text-zinc-950 tracking-tight leading-none">
                <AnimatedCounter target={item.target} suffix={item.suffix} />
              </div>
              
              {/* Horizontal line divider */}
              <div className="h-[2px] bg-gradient-to-r from-sky-400/50 via-rose-400/50 to-amber-400/50 w-full mt-4 mb-4 rounded-full" />
              
              {/* Label */}
              <p className="text-zinc-900 font-bold text-base tracking-wide uppercase">
                {item.label}
              </p>
              <p className="text-zinc-500 font-medium text-xs sm:text-sm mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Meet the Team Section ── */}
      <section className="relative w-full max-w-6xl mx-auto py-24 px-6 sm:px-8 lg:px-12 z-10 -mt-16">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-tight flex items-center justify-center flex-wrap gap-2 md:gap-3">
            <span>Meet the</span>
            <span className="relative inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mx-1.5 align-middle select-none">
              <svg className="w-full h-full drop-shadow-md" viewBox="0 0 64 64" fill="none">
                <defs>
                  <linearGradient id="lensBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4b5563" />
                    <stop offset="50%" stopColor="#1f2937" />
                    <stop offset="100%" stopColor="#111827" />
                  </linearGradient>
                  <linearGradient id="metalRing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f4f4f5" />
                    <stop offset="30%" stopColor="#d4d4d8" />
                    <stop offset="70%" stopColor="#52525b" />
                    <stop offset="100%" stopColor="#27272a" />
                  </linearGradient>
                  <radialGradient id="lensGlass" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#27272a" />
                    <stop offset="70%" stopColor="#09090b" />
                    <stop offset="100%" stopColor="#020202" />
                  </radialGradient>
                </defs>
                {/* Outer dark square */}
                <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#lensBg)" stroke="#09090b" strokeWidth="1.5" />
                {/* Inner highlight border for metal feel */}
                <rect x="3" y="3" width="58" height="58" rx="15" stroke="#9ca3af" strokeWidth="1" strokeOpacity="0.4" fill="none" />
                {/* Outer metallic ring */}
                <circle cx="32" cy="32" r="18" fill="url(#metalRing)" />
                {/* Inner dark lens ring */}
                <circle cx="32" cy="32" r="14" fill="url(#lensGlass)" stroke="#09090b" strokeWidth="1.5" />
                {/* Lens reflection glint */}
                <ellipse cx="27" cy="27" rx="3.5" ry="2" transform="rotate(-30 27 27)" fill="#ffffff" opacity="0.7" />
                <circle cx="32" cy="32" r="3" fill="#18181b" opacity="0.8" />
                <circle cx="32" cy="32" r="1" fill="#e4e4e7" />
              </svg>
            </span>
            <span>team</span>
          </h2>
          <h3 className="text-zinc-800 font-bold text-base sm:text-lg uppercase tracking-wider mt-4">
            IT&apos;S NOT JUST WHAT WE DO. IT&apos;S WHO WE ARE.
          </h3>
          <p className="text-zinc-500 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl mx-auto">
            Behind every DesignNCode project is a team of designers, developers and digital thinkers who care about solving problems and creating work that makes an impact. We bring different skills and perspectives together to turn ideas into useful, memorable and high-performing digital experiences.
          </p>
        </div>

        {/* Team Grid (Portrait Cards Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const teamAccents = [
              { border: "hover:border-sky-400", badge: "bg-sky-400/20 text-sky-200 border-sky-400/30" },
              { border: "hover:border-rose-400", badge: "bg-rose-400/20 text-rose-200 border-rose-400/30" },
              { border: "hover:border-emerald-400", badge: "bg-emerald-400/20 text-emerald-200 border-emerald-400/30" },
              { border: "hover:border-amber-400", badge: "bg-amber-400/20 text-amber-200 border-amber-400/30" }
            ];
            const accent = teamAccents[index % teamAccents.length];

            return (
              <div 
                key={index}
                className={`relative rounded-[32px] overflow-hidden aspect-[3/4] shadow-md border border-white/20 ${accent.border} hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group cursor-pointer bg-zinc-900`}
              >
                {/* Starry Sky Card Background */}
                <Image
                  src="/pexels-kseniya-budko-58499146-7952548.webp"
                  alt="Card background"
                  fill
                  loading="lazy"
                  quality={80}
                  className="object-cover absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Background Image */}
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 relative z-10"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Bottom Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none z-20" />

                {/* Info Text Overlay at Bottom-Left */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-30">
                  <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight leading-none mb-2">
                    {member.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${accent.badge}`}>
                    {member.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      
      {/* ── Engineering & Architectural Principles Section ── */}
      <section className="relative w-full max-w-6xl mx-auto py-16 px-6 sm:px-8 lg:px-12 z-10 border-t border-zinc-100">
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D2A02A] block mb-2">Our Engineering Standard</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            How We Engineer Digital Products That Last
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
            We reject fragile shortcuts, unnecessary dependency bloat, and disposable code. Our cross-functional studio unites senior UI/UX designers and full-stack software engineers around four core product commitments:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Server-First React &amp; Next.js 16</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              We leverage React Server Components to execute heavy database queries and component logic at the cloud edge, streaming lightweight, semantic HTML directly to client browsers without transmitting unnecessary JavaScript bundles.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Atomic Design Token Architecture</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Visual styles—colors, typography scales, margins, and animation curves—are codified as machine-readable JSON tokens in Figma. These tokens synchronize automatically with Tailwind CSS, eliminating visual regression and design debt.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Zero-Trust Security &amp; Privacy</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              By decoupling frontend user interfaces from core databases and executing on immutable serverless edge containers, we eliminate public SQL injection vectors and guarantee strict compliance with UK GDPR and global data protection laws.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
              04
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Universal WCAG 2.2 AA Accessibility</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Digital products must be universally usable. We integrate automated Playwright accessibility test suites into continuous integration pipelines to guarantee contrast compliance, keyboard focus rings, and screen-reader accessibility.
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Footer component */}
      <Footer />
    </main>
  );
}
