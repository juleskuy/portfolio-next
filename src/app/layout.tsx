import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

import { Inter } from "next/font/google";
import "./globals.css";
import SnowEffect from "@/components/SnowEffect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.website),
  title: {
    default: portfolioData.name + " | " + portfolioData.title,
    template: `%s | ${portfolioData.name}`,
  },
  alternates: {
    canonical: "/",
  },
  description: portfolioData.about,
  applicationName: portfolioData.name,
  authors: [{ name: portfolioData.name, url: portfolioData.website }],
  generator: "Next.js",
  keywords: [...portfolioData.skills.frontend, ...portfolioData.skills.backend, ...portfolioData.skills.tools, "Web Developer", "Full Stack Developer"],
  creator: portfolioData.name,
  publisher: portfolioData.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioData.website,
    title: portfolioData.name + " | " + portfolioData.title,
    description: portfolioData.about,
    siteName: portfolioData.name,
    images: [
      {
        url: "/assets/img/hero-bg.png", // Fallback image code
        width: 1200,
        height: 630,
        alt: portfolioData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.name + " | " + portfolioData.title,
    description: portfolioData.about,
    images: ["/assets/img/hero-bg.png"],
    creator: "@juleskuy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-bg-primary text-white overflow-x-hidden`}>
        <div className="relative z-10">
          {children}
        </div>
        <SnowEffect />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: portfolioData.name,
              url: portfolioData.website,
              sameAs: [
                portfolioData.github,
                portfolioData.linkedin,
                portfolioData.instagram,
                portfolioData.discord,
              ],
              jobTitle: portfolioData.title,
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
        <div className="fixed inset-0 bg-[url('/assets/img/hero-bg.png')] opacity-[0.04] pointer-events-none mix-blend-overlay z-0" />
      </body>
    </html>
  );
}
