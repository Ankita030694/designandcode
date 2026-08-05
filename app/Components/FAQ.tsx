"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Do you take on small projects?",
    answer: "We're flexible. Whether you need a complete identity or just a standout landing page, we'll tailor our process to fit your scope - without compromising quality."
  },
  {
    question: "Can you work with an existing brand?",
    answer: "Absolutely. We can integrate with your current design guidelines, brand assets, and product specs to help refresh, optimize, or scale your existing identity."
  },
  {
    question: "What's your typical project timeline?",
    answer: "Timelines vary depending on size. Simple marketing sites or brand packages take about 3-4 weeks, while larger composable web applications or custom dashboards take 8-12 weeks."
  },
  {
    question: "What happens after I reach out?",
    answer: "We'll schedule a quick call to understand your goals. Then, we outline a clear scope, estimate costs, and provide a timeline. Once approved, we kick off and collaborate closely."
  },
  {
    question: "Do you offer free consultations or discovery calls?",
    answer: "Yes. All our initial discovery calls are free and focus on understanding your challenges to outline potential solutions."
  },
  {
    question: "Can I reach out if I'm not sure what I need yet?",
    answer: "Of course. We regularly work with clients to define requirements, build feature backlogs, and outline their digital strategy from scratch."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default to match mockup

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#FFFFFF] py-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-zinc-100/50 relative z-10 -mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        
        {/* Left Side Info */}
        <div className="md:col-span-5 flex flex-col justify-start">
          <div className="space-y-6">
            <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase block">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1] uppercase">
              Have some questions?
            </h2>
          </div>

          <div className="space-y-6 mt-8 md:mt-12">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">
                Not finding answers?
              </h4>
              <p className="text-zinc-500 text-sm sm:text-[14px] leading-relaxed max-w-xs">
                Reach out anytime. We're happy to answer any questions before you commit to working together.
              </p>
            </div>
            
            <Link
              href="/ContactUs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-950 hover:bg-black text-[11px] font-bold text-white uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Contact Us</span>
              <svg
                className="w-3.5 h-3.5 text-white/80 transform rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Side Accordion */}
        <div className="md:col-span-7 border-t border-zinc-150">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-zinc-150">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-6 flex justify-between items-center text-left gap-4 hover:text-zinc-900 transition-colors focus:outline-none group"
                >
                  <span className="text-[17px] sm:text-[19px] font-medium text-zinc-900 leading-snug group-hover:opacity-80 transition-opacity">
                    {item.question}
                  </span>
                  <span className="text-2xl font-light text-zinc-400 select-none flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                
                {/* Expandable Panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-500 text-[14px] sm:text-base leading-relaxed pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
