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
            
            {/* Dropdown Menu Container with safety hover area */}
            <div className="absolute top-full left-1/2 -translate-x-[45%] pt-4 w-[850px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white border border-zinc-200/80 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-7 flex gap-8 text-left cursor-default" onClick={(e) => e.stopPropagation()}>
                {/* Left Section: Expertise / Services */}
                <div className="flex-1">
                  <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase block mb-4 select-none">
                    Expertise:
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    {/* UI/UX Design Card */}
                    <Link
                      href="/Service/ui_ux"
                      className="group/card flex flex-col justify-between bg-[#F5F5F7] hover:bg-[#EBEBEF] rounded-2xl p-5 h-[230px] transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex-grow flex items-center justify-center -mt-2">
                        <Image
                          src="/Design.svg"
                          alt="UI/UX Design"
                          width={180}
                          height={120}
                          className="object-contain max-h-[110px] w-auto transition-transform duration-500 group-hover/card:scale-105"
                        />
                      </div>
                      <div className="relative z-10 mt-auto">
                        <h4 className="text-sm font-medium text-zinc-900 mb-0.5">UI/UX Design</h4>
                        <p className="text-[11px] text-zinc-500 leading-snug">Expert Design Partners</p>
                      </div>
                    </Link>

                    {/* Web Development Card */}
                    <Link
                      href="/webd"
                      className="group/card flex flex-col justify-between bg-[#F5F5F7] hover:bg-[#EBEBEF] rounded-2xl p-5 h-[230px] transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex-grow flex items-center justify-center -mt-2">
                        <Image
                          src="/Web.svg"
                          alt="Web Development"
                          width={180}
                          height={120}
                          className="object-contain max-h-[110px] w-auto transition-transform duration-500 group-hover/card:scale-105"
                        />
                      </div>
                      <div className="relative z-10 mt-auto">
                        <h4 className="text-sm font-medium text-zinc-900 mb-0.5">Web Development</h4>
                        <p className="text-[11px] text-zinc-500 leading-snug">Scalable & Composable</p>
                      </div>
                    </Link>

                    {/* Performance Marketing Card */}
                    <Link
                      href="/marketing"
                      className="group/card flex flex-col justify-between bg-[#F5F5F7] hover:bg-[#EBEBEF] rounded-2xl p-5 h-[230px] transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex-grow flex items-center justify-center -mt-2">
                        <Image
                          src="/Data.svg"
                          alt="Performance Marketing"
                          width={180}
                          height={120}
                          className="object-contain max-h-[110px] w-auto transition-transform duration-500 group-hover/card:scale-105"
                        />
                      </div>
                      <div className="relative z-10 mt-auto">
                        <h4 className="text-sm font-medium text-zinc-900 mb-0.5">Performance Marketing</h4>
                        <p className="text-[11px] text-zinc-500 leading-snug">User-focused insights</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Divider line */}
                <div className="w-[1px] bg-zinc-100 self-stretch my-2" />

                {/* Right Section: Industries */}
                <div className="w-[260px] flex flex-col">
                  <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase block mb-4 select-none">
                    Industries:
                  </span>
                  <div className="flex flex-col gap-3">
                    {/* Enterprise */}
                    <Link
                      href="/enterprise"
                      className="flex items-center gap-3.5 bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-4 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/Enterprise.png"
                          alt="Enterprise"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-medium text-zinc-900 leading-tight">Enterprise</h4>
                        <p className="text-[11px] text-zinc-400 mt-0.5">Transformation at scale</p>
                      </div>
                    </Link>

                    {/* Startup */}
                    <Link
                      href="/startup"
                      className="flex items-center gap-3.5 bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-4 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/Startup.png"
                          alt="Startup"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-medium text-zinc-900 leading-tight">Startup</h4>
                        <p className="text-[11px] text-zinc-400 mt-0.5">Disruption meets scalability</p>
                      </div>
                    </Link>

                    {/* Ecommerce */}
                    <Link
                      href="/ecommerce"
                      className="flex items-center gap-3.5 bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-4 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/E-Commerce.png"
                          alt="Ecommerce"
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-medium text-zinc-900 leading-tight">Ecommerce</h4>
                        <p className="text-[11px] text-zinc-400 mt-0.5">Performance & Personalisation</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/Projects"
            className="text-[15px] font-regular text-black hover:text-black dark:text-black dark:hover:border-black transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/Blogs"
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
                href="/Service/ui_ux"
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-500 hover:text-black dark:hover:text-white"
              >
                UI/UX Design
              </Link>
              <Link
                href="/webd"
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-500 hover:text-black dark:hover:text-white"
              >
                Web Development
              </Link>
              <Link
                href="/marketing"
                onClick={() => setIsOpen(false)}
                className="text-sm text-zinc-500 hover:text-black dark:hover:text-white"
              >
                Performance Marketing
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
            href="/Projects"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/Blogs"
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
