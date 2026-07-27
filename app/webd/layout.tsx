import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | DesignNCode",
  description: "Custom web development services building fast, scalable, and responsive applications tailored to your business needs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
