"use client";

import React, { useEffect, useRef } from "react";

export default function EyeFollower() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  // Keep track of mouse coordinates
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  useEffect(() => {
    // Hidden initially to avoid flash on load
    if (containerRef.current) {
      containerRef.current.style.opacity = "0";
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!hasMoved.current) {
        hasMoved.current = true;
        // Position immediately on first move
        currentPos.current = { x: e.clientX, y: e.clientY };
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const updatePosition = () => {
      if (!containerRef.current) {
        animationFrameId = requestAnimationFrame(updatePosition);
        return;
      }

      // Smooth interpolation (lerp) for the floating container
      const speed = 0.12; // lower is smoother/slower, higher is faster
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * speed;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * speed;

      // Position the eye group at the mouse cursor
      // We offset by 15px so the eyes hover slightly offset from the exact tip of the cursor
      

      // Animate pupils inside the eyes to look at the cursor
      const animatePupil = (pupilRef: React.RefObject<HTMLDivElement | null>) => {
        const pupil = pupilRef.current;
        if (!pupil) return;

        // Get eyeball center relative to screen
        const eyeEl = pupil.parentElement;
        if (!eyeEl) return;
        const rect = eyeEl.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Vector from eyeball center to cursor
        const dx = mousePos.current.x - eyeCenterX;
        const dy = mousePos.current.y - eyeCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Maximum translation of pupil inside eyeball (eyeball is ~36px, pupil is ~14px, so max displacement is ~6px)
        const maxDisplacement = 6;
        
        if (distance > 0) {
          const angle = Math.atan2(dy, dx);
          // Limit distance to max displacement
          const displacement = Math.min(distance * 0.08, maxDisplacement);
          const px = Math.cos(angle) * displacement;
          const py = Math.sin(angle) * displacement;

          pupil.style.transform = `translate3d(${px}px, ${py}px, 0)`;
        } else {
          pupil.style.transform = "translate3d(0, 0, 0)";
        }
      };

      animatePupil(leftPupilRef);
      animatePupil(rightPupilRef);

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 z-50 pointer-events-none flex gap-1.5 select-none transition-opacity duration-300 ease-out rotate-[12deg]"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Left eyeball */}
      <div className="w-9 h-9 rounded-full border-[2.2px] border-zinc-900 bg-white relative flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        {/* Pupil */}
        <div
          ref={leftPupilRef}
          className="w-3.5 h-3.5 bg-zinc-900 rounded-full absolute"
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Right eyeball */}
      <div className="w-9 h-9 rounded-full border-[2.2px] border-zinc-900 bg-white relative flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        {/* Pupil */}
        <div
          ref={rightPupilRef}
          className="w-3.5 h-3.5 bg-zinc-900 rounded-full absolute"
          style={{ willChange: "transform" }}
        />
      </div>
    </div>
  );
}
