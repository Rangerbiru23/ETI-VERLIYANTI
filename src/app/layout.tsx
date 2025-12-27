import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://etivirliyanti-catering.com'),
  title: "ETI VIRLIYANTI Catering - Jasa Boga Profesional",
  description: "ETI VIRLIYANTI penyedia jasa boga terpercaya untuk berbagai acara. Layanan catering profesional untuk pernikahan, corporate, dan acara khusus dengan kualitas terbaik.",
  keywords: ["ETI VIRLIYANTI", "Catering", "Jasa Boga", "Catering Pernikahan", "Catering Corporate", "Ogan Komering Ulu Timur", "Sumatera Selatan"],
  authors: [{ name: "ETI VIRLIYANTI Catering" }],
  icons: {
    icon: "/eti-virliyanti-logo.png",
  },
  openGraph: {
    title: "ETI VIRLIYANTI Catering - Jasa Boga Profesional",
    description: "Layanan catering profesional untuk berbagai acara spesial Anda. Kualitas terbaik, pelayanan memuaskan.",
    url: "https://etivirliyanti-catering.com",
    siteName: "ETI VIRLIYANTI Catering",
    type: "website",
    images: [
      {
        url: "/eti-virliyanti-logo.png",
        width: 1024,
        height: 1024,
        alt: "ETI VIRLIYANTI Catering Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETI VIRLIYANTI Catering",
    description: "Layanan catering profesional untuk berbagai acara spesial Anda",
    images: ["/eti-virliyanti-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
