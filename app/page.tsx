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
    accent: "from-[#0C1833]/30 via-[#0C1833]/10 to-transparent",
    iconBg: "from-[#0C1833] to-[#0a1428]",
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

const ClientLogo1 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 371.svg"
    alt="Client Logo 1"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo2 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 372.svg"
    alt="Client Logo 2"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo3 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 373.svg"
    alt="Client Logo 3"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo4 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 374.svg"
    alt="Client Logo 4"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo5 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 375.svg"
    alt="Client Logo 5"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo6 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 376.svg"
    alt="Client Logo 6"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo7 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 377.svg"
    alt="Client Logo 7"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo8 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 378.svg"
    alt="Client Logo 8"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo9 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 379.svg"
    alt="Client Logo 9"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo10 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 380.svg"
    alt="Client Logo 10"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo11 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 381.svg"
    alt="Client Logo 11"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo12 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 382.svg"
    alt="Client Logo 12"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo13 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 383.svg"
    alt="Client Logo 13"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo14 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 384.svg"
    alt="Client Logo 14"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo15 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 385.svg"
    alt="Client Logo 15"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const ClientLogo16 = ({ dark = false }: { dark?: boolean }) => (
  <img
    src="/Logo_Client/Frame 386.svg"
    alt="Client Logo 16"
    className={`h-[54px] max-w-[195px] object-contain select-none shrink-0 ${dark ? "brightness-0 opacity-80" : ""}`}
  />
);

const logoPool1 = [<ClientLogo1 key="l1" />, <ClientLogo2 key="l2" />, <ClientLogo3 key="l3" />, <ClientLogo4 key="l4" />];
const logoPool2 = [<ClientLogo5 key="l5" />, <ClientLogo6 key="l6" />, <ClientLogo7 key="l7" />, <ClientLogo8 key="l8" />];
const logoPool3 = [<ClientLogo9 key="l9" />, <ClientLogo10 key="l10" />, <ClientLogo11 key="l11" />, <ClientLogo12 key="l12" />];
const logoPool4 = [<ClientLogo13 key="l13" dark />, <ClientLogo14 key="l14" dark />, <ClientLogo15 key="l15" dark />, <ClientLogo16 key="l16" dark />];

