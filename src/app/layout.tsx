import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/sections/cookie-consent";
import { BackToTop } from "@/components/sections/back-to-top";
import { cafeInfo } from "@/lib/cafe-data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Haven Café — Specialty Coffee & Breakfast in Edinburgh",
    template: "%s | The Haven Café",
  },
  description:
    "The Haven Café is a cozy Scandinavian-style café in Newhaven, Edinburgh. Freshly cooked breakfasts, specialty coffee, loose leaf teas, and a warm welcome. Open daily 9am–4pm.",
  keywords: [
    "café",
    "Edinburgh",
    "Newhaven",
    "coffee",
    "breakfast",
    "brunch",
    "lunch",
    "Scottish breakfast",
    "vegetarian",
    "vegan",
    "gluten-free",
    "The Haven Café",
  ],
  authors: [{ name: "The Haven Café" }],
  openGraph: {
    title: "The Haven Café — Specialty Coffee & Breakfast in Edinburgh",
    description:
      "Freshly cooked breakfasts, specialty coffee, and a warm welcome in Newhaven, Edinburgh. Open daily 9am–4pm.",
    type: "website",
    locale: "en_GB",
    siteName: "The Haven Café",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "The Haven Café interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Haven Café — Edinburgh",
    description: "Specialty coffee & freshly cooked breakfasts in Newhaven, Edinburgh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://thehavencafe.co.uk/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: cafeInfo.name,
  image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 Anchorfield",
    addressLocality: "Newhaven, Edinburgh",
    addressRegion: "Scotland",
    postalCode: "EH6 4JG",
    addressCountry: "GB",
  },
  telephone: cafeInfo.phone,
  url: "https://thehavencafe.co.uk/",
  servesCuisine: ["Breakfast", "Brunch", "Lunch", "British", "Scottish", "Vegetarian", "Vegan"],
  priceRange: "££",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "409",
    bestRating: "5",
    worstRating: "1",
  },
  acceptsReservations: "True",
  paymentAccepted: "Visa, Mastercard, American Express, Cash",
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: [
      { "@type": "MenuSection", name: "Breakfast" },
      { "@type": "MenuSection", name: "Hot Drinks" },
      { "@type": "MenuSection", name: "Cold Drinks" },
      { "@type": "MenuSection", name: "Extras" },
    ],
  },
  sameAs: [cafeInfo.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}