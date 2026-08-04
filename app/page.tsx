"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import SpecularButton from "@/components/SpecularButton";
import Footer from "./Components/footer";
import CTA from "./Components/cta";
import FAQ from "./Components/FAQ";
import { PROJECTS_DATA } from "./data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Data ─── */

const services = [
  {
    title: "UI/UX Design",
    description: "Expert Design Partners (and good listeners)",
    href: "/Service/ui_ux",
    accent: "from-blue-400/30 via-blue-500/10 to-transparent",
    iconBg: "from-blue-500 to-blue-700",
    image: "/Design.svg",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14 drop-shadow-lg" fill="none">
        <path
          d="M24 4L8 14v20l16 10 16-10V14L24 4z"
          fill="url(#penGrad)"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <path d="M24 14v20M8 14l16 10 16-10" stroke="#93c5fd" strokeWidth="1.5" />
        <defs>
          <linearGradient id="penGrad" x1="8" y1="4" x2="40" y2="44">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>
    ),
    features: [
      { title: "Bring ideas to life", desc: "Aligned with your brand vision", image: "/1.svg" },
      { title: "Industry Leading UX", desc: "Our expertise, at your disposal", image: "/2.svg" },
    ],
  },
  {
    title: "Performance Marketing",
    description: "Bring your users into focus.",
    href: "/marketing",
    accent: "from-violet-400/30 via-violet-500/10 to-transparent",
    iconBg: "from-violet-500 to-purple-700",
    image: "/Data.svg",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14 drop-shadow-lg" fill="none">
        <circle cx="24" cy="24" r="18" fill="url(#targetGrad)" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="10" stroke="#93c5fd" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" fill="#dbeafe" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="targetGrad" x1="6" y1="6" x2="42" y2="42">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>
    ),
    features: [
      { title: "Personalised Insights", desc: "The data that matters most", image: "/3.svg" },
      { title: "Optimised Interactions", desc: "Data-driven UX Strategy", image: "/4.svg" },
    ],
  },
  {
    title: "Web Development",
    description: "What if Technology wasn't an obstacle?",
    href: "/webd",
    accent: "from-fuchsia-400/30 via-fuchsia-500/10 to-transparent",
    iconBg: "from-fuchsia-500 to-pink-700",
    image: "/Web.svg",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14 drop-shadow-lg" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="10" fill="url(#codeGrad)" stroke="#c026d3" strokeWidth="1.5" />
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="monospace">
          {"</>"}
        </text>
        <defs>
          <linearGradient id="codeGrad" x1="6" y1="6" x2="42" y2="42">
            <stop stopColor="#e879f9" />
            <stop offset="1" stopColor="#a21caf" />
          </linearGradient>
        </defs>
      </svg>
    ),
    features: [
      { title: "Faster Time to Market", desc: "Accelerated through composability", image: "/5.svg" },
      { title: "Infinite Scalability", desc: "Agile foundations for growth", image: "/6.svg" },
    ],
  },
];

const projects = PROJECTS_DATA.slice(0, 4).map((project, idx) => ({
  ...project,
  stagger: idx % 2 === 1,
}));
const ClientLogo1 = () => (
  <img
    src="/LOGO DESIGNNCODE/Logo_Primary_Logo 1.png"
    alt="Client Logo 1"
    className="h-[55px] max-w-[200px] object-contain md:brightness-0 select-none shrink-0"
  />
);

const ClientLogo2 = () => (
  <img
    src="/LOGO DESIGNNCODE/Logo_Lockup__1_-removebg-preview 1.png"
    alt="Client Logo 2"
    className="h-[55px] max-w-[200px] object-contain md:brightness-0 select-none shrink-0"
  />
);

const ClientLogo3 = () => (
  <img
    src="/LOGO DESIGNNCODE/Anyadha-removebg-preview 1.png"
    alt="Client Logo 3"
    className="h-[42px] max-w-[156px] object-contain md:brightness-0 select-none shrink-0"
  />
);

const ClientLogo4 = () => (
  <img
    src="/LOGO DESIGNNCODE/foire_logo_1_-01-removebg-preview 1.png"
    alt="Client Logo 4"
    className="h-[42px] max-w-[156px] object-contain md:brightness-0 select-none shrink-0"
  />
);

