"use client";

import Link from "next/link";
import Footer from "../Components/footer";
import CTA from "../Components/cta";
import TestimonialsCarousel from "../Components/TestimonialsCarousel";
import { PROJECTS_DATA } from "../data/projects";

// Testimonials data matching the Testimonial interface
const testimonials = [
  {
    category: "UI/UX Design",
    name: "Mark Deacon",
    role: "Chief Revenue Operations Officer at canibuild",
    logo: "/Logo_Client/Frame 375.svg",
    quote: "Designncode became the execution layer behind our inbound and outbound motions. It made our sales operation leaner, more efficient, and easier to scale."
  },
  {
    category: "Web Development",
    name: "Zoë McKenzie",
    role: "Director of RevOps Technology at Checkr",
    logo: "/Logo_Client/Frame 371.svg",
    quote: "We chose Designncode for their commitment to partnership. They were willing to build with us, experiment, and learn what works. We didn't know what was possible at first, but the quality of the output now is incredibly impressive."
  },
  {
    category: "Performance Marketing",
    name: "Atem Eyong",
    role: "Marketing Lead at Hard Rock Cafe",
    logo: "/Logo_Client/Frame 372.svg",
    quote: "Absolutely fantastic team to work with! Their strategic insights and execution capabilities generated substantial returns for our digital campaigns."
  }
];

