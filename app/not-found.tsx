"use client";

import Link from "next/link";
import Image from "next/image";
import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center h-[100dvh] max-h-[100dvh] w-full overflow-hidden px-4 select-none">
      {/* ── Background Countryside Landscape ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Countryside hills and sky"
          fill
          priority
          className="object-cover object-center select-none"
        />
        {/* Atmospheric vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none" />
      </div>

      {/* ── Floating Vibrant Doodles / Stickers ── */}
      {/* Top-Right Pulsing Lime Sparkle */}
      <div className="absolute top-[18%] right-[8%] sm:right-[15%] w-10 h-10 text-[#bef264] pointer-events-none z-10 animate-pulse drop-shadow-md">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M5.75 19.25l12.5-12.5" />
        </svg>
      </div>

      {/* Top-Left Sky Star */}
      <div className="absolute top-[22%] left-[8%] sm:left-[14%] w-9 h-9 text-sky-300 pointer-events-none z-10 drop-shadow-md">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M5 5l14 14M5 19L14 5" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom-Left Rose Doodle */}
      <div className="absolute bottom-[18%] left-[10%] sm:left-[16%] w-8 h-8 text-rose-300 pointer-events-none z-10 drop-shadow-md">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* ── Center Glassmorphic Card ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full bg-white/85 backdrop-blur-xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 border border-white/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] mx-auto">
        
        {/* Red Pushpin Sticker */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-8 z-20 flex items-center justify-center drop-shadow-md pointer-events-none">
          <Image
            src="/pin.png"
            alt="Pin"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>

        {/* Glitchy/fuzzy 404 text */}
        <div className="mb-3 select-none cursor-pointer flex justify-center w-full overflow-hidden">
          <FuzzyText
            fontSize="clamp(4.5rem, 14vw, 7rem)"
            fontWeight={900}
            gradient={["#0094FF", "#7B73C4", "#BE5A88", "#FF234E", "#FF6E38", "#FFA82E", "#FFD600"]}
            enableHover={true}
            baseIntensity={0.15}
            hoverIntensity={0.6}
            glitchMode={true}
            glitchInterval={2500}
            clickEffect={true}
          >
            404
          </FuzzyText>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-2">
          Lost in Space?
        </h1>

        {/* Description */}
        <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
          The page you are looking for doesn&apos;t exist or has been relocated. Let&apos;s get you back on track.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex h-[42px] px-6 items-center justify-center rounded-[12px] bg-[#18181b] text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
          >
            Go Back Home
          </Link>
          <Link
            href="/ContactUs"
            className="w-full sm:w-auto inline-flex h-[42px] px-6 items-center justify-center rounded-[12px] bg-white border border-zinc-200/80 text-zinc-800 text-sm font-semibold transition-all duration-200 hover:bg-zinc-50 hover:scale-[1.02] active:scale-95 shadow-xs"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
