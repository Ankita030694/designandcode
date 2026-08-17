import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Agency | Web & Product Design | DesignNCode",
  description: "DesignNCode creates intuitive UI/UX designs for websites, mobile apps and digital products using research, strategy, prototyping and modern UI design.",
  keywords: ["UI/UX design agency", "Web & Product Design", "UI/UX Design", "prototyping", "mobile app design", "wireframing"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