const ClientLogo5 = () => (
  <img
    src="/LOGO DESIGNNCODE/transparent-D0veniAb__1_-removebg-preview 1.png"
    alt="Client Logo 5"
    className="h-[42px] max-w-[156px] object-contain md:brightness-0 select-none shrink-0"
  />
);

const ClientLogo6 = () => (
  <img
    src="/LOGO DESIGNNCODE/Asset_1_2x_1-removebg-preview 1.png"
    alt="Client Logo 6"
    className="h-[42px] max-w-[156px] object-contain md:brightness-0 select-none shrink-0"
  />
);

const ClientLogo7 = () => (
  <img
    src="/LOGO DESIGNNCODE/logo-01_400x200-removebg-preview 1.png"
    alt="Client Logo 7"
    className="h-[42px] max-w-[156px] object-contain md:brightness-0 select-none shrink-0"
  />
);

const ClientLogo8 = () => (
  <img
    src="/LOGO DESIGNNCODE/Group_7-removebg-preview 1.png"
    alt="Client Logo 8"
    className="h-[42px] max-w-[156px] object-contain md:brightness-0 select-none shrink-0"
  />
);

const logoPool1 = [<ClientLogo1 key="l1" />, <ClientLogo2 key="l2" />, <ClientLogo3 key="l3" />, <ClientLogo4 key="l4" />, <ClientLogo5 key="l5" />, <ClientLogo6 key="l6" />, <ClientLogo7 key="l7" />, <ClientLogo8 key="l8" />];
const logoPool2 = [<ClientLogo1 key="l1" />, <ClientLogo3 key="l3" />, <ClientLogo5 key="l5" />, <ClientLogo7 key="l7" />];
const logoPool3 = [<ClientLogo2 key="l2" />, <ClientLogo4 key="l4" />, <ClientLogo6 key="l6" />, <ClientLogo8 key="l8" />];
const logoPool4 = [<ClientLogo7 key="l7" />, <ClientLogo8 key="l8" />, <ClientLogo1 key="l1" />, <ClientLogo2 key="l2" />, <ClientLogo3 key="l3" />, <ClientLogo4 key="l4" />, <ClientLogo5 key="l5" />, <ClientLogo6 key="l6" />];

const mobileTestimonials = [
  {
    quote: "We chose Designncode for their commitment to partnership. They were willing to build with us, experiment, and learn what works. We didn't know what was possible at first, but the quality of the output now is incredibly impressive.",
    name: "Zoë McKenzie",
    role: "Director of RevOps Technology at Checkr",
    avatar: "/jennifer.png",
    logo: <ClientLogo1 />
  },
  {
    quote: "Designncode became the execution layer behind our inbound and outbound motions. It made our sales operation leaner, more efficient, and easier to scale.",
    name: "Mark Deacon",
    role: "Chief Revenue Operations Officer at canibuild",
    avatar: "/charlie.png",
    logo: <ClientLogo2 />
  }
];

