"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-zinc-100/50 pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Section: Logo & Signature */}
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <Image
            src="/LOGO.svg"
            alt="Designncode Logo"
            width={135}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <p className="text-black text-sm font-regular flex items-center gap-1.5">
            Lovingly crafted ❤️ by Designncode
          </p>
        </div>

        {/* Dotted Divider */}
        <div className="w-full border-t border-dotted border-zinc-200 mb-12" />

        {/* Bottom Columns Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-[16px] font-semibold text-zinc-900">Our newsletter</h3>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-zinc-200 bg-white text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                />
              </div>
              <button className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-black text-white text-sm font-medium transition-colors shadow-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <Link href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/design_n_code?igsh=cHhocHI4eDBkajZ5" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61570614157393#" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6">
            {/* Services Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-md font-medium text-black">Services</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "All Services", href: "/Service" },
                  { label: "Web Development", href: "/webd" },
                  { label: "UI/UX Design", href: "/Service/ui_ux" },
                  { label: "Performance Marketing", href: "/marketing" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-md text-zinc-500 hover:text-zinc-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-md font-medium text-black">Projects</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Credsettle", href: "/Projects/credsettle" },
                  { label: "House of Nihal khera", href: "/Projects/house-of-nihal-khera" },
                  { label: "Bunt", href: "/Projects/bunt" },
                  { label: "Oudqua", href: "/Projects/oudqua" },
                  { label: "AMA", href: "/Projects/ama" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-md text-zinc-500 hover:text-zinc-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-md font-medium text-black">Quick Links</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "About Us", href: "/About_us" },
                  { label: "Our Work", href: "/Projects" },
                  { label: "Resources & Blog", href: "/Blogs" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-md text-zinc-500 hover:text-zinc-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Support Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-md font-medium text-black">Contact & Support</h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href="/ContactUs" className="text-md text-zinc-500 hover:text-zinc-900 transition-colors">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <span className="text-md text-zinc-500">
                    Email: info@designncode.com
                  </span>
                </li>
                <li>
                  <Link href="tel:+919220721921" className="text-md text-zinc-500 hover:text-zinc-900 transition-colors">
                    Call: +91 92207 21921
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Policies Row */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400 mt-20 mb-4 z-10">
          <span>©2026 Designncode. All rights reserved.</span>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-zinc-900 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-zinc-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/returns" className="hover:text-zinc-900 transition-colors">
              Return Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Large looping marquee text */}
      <div className="w-full overflow-hidden marquee-container select-none pointer-events-none mt-6 border-t border-zinc-100/30 pt-4">
        <div className="relative flex w-full overflow-x-hidden">
          <div className="flex gap-16 items-center shrink-0 animate-marquee whitespace-nowrap text-[12vw] font-black tracking-tighter text-[#0C1833] uppercase leading-none">
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            {/* Duplicate for infinite loop */}
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
          </div>
        </div>
      </div>

      {/* Explore More Dropdown */}
      <div className="max-w-6xl mx-auto w-full px-6 mt-8 pb-8 z-20 relative">
        <div className="flex items-center gap-4 cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-2">
            Explore More
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          <div className="flex-grow h-[1px] bg-zinc-200/80" />
        </div>
        
        {isOpen && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-zinc-150 pt-6">
            {[
              {
                title: "Why Custom Code is Better than WordPress",
                desc: "Discover why hand-crafted Next.js applications outperform traditional monolithic systems like WordPress in speed, security, and scalability.",
                slug: "custom-code-vs-wordpress"
              },
              {
                title: "Why Shopify is Good for E-Commerce",
                desc: "From seamless checkouts to unlimited scalability, find out why Shopify remains the leading platform for growing online brands.",
                slug: "why-shopify-is-good-for-e-commerce"
              },
              {
                title: "The Power of Next.js for Modern Web Apps",
                desc: "Explore the features of Next.js that make it the industry standard for building fast, SEO-friendly React websites.",
                slug: "power-of-nextjs"
              },
              {
                title: "How Branding Dictates Business Success",
                desc: "Learn why branding is more than just a logo - it is the foundation of customer trust, loyalty, and premium pricing power.",
                slug: "branding-and-business-success"
              },
              {
                title: "The Future of Headless Architecture",
                desc: "Understand how separating your content management from your design layer enables hyper-fast multi-channel experiences.",
                slug: "future-of-headless-architecture"
              },
              {
                title: "Optimizing Page Speed for Conversion",
                desc: "Every millisecond counts. Discover the direct relationship between website speed, user experience, and revenue.",
                slug: "optimizing-page-speed"
              },
              {
                title: "The Role of SEO in Modern Digital Growth",
                desc: "Learn how structured SEO strategies drive sustainable organic traffic and reduce reliance on paid advertising.",
                slug: "seo-in-digital-growth"
              },
              {
                title: "Maximizing ROAS on Meta Ads",
                desc: "A deep dive into creative testing, pixel optimization, and custom audience scaling to improve your Facebook and Instagram ad returns.",
                slug: "maximizing-roas-meta-ads"
              },
              {
                title: "Why High-End Photography is Crucial for Luxury Brands",
                desc: "Visual asset quality makes or breaks a premium brand. Explore how lighting, styling, and art direction elevate perceived value.",
                slug: "photography-for-luxury-brands"
              }
            ].map((article) => (
              <div
                key={article.slug}
                className="bg-white border border-zinc-100/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-300 hover:shadow-xs transition-all duration-300"
              >
                <div>
                  <h4 className="text-zinc-900 font-semibold text-[17px] leading-snug mb-3">
                    {article.title}
                  </h4>
                  <p className="text-zinc-500 text-[13px] leading-relaxed mb-6 font-normal">
                    {article.desc}
                  </p>
                </div>
                <Link
                  href={`/Blogs/${article.slug}`}
                  className="inline-flex items-center text-zinc-900 hover:text-black text-xs font-semibold transition-colors"
                >
                  Read Article &rarr;
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
