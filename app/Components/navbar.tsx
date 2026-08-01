"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CardNav from "@/components/CardNav";

const navItems = [
  {
    label: "Services",
    bgColor: "#f4f4f5", // zinc-100
    textColor: "#18181b", // zinc-900
    links: [
      { label: "UI/UX Design", href: "/Service/ui_ux", ariaLabel: "UI/UX Design services" },
      { label: "Web Development", href: "/webd", ariaLabel: "Web Development services" },
      { label: "Performance Marketing", href: "/marketing", ariaLabel: "Performance Marketing services" }
    ]
  },
  {
    label: "Company",
    bgColor: "#f4f4f5", // zinc-100
    textColor: "#18181b", // zinc-900
    links: [
      { label: "Work / Projects", href: "/Projects", ariaLabel: "Our projects portfolio" },
      { label: "About Us", href: "/About_us", ariaLabel: "About our agency" },
      { label: "Resources & Blogs", href: "/Blogs", ariaLabel: "Resources and blogs" }
    ]
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
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
  }, [lastScrollY, isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
      show ? "translate-y-0" : "-translate-y-full"
    }`}>
      <CardNav
        logo="/LOGO.svg"
        logoAlt="Designncode Logo"
        items={navItems}
        baseColor="#FAF9F6"
        menuColor="#18181b"
        buttonBgColor="#18181b"
        buttonTextColor="#ffffff"
        isExpanded={isMenuOpen}
        onExpandedChange={setIsMenuOpen}
      />
    </header>
  );
}
