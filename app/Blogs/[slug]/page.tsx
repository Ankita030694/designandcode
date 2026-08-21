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
    return {
      title: `${pageData.title} | DesignNCode`,
      description: pageData.subtitle,
      openGraph: {
        title: `${pageData.title} | DesignNCode`,
        description: pageData.subtitle,
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

      return {
        title: `${title} | DesignNCode`,
        description: cleanDesc,
        openGraph: {
          title: `${title} | DesignNCode`,
          description: cleanDesc,
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
  };
}

export default function BlogDetailPage() {
  return <BlogDetailClient />;
}

