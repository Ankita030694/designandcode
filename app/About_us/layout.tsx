import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DesignNCode | UI/UX & Web Development Agency",
  description: "Meet DesignNCode, a creative digital agency delivering UI/UX design, web development, Shopify, e-commerce and digital product experiences.",
  keywords: ["UI/UX and web development agency", "About DesignNCode", "digital product experiences", "Shopify", "e-commerce", "web development agency"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
