"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/footer";
import FAQ from "../Components/FAQ";
import { PROJECTS_DATA } from "../data/projects";

// ─── PAGE COMPONENT ───
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Shopify Store" | "Custom Code">("All");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "All") return true;
    return project.projectType === activeFilter;
  });

  return (
    <main className="relative flex flex-col min-h-screen pt-20 bg-transparent">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="hero-glow w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bottom-[-100px] right-[-100px] opacity-40" />
        <div className="hero-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] top-[10%] left-[-150px] opacity-25" />
      </div>

      <div className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 sm:px-8 py-12 md:py-16">        {/* ─── Hero Header & Filter Section ─── */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div className="max-w-2xl">
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
            <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Discover how we enhance our clients&apos; digital presence.
            </p>
          </div>
        </div>

        {/* ─── Tab Filter Menu (Capsule Style) ─── */}
        <div className="flex justify-center mb-16 relative z-20">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#f4f1e6] border border-zinc-200/40 select-none shadow-xs">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === "All"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("Shopify Store")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === "Shopify Store"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Shopify Stores
            </button>
            <button
              onClick={() => setActiveFilter("Custom Code")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === "Custom Code"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              Custom Code
            </button>
          </div>
        </div>

        {/* ─── Projects Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project, idx) => (
            <Link href={`/Projects/${project.slug}`} prefetch={true} key={project.slug} className="group block cursor-pointer">
              <article>
                <div className={`relative rounded-3xl bg-gradient-to-br ${project.bg} overflow-hidden border border-zinc-200/50 shadow-sm transition-shadow duration-300 hover:shadow-md`}>
                  <div className="relative w-full transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={450}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      priority={idx < 4}
                      loading={idx < 4 ? "eager" : "lazy"}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="mt-6 px-1">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-black flex items-center justify-between gap-2 flex-wrap">
                    <span>{project.title}</span>
                    <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
                      project.projectType === "Shopify Store" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200/60" 
                        : "bg-indigo-50 text-indigo-700 border-indigo-200/60"
                    }`}>
                      {project.projectType}
                    </span>
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
            </Link>
          ))}
        </div>

      </div>

      <FAQ />

      <Footer />
    </main>
  );
}