function SlotMachineLogo({
  logos,
  interval = 3500,
  staggerDelay = 0,
  align = "center",
  logoClassName = "",
}: {
  logos: React.ReactNode[];
  interval?: number;
  staggerDelay?: number;
  align?: "left" | "center";
  logoClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone first item to create a seamless scroll loop
  const displayLogos = [...logos, logos[0]];

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        setIsTransitioning(true);
        setIndex((prev) => {
          if (prev >= logos.length) {
            return 1;
          }
          return prev + 1;
        });
      }, interval);

      return () => clearInterval(timer);
    }, staggerDelay);

    return () => clearTimeout(startTimeout);
  }, [logos.length, interval, staggerDelay]);

  const handleTransitionEnd = () => {
    if (index >= logos.length) {
      setIsTransitioning(false);
      setIndex(0);
    }
  };

  return (
    <div className={`relative h-[62px] overflow-hidden w-full flex ${align === "left" ? "justify-start" : "justify-center"}`}>
      <div
        className="flex flex-col w-full"
        style={{
          transition: isTransitioning ? "transform 700ms cubic-bezier(0.76, 0, 0.24, 1)" : "none",
          transform: `translateY(-${index * 62}px)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {displayLogos.map((logo, idx) => (
          <div
            key={idx}
            className={`h-[62px] w-full flex items-center ${align === "left" ? "justify-start" : "justify-center"} flex-shrink-0`}
          >
            <div className={`${logoClassName} flex items-center justify-center`}>
              {logo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Helpers ─── */

function GradientHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#5DE0E6] to-[#AD8BFF] bg-clip-text text-transparent font-medium">
      {children}
    </span>
  );
}

function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden flex justify-center -mb-10 sm:-mb-28 md:-mb-36 pointer-events-none select-none">
      <Image
        src="/Effect.png"
        alt="Section Divider Effect"
        width={1555}
        height={623}
        className="w-[80%] h-auto object-contain opacity-90"
      />
    </div>
  );
}



/* ─── Page ─── */

export default function Home() {

  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const flowSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = flowSectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".flow-step-card");
    if (cards.length === 0) return;

    // Set initial state immediately on mount so they are hidden before scroll
    gsap.set(cards, { y: 60, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          overwrite: "auto",
        });
      },
      onLeaveBack: () => {
        gsap.set(cards, { y: 60, opacity: 0 });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);





  const [activePartner, setActivePartner] = useState(0);
  const touchPartnerStartX = useRef(0);
  const touchPartnerEndX = useRef(0);

  const handlePartnerTouchStart = (e: React.TouchEvent) => {
    touchPartnerStartX.current = e.targetTouches[0].clientX;
    touchPartnerEndX.current = e.targetTouches[0].clientX;
  };

  const handlePartnerTouchMove = (e: React.TouchEvent) => {
    touchPartnerEndX.current = e.targetTouches[0].clientX;
  };

  const handlePartnerTouchEnd = () => {
    const diff = touchPartnerStartX.current - touchPartnerEndX.current;
    if (diff > 50) {
      setActivePartner((prev) => Math.min(prev + 1, 2));
    }
    if (diff < -50) {
      setActivePartner((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <main className="relative flex flex-col flex-1 overflow-hidden pt-0 bg-[#F4F8FF]">
      {/* ── 1. Hero with Background Video ── */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 sm:px-12 lg:px-20 overflow-hidden bg-black text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-20 [--hero-br:28px] md:[--hero-br:42px]"
        style={{
          borderBottomLeftRadius: "var(--hero-br-active)",
          borderBottomRightRadius: "var(--hero-br-active)",
          // @ts-ignore
          "--hero-br-active": `calc(var(--hero-br) * ${1 - Math.min(scrollY / 300, 1)})`
        } as React.CSSProperties}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 brightness-[0.85]"
        >
          <source src="/Hero_VOD.webm" type="video/webm" />
        </video>

        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none z-0" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center flex-1 max-w-4xl mx-auto w-full text-center">
          {/* Badge / Kicker */}
          <div className="flex items-center justify-center gap-2 mb-6 select-none animate-fade-in-up">
            <span className="text-xs sm:text-sm font-regular tracking-wider uppercase text-white/95 flex items-center gap-2">
              <span>🌅</span> HELPED +200 FOUNDERS RISE THEIR BRANDS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] text-center text-white max-w-4xl animate-fade-in-up [animation-delay:200ms] mb-8">
            We build design on <br />
            clarity, speed, and <span className="text-[#facc15] font-medium">care.</span>
          </h1>

          {/* Description & Buttons */}
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center animate-fade-in-up [animation-delay:400ms]">
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto">
              We create thoughtful work through a refined process, guided by clear thinking and a deep respect for time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 select-none w-full sm:w-auto">
              <SpecularButton
                href="/ContactUs"
                variant="primary"
                className="w-[80%] sm:w-auto px-6 py-2.5 text-center"
                baseColor="#18181b"
                textColor="#ffffff"
                lineColor="#ffffff"
                radius={9999}
                intensity={1.2}
              >
                Start a Project
              </SpecularButton>
              <SpecularButton
                href="/Projects"
                variant="secondary"
                className="w-[80%] sm:w-auto px-6 py-2.5 text-center"
                baseColor="#18181b"
                textColor="#ffffff"
                lineColor="#ffffff"
                radius={9999}
                intensity={1.2}
              >
                Explore Projects
              </SpecularButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1.2 Tools Marquee Section ── */}
      <section className="relative w-full bg-[#F4F8FF] py-10 overflow-hidden select-none z-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 mb-6 text-center">
            Core technologies & tools we use
          </p>
          <div className="relative flex w-full max-w-full overflow-hidden">
            <div className="flex gap-10 items-center shrink-0 animate-marquee pr-10 whitespace-nowrap">
              {[
                "/Tools_Color/1.svg",
                "/Tools_Color/2.svg",
                "/Tools_Color/3.svg",
                "/Tools_Color/4.svg",
                "/Tools_Color/5.svg",
                "/Tools_Color/6.svg",
                "/Tools_Color/7.svg",
                "/Tools_Color/75.svg",
                "/Tools_Color/76.svg",
                "/Tools_Color/77.svg",
                "/Tools_Color/78.svg",
                "/Tools_Color/79.svg",
                "/Tools_Color/80.svg",
                "/Tools_Color/81.svg",
                "/Tools_Color/82.svg",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Tool Logo ${i + 1}`}
                  width={150}
                  height={48}
                  className="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>
            <div className="flex gap-10 items-center shrink-0 animate-marquee pr-10 whitespace-nowrap" aria-hidden="true">
              {[
                "/Tools_Color/1.svg",
                "/Tools_Color/2.svg",
                "/Tools_Color/3.svg",
                "/Tools_Color/4.svg",
                "/Tools_Color/5.svg",
                "/Tools_Color/6.svg",
                "/Tools_Color/7.svg",
                "/Tools_Color/75.svg",
                "/Tools_Color/76.svg",
                "/Tools_Color/77.svg",
                "/Tools_Color/78.svg",
                "/Tools_Color/79.svg",
                "/Tools_Color/80.svg",
                "/Tools_Color/81.svg",
                "/Tools_Color/82.svg",
              ].map((src, i) => (
                <Image
                  key={`dup-${i}`}
                  src={src}
                  alt=""
                  width={150}
                  height={48}
                  className="h-10 sm:h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ── Why Choose Us ── */}
      <section className="relative bg-[#F4F8FF] py-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-zinc-200/40 z-10 -mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Staggered Stats & Dots */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 items-start select-none order-2 lg:order-none">
            {/* Column 1: Dot, 3.2S, Dot */}
            <div className="flex flex-col justify-between h-[360px] sm:h-[420px] pr-4">
              <div className="text-4xl text-black">•</div>
              <div className="space-y-3">
                <div className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight text-zinc-950 leading-none">
                  01
                </div>
                <p className="text-[10px] sm:text-xs font-medium tracking-wider text-zinc-500 max-w-[200px] leading-relaxed">
                  Every project starts with research, user behavior, and business goals - not random design decisions.
                </p>
              </div>
              <div className="text-4xl text-black">•</div>
            </div>

            {/* Column 2: 60+, Dot, 89% */}
            <div className="flex flex-col justify-between h-[360px] sm:h-[420px] pl-4">
              <div className="space-y-3">
                <div className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight text-zinc-950 leading-none">
                  02
                </div>
                <p className="text-[10px] sm:text-xs font-medium tracking-wider text-zinc-500 max-w-[200px] leading-relaxed">
                  Beautiful interfaces crafted to increase engagement, improve usability, and generate measurable results.
                </p>
              </div>
              <div className="text-4xl text-black translate-y-6">•</div>
              <div className="space-y-3">
                <div className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight text-zinc-950 leading-none">
                  03
                </div>
                <p className="text-[10px] sm:text-xs font-medium tracking-wider text-zinc-500 max-w-[200px] leading-relaxed">
                  Beautiful interfaces crafted to increase engagement, improve usability, and generate measurable results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Citation */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full order-1 lg:order-none">
            <div>
              <span className="text-md font-medium text-black tracking-wider uppercase block mb-6">
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-zinc-950 leading-[0.95] uppercase mb-10 max-w-2xl">
                EVERY GREAT DIGITAL PRODUCT STARTS WITH A PROBLEM WORTH SOLVING.
              </h2>
              <p className="text-zinc-500 text-md font-regular tracking-wider max-w-lg leading-relaxed mb-12">
              We don't build websites just to launch them. We build digital experiences that help businesses grow, convert visitors, and create lasting impressions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. Testimonials (Why clients trust) ── */}
      <section className="relative bg-[#F4F8FF] px-6 sm:px-8 lg:px-12 overflow-hidden -mt-30 z-10 py-10">
        <div className="max-w-6xl mx-auto">
          <SectionDivider />

          <div className="relative z-10 pt-8 pb-14 flex flex-col items-center">
            <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 text-center mt-6 md:-mt-24">
              <span>Why clients</span>

              <span className="relative inline-flex items-center mx-1 sm:mx-2 group">
                <span className="absolute -top-7 -right-5 z-20 -rotate-12 bg-white text-[14px] sm:text-[18px] font-bold text-zinc-800 px-3 py-1 rounded-full border border-zinc-200/80 shadow-md select-none animate-float">
                  trust
                  <span className="absolute bottom-[-4px] left-[25%] w-2 h-2 bg-white border-r border-b border-zinc-200/80 rotate-45" />
                </span>
                <span className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-zinc-800">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] group-hover:animate-heartbeat"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
              </span>

              <span className="relative inline-flex items-center group/dnc">
                Designncode
                <span className="absolute -top-3 -right-6 sm:-top-4 sm:-right-8 select-none">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-400 opacity-90 transition-transform duration-300 group-hover/dnc:rotate-12 group-hover/dnc:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  >
                    <path d="M6 14L3 11" />
                    <path d="M12 9L11 4" />
                    <path d="M17 12L20 10" />
                  </svg>
                </span>
              </span>
            </h2>
          </div>

          {/* Bento-box Grid Version */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Card 1 (Col Span: 3 | Blue Bg): 1.5x increase in qualified meetings */}
            <div className="col-span-12 md:col-span-3 bg-[#EBF2FF] rounded-3xl p-6 flex flex-col justify-between min-h-[240px] h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-regular tracking-tight text-zinc-950 leading-tight">3.2x</span>
                <span className="text-3xl md:text-4xl font-regular tracking-tight text-zinc-950 leading-tight">increase</span>
                <span className="text-zinc-700 text-xs font-regular mt-1.5">in organic website traffic</span>
              </div>
              <div className="mt-6 border-t border-black/10 pt-3">
                <SlotMachineLogo logos={logoPool1} staggerDelay={0} align="left" />
              </div>
            </div>

            {/* Card 2 (Col Span: 3 | Glassy Teal Bg): Ouster centered logo slot-machine */}
            <div className="relative overflow-hidden col-span-12 md:col-span-3 bg-gradient-to-br from-teal-400/25 via-teal-500/10 to-teal-600/20 backdrop-blur-md border border-teal-200/30 rounded-3xl p-6 flex flex-col justify-center items-center min-h-[240px] h-full shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),_0_8px_32px_rgba(20,184,166,0.12)] hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.6),_0_12px_40px_rgba(20,184,166,0.2)] transition-all duration-500 group">
              {/* Glossy Diagonal Reflection Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-80 pointer-events-none" />
              {/* Inner 3D Glow Rim */}
              <div className="absolute inset-[1px] rounded-[23px] bg-gradient-to-br from-teal-300/10 via-transparent to-transparent pointer-events-none" />
              <SlotMachineLogo logos={logoPool2} staggerDelay={400} align="center" logoClassName="scale-[1.1]" />
            </div>

            {/* Card 3 (Col Span: 6 | White Bg): Zoë McKenzie Checkr testimonial */}
            <div className="col-span-12 md:col-span-6 bg-white border border-zinc-100/80 rounded-3xl p-6 flex flex-col justify-between min-h-[240px] h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-zinc-800 font-regular text-md leading-relaxed md:text-lg">
                "We chose DesignnCode for their commitment to partnership. They were willing to build with us, experiment, and learn what works. We didn&apos;t know what was possible at first, but the quality of the output now is incredibly impressive."
              </p>
              <div className="mt-6 pt-4 border-t border-dotted border-zinc-200 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-200/80 bg-zinc-100 flex-shrink-0">
                    <Image
                      src="/jennifer.png"
                      alt="Zoë McKenzie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-950 text-xs leading-tight">Zoë McKenzie</p>
                    <p className="text-zinc-500 text-[10px] mt-0.5 leading-snug">Director of RevOps Technology at Checkr</p>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center scale-90 origin-right">
                  <ClientLogo1 />
                </div>
              </div>
            </div>

            {/* Card 4 (Col Span: 3 | Glassy Teal Bg): Rho centered logo slot-machine */}
            <div className="relative overflow-hidden col-span-12 md:col-span-3 bg-gradient-to-br from-teal-400/25 via-teal-500/10 to-teal-600/20 backdrop-blur-md border border-teal-200/30 rounded-3xl p-6 flex flex-col justify-center items-center min-h-[240px] h-full shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),_0_8px_32px_rgba(20,184,166,0.12)] hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.6),_0_12px_40px_rgba(20,184,166,0.2)] transition-all duration-500 group">
              {/* Glossy Diagonal Reflection Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-80 pointer-events-none" />
              {/* Inner 3D Glow Rim */}
              <div className="absolute inset-[1px] rounded-[23px] bg-gradient-to-br from-teal-300/10 via-transparent to-transparent pointer-events-none" />
              <SlotMachineLogo logos={logoPool3} staggerDelay={800} align="center" logoClassName="scale-[1.1]" />
            </div>

            {/* Card 5 (Col Span: 6 | White Bg): Mark Deacon canibuild testimonial */}
            <div className="col-span-12 md:col-span-6 bg-white border border-zinc-100/80 rounded-3xl p-6 flex flex-col justify-between min-h-[240px] h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-zinc-800 font-regular text-md leading-relaxed md:text-lg">
                "DesignnCode became the execution layer behind our inbound and outbound motions. It made our sales operation leaner, more efficient, and easier to scale."
              </p>
              <div className="mt-6 pt-4 border-t border-dotted border-zinc-200 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-200/80 bg-zinc-100 flex-shrink-0">
                    <Image
                      src="/charlie.png"
                      alt="Mark Deacon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-950 text-xs leading-tight">Mark Deacon</p>
                    <p className="text-zinc-500 text-[10px] mt-0.5 leading-snug">Chief Revenue Operations Officer</p>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center scale-90 origin-right">
                  <ClientLogo2 />
                </div>
              </div>
            </div>

            {/* Card 6 (Col Span: 3 | Warm Sand Bg): $1M+ pipeline generated in first 3 months */}
            <div className="col-span-12 md:col-span-3 bg-[#FFF9E6] rounded-3xl p-6 flex flex-col justify-between min-h-[240px] h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-regular tracking-tight text-zinc-950 leading-tight">150%+</span>
                <span className="text-3xl md:text-4xl font-regular tracking-tight text-zinc-950 leading-tight">more leads</span>
                <span className="text-zinc-700 text-xs font-regular mt-1.5">within 90 days</span>
              </div>
              <div className="mt-6 border-t border-black/10 pt-3">
                <SlotMachineLogo logos={logoPool4} staggerDelay={1200} align="left" />
              </div>
            </div>
          </div>

          {/* Mobile Carousel & Testimonials Version */}
          <div className="block md:hidden space-y-4">
            {/* Card 1: 3.2x increase ... */}
            <div className="bg-[#EBF2FF] rounded-3xl p-6 flex flex-col justify-between min-h-[220px] shadow-sm">
              <div className="flex flex-col">
                <span className="text-3xl font-regular tracking-tight text-zinc-950 leading-tight">3.2x</span>
                <span className="text-3xl font-regular tracking-tight text-zinc-950 leading-tight">increase</span>
                <span className="text-zinc-700 text-xs font-regular mt-1.5">in organic website traffic</span>
              </div>
              <div className="mt-6 border-t border-black/10 pt-3">
                <SlotMachineLogo logos={logoPool1} staggerDelay={0} align="left" />
              </div>
            </div>

            {/* Card 6: 150%+ more leads ... */}
            <div className="bg-[#FFF9E6] rounded-3xl p-6 flex flex-col justify-between min-h-[220px] shadow-sm">
              <div className="flex flex-col">
                <span className="text-3xl font-regular tracking-tight text-zinc-950 leading-tight">150%+</span>
                <span className="text-3xl font-regular tracking-tight text-zinc-950 leading-tight">more leads</span>
                <span className="text-zinc-700 text-xs font-regular mt-1.5">within 90 days</span>
              </div>
              <div className="mt-6 border-t border-black/10 pt-3">
                <SlotMachineLogo logos={logoPool4} staggerDelay={400} align="left" />
              </div>
            </div>

            {/* Testimonial Slider Card */}
            <div className="bg-white border border-zinc-100/80 rounded-3xl p-6 flex flex-col justify-between min-h-[260px] shadow-sm">
              <p className="text-zinc-800 font-regular text-md leading-relaxed">
                "{mobileTestimonials[activeTestimonial].quote}"
              </p>
              
              <div className="mt-6 pt-4 border-t border-dotted border-zinc-200 flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-200/80 bg-zinc-100 flex-shrink-0">
                      <Image
                        src={mobileTestimonials[activeTestimonial].avatar}
                        alt={mobileTestimonials[activeTestimonial].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-950 text-xs leading-tight">
                        {mobileTestimonials[activeTestimonial].name}
                      </p>
                      <p className="text-zinc-500 text-[10px] mt-0.5 leading-snug">
                        {mobileTestimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center scale-90 origin-right">
                    {mobileTestimonials[activeTestimonial].logo}
                  </div>
                </div>

                {/* Arrow navigation buttons and page indicator */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : mobileTestimonials.length - 1))}
                      className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 transition-colors cursor-pointer select-none"
                      aria-label="Previous testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev < mobileTestimonials.length - 1 ? prev + 1 : 0))}
                      className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 transition-colors cursor-pointer select-none"
                      aria-label="Next testimonial"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-xs font-medium text-zinc-400">
                    {activeTestimonial + 1} of {mobileTestimonials.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Work ── */}
      <section className="relative bg-[#F4F8FF] py-24 px-6 sm:px-8 lg:px-12 -mt-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-4">Our Work</h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Brands from around the world. Projects of every shape and size. Each one built to perform.
              </p>
            </div>
            <SpecularButton
              href="/Projects"
              className="flex-shrink-0 self-start px-6 py-2.5"
              baseColor="#18181b"
              textColor="#ffffff"
              lineColor="#ffffff"
              radius={9999}
              intensity={1.2}
            >
              View All Projects
            </SpecularButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {projects.map((project) => (
              <Link href={`/Projects/${project.slug}`} key={project.slug} className={`group block cursor-pointer ${project.stagger ? "md:mt-24" : ""}`}>
                <article>
                  <div className={`relative rounded-3xl bg-gradient-to-br ${project.bg} overflow-hidden border border-zinc-200/50 shadow-sm transition-shadow duration-300 hover:shadow-md`}>
                    <div className="relative w-full transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-black transition-colors">{project.title}</h3>
                    <p className="text-zinc-500 text-[15px] leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                            project.projectType === "Shopify Store"
                              ? "bg-emerald-50/80 text-emerald-700 border-emerald-200/50"
                              : "bg-indigo-50/80 text-indigo-700 border-indigo-200/50"
                          }`}
                        >
                          {project.projectType}
                        </span>
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
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. How We Help ── */}
      <section className="relative bg-[#F4F8FF] py-24 px-6 sm:px-8 lg:px-12 -mt-15">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-5">How We Help</h2>
            <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl leading-relaxed">
              From concept to launch and beyond. We partner with you to bring ideas to life and deliver results{" "}
              <span className="inline-block bg-zinc-100 text-zinc-800 px-2.5 py-0.5 rounded-md font-medium">
                you can measure
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="relative w-full max-w-[400px] bg-white rounded-2xl border border-zinc-100/80 overflow-hidden flex flex-col items-center text-center px-6 pt-10 pb-6 border-2 hover:border-zinc-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-full min-h-[200px] flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover -translate-y-10 group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2 -mt-4 group-hover:text-black transition-colors">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>

          {/* Infinite scrolling carousel of 6 feature pointers */}
          <div className="w-full overflow-hidden marquee-container ">
            <div className="relative flex w-full overflow-x-hidden">
              <div className="flex gap-8 items-center shrink-0 animate-marquee pr-8 whitespace-nowrap">
                {[
                  ...services.flatMap((s) => s.features),
                  ...services.flatMap((s) => s.features)
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center bg-white rounded-2xl border border-zinc-100/80 px-6 py-4 shadow-xs min-w-[280px] sm:min-w-[320px]"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shadow-xs relative">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </span>
                    <div className="whitespace-normal">
                      <p className="font-semibold text-zinc-900 text-[14px] leading-tight">{feature.title}</p>
                      <p className="text-zinc-500 text-[12px] mt-0.5 leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Flow Section ── */}
      <section ref={flowSectionRef} className="relative bg-[#F4F8FF] py-24 px-6 sm:px-8 lg:px-12 border-t border-zinc-100/50 -mt-15">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-zinc-950 uppercase leading-none select-none">
              FLOW
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base md:text-[15px] max-w-xs leading-relaxed md:text-right">
              Our process for turning ideas into real, working solutions that deliver amazing results.
            </p>
          </div>

          {/* Divider line */}
          <div className="border-t border-zinc-200/80 mb-6" />

          {/* Subheader Metadata */}
          <div className="flex justify-between items-center text-xs font-bold text-zinc-400 tracking-wider uppercase mb-16">
            <span>Process: 4 Steps</span>
            <span>Duration: ~ 3 Weeks</span>
          </div>

          {/* 4-Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-zinc-200/40 md:border-t-0">
            {/* Step 1: Discover */}
            <div className="flow-step-card flex flex-col py-8 px-6 md:px-8 border-l border-zinc-200/80 border-b border-zinc-200/40 md:border-b-0">
              <div className="space-y-6 md:mt-48">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase">
                    Discover
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-[14px] leading-relaxed">
                    Understanding your challenge, your audience, and what success looks like for you.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-bold text-zinc-900 block">25%</span>
                  <div className="w-[25%] h-[5px] bg-black rounded-full" />
                </div>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="flow-step-card flex flex-col py-8 px-6 md:px-8 border-l border-zinc-200/80 border-b border-zinc-200/40 md:border-b-0">
              <div className="space-y-6 md:mt-32">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase">
                    Design
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-[14px] leading-relaxed">
                    Ideas take shape. We explore directions, test concepts, and refine until it feels right.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-bold text-zinc-900 block">50%</span>
                  <div className="w-[50%] h-[5px] bg-black rounded-full" />
                </div>
              </div>
            </div>

            {/* Step 3: Build */}
            <div className="flow-step-card flex flex-col py-8 px-6 md:px-8 border-l border-zinc-200/80 border-b border-zinc-200/40 md:border-b-0">
              <div className="space-y-6 md:mt-16">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase">
                    Build
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-[14px] leading-relaxed">
                    We develop the final product with attention to every detail and technical precision.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-bold text-zinc-900 block">75%</span>
                  <div className="w-[75%] h-[5px] bg-black rounded-full" />
                </div>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div className="flow-step-card flex flex-col py-8 px-6 md:px-8 border-l border-zinc-200/80">
              <div className="space-y-6 md:mt-0">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase">
                    Launch
                  </h3>
                  <p className="text-zinc-500 text-sm sm:text-[14px] leading-relaxed">
                    We manage the launch, provide training if needed, and ensure a smooth transition.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-bold text-zinc-900 block">100%</span>
                  <div className="w-full h-[5px] bg-black rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      {/* ── 6. Project Check-Up CTA ── */}
      <CTA />
      <Footer />
    </main>
  );
}
