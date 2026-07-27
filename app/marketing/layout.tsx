import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing | DesignNCode",
  description: "Data-driven performance marketing strategies to boost your ROI, generate high-quality leads, and scale your brand.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
