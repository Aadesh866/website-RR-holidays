import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RR Holidays - Best Tours and Travel Packages from India",
  description: "Book the best domestic and international holiday tour packages and enjoy the best deals & offers at affordable prices at RR Holidays. 500+ destinations, 10,000+ happy travelers.",
  keywords: ["travel agency", "holiday packages", "international tours", "domestic tours", "honeymoon packages", "group tours", "India travel", "RR Holidays", "Coimbatore"],
  authors: [{ name: "RR Holidays" }],
  openGraph: {
    title: "RR Holidays - Best Tours and Travel Packages from India",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#E31E24] selection:text-white`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
