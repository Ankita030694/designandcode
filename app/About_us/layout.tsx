import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DesignNCode",
  description: "Learn more about DesignNCode, a premium digital agency specializing in UI/UX design, web development, and performance marketing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
