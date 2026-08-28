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
  url: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "ama",
    title: "AMA Legal Solutions",
    description: "A leading corporate and commercial law firm providing high-end legal counsel and cross-border solutions.",
    tags: ["Legal Services", "Corporate Law", "Custom Code"],
    flag: "🇺🇸",
    bg: "from-teal-500/10 via-emerald-400/5 to-teal-500/10",
    mockupAccent: "from-teal-400 to-emerald-400",
    image: "/project/AMA.webp",
    projectType: "Custom Code",
    url: "https://www.amalegalsolutions.com/"
  },
  {
    slug: "adorna-casa",
    title: "Adorna Casa",
    description: "A premium luxury home decor and bespoke furnishing brand offering curated fabrics, wallpapers, and upholstery.",
    tags: ["Luxury Retail", "Interior Design", "E-Commerce"],
    flag: "🇮🇹",
    bg: "from-amber-500/10 via-orange-400/5 to-amber-500/10",
    mockupAccent: "from-amber-400 to-orange-400",
    image: "/project/Adorna_casa.webp",
    projectType: "Shopify Store",
    url: "https://adornocasa.com/"
  },
  {
    slug: "aerolume",
    title: "Aerolume",
    description: "High-end smart lighting solutions and architectural lighting fixtures for premium commercial and residential spaces.",
    tags: ["Architectural Lighting", "IoT Systems", "Shopify Store"],
    flag: "🇩🇪",
    bg: "from-blue-500/10 via-indigo-400/5 to-blue-500/10",
    mockupAccent: "from-blue-400 to-indigo-400",
    image: "/project/Aerolume.webp",
    projectType: "Shopify Store",
    url: "https://aerolume.in/"
  },
  {
    slug: "anyadha",
    title: "Anyadha",
    description: "An ethnic luxury Indian handloom and boutique fashion store celebrating traditional craftsmanship and designs.",
    tags: ["Indian Handloom", "Ethnic Wear", "E-Commerce"],
    flag: "🇮🇳",
    bg: "from-purple-500/10 via-pink-400/5 to-purple-500/10",
    mockupAccent: "from-purple-400 to-pink-400",
    image: "/project/Anyadha.webp",
    projectType: "Shopify Store",
    url: "https://anyadha.in/"
  },
  {
    slug: "bloom",
    title: "Bloom Cafes",
    description: "An artisanal specialty coffee roastery and cafe brand offering premium blends and gourmet bakery items.",
    tags: ["Specialty Coffee", "Artisanal Cafe", "Shopify Store"],
    flag: "🇨🇦",
    bg: "from-green-500/10 via-emerald-400/5 to-green-500/10",
    mockupAccent: "from-green-400 to-emerald-400",
    image: "/project/Bloom.webp",
    projectType: "Shopify Store",
    url: "https://bloomcafes.com/"
  },
  {
    slug: "botai",
    title: "Bo-Tai",
    description: "An award-winning modern Thai and Chinese fine dining restaurant and high-energy bar concept.",
    tags: ["Fine Dining", "Hospitality", "Custom Code"],
    flag: "🇬🇧",
    bg: "from-cyan-500/10 via-sky-400/5 to-cyan-500/10",
    mockupAccent: "from-cyan-400 to-sky-400",
    image: "/project/Botai.webp",
    projectType: "Custom Code",
    url: "https://www.bo-tai.co.in/"
  },
  {
    slug: "bunt",
    title: "Bunt India",
    description: "An exclusive haute couture fashion brand presenting traditional Indian craftsmanship with modern silhouettes.",
    tags: ["Haute Couture", "Luxury Fashion", "E-Commerce"],
    flag: "🇫🇷",
    bg: "from-rose-500/10 via-fuchsia-400/5 to-rose-500/10",
    mockupAccent: "from-rose-400 to-fuchsia-400",
    image: "/project/Bunt.webp",
    projectType: "Shopify Store",
    url: "https://buntindia.com/"
  },
  {
    slug: "credsettle",
    title: "Credsettle",
    description: "A secure, automated fintech platform simplifying enterprise debt settlement, legal compliance, and payments.",
    tags: ["Fintech", "Debt Settlement", "Custom Code"],
    flag: "🇺🇸",
    bg: "from-indigo-500/10 via-blue-400/5 to-indigo-500/10",
    mockupAccent: "from-indigo-400 to-blue-400",
    image: "/project/Credsettle.webp",
    projectType: "Custom Code",
    url: "https://www.credsettle.com/"
  },
  {
    slug: "delhi-house",
    title: "Delhi House Cafe",
    description: "A premier contemporary Indian restaurant and culinary destination offering gourmet street food and authentic meals.",
    tags: ["Contemporary Dining", "Food & Beverage", "Custom Code"],
    flag: "🇮🇳",
    bg: "from-amber-500/10 via-yellow-400/5 to-amber-500/10",
    mockupAccent: "from-amber-400 to-yellow-400",
    image: "/project/Delhi House.webp",
    projectType: "Custom Code",
    url: "https://www.delhihousecafe.com/"
  },
  {
    slug: "farzi-cafe",
    title: "Farzi Cafe",
    description: "An acclaimed modern Indian bistro utilizing molecular gastronomy and innovative presentations.",
    tags: ["Molecular Gastronomy", "Modern Bistro", "Custom Code"],
    flag: "🇦🇪",
    bg: "from-red-500/10 via-orange-400/5 to-red-500/10",
    mockupAccent: "from-red-400 to-orange-400",
    image: "/project/Farzi_Cafe.webp",
    projectType: "Custom Code",
    url: "https://www.farzicafe.com/"
  },
  {
    slug: "foire",
    title: "Foire",
    description: "A boutique artisanal food and gourmet condiments brand providing hand-crafted jams, spreads, and snacks.",
    tags: ["Gourmet Food", "Artisanal Condiments", "Shopify Store"],
    flag: "🇧🇪",
    bg: "from-violet-500/10 via-purple-400/5 to-violet-500/10",
    mockupAccent: "from-violet-400 to-purple-400",
    image: "/project/Foire.webp",
    projectType: "Shopify Store",
    url: "https://foire.in/"
  },
  {
    slug: "honk",
    title: "HONK",
    description: "A modern ride-sharing and carpool tracking system with high precision maps.",
    tags: ["Mobility", "Mobile Design", "UI/UX"],
    flag: "🇸🇬",
    bg: "from-sky-500/10 via-blue-400/5 to-sky-500/10",
    mockupAccent: "from-sky-400 to-blue-400",
    image: "/project/HONK.webp",
    projectType: "Shopify Store",
    url: "#"
  },
  {
    slug: "kamal",
    title: "Kamal Motors",
    description: "One of India's leading authorized dealerships for commercial vehicles, logistics solutions, and passenger cars.",
    tags: ["Automotive Dealership", "Commercial Vehicles", "Custom Code"],
    flag: "🇮🇳",
    bg: "from-yellow-500/10 via-amber-400/5 to-yellow-500/10",
    mockupAccent: "from-yellow-400 to-amber-400",
    image: "/project/Kamal.webp",
    projectType: "Custom Code",
    url: "https://kamalmotors.in/"
  },
  {
    slug: "kitchun",
    title: "Kitchun",
    description: "A meal-planning and smart-pantry application designed to minimize food waste.",
    tags: ["SaaS", "Mobile First", "UI/UX"],
    flag: "🇦🇺",
    bg: "from-orange-500/10 via-red-400/5 to-orange-500/10",
    mockupAccent: "from-orange-400 to-red-400",
    image: "/project/Kitchun.webp",
    projectType: "Shopify Store",
    url: "#"
  },
  {
    slug: "mama-jama",
    title: "Mama Jama",
    description: "A premium youth culture and modern streetwear fashion brand offering contemporary urban apparel.",
    tags: ["Streetwear", "Urban Fashion", "Shopify Store"],
    flag: "🇯🇲",
    bg: "from-pink-500/10 via-rose-400/5 to-pink-500/10",
    mockupAccent: "from-pink-400 to-rose-400",
    image: "/project/Mama_jama.webp",
    projectType: "Shopify Store",
    url: "https://mamajama.in/"
  },
  {
    slug: "oudqua",
    title: "Oudqua",
    description: "A luxury niche perfume house specializing in authentic Arabian Oud, fine fragrances, and home diffusers.",
    tags: ["Niche Fragrances", "Arabian Oud", "Shopify Store"],
    flag: "🇸🇦",
    bg: "from-yellow-600/10 via-zinc-400/5 to-yellow-600/10",
    mockupAccent: "from-amber-600 to-zinc-600",
    image: "/project/Oud.webp",
    projectType: "Shopify Store",
    url: "https://theoudqua.com/"
  },
  {
    slug: "rosete",
    title: "Rosete",
    description: "A high-fashion brand portal focused on editorial imagery and seamless checkout.",
    tags: ["E-Commerce", "Art Direction", "Web Design"],
    flag: "🇫🇷",
    bg: "from-rose-500/10 via-pink-400/5 to-rose-500/10",
    mockupAccent: "from-rose-400 to-pink-400",
    image: "/project/Rosete.webp",
    projectType: "Shopify Store",
    url: "#"
  },
  {
    slug: "sexsea",
    title: "Sexsea",
    description: "A premium yacht rental and private sea cruise booking experience for luxury marine travel.",
    tags: ["Yacht Charters", "Luxury Travel", "Shopify Store"],
    flag: "🇲🇨",
    bg: "from-cyan-500/10 via-teal-400/5 to-cyan-500/10",
    mockupAccent: "from-cyan-500 to-teal-400",
    image: "/project/Sexsea.webp",
    projectType: "Shopify Store",
    url: "https://sexsea.in/"
  },
  {
    slug: "the-fat-cookie",
    title: "The Fat Cookie",
    description: "An artisanal gourmet bakery specializing in giant, freshly-baked cookies and premium sweet treats.",
    tags: ["Gourmet Bakery", "Artisanal Cookies", "Shopify Store"],
    flag: "🇬🇧",
    bg: "from-amber-500/10 via-orange-400/5 to-amber-500/10",
    mockupAccent: "from-amber-500 to-orange-500",
    image: "/project/The_fat_cookie.webp",
    projectType: "Shopify Store",
    url: "https://thefatcookiechef.com/"
  },
  {
    slug: "trivora-jewels",
    title: "Trivora Jewels",
    description: "A luxury fine jewellery brand offering handcrafted gold, diamond, and bespoke artisanal jewelry collections.",
    tags: ["Fine Jewellery", "Luxury E-Commerce", "Shopify Store"],
    flag: "🇮🇳",
    bg: "from-amber-600/10 via-yellow-500/5 to-amber-600/10",
    mockupAccent: "from-amber-500 to-yellow-400",
    image: "/Trivaro.webp",
    projectType: "Shopify Store",
    url: "https://trivorajewels.com/"
  },
  {
    slug: "saladlife",
    title: "Salad Life",
    description: "A healthy dining and subscription brand delivering farm-fresh gourmet salads, cold-pressed juices, and nutritious meals.",
    tags: ["Healthy Dining", "Gourmet Salads", "Custom Code"],
    flag: "🇮🇳",
    bg: "from-emerald-500/10 via-green-400/5 to-emerald-500/10",
    mockupAccent: "from-emerald-400 to-green-400",
    image: "/Saladlife.jpg",
    projectType: "Custom Code",
    url: "https://saladlife.in/"
  },
  {
    slug: "herstories",
    title: "Her Stories",
    description: "A science-backed women's wellness and intentional nutrition brand creating all-in-one daily supplements for holistic vitality.",
    tags: ["Women's Wellness", "Daily Supplements", "Shopify Store"],
    flag: "🇮🇳",
    bg: "from-rose-500/10 via-pink-400/5 to-rose-500/10",
    mockupAccent: "from-rose-400 to-pink-400",
    image: "/HerStories.jpg",
    projectType: "Shopify Store",
    url: "https://herstories.co/"
  },
  {
    slug: "gods",
    title: "Gods by D'mart",
    description: "A luxury spiritual brand offering handcrafted divine idols, premium home décor, and bespoke brass and silver collectible masterpieces.",
    tags: ["Spiritual Décor", "Divine Collectibles", "Shopify Store"],
    flag: "🇮🇳",
    bg: "from-amber-600/10 via-yellow-500/5 to-amber-600/10",
    mockupAccent: "from-amber-500 to-yellow-400",
    image: "/gods.jpg",
    projectType: "Shopify Store",
    url: "https://godsbydmart.com/"
  },
  {
    slug: "deja-brew",
    title: "Deja Brew",
    description: "A premier artisanal craft brewery, coffee roastery, and dining destination offering bespoke brews and curated culinary experiences.",
    tags: ["Craft Brewery", "Cafe & Dining", "Custom Code"],
    flag: "🇮🇳",
    bg: "from-amber-600/10 via-yellow-500/5 to-amber-600/10",
    mockupAccent: "from-amber-500 to-yellow-500",
    image: "/deja.jpg",
    projectType: "Custom Code",
    url: "https://www.dejabrew.co.in/"
  }
];
