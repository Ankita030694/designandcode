"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-[#F9F9FB] py-20 lg:py-28 px-6 sm:px-8 lg:px-12 border-t border-zinc-100/50 overflow-hidden -mt-10">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Chat Icon & Bubble */}
          <div className="relative mb-8 inline-block">
            {/* The grey gradient card */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center justify-center border border-zinc-800/80">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
              </svg>
            </div>
            {/* Holaa! speech bubble */}
            <div className="absolute -top-4 -right-12 bg-white text-zinc-800 font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-zinc-200/80 shadow-md select-none animate-float whitespace-nowrap">
              Holaa!
              <span className="absolute bottom-[-5px] left-[20%] w-2.5 h-2.5 bg-white border-r border-b border-zinc-200/80 rotate-45" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-6 max-w-xl leading-[1.1]">
            Get a free<br />project check-up
          </h2>
          <p className="text-zinc-500 text-base sm:text-xl max-w-xl leading-relaxed">
            Drop us a message or book a quick call. Whether it&apos;s revamping a full-blown site or nurturing the kernel of an idea, we&apos;re here to make it happen.
          </p>
        </div>

        {/* Right Side: CTA Card */}
        <div className="flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-md rounded-2xl text-left overflow-hidden flex flex-col p-8 md:p-10 border border-zinc-200/60 bg-white">
            {/* The background grid image wrapper */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/CTA.png"
                alt="CTA Background"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative z-10 flex flex-col h-full space-y-6">
              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-900 leading-tight flex flex-wrap items-center gap-x-2">
                <span>Book a</span>
                <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">30-min</span>
                <span>Introduction Call 👋</span>
              </h3>

              {/* Description */}
              <p className="text-zinc-600 text-[15px] leading-relaxed">
                Hop on a{" "}
                <span className="inline-block bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded font-medium text-sm">
                  quick call
                </span>{" "}
                and turn half an hour into the start of something{" "}
                <span className="inline-block bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded font-medium text-sm">
                  great.
                </span>
              </p>

              {/* Subheading */}
              <h4 className="text-[16px] font-medium text-zinc-950">
                What we&apos;ll be doing for ~30 mins:
              </h4>

              {/* List */}
              <ul className="space-y-3">
                {[
                  "A quick intro.",
                  "Unpacking your project.",
                  "Pinpoint how we can help."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-700 text-[15px]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href="/ContactUs"
                className="w-full py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-black transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 text-[15px]"
              >
                <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
