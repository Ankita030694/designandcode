import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Blogs | DesignNCode",
  description: "Read our latest articles, guides, and insights on UI/UX, web development, and performance marketing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
