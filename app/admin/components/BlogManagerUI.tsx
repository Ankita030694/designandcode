"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import BlogGenerationUI from "./BlogGenerationUI";

export default function BlogManagerUI() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog? This action cannot be undone.")) {
      try {
        await deleteDoc(doc(db, "blogs", id));
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog.");
      }
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.slug?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPublished = blogs.filter((b) => b.published).length;
  const seoEnriched = blogs.length; // Our AI generates SEO for all
  const faqsEmbedded = blogs.filter((b) => b.faqs && b.faqs.length > 0).length;

  if (isWriting) {
    return <BlogGenerationUI onClose={() => setIsWriting(false)} />;
  }

  return (
    <div className="w-full">
      {/* ─── HEADER SECTION ─── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/60 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-2">
            <span>📝</span> Curated Blog Dashboard
          </h2>
          <p className="text-zinc-500 text-sm mt-1.5">
            Publish high-quality articles, SEO schemas, client star ratings, and detailed Q&A guides.
          </p>
        </div>
        <button
          onClick={() => setIsWriting(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span>+</span> Write Blog Post
        </button>
      </div>

      {/* ─── STAT CARDS ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
          <h3 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase mb-3">Total Published Blogs</h3>
          <div className="text-4xl font-extrabold text-blue-600">{totalPublished}</div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
          <h3 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase mb-3">TOC & SEO Enriched</h3>
          <div className="text-4xl font-extrabold text-green-600">{seoEnriched}</div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm">
          <h3 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase mb-3">FAQs Embedded</h3>
          <div className="text-4xl font-extrabold text-blue-600">{faqsEmbedded}</div>
        </div>
      </div>

      {/* ─── SEARCH BAR ─── */}
      <div className="mb-8">
        <div className="relative max-w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200/60 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            placeholder="Search blogs by title, subtitle, or slug..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ─── BLOGS LIST TABLE ─── */}
      <div className="bg-white rounded-3xl border border-zinc-200/60 shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-5 bg-zinc-50 border-b border-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-wider items-center hidden lg:grid">
          <div className="col-span-2 pl-2">Banner</div>
          <div className="col-span-4">Title & Details</div>
          <div className="col-span-3">Slug / Link</div>
          <div className="col-span-2">Q&A / Reviews</div>
          <div className="col-span-1 text-center">Actions</div>
        </div>

        {/* Table Body */}
        {loading ? (
          <div className="p-10 text-center text-zinc-500 animate-pulse">Loading blogs...</div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-10 text-center text-zinc-500">No blogs found.</div>
        ) : (
          <div className="divide-y divide-zinc-100">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 items-center hover:bg-zinc-50/50 transition-colors">
                
                {/* Banner Thumbnail */}
                <div className="col-span-12 lg:col-span-2">
                  <div className="relative w-full h-24 lg:w-32 lg:h-20 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                    <Image
                      src={blog.image || "/Web.svg"}
                      alt={blog.title || "Blog cover"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Title & Details */}
                <div className="col-span-12 lg:col-span-4 flex flex-col">
                  <h4 className="text-[15px] font-bold text-zinc-900 leading-snug line-clamp-2 mb-1.5">
                    {blog.title}
                  </h4>
                  <div className="text-[11px] font-bold text-zinc-400">
                    {blog.date || (blog.createdAt?.toDate ? blog.createdAt.toDate().toISOString().split('T')[0] : "Just now")} 
                    &nbsp;&nbsp;•&nbsp;&nbsp; 
                    By: {blog.author || "Admin Team"}
                  </div>
                </div>

                {/* Slug Pill */}
                <div className="col-span-12 lg:col-span-3">
                  <span className="inline-block px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-500 text-[11px] font-bold truncate max-w-[200px] bg-white">
                    {blog.slug || blog.id}
                  </span>
                </div>

                {/* Q&A / Reviews Pills */}
                <div className="col-span-12 lg:col-span-2 flex flex-wrap items-center gap-2">
                  <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-[10px] font-bold">
                    {blog.faqs?.length || 0} FAQs
                  </span>
                  <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-md text-[10px] font-bold">
                    5 Reviews
                  </span>
                </div>

                {/* Actions */}
                <div className="col-span-12 lg:col-span-1 flex items-center lg:justify-center gap-2">
                  <button className="p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg border border-zinc-200 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleDelete(blog.id)}
                    className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg border border-zinc-200 transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
