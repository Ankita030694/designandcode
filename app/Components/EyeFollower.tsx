"use client";

import React, { useEffect, useRef, useState } from "react";

export default function EyeFollower() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorSvgRef = useRef<SVGSVGElement>(null);

  // Positions and animation states
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  
  const isHovered = useRef(false);
  const isMouseDown = useRef(false);
  const isEnabled = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onPointerMove = (e: PointerEvent) => {
      // If it's a direct touch event on mobile, keep custom cursor hidden
      if (e.pointerType === "touch") {
        if (containerRef.current) {
          containerRef.current.style.opacity = "0";
        }
        return;
      }

      const { clientX, clientY } = e;
      mousePos.current = { x: clientX, y: clientY };

      if (!isEnabled.current) {
        isEnabled.current = true;
        cursorPos.current = { x: clientX, y: clientY };
      }

      if (containerRef.current) {
        containerRef.current.style.opacity = "1";
      }
    };

    const onMouseEnter = () => {
      if (containerRef.current && isEnabled.current) {
        containerRef.current.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "0";
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isMouseDown.current = true;
      if (cursorSvgRef.current) {
        cursorSvgRef.current.style.transform = isHovered.current
          ? "scale(1.05) rotate(-4deg)"
          : "scale(0.88) rotate(-4deg)";
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isMouseDown.current = false;
      if (cursorSvgRef.current) {
        cursorSvgRef.current.style.transform = isHovered.current
          ? "scale(1.18)"
          : "scale(1)";
      }
    };

    // Detect interactive elements for hover scale
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], [tabindex='0'], .cursor-pointer"
      );
      if (interactive) {
        isHovered.current = true;
        if (cursorSvgRef.current && !isMouseDown.current) {
          cursorSvgRef.current.style.transform = "scale(1.18)";
        }
      } else {
        isHovered.current = false;
        if (cursorSvgRef.current && !isMouseDown.current) {
          cursorSvgRef.current.style.transform = "scale(1)";
        }
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", onMouseOver);

    let animationFrameId: number;

    const renderLoop = () => {
      if (containerRef.current && isEnabled.current) {
        // Smooth lerp follow
        const lerpFactor = 0.5;
        cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
        cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;

        // Position accurately with tip at cursor point
        containerRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[999999] pointer-events-none select-none opacity-0 transition-opacity duration-150 ease-out"
      style={{
        width: 28,
        height: 28,
        willChange: "transform, opacity",
      }}
    >
      <svg
        ref={cursorSvgRef}
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,122,255,0.5)] transition-transform duration-150 ease-out"
        style={{ transformOrigin: "0 0" }}
      >
        {/* Vibrant Blue Figma Pointer */}
        <path
          d="M3 2L20.5 11.5L11.5 13.5L8 21.5L3 2Z"
          fill="#007AFF"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
