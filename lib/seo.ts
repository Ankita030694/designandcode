import { Metadata } from 'next';

export interface CitySeoProps {
  service: string;
  serviceModifier?: string;
  city: string;
  slug: string;
  descriptionCore?: string;
  cta?: string;
  customTitle?: string;
  customDescription?: string;
  image?: string;
}

/**
 * Generates SEO-compliant metadata for service and city landing pages.
 * Ensures titles meet 50-60 character benchmarks and descriptions meet 150-160 character limits.
 */
export function constructCityMetadata({
  service,
  serviceModifier = "Product Systems",
  city,
  slug,
  descriptionCore = "",
  cta = "Book a consultation today.",
  customTitle,
  customDescription,
  image = `https://designncode.com/images/infographics/${slug.split('/').pop()}.jpg`,
}: CitySeoProps): Metadata {
  const title = customTitle || `${service} & ${serviceModifier} in ${city} | DesignNCode`;
  const description = customDescription || `${descriptionCore} ${cta}`.trim();
  const canonicalUrl = slug.startsWith('http') ? slug : `https://designncode.com/${slug.replace(/^\//, '')}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "DesignNCode",
      images: [
        {
          url: image,
          width: 1200,
          height: 675,
          alt: `${service} in ${city} Infographic Blueprint`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
