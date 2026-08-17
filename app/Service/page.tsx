import Image from "next/image";
import Footer from "../Components/footer";
import Reviews from "../Components/Reviews";
import ServicesSection from "../Components/ServicesSection";
import FeaturedProjects from "../Components/FeaturedProjects";

export default function ServicesPage() {
  return (
    <main className="w-full bg-transparent min-h-screen">
      {/* Hero Section (Minimalist Style with Asymmetrical Layout) */}
      <section className="bg-transparent text-zinc-900 pt-32 pb-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column (Content) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Title Section with floating capsule */}
              <div className="relative">
                <div className="absolute -top-7 right-8 md:right-28 rotate-[-3deg] z-20">
                  <span className="inline-block bg-sky-100 text-sky-800 border border-sky-200 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm tracking-wider uppercase whitespace-nowrap">
                    Design & code under one roof
                  </span>
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-none text-zinc-950 select-none">
                  What We Do
                </h1>
              </div>

              {/* Bottom Row - Specialist Pill + Description */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mt-4">
                <div className="shrink-0 self-start">
                  <span className="inline-block bg-rose-100 text-rose-800 border border-rose-200 px-6 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-xs select-none">
                    Senior specialists
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                    <strong className="font-bold text-zinc-900">India-born, globally trusted</strong> – we've designed and developed premium digital products and generated substantial growth for our clients, backed by a world-class team built to improve the bottom line.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Image with soft glowing blur behind it) */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Blur accent behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-rose-400/20 to-purple-400/20 rounded-[40px] blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
              
              <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/Service.jpg"
                  alt="Designncode Services"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Component (Homepage interactive cards) */}
      <ServicesSection />

      {/* Philosophy Statement Section */}
      <section className="bg-white/80 backdrop-blur-xs text-zinc-900 py-20 px-6 sm:px-8 lg:px-12 my-12 border border-zinc-200/60 rounded-[30px] mx-6 sm:mx-8 lg:mx-12 relative overflow-hidden shadow-xs">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Our Commitment
          </span>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed tracking-tight text-zinc-900">
            "Our team is made up of bold designers, sharp developers, and growth strategists who care deeply about what they do. No egos, no fluff – just hard work, smart thinking, and a genuine commitment to our clients’ success."
          </blockquote>
          <div className="w-12 h-[2px] bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400 mt-4 rounded-full" />
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Reviews Section */}
      <div className="pb-12 md:pb-20">
        <Reviews />
      </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
