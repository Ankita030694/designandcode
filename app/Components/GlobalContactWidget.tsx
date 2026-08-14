"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function GlobalContactWidget() {
  const pathname = usePathname();

  // Hide on admin panel pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-55 pointer-events-auto select-none">
      <Link
        href="https://wa.me/919220721921?text=Hello%20DesignNCode"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block group cursor-pointer"
        aria-label="WhatsApp Contact"
      >
        {/* WhatsApp Logo Container - Green circle with white WhatsApp logo PNG */}
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg border border-[#25D366]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <div className="relative w-7 h-7 md:w-10 md:h-10">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
