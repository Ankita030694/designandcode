import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing Agency | Paid Growth | DesignNCode",
  description: "Drive measurable growth with performance marketing, paid advertising, conversion optimization, analytics and data-driven digital campaigns.",
  keywords: ["performance marketing agency", "Paid Growth", "paid advertising", "conversion optimization", "analytics", "digital campaigns"],
  alternates: {
    canonical: "https://designncode.com/marketing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
