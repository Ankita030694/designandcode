"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
    imageSrc: "/Home.svg",
  },
  {
    label: "About Us",
    href: "/About_us",
    imageSrc: "/About US.jpg",
  },
  {
    label: "Services",
    href: "/Service",
    imageSrc: "/Services.jpg",
  },
  {
    label: "Projects",
    href: "/Projects",
    imageSrc: "/Projects.jpg",
  },
  {
    label: "Blogs",
    href: "/Blogs",
    imageSrc: "/Blogs.png",
  },
  {
    label: "Contact",
    href: "/ContactUs",
    imageSrc: "/Contact.jpg",
  },
];

export default function Navbar() {
  const pathname = usePathname() || "";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Check if admin route - hide on admin routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* Top Middle Logo */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto select-none">
        <Link href="/" className="block transition-transform duration-300 hover:scale-105">
          <Image 
            src="/LOGO.svg" 
            alt="Designncode Logo" 
            width={120} 
            height={35} 
            className="h-8 w-auto" 
            priority
          />
        </Link>
      </div>

      <div className="fixed bottom-6 left-6 right-6 z-50 flex items-end justify-between pointer-events-none select-none">
        {/* Left Bottom Content: Spacer to maintain structure */}
        <div className="hidden md:block w-16 h-16 md:w-24 md:h-24" />

        {/* Center: macOS Dock Navbar (Always centered via absolute positioning) */}
        <div 
          className="pointer-events-auto flex items-end gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-[20px] md:rounded-[24px] bg-white/20   dark:border-zinc-800/50 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out absolute left-1/2 -translate-x-1/2 bottom-0"
          style={{
            boxShadow: "0 10px 30px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.2)",
          }}
        >
          {navItems.map((item, index) => {
            // Check if current route is active
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            
            // Magnification math
            let scale = 1;
            if (hoveredIndex !== null) {
              const distance = Math.abs(hoveredIndex - index);
              if (distance === 0) {
                scale = 1.35;
              } else if (distance === 1) {
                scale = 1.15;
              }
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
                  transform: `scale(${scale}) translateY(-${(scale - 1) * 15}px)`,
                  transformOrigin: "bottom center",
                }}
              >
                {/* Tooltip */}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-medium bg-black/80 dark:bg-white/90 text-white dark:text-black opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-md">
                  {item.label}
                </span>

                {/* Icon Container */}
                <div 
                  className={`relative w-10 h-10 md:w-16 md:h-16 rounded-[10px] md:rounded-[18px] overflow-hidden border transition-all duration-300 shadow-md ${
                    isActive 
                      ? "border-amber-400 shadow-amber-400/20" 
                      : "border-black/10 dark:border-white/10"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 40px, 64px"
                    className="object-cover"
                    priority
                  />
                  
                  {/* Glass sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none" />
                </div>

                {/* Active Dot Indicator */}
                <div 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 mt-1.5 ${
                    isActive 
                      ? "bg-amber-400 scale-100 shadow-[0_0_8px_#facc15]" 
                      : "bg-transparent scale-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
