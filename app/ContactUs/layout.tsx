import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DesignNCode | Start Your Digital Project",
  description: "Have a website, product or e-commerce idea? Contact DesignNCode for UI/UX design, web development, Shopify and digital growth services.",
  keywords: ["contact web design agency", "Contact DesignNCode", "Start Your Digital Project", "UI/UX design", "web development", "Shopify"],
  alternates: {
    canonical: "https://designncode.com/ContactUs",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://designncode.com/ContactUs#webpage",
        "url": "https://designncode.com/ContactUs",
        "name": "Contact DesignNCode | Start Your Digital Project",
        "description": "Have a website, product or e-commerce idea? Contact DesignNCode for UI/UX design, web development, Shopify and digital growth services.",
        "mainEntity": {
          "@type": "Organization",
          "name": "DesignNCode",
          "url": "https://designncode.com",
          "telephone": "+91 92207 21921",
          "email": "info@designncode.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 92207 21921",
            "contactType": "sales & inquiries",
            "email": "info@designncode.com",
            "availableLanguage": ["en"]
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://designncode.com/ContactUs#breadcrumb",
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
            "name": "Contact Us",
            "item": "https://designncode.com/ContactUs"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
