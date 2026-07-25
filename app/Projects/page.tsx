"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CTA from "../Components/cta";
import Footer from "../Components/footer";
import FAQ from "../Components/FAQ";
import { PROJECTS_DATA } from "../data/projects";

// ─── PAGE COMPONENT ───
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Shopify Store" | "Custom Code">("All");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "All") return true;
    return project.projectType === activeFilter;
  });

  return (
    <main className="relative flex flex-col min-h-screen homepage-grid-bg pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="hero-glow w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bottom-[-100px] right-[-100px] opacity-40" />
        <div className="hero-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] top-[10%] left-[-150px] opacity-25" />
      </div>

      <div className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 sm:px-8 py-12 md:py-16">
        
        {/* ─── Hero Header & Filter Section ─── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 sm:mb-20">
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

          {/* Elegant Custom Dropdown */}
          <div className="relative z-50 self-start md:self-end" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-white border border-zinc-200 text-zinc-800 text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-zinc-300 active:scale-[0.98] transition-all duration-200 cursor-pointer min-w-[200px]"
            >
              <span>{activeFilter === "All" ? "All Projects" : activeFilter === "Shopify Store" ? "Shopify Stores" : "Custom Code"}</span>
              <svg
                className={`w-4.5 h-4.5 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute left-0 md:right-0 mt-2.5 w-52 bg-white/95 backdrop-blur-md border border-zinc-200/60 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-1.5 focus:outline-none z-50 animate-fade-in-up">
                {(["All", "Shopify Store", "Custom Code"] as const).map((filterOption) => (
                  <button
                    key={filterOption}
                    onClick={() => {
                      setActiveFilter(filterOption);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 flex items-center justify-between cursor-pointer ${
                      activeFilter === filterOption
                        ? "text-zinc-950 font-semibold bg-zinc-50"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50/50"
                    }`}
                  >
                    <span>{filterOption === "All" ? "All Projects" : filterOption === "Shopify Store" ? "Shopify Stores" : "Custom Code"}</span>
                    {activeFilter === filterOption && (
                      <svg className="w-4 h-4 text-zinc-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ─── Projects Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project) => (
            <Link href={`/Projects/${project.slug}`} key={project.slug} className="group block cursor-pointer">
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
                <div className="mt-6 px-1">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2 transition-colors duration-300 group-hover:text-black flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span>{project.title}</span>
                      <span className="text-lg" title="Country">{project.flag}</span>
                    </div>
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
      {/* CTA section */}
      <CTA />

      <Footer />
    </main>
  );
}
