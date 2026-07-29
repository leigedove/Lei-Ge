import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  },
  twitter: {
    card: "summary",
    title: "Lei Ge — Scientific AI × Computational Fashion",
    description:
      "Researching how intelligent systems understand science—and how computation can become tactile.",
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
        {children}
      </body>
    </html>
  );
}
