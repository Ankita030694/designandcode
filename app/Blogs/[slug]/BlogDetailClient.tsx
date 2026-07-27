"use client";

import { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CTA from "../../Components/cta";
import Footer from "../../Components/footer";
import FAQ from "../../Components/FAQ";
import ReactMarkdown from "react-markdown";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";

function BlogDetailContent() {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
            <div className="prose prose-zinc max-w-none space-y-6 text-zinc-700 text-[15px] sm:text-[17px] leading-relaxed">
              
              {/* Main Content Rendered via Markdown */}
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-8 mb-4" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-8 mb-4 border-b border-zinc-100 pb-2" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-lg sm:text-xl font-bold text-zinc-800 mt-6 mb-3" {...props} />,
                  p: ({node, ...props}) => <p className="text-zinc-600 font-regular text-[16px] sm:text-[18px] mb-4" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 mb-4 text-zinc-600" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 mb-4 text-zinc-600" {...props} />,
                  li: ({node, ...props}) => <li className="text-[16px] sm:text-[18px]" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-zinc-800" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="bg-zinc-50/50 p-4 rounded-xl border-l-4 border-indigo-300 pl-4 italic text-[15px] mb-4 text-zinc-600" {...props} />
                }}
              >
                {blog.description}
              </ReactMarkdown>

            </div>

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
