import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DesignNCode | Start Your Digital Project",
  description: "Have a website, product or e-commerce idea? Contact DesignNCode for UI/UX design, web development, Shopify and digital growth services.",
  keywords: ["contact web design agency", "Contact DesignNCode", "Start Your Digital Project", "UI/UX design", "web development", "Shopify"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
