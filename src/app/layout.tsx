import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Haven Café — Cozy Bakery & Café in Edinburgh",
    template: "%s | The Haven Café",
  },
  description:
    "The Haven Café is a cozy bakery & café in Newhaven, Edinburgh. Freshly baked goods, specialty coffee, and a warm welcome. Visit us at 9 Anchorfield, Edinburgh EH6 4JG.",
  keywords: ["café", "bakery", "Edinburgh", "Newhaven", "coffee", "pastries", "breakfast"],
  openGraph: {
    title: "The Haven Café — Cozy Bakery & Café in Edinburgh",
    description: "Freshly baked goods, specialty coffee, and a warm welcome in Newhaven, Edinburgh.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}