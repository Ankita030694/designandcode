"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "../Components/cta";
import Footer from "../Components/footer";
import FAQ from "../Components/FAQ";

// ─── TYPES & INTERFACES ───
type ContentType = "All" | "Fundamentals" | "Guides" | "Insights";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  contentType: Exclude<ContentType, "All">;
  topic: string;
  tag: string;
  date: string;
  duration: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  isFeatured?: boolean;
  // Specific for featured podcast card replica
  episodeNumber?: string;
  guestName?: string;
}

// ─── MOCK BLOG POST DATA ───
const BLOG_POSTS: BlogPost[] = [
  {
    id: "2",
    title: "The Architectural Guide to Composable Web Applications",
    description: "Discover how to build highly scalable, decoupled web applications using Next.js and headless CMS solutions. We break down step-by-step modular designs that scale seamlessly.",
    contentType: "Guides",
    topic: "Composability",
    tag: "Guide",
    date: "July 12, 2026",
    duration: "12 min read",
    author: {
      name: "Sarah Lin",
      avatar: "/Client_Logo/wp.svg"
    },
    image: "/Web.svg"
  },
  {
    id: "3",
    title: "Bringing Your Users Into Focus: Web Analytics Redefined",
    description: "A deep dive into setting up custom telemetry that respects user privacy while delivering actionable insights. Learn how to track Core Web Vitals and user navigation flows without performance drag.",
    contentType: "Fundamentals",
    topic: "Data & Analytics",
    tag: "Article",
    date: "July 8, 2026",
    duration: "8 min read",
    author: {
      name: "Alex Rivera",
      avatar: "/Client_Logo/wp.svg"
    },
    image: "/Data.svg"
  },
  {
    id: "4",
    title: "The Future of Minimalist UI: Design Trends to Watch in 2026",
    description: "Exploring glassmorphism, responsive micro-interactions, dark mode optimizations, and cohesive design token architectures in modern enterprise web applications.",
    contentType: "Insights",
    topic: "Design",
    tag: "Article",
    date: "July 2, 2026",
    duration: "10 min read",
    author: {
      name: "Elena Rostova",
      avatar: "/Client_Logo/wp.svg"
    },
    image: "/Design.svg"
  },
  {
    id: "5",
    title: "Optimizing Next.js App Router for Core Web Vitals",
    description: "A comprehensive checklist to achieve perfect Lighthouse scores. We cover React Server Components, client-side hydration optimizations, font display, and edge routing strategies.",
    contentType: "Guides",
    topic: "Development",
    tag: "Technical Guide",
    date: "June 28, 2026",
    duration: "15 min read",
    author: {
      name: "Marcus Chen",
      avatar: "/Client_Logo/wp.svg"
    },
    image: "/5.svg"
  },
  {
    id: "6",
    title: "Scaling Headless Shopify Frontends to 10M+ Monthly Visits",
    description: "How modular composable design systems and edge-rendering helped a high-growth retail brand reduce latency by 45% and boost checkout conversion rates.",
    contentType: "Fundamentals",
    topic: "Ecommerce",
    tag: "Case Study",
    date: "June 15, 2026",
    duration: "18 min read",
    author: {
      name: "Jessica Vance",
      avatar: "/Client_Logo/wp.svg"
    },
    image: "/E-Commerce.png"
  },
  {
    id: "7",
    title: "The Incomplete Pitch: A Method for B2B Tech Marketing",
    description: "Discover why leaving gaps in your product presentation is the ultimate cheat code for closing enterprise B2B sales in 2026. A framework for design-led marketing.",
    contentType: "Insights",
    topic: "Development",
    tag: "Article",
    date: "July 23, 2026",
    duration: "8 min read",
    author: {
      name: "Sarah Lin",
      avatar: "/Client_Logo/wp.svg"
    },
    image: "/b2b_tech_marketing_hero.png"
  }
];

