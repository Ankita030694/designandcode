import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../Components/footer";
import FAQ from "../Components/FAQ";
import ServicesSection from "../Components/ServicesSection";
import FeaturedProjects from "../Components/FeaturedProjects";

export const metadata: Metadata = {
  title: "Digital Design & Development Services | DesignNCode",
  description: "Explore DesignNCode services including UI/UX design, web development, Shopify, SEO, e-commerce and performance marketing for growing brands.",
  keywords: ["digital design and development services", "UI/UX design", "web development", "Shopify", "SEO", "e-commerce", "performance marketing"],
  alternates: {
    canonical: "https://designncode.com/Service",
  },
};

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
                    DESIGN &amp; CODE UNDER ONE ROOF
                  </span>
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-none text-zinc-950 select-none uppercase">
                  WHAT WE DO
                </h1>
              </div>

              {/* Bottom Row - Specialist Pill + Description */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mt-4">
                <div className="shrink-0 self-start">
                  <span className="inline-block bg-rose-100 text-rose-800 border border-rose-200 px-6 py-3.5 rounded-full text-sm font-bold tracking-wider uppercase shadow-xs select-none">
                    SENIOR SPECIALISTS
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                    <strong className="font-bold text-zinc-900">India-born, globally trusted</strong>, we design and build high-performing digital experiences that help ambitious brands grow. From UI/UX design and web development to Shopify, SEO and performance marketing, our senior specialists bring strategy, creativity and technology together to build digital products that make an impact.
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
                  sizes="(max-width: 1024px) 100vw, 440px"
                  quality={85}
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
      
      {/* ── Detailed Technical Capabilities Grid ── */}
      <section className="max-w-6xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D2A02A] block mb-2">Capabilities Matrix</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            Comprehensive Digital Engineering Solutions
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
            From initial user experience wireframing to high-scale serverless deployments, our senior engineering teams deliver end-to-end digital solutions built for enduring performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-zinc-200/80 rounded-3xl shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-zinc-900">Full-Stack Web Development</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Bespoke Next.js 16 applications, React Server Components, TypeScript architectures, PostgreSQL databases, and edge caching for sub-second global response times.
            </p>
            <ul className="text-xs text-zinc-500 space-y-2 pt-2 border-t border-zinc-100">
              <li>• React Server Components &amp; PPR</li>
              <li>• Automated CI/CD Quality Gates</li>
              <li>• 100% Custom TypeScript Codebase</li>
            </ul>
          </div>

          <div className="p-8 bg-white border border-zinc-200/80 rounded-3xl shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-zinc-900">Headless Shopify Plus</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Decoupled e-commerce flagships utilizing Shopify Storefront GraphQL APIs, single-page Checkout Extensibility, and multi-currency Shopify Markets localization.
            </p>
            <ul className="text-xs text-zinc-500 space-y-2 pt-2 border-t border-zinc-100">
              <li>• Optimistic Cart Architecture</li>
              <li>• Sub-400ms Product Detail Pages</li>
              <li>• PCI-DSS Level 1 Security</li>
            </ul>
          </div>

          <div className="p-8 bg-white border border-zinc-200/80 rounded-3xl shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-zinc-900">Technical SEO &amp; AI GEO</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Interconnected Schema.org JSON-LD entity graphs, Core Web Vitals remediation, crawl budget optimization, and structured Generative Engine Optimization.
            </p>
            <ul className="text-xs text-zinc-500 space-y-2 pt-2 border-t border-zinc-100">
              <li>• Schema.org @graph Integration</li>
              <li>• Core Web Vitals &lt; 1.2s LCP</li>
              <li>• Generative Engine AI Citations</li>
            </ul>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      {/* FAQ Section */}
      <FAQ />

      {/* Gap before Footer */}
      <div className="mt-15">
        <Footer />
      </div>
    </main>
  );
}
