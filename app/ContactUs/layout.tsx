import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | DesignNCode",
  description: "Get in touch with DesignNCode. We are ready to help you transform your ideas into digital reality.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
