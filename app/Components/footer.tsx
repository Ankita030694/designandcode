"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F9F9FB] border-t border-zinc-100/50 pt-16 pb-12 px-6 sm:px-8 lg:px-12">
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
          <div className="lg:col-span-6 flex flex-col gap-6">
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
              <Link href="https://x.com" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6 sm:gap-8">
            {/* Pages Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-md font-medium text-black">Pages</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "About Us", href: "/About_us" },
                  { label: "Projects", href: "/Projects" },
                  { label: "Resources", href: "/Blogs" },
                  { label: "Contact", href: "/ContactUs" },
                  { label: "Privacy Policy", href: "/privacy" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-md text-zinc-500 hover:text-zinc-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-md font-medium text-black">Services</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { label: "Web Development", href: "/webd" },
                  { label: "UI/UX Design", href: "/Service/ui_ux" },
                  { label: "Performance Marketing", href: "/marketing" },
                  { label: "Enterprise", href: "/enterprise" },
                  { label: "Startup", href: "/startup" },
                  { label: "E-commerce", href: "/ecommerce" }
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
                  { label: "Bank Al Etihad", href: "/work/bank-al-etihad" },
                  { label: "WP Engine", href: "/work/wp-engine" },
                  { label: "Android Authority", href: "/work/android-authority" },
                  { label: "Amplifidor", href: "/work/amplifidor" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-md text-zinc-500 hover:text-zinc-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="w-full flex justify-center text-xs text-zinc-400 mt-20 mb-4 z-10">
          ©2026 Designncode. All rights reserved.
        </div>
      </div>

      {/* Large looping marquee text */}
      <div className="w-full overflow-hidden marquee-container select-none pointer-events-none mt-6 -mb-12 border-t border-zinc-100/30 pt-4">
        <div className="relative flex w-full overflow-x-hidden">
          <div className="flex gap-16 items-center shrink-0 animate-marquee whitespace-nowrap text-[12vw] font-black tracking-tighter text-zinc-200/35 uppercase leading-none">
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            {/* Duplicate for infinite loop */}
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
            <span>DESIGNNCODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
