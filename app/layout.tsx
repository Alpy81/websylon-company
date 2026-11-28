import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import CookieBanner from "@/components/CookieBanner/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "xyliviatec – Web- & App-Entwicklung";
const siteDescription =
  "xyliviatec entwickelt moderne Websites, Online-Shops und plattformübergreifende Apps für iOS und Android. Persönlich, schnell und mit Blick auf Ihr Ergebnis.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | xyliviatec",
  },
  description: siteDescription,
  keywords: [
    "Webentwicklung",
    "App-Entwicklung",
    "React Native",
    "Online-Shop",
    "Unternehmenswebseite",
    "Next.js",
    "React",
    "moderne Website",
  ],
  authors: [{ name: "Alperen Ertas" }],
  creator: "xyliviatec",
  metadataBase: new URL("https://xyliviatec.de"),
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "xyliviatec",
    title: siteTitle,
    description: siteDescription,
  },
};

const splashScript = `(function(){try{if(!sessionStorage.getItem('splashSeen')){document.documentElement.setAttribute('data-splash','true');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: splashScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CookieBanner />
        <SplashScreen />
        <Navigation />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
