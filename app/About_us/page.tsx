"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";

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

const CardBgSquares = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px] z-0">
    {/* Top-left overlapping border */}
    <div className="absolute top-[8%] left-[-16px] w-12 h-12 border border-zinc-200/50 rounded-xl" />
    
    {/* Behind photo area */}
    <div className="absolute top-[18%] left-[8%] w-14 h-14 border border-zinc-200/40 rounded-2xl" />
    
    {/* Middle cluster */}
    <div className="absolute top-[6%] left-[36%] w-14 h-14 border border-zinc-200/50 rounded-2xl" />
    <div className="absolute top-[28%] left-[28%] w-12 h-12 border border-zinc-200/40 rounded-xl" />
    <div className="absolute top-[22%] left-[48%] w-16 h-16 border border-zinc-200/50 rounded-2xl" />
    
    {/* Right cluster */}
    <div className="absolute top-[12%] left-[68%] w-12 h-12 border border-zinc-200/40 rounded-xl" />
    <div className="absolute top-[32%] left-[60%] w-14 h-14 border border-zinc-200/50 rounded-2xl" />
    <div className="absolute top-[20%] left-[84%] w-14 h-14 border border-zinc-200/50 rounded-2xl" />
    
    {/* Far right overflowing border */}
    <div className="absolute top-[6%] right-[-16px] w-12 h-12 border border-zinc-200/50 rounded-xl" />
    <div className="absolute top-[30%] right-[-24px] w-14 h-14 border border-zinc-200/50 rounded-2xl" />
  </div>
);

const teamMembers = [
  {
    name: "Ankita Malik",
    role: "Co-Founder & Managing Director",
    imageSrc: "/ankita.png",
  },
  {
    name: "Bhavya",
    role: "SDE",
    imageSrc: "/bhavya.png",
  },
  {
    name: "Zaib",
    role: "Designer & Frontend Developer",
    imageSrc: "/zaib.png",
  },
];

const statsItems = [
  {
    target: 15,
    suffix: "+",
    label: "Years of clinical experience",
  },
  {
    target: 12,
    suffix: "k+",
    label: "Smiles treated and counting",
  },
  {
    target: 98,
    suffix: "%",
    label: "Patient satisfaction rating",
  },
  {
    target: 9,
    suffix: "",
    label: "Specialists across every field",
  },
];

const storyData = {
  kicker: "Our Story",
  title: "Care that started with a simple promise",
  paragraphs: [
    "Dentora began with a single treatment room and one belief: going to the dentist shouldn't feel like something to endure. From our first patient onward, we designed every detail — from the light in our waiting area to the way we explain each procedure — around calm, clarity, and trust.",
    "Today, our team of nine specialists covers everything from preventive care to full-mouth restoration, supported by 3D imaging, same-day crowns, and digital treatment planning. But the promise hasn't changed: honest advice, gentle hands, and a plan that fits your life — not the other way around.",
    "We measure success in quiet moments: a nervous patient who falls asleep in the chair, a teenager smiling freely in photos again, a family that's been with us for a decade. That's the work we're proudest of."
  ],
  cards: [
    {
      title: "Honesty first",
      description: "We only recommend treatment you actually need, explained in plain language with clear pricing before we begin."
    },
    {
      title: "Comfort by design",
      description: "Noise-cancelling headphones, warm blankets, and sedation options make every visit as calm as possible."
    },
    {
      title: "Technology that helps",
      description: "3D imaging, digital scans, and same-day crowns mean fewer visits, faster healing, and better outcomes."
    }
  ]
};

export default function AboutUs() {
  return (
    <main className="relative flex flex-col flex-1 homepage-grid-bg overflow-hidden pt-20">
      {/* ── About Us Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center py-20 px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background glow effects */}
        <div className="hero-glow w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bottom-[-100px] right-[-100px] opacity-75" />
        <div className="hero-glow w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] top-[-100px] left-[-100px] opacity-35" />

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center px-4 sm:px-6">
          
          {/* Header Title */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-tight max-w-4xl mb-4">
            What&apos;s{" "}
            <span className="inline-flex items-center align-middle mx-1.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 p-2 rounded-xl shadow-md border border-zinc-800 w-10 h-10 sm:w-12 sm:h-12 justify-center">
              <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>{" "}
            the deal with{" "}
            <span className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent decoration-blue-500/30 decoration-2 underline-offset-8">
              Designncode?
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8">
            Combining our user-centric philosophy with composable architecture, gorgeous design, and raw innovation, we&apos;re on a quest to change the way sites are built.
          </p>

          {/* Interactive Orbiting Visuals Area */}
          <div className="relative w-full max-w-2xl aspect-[16/9] flex items-center justify-center select-none">
            <Image
              src="/About us.png"
              alt="About Us Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="relative w-full max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {statsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-200/40 rounded-[12px] p-8 pt-10 pb-8 flex flex-col justify-between transition-all duration-300 ease-out group border-2 border-zinc-100"
            >
              <div>
                <span className="block text-zinc-900 font-medium text-2xl md:text-5xl tracking-tight leading-none group-hover:text-black transition-colors duration-300">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </span>
                <p className="text-zinc-500 font-normal text-sm md:text-base mt-4 leading-normal">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story Section ── */}
      <section className="relative w-full max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12 z-10">
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
          <div className="w-full md:w-[50%] flex flex-col gap-6 text-zinc-500 text-sm sm:text-base leading-relaxed font-light">
            {storyData.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </div>

        {/* Bottom row: three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {storyData.cards.map((card, index) => (
            <div
              key={index}
              className="bg-zinc-50 border border-zinc-100 rounded-[24px] p-8 pt-10 pb-8 flex flex-col justify-between hover:bg-zinc-100/50 transition-all duration-300 ease-out"
            >
              <div>
                <h3 className="text-zinc-900 font-medium text-lg sm:text-xl tracking-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-500 font-light text-sm mt-3 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Meet the Team Section ── */}
      <section className="relative w-full max-w-6xl mx-auto py-24 px-6 sm:px-8 lg:px-12 z-10">
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
          <p className="text-zinc-500 text-sm sm:text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
            It&apos;s not just what we do - it&apos;s who we are. Meet the exceptional people that make it all happen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="relative bg-white  border border-zinc-200/40 rounded-[32px] p-7 pt-8 flex flex-col justify-between min-h-[260px] md:min-h-[280px] transition-all duration-500 ease-out group overflow-visible"
            >
              {/* Background outline decorative squares */}
              <CardBgSquares />

              {/* Top part: Elevated Portrait */}
              <div className="relative z-10 self-start">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-[24px] overflow-hidden shadow-md border border-zinc-200/20 group-hover:shadow-[0_25px_40px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out group-hover:-translate-y-8 group-hover:-translate-x-2 group-hover:scale-[1.03]">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 112px, 128px"
                  />
                </div>
              </div>

              {/* Bottom part: Name and Role */}
              <div className="relative z-10 mt-auto pt-6">
                <h3 className="text-zinc-900 font-semibold text-lg md:text-xl tracking-tight group-hover:text-black transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-zinc-400 font-medium text-sm md:text-base mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </main>
  );
}

