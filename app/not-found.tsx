"use client";

import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12 text-center bg-[#F4F8FF] relative overflow-hidden">
      {/* Dynamic blurred background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-radial from-[#0C1833]/10 to-transparent blur-[80px] -z-10 pointer-events-none" />

      <div className="flex flex-col items-center max-w-lg mx-auto z-10">
        {/* Glitchy/fuzzy 404 text */}
        <div className="mb-6 select-none cursor-pointer">
          <FuzzyText
            fontSize="clamp(6rem, 18vw, 12rem)"
            fontWeight={900}
            gradient={["#2563EB", "#FACC15"]}
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
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 mb-3">
          Lost in Space?
        </h1>

        {/* Description */}
        <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
          The page you are looking for doesn&apos;t exist or has been relocated. Let&apos;s get you back on track.
        </p>

        {/* Navigation Link Button */}
        <Link
          href="/"
          className="inline-flex h-[44px] px-6 items-center justify-center rounded-[10px] bg-[#18181b] text-white text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
