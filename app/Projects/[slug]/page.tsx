import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "../../data/projects";
import { getProjectCopy } from "./projectCopy";
import Footer from "../../Components/footer";
import FAQ from "../../Components/FAQ";

// ─── STATIC GENERATION ───
export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

// ─── DYNAMIC METADATA ───
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Studies | UI/UX & Web Design Projects | DesignNCode",
      description: "Explore DesignNCode case studies covering UI/UX design, web development, e-commerce and digital products, from strategy to final execution.",
      keywords: ["UI/UX design case studies", "Case Studies", "UI/UX design", "web development", "e-commerce", "digital products"],
    };
  }

  return {
    title: `${project.title} | Case Studies | DesignNCode`,
    description: project.description || "Explore DesignNCode case studies covering UI/UX design, web development, e-commerce and digital products, from strategy to final execution.",
    keywords: ["UI/UX design case studies", project.title, "Case Studies", "UI/UX design", "web development", "e-commerce"],
    alternates: {
      canonical: `https://designncode.com/Projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Studies | DesignNCode`,
      description: project.description,
      url: `https://designncode.com/Projects/${slug}`,
      images: project.image ? [project.image] : [],
    },
  };
}

// ─── DYNAMIC PAGE COMPONENT ───
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const copy = getProjectCopy(project);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `https://designncode.com/Projects/${slug}#project`,
        "headline": `${project.title} - UI/UX & Web Case Study`,
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "author": {
          "@type": "Organization",
          "name": "DesignNCode",
          "url": "https://designncode.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "DesignNCode",
          "url": "https://designncode.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://designncode.com/LOGO.svg",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://designncode.com/Projects/${slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://designncode.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://designncode.com/Projects",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://designncode.com/Projects/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="relative flex flex-col min-h-screen pt-20 bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
      </div>

      <div className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 sm:px-8 pt-12 md:pt-16 pb-0">
        
        {/* Navigation / Back Button */}
        <div className="mb-10 sm:mb-14">
          <Link
            href="/Projects"
            prefetch={true}
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Header Info */}
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.15] mb-6">
            {project.title}, {project.description}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-2.5 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-medium shadow-[0_2px_6px_rgba(0,0,0,0.03)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Mockup Showcase Card Container */}
        <div className="relative max-w-4xl mx-auto mb-16 sm:mb-24">
          {/* Soft blur accent glow behind container */}
          <div className={`absolute inset-0 -m-6 sm:-m-10 bg-gradient-to-tr ${project.bg} rounded-[40px] filter blur-3xl opacity-70 z-0 pointer-events-none`} />

          {/* Capsule Card wrapper */}
          <div className="relative z-10 bg-white/70 backdrop-blur-md rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12  shadow-[0_15px_50px_rgba(0,0,0,0.04)] flex items-center justify-center overflow-hidden">
            <div className="relative w-full overflow-hidden rounded-xl  bg-white shadow-xs">
              <Image
                src={project.image}
                alt={project.title}
                width={1040}
                height={780}
                quality={85}
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Project Details & Sticky Sidebar Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pt-6 pb-4 relative z-10">
          {/* Left Column: Sticky Metadata & CTA Card */}
          <aside className="md:col-span-1">
            <div className="sticky top-28 space-y-6 bg-white/50 backdrop-blur-xs rounded-3xl p-6 border border-zinc-200/50 shadow-xs">
              {/* Metadata list */}
              <div className="space-y-4 text-sm sm:text-[15px]">
                <div className="flex justify-between items-baseline border-b border-zinc-100 pb-3">
                  <span className="text-zinc-400 font-medium">Type:</span>
                  <span className="text-zinc-800 font-semibold text-right">{project.projectType}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-zinc-100 pb-3">
                  <span className="text-zinc-400 font-medium">Category:</span>
                  <span className="text-zinc-800 font-semibold text-right">{copy.category}</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-zinc-100 pb-3">
                  <span className="text-zinc-400 font-medium">Client:</span>
                  <span className="text-zinc-800 font-semibold text-right">{copy.client}</span>
                </div>
                <div className="flex justify-between items-baseline pb-1">
                  <span className="text-zinc-400 font-medium">Duration:</span>
                  <span className="text-zinc-800 font-semibold text-right">{copy.duration}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={project.url}
                  target={project.url !== "#" ? "_blank" : undefined}
                  rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-900 text-white text-[14px] font-semibold shadow-md transition-all duration-200 cursor-pointer text-center"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: In-depth details */}
          <section className="md:col-span-2 space-y-10 sm:space-y-12">
            {/* Intro paragraph */}
            <p className="text-zinc-700 text-lg sm:text-xl font-normal leading-relaxed">
              {copy.intro}
            </p>

            {/* In-depth details sections */}
            {[
              { heading: "Important", text: copy.important },
              { heading: "Approach", text: copy.approach },
              { heading: "Vision and Innovation", text: copy.vision },
              { heading: "Identifying Unique Challenges", text: copy.challenges },
              { heading: "Resolving Complex Problems", text: copy.resolving },
              { heading: "User-Centric Design", text: copy.userCentric },
              { heading: "Meeting User Needs", text: copy.needs }
            ].map((section, idx) => (
              <div key={idx} className="space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight">
                  {section.heading}
                </h3>
                <p className="text-zinc-500 text-[15px] sm:text-base leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </section>
        </div>

      </div>

      <FAQ />

      <Footer />
    </main>
  );
}