export default function BlogsPage() {
  const [selectedContentType, setSelectedContentType] = useState<ContentType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // ─── FILTER LOGIC ───
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesContentType =
        selectedContentType === "All" || post.contentType === selectedContentType;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower) ||
        post.tag.toLowerCase().includes(searchLower) ||
        (post.guestName && post.guestName.toLowerCase().includes(searchLower));

      return matchesContentType && matchesSearch;
    });
  }, [selectedContentType, searchQuery]);

  // Separate featured post if it's matching the filters (or if we want it standard)
  const { featuredPost, regularPosts } = useMemo(() => {
    const featured = filteredPosts.find((p) => p.isFeatured);
    const regulars = filteredPosts.filter((p) => !p.isFeatured);
    return { featuredPost: featured, regularPosts: regulars };
  }, [filteredPosts]);

  const resetFilters = () => {
    setSelectedContentType("All");
    setSearchQuery("");
  };

  return (
    <main className="relative flex flex-col min-h-screen pt-20 bg-[#FFFCF5]">
      {/* Background glow effects wrapped to avoid blocking sticky behavior */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
      </div>

      <div className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 sm:px-8 py-12 md:py-16">
        
        {/* ─── Hero Header Section ─── */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-regular tracking-tight text-zinc-900 leading-[1.1] mb-6">
            Our latest <span className="bg-gradient-to-r from-[#facc15] via-indigo-600 to-violet-600 bg-clip-text text-transparent font-semibold">thoughts</span> & <span className="relative decoration-indigo-500/20 decoration-4 underline-offset-8">discoveries</span>.
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Delve into composable architecture guidelines, industry-leading design systems strategies, headless technology deep-dives, and insights from our team.
          </p>
        </div>

        {/* ─── Search & Mobile Filter Bar ─── */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search articles, guides, podcasts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-zinc-200/80 rounded-2xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-400 hover:text-zinc-600"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Active Filter Pills Info */}
          {(selectedContentType !== "All" || searchQuery) && (
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 hover:border-indigo-200 transition-all"
            >
              Clear filters
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* ─── Mobile Horizontal Filters (Hidden on Desktop) ─── */}
        <div className="lg:hidden mb-8 space-y-4">
          <div>
            <span className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase block mb-2 pl-1">Content Types</span>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mask-image-r">
              {(["All", "Fundamentals", "Guides", "Insights"] as ContentType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedContentType(type)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    selectedContentType === type
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                      : "bg-white/80 text-zinc-600 border-zinc-200 hover:border-zinc-350"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Main Grid Layout (Sidebar + Articles) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ─── Sidebar (Desktop Only) ─── */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24 self-start">
            
            {/* Content Types Card */}
            <div className="bg-white/80 backdrop-blur-md border border-zinc-200/70 rounded-3xl p-6 shadow-sm">
              <h2 className="text-[10px] sm:text-[11px] font-bold text-zinc-400 tracking-wider uppercase mb-5 select-none">
                Content Types
              </h2>
              <div className="flex flex-col gap-2">
                {/* All */}
                <button
                  onClick={() => setSelectedContentType("All")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedContentType === "All"
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                  <span>All Content</span>
                </button>

                {/* Fundamentals */}
                <button
                  onClick={() => setSelectedContentType("Fundamentals")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedContentType === "Fundamentals"
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                  <span>Fundamentals</span>
                </button>

                {/* Guides */}
                <button
                  onClick={() => setSelectedContentType("Guides")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedContentType === "Guides"
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span>Guides</span>
                </button>

                {/* Insights */}
                <button
                  onClick={() => setSelectedContentType("Insights")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedContentType === "Insights"
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 0 0 12 18.75a3 3 0 0 0 2.47-2.628m-4.94 0A6.002 6.002 0 0 1 12 6a6.002 6.002 0 0 1 4.94 10.122m-4.94 0H12m0 0h2.47" />
                  </svg>
                  <span>Insights</span>
                </button>
              </div>
            </div>
          </aside>

          {/* ─── Articles Content Area (Grid) ─── */}
          <section className="col-span-1 lg:col-span-9 space-y-12">
            
            {/* Case: No Results Found */}
            {filteredPosts.length === 0 && (
              <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white/70 backdrop-blur-sm border border-zinc-200/70 rounded-3xl shadow-sm">
                <svg className="w-12 h-12 text-zinc-400 mb-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="text-lg font-semibold text-zinc-800">No Articles Found</h3>
                <p className="text-zinc-500 text-sm mt-1 max-w-sm">
                  We couldn&apos;t find any posts matching your selected filters or search query.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 px-5 py-2.5 bg-zinc-900 text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* ─── FEATURED POST CARD (Podcast replica from image) ─── */}
            {featuredPost && (
              <Link href={`/Blogs/Slug?id=${featuredPost.id}`} className="flex flex-col group cursor-pointer">
                {/* Cover Card */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[32px] overflow-hidden bg-zinc-950 border border-zinc-200/10 shadow-lg">
                  {/* Backdrop Image */}
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    priority
                    className="object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Dark Radial/Gradient Overlay to match look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                  
                  {/* Top Left: White Micro Badge for Content Type */}
                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 bg-white text-zinc-900 rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    {/* Microphone SVG */}
                    <svg className="w-3.5 h-3.5 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                    <span>{featuredPost.tag}</span>
                  </div>

                  {/* Overlaid Texts (centered vertically and aligned left) */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-white">
                    {/* Category Label (e.g. UX DESIGN) */}
                    <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/90 uppercase mb-2 block animate-fade-in-up">
                      UX DESIGN
                    </span>

                    {/* Stacked Large Names (e.g. JAMES / MCDONALD) */}
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase max-w-xl font-sans drop-shadow-sm select-none">
                      {featuredPost.guestName ? (
                        <>
                          {featuredPost.guestName.split(" ")[0]}
                          <br />
                          {featuredPost.guestName.split(" ")[1]}
                        </>
                      ) : (
                        "JAMES MCDONALD"
                      )}
                    </h2>

                    {/* Subtitle / Episode Number (e.g. // EP01) */}
                    <div className="mt-4 sm:mt-6 font-mono text-sm sm:text-lg font-bold tracking-wider text-white/80 select-none">
                      // {featuredPost.episodeNumber || "EP01"}
                    </div>
                  </div>
                </div>

                {/* Title & Metadata below the Card */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
                    <span className="px-2.5 py-1 bg-zinc-100 rounded-lg text-zinc-600">{featuredPost.contentType}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {featuredPost.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-4xl">
                    {featuredPost.description}
                  </p>
                </div>
              </Link>
            )}

            {/* ─── REGULAR BLOGS GRID ─── */}
            {regularPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {regularPosts.map((post) => (
                  <Link key={post.id} href={`/Blogs/Slug?id=${post.id}`} className="group cursor-pointer flex flex-col">
                    {/* Image Wrapper */}
                    <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-zinc-100 border border-zinc-200/50 shadow-sm mb-5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                      
                      {/* Category Label Pill inside Top Left */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-zinc-800 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase border border-zinc-250/30">
                        {post.tag}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-zinc-400 mb-2">
                      <span className="text-indigo-600">{post.contentType}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.duration}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors duration-200 mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h4>

                    {/* Short Description */}
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {post.description}
                    </p>

                    {/* Bottom Link Action */}
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-zinc-800 group-hover:text-indigo-600 transition-colors">
                      <span>Read article</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            )}

          </section>
        </div>

      </div>

      <FAQ />
      {/* CTA section */}
      <CTA />

      {/* Footer component */}
      <Footer />
    </main>
  );
}
