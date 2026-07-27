import { Metadata, ResolvingMetadata } from "next";
import BlogDetailClient from "./BlogDetailClient";

export async function generateMetadata({ 
  params 
}: { 
  params: any 
}): Promise<Metadata> {
  // Use optional chaining or await depending on Next.js 14 vs 15 behavior
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const res = await fetch(`https://firestore.googleapis.com/v1/projects/designncode-c3380/databases/(default)/documents:runQuery`, {
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
      next: { revalidate: 3600 } 
    });

    const data = await res.json();

    if (!data || !data[0] || !data[0].document) {
      return { title: "Blog Not Found | DesignNCode" };
    }

    const docData = data[0].document.fields;
    const title = docData.title?.stringValue || "DesignNCode Blog";
    // Get the first 160 characters of the markdown content for the description
    const rawDesc = docData.description?.stringValue || "Read our latest blog post on DesignNCode.";
    const cleanDesc = rawDesc.replace(/[#*`_\[\]]/g, '').substring(0, 155) + "...";
    const imageUrl = docData.image?.stringValue;

    return {
      title: `${title} | DesignNCode`,
      description: cleanDesc,
      openGraph: {
        title: `${title} | DesignNCode`,
        description: cleanDesc,
        images: imageUrl ? [imageUrl] : [],
        type: 'article',
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | DesignNCode`,
        description: cleanDesc,
        images: imageUrl ? [imageUrl] : [],
      }
    };
  } catch (error) {
    console.error("Error generating metadata for blog:", error);
    return { title: "Blog | DesignNCode" };
  }
}

export default function BlogDetailPageServer() {
  return <BlogDetailClient />;
}
