import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://lei-ge-research-fashion.polaron-0639.chatgpt.site",
  ),
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
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    title: "Lei Ge — Scientific AI × Computational Fashion",
    description:
      "Researching how intelligent systems understand science—and how computation can become tactile.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lei Ge — Large language models for scientific discovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lei Ge — Scientific AI × Computational Fashion",
    description:
      "Researching how intelligent systems understand science—and how computation can become tactile.",
    images: ["/og.png"],
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
