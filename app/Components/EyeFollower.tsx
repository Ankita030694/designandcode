"use client";

import React, { useEffect, useRef } from "react";

export default function EyeFollower() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorSvgRef = useRef<SVGSVGElement>(null);

  // Positions and animation states
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  
  const isVisible = useRef(false);
  const isHovered = useRef(false);
  const isMouseDown = useRef(false);
  const hasMoved = useRef(false);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    if (typeof window === "undefined") return;
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      !window.matchMedia("(hover: hover)").matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (!hasMoved.current) {
        hasMoved.current = true;
        cursorPos.current = { x: clientX, y: clientY };
        mousePos.current = { x: clientX, y: clientY };
        isVisible.current = true;
        if (containerRef.current) {
          containerRef.current.style.opacity = "1";
        }
      } else {
        mousePos.current = { x: clientX, y: clientY };
      }
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (containerRef.current) {
        containerRef.current.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (containerRef.current) {
        containerRef.current.style.opacity = "0";
      }
    };

    const onMouseDown = () => {
      isMouseDown.current = true;
      if (cursorSvgRef.current) {
        cursorSvgRef.current.style.transform = isHovered.current
          ? "scale(1.05) rotate(-4deg)"
          : "scale(0.88) rotate(-4deg)";
      }
    };

    const onMouseUp = () => {
      isMouseDown.current = false;
      if (cursorSvgRef.current) {
        cursorSvgRef.current.style.transform = isHovered.current
          ? "scale(1.18)"
          : "scale(1)";
      }
    };

    // Detect interactive / clickable elements on the page
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

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);

    let animationFrameId: number;

    const renderLoop = () => {
      if (!containerRef.current) {
        animationFrameId = requestAnimationFrame(renderLoop);
        return;
      }

      // Smooth lerp for ultra-responsive, buttery smooth cursor follow
      const lerpFactor = 0.45;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;

      // Translate so the cursor tip aligns accurately with (x, y)
      containerRef.current.style.transform = `translate3d(${cursorPos.current.x - 2}px, ${cursorPos.current.y - 2}px, 0)`;

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[99999] pointer-events-none select-none opacity-0 transition-opacity duration-150 ease-out hidden md:block"
      style={{
        width: 26,
        height: 26,
        willChange: "transform, opacity",
      }}
    >
      <svg
        ref={cursorSvgRef}
        viewBox="0 0 26 26"
        width="26"
        height="26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_6px_rgba(0,122,255,0.4)] transition-transform duration-150 ease-out"
        style={{ transformOrigin: "top left" }}
      >
        {/* Custom Blue Figma/Live Cursor Pointer */}
        <path
          d="M4.03 2.57C3.33 2.07 2.36 2.57 2.36 3.44V21.4C2.36 22.37 3.52 22.86 4.22 22.18L8.85 17.65C9.17 17.34 9.6 17.17 10.05 17.17H17.75C18.72 17.17 19.22 16.01 18.54 15.31L4.03 2.57Z"
          fill="#0084FF"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
