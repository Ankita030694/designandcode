"use client";

import Link from "next/link";
import Image from "next/image";
import CTA from "../Components/cta";
import Footer from "../Components/footer";
import { PROJECTS_DATA } from "../data/projects";

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
              <div className={`relative rounded-3xl bg-gradient-to-br ${project.bg} overflow-hidden border border-zinc-200/50 shadow-sm transition-shadow duration-300 hover:shadow-md`}>
                <div className="relative w-full transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
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
