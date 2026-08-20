"use client";

import { useState, useMemo, useEffect } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Image from "next/image";
import Link from "next/link";
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
  slug?: string;
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
  const [blogsData, setBlogsData] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContentType, setSelectedContentType] = useState<ContentType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(
          collection(db, "blogs"),
          where("published", "==", true),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        const fetchedBlogs: BlogPost[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "Untitled",
            description: data.subtitle || data.description || "",
            contentType: "Insights", // Default
            topic: "Web", // Default
            tag: "Article", // Default
            date: data.date || new Date().toISOString().split('T')[0],
            duration: "5 min read", // Default
            author: {
              name: data.author || "Admin Team",
              avatar: "/Client_Logo/wp.svg"
            },
            image: data.image || "/Web.svg",
            slug: data.slug || doc.id
          };
        });
        const mergedBlogs = [...fetchedBlogs];
        const hasDummy = mergedBlogs.some(b => b.slug === "personal-loan-harassment-india-guide");
        if (!hasDummy) {
          mergedBlogs.push({
            id: "personal-loan-harassment-india-guide",
            slug: "personal-loan-harassment-india-guide",
            title: "The Ultimate Guide to Modern Web Development & UI/UX Design for Enterprise Scale",
            description: "An in-depth handbook on building modular, high-performance web systems using composable architecture and design systems for enterprise scale.",
            contentType: "Guides",
            topic: "Web Dev & Design",
            tag: "Comprehensive Guide",
            date: "August 3, 2026",
            duration: "15 min read",
            author: {
              name: "Ankita Malik",
              avatar: "/Ankita.webp"
            },
            image: "/Web.svg",
            isFeatured: false
          });
        }
        setBlogsData(mergedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogsData([
          ...BLOG_POSTS,
          {
            id: "personal-loan-harassment-india-guide",
            slug: "personal-loan-harassment-india-guide",
            title: "The Ultimate Guide to Modern Web Development & UI/UX Design for Enterprise Scale",
            description: "An in-depth handbook on building modular, high-performance web systems using composable architecture and design systems for enterprise scale.",
            contentType: "Guides",
            topic: "Web Dev & Design",
            tag: "Comprehensive Guide",
            date: "August 3, 2026",
            duration: "15 min read",
            author: {
              name: "Ankita Malik",
              avatar: "/Ankita.webp"
            },
            image: "/Web.svg",
            isFeatured: false
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // ─── FILTER LOGIC ───
  const filteredPosts = useMemo(() => {
    return blogsData.filter((post) => {
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
    <main className="relative flex flex-col min-h-screen pt-20 bg-transparent">
      {/* Background glow effects wrapped to avoid blocking sticky behavior */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
      </div>

      <div className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 sm:px-8 py-12 md:py-16">
        
        {/* ─── Hero Header Section ─── */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-regular tracking-tight text-zinc-900 leading-[1.1] mb-6">
            Our latest <span className="bg-gradient-to-r from-sky-500 via-rose-500 to-amber-500 bg-clip-text text-transparent font-semibold">thoughts</span> & <span className="relative decoration-rose-500/20 decoration-4 underline-offset-8">discoveries</span>.
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
                <button
                  onClick={() => setSelectedContentType("All")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedContentType === "All"
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <span>All Content</span>
                </button>
                <button
                  onClick={() => setSelectedContentType("Fundamentals")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedContentType === "Fundamentals"
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <span>Fundamentals</span>
                </button>
                <button
                  onClick={() => setSelectedContentType("Guides")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedContentType === "Guides"
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <span>Guides</span>
                </button>
                <button
                  onClick={() => setSelectedContentType("Insights")}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                    selectedContentType === "Insights"
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <span>Insights</span>
                </button>
              </div>
            </div>
          </aside>

          {/* ─── Articles Content Area (Grid) ─── */}
          <section className="col-span-1 lg:col-span-9 space-y-12">
            
            {/* Case: No Results Found */}
            {!isLoading && filteredPosts.length === 0 && (
              <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white/70 backdrop-blur-sm border border-zinc-200/70 rounded-3xl shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-800">No Articles Found</h3>
                <p className="text-zinc-500 text-sm mt-1 max-w-sm">
                  We couldn&apos;t find any posts matching your selected filters or search query.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 px-5 py-2.5 bg-zinc-900 text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition-all shadow-sm"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* ─── FEATURED POST CARD ─── */}
            {featuredPost && (
              <Link href={`/Blogs/${featuredPost.slug || featuredPost.id}`} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[32px] overflow-hidden bg-zinc-950 border border-zinc-200/10 shadow-lg">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    priority
                    className="object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-white">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/90 uppercase mb-2 block">
                      {featuredPost.tag}
                    </span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase max-w-xl font-sans drop-shadow-sm">
                      {featuredPost.title}
                    </h2>
                  </div>
                </div>
              </Link>
            )}

            {/* ─── REGULAR BLOGS GRID ─── */}
            {regularPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {regularPosts.map((post) => (
                  <Link key={post.id} href={`/Blogs/${post.slug || post.id}`} className="group cursor-pointer flex flex-col">
                    {/* Image Wrapper */}
                    <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-zinc-100 border border-zinc-200/50 shadow-sm mb-5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
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
                      {post.description.substring(0, 150)}...
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

      {/* Footer component */}
      <Footer />
    </main>
  );
}
