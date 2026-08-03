"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import CircularText from "@/components/CircularText";

export default function GlobalContactWidget() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // If we're on the Contact Us, Admin, or Blog pages, hide the global widget to prevent overlaps
    if (
      pathname === "/ContactUs" || 
      pathname?.startsWith("/admin") || 
      pathname?.startsWith("/Blogs")
    ) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Only show the widget after scrolling past the hero section (300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Trigger initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (
    pathname?.startsWith("/admin") || 
    pathname?.startsWith("/Blogs") || 
    pathname === "/ContactUs"
  ) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 pointer-events-none transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
      }`}
    >
      <Link
        href="/ContactUs"
        className="pointer-events-auto relative block group cursor-pointer"
        aria-label="Contact Us"
      >
        <CircularText
          text="CAN WE CONNECT TODAY? • "
          spinDuration={8}
          onHover="speedUp"
          className="w-20 h-20 sm:w-24 sm:h-24 text-[6px] sm:text-[8px] uppercase font-bold text-white tracking-wider bg-[#25d366] backdrop-blur-md rounded-full shadow-lg border border-[#25d366]/40 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#25d366] hover:border-[#25d366]/50 hover:shadow-xl"
          radius={30}
        />
        {/* Center Dot */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300" />
        </div>
      </Link>
    </div>
  );
}
