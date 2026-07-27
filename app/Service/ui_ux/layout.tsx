import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | DesignNCode",
  description: "Premium UI/UX design services to craft intuitive, engaging, and beautiful digital experiences for your users.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
