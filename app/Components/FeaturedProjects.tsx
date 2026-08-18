"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface StoryboardProject {
  title: string;
  category: string;
  platform: string;
  year: string;
  image: string;
  clipColor: string;
  rotation: string;
  link: string;
}

const DEFAULT_PROJECTS: StoryboardProject[] = [
  {
    title: "AMA Legal Solutions",
    category: "Legal Services",
    platform: "Next.js",
    year: "2026",
    image: "/project/AMA.svg",
    clipColor: "text-teal-500",
    rotation: "rotate-[-2deg] hover:rotate-[0deg]",
    link: "/Projects/ama",
  },
  {
    title: "Trivora Jewels",
    category: "Fine Jewellery",
    platform: "Shopify",
    year: "2026",
    image: "/Trivaro.jpg",
    clipColor: "text-amber-500",
    rotation: "rotate-[2.5deg] hover:rotate-[0deg]",
    link: "/Projects/trivora-jewels",
  },
  {
    title: "HONK",
    category: "Mobility & Transit",
    platform: "UI/UX",
    year: "2026",
    image: "/project/HONK.svg",
    clipColor: "text-sky-500",
    rotation: "rotate-[3deg] hover:rotate-[0deg]",
    link: "/Projects/honk",
  },
  {
    title: "The Fat Cookie Chef",
    category: "Gourmet Bakery",
    platform: "Shopify",
    year: "2026",
    image: "/project/The_fat_cookie.svg",
    clipColor: "text-rose-500",
    rotation: "rotate-[2deg] hover:rotate-[0deg]",
    link: "/Projects/the-fat-cookie",
  },
];

export default function FeaturedProjects({
  projects = DEFAULT_PROJECTS,
  title = "PROJECTS THAT\nTELL STORIES",
  stickerText = "Projects",
}: {
  projects?: StoryboardProject[];
  title?: string;
  stickerText?: string;
}) {
  return (
    <section className="relative w-full py-16 md:py-24 flex flex-col justify-center overflow-hidden z-10 font-sans select-none bg-transparent">
      {/* ── STATEMENT/TITLE CONTAINER ── */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-6 mb-16 select-none">
        {/* Projects Sticker (Pinned with clip) */}
        <div className="relative mb-6 transform -rotate-12 bg-sky-50 border border-sky-100 shadow-md rounded-xl px-5 py-1.5 text-sky-600 font-extrabold text-sm flex items-center gap-1.5 hover:scale-105 transition-transform duration-200">
          {/* Paperclip */}
          <div className="absolute -top-3.5 left-3 text-zinc-400">
            <svg
              className="w-4 h-6"
              viewBox="0 0 20 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10" />
            </svg>
          </div>
          <span className="pl-2">{stickerText}</span>
        </div>

        <h2 className="text-zinc-950 font-extrabold text-4xl sm:text-5xl md:text-[52px] tracking-tight uppercase leading-[1.05] max-w-3xl text-center select-none whitespace-pre-line">
          {title}
        </h2>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col gap-10 select-none pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.title}
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`relative bg-white/95 backdrop-blur-sm border border-zinc-200/80 rounded-2xl p-3.5 shadow-xl hover:shadow-2xl transition-all duration-300 ${project.rotation} w-full flex flex-col justify-between select-none`}
              >
                {/* Paperclip */}
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 z-30 drop-shadow-md ${project.clipColor}`}
                >
                  <svg
                    className="w-5 h-8 transform -rotate-12"
                    viewBox="0 0 20 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M4 10v12a6 6 0 1012 0V8a4 4 0 00-8 0v12a2 2 0 004 0V10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* macOS traffic light buttons */}
                <div className="flex gap-1.5 mb-2.5 px-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C5C]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFCC00]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#32CD32]" />
                </div>

                {/* Image Preview Container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-150 bg-zinc-900 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Text bar */}
                <div className="flex items-center justify-between pt-3 px-1">
                  <span className="text-sm font-extrabold text-zinc-950 uppercase tracking-wide">
                    {project.title}
                  </span>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.platform}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
