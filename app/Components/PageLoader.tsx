"use client";

import React, { useEffect, useState } from "react";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Lock scroll during initial load
    document.body.style.overflow = "hidden";

    // Trigger text fade-up animation shortly after mount
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 150);

    // Simulate smooth progress loading
    const startTime = performance.now();
    const duration = 1800; // 1.8s loading experience

    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Easing function for natural, snappy progress
      // easeOutCubic: 1 - Math.pow(1 - rawProgress, 3)
      const easeProgress = 1 - Math.pow(1 - rawProgress, 2.5);
      const currentPercent = Math.round(easeProgress * 100);

      setProgress(currentPercent);

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Once 100% is reached, start smooth fade-out
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
          // Remove from DOM after exit animation finishes
          setTimeout(() => {
            setShouldRender(false);
          }, 600);
        }, 350);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      clearTimeout(textTimer);
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center select-none transition-all duration-700 ease-in-out ${
        isLoading
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-[1.02] pointer-events-none blur-[2px]"
      }`}
      aria-hidden={!isLoading}
      role="status"
      aria-label="Loading page"
    >
      {/* ── Checkbox Grid Background Pattern ── */}
      <div
        className="absolute inset-0 bg-[#FAF9F6]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(24, 69, 247, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(24, 69, 247, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "0 -1px",
        }}
      />

      {/* ── Central Loader Box ── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        
        {/* ── Handwritten Text (Words Fade Up Staggered From Below Loading Bar To Above It) ── */}
        <div className="relative h-14 sm:h-16 flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 overflow-visible">
          {["Crafting", "digital", "magic..."].map((word, index) => (
            <span
              key={index}
              className={`font-handwriting text-2xl sm:text-3xl md:text-4xl text-zinc-900 font-semibold tracking-wide inline-block transform transition-all duration-700 ease-out ${
                textVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-9 sm:translate-y-11 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 160}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* ── Horizontal Loading Bar Container ── */}
        <div className="relative w-96 sm:w-[460px] md:w-[552px] max-w-[90vw]">
          {/* Outer Track Bar */}
          <div className="relative w-full h-2.5 sm:h-3 bg-zinc-200/80 rounded-full overflow-hidden p-[2px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] border border-zinc-300/70">
            {/* Inner Glowing Filled Bar */}
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 via-[#ecca08] to-red-500 transition-[width] duration-100 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Light Strip across the progress bar */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_1.4s_infinite]"
                style={{
                  backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                }}
              />
            </div>
          </div>

          {/* Progress Percentage & Status */}
          <div className="flex items-center justify-between mt-2.5 px-1">
            <span className="font-mono text-[11px] sm:text-xs text-zinc-500 font-medium tracking-wider uppercase">
              Initializing
            </span>
            <span className="font-mono text-xs sm:text-sm text-zinc-800 font-semibold tabular-nums">
              {progress}%
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
