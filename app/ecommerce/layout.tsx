import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Services | DesignNCode",
  description: "High-converting custom Shopify & e-commerce stores designed for seamless user checkout and rapid sales scaling.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
