import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Agency | React & Next.js | DesignNCode",
  description: "Build fast, responsive and scalable websites with DesignNCode using modern web development technologies including React and Next.js.",
  keywords: ["web development agency", "React", "Next.js", "frontend development", "full stack web development", "responsive websites"],
  alternates: {
    canonical: "https://designncode.com/Service/web_dev",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
