import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileStickyBar from "../components/MobileStickyBar";
import LocalBusinessSchema from "../components/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fourpeasboutique.com"),
  title: "Four Peas in a Pod Boutique | Boutique in Leitchfield KY",
  description:
    "Four Peas in a Pod Boutique in Leitchfield, Kentucky — children's clothing, maternity wear, plus-size fashion, accessories, gifts, and community events.",
  keywords: [
    "Boutique in Leitchfield KY",
    "Local clothing boutique Leitchfield Kentucky",
    "Children's clothing Leitchfield KY",
    "Maternity boutique Kentucky",
    "Plus-size fashion Leitchfield",
    "Leitchfield shopping",
    "Four Peas in a Pod Boutique",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Four Peas in a Pod Boutique | Boutique in Leitchfield KY",
    description:
      "Four Peas in a Pod Boutique in Leitchfield, Kentucky — children's clothing, maternity wear, plus-size fashion, accessories, gifts, and community events.",
    url: "https://fourpeasboutique.com/",
    siteName: "Four Peas in a Pod Boutique",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/storefront-valentines-snow.jpg",
        width: 1200,
        height: 630,
        alt: "Four Peas in a Pod Boutique storefront in Leitchfield KY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Four Peas in a Pod Boutique | Leitchfield KY",
    description:
      "Children's clothing, maternity wear, and plus-size fashion. First responder owned in Leitchfield, Kentucky.",
    images: ["/images/storefront-valentines-snow.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8F6F2] has-sticky-bar">
        <LocalBusinessSchema />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-[#2C2C22] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-md focus:text-sm focus:font-medium">
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-20">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
