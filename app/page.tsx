"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Footer from "./Components/footer";

/* ─── Data ─── */

const services = [
  {
    title: "UI/UX Design",
    description: "Expert Design Partners (and good listeners)",
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
    title: "Data & Analytics",
    description: "Bring your users into focus.",
    accent: "from-violet-400/30 via-violet-500/10 to-transparent",
    iconBg: "from-violet-500 to-purple-700",
    image: "/Data.svg",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14 drop-shadow-lg" fill="none">
        <circle cx="24" cy="24" r="18" fill="url(#targetGrad)" stroke="#7c3aed" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="10" stroke="#c4b5fd" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" fill="#ede9fe" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="targetGrad" x1="6" y1="6" x2="42" y2="42">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#6d28d9" />
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

const projects = [
  {
    title: "Bank Al Etihad",
    description:
      "A fully composable atomic design overhaul that streamlined workflows, reduced friction, and accelerated iterative development.",
    tags: ["Atomic Systems", "Enterprise", "UI/UX"],
    flag: "🇯🇴",
    bg: "from-[#f87171]/20 via-[#fb923c]/15 to-[#fecaca]/30",
    mockupAccent: "bg-gradient-to-br from-orange-400 to-red-400",
    stagger: false,
  },
  {
    title: "WP Engine",
    description:
      "Implementing composable Headless WordPress architecture and design systems to enhance scalability and personalisation.",
    tags: ["Development", "Enterprise", "UI/UX"],
    flag: "🇺🇸",
    bg: "from-[#60a5fa]/20 via-[#38bdf8]/15 to-[#bae6fd]/30",
    mockupAccent: "bg-gradient-to-br from-sky-400 to-blue-500",
    stagger: true,
  },
  {
    title: "Android Authority",
    description: "Enhancing Core Web Vitals and User Retention with migration to a Headless CMS.",
    tags: ["Enterprise", "Headless", "UI/UX"],
    flag: "🇨🇦",
    bg: "from-zinc-200/60 via-zinc-100/40 to-zinc-200/30",
    mockupAccent: "bg-gradient-to-br from-zinc-400 to-zinc-600",
    stagger: false,
  },
  {
    title: "Amplifidor",
    description: "Creating a scalable, user-focused platform using composable design systems.",
    tags: ["UI/UX"],
    flag: "🇸🇦",
    bg: "from-[#f472b6]/15 via-[#a78bfa]/10 to-[#fbcfe8]/25",
    mockupAccent: "bg-gradient-to-br from-pink-400 to-violet-400",
    stagger: true,
  },
];

const testimonials = [
  {
    company: "WPengine",
    logo: (
      <span className="flex items-center gap-2 font-semibold text-zinc-800 tracking-tight">
        <span className="grid grid-cols-3 gap-0.5 w-5">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-sm bg-zinc-800" />
          ))}
        </span>
        WPengine
      </span>
    ),
    quote: (
      <>
        Designncode has done so much work with Headless platforms, and we knew the team was incredibly well-versed in
        that space.{" "}
        <GradientHighlight>They were one of the first to do it</GradientHighlight>, and they&apos;ve done it
        exceptionally well.
      </>
    ),
    name: "Kelsey Oliver",
    role: "Marketing Manager, WPEngine",
    initials: "KO",
  },
  {
    company: "acs",
    logo: (
      <span className="flex items-center gap-2 font-semibold text-zinc-800 tracking-tight lowercase">
        <span className="w-6 h-6 rounded-full border-2 border-zinc-800 flex items-center justify-center text-[8px] font-bold">
          acs
        </span>
        acs
      </span>
    ),
    quote: (
      <>
        What&apos;s particularly impressive is{" "}
        <GradientHighlight>their ability to think beyond</GradientHighlight> just the immediate project, sharing
        knowledge that benefits our company as a whole.
      </>
    ),
    name: "Silas Gregory",
    role: "Marketing Manager, ACS",
    initials: "SG",
  },
  {
    company: "amplifidor",
    logo: (
      <span className="flex items-center gap-2 font-semibold text-zinc-800 tracking-tight lowercase">
        <span className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-zinc-800" />
        amplifidor
      </span>
    ),
    quote: (
      <>
        The team is <GradientHighlight>highly responsive, attentive, and collaborative</GradientHighlight>. They ask
        insightful questions, provide input, and raise objections when necessary.{" "}
        <GradientHighlight>They truly act as part of our team</GradientHighlight> rather than just a vendor.
      </>
    ),
    name: "Faisal Alqahtani",
    role: "CEO, Amplifidor",
    initials: "FA",
  },
];

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
    <div className="relative w-full overflow-hidden flex justify-center -mb-20 sm:-mb-28 md:-mb-36 pointer-events-none select-none">
      <Image
        src="/Effect.png"
        alt="Section Divider Effect"
        width={1555}
        height={623}
        className="w-[50%] h-auto object-contain opacity-90"
      />
    </div>
  );
}

function ProjectMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-[78%] mx-auto mt-8 mb-2">
      <div className={`absolute inset-0 ${accent} rounded-2xl blur-2xl opacity-40 scale-95`} />
      <div className="relative bg-white rounded-xl shadow-lg border border-white/80 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-50 border-b border-zinc-100">
          <span className="w-2 h-2 rounded-full bg-red-300" />
          <span className="w-2 h-2 rounded-full bg-yellow-300" />
          <span className="w-2 h-2 rounded-full bg-green-300" />
        </div>
        <div className="p-4 space-y-2">
          <div className="h-2.5 w-3/4 rounded-full bg-zinc-200" />
          <div className="h-2 w-1/2 rounded-full bg-zinc-100" />
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-10 rounded-lg bg-zinc-100" />
            <div className="h-10 rounded-lg bg-zinc-100" />
            <div className="h-10 rounded-lg bg-zinc-100" />
          </div>
          <div className="h-16 rounded-lg bg-zinc-50 border border-zinc-100" />
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      setActiveTestimonial((prev) => Math.min(prev + 1, testimonials.length - 1));
    }
    if (diff < -50) {
      setActiveTestimonial((prev) => Math.max(prev - 1, 0));
    }
  };

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
    <main className="relative flex flex-col flex-1 homepage-grid-bg overflow-hidden pt-20">
      {/* ── 1. Hero ── */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="hero-glow w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bottom-[-100px] right-[-100px] opacity-80" />
        <div className="hero-glow w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] top-[-100px] left-[-100px] opacity-40" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full animate-fade-in-up">
            <Image src="/LL.svg" alt="Laurel Left" width={22} height={22} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
            <span className="tracking-wide text-[13px] sm:text-[16px] font-regular text-zinc-600">Design-Led Development Partners</span>
            <Image src="/LR.svg" alt="Laurel Right" width={22} height={22} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
          </div>

          <h1 className="flex flex-col items-center mt-6 sm:mt-8 tracking-tight px-4">
            <span className="text-4xl sm:text-6xl md:text-6xl font-medium text-zinc-900 leading-[1.1] animate-fade-in-up [animation-delay:200ms] block">
              Strategy that ships.
            </span>
            <span className="relative text-4xl sm:text-6xl md:text-6xl font-semibold bg-gradient-to-r from-[#60a5fa] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent leading-[1.2] pb-6 sm:pb-10 px-2 inline-block animate-fade-in-up [animation-delay:400ms]">
              Design that endures.
              <Image
                src="/Marker.svg"
                alt="Marker Underline"
                width={541}
                height={38}
                className="absolute bottom-1 sm:bottom-0 left-0 w-full h-[12px] sm:h-[40px] pointer-events-none object-contain select-none animate-reveal-width [animation-delay:400ms]"
                priority
              />
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-center text-zinc-500 text-sm sm:text-xl max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:600ms] px-4">
            Design and development partners for{" "}
            <span className="inline-block bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded-md font-medium text-[13px] sm:text-[18px] transition-all duration-200 hover:bg-zinc-200/80 hover:text-zinc-950 cursor-default select-none mx-0.5">
              enterprise
            </span>
            ,{" "}
            <span className="inline-block bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded-md font-medium text-[13px] sm:text-[18px] transition-all duration-200 hover:bg-zinc-200/80 hover:text-zinc-950 cursor-default select-none mx-0.5">
              ecommerce
            </span>
            , and{" "}
            <span className="inline-block bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded-md font-medium text-[13px] sm:text-[18px] transition-all duration-200 hover:bg-zinc-200/80 hover:text-zinc-950 cursor-default select-none mx-0.5">
              startups
            </span>
            . We bring clarity to complexity.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 animate-fade-in-up [animation-delay:800ms]">
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-200/80 bg-zinc-50/40 text-[14px] sm:text-[15px] font-medium text-zinc-700 hover:bg-zinc-100/80 hover:border-zinc-300/80 hover:text-zinc-900 transition-all duration-200 text-center cursor-pointer shadow-xs"
            >
              Why Designncode?
            </Link>
            <Link
              href="/ContactUs"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[14px] sm:text-[15px] font-medium text-zinc-900 transition-all duration-200 text-center shadow-[0_4px_8px_rgba(0,0,0,0.04)] border border-zinc-100/80 hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Start a project
            </Link>
          </div>

          {/* Client Logos Infinite Carousel */}
          <div className="mt-14 w-full max-w-full overflow-hidden marquee-container py-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8 text-center animate-fade-in-up [animation-delay:900ms]">
              Trusted by industry leaders
            </p>
            <div className="relative flex w-full max-w-full overflow-hidden animate-fade-in-up [animation-delay:1000ms]">
              <div className="flex gap-16 items-center shrink-0 animate-marquee pr-16 whitespace-nowrap">
                {[
                  "/Client_Logo/Clip path group.svg",
                  "/Client_Logo/Clip path group-1.svg",
                  "/Client_Logo/Clip path group-2.svg",
                  "/Client_Logo/Clip path group-3.svg",
                  "/Client_Logo/Group 14.svg",
                  "/Client_Logo/Vector.svg",
                  "/Client_Logo/Clip path group.svg",
                  "/Client_Logo/Clip path group-1.svg",
                  "/Client_Logo/Clip path group-2.svg",
                  "/Client_Logo/Clip path group-3.svg",
                  "/Client_Logo/Group 14.svg",
                  "/Client_Logo/Vector.svg",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Client Logo ${i + 1}`}
                    width={120}
                    height={36}
                    className="h-7 w-auto object-contain opacity-45 hover:opacity-85 transition-opacity duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── 2. Testimonials (Why clients trust) ── */}
      <section className="relative bg-[#F9F9FB] py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionDivider />

          <div className="relative z-10 pt-8 pb-14 flex flex-col items-center">
            <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 text-center">
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

          {/* Desktop version */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100/80 flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-8">{t.logo}</div>
                <p className="text-zinc-600 text-[15px] leading-relaxed flex-1">{t.quote}</p>
                <div className="mt-8 pt-6 border-t border-dotted border-zinc-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-semibold text-zinc-600 grayscale">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 text-sm">{t.name}</p>
                    <p className="text-zinc-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile version draggable slider */}
          <div className="block md:hidden w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-2 select-none">
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100/80 flex flex-col min-h-[300px]">
                    <div className="mb-8">{t.logo}</div>
                    <p className="text-zinc-600 text-[15px] leading-relaxed flex-1">{t.quote}</p>
                    <div className="mt-8 pt-6 border-t border-dotted border-zinc-200 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-semibold text-zinc-600 grayscale">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900 text-sm">{t.name}</p>
                        <p className="text-zinc-400 text-xs mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "w-6 bg-zinc-900" : "w-2.5 bg-zinc-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Work ── */}
      <section className="relative bg-white py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-4">Our Work</h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Brands from around the world. Projects of every shape and size. Each one built to perform.
              </p>
            </div>
            <Link
              href="/work"
              className="flex-shrink-0 self-start px-6 py-3 rounded-full bg-zinc-900 text-white text-[15px] font-regular shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-200"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {projects.map((project) => (
              <article key={project.title} className={project.stagger ? "md:mt-24" : ""}>
                <div className={`relative rounded-3xl bg-gradient-to-br ${project.bg} p-6 pb-4 overflow-hidden`}>
                  <ProjectMockup accent={project.mockupAccent} />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{project.title}</h3>
                  <p className="text-zinc-500 text-[15px] leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white text-black text-xs font-medium shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xl" title="Country">
                      {project.flag}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. How We Help ── */}
      <section className="relative bg-[#F9F9F9] py-24 px-6 sm:px-8 lg:px-12">
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
              <div
                key={service.title}
                className="relative w-full max-w-[400] bg-white rounded-2xl border border-zinc-100/80 overflow-hidden flex flex-col items-center text-center px-6 pt-10 pb-2 border-2"
              >
                
                <div className="relative w-full h-full min-h-[200px] flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover -translate-y-10"
                  />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2 -mt-4">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
              </div>
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

      {/* ── 5. Who We Partner With ── */}
      <section className="relative bg-white py-24 px-6 sm:px-8 lg:px-12 border-t border-zinc-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-900 mb-5">
              Who We Partner With
            </h2>
            <p className="text-zinc-500 text-base sm:text-lg max-w-2xl leading-relaxed">
              Our signature blend of{" "}
              <span className="inline-block bg-zinc-100 text-zinc-800 px-2.5 py-0.5 rounded-md font-medium text-sm sm:text-base border border-zinc-200/80">
                design expertise
              </span>{" "}
              and{" "}
              <span className="inline-block bg-zinc-100 text-zinc-800 px-2.5 py-0.5 rounded-md font-medium text-sm sm:text-base border border-zinc-200/80">
                technical innovation
              </span>{" "}
              — shaped around your business.
            </p>
          </div>

          {/* Desktop version */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise",
                desc: "Tailor-made solutions at scale",
                image: "/Enterprise.png"
              },
              {
                title: "E-commerce",
                desc: "Performance & Personalisation",
                image: "/E-Commerce.png"
              },
              {
                title: "Startup",
                desc: "Disruption meets scalability",
                image: "/Startup.png"
              }
            ].map((partner) => (
              <div
                key={partner.title}
                className="bg-[#F9F9F9] rounded-2xl border border-zinc-100/80 p-8 flex flex-col items-center text-center transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-zinc-900 mb-1">{partner.title}</h3>
                <p className="text-zinc-500 text-sm mb-6">{partner.desc}</p>
                <div className="relative w-full aspect-square max-w-[280px] flex items-center justify-center">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile version draggable slider */}
          <div className="block md:hidden w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
              style={{ transform: `translateX(-${activePartner * 100}%)` }}
              onTouchStart={handlePartnerTouchStart}
              onTouchMove={handlePartnerTouchMove}
              onTouchEnd={handlePartnerTouchEnd}
            >
              {[
                {
                  title: "Enterprise",
                  desc: "Tailor-made solutions at scale",
                  image: "/Enterprise.png"
                },
                {
                  title: "E-commerce",
                  desc: "Performance & Personalisation",
                  image: "/E-Commerce.png"
                },
                {
                  title: "Startup",
                  desc: "Disruption meets scalability",
                  image: "/Startup.png"
                }
              ].map((partner) => (
                <div key={partner.title} className="w-full shrink-0 px-2 select-none">
                  <div className="bg-[#F9F9F9] rounded-2xl border border-zinc-100/80 p-8 flex flex-col items-center text-center shadow-xs">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-1">{partner.title}</h3>
                    <p className="text-zinc-500 text-sm mb-6">{partner.desc}</p>
                    <div className="relative w-full aspect-square max-w-[280px] flex items-center justify-center">
                      <Image
                        src={partner.image}
                        alt={partner.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setActivePartner(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activePartner === index ? "w-6 bg-zinc-900" : "w-2.5 bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Project Check-Up CTA ── */}
      <section className="relative bg-[#F9F9FB] py-28 px-6 sm:px-8 lg:px-12 border-t border-zinc-100/50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Chat Icon & Bubble */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* The grey gradient card */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center justify-center border border-zinc-800/80">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
              </svg>
            </div>
            {/* Holaa! speech bubble */}
            <div className="absolute -top-6 left-[calc(50%+24px)] bg-white text-zinc-800 font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-zinc-200/80 shadow-md select-none animate-float whitespace-nowrap">
              Holaa!
              <span className="absolute bottom-[-5px] left-[20%] w-2.5 h-2.5 bg-white border-r border-b border-zinc-200/80 rotate-45" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-zinc-900 mb-6 max-w-3xl leading-[1.1]">
            Get a free<br />project check-up
          </h2>
          <p className="text-zinc-500 text-base sm:text-xl max-w-2xl leading-relaxed">
            Drop us a message or book a quick call. Whether it&apos;s revamping a full-blown site or nurturing the kernel of an idea, we&apos;re here to make it happen.
          </p>

          {/* CTA Card */}
          <div className="relative mt-16 w-full max-w-md mx-auto rounded-2xl text-left overflow-hidden flex flex-col p-8 md:p-10">
            {/* The background grid image wrapper */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/CTA.png"
                alt="CTA Background"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative z-10 flex flex-col h-full space-y-6">
              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-900 leading-tight flex flex-wrap items-center gap-x-2">
                <span>Book a</span>
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">30-min</span>
                <span>Introduction Call 👋</span>
              </h3>

              {/* Description */}
              <p className="text-zinc-600 text-[15px] leading-relaxed">
                Hop on a{" "}
                <span className="inline-block bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded font-medium text-sm">
                  quick call
                </span>{" "}
                and turn half an hour into the start of something{" "}
                <span className="inline-block bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded font-medium text-sm">
                  great.
                </span>
              </p>

              {/* Subheading */}
              <h4 className="text-[16px] font-medium text-zinc-950">
                What we&apos;ll be doing for ~30 mins:
              </h4>

              {/* List */}
              <ul className="space-y-3">
                {[
                  "A quick intro.",
                  "Unpacking your project.",
                  "Pinpoint how we can help."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-700 text-[15px]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href="/ContactUs"
                className="w-full py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-black transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 text-[15px] "
              >
                <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
