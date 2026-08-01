import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import Link from "next/link";
import CircularText from "@/components/CircularText";
import GlobalContactWidget from "./Components/GlobalContactWidget";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://designncode.com'),
  title: {
    default: "DesignNCode | Premium Digital Agency",
    template: "%s | DesignNCode",
  },
  description: "Transforming Ideas into Digital Reality. We specialize in UI/UX design, Web Development, and Performance Marketing to scale your business.",
  keywords: ["Digital Agency", "UI/UX Design", "Web Development", "Performance Marketing", "SEO", "DesignNCode", "App Development"],
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
    title: "DesignNCode | Premium Digital Agency",
    description: "Transforming Ideas into Digital Reality. We specialize in UI/UX design, Web Development, and Performance Marketing to scale your business.",
    siteName: "DesignNCode",
    images: [
      {
        url: "/LOGO.svg",
        width: 1200,
        height: 630,
        alt: "DesignNCode - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignNCode | Premium Digital Agency",
    description: "Transforming Ideas into Digital Reality. We specialize in UI/UX design, Web Development, and Performance Marketing.",
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
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[#FCFCFD]">
        <Navbar />
        {children}
        <GlobalContactWidget />
      </body>
    </html>
  );
}


