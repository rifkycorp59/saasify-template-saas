import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ColorThemeProvider } from "@/components/ColorThemeProvider";
import { GlobalColorPicker } from "@/components/PickerColor";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

import { GetDataGLobal } from "@/lib/fetch";
import { Global } from "@/lib/interface";

export async function generateMetadata() {
  const meta: Global = await GetDataGLobal();

  return {
    metadataBase: new URL(meta.metadataBase),
    applicationName: meta.title,
    referrer: "origin-when-cross-origin",
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    authors: [{ name: meta.authors }],
    creator: meta.authors,
    publisher: meta.authors,
    alternates: {
      canonical: meta.metadataBase,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: meta.metadataBase,
      siteName: meta.title,
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      images: [
        {
          url: `http://localhost:1337${meta.openGraph.image.url}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: [`http://localhost:1337${meta.twitter.image.url}`],
      creator: meta.twitter.creator,
    },
    robots: {
      index: meta.robots.index,
      follow: meta.robots.follow,
      googleBot: {
        index: meta.robots.index,
        follow: meta.robots.follow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Icon metadata */}
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ColorThemeProvider>
            <TooltipProvider>
              <Header />
              {children}
              <Footer />

              {/* Disable this if dont want use color picker */}
              <GlobalColorPicker /> 
              
              <Toaster />
            </TooltipProvider>
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
