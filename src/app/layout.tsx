import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag Kumar | Full Stack Developer",

  description:
    "Full Stack Developer specializing in React, Next.js, Java, Node.js, MongoDB, and modern web technologies. Creator of FinanceFlow and AlgoStreak.",

  keywords: [
    "Anurag Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Java Developer",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
    "FinanceFlow",
    "AlgoStreak",
  ],

  authors: [
    {
      name: "Anurag Kumar",
    },
  ],

  creator: "Anurag Kumar",

  openGraph: {
    title: "Anurag Kumar | Full Stack Developer",

    description:
      "Full Stack Developer specializing in React, Next.js, Java, Node.js, MongoDB, and modern web technologies.",

    url: "https://YOUR-DOMAIN.com",

    siteName: "Anurag Kumar Portfolio",

    images: [
      {
        url: "/images/profile.JPG",
        width: 1200,
        height: 630,
        alt: "Anurag Kumar Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Anurag Kumar | Full Stack Developer",

    description:
      "Full Stack Developer specializing in React, Next.js, Java, Node.js, MongoDB, and modern web technologies.",

    images: ["/images/profile.JPG"],
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
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}