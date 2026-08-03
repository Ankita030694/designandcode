"use client";

import { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTA from "../../Components/cta";
import Footer from "../../Components/footer";
import FAQ from "../../Components/FAQ";
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
    <main className="relative flex flex-col min-h-screen bg-white pt-24 text-zinc-900 font-sans">
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
          The Ultimate Guide to Modern Web Development & UI/UX Design for Enterprise Scale
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
                Google's search algorithm heavily weighs page speed and user experience metrics. Core Web Vitals—including Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)—determine your organic search rankings.
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
                  src="/ankita.png"
                  alt="Ankita Malik"
                  fill
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
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              
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

      {/* Floating WhatsApp CTA */}
      <Link
        href="https://wa.me/919220721921"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.32 5.328 0 11.91 0c3.19.001 6.189 1.242 8.448 3.496 2.257 2.253 3.498 5.251 3.497 8.441-.004 6.587-5.329 11.907-11.91 11.907-2.007-.001-3.978-.51-5.719-1.48l-6.169 1.636zm6.54-5.291c1.66 1.002 3.292 1.554 5.312 1.556 5.348 0 9.7-4.321 9.702-9.629.002-2.573-1.002-4.991-2.829-6.815-1.826-1.821-4.254-2.824-6.83-2.825-5.356 0-9.707 4.322-9.709 9.63-.001 1.902.486 3.766 1.417 5.385l-.974 3.56 3.653-.957zm11.393-4.704c-.314-.157-1.86-.918-2.148-1.023-.289-.105-.499-.157-.709.157-.21.314-.813 1.023-.996 1.233-.183.21-.366.236-.68.079-.314-.157-1.328-.49-2.531-1.563-.935-.834-1.566-1.864-1.749-2.179-.183-.314-.02-.485.137-.641.141-.141.314-.366.472-.55.158-.184.21-.314.315-.525.105-.21.053-.394-.026-.551-.08-.157-.709-1.706-.972-2.336-.256-.615-.517-.532-.709-.541-.183-.01-.394-.012-.604-.012-.21 0-.552.079-.841.394-.289.315-1.103 1.077-1.103 2.628 0 1.551 1.129 3.048 1.287 3.259.157.21 2.221 3.391 5.38 4.757.752.325 1.339.519 1.796.664.759.241 1.45.207 1.996.126.609-.09 1.86-.76 2.122-1.457.263-.696.263-1.293.184-1.417-.079-.124-.289-.21-.604-.367z"/>
        </svg>
      </Link>

      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

function BlogDetailContent() {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  if (slug === "personal-loan-harassment-india-guide") {
    return <AMABlogLayout />;
  }

  if (Object.keys(SERVICE_PAGES_DATA).includes(slug)) {
    return <AMAServiceLayout slug={slug} />;
  }

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      try {
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const data = snapshot.docs[0].data();
          // Ensure faqs is an array
          if (data.faqs && !Array.isArray(data.faqs) && data.faqs.faqs) {
            data.faqs = data.faqs.faqs;
          }
          setBlog({ id: snapshot.docs[0].id, ...data });
        } else {
          // fallback if slug doesn't match but ID does
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
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-[#FAFAFC] pt-32 text-center text-zinc-500">Loading Article...</div>;
  }

  if (!blog) {
    return <div className="min-h-screen bg-[#FAFAFC] pt-32 text-center text-zinc-500">Article not found.</div>;
  }

  return (
    <main className="relative flex flex-col min-h-screen bg-[#FAFAFC] pt-20">
      {/* ─── HERO IMAGE BANNER ─── */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden bg-zinc-900 border-b border-zinc-200/50">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* ─── BREADCRUMBS SECTION ─── */}
      <div className="border-b border-zinc-200/60 bg-white py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center gap-2 text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-bold">
          <Link href="/" className="hover:text-zinc-800 transition-colors">
            Home
          </Link>
          <span className="text-zinc-300">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
          </span>
          <Link href="/Blogs" className="hover:text-zinc-800 transition-colors">
            Blog
          </Link>
          <span className="text-zinc-300">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
          </span>
          <span className="text-zinc-500 font-semibold truncate max-w-[150px] sm:max-w-none normal-case tracking-normal text-[12px] sm:text-sm">
            {blog.title}
          </span>
        </div>
      </div>

      {/* ─── BLOG HEADER CONTENT ─── */}
      <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 mt-12 sm:mt-16 mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-5">
          {blog.title}
        </h1>
        {blog.subtitle && (
          <p className="text-zinc-500 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            {blog.subtitle}
          </p>
        )}
        <p className="text-zinc-400 text-xs sm:text-sm font-semibold tracking-wide">
          {blog.date || new Date().toISOString().split('T')[0]} &nbsp;•&nbsp; {blog.author || "Admin Team"}
        </p>
      </div>

      {/* ─── MAIN TWO-COLUMN CONTENT GRID ─── */}
      <div className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 sm:px-8 pb-20 sm:pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ─── Left Column: Main Article Body ─── */}
          <div className="lg:col-span-8 bg-white border border-zinc-200/60 rounded-[32px] p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.015)]">
            <BlogHTMLRenderer content={blog.description} />

            {/* Back button */}
            <div className="mt-12 pt-6 border-t border-zinc-100">
              <Link
                href="/Blogs"
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                </svg>
                Back to Articles
              </Link>
            </div>
          </div>

          {/* ─── Right Column: Sticky Sidebar Cards ─── */}
          <aside className="lg:col-span-4 sticky top-24 space-y-6 self-start">
            
            {/* Card 1: About Author */}
            <div className="bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col">
              <h3 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase border-b border-zinc-100 pb-3 mb-5 select-none">
                About Author
              </h3>
              <div className="flex items-center gap-4.5 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-zinc-50 relative border border-zinc-200 shrink-0">
                  <Image
                    src={"/Client_Logo/wp.svg"}
                    alt={blog.author || "Admin Team"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <span className="text-zinc-900 font-bold text-[15px]">
                    {blog.author || "Admin Team"}
                  </span>
                  <span className="text-zinc-500 text-xs mt-0.5">
                    Content Creator
                  </span>
                  <Link href="/About_us" className="text-indigo-600 hover:text-indigo-800 text-[11px] font-bold mt-1 block uppercase tracking-wider transition-colors">
                    View Profile
                  </Link>
                </div>
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mt-2 pl-0.5">
                {blog.author?.bio || "Expert contributor to our insights platform."}
              </p>
            </div>

            {/* Card 2: CTA Card - Pipeline Growth */}
            {/* Styled using colors from the website layout: Deep zinc/gradient slate with hover effects */}
            <div className="bg-zinc-950 rounded-3xl p-6 sm:p-7 border border-zinc-850 shadow-xl flex flex-col gap-4 select-none relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-white text-lg font-bold tracking-tight mb-2">
                  Need Pipeline Growth?
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Get expert advice on enterprise GTM and CXO-direct strategies.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/ContactUs"
                    className="w-full text-center bg-white text-zinc-950 text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl hover:bg-zinc-100 hover:scale-[1.01] active:scale-[0.99] transition-all duration-250 shadow-md cursor-pointer"
                  >
                    Book a Strategy Call
                  </Link>
                  <Link
                    href="/ContactUs"
                    className="w-full text-center border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-white text-xs sm:text-sm font-semibold py-3.5 px-4 rounded-xl hover:border-zinc-700 hover:scale-[1.01] active:scale-[0.99] transition-all duration-250 cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>

      <FAQ />
      {/* CTA section */}
      <CTA />

      <Footer />
    </main>
  );
}

export default function BlogDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <BlogDetailContent />
    </Suspense>
  );
}
