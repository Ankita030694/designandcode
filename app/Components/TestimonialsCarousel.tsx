"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export interface Testimonial {
  category?: string;
  name: string;
  role: string;
  logo: string;
  quote: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Dragging states
  const [startX, setStartX] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Responsive checks
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Display array with cloned elements at boundaries for seamless infinite looping
  const displayTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating]);

  // Auto play logic: move slides every 4 seconds if not currently dragging
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isDragging, currentIndex, handleNext]);

  // Transition wrapping reset
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
    } else if (currentIndex >= testimonials.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  // Re-enable transition after state has updated without it
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Drag / Swiping handlers
  const handleDragStart = (clientX: number) => {
    if (isAnimating) return;
    setStartX(clientX);
    setIsDragging(true);
    setIsTransitioning(false);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentOffset(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    const threshold = 60; // drag threshold to switch slides
    if (currentOffset < -threshold) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    } else if (currentOffset > threshold) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    } else {
      if (currentOffset !== 0) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    }
    setCurrentOffset(0);
  };

  // Touch Event Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  // Mouse Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  // Dimensional configuration based on screen sizes
  const cardWidth = isMobile ? 230 : 320;
  const gap = isMobile ? 12 : 24;
  const itemWidth = cardWidth + gap;
  const shiftOffset = cardWidth / 2;

  // Real active index (0-indexed) for slide indicators
  let activeDotIndex = currentIndex - 1;
  if (currentIndex === 0) {
    activeDotIndex = testimonials.length - 1;
  } else if (currentIndex === testimonials.length + 1) {
    activeDotIndex = 0;
  }

  return (
    <div className="relative w-full flex flex-col items-center py-10 overflow-hidden select-none -mt-20">
      {/* Title */}
      <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-16 text-center">
        What People Say
      </h2>

      {/* Carousel Wrapper */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center min-h-[350px] cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Left Arrow Button (Desktop Only) */}
        <div className="hidden md:block absolute left-4 md:left-8 z-30">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-2xl bg-white border border-zinc-150 flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer group"
            aria-label="Previous testimonial"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF3E1D] group-hover:bg-[#E03126] transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 text-white fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </button>
        </div>

        {/* Right Arrow Button (Desktop Only) */}
        <div className="hidden md:block absolute right-4 md:right-8 z-30">
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-2xl bg-white border border-zinc-150 flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer group"
            aria-label="Next testimonial"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF3E1D] group-hover:bg-[#E03126] transition-colors flex items-center justify-center">
              <svg className="w-4 h-4 text-white fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </button>
        </div>

        {/* Carousel Visual Viewport */}
        <div className="relative w-full h-[310px] overflow-visible">
          {/* Gradient Overlay Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-1/6 md:w-1/4 bg-gradient-to-r from-[#F4F8FF] via-[#F4F8FF]/80 to-transparent pointer-events-none z-20" />
          
          {/* Gradient Overlay Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/6 md:w-1/4 bg-gradient-to-l from-[#F4F8FF] via-[#F4F8FF]/80 to-transparent pointer-events-none z-20" />

          {/* Slider Row */}
          <div
            className="absolute left-1/2 top-1/2 flex transition-transform duration-500 ease-out"
            onTransitionEnd={handleTransitionEnd}
            style={{
              gap: `${gap}px`,
              transform: `translateX(calc(-${currentIndex * itemWidth}px - ${shiftOffset}px + ${currentOffset}px)) translateY(-50%)`,
              transition: isTransitioning ? "transform 500ms ease-out" : "none",
              width: `${displayTestimonials.length * itemWidth}px`,
            }}
          >
            {displayTestimonials.map((t, idx) => {
              const isActive = idx === currentIndex;
              const isLeft = idx === currentIndex - 1;
              const isRight = idx === currentIndex + 1;

              let cardStyle = "opacity-0 scale-75 blur-[2px] pointer-events-none";
              if (isActive) {
                cardStyle = "opacity-100 scale-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-zinc-200/80 z-10 translate-y-[-4px]";
              } else if (isLeft || isRight) {
                cardStyle = "opacity-35 scale-90 shadow-sm border-zinc-100 cursor-pointer hover:opacity-50 z-0";
              }

              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (isLeft) handlePrev();
                    if (isRight) handleNext();
                  }}
                  style={{ width: `${cardWidth}px` }}
                  className={`h-[250px] md:h-[270px] shrink-0 bg-white border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ease-out select-none ${cardStyle}`}
                >
                  {/* Header: User Info (Founders Image Removed) */}
                  <div className="flex items-center">
                    <div className="text-left">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5 font-medium leading-none">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* Body: Testimonial Text */}
                  <div className="flex-1 mt-6 text-left">
                    <p className="text-zinc-600 text-sm leading-relaxed font-normal line-clamp-4">
                      {t.quote}
                    </p>
                  </div>

                  {/* Footer: Brand Logo */}
                  <div className="flex justify-end mt-4 pt-4 border-t border-zinc-50">
                    <div className="relative w-24 h-8 flex items-center justify-end">
                      <Image
                        src={t.logo}
                        alt="Brand Logo"
                        width={96}
                        height={28}
                        className="h-5 sm:h-6 w-auto object-contain opacity-70"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex items-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setIsTransitioning(true);
              setCurrentIndex(idx + 1);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeDotIndex ? "w-6 bg-[#FF3E1D]" : "w-1.5 bg-zinc-200 hover:bg-zinc-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
