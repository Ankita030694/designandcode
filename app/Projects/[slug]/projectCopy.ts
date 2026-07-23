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
  // Stable duration assignment based on title character length
  const durations = ["3 weeks", "4 weeks", "5 weeks", "6 weeks"];
  const durationIndex = project.title.length % durations.length;
  const duration = durations[durationIndex];

  const category = project.tags[0] || "Web Design";
  const client = project.title;

  const intro = `${project.title} is a premier ${category.toLowerCase()} experience built to deliver a digital presence as refined as their services. It pairs a sleek, editorial aesthetic with high-performance engineering to provide a comprehensive, intuitive interface and fully scalable architecture right out of the box.`;

  const important = `Modern digital platforms don't just display information — they build credibility. ${project.title} is structured around that reality, guiding each visitor from curiosity to action using proof-led storytelling and a frictionless navigation path.`;

  const approach = `Rather than chasing transient trends, the layout follows natural user conversion behavior: a clear introduction, real success metrics, transparent process descriptions, and direct ways to engage. Every section is designed to keep users engaged and build momentum toward a transaction.`;

  const vision = `The goal was a customized digital home that reads like a premium brand, not a generic template. Typography-led layouts, generous grid alignment, and a minimalist color palette keep the client's identity front and center, while modern rendering ensures lightning-fast performance.`;

  const challenges = `Usually, digital experiences fall into one of two traps: templates that feel identical, or highly experimental sites that bury user actions and load slowly. ${project.title} had to look visually distinctive while remaining accessible and optimized for conversion.`;

  const resolving = `We resolved this challenge with a streamlined narrative structure — showcasing value, detailing the plan, proving the outcomes, and prompting action. Integrations are fully modular, so features can be scaled and modified easily as the client grows.`;

  const userCentric = `Every design decision started from the visitor's perspective — someone looking for professional solutions and immediate answers. Strategic breathing room, clear hierarchy, and smooth micro-interactions assure quality, while a singular primary action path removes all friction.`;

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
