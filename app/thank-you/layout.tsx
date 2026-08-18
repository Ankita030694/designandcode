import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | DesignNCode",
  description: "Thank you for reaching out to DesignNCode. We have received your message and will get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
