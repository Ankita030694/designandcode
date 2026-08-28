import { Project } from "../../data/projects";

export interface ProjectDetailCopy {
  category: string;
  client: string;
  duration: string;
  intro: string;
  important: string;
  approach: string;
  vision: string;
  challenges: string;
  resolving: string;
  userCentric: string;
  needs: string;
}

export function getProjectCopy(project: Project): ProjectDetailCopy {
  if (project.slug === "trivora-jewels" || project.slug === "trivora") {
    return {
      category: "Fine Jewellery & Luxury E-Commerce",
      client: "Trivora Jewels",
      duration: "4 weeks",
      intro: "Trivora Jewels is a luxury fine jewellery brand celebrating timeless artistry, bespoke diamond creations, and exquisite gold craftsmanship. Built on Shopify with custom high-converting UX, the digital flagship delivers an opulent yet frictionless shopping journey.",
      important: "In luxury jewellery e-commerce, high-resolution visual storytelling, trust-building details, and effortless navigation are paramount. Trivora Jewels blends refined typography and elegant product showcases to inspire confidence and desire.",
      approach: "We designed a bespoke shopping experience centered around collection discovery, high-definition piece showcases, transparent certification details, and a streamlined mobile checkout flow that maximizes conversion.",
      vision: "To create an immersive digital boutique that mirrors the elegance of a high-end jewellery salon - marrying warm gold tones, clean editorial layouts, and silky smooth transitions.",
      challenges: "Balancing rich, high-resolution imagery and intricate jewellery details with lightning-fast load times and seamless Shopify app integrations for regional currencies and payments.",
      resolving: "Implemented custom theme optimizations, responsive image loading, interactive product zooms, and an intuitive filtering system allowing customers to effortlessly browse rings, necklaces, earrings, and bespoke collections.",
      userCentric: "Every interaction is calibrated for luxury buyers - from detailed craftsmanship highlights and metal purity indicators to one-click concierge assistance and smooth checkout.",
      needs: "The customized Shopify architecture provides Trivora Jewels with complete catalog scalability, inventory syncing, and high-speed performance across all mobile and desktop devices.",
    };
  }

  if (project.slug === "honk") {
    return {
      category: "Mobility & Smart Ride-Sharing",
      client: "HONK",
      duration: "4 weeks",
      intro: "HONK is an on-demand mobility platform engineered for real-time ride-sharing and route intelligence.",
      important: "Modern transit applications require crystal-clear mapping, effortless ride scheduling, and real-time telemetry that drivers and commuters can trust instantly.",
      approach: "We architected an ultra-responsive UI/UX interface focusing on instant route booking, dynamic fare calculation, and intuitive driver-passenger communications.",
      vision: "To provide a modern, friction-free urban commuting experience with clean vector map visualizations and high-speed location tracking.",
      challenges: "Delivering instantaneous geo-tracking and multi-stop route calculations on mobile devices with zero lag.",
      resolving: "Optimized interface rendering with lightweight vector assets, intuitive step-by-step dispatch flows, and proactive ride status alerts.",
      userCentric: "Clean iconography, high-contrast ride options, and one-tap destination presets remove friction for everyday commuters.",
      needs: "A resilient frontend architecture ready to scale across international transit hubs with diverse regional requirements.",
    };
  }

  if (project.slug === "herstories") {
    return {
      category: "Women's Wellness & Nutritional Science",
      client: "Her Stories",
      duration: "4 weeks",
      intro: "Her Stories is an intentional women's wellness brand offering science-backed, all-in-one nutritional supplements designed to help women live in alignment with who they want to be through quiet and consistent daily rituals.",
      important: "In wellness and nutritional supplements, consumer trust, scientific transparency, and ingredient integrity are paramount. Her Stories blends clinical efficacy with soothing minimalism to foster sustainable daily wellness habits.",
      approach: "We designed a conversion-driven digital flagship highlighting clinical benefits, active ingredient breakdowns, flexible recurring subscriptions, and genuine customer progress stories.",
      vision: "To create an empowering digital sanctuary that simplifies women's daily health regimens through calming aesthetics, clean typography, and a seamless shopping journey.",
      challenges: "Translating comprehensive nutritional formulas and health benefits into easily digestible visual guides while maintaining lightning-fast mobile performance and friction-free subscription checkouts.",
      resolving: "Implemented interactive ingredient spotlights, routine builders, customer progress testimonials, and an intuitive 1-click subscription checkout powered by custom Shopify integrations.",
      userCentric: "Every interaction is calibrated for the customer's wellness journey - featuring clear dosage guidance, holistic routine recommendations, and transparent ingredient sourcing.",
      needs: "A robust, high-speed Shopify architecture built for scalable recurring subscription management, customer accounts, and rapid product catalog expansions.",
    };
  }

  if (project.slug === "gods") {
    return {
      category: "Spiritual Décor & Luxury Divine Collectibles",
      client: "Gods by D'mart",
      duration: "5 weeks",
      intro: "Gods by D'mart is a luxury brand offering handcrafted divine idols, premium spiritual home décor, and exquisite brass, marble, and sterling silver masterpieces crafted with exceptional artisan mastery.",
      important: "Divine collectibles demand reverence, immaculate visual fidelity, and unwavering confidence in material authenticity and craftsmanship. Gods by D'mart captures the essence of sacred heritage in a refined modern digital experience.",
      approach: "We architected an opulent digital gallery emphasizing ultra-high-definition artifact showcases, artisan provenance storytelling, material purity certifications, and bespoke luxury gifting experiences.",
      vision: "To craft a sublime online destination celebrating sacred art and heirloom craftsmanship through warm golden accents, rich ambient textures, and effortless navigation.",
      challenges: "Capturing the intricate sculptural textures and metallic finishes of brass, silver, and marble idols while guaranteeing instant mobile loading and secure high-value transactions.",
      resolving: "Engineered high-performance image zoom inspection, authenticity certificate badges, curated festive/housewarming gifting funnels, and personalized concierge checkout.",
      userCentric: "Designed thoughtfully for collectors and sacred gift-givers - offering occasion-based curation, detailed dimension charts, and secure insured transit options.",
      needs: "A scalable, high-converting Shopify store designed to support high-ticket catalog items, bespoke gifting inquiries, and international shipping requirements.",
    };
  }

  // Stable duration assignment based on title character length
  const durations = ["3 weeks", "4 weeks", "5 weeks", "6 weeks"];
  const durationIndex = project.title.length % durations.length;
  const duration = durations[durationIndex];

  const category = project.tags[0] || "Web Design";
  const client = project.title;

  const intro = `${project.title} is a premier ${category.toLowerCase()} experience built to deliver a digital presence as refined as their services. It pairs a sleek, editorial aesthetic with high-performance engineering to provide a comprehensive, intuitive interface and fully scalable architecture right out of the box.`;

  const important = `Modern digital platforms don't just display information - they build credibility. ${project.title} is structured around that reality, guiding each visitor from curiosity to action using proof-led storytelling and a frictionless navigation path.`;

  const approach = `Rather than chasing transient trends, the layout follows natural user conversion behavior: a clear introduction, real success metrics, transparent process descriptions, and direct ways to engage. Every section is designed to keep users engaged and build momentum toward a transaction.`;

  const vision = `The goal was a customized digital home that reads like a premium brand, not a generic template. Typography-led layouts, generous grid alignment, and a minimalist color palette keep the client's identity front and center, while modern rendering ensures lightning-fast performance.`;

  const challenges = `Usually, digital experiences fall into one of two traps: templates that feel identical, or highly experimental sites that bury user actions and load slowly. ${project.title} had to look visually distinctive while remaining accessible and optimized for conversion.`;

  const resolving = `We resolved this challenge with a streamlined narrative structure - showcasing value, detailing the plan, proving the outcomes, and prompting action. Integrations are fully modular, so features can be scaled and modified easily as the client grows.`;

  const userCentric = `Every design decision started from the visitor's perspective - someone looking for professional solutions and immediate answers. Strategic breathing room, clear hierarchy, and smooth micro-interactions assure quality, while a singular primary action path removes all friction.`;

  const needs = `By implementing a lightweight headless system, we created a platform that is extremely fast on mobile and desktop alike. The user has direct access to key information, making self-service intuitive and ensuring they can connect with ${project.title} effortlessly.`;

  return {
    category,
    client,
    duration,
    intro,
    important,
    approach,
    vision,
    challenges,
    resolving,
    userCentric,
    needs,
  };
}
