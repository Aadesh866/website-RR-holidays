import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RR Holidays - Crafting Journeys That Last a Lifetime",
  description: "Premium domestic & international holiday packages across 500+ destinations. Handcrafted itineraries, best price guarantee, 24/7 support, and zero EMI options.",
  keywords: ["travel agency", "holiday packages", "international tours", "domestic tours", "honeymoon packages", "group tours", "India travel"],
  authors: [{ name: "RR Holidays" }],
  openGraph: {
    title: "RR Holidays - Crafting Journeys That Last a Lifetime",
    description: "Premium domestic & international holiday packages across 500+ destinations",
    type: "website",
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
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
