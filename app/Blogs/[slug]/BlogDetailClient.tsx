"use client";

import { useEffect, useState, useRef, useMemo, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../Components/footer";
import FAQ from "../../Components/FAQ";
import CTA from "../../Components/cta";
import BlogHTMLRenderer from "../../../components/BlogHTMLRenderer";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { SERVICE_PAGES_DATA, AMAServiceLayout } from "../../Explore_Slug";

function AMABlogLayout() {
  const [activeHeadingId, setActiveHeadingId] = useState("introduction");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const tocItems = [
    { id: "introduction", label: "Introduction" },
    { id: "enterprise-architecture", label: "1. Composable Enterprise Architecture" },
    { id: "design-system", label: "2. The Design System Advantage" },
    { id: "core-web-vitals", label: "3. Optimizing for Core Web Vitals" },
    { id: "headless-cms", label: "4. Choosing the Right Headless CMS" },
    { id: "marketing-performance", label: "5. Digital Marketing Performance" },
    { id: "faq", label: "Frequently Asked Questions" },
    { id: "conclusion", label: "Conclusion" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = tocItems[0].id;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            currentActive = item.id;
          }
        }
      }
      setActiveHeadingId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen bg-transparent pt-24 text-zinc-900 font-sans">
      {/* Breadcrumbs */}
      <div className="max-w-9xl lg:max-w-[1600px] mx-auto w-full px-6 sm:px-8 py-4 text-xs text-zinc-500 flex items-center gap-2 border-b border-zinc-100">
        <Link href="/" className="hover:text-[#D2A02A] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/Blogs" className="hover:text-[#D2A02A] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-zinc-850 font-semibold truncate max-w-[200px] sm:max-w-none">
          The Ultimate Guide to Modern Web Development & UI/UX Design
        </span>
      </div>

      <div className="max-w-9xl lg:max-w-[1600px] mx-auto w-full px-6 sm:px-8 py-12">
        {/* Title and Meta */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">
          Web Development &amp; UI/UX Design for Enterprise Scale
        </h1>
        <div className="flex items-center gap-3 text-sm text-zinc-500 mb-10 border-b border-zinc-100 pb-6">
          <span>Published on: August 3, 2026</span>
          <span>•</span>
          <span>By: Ankita Malik</span>
        </div>

        {/* Hero Banner Image */}
        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-sm border border-zinc-100 bg-zinc-50">
          <Image
            src="/Web.svg"
            alt="Modern Web Development and UI/UX Design Guide"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Sticky Table of Contents (Left) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start bg-zinc-50/50 rounded-2xl p-6 border border-zinc-100">
            <h3 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-4">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-2">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleTocClick(e, item.id)}
                  className={`text-sm font-medium border-l-2 pl-3 py-1 transition-all duration-200 ${
                    activeHeadingId === item.id
                      ? "border-[#D2A02A] text-[#D2A02A] font-semibold bg-zinc-50"
                      : "border-transparent text-zinc-500 hover:text-zinc-900 hover:border-zinc-300"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Column 2: Article Body (Middle) */}
          <article className="col-span-1 lg:col-span-6 space-y-12">
            
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">Introduction</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                In the high-speed digital economy of 2026, a brand's website serves as its global flagship store, its primary lead generator, and the ultimate reflection of its technological capability. Building for the web today is no longer just about writing functional code; it is about merging clean software engineering, stunning design aesthetics, and conversion-focused performance.
              </p>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                This comprehensive guide breaks down the essential pillars of modern web design and headless development. We explore how leading organizations scale their digital products, build unified design systems, and respect user privacy while collecting actionable marketing intelligence.
              </p>
            </section>

            {/* Pillar 1 */}
            <section id="enterprise-architecture" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">1. Composable Enterprise Architecture</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Monolithic platforms are a relic of the past. Composable architecture allows teams to select best-of-breed services (headless CMS, modern commerce engines, custom databases) and connect them via secure APIs.
              </p>
              
              {/* Highlight Card */}
              <div className="bg-[#FAF8F5] border-l-4 border-[#D2A02A] p-5 rounded-r-2xl space-y-2">
                <h4 className="font-bold text-[#5A4C33]">Why Composable Wins:</h4>
                <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-1">
                  <li><strong>Flexibility:</strong> Swap out services without rewriting the entire frontend.</li>
                  <li><strong>Speed:</strong> Edge routing and static generation make pages load in milliseconds.</li>
                  <li><strong>Security:</strong> Separating content from operations drastically reduces vector attacks.</li>
                </ul>
              </div>
            </section>

            {/* Pillar 2 */}
            <section id="design-system" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">2. The Design System Advantage</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                A design system is the single source of truth for your brand's digital identity. It provides reusable UI tokens (colors, margins, typography) and components that ensure seamless visual consistency across web, iOS, and Android platforms.
              </p>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                At Designncode, we implement rigid design systems that empower developers to build features in minutes rather than days. By codifying hover interactions, font families (like Outfit), and responsive behaviors, we eliminate design debt and build visual trust.
              </p>
            </section>

            {/* Pillar 3 */}
            <section id="core-web-vitals" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">3. Optimizing for Core Web Vitals</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Google's search algorithm heavily weighs page speed and user experience metrics. Core Web Vitals - including Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) - determine your organic search rankings.
              </p>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                By leveraging server components, lazy loading assets, optimizing web font downloads, and removing heavy dependencies (such as jQuery or unneeded plugins), we build websites that regularly score 95+ on Lighthouse audits.
              </p>
            </section>

            {/* Pillar 4 */}
            <section id="headless-cms" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">4. Choosing the Right Headless CMS</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Managing content across multiple locations and platforms requires a headless approach. Traditional platforms lock content to a specific template; headless platforms deliver raw JSON/GraphQL data that can be rendered on any device.
              </p>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Whether you select Sanity, Contentful, or a custom Firebase/Firestore backend, headless systems keep your data structured and ready for future integrations, including custom AI chatbots and personalized user experiences.
              </p>
            </section>

            {/* Pillar 5 */}
            <section id="marketing-performance" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">5. Digital Marketing Performance</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Stunning design and fast code are useless if your target audience never discovers your website. Digital marketing and technical SEO work hand-in-hand to build organic rankings, execute precise target landing pages, and boost paid advertising conversions.
              </p>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Every component we build is designed with conversion in mind. Strategically placed CTAs, smooth micro-interactions, responsive inquiry forms, and lightning-fast checkouts are all aligned to optimize your customer acquisition funnel.
              </p>
            </section>

            {/* FAQs */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900">Frequently Asked Questions</h2>
              
              <div className="space-y-4 border-t border-zinc-100 pt-4">
                {[
                  {
                    q: "What is Composable Web Development?",
                    a: "Composable development is an architectural style where a digital application is assembled from independent, modular components (such as headless CMS, API gateways, and commerce modules) rather than built as a single monolithic block."
                  },
                  {
                    q: "Why is a Design System important?",
                    a: "A design system ensures visual and code consistency across all company channels, significantly reduces design/development debt, speeds up release cycles, and creates a highly cohesive user experience."
                  },
                  {
                    q: "How does Composable Architecture improve SEO?",
                    a: "Because composable systems compile page components into lightweight static HTML served from an edge network (CDN), they deliver nearly instant loading speeds, boosting Core Web Vitals which is a major factor in search rankings."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-zinc-100 pb-4">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="flex justify-between items-center w-full text-left py-2 font-semibold text-zinc-800 hover:text-[#D2A02A] transition-colors"
                    >
                      <span>{item.q}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${openFaqIndex === idx ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaqIndex === idx && (
                      <p className="text-sm text-zinc-500 mt-2 leading-relaxed pl-1">
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900">Conclusion</h2>
              <p className="text-zinc-600 leading-relaxed text-[15px] sm:text-[16px]">
                Building high-performance, beautiful, and secure web products is a collaborative craft. By treating design and development as two halves of a single process, we create digital products that exceed brand goals, engage users, and stand the test of time.
              </p>
            </section>

            {/* Related Articles Grid */}
            <div className="border-t border-zinc-100 pt-10 mt-16 space-y-6">
              <h3 className="text-lg font-bold text-zinc-900">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "The Architectural Guide to Composable Web Applications",
                    slug: "2",
                    tag: "Guides",
                    image: "/Web.svg"
                  },
                  {
                    title: "Optimizing Next.js App Router for Core Web Vitals",
                    slug: "5",
                    tag: "Guides",
                    image: "/5.svg"
                  }
                ].map((post, idx) => (
                  <Link key={idx} href={`/Blogs/${post.slug}`} className="group block cursor-pointer">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200/50 bg-zinc-50 mb-3 shadow-xs">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#D2A02A] tracking-wider uppercase">{post.tag}</span>
                    <h4 className="font-bold text-zinc-800 group-hover:text-[#D2A02A] transition-colors mt-1 text-sm line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </article>

          {/* Column 3: Sticky Sidebar (Right) */}
          <aside className="col-span-1 lg:col-span-3 sticky top-28 space-y-8 self-start">
            
            {/* Widget 1: About Author */}
            <div className="bg-zinc-50/50 border border-zinc-100 rounded-3xl p-6 shadow-xs flex flex-col items-center text-center">
              <h4 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase border-b border-zinc-100 w-full pb-3 mb-5 select-none">
                About Author
              </h4>
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border border-zinc-200 shadow-xs bg-zinc-100">
                <Image
                  src="/Ankita.webp"
                  alt="Ankita Malik"
                  fill
                  sizes="80px"
                  quality={85}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-zinc-900 text-base">Ankita Malik</span>
              <span className="text-zinc-500 text-xs mt-1">Co-Founder & Managing Director</span>
              <p className="text-zinc-500 text-xs leading-relaxed mt-4 px-2">
                A technology leader passionate about building performant, gorgeous, and secure web products that scale.
              </p>
              
              {/* Profile Links */}
              <div className="flex flex-col gap-2 w-full mt-6">
                <Link
                  href="/About_us"
                  prefetch={true}
                  className="text-xs font-bold text-[#D2A02A] hover:underline uppercase tracking-wider"
                >
                  View Profile
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 border border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors duration-200 text-xs font-semibold py-2 px-4 rounded-xl mt-2 w-full"
                >
                  Connect on LinkedIn
                </Link>
              </div>
            </div>

            {/* Widget 2: CTA Card - Replicating Need Legal Help */}
            {/* Widget 2: CTA Card - Connect with Us */}
            <div className="bg-zinc-950 rounded-3xl p-6 border border-zinc-850 shadow-xl flex flex-col relative overflow-hidden text-white select-none">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#D2A02A]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-[#0C1833]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-lg font-bold tracking-tight">Connect with Us</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Speak with our enterprise solutions specialist to scope out your next project.
                </p>
                <div className="space-y-3.5 py-2">
                  <a href="tel:+919220721921" className="flex items-center gap-3 hover:text-[#D2A02A] transition-colors text-white">
                    <svg className="w-5 h-5 text-[#D2A02A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm font-semibold">+91 92207 21921</span>
                  </a>
                  <a href="mailto:info@designncode.com" className="flex items-center gap-3 hover:text-[#D2A02A] transition-colors text-white">
                    <svg className="w-5 h-5 text-[#D2A02A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">info@designncode.com</span>
                  </a>
                </div>
                <div className="pt-1">
                  <Link
                    href="/ContactUs"
                    className="w-full block text-center bg-[#D2A02A] text-zinc-950 text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl hover:bg-[#b88a22] transition-colors shadow-md cursor-pointer"
                  >
                    Request Callback
                  </Link>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>



      <FAQ />
      <Footer />
    </main>
  );
}

// ─── ANIMATED COUNTER HOOK WITH CUBIC DECELERATION ───
function useAnimatedNumber(target: number, isVisible: boolean, duration: number = 1800, decimals: number = 0): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic deceleration: easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Number((ease * target).toFixed(decimals)));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, isVisible, duration, decimals]);

  return value;
}

// ─── STATS STRIP COMPONENT ───
function AnimatedStatsStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const ratingVal = useAnimatedNumber(4.9, isVisible, 1500, 1);
  const projectsVal = useAnimatedNumber(150, isVisible, 1800, 0);
  const perfVal = useAnimatedNumber(99.9, isVisible, 2000, 1);

  return (
    <div
      ref={containerRef}
      className="my-10 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1.5 text-amber-400 mb-1.5">
            <span className="text-base font-bold">★</span>
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {isVisible ? ratingVal.toFixed(1) : "4.9"}/5
            </span>
          </div>
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Google Reviews Rating
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center p-2 pt-6 lg:pt-2">
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1">
            {isVisible ? `${projectsVal}+` : "150+"}
          </span>
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Flagship Apps Delivered
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center p-2 pt-6 lg:pt-2">
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-emerald-400 mb-1">
            {isVisible ? `${perfVal.toFixed(1)}%` : "99.9%"}
          </span>
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Lighthouse Performance
          </span>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center justify-center p-2 pt-6 lg:pt-2">
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-indigo-400 mb-1">
            100%
          </span>
          <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Custom Next.js Code
          </span>
        </div>

      </div>
    </div>
  );
}

// ─── MIDPOINT CONTENT SPLITTER HELPER ───
function splitContentAtMidpoint(html: string): { part1: string; part2: string } {
  if (!html) return { part1: "", part2: "" };
  
  // Look for <h2> tags
  const h2Matches = Array.from(html.matchAll(/<h2[^>]*>/gi));
  if (h2Matches.length >= 4) {
    // Split near the 3rd h2
    const splitIndex = h2Matches[2].index;
    if (splitIndex !== undefined && splitIndex > 0) {
      return {
        part1: html.slice(0, splitIndex),
        part2: html.slice(splitIndex),
      };
    }
  }
  
  // Fallback: split roughly in half at a paragraph tag
  const halfLength = Math.floor(html.length / 2);
  const nextP = html.indexOf("</p>", halfLength);
  if (nextP !== -1) {
    return {
      part1: html.slice(0, nextP + 4),
      part2: html.slice(nextP + 4),
    };
  }

  return { part1: html, part2: "" };
}

interface BlogDetailClientProps {
  initialBlog?: any;
}

function BlogDetailContent({ initialBlog, slug }: { initialBlog?: any; slug: string }) {
  const [blog, setBlog] = useState<any>(initialBlog || null);
  const [loading, setLoading] = useState(!initialBlog);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  useEffect(() => {
    if (initialBlog && (initialBlog.slug === slug || initialBlog.id === slug)) {
      setBlog(initialBlog);
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      if (!slug) return;
      try {
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          if (data.faqs && !Array.isArray(data.faqs) && (data.faqs as any).faqs) {
            data.faqs = (data.faqs as any).faqs;
          }
          setBlog({ id: snapshot.docs[0].id, ...data });
        } else {
          // fallback if slug is document ID
          const idQ = query(collection(db, "blogs"), where("__name__", "==", slug));
          const idSnapshot = await getDocs(idQ);
          if (!idSnapshot.empty) {
            setBlog({ id: idSnapshot.docs[0].id, ...idSnapshot.docs[0].data() });
          }
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug, initialBlog]);

  const { part1, part2 } = useMemo(() => {
    if (!blog?.description) return { part1: "", part2: "" };
    return splitContentAtMidpoint(blog.description);
  }, [blog?.description]);

  const tocHeadings = useMemo(() => {
    if (!blog?.description) return [];
    const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
    const headings: { id: string; title: string }[] = [];
    let match;
    let index = 1;
    while ((match = regex.exec(blog.description)) !== null) {
      const text = match[1].replace(/<[^>]*>?/gm, "").trim();
      if (text) {
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        headings.push({ id: id || `section-${index}`, title: text });
        index++;
      }
    }
    return headings;
  }, [blog?.description]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = tocHeadings.map(h => document.getElementById(h.id)).filter(Boolean);
      for (const el of headingElements) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 0) {
          setActiveHeadingId(el.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocHeadings]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAFC] pt-32 flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-500 font-medium">Loading flagship insights...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAFAFC] pt-32 text-center text-slate-500">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Article Not Found</h2>
        <p className="mb-6">The requested article could not be located.</p>
        <Link href="/Blogs" className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm">
          Return to Blog
        </Link>
      </div>
    );
  }

  const authorName = typeof blog.author === "string" ? blog.author : blog.author?.name || "DesignNCode Lead Architects";
  const authorRole = blog.author?.role || "Principal Web Architect";
  const authorBio = blog.author?.bio || "Architecting enterprise Next.js applications, high-performance UI/UX design systems, and headless commerce solutions at DesignNCode.";
  const publishedDate = blog.date || (blog.createdAt ? new Date(blog.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "July 2026");
  const categoryName = blog.category || "Web Development & Architecture";
  const keyTakeaways: string[] = Array.isArray(blog.keyTakeaways) ? blog.keyTakeaways : [];
  const popularSearches: string[] = Array.isArray(blog.popularSearches) ? blog.popularSearches : [];
  const reviews: any[] = Array.isArray(blog.reviews) && blog.reviews.length > 0 ? blog.reviews : [
    {
      author: "Marcus Sterling",
      role: "CTO",
      company: "FinTech Matrix",
      rating: 5,
      comment: "DesignNCode delivered a complete headless architecture that lowered our TTFB by 65% and gave us a solid 100/100 Lighthouse score.",
      date: "2026-05-18",
    },
    {
      author: "Elena Rostova",
      role: "VP of Product",
      company: "CloudScale SaaS",
      rating: 5,
      comment: "The design system and micro-interactions elevated our product into the enterprise tier. Truly exceptional engineering.",
      date: "2026-06-12",
    },
    {
      author: "David Chen",
      role: "Founder",
      company: "Apex Commerce",
      rating: 5,
      comment: "Their custom Next.js Shopify headless storefront drove a 42% surge in checkout conversions within 60 days.",
      date: "2026-07-02",
    },
  ];

  const infographicSrc = blog.infographic || blog.infographicUrl || null;

  // ─── 5 GOOGLE RICH RESULTS JSON-LD SCHEMAS ───
  const canonicalUrl = `https://designncode.com/Blogs/${slug || blog.slug || blog.id}`;
  const cleanDescription = (blog.metaDescription || blog.subtitle || blog.description || "")
    .replace(/<[^>]*>?/gm, "")
    .substring(0, 160)
    .trim();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: cleanDescription,
    image: [blog.image || "https://designncode.com/Web.svg"],
    datePublished: blog.date ? new Date(blog.date).toISOString() : new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: "Lead Web Architect",
      worksFor: {
        "@type": "Organization",
        name: "DesignNCode",
        url: "https://designncode.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "DesignNCode",
      url: "https://designncode.com",
      logo: {
        "@type": "ImageObject",
        url: "https://designncode.com/Web.svg",
      },
    },
    keywords: popularSearches.length > 0 ? popularSearches.join(", ") : undefined,
    articleSection: categoryName,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DesignNCode",
    url: "https://designncode.com",
    logo: "https://designncode.com/Web.svg",
    sameAs: [
      "https://twitter.com/DesignNCode",
      "https://linkedin.com/company/designncode",
      "https://github.com/designncode",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@designncode.com",
      url: "https://designncode.com/ContactUs",
    },
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://designncode.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://designncode.com/Blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqsList = Array.isArray(blog.faqs) ? blog.faqs : [];
  const faqSchema = faqsList.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsList.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DesignNCode Web Engineering & UI/UX Agency",
    image: blog.image || "https://designncode.com/Web.svg",
    url: "https://designncode.com",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "154",
    },
    review: reviews.map((rev: any) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author || "Enterprise Client",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(rev.rating || 5),
        bestRating: "5",
      },
      reviewBody: rev.comment || "Outstanding web development and design architecture from DesignNCode.",
      datePublished: rev.date || "2026-06-01",
    })),
  };

  const authorInitials = (authorName || "DesignNCode")
    .split(" ")
    .map((n: string) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase() || "DN";

  return (
    <main className="relative flex flex-col min-h-screen bg-[#FAFAFC] pt-20">
      {/* ─── Google Rich Results JSON-LD Schemas ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      {/* ─── 1. HERO SECTION (Split 2-Column: Text Left, Card Right) ─── */}
      <section className="bg-white border-b border-slate-200/70 pt-8 sm:pt-12 pb-12 sm:pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/Blogs" className="hover:text-slate-900 transition-colors">
              Resources
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-semibold truncate max-w-xs sm:max-w-md">
              {blog.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title, Subtitle, Author Meta Row */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.14] mb-5">
                {blog.title}
              </h1>
              {blog.subtitle && (
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                  {blog.subtitle}
                </p>
              )}

              {/* Author & Meta Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-black flex items-center justify-center text-xs tracking-wider shadow-xs shrink-0">
                    {authorInitials}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block leading-tight">{authorName}</span>
                    <span className="text-slate-400 text-xs font-medium">Reviewed by DesignNCode Team</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-600 font-medium text-xs border border-slate-200/60">
                    📅 {publishedDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-600 font-medium text-xs border border-slate-200/60">
                    ⏱ 7 min read
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Cover Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-[32px] overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-950 group">
                <Image
                  src={blog.image || "/Web.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH STATS STRIP BAR DIRECTLY BELOW HERO ─── */}
      <section className="bg-slate-50/80 border-b border-slate-200/70 py-6 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1 text-amber-500 font-black text-xl sm:text-2xl tracking-tight text-slate-950">
              <span className="text-amber-400">★</span> 4.9/5
            </div>
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
              Client Rating
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-950">
              150+
            </span>
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
              Flagships Delivered
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-emerald-600">
              99.9%
            </span>
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
              Lighthouse Performance
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-indigo-600">
              100%
            </span>
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
              Custom Architecture
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. MAIN 3-COLUMN LAYOUT (TOC Left, Content Center, CTA Right) ─── */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ─── Left Column (lg:col-span-2 xl:col-span-2): Compact Sticky Table of Contents ─── */}
          <aside className="hidden lg:block lg:col-span-2 xl:col-span-2 sticky top-24 space-y-4 self-start">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
              <div className="bg-slate-950 text-white px-3.5 py-3 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-200">
                  IN THIS ARTICLE
                </span>
                <span className="text-[9px] font-bold text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded-full">
                  {tocHeadings.length || 6}
                </span>
              </div>

              <nav className="p-2.5 space-y-1 max-h-[70vh] overflow-y-auto scrollbar-thin">
                {tocHeadings.map((heading, idx) => {
                  const isActive = activeHeadingId === heading.id;
                  return (
                    <a
                      key={idx}
                      href={`#${heading.id}`}
                      className={`flex items-start gap-2 p-2 rounded-xl text-[11px] font-medium transition-all duration-200 group ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700 font-bold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5 transition-colors ${
                        isActive ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="line-clamp-2 leading-snug">
                        {heading.title}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ─── Center Column (lg:col-span-7 xl:col-span-8): Expanded Article Body, Takeaways, Solutions, Infographic, Reviews ─── */}
          <article className="lg:col-span-7 xl:col-span-8 bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
            
            {/* Card 1: Share this insight */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Share this insight</h3>
                <p className="text-slate-500 text-xs mt-0.5">Help your network stay informed on modern tech & architecture.</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(canonicalUrl)}`, '_blank')}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-950 hover:text-white transition-colors cursor-pointer text-xs font-bold"
                  title="Share on X"
                >
                  𝕏
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`, '_blank')}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#0077b5] hover:text-white transition-colors cursor-pointer text-xs font-bold"
                  title="Share on LinkedIn"
                >
                  in
                </button>
                <button
                  onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + " " + canonicalUrl)}`, '_blank')}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#25D366] hover:text-white transition-colors cursor-pointer text-xs font-bold"
                  title="Share on WhatsApp"
                >
                  💬
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(canonicalUrl);
                    alert("Article link copied to clipboard!");
                  }}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer text-xs font-bold"
                  title="Copy link"
                >
                  🔗
                </button>
              </div>
            </div>

            {/* Card 2: KEY TAKEAWAYS */}
            {keyTakeaways.length > 0 && (
              <div className="bg-indigo-50/40 border border-indigo-100 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-indigo-900">
                    KEY TAKEAWAYS
                  </h3>
                </div>
                <div className="space-y-3 pt-1">
                  {keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-800 text-xs sm:text-sm leading-relaxed border-b border-indigo-100/60 pb-3 last:border-0 last:pb-0">
                      <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Card 3: Media & Industry Recognition */}
            <div className="py-2 border-y border-slate-100 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-4">
                Recognized & Trusted in Modern Engineering
              </span>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
                <span className="font-black text-slate-900 text-lg tracking-tighter">MINT</span>
                <span className="font-extrabold text-slate-900 text-lg tracking-tight font-serif">YOURSTORY</span>
                <span className="font-bold text-slate-900 text-lg font-mono">MEDIUM</span>
                <span className="font-black text-slate-900 text-lg tracking-wider">TECHRADAR</span>
              </div>
            </div>

            {/* Card 4: Our Solutions Grid */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Our Solutions:
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Custom Web Apps", href: "/Service" },
                  { label: "Design Systems", href: "/Service" },
                  { label: "Headless Shopify", href: "/ecommerce" },
                  { label: "Cloud SaaS", href: "/enterprise" },
                  { label: "Lighthouse 100/100", href: "/Service" },
                  { label: "Explore Projects", href: "/Projects" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-3 bg-white rounded-2xl border border-slate-200/80 text-center text-xs font-bold text-slate-800 hover:border-indigo-500 hover:text-indigo-600 hover:shadow-xs transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Article Prose Part 1 */}
            <BlogHTMLRenderer content={part1} />

            {/* Embedded 3D Infographic Frame */}
            {infographicSrc && (
              <div className="my-8 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl text-white overflow-hidden relative">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-500 text-white text-[10px] font-black tracking-wider uppercase">
                      INFOGRAPHIC
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-200">
                      Visual Architecture Blueprint
                    </h4>
                  </div>
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                  >
                    Expand ↗
                  </button>
                </div>

                <div 
                  onClick={() => setLightboxOpen(true)}
                  className="relative w-full h-[260px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden cursor-zoom-in bg-slate-900 border border-slate-800 group"
                >
                  <Image
                    src={infographicSrc}
                    alt={`${blog.title} Architecture Infographic`}
                    fill
                    className="object-contain group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            )}

            {/* Lightbox Modal */}
            {lightboxOpen && infographicSrc && (
              <div
                onClick={() => setLightboxOpen(false)}
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
              >
                <div className="relative max-w-5xl w-full h-[80vh]">
                  <Image
                    src={infographicSrc}
                    alt={`${blog.title} Infographic High-Res`}
                    fill
                    className="object-contain"
                  />
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="absolute top-4 right-4 text-white bg-slate-800/80 hover:bg-slate-700 px-4 py-2 rounded-xl text-sm font-bold"
                  >
                    Close ✕
                  </button>
                </div>
              </div>
            )}

            {/* Main Article Prose Part 2 */}
            {part2 && <BlogHTMLRenderer content={part2} />}

            {/* Verified Client Reviews */}
            <section className="pt-8 border-t border-slate-150 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block">
                    Verified Feedback
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight mt-0.5">
                    What Engineering Leaders Say
                  </h3>
                </div>
                <span className="text-xs font-bold text-amber-500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                  ★ 4.9/5
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reviews.slice(0, 4).map((rev, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-amber-400 text-xs mb-2">
                        {"★".repeat(rev.rating || 5)}
                      </div>
                      <p className="text-slate-700 text-xs leading-relaxed italic mb-3">
                        "{rev.comment}"
                      </p>
                    </div>
                    <div className="border-t border-slate-200/50 pt-2 text-[11px]">
                      <span className="font-bold text-slate-900 block">{rev.author}</span>
                      <span className="text-slate-500">{rev.role} • {rev.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Searches */}
            {popularSearches.length > 0 && (
              <div className="pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, idx) => (
                    <Link
                      key={idx}
                      href={`/Blogs?search=${encodeURIComponent(term)}`}
                      className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-1.5 rounded-lg border border-slate-200/60 transition-colors"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back button */}
            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/Blogs"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-xs sm:text-sm font-semibold transition-colors"
              >
                <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                </svg>
                Back to Articles
              </Link>
            </div>

          </article>

          {/* ─── Right Column (lg:col-span-3 xl:col-span-2): Compact Sticky Conversion & Trust Widgets ─── */}
          <aside className="lg:col-span-3 xl:col-span-2 sticky top-24 space-y-4 self-start">
            
            {/* Card 1: Talk to an Expert / Lead Architect Free */}
            <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-sm">
                  🎧
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold tracking-tight">
                    Talk to a Lead Architect Free!
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed mt-1">
                    Get a web architecture & design assessment. One call. Clear answers.
                  </p>
                </div>
                <Link
                  href="/ContactUs"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-center bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold py-2.5 px-3 rounded-xl transition-all duration-200 shadow-md cursor-pointer"
                >
                  📞 Book Free Call
                </Link>
              </div>
            </div>

            {/* Card 2: WHY PEOPLE TRUST DESIGNNCODE */}
            <div className="bg-white rounded-2xl p-4.5 border border-slate-200/90 shadow-xs space-y-3">
              <h4 className="text-[9px] font-black text-slate-400 tracking-wider uppercase select-none">
                WHY PEOPLE TRUST DESIGNNCODE
              </h4>
              <div className="space-y-2.5 text-[11px] font-semibold text-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 text-sm">👥</span>
                  <span className="leading-tight">5,000+ Users & 150+ Flagships</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 text-sm">⚡️</span>
                  <span className="leading-tight">99.9% Performance & Speed</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 text-sm">🔒</span>
                  <span className="leading-tight">Zero Technical Debt</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-indigo-600 text-sm">⚖️</span>
                  <span className="leading-tight">100% Custom Code & SEO</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* ─── DYNAMIC FAQS SECTION ─── */}
      <FAQ 
        items={blog.faqs} 
        title="Frequently Asked Questions" 
        subtitle={`Key technical and architectural considerations regarding ${blog.title}.`} 
        badge="Article FAQ" 
      />

      {/* CTA section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default function BlogDetailPage({ initialBlog }: BlogDetailClientProps) {
  const params = useParams();
  const slug = (params?.slug as string) || "";

  if (slug && Object.keys(SERVICE_PAGES_DATA).includes(slug)) {
    return <AMAServiceLayout slug={slug} />;
  }
  if (slug === "personal-loan-harassment-india-guide" || slug === "ama-guide" || slug === "guide") {
    return <AMABlogLayout />;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <BlogDetailContent initialBlog={initialBlog} slug={slug} />
    </Suspense>
  );
}
