"use client";

import React, { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock scroll during initial loader screen
    document.body.style.overflow = "hidden";

    // Show loader animation for 2 seconds, then smoothly slide upside
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = "";
      document.documentElement.classList.add("page-loaded");
      window.dispatchEvent(new CustomEvent("page-loader-complete"));

      // Unmount from DOM once slide-up transition finishes (900ms)
      setTimeout(() => {
        setShouldRender(false);
      }, 950);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <style>{`
        .wrapper {
          height: 200px;
          width: 180px;
          position: relative;
          overflow: visible;
        }

        .cloud {
          overflow: hidden;
          padding: 5px;
          height: 50px;
          width: 180px;
          box-sizing: border-box;
        }

        .cloud_left {
          position: relative;
          float: left;
          background-color: #234;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);
        }

        .cloud_right {
          position: relative;
          float: left;
          background-color: #203040;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          top: 15px;
          left: -30px;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);
        }

        .rain {
          width: 180px;
          height: 140px;
          overflow: visible;
        }

        .drop {
          position: relative;
          float: left;
          width: 2px;
          margin: 10px;
          left: 20px;
          background: #789;
          box-shadow: 1px 0.5px 1px 0.5px rgba(0, 0, 0, 0.75);
          animation: rain_401 0.8s infinite ease-out;
        }

        .drop:nth-child(1) {
          height: 15px;
          top: 5px;
          animation-delay: -1.0s;
        }

        .drop:nth-child(2) {
          height: 20px;
          animation-delay: -1.4s;
        }

        .drop:nth-child(3) {
          height: 15px;
          top: 5px;
          animation-delay: -1.6s;
        }

        .drop:nth-child(4) {
          height: 10px;
          top: 10px;
          animation-delay: -1.2s;
        }

        .drop:nth-child(5) {
          height: 5px;
          top: 15px;
          animation-delay: -1.6s;
        }

        @keyframes rain_401 {
          0% {
            opacity: 1;
            transform: translate(0, 0);
          }

          100% {
            opacity: 0.2;
            transform: translate(0, 100px);
          }
        }

        .surface {
          position: relative;
          width: 180px;
          height: 140px;
          top: -140px;
          overflow: visible;
        }

        .hit {
          position: absolute;
          width: 3px;
          height: 1px;
          margin: 10px;
          bottom: -5px;
          border: 1px solid #456;
          border-radius: 50%;
          animation: hit_401 0.8s infinite ease;
        }

        .hit:nth-child(1) {
          left: 19px;
          animation-delay: -0.3s;
        }

        .hit:nth-child(2) {
          left: 41px;
          animation-delay: -0.7s;
        }

        .hit:nth-child(3) {
          left: 63px;
          animation-delay: -0.9s;
        }

        .hit:nth-child(4) {
          left: 85px;
          animation-delay: -0.5s;
        }

        .hit:nth-child(5) {
          left: 107px;
          animation-delay: -0.9s;
        }

        @keyframes hit_401 {
          0% {
            opacity: 0.75;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(2.5);
          }
        }

        @keyframes textBreathe {
          0%, 100% {
            opacity: 0.8;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px);
          }
        }

        .loader-loading-text {
          animation: textBreathe 2s ease-in-out infinite;
        }
      `}</style>

      {/* ── Fullscreen Loader Overlay with Slide Upside Transition ── */}
      <div
        className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center select-none bg-white overflow-hidden transition-transform duration-[850ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isLoaded ? "-translate-y-full pointer-events-none shadow-[0_25px_60px_rgba(0,0,0,0.12)]" : "translate-y-0"
        }`}
        aria-hidden={isLoaded}
        role="status"
        aria-label="Loading page"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

        {/* ── Rain Cloud Loader Container ── */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <div className="wrapper scale-110 sm:scale-125">
            <div className="cloud">
              <div className="cloud_left" />
              <div className="cloud_right" />
            </div>
            <div className="rain">
              <div className="drop" />
              <div className="drop" />
              <div className="drop" />
              <div className="drop" />
              <div className="drop" />
            </div>
            <div className="surface">
              <div className="hit" />
              <div className="hit" />
              <div className="hit" />
              <div className="hit" />
              <div className="hit" />
            </div>
          </div>

          {/* Handwritten LOADING text - Centered below animation */}
          <span className="loader-loading-text font-handwriting text-2xl sm:text-3xl font-bold tracking-widest text-zinc-900 select-none mt-6 sm:mt-8">
            LOADING
          </span>
        </div>
      </div>
    </>
  );
}
