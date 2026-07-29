import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components";
import { siteBasePath } from "./site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://lei-ge-research-fashion.polaron-0639.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lei Ge — Scientific AI × Computational Fashion",
    template: "%s · Lei Ge",
  },
  description:
    "Lei Ge is a PhD candidate at Imperial College London working on large language models for science, interpretable AI, agentic systems, and computational fashion.",
  authors: [{ name: "Lei Ge" }],
  keywords: [
    "Lei Ge",
    "large language models",
    "AI for science",
    "materials science",
    "interpretable AI",
    "computational fashion",
    "diving",
    "creative practice",
  ],
  icons: {
    icon: `${siteBasePath}/favicon.png`,
    shortcut: `${siteBasePath}/favicon.png`,
    apple: `${siteBasePath}/favicon.png`,
  },
  openGraph: {
    type: "website",
    title: "Lei Ge — Scientific AI × Computational Fashion",
    description:
      "Scientific AI, computational fashion, and a life spent making things by hand.",
    images: [
      {
        url: `${siteBasePath}/og-life.png`,
        width: 1200,
        height: 630,
        alt: "Lei Ge — Scientific AI, computational fashion, and life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lei Ge — Scientific AI × Computational Fashion",
    description:
      "Scientific AI, computational fashion, and a life spent making things by hand.",
    images: [`${siteBasePath}/og-life.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
