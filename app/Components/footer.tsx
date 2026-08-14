"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full relative overflow-hidden mt-0 md:-mt-50"
      style={{
        backgroundImage: "url('/Footer BG BG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "48px 24px 32px",
      }}
    >
      {/* ── Inner card with meadow photo ── */}
      <div
        className="relative w-full max-w-[1500px] mx-auto rounded-3xl overflow-hidden flex flex-col justify-between min-h-[580px] sm:min-h-[620px]"
        style={{
          backgroundImage: "url('/Footer Bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/20 rounded-3xl pointer-events-none" />

        {/* ── TOP ROW: Socials left ── */}
        <div className="relative z-10 flex items-start justify-between px-8 pt-8">
          {/* Social icons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/design_n_code"
              target="_blank"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>

            {/* X / Twitter */}
            <Link
              href="https://x.com"
              target="_blank"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* Phone */}
            <Link
              href="tel:+919220721921"
              aria-label="Call us"
              className="w-9 h-9 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>

            {/* Mail */}
            <Link
              href="mailto:info@designncode.com"
              aria-label="Email us"
              className="w-9 h-9 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── HEADING & MOBILE CTA ── */}
        <div className="relative z-10 px-8 pb-8 md:pb-16 mt-auto flex flex-col items-start text-left">
          <div className="relative inline-block text-left">
            {/* Main heading */}
            <h2
              className="text-white font-black text-4xl sm:text-6xl md:text-[70px] leading-[0.95] tracking-tight uppercase text-left"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.25)" }}
            >
              LET&apos;S BUILD<br />
              SOMETHING<br />
              MEMORABLE
            </h2>
          </div>

          {/* Mobile CTA below text */}
          <div className="mt-6 block md:hidden">
            <Link
              href="/ContactUs"
              className="bg-white text-zinc-900 font-medium text-lg px-7 py-3 rounded-full shadow-lg hover:bg-zinc-100 active:scale-95 transition-all duration-200 select-none inline-block text-left"
            >
              Let&apos;s chat
            </Link>
          </div>
        </div>

        {/* ── Navigation links inside inner card ── */}
        <nav className="absolute md:bottom-24 md:right-8 md:top-auto md:left-auto top-8 left-8 z-20 flex items-center gap-4 sm:gap-7 select-none flex-wrap">
          {[
            { label: "HOME",       href: "/" },
            { label: "ABOUT US",   href: "/About_us" },
            { label: "SERVICES",   href: "/Service" },
            { label: "PROJECTS",   href: "/Projects" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/95 font-bold text-xs tracking-widest hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA — bottom-right of photo card ── */}
        <div className="hidden md:block absolute bottom-8 right-8 z-20">
          <Link
            href="/ContactUs"
            className="bg-white text-zinc-900 font-medium text-xl px-7 py-3 rounded-full shadow-lg hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-200 select-none inline-block"
          >
            Let&apos;s chat
          </Link>
        </div>
      </div>
      {/* Bottom bar removed */}
    </footer>
  );
}