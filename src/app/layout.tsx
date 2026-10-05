
import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anurag | Product Builder & Creative Developer",
    template: "%s | Anurag",
  },
  description:
    "Anurag builds digital products with a developer's precision and a director's eye. Explore projects, engineering work, and creative experiments.",
  applicationName: "Anurag Portfolio",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Anurag Portfolio",
    title: "Anurag | Product Builder & Creative Developer",
    description:
      "Digital products, developer tools, and creative experiences built with precision.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Anurag - Product Builder and Creative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag | Product Builder & Creative Developer",
    description:
      "Digital products, developer tools, and creative experiences built with precision.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0D0C",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-text-primary antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
