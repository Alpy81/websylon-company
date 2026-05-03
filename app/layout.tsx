import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import SplashScreen from "@/components/SplashScreen/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Websylon – Professionelle Webentwicklung",
    template: "%s | Websylon",
  },
  description:
    "Websylon entwickelt moderne, hochperformante Unternehmenswebseiten mit zeitgemäßem Design und technischer Exzellenz.",
  keywords: [
    "Webentwicklung",
    "Unternehmenswebseite",
    "Next.js",
    "React",
    "moderne Website",
  ],
  authors: [{ name: "Websylon" }],
  creator: "Websylon",
  metadataBase: new URL("https://websylon.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Websylon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SplashScreen />
        <Navigation />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
