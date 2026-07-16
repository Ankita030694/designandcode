"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling down, hide navbar. If scrolling up, show navbar.
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-white dotted-bottom-border transition-transform duration-300 ease-in-out ${
      show ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image
            src="/logo.svg"
            alt="Drewl Logo"
            width={135}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/About_us"
            className="text-[15px] font-regular text-black hover:text-black dark:text-black dark:hover:border-black transition-colors"
          >
            About Us
          </Link>
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1 text-[15px] font-regular text-black hover:text-black dark:text-black dark:hover:border-black transition-colors">
              Services
              <svg
                className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors transform group-hover:translate-y-0.5 duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-white border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/services/web-design"
                className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
              >
                Web Design
              </Link>
              <Link
                href="/services/development"
                className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
              >
                Web Development
              </Link>
              <Link
                href="/services/branding"
                className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
              >
                Branding
              </Link>
            </div>
          </div>
          <Link
            href="/projects"
            className="text-[15px] font-regular text-black hover:text-black dark:text-black dark:hover:border-black transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/resources"
            className="text-[15px] font-regular text-black hover:text-black dark:text-black dark:hover:border-black transition-colors"
          >
            Resources
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/ContactUs"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-white text-sm font-medium text-zinc-800 dark:text-zinc-250 shadow-sm hover:shadow transition-all duration-200 hover:scale-[1.02]"
          >
            Get in touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "rotate-45 translate-x-1 translate-y-[2px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-45 translate-x-1 -translate-y-[2px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-white transition-all duration-300 ease-in-out border-b border-zinc-100 dark:border-zinc-900 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <Link
            href="/About_us"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            About Us
          </Link>
          <div className="flex flex-col gap-2">
            <span className="text-base font-medium text-zinc-700 dark:text-zinc-300">Services</span>
            <div className="pl-4 flex flex-col gap-2 border-l border-zinc-100 dark:border-zinc-800">
              <Link
                href="/services/web-design"
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-500 hover:text-black dark:hover:text-white"
              >
                Web Design
              </Link>
              <Link
                href="/services/development"
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-500 hover:text-black dark:hover:text-white"
              >
                Web Development
              </Link>
              <Link
                href="/services/branding"
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-500 hover:text-black dark:hover:text-white"
              >
                Branding
              </Link>
            </div>
          </div>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/resources"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            Resources
          </Link>
          <hr className="border-zinc-100 dark:border-zinc-900 my-2" />
          <Link
            href="/ContactUs"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-base font-medium text-zinc-800 dark:text-zinc-250 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
