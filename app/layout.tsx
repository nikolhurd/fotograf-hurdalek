import type { Metadata, Viewport } from "next";
import { Geist, Martel } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const martel = Martel({
  variable: "--font-martel",
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Fotograf Hurdálek",
  description:
    "Profesionální fotograf z Královehradeckého kraje - Svatby, Školní focení, Reportáže",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={`${geistSans.variable} ${martel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
