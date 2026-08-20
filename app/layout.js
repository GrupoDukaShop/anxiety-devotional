import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "When Anxiety Takes Over — 30 Days of Prayer, Scripture & Peace",
  description:
    "A 30-day faith-based devotional to help you bring your worries to God, reflect on Scripture, and build a consistent prayer practice. Instant PDF download.",
  openGraph: {
    title: "When Anxiety Takes Over",
    description:
      "A 30-day faith-based journey from worry to surrender, rooted in prayer and Scripture.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
