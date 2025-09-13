import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ColorThemeProvider } from "@/components/ColorThemeProvider";
import { GlobalColorPicker } from "@/components/PickerColor";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  applicationName: "SaaSify",
  referrer: "origin-when-cross-origin",
  title: {
    default: "SaaSify",
    template: `%s | ${"SaaSify"}`,
  },
  description: "SaaSify",
  authors: [{ name: "SaaS Dev" }],
  creator: "SaaS Dev",
  publisher: "SaaS Dev",
  alternates: {
    canonical: "http://localhost:3000",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "http://localhost:3000",
    siteName: "SaaSify",
    title: "SaaSify",
    description: "SaaSify",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SaaSify",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSify",
    description: "SaaSify",
    images: "/logo.png",
    creator: "@Saas",
  },
  robots: {
    index: false, // true if web has deploy
    follow: false, // true if web has deploy
    googleBot: {
      index: false, // true if web has deploy
      follow: false, // true if web has deploy
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
              {children}

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
