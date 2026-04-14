import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { siteMetadata } from "../data/metadata";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: `${siteMetadata.name} | ${siteMetadata.jobTitle.split(' | ')[0]}`,
    template: `%s | ${siteMetadata.name}`
  },
  description: siteMetadata.description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [],
  },
  openGraph: {
    title: `${siteMetadata.name} | Portfolio`,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.name,
    description: siteMetadata.description,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // JSON-LD Schema for rich Google Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteMetadata.name,
    jobTitle: siteMetadata.jobTitle.split(' | ')[0],
    url: siteMetadata.url,
    sameAs: [
      siteMetadata.github,
      siteMetadata.linkedin,
    ],
    description: siteMetadata.description,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ToastContainer position="bottom-right" theme="colored" />
      </body>
    </html>
  );
}
