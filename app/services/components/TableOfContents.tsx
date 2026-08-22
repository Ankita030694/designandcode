"use client";

import React, { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      // 180px offset accounts for fixed navbar and scroll margin
      const scrollPosition = window.scrollY + 180;

      let currentActive = items[0]?.id || "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentActive = item.id;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <aside className="hidden lg:block lg:col-span-3 sticky top-28 self-start bg-white/85 backdrop-blur-md rounded-2xl p-5 border border-zinc-200/80 shadow-xs">
      <span className="text-[11px] font-mono font-bold text-zinc-400 tracking-wider uppercase block mb-3.5">
        TABLE OF CONTENTS
      </span>
      <nav className="flex flex-col space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`text-xs sm:text-[13px] leading-snug py-1.5 px-3 rounded-lg block border-l-2 transition-all duration-200 ${
                isActive
                  ? "border-[#2563eb] text-[#2563eb] font-bold bg-blue-50/80 translate-x-1"
                  : "border-transparent text-zinc-600 font-medium hover:text-[#2563eb] hover:bg-zinc-100/50"
              }`}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
