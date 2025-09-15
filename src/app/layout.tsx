import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@/components/google-tag-manager";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MetaPixel } from "@/components/meta-pixel";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youth Circus Classes - San Diego Circus Center | Ages 5-17",
  description: "Enroll your child in circus classes at San Diego's leading circus arts training facility. Aerial, trampoline, tumbling & more for ages 5-17. Build confidence & develop lifelong skills. Free trial class available!",
  keywords: "youth circus classes, kids circus, San Diego circus, aerial arts, trampoline, tumbling, children's gymnastics, circus training",
  openGraph: {
    title: "Youth Circus Classes - San Diego Circus Center",
    description: "Join hundreds of families who have discovered the joy of circus arts. Ages 5-17, no experience required!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get tracking IDs from environment variables
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en">
      <head>
        {/* Tracking Scripts */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {metaPixelId && <MetaPixel pixelId={metaPixelId} />}
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}