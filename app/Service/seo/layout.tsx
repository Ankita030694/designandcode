import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services & Organic Growth Agency | DesignNCode",
  description: "Improve search visibility with technical SEO, keyword strategy, on-page optimization, content architecture and performance-focused SEO services.",
  keywords: ["SEO services", "Organic Growth Agency", "technical SEO", "keyword strategy", "on-page optimization", "content architecture"],
  alternates: {
    canonical: "https://designncode.com/Service/seo",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