export default function ServicesPage() {
  // Grab first 3 projects for the portfolio section
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  const services = [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      subtitle: "Expert Design Partners (and good listeners)",
      description: "We translate complex ideas into intuitive, beautiful, and conversion-focused digital interfaces. Aligned with your brand vision and powered by industry-leading UX best practices.",
      tags: ["User Research", "Wireframing & Prototyping", "Interface Design", "Design Systems", "Mobile & Web Apps"],
      href: "/Service/ui_ux",
    },
    {
      id: "web-dev",
      title: "Web Development",
      subtitle: "What if Technology wasn't an obstacle?",
      description: "Beautifully built, hyper-fast, and scalable websites designed to convert. We build lightweight Next.js websites, headless architectures, and custom web applications optimized for growth.",
      tags: ["React & Next.js", "Headless CMS", "Shopify E-Commerce", "API Integrations", "Speed Optimization"],
      href: "/Service/web_dev",
    },
    {
      id: "shopify-dev",
      title: "Shopify Development",
      subtitle: "High-Converting E-Commerce Stores",
      description: "Building high-converting, custom Shopify & e-commerce stores designed for seamless user checkout and rapid sales scaling.",
      tags: ["Liquid Dev", "Custom Themes", "App Integrations", "Headless Shopify", "Checkout Optimization"],
      href: "/ecommerce",
    },
    {
      id: "perf-marketing",
      title: "Performance Marketing",
      subtitle: "Bring your users into focus.",
      description: "Data-driven marketing managed with precision to deliver efficient growth and measurable returns. We help you target, acquire, and convert high-intent customers.",
      tags: ["Google Ads", "Meta Ads (FB/IG)", "Search Engine Marketing", "CRO Strategy", "Attribution & Tracking"],
      href: "/Service/perf_marketing",
    },
    {
      id: "seo",
      title: "SEO & Organic Growth",
      subtitle: "Dominating organic search results",
      description: "Dominating organic search results with data-backed technical SEO, keyword strategy, and high-authority content execution.",
      tags: ["Technical SEO", "Content Architecture", "Backlink Strategy", "Analytics & Reports", "Core Web Vitals"],
      href: "/Service/seo",
    }
  ];

  return (
    <main className="w-full bg-[#FFFFFF] min-h-screen">
      {/* Hero Section (Marino-Inspired Minimalist Style with Asymmetrical Layout) */}
      <section className="bg-[#FFFFFF] text-[#0C1833] pt-32 pb-24 px-6 sm:px-8 lg:px-12 rounded-b-[40px] relative overflow-hidden border-b border-zinc-100">

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Content) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              

              {/* Title Section with floating capsule */}
              <div className="relative">
                <div className="absolute -top-7 right-8 md:right-28 rotate-[-3deg] z-20">
                  <span className="inline-block bg-[#FACC15] text-[#0C1833] px-6 py-2.5 rounded-full text-xs sm:text-sm font-black shadow-md tracking-wider uppercase whitespace-nowrap">
                    Design & code under one roof
                  </span>
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-none text-[#0C1833] select-none">
                  What We Do
                </h1>
              </div>

              {/* Bottom Row - Specialist Pill + Description */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mt-4">
                <div className="shrink-0 self-start">
                  <span className="inline-block bg-[#FACC15] text-[#0C1833] px-6 py-3.5 rounded-full text-sm font-black tracking-wider uppercase shadow-sm select-none">
                    Senior specialists
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg text-[#0C1833]/85 leading-relaxed font-normal">
                    <strong className="font-bold text-[#0C1833]">India-born, globally trusted</strong> – we've designed and developed premium digital products and generated substantial growth for our clients, backed by a world-class team built to improve the bottom line.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Image with soft glowing blur behind it) */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Blur accent behind image */}
              <div className="absolute inset-0 bg-[#FACC15]/20 rounded-[40px] blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
              
              <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src="/team_meeting.png"
                  alt="Designncode Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services List Section (White Background) */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="group relative border-b border-zinc-100 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start transition-all duration-300"
              >
                {/* Left: Indicator & Service Title */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="text-sm font-semibold tracking-wider text-[#0C1833]/40">
                    0{idx + 1} / SERVICE
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1833] group-hover:text-[#FACC15] transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-zinc-500 font-medium text-md leading-snug">
                    {service.subtitle}
                  </p>
                </div>

                {/* Right: Details & Tags */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <p className="text-lg text-zinc-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Tags Grid */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-50 text-zinc-800 border border-zinc-200/60 group-hover:border-[#FACC15]/40 group-hover:bg-[#FACC15]/5 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="pt-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0C1833] hover:bg-[#FACC15] text-white hover:text-[#0C1833] font-semibold text-sm transition-all duration-300 shadow-md group-hover:translate-x-2"
                    >
                      <span>Explore service</span>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Statement Section (White Background) */}
      <section className="bg-[#FFFFFF] text-[#0C1833] py-20 px-6 sm:px-8 lg:px-12 my-12 border border-zinc-100 rounded-[30px] mx-6 sm:mx-8 lg:mx-12 relative overflow-hidden shadow-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0C1833]/60">
            Our Commitment
          </span>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed tracking-tight text-[#0C1833]">
            "Our team is made up of bold designers, sharp developers, and growth strategists who care deeply about what they do. No egos, no fluff – just hard work, smart thinking, and a genuine commitment to our clients’ success."
          </blockquote>
          <div className="w-12 h-[2px] bg-[#FACC15] mt-4" />
        </div>
      </section>

      {/* Portfolio Grid (White Background) */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1833]">
                Our latest work
              </h2>
            </div>
            <Link
              href="/Projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0C1833] hover:text-[#FACC15] transition-colors group"
            >
              <span>View all work</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/Projects/${project.slug}`}
                className="group flex flex-col bg-zinc-50 border border-zinc-100/80 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image Box */}
                <div className={`relative aspect-video w-full bg-gradient-to-br ${project.bg} flex items-center justify-center p-6`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-[85%] max-w-[85%] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-zinc-400 font-bold uppercase tracking-wider">{project.title}</span>
                  )}
                  {/* Flag Tag */}
                  <span className="absolute top-3 right-3 text-lg bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-sm">
                    {project.flag}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-[#0C1833] group-hover:text-[#FACC15] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Block */}
      <section className="py-16 bg-[#FFFFFF] border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FACC15]">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0C1833] mt-2">
              What clients say about us
            </h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
