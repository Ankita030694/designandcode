"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";

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
    name: "Tayo Onabule",
    role: "Co-Founder & Managing Director",
    imageSrc: "/tayo.png",
  },
  {
    name: "Charlie-George Baker",
    role: "Co-Founder & Creative Director",
    imageSrc: "/charlie.png",
  },
  {
    name: "Dewey Robbins",
    role: "Data Partner",
    imageSrc: "/dewey.png",
  },
];

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

