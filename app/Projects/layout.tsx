import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | UI/UX, Web Design & Development Projects",
  description: "Explore DesignNCode projects across UI/UX design, websites, Shopify, e-commerce and digital products created for ambitious businesses and brands.",
  keywords: ["UI/UX and web design projects", "Our Work", "web development projects", "Shopify projects", "case studies", "portfolio"],
  alternates: {
    canonical: "https://designncode.com/Projects",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
