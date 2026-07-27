import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | DesignNCode",
  description: "Explore our recent projects and case studies showcasing our expertise in design, development, and marketing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