const mobileTestimonials = [
  {
    quote: "We chose Designncode for their commitment to partnership. They were willing to build with us, experiment, and learn what works. We didn't know what was possible at first, but the quality of the output now is incredibly impressive.",
    name: "Zoë McKenzie",
    role: "Director of RevOps Technology at Checkr",
    avatar: "/jennifer.png",
    logo: <ClientLogo1 dark />
  },
  {
    quote: "Designncode became the execution layer behind our inbound and outbound motions. It made our sales operation leaner, more efficient, and easier to scale.",
    name: "Mark Deacon",
    role: "Chief Revenue Operations Officer at canibuild",
    avatar: "/charlie.png",
    logo: <ClientLogo5 dark />
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

    return () => clearInterval(startTimeout);
  }, [logos.length, interval, staggerDelay]);

  const handleTransitionEnd = () => {
    if (index >= logos.length) {
      setIsTransitioning(false);
      setIndex(0);
    }
  };

  return (
    <div className={`relative h-[74px] overflow-hidden w-full flex ${align === "left" ? "justify-start" : "justify-center"}`}>
      <div
        className="flex flex-col w-full"
        style={{
          transition: isTransitioning ? "transform 700ms cubic-bezier(0.76, 0, 0.24, 1)" : "none",
          transform: `translateY(-${index * 74}px)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {displayLogos.map((logo, idx) => (
          <div
            key={idx}
            className={`h-[74px] w-full flex items-center ${align === "left" ? "justify-start" : "justify-center"} flex-shrink-0`}
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



function HowWeHelpSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !card2Ref.current || !card3Ref.current || !card4Ref.current || !card5Ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=75",
          end: "+=2400",
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // Animate Card 2 sliding up over Card 1
      tl.fromTo(
        card2Ref.current,
        { yPercent: 135, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "power1.inOut", duration: 1 }
      );

      // Animate Card 3 sliding up over Card 2
      tl.fromTo(
        card3Ref.current,
        { yPercent: 135, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "power1.inOut", duration: 1 }
      );

      // Animate Card 4 sliding up over Card 3
      tl.fromTo(
        card4Ref.current,
        { yPercent: 135, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "power1.inOut", duration: 1 }
      );

      // Animate Card 5 sliding up over Card 4
      tl.fromTo(
        card5Ref.current,
        { yPercent: 135, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: "power1.inOut", duration: 1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FFFFFF] py-10 sm:py-16 px-4 sm:px-8 lg:px-12 border-t border-zinc-100/60 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Header & Copy */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-8 select-none">
          <div className="space-y-3 sm:space-y-6">
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-950 uppercase leading-[0.98]">
              TURNING IDEAS INTO IMPACT.
            </h2>
            <p className="text-zinc-500 text-xs sm:text-base lg:text-lg leading-relaxed max-w-md hidden sm:block">
              From concept to launch and beyond. We partner with ambitious brands to craft exceptional digital experiences, drive measurable growth, and build scalable technology.
            </p>
          </div>

          {/* Sub-stats / Highlights */}
          <div className="pt-4 sm:pt-6 border-t border-zinc-200/80 grid grid-cols-2 gap-4 sm:gap-6">
            <div>
              <span className="block text-2xl sm:text-4xl font-bold text-zinc-950">5</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5 sm:mt-1 block">Core Disciplines</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-4xl font-bold text-zinc-950">100%</span>
              <span className="text-[10px] sm:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5 sm:mt-1 block">Tailored Execution</span>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Card Container */}
        <div className="lg:col-span-7 relative h-[510px] sm:h-[510px] lg:h-[520px] w-full flex items-center justify-center overflow-hidden rounded-3xl">

          {/* Card 1: Royal Blue #0C1833 (Base Card) */}
          <div className="absolute inset-0 z-10 rounded-3xl p-5 sm:p-7 lg:p-10 flex flex-col justify-between text-white border border-white/10 shadow-2xl overflow-hidden" style={{ background: '#0C1833' }}>
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-blue-200/80 uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 border border-white/15">01 / Service</span>
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white uppercase mb-1.5 sm:mb-3">
                UI/UX Design
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-sm lg:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-5">
                We craft intuitive, human-centered interfaces that captivate users, elevate brand perception, and turn casual visitors into loyal customers.
              </p>

              {/* Service Pointers */}
              <div className="space-y-1.5 sm:space-y-2.5 mb-3 sm:mb-5 border-t border-white/15 pt-2.5 sm:pt-4">
                {[
                  "User Research, Architecture & Wireframing",
                  "Pixel-perfect High-Fidelity UI Design",
                  "Interactive Prototypes & Motion Systems",
                  "Scalable Enterprise Design Systems"
                ].map((pointer, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-blue-50 font-medium">
                    <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/15 flex items-center justify-center text-[10px] sm:text-xs text-blue-200">✓</span>
                    <span>{pointer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card CTA */}
            <div className="pt-2.5 sm:pt-4 border-t border-white/15 flex items-center justify-between mt-auto">
              <Link
                href="/Service/ui_ux"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl bg-white text-zinc-950 text-xs sm:text-sm font-bold shadow-md hover:bg-blue-50 hover:gap-4 transition-all cursor-pointer"
              >
                <span>Explore UI/UX</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: Solid Yellow #FACC15 (Animates over Card 1) */}
          <div ref={card2Ref} className="absolute inset-0 z-20 rounded-3xl p-5 sm:p-7 lg:p-10 flex flex-col justify-between text-[#1a2e05] border border-black/10 shadow-2xl overflow-hidden opacity-0" style={{ background: '#FACC15' }}>
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1a2e05]/70 uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/10 border border-black/10">02 / Service</span>
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1a2e05] uppercase mb-1.5 sm:mb-3">
                Performance Marketing
              </h3>
              <p className="text-[#1a2e05]/90 text-xs sm:text-sm lg:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-5">
                Data-backed growth marketing campaigns focused on what matters most — measurable ROI, targeted customer acquisition, and sustainable revenue.
              </p>

              {/* Service Pointers */}
              <div className="space-y-1.5 sm:space-y-2.5 mb-3 sm:mb-5 border-t border-black/10 pt-2.5 sm:pt-4">
                {[
                  "Targeted Conversion Rate Optimization (CRO)",
                  "Omnichannel Paid Ads (Meta, Google, LinkedIn)",
                  "Personalised Insights & Attribution Analytics",
                  "High-converting Landing Page Funnels"
                ].map((pointer, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-[#1a2e05] font-semibold">
                    <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px] sm:text-xs text-[#1a2e05]">✓</span>
                    <span>{pointer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card CTA */}
            <div className="pt-2.5 sm:pt-4 border-t border-black/10 flex items-center justify-between mt-auto">
              <Link
                href="/marketing"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl bg-zinc-950 text-white text-xs sm:text-sm font-bold shadow-md hover:bg-zinc-800 hover:gap-4 transition-all cursor-pointer"
              >
                <span>Discover Marketing</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3: Royal Blue #0C1833 (Animates over Card 2) */}
          <div ref={card3Ref} className="absolute inset-0 z-30 rounded-3xl p-5 sm:p-7 lg:p-10 flex flex-col justify-between text-white border border-white/10 shadow-2xl overflow-hidden opacity-0" style={{ background: '#0C1833' }}>
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest text-blue-200/80 uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 border border-white/15">03 / Service</span>
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase mb-1.5 sm:mb-3">
                Web Development
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-sm lg:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-5">
                Engineering lightning-fast, highly scalable web apps and custom digital platforms built with cutting-edge modern technology stacks.
              </p>

              {/* Service Pointers */}
              <div className="space-y-1.5 sm:space-y-2.5 mb-3 sm:mb-5 border-t border-white/15 pt-2.5 sm:pt-4">
                {[
                  "Next.js & React High-Performance App Engineering",
                  "Custom Headless Shopify & E-Commerce Stores",
                  "Cloud Infrastructure & Custom API Integrations",
                  "Sub-second Page Load & Technical SEO"
                ].map((pointer, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-blue-50 font-medium">
                    <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/15 flex items-center justify-center text-[10px] sm:text-xs text-blue-200">✓</span>
                    <span>{pointer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card CTA */}
            <div className="pt-2.5 sm:pt-4 border-t border-white/15 flex items-center justify-between mt-auto">
              <Link
                href="/webd"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl bg-white text-zinc-950 text-xs sm:text-sm font-bold shadow-md hover:bg-blue-50 hover:gap-4 transition-all cursor-pointer"
              >
                <span>Build Your Platform</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 4: Solid Yellow #FACC15 (Animates over Card 3) */}
          <div ref={card4Ref} className="absolute inset-0 z-40 rounded-3xl p-5 sm:p-7 lg:p-10 flex flex-col justify-between text-[#1a2e05] border border-black/10 shadow-2xl overflow-hidden opacity-0" style={{ background: '#FACC15' }}>
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1a2e05]/70 uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/10 border border-black/10">04 / Service</span>
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1a2e05] uppercase mb-1.5 sm:mb-3">
                Shopify Development
              </h3>
              <p className="text-[#1a2e05]/90 text-xs sm:text-sm lg:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-5">
                Building high-converting, custom Shopify & e-commerce stores designed for seamless user checkout and rapid sales scaling.
              </p>

              {/* Service Pointers */}
              <div className="space-y-1.5 sm:space-y-2.5 mb-3 sm:mb-5 border-t border-black/10 pt-2.5 sm:pt-4">
                {[
                  "Custom Shopify Theme & Liquid Development",
                  "Headless Storefronts & Sub-second Checkout",
                  "App Integration & Payment Gateway Setup",
                  "Mobile-first Store Optimization"
                ].map((pointer, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-[#1a2e05] font-semibold">
                    <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px] sm:text-xs text-[#1a2e05]">✓</span>
                    <span>{pointer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card CTA */}
            <div className="pt-2.5 sm:pt-4 border-t border-black/10 flex items-center justify-between mt-auto">
              <Link
                href="/ecommerce"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl bg-zinc-950 text-white text-xs sm:text-sm font-bold shadow-md hover:bg-zinc-800 hover:gap-4 transition-all cursor-pointer"
              >
                <span>Explore E-Commerce</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 5: Royal Blue #0C1833 (Animates over Card 4) */}
          <div ref={card5Ref} className="absolute inset-0 z-50 rounded-3xl p-5 sm:p-7 lg:p-10 flex flex-col justify-between text-white border border-white/10 shadow-2xl overflow-hidden opacity-0" style={{ background: '#0C1833' }}>
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest text-blue-200/80 uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 border border-white/15">05 / Service</span>
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase mb-1.5 sm:mb-3">
                SEO & Organic Growth
              </h3>
              <p className="text-blue-100/90 text-xs sm:text-sm lg:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-5">
                Dominating organic search results with data-backed technical SEO, keyword strategy, and high-authority content execution.
              </p>

              {/* Service Pointers */}
              <div className="space-y-1.5 sm:space-y-2.5 mb-3 sm:mb-5 border-t border-white/15 pt-2.5 sm:pt-4">
                {[
                  "Technical SEO & Core Web Vitals Optimization",
                  "On-Page Keyword & Content Architecture",
                  "Authority Backlink & Off-Page Strategy",
                  "Real-time Analytics & Ranking Reports"
                ].map((pointer, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs lg:text-sm text-blue-50 font-medium">
                    <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/15 flex items-center justify-center text-[10px] sm:text-xs text-blue-200">✓</span>
                    <span>{pointer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card CTA */}
            <div className="pt-2.5 sm:pt-4 border-t border-white/15 flex items-center justify-between mt-auto">
              <Link
                href="/marketing"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl bg-white text-zinc-950 text-xs sm:text-sm font-bold shadow-md hover:bg-blue-50 hover:gap-4 transition-all cursor-pointer"
              >
                <span>Boost Rankings</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
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
    <main className="relative flex flex-col flex-1 overflow-hidden pt-0 bg-[#FFFFFF]">
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
      <section className="relative w-full bg-[#FFFFFF] py-10 overflow-hidden select-none z-10">
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
      <section className="relative bg-[#FFFFFF] pt-24 pb-8 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-zinc-200/40 z-10 -mt-10">
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
      <section className="relative bg-[#FFFFFF] px-6 sm:px-8 lg:px-12 overflow-hidden mt-2 md:-mt-14 sm:-mt-16 z-10 py-4">
        <div className="max-w-6xl mx-auto">
          <SectionDivider />

          <div className="relative z-10 pt-8 pb-14 flex flex-col items-center">
            <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 text-center mt-6">
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
            {/* Card 1 (Col Span: 3 | #0C1833): 3.2x increase */}
            <div className="col-span-12 md:col-span-3 rounded-3xl p-6 flex flex-col justify-between min-h-[240px] h-full" style={{background: 'linear-gradient(160deg, #1a2d52 0%, #0C1833 50%, #080f1e 100%)', border: '1px solid rgba(255,255,255,0.12)'}}>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-regular tracking-tight text-white leading-tight">3.2x</span>
                <span className="text-3xl md:text-4xl font-regular tracking-tight text-white leading-tight">increase</span>
                <span className="text-white/70 text-xs font-regular mt-1.5">in organic website traffic</span>
              </div>
              <div className="mt-6 border-t border-white/10 pt-3">
                <SlotMachineLogo logos={logoPool1} staggerDelay={0} align="left" />
              </div>
            </div>

            {/* Card 2 (Col Span: 3 | #0C1833): Logo slot-machine */}
            <div className="relative overflow-hidden col-span-12 md:col-span-3 rounded-3xl p-6 flex flex-col justify-center items-center min-h-[240px] h-full" style={{background: 'linear-gradient(160deg, #1a2d52 0%, #0C1833 50%, #080f1e 100%)', border: '1px solid rgba(255,255,255,0.12)'}}>
              <SlotMachineLogo logos={logoPool2} staggerDelay={400} align="center" logoClassName="scale-[1.65]" />
            </div>

            {/* Card 3 (Col Span: 6 | White): Zoë McKenzie testimonial */}
            <div className="col-span-12 md:col-span-6 rounded-3xl p-6 flex flex-col justify-between min-h-[240px] h-full" style={{background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)'}}>
              <p className="text-zinc-800 font-medium text-md leading-relaxed md:text-lg">
                &ldquo;We chose DesignnCode for their commitment to partnership. They were willing to build with us, experiment, and learn what works. We didn&apos;t know what was possible at first, but the quality of the output now is incredibly impressive.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-semibold text-zinc-900 text-xs leading-tight">Zoë McKenzie</p>
                  <p className="text-zinc-500 text-[10px] mt-0.5 leading-snug">Director of RevOps Technology at Checkr</p>
                </div>
                <div className="flex-shrink-0 flex items-center scale-90 origin-right">
                  <ClientLogo1 dark />
                </div>
              </div>
            </div>

            {/* Card 4 (Col Span: 3 | #0C1833): Logo slot-machine */}
            <div className="relative overflow-hidden col-span-12 md:col-span-3 rounded-3xl p-6 flex flex-col justify-center items-center min-h-[240px] h-full" style={{background: 'linear-gradient(160deg, #1a2d52 0%, #0C1833 50%, #080f1e 100%)', border: '1px solid rgba(255,255,255,0.12)'}}>
              <SlotMachineLogo logos={logoPool3} staggerDelay={800} align="center" logoClassName="scale-[1.65]" />
            </div>

            {/* Card 5 (Col Span: 6 | White): Mark Deacon testimonial */}
            <div className="col-span-12 md:col-span-6 rounded-3xl p-6 flex flex-col justify-between min-h-[240px] h-full" style={{background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)'}}>
              <p className="text-zinc-800 font-medium text-md leading-relaxed md:text-lg">
                &ldquo;DesignnCode became the execution layer behind our inbound and outbound motions. It made our sales operation leaner, more efficient, and easier to scale.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-semibold text-zinc-900 text-xs leading-tight">Mark Deacon</p>
                  <p className="text-zinc-500 text-[10px] mt-0.5 leading-snug">Chief Revenue Operations Officer</p>
                </div>
                <div className="flex-shrink-0 flex items-center scale-90 origin-right">
                  <ClientLogo5 dark />
                </div>
              </div>
            </div>

            {/* Card 6 (Col Span: 3 | Yellow): 150%+ more leads */}
            <div className="col-span-12 md:col-span-3 rounded-3xl p-6 flex flex-col justify-between min-h-[240px] h-full" style={{background: 'linear-gradient(160deg, #fde68a 0%, #FACC15 50%, #eab308 100%)', border: '1px solid rgba(255,255,255,0.35)'}}>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-regular tracking-tight text-[#1a2e05] leading-tight">150%+</span>
                <span className="text-3xl md:text-4xl font-regular tracking-tight text-[#1a2e05] leading-tight">more leads</span>
                <span className="text-[#1a2e05]/70 text-xs font-regular mt-1.5">within 90 days</span>
              </div>
              <div className="mt-6 border-t border-black/10 pt-3">
                <SlotMachineLogo logos={logoPool4} staggerDelay={1200} align="left" />
              </div>
            </div>
          </div>

          {/* Mobile Carousel & Testimonials Version */}
          <div className="block md:hidden space-y-4">
            {/* Card 1 Mobile: #0C1833 */}
            <div className="rounded-3xl p-6 flex flex-col justify-between min-h-[220px]" style={{background: 'linear-gradient(160deg, #1a2d52 0%, #0C1833 50%, #080f1e 100%)', border: '1px solid rgba(255,255,255,0.12)'}}>
              <div className="flex flex-col">
                <span className="text-3xl font-regular tracking-tight text-white leading-tight">3.2x</span>
                <span className="text-3xl font-regular tracking-tight text-white leading-tight">increase</span>
                <span className="text-white/70 text-xs font-regular mt-1.5">in organic website traffic</span>
              </div>
              <div className="mt-6 border-t border-white/10 pt-3">
                <SlotMachineLogo logos={logoPool1} staggerDelay={0} align="left" />
              </div>
            </div>

            {/* Card 6 Mobile: Yellow */}
            <div className="rounded-3xl p-6 flex flex-col justify-between min-h-[220px]" style={{background: 'linear-gradient(160deg, #fde68a 0%, #FACC15 50%, #eab308 100%)', border: '1px solid rgba(255,255,255,0.35)'}}>
              <div className="flex flex-col">
                <span className="text-3xl font-regular tracking-tight text-[#1a2e05] leading-tight">150%+</span>
                <span className="text-3xl font-regular tracking-tight text-[#1a2e05] leading-tight">more leads</span>
                <span className="text-[#1a2e05]/70 text-xs font-regular mt-1.5">within 90 days</span>
              </div>
              <div className="mt-6 border-t border-black/10 pt-3">
                <SlotMachineLogo logos={logoPool4} staggerDelay={400} align="left" />
              </div>
            </div>

            {/* Testimonial Slider Card - White */}
            <div className="rounded-3xl p-6 flex flex-col justify-between min-h-[260px]" style={{background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)'}}>
              <p className="text-zinc-800 font-medium text-md leading-relaxed">
                &ldquo;{mobileTestimonials[activeTestimonial].quote}&rdquo;
              </p>
              
              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-zinc-900 text-xs leading-tight">
                      {mobileTestimonials[activeTestimonial].name}
                    </p>
                    <p className="text-zinc-500 text-[10px] mt-0.5 leading-snug">
                      {mobileTestimonials[activeTestimonial].role}
                    </p>
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
      <section className="relative bg-[#FFFFFF] py-24 px-6 sm:px-8 lg:px-12 -mt-5">
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

      {/* ── 4. How We Help (GSAP ScrollTrigger Pinned 3D Cards Section) ── */}
      <HowWeHelpSection />

      {/* ── 5. Flow Section ── */}
      <section ref={flowSectionRef} className="relative bg-[#FFFFFF] py-24 px-6 sm:px-8 lg:px-12 border-t border-zinc-100/50 -mt-15">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 pt-4">
            {/* Step 1: Discover */}
            <div className="flow-step-card group cursor-pointer relative flex flex-col justify-between py-8 px-6 md:px-8 rounded-2xl border border-zinc-200/60 bg-white/60 hover:bg-white hover:border-zinc-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
              {/* Top hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-900 via-[#2563EB] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Corner glow */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#2563EB]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 md:mt-48 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-zinc-400 group-hover:text-[#2563EB] transition-colors">01</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase group-hover:translate-x-1 group-hover:text-black transition-all duration-300">
                    Discover
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-700 text-sm sm:text-[14px] leading-relaxed transition-colors duration-300">
                    Understanding your challenge, your audience, and what success looks like for you.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-zinc-900 group-hover:text-[#2563EB] transition-colors block">25%</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-[5px] rounded-full overflow-hidden">
                    <div className="w-[25%] group-hover:w-[38%] h-full bg-zinc-900 group-hover:bg-[#2563EB] rounded-full transition-all duration-500 ease-out" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="flow-step-card group cursor-pointer relative flex flex-col justify-between py-8 px-6 md:px-8 rounded-2xl border border-zinc-200/60 bg-white/60 hover:bg-white hover:border-zinc-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
              {/* Top hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-900 via-[#2563EB] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Corner glow */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#2563EB]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 md:mt-32 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-zinc-400 group-hover:text-[#2563EB] transition-colors">02</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase group-hover:translate-x-1 group-hover:text-black transition-all duration-300">
                    Design
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-700 text-sm sm:text-[14px] leading-relaxed transition-colors duration-300">
                    Ideas take shape. We explore directions, test concepts, and refine until it feels right.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-zinc-900 group-hover:text-[#2563EB] transition-colors block">50%</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-[5px] rounded-full overflow-hidden">
                    <div className="w-[50%] group-hover:w-[62%] h-full bg-zinc-900 group-hover:bg-[#2563EB] rounded-full transition-all duration-500 ease-out" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Build */}
            <div className="flow-step-card group cursor-pointer relative flex flex-col justify-between py-8 px-6 md:px-8 rounded-2xl border border-zinc-200/60 bg-white/60 hover:bg-white hover:border-zinc-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
              {/* Top hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-900 via-[#2563EB] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Corner glow */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#2563EB]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 md:mt-16 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-zinc-400 group-hover:text-[#2563EB] transition-colors">03</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase group-hover:translate-x-1 group-hover:text-black transition-all duration-300">
                    Build
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-700 text-sm sm:text-[14px] leading-relaxed transition-colors duration-300">
                    We develop the final product with attention to every detail and technical precision.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-zinc-900 group-hover:text-[#2563EB] transition-colors block">75%</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-[5px] rounded-full overflow-hidden">
                    <div className="w-[75%] group-hover:w-[88%] h-full bg-zinc-900 group-hover:bg-[#2563EB] rounded-full transition-all duration-500 ease-out" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div className="flow-step-card group cursor-pointer relative flex flex-col justify-between py-8 px-6 md:px-8 rounded-2xl border border-zinc-200/60 bg-white/60 hover:bg-white hover:border-zinc-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
              {/* Top hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-900 via-[#2563EB] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Corner glow */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#2563EB]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 md:mt-0 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-zinc-400 group-hover:text-[#2563EB] transition-colors">04</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase group-hover:translate-x-1 group-hover:text-black transition-all duration-300">
                    Launch
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-700 text-sm sm:text-[14px] leading-relaxed transition-colors duration-300">
                    We manage the launch, provide training if needed, and ensure a smooth transition.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-zinc-900 group-hover:text-[#2563EB] transition-colors block">100%</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-[5px] rounded-full overflow-hidden">
                    <div className="w-full h-full bg-zinc-900 group-hover:bg-[#2563EB] rounded-full transition-all duration-500 ease-out" />
                  </div>
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
