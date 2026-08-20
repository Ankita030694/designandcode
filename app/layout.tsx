import type { Metadata } from "next";
import { Outfit, Geist_Mono, Instrument_Serif, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import GlobalContactWidget from "./Components/GlobalContactWidget";
import FixedBackgroundGraphics from "./Components/FixedBackgroundGraphics";
import EyeFollower from "./Components/EyeFollower";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://designncode.com'),
  title: {
    default: "UI/UX Design & Web Development Agency | DesignNCode",
    template: "%s",
  },
  description: "DesignNCode creates high-converting websites, UI/UX designs, Shopify stores and digital products built for performance, SEO and growth.",
  keywords: ["UI/UX design and web development agency", "UI/UX Design", "Web Development", "Shopify stores", "digital products", "SEO", "growth", "performance"],
  authors: [{ name: "DesignNCode Team" }],
  creator: "DesignNCode",
  publisher: "DesignNCode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://designncode.com",
    title: "UI/UX Design & Web Development Agency | DesignNCode",
    description: "DesignNCode creates high-converting websites, UI/UX designs, Shopify stores and digital products built for performance, SEO and growth.",
    siteName: "DesignNCode",
    images: [
      {
        url: "/LOGO.svg",
        width: 1200,
        height: 630,
        alt: "DesignNCode - UI/UX Design & Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design & Web Development Agency | DesignNCode",
    description: "DesignNCode creates high-converting websites, UI/UX designs, Shopify stores and digital products built for performance, SEO and growth.",
    images: ["/LOGO.svg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} ${instrumentSerif.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[#FAF9F6]">
        <FixedBackgroundGraphics />
        <Navbar />
        {children}
        <GlobalContactWidget />
        <EyeFollower />
      </body>
    </html>
  );
}


