export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  flag: string;
  bg: string;
  mockupAccent: string;
  image: string;
  projectType: "Shopify Store" | "Custom Code";
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "ama",
    title: "AMA",
    description: "An immersive wellness and lifestyle experience, designed for holistic health tracking and community connection.",
    tags: ["Web Design", "Wellness", "UI/UX"],
    flag: "🇺🇸",
    bg: "from-teal-500/10 via-emerald-400/5 to-teal-500/10",
    mockupAccent: "from-teal-400 to-emerald-400",
    image: "/project/AMA.svg",
    projectType: "Custom Code"
  },
  {
    slug: "adorna-casa",
    title: "Adorna Casa",
    description: "A luxury furniture and interior styling platform bringing curated European craftsmanship to global homes.",
    tags: ["E-Commerce", "Branding", "Minimalist UI"],
    flag: "🇮🇹",
    bg: "from-amber-500/10 via-orange-400/5 to-amber-500/10",
    mockupAccent: "from-amber-400 to-orange-400",
    image: "/project/Adorna_casa.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "aerolume",
    title: "Aerolume",
    description: "Next-generation smart lighting systems controlled via an intuitive, real-time dashboard.",
    tags: ["IoT Systems", "Dashboard", "UI/UX"],
    flag: "🇩🇪",
    bg: "from-blue-500/10 via-indigo-400/5 to-blue-500/10",
    mockupAccent: "from-blue-400 to-indigo-400",
    image: "/project/Aerolume.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "anyadha",
    title: "Anyadha",
    description: "A modern fashion boutique celebrating local heritage and artisanal textiles through e-commerce.",
    tags: ["E-Commerce", "Web Development", "UI/UX"],
    flag: "🇮🇳",
    bg: "from-purple-500/10 via-pink-400/5 to-purple-500/10",
    mockupAccent: "from-purple-400 to-pink-400",
    image: "/project/Anyadha.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "bloom",
    title: "Bloom",
    description: "A smart gardening and plant care tracker that makes indoor plant propagation effortless.",
    tags: ["Mobile First", "UI/UX", "Brand Design"],
    flag: "🇨🇦",
    bg: "from-green-500/10 via-emerald-400/5 to-green-500/10",
    mockupAccent: "from-green-400 to-emerald-400",
    image: "/project/Bloom.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "botai",
    title: "Botai",
    description: "An AI-powered conversation tool that helps businesses automate support and lead qualification.",
    tags: ["AI Systems", "SaaS Dashboard", "Development"],
    flag: "🇬🇧",
    bg: "from-cyan-500/10 via-sky-400/5 to-cyan-500/10",
    mockupAccent: "from-cyan-400 to-sky-400",
    image: "/project/Botai.svg",
    projectType: "Custom Code"
  },
  {
    slug: "bunt",
    title: "Bunt",
    description: "A vibrant creative portfolio space for contemporary artists and designers.",
    tags: ["Portfolio", "Art Direction", "Web Design"],
    flag: "🇫🇷",
    bg: "from-rose-500/10 via-fuchsia-400/5 to-rose-500/10",
    mockupAccent: "from-rose-400 to-fuchsia-400",
    image: "/project/Bunt.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "credsettle",
    title: "Credsettle",
    description: "A secure, transparent fintech platform streamlining enterprise debt settlement and compliance.",
    tags: ["Fintech", "Enterprise", "UI/UX"],
    flag: "🇺🇸",
    bg: "from-indigo-500/10 via-blue-400/5 to-indigo-500/10",
    mockupAccent: "from-indigo-400 to-blue-400",
    image: "/project/Credsettle.svg",
    projectType: "Custom Code"
  },
  {
    slug: "delhi-house",
    title: "Delhi House",
    description: "An interactive virtual tour and booking experience for high-end boutique hospitality.",
    tags: ["Hospitality", "Booking Engine", "Branding"],
    flag: "🇮🇳",
    bg: "from-amber-500/10 via-yellow-400/5 to-amber-500/10",
    mockupAccent: "from-amber-400 to-yellow-400",
    image: "/project/Delhi%20House.svg",
    projectType: "Custom Code"
  },
  {
    slug: "farzi-cafe",
    title: "Farzi Cafe",
    description: "A premium modern Indian bistro website with immersive menus and table reservations.",
    tags: ["Food & Beverage", "Interaction Design", "UI/UX"],
    flag: "🇦🇪",
    bg: "from-red-500/10 via-orange-400/5 to-red-500/10",
    mockupAccent: "from-red-400 to-orange-400",
    image: "/project/Farzi_Cafe.svg",
    projectType: "Custom Code"
  },
  {
    slug: "foire",
    title: "Foire",
    description: "An online marketplace showcasing artisan products and localized craft events.",
    tags: ["E-Commerce", "Web Development", "UI/UX"],
    flag: "🇧🇪",
    bg: "from-violet-500/10 via-purple-400/5 to-violet-500/10",
    mockupAccent: "from-violet-400 to-purple-400",
    image: "/project/Foire.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "honk",
    title: "HONK",
    description: "A modern ride-sharing and carpool tracking system with high precision maps.",
    tags: ["Mobility", "Mobile Design", "UI/UX"],
    flag: "🇸🇬",
    bg: "from-sky-500/10 via-blue-400/5 to-sky-500/10",
    mockupAccent: "from-sky-400 to-blue-400",
    image: "/project/HONK.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "kamal",
    title: "Kamal",
    description: "A luxury heritage jewelry store presenting intricately detailed items online.",
    tags: ["Luxury Retail", "E-Commerce", "Branding"],
    flag: "🇮🇳",
    bg: "from-yellow-500/10 via-amber-400/5 to-yellow-500/10",
    mockupAccent: "from-yellow-400 to-amber-400",
    image: "/project/Kamal.svg",
    projectType: "Custom Code"
  },
  {
    slug: "kitchun",
    title: "Kitchun",
    description: "A meal-planning and smart-pantry application designed to minimize food waste.",
    tags: ["SaaS", "Mobile First", "UI/UX"],
    flag: "🇦🇺",
    bg: "from-orange-500/10 via-red-400/5 to-orange-500/10",
    mockupAccent: "from-orange-400 to-red-400",
    image: "/project/Kitchun.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "mama-jama",
    title: "Mama Jama",
    description: "A fun, energetic music streaming app for indie musicians and curators.",
    tags: ["Entertainment", "Web App", "UI/UX"],
    flag: "🇯🇲",
    bg: "from-pink-500/10 via-rose-400/5 to-pink-500/10",
    mockupAccent: "from-pink-400 to-rose-400",
    image: "/project/Mama_jama.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "oud",
    title: "Oud",
    description: "A digital showcase for fine Arabian fragrances and interactive sensory branding.",
    tags: ["Branding", "Interactive UI", "Luxury"],
    flag: "🇸🇦",
    bg: "from-yellow-600/10 via-zinc-400/5 to-yellow-600/10",
    mockupAccent: "from-amber-600 to-zinc-600",
    image: "/project/Oud.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "rosete",
    title: "Rosete",
    description: "A high-fashion brand portal focused on editorial imagery and seamless checkout.",
    tags: ["E-Commerce", "Art Direction", "Web Design"],
    flag: "🇫🇷",
    bg: "from-rose-500/10 via-pink-400/5 to-rose-500/10",
    mockupAccent: "from-rose-400 to-pink-400",
    image: "/project/Rosete.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "sexsea",
    title: "Sexsea",
    description: "A premium marine excursions and private yacht charter booking platform.",
    tags: ["Travel & Leisure", "Web App", "UI/UX"],
    flag: "🇲🇨",
    bg: "from-cyan-500/10 via-teal-400/5 to-cyan-500/10",
    mockupAccent: "from-cyan-500 to-teal-400",
    image: "/project/Sexsea.svg",
    projectType: "Shopify Store"
  },
  {
    slug: "the-fat-cookie",
    title: "The Fat Cookie",
    description: "An artisanal bakery delivery app with real-time order tracking and customizable toppings.",
    tags: ["E-Commerce", "Interaction Design", "UI/UX"],
    flag: "🇬🇧",
    bg: "from-amber-500/10 via-orange-400/5 to-amber-500/10",
    mockupAccent: "from-amber-500 to-orange-500",
    image: "/project/The_fat_cookie.svg",
    projectType: "Shopify Store"
  }
];
