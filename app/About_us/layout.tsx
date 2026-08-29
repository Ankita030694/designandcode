import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DesignNCode | UI/UX & Web Development Agency",
  description: "Meet DesignNCode, a creative digital agency delivering UI/UX design, web development, Shopify, e-commerce and digital product experiences.",
  keywords: ["UI/UX and web development agency", "About DesignNCode", "digital product experiences", "Shopify", "e-commerce", "web development agency"],
  alternates: {
    canonical: "https://designncode.com/About_us",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://designncode.com/About_us#webpage",
        "url": "https://designncode.com/About_us",
        "name": "About DesignNCode | UI/UX & Web Development Agency",
        "description": "Meet DesignNCode, a creative digital agency delivering UI/UX design, web development, Shopify, e-commerce and digital product experiences.",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://designncode.com/About_us#founder",
          "name": "Ankita Malik",
          "jobTitle": "Founder & Web Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "DesignNCode",
            "url": "https://designncode.com"
          },
          "sameAs": "https://designncode.com/About_us"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://designncode.com/About_us#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://designncode.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://designncode.com/About_us"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
