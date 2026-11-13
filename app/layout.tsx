import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Consent from "@/components/Consent";
import SmoothScroll from "@/components/SmoothScroll";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#1d2124" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SkyClean — ochrona przed szkodnikami i mycie ciśnieniowe | Ostrów Wielkopolski",
    template: "%s | SkyClean",
  },
  description:
    "SkyClean z Ostrowa Wielkopolskiego: dezynsekcja, deratyzacja, dezynfekcja oraz mycie ciśnieniowe i parowe kostki, elewacji, dachów i fotowoltaiki. Bezpłatna wycena, faktura VAT.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "SkyClean",
    url: site.url,
    title: "SkyClean — ochrona przed szkodnikami i mycie ciśnieniowe",
    description: "Dezynsekcja, deratyzacja, dezynfekcja oraz mycie ciśnieniowe i parowe. Ostrów Wielkopolski i do 150 km.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const business = {
    "@type": "LocalBusiness",
    "@id": `${site.url}/#firma`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/icon-512.png`,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/opengraph-image.jpg`,
    legalName: site.legalName,
    taxID: site.nip,
    address: { "@type": "PostalAddress", streetAddress: "ul. Perłowa 2", postalCode: "63-410", addressLocality: "Gorzyce Wielkie", addressRegion: "wielkopolskie", addressCountry: "PL" },
    areaServed: [site.city, ...site.towns],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
    ...(site.facebook ? { sameAs: [site.facebook] } : {}),
  };
  // WebSite: nombre del sitio que Google muestra encima del resultado
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${site.url}/#website`, name: "SkyClean", alternateName: ["Sky Clean", "sky-clean.pl"], url: `${site.url}/`, inLanguage: "pl-PL", publisher: { "@id": `${site.url}/#firma` } },
      business,
    ],
  };
  return (
    <html lang="pl" className={`${archivo.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <a href="#tresc" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-carbon">
          Przejdź do treści
        </a>
        <Header />
        <main id="tresc" className="flex-1">{children}</main>
        <Footer />
        <SmoothScroll />
        <Consent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
