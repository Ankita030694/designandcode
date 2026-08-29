import { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";
import { SERVICE_PAGES_DATA } from "../../Explore_Slug";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "";

  if (SERVICE_PAGES_DATA[slug]) {
    const pageData = SERVICE_PAGES_DATA[slug];
    const canonicalUrl = `https://designncode.com/Blogs/${slug}`;
    return {
      title: `${pageData.title} | DesignNCode`,
      description: pageData.subtitle,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${pageData.title} | DesignNCode`,
        description: pageData.subtitle,
        url: canonicalUrl,
        images: pageData.image ? [pageData.image] : [],
        type: 'article',
      },
      twitter: {
        card: "summary_large_image",
        title: `${pageData.title} | DesignNCode`,
        description: pageData.subtitle,
        images: pageData.image ? [pageData.image] : [],
      }
    };
  }

  if (slug === "web-development-and-ui-ux-design-for-enterprise-scale") {
    const canonicalUrl = `https://designncode.com/Blogs/web-development-and-ui-ux-design-for-enterprise-scale`;
    return {
      title: "Web Development & UI/UX Design for Enterprise Scale | DesignNCode",
      description: "A comprehensive guide on composable architecture, design systems, Core Web Vitals, and headless development for enterprise scale.",
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: "Web Development & UI/UX Design for Enterprise Scale | DesignNCode",
        description: "A comprehensive guide on composable architecture, design systems, Core Web Vitals, and headless development for enterprise scale.",
        url: canonicalUrl,
        images: ["/Web.svg"],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: "Web Development & UI/UX Design for Enterprise Scale | DesignNCode",
        description: "A comprehensive guide on composable architecture, design systems, Core Web Vitals, and headless development for enterprise scale.",
        images: ["/Web.svg"],
      },
    };
  }

  try {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug || "";

    const res = await fetch(
      `https://firestore.googleapis.com/v1/projects/designncode-c3380/databases/(default)/documents:runQuery`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          structuredQuery: {
            from: [{ collectionId: "blogs" }],
            where: {
              fieldFilter: {
                field: { fieldPath: "slug" },
                op: "EQUAL",
                value: { stringValue: slug },
              },
            },
            limit: 1,
          },
        }),
        next: { revalidate: 3600 },
      }
    );

    const data = await res.json();
    if (data && data[0] && data[0].document && data[0].document.fields) {
      const docData = data[0].document.fields;
      const title = docData.title?.stringValue || "DesignNCode Blog";
      const rawDesc = docData.metaDescription?.stringValue || docData.subtitle?.stringValue || docData.description?.stringValue || "Read our latest blog post on DesignNCode.";
      const cleanDesc = rawDesc.replace(/<[^>]*>?/gm, "").substring(0, 160).trim();
      const imageUrl = docData.image?.stringValue || "/Web.svg";
      const canonicalUrl = `https://designncode.com/Blogs/${slug}`;

      return {
        title: `${title} | DesignNCode`,
        description: cleanDesc,
        alternates: {
          canonical: canonicalUrl,
        },
        openGraph: {
          title: `${title} | DesignNCode`,
          description: cleanDesc,
          url: canonicalUrl,
          images: [imageUrl],
          type: "article",
        },
        twitter: {
          card: "summary_large_image",
          title: `${title} | DesignNCode`,
          description: cleanDesc,
          images: [imageUrl],
        },
      };
    }
  } catch (error) {
    // Graceful fallback
  }

  return {
    title: "Blog | DesignNCode",
    description: "Read the latest engineering and design insights from DesignNCode.",
    alternates: {
      canonical: `https://designncode.com/Blogs/${slug}`,
    },
  };
}

export default function BlogDetailPage() {
  return <BlogDetailClient />;
}

