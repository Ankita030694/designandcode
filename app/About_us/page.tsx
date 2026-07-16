"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";

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

      {/* Footer component */}
      <Footer />
    </main>
  );
}
