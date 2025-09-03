import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://myfamilybr.com"),
  title: {
    default: "My Family — especialista em bonés desde 2016",
    template: "%s | MF",
  },
  description:
    "A MF está de volta! Explore nossa coleção exclusiva e vista o estilo que conecta gerações. Confira agora!.",
  keywords: [
    "MF",
    "MyFamily",
    "bonés",
    "streetwear",
    "RJ",
    "marca",
    "acessórios",
    "lançamento",
  ],
  openGraph: {
    title: "MF — especialista em bonés desde 2016",
    description:
      "A MF está de volta! Explore nossa coleção exclusiva e vista o estilo que conecta gerações. Confira agora!.",
    url: "/",
    siteName: "MF",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "MF — especialista em bonés",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MF — especialista em bonés desde 2016",
    description:
      "A MF está de volta! Explore nossa coleção exclusiva e vista o estilo que conecta gerações. Confira agora!.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  themeColor: "#10B981",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
