import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#58521D",
};

export const metadata: Metadata = {
  title: {
    default: "mdialab | Agencia de Marketing e Inteligencia Artificial",
    template: "%s | mdialab",
  },
  description:
    "Transformamos tu negocio con inteligencia artificial, sin perder la esencia humana. Consultoría estratégica de IA, automatización, desarrollo web y SEO.",
  keywords: [
    "agencia marketing",
    "inteligencia artificial",
    "consultoría IA",
    "automatización IA",
    "desarrollo web",
    "SEO",
    "implementación IA",
    "marketing digital",
    "transformación digital",
  ],
  authors: [{ name: "mdialab" }],
  creator: "mdialab",
  metadataBase: new URL("https://mdialab.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mdialab.com",
    siteName: "mdialab",
    title: "mdialab | Agencia de Marketing e Inteligencia Artificial",
    description:
      "Transformamos tu negocio con inteligencia artificial, sin perder la esencia humana. Consultoría estratégica de IA, automatización, desarrollo web y SEO.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "mdialab - Agencia de Marketing e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mdialab | Agencia de Marketing e Inteligencia Artificial",
    description:
      "Transformamos tu negocio con inteligencia artificial, sin perder la esencia humana.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
