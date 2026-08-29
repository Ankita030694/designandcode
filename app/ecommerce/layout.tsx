import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency | E-commerce | DesignNCode",
  description: "DesignNCode builds high-converting Shopify stores with custom themes, responsive design, integrations and optimized e-commerce experiences.",
  keywords: ["Shopify development agency", "Shopify", "E-commerce", "custom themes", "e-commerce store development", "Shopify store setup"],
  alternates: {
    canonical: "https://designncode.com/ecommerce",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
