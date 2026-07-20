"use client";

import Link from "next/link";
import Image from "next/image";
import CTA from "../Components/cta";
import Footer from "../Components/footer";

// ─── PROJECT MOCK DATA ───
const PROJECTS_DATA = [
  {
    title: "Bank Al Etihad",
    description:
      "A fully composable atomic design overhaul that streamlined workflows, reduced friction, and accelerated iterative development.",
    tags: ["Atomic Systems", "Enterprise", "UI/UX"],
    flag: "🇯🇴",
    bg: "from-[#f87171]/20 via-[#fb923c]/15 to-[#fecaca]/30",
    mockupAccent: "bg-gradient-to-br from-orange-400 to-red-400",
  },
  {
    title: "WP Engine",
    description:
      "Implementing composable Headless WordPress architecture and design systems to enhance scalability and personalisation.",
    tags: ["Development", "Enterprise", "UI/UX"],
    flag: "🇺🇸",
    bg: "from-[#60a5fa]/20 via-[#38bdf8]/15 to-[#bae6fd]/30",
    mockupAccent: "bg-gradient-to-br from-sky-400 to-blue-500",
  },
  {
    title: "Android Authority",
    description: "Enhancing Core Web Vitals and User Retention with migration to a Headless CMS.",
    tags: ["Enterprise", "Headless", "UI/UX"],
    flag: "🇨🇦",
    bg: "from-zinc-200/60 via-zinc-100/40 to-zinc-200/30",
    mockupAccent: "bg-gradient-to-br from-zinc-400 to-zinc-600",
  },
  {
    title: "Amplifidor",
    description: "Creating a scalable, user-focused platform using composable design systems.",
    tags: ["UI/UX"],
    flag: "🇸🇦",
    bg: "from-[#f472b6]/15 via-[#a78bfa]/10 to-[#fbcfe8]/25",
    mockupAccent: "bg-gradient-to-br from-pink-400 to-violet-400",
  },
];

// ─── COMPONENT: PROJECT MOCKUP ───
function ProjectMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-[85%] mx-auto mt-8 mb-2 transition-transform duration-500 group-hover:scale-[1.02]">
      <div className={`absolute inset-0 ${accent} rounded-2xl blur-2xl opacity-30 scale-95 transition-opacity duration-500 group-hover:opacity-40`} />
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

// ─── PAGE COMPONENT ───
export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen homepage-grid-bg pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="hero-glow w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bottom-[-100px] right-[-100px] opacity-40" />
        <div className="hero-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] top-[10%] left-[-150px] opacity-25" />
      </div>

      <div className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 sm:px-8 py-12 md:py-16">
        
        {/* ─── Hero Header Section ─── */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6">
            Our{" "}
            <span className="relative inline-block select-none">
              Projects
              <svg 
                className="absolute -top-4 -right-8 w-8 h-8 text-zinc-400 select-none pointer-events-none" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                {/* Radiating sparkle wedges from top-right of Projects */}
                <path d="M4 20 L2 11 L6 11 Z" transform="rotate(-40 4 20)" />
                <path d="M4 20 L2 11 L6 11 Z" transform="rotate(-15 4 20)" />
                <path d="M4 20 L2 11 L6 11 Z" transform="rotate(15 4 20)" />
                <path d="M4 20 L2 11 L6 11 Z" transform="rotate(40 4 20)" />
              </svg>
            </span>
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Discover how we enhance our clients&apos; digital presence.
          </p>
        </div>

        {/* ─── Projects Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS_DATA.map((project) => (
            <article key={project.title} className="group cursor-pointer">
              <div className={`relative rounded-3xl bg-gradient-to-br ${project.bg} p-6 pb-4 overflow-hidden border border-zinc-200/50 shadow-sm transition-shadow duration-300 hover:shadow-md`}>
                <ProjectMockup accent={project.mockupAccent} />
              </div>
              <div className="mt-6 px-1">
                <h3 className="text-xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-black flex items-center gap-2">
                  <span>{project.title}</span>
                  <span className="text-lg" title="Country">{project.flag}</span>
                </h3>
                <p className="text-zinc-500 text-[15px] leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white border border-zinc-150 text-zinc-700 text-xs font-medium shadow-[0_2px_6px_rgba(0,0,0,0.04)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* CTA section */}
      <CTA />

      <Footer />
    </main>
  );
}
