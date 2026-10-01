import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import { site } from "@/lib/config";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-next",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans-next",
  display: "swap",
});

const description =
  "A 30-day devotional of Scripture, guided prayer, and journaling for believers who love God and still struggle with worry. Ten minutes a day. Instant PDF download.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "When Anxiety Takes Over: a 30-day prayer and Scripture devotional",
  description,
  openGraph: {
    title: site.name,
    description:
      "When your mind won't stop at 2 a.m., you don't have to carry it alone. A 30-day devotional of Scripture, prayer, and journaling.",
    type: "website",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
