import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SnowEffect from "@/components/SnowEffect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Zulfan Nurrahman | Full-Stack Web Developer",
  description: "Portfolio of Zulfan Nurrahman - Full Stack & Front-End Web Developer specializing in modern, scalable web applications.",
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
        <div className="fixed inset-0 bg-[url('/assets/img/hero-bg.png')] opacity-[0.04] pointer-events-none mix-blend-overlay z-0" />
      </body>
    </html>
  );
}
