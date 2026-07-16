import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col flex-1 items-center justify-center bg-[#fafafc] overflow-hidden py-24 px-6 sm:px-8 lg:px-12 min-h-[calc(100vh-80px)]">
      {/* Premium Ambient Background Glows */}
      <div className="hero-glow w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bottom-[-100px] right-[-100px] opacity-80" />
      <div className="hero-glow w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] top-[-100px] left-[-100px] opacity-40" />

      {/* Hero Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        
        {/* Badge: Design-Led Development Partners */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full animate-fade-in-up">
          {/* Left Laurel Wreath */}
          <Image
            src="/LL.svg"
            alt="Laurel Left"
            width={22}
            height={22}
            className="w-8 h-8 object-contain"
          />
          
          <span className="tracking-wide text-[16px] font-regular text-zinc-600">
            Design-Led Development Partners
          </span>
          
          {/* Right Laurel Wreath */}
          <Image
            src="/LR.svg"
            alt="Laurel Right"
            width={22}
            height={22}
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="flex flex-col items-center mt-8 tracking-tight">
          <span className="text-5xl sm:text-6xl md:text-6xl font-medium text-zinc-900 leading-[1.1] animate-fade-in-up [animation-delay:200ms] block">
            Strategy that ships.
          </span>
          <span className="relative  text-5xl sm:text-6xl md:text-6xl font-semibold bg-gradient-to-r from-[#60a5fa] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent leading-[1.2] pb-10 px-2 inline-block animate-fade-in-up [animation-delay:400ms]">
            Design that endures.
            
            {/* SVG Squiggle Underline */}
            <Image
              src="/Marker.svg"
              alt="Marker Underline"
              width={541}
              height={38}
              className="absolute bottom-1 sm:bottom-0 left-0 w-full h-[18px] sm:h-[40px] pointer-events-none object-contain select-none animate-reveal-width [animation-delay:400ms]"
              priority
            />
          </span>
        </h1>

        {/* Sub-headline / Paragraph */}
        <p className="mt-8 text-center text-zinc-500 text-lg sm:text-xl max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:600ms] px-4">
          Design and development partners for{" "}
          <span className="inline-block bg-zinc-100 text-zinc-800 px-2.5 py-0.5 rounded-md font-medium text-[16px] sm:text-[18px] transition-all duration-200 hover:bg-zinc-200/80 hover:text-zinc-950 cursor-default select-none mx-0.5">
            enterprise
          </span>
          ,{" "}
          <span className="inline-block bg-zinc-100 text-zinc-800 px-2.5 py-0.5 rounded-md font-medium text-[16px] sm:text-[18px] transition-all duration-200 hover:bg-zinc-200/80 hover:text-zinc-950 cursor-default select-none mx-0.5">
            ecommerce
          </span>
          , and{" "}
          <span className="inline-block bg-zinc-100 text-zinc-800 px-2.5 py-0.5 rounded-md font-medium text-[16px] sm:text-[18px] transition-all duration-200 hover:bg-zinc-200/80 hover:text-zinc-950 cursor-default select-none mx-0.5">
            startups
          </span>
          . We bring clarity to complexity.
        </p>

        {/* Call to Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 animate-fade-in-up [animation-delay:800ms]">
          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-200/80 bg-zinc-50/40 text-[15px] font-medium text-zinc-700 hover:bg-zinc-100/80 hover:border-zinc-300/80 hover:text-zinc-900 transition-all duration-200 text-center cursor-pointer shadow-xs"
          >
            Why Designncode?
          </Link>
          <Link
            href="/ContactUs"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[15px] font-medium text-zinc-900 transition-all duration-200 text-center shadow-[0_4px_8px_rgba(0,0,0,0.04)] border border-zinc-100/80 hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Start a project
          </Link>
        </div>

      </div>
    </main>
  );
}
