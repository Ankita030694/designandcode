export interface BlogDetail {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  contentType: string;
  topic: string;
  tag: string;
  date: string;
  duration: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
  };
  image: string;
  content: {
    introduction: string;
    sections: {
      heading?: string;
      paragraphs: string[];
    }[];
    conclusion: string;
  };
}

export const BLOGS_DETAILS: Record<string, BlogDetail> = {
  "2": {
    id: "2",
    title: "The Architectural Guide to Composable Web Applications",
    subtitle: "A modern guide to modular web engineering.",
    description: "Discover how to build highly scalable, decoupled web applications using Next.js and headless CMS solutions. We break down step-by-step modular designs that scale seamlessly.",
    contentType: "Guides",
    topic: "Composability",
    tag: "Guide",
    date: "2026-07-12",
    duration: "12 min read",
    author: {
      name: "Sarah Lin",
      avatar: "/Client_Logo/wp.svg",
      role: "Lead Systems Architect, Designncode",
      bio: "Sarah Lin is the Lead Systems Architect at Designncode, specializing in headless commerce integrations and server-side optimization paradigms."
    },
    image: "/Web.svg",
    content: {
      introduction: "Composable web applications leverage independent, modular APIs and modern frameworks to provide infinite flexibility and scalability. In this guide, we discuss how to build decoupled Next.js systems.",
      sections: [
        {
          heading: "What is Composable Architecture?",
          paragraphs: [
            "Composable architecture is a development philosophy where systems are built from modular components rather than as a single, monolithic block. Each component - be it content, authentication, or checkout - is selected for its specific strengths.",
            "These independent modules communicate via standardized APIs, allowing developers to upgrade, modify, or replace components without affecting the rest of the application ecosystem."
          ]
        },
        {
          heading: "The Modular Next.js Stack",
          paragraphs: [
            "Using Next.js App Router as the presentation layer provides standard server-side rendering, client hydration, and layout optimization out of the box.",
            "Content can be managed in a headless CMS (like Contentful or Sanity), ecommerce logic via a commerce engine, and global deployment managed smoothly at the edge on platforms like Vercel."
          ]
        }
      ],
      conclusion: "Embracing composable systems helps reduce technical debt, increases page loading speeds, and ensures your team can deploy new client experiences at a much faster pace."
    }
  },
  "3": {
    id: "3",
    title: "Bringing Your Users Into Focus: Web Analytics Redefined",
    subtitle: "Setting up lightweight, respectful telemetry.",
    description: "A deep dive into setting up custom telemetry that respects user privacy while delivering actionable insights. Learn how to track Core Web Vitals and user navigation flows without performance drag.",
    contentType: "Fundamentals",
    topic: "Data & Analytics",
    tag: "Article",
    date: "2026-07-08",
    duration: "8 min read",
    author: {
      name: "Alex Rivera",
      avatar: "/Client_Logo/wp.svg",
      role: "Data Engineering Specialist",
      bio: "Alex Rivera manages telemetry systems and client analytics pipelines, designing privacy-first logging schemas that retain high operational utility."
    },
    image: "/Data.svg",
    content: {
      introduction: "Analytics are critical for refining UI design, but traditional trackers degrade site speed and compromise privacy. Learn how to configure custom, lightweight telemetry that prioritizes user metrics.",
      sections: [
        {
          heading: "Tracking Core Web Vitals in Real Time",
          paragraphs: [
            "Instead of capturing every drag or click, focus your analytics pipeline on performance milestones: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
            "Next.js provides native hooks to easily capture these values and dispatch them to custom telemetry API endpoints, helping pinpoint slow layouts instantly."
          ]
        },
        {
          heading: "Respectful and Anonymous Telemetry",
          paragraphs: [
            "Modern users demand privacy. By anonymizing IP addresses and using event-driven schemas rather than persistent cookies, you can gather crucial optimization data without compromising user data standards."
          ]
        }
      ],
      conclusion: "Web analytics don't need to be invasive to be useful. Focus on page performance metrics, streamline your event pipeline, and build trust through transparent telemetry."
    }
  },
  "4": {
    id: "4",
    title: "The Future of Minimalist UI: Design Trends to Watch in 2026",
    subtitle: "Depth, glassmorphism, and micro-animations.",
    description: "Exploring glassmorphism, responsive micro-interactions, dark mode optimizations, and cohesive design token architectures in modern enterprise web applications.",
    contentType: "Insights",
    topic: "Design",
    tag: "Article",
    date: "2026-07-02",
    duration: "10 min read",
    author: {
      name: "Elena Rostova",
      avatar: "/Client_Logo/wp.svg",
      role: "Senior UI/UX Designer",
      bio: "Elena Rostova is a Senior UI/UX Designer at Designncode, focused on modern aesthetics, typography, and motion design frameworks."
    },
    image: "/Design.svg",
    content: {
      introduction: "Minimalism is changing. We are shifting away from plain, flat visuals toward high-fidelity interfaces that leverage glassmorphism, depth layers, and custom interactive tokens.",
      sections: [
        {
          heading: "The Rise of Glassmorphism and Depth",
          paragraphs: [
            "Modern minimalism uses subtle glassmorphic blurs and fine border outlines to construct logical sections on a page. This creates a clean hierarchy without requiring solid background blocks.",
            "By layering translucent components over soft background glows, interfaces feel deeper, more dimensional, and visually responsive."
          ]
        },
        {
          heading: "Responsive Micro-Interactions",
          paragraphs: [
            "Cohesive systems rely on micro-animations to communicate input states. Tiny button highlights, active nav transformations, and smooth content transitions guide the user through navigation tasks seamlessly."
          ]
        }
      ],
      conclusion: "Minimalism is not about putting fewer elements on a page - it is about ensuring every detail is purposeful, from spacing variables to color gradients."
    }
  },
  "5": {
    id: "5",
    title: "Optimizing Next.js App Router for Core Web Vitals",
    subtitle: "A checklist to achieve a 100% Lighthouse rating.",
    description: "A comprehensive checklist to achieve perfect Lighthouse scores. We cover React Server Components, client-side hydration optimizations, font display, and edge routing strategies.",
    contentType: "Guides",
    topic: "Development",
    tag: "Technical Guide",
    date: "2026-06-28",
    duration: "15 min read",
    author: {
      name: "Marcus Chen",
      avatar: "/Client_Logo/wp.svg",
      role: "Principal Developer, Designncode",
      bio: "Marcus Chen is the Principal Developer at Designncode, specialized in Next.js core setups, caching, and infrastructure scale solutions."
    },
    image: "/5.svg",
    content: {
      introduction: "Achieving perfect Lighthouse scores with Next.js App Router requires deep knowledge of React Server Components, image loading, and font rendering. Let's look at the absolute best practices.",
      sections: [
        {
          heading: "Maximizing React Server Components (RSC)",
          paragraphs: [
            "Keep client-side JavaScript bundles to an absolute minimum by default. Server Components let you fetch data and render markup directly on the server, leaving only interactive components as client components.",
            "This structure minimizes the volume of JavaScript that the browser needs to parse and download, speeding up site responsiveness."
          ]
        },
        {
          heading: "Asset Loading and Layout Shifts",
          paragraphs: [
            "Layout shifts are often caused by un-dimensioned images. Always define precise height and width, or use responsive filling strategies to ensure the browser reserves correct viewport spaces during initial render."
          ]
        }
      ],
      conclusion: "Optimizing Web Vitals is a continuous process. Keep your server responses fast, bundle weights light, and utilize Edge configuration caching to serve pages closer to your users."
    }
  },
  "6": {
    id: "6",
    title: "Scaling Headless Shopify Frontends to 10M+ Monthly Visits",
    subtitle: "How modular design helps e-commerce convert.",
    description: "How modular composable design systems and edge-rendering helped a high-growth retail brand reduce latency by 45% and boost checkout conversion rates.",
    contentType: "Fundamentals",
    topic: "Ecommerce",
    tag: "Case Study",
    date: "2026-06-15",
    duration: "18 min read",
    author: {
      name: "Jessica Vance",
      avatar: "/Client_Logo/wp.svg",
      role: "Solutions Engineer, E-Commerce",
      bio: "Jessica Vance is an E-Commerce Solutions Engineer consulting for high-volume retail brands to architect decoupled frontends."
    },
    image: "/E-Commerce.png",
    content: {
      introduction: "This case study details how migrating from Shopify Liquid templates to a headless Next.js frontend allowed a retail brand to scale transaction operations while reducing loading delays.",
      sections: [
        {
          heading: "Overcoming Shopify Liquid Limitations",
          paragraphs: [
            "Liquid templates integrate closely with backend databases, making extensive personalization difficult without hurting load speed. Headless storefronts decouple frontend delivery completely.",
            "By caching content at the edge and fetching inventory counts client-side, checkout processes operate independently of presentation logic."
          ]
        },
        {
          heading: "Results: Increased Conversions and Speed",
          paragraphs: [
            "Following the Next.js migration, page speed improved by 45%. Corresponding checkout friction decreased, boosting product purchase conversions by 15% overall."
          ]
        }
      ],
      conclusion: "Headless Shopify architectures require more setup, but the scalability, visual control, and page load speeds make it an essential stack for high-growth enterprise retail."
    }
  },
  "7": {
    id: "7",
    title: "The Incomplete Pitch: A Method for B2B Tech Marketing",
    subtitle: "How to make prospects curious about your tech?",
    description: "Discover why leaving gaps in your product presentation is the ultimate cheat code for closing enterprise B2B sales in 2026. A framework for design-led marketing.",
    contentType: "Insights",
    topic: "Development",
    tag: "Article",
    date: "2026-06-19",
    duration: "8 min read",
    author: {
      name: "Team HolaCXO",
      avatar: "/LOGO.svg",
      role: "Expert Growth Advisors",
      bio: "The expert team at HolaCXO providing strategic GTM insights, enterprise pipeline growth strategies, and direct CXO access."
    },
    image: "/b2b_tech_marketing_hero.png",
    content: {
      introduction: "I have spent years studying behavioural psychology for business - experimenting across B2B, B2C, and D2C - trying to understand one thing: how is tech actually sold, psychologically?",
      sections: [
        {
          paragraphs: [
            "Here is what I found.",
            "B2B software is not an impulse buy. It is a rational, functional decision. So naturally, the industry landed on rational, functional language to sell it.",
            "Two patterns dominate."
          ]
        },
        {
          heading: "The Metric Emphasis",
          paragraphs: [
            "\"This software increased efficiency by 30%.\" Sounds rational. The problem: every firm says that."
          ]
        },
        {
          heading: "The Aspirational Extrapolate",
          paragraphs: [
            "\"Technology that elevates your infrastructure.\" Sounds elevated. The problem: it says nothing about what it actually does, and gives the reader no reason to be curious.",
            "Because the firms we look up to built their brands on this language, new B2B tech companies keep copying it. But the issue was never the website copy. It is the first impression."
          ]
        },
        {
          heading: "The Psychology of First Impressions",
          paragraphs: [
            "The person reading your email, your LinkedIn message, your cold outreach - they are the same person whose attention businesses spend millions fighting for every single day. Their brain is halfway active.",
            "They give it 2-3 seconds. If it clicks, they move on. If it doesn't, so do they."
          ]
        }
      ],
      conclusion: "Tech marketing has ignored this almost completely. To make prospects curious, you must leave room for their input. Start showing incomplete models that they help construct, and watch conversion improve."
    }
  }
};
