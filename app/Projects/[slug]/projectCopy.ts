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
