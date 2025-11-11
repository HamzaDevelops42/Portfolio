import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Hamza bin Asif | Web Developer",
  description:
    "I'm Hamza bin Asif, a passionate frontend web developer specializing in creating modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and Next.js.",
  keywords: [
    "Hamza bin Asif",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "Next.js",
    "React",
    "HTML",
    "CSS",
  ],
  authors: [{ name: "Hamza bin Asif" }],
  creator: "Hamza bin Asif",
  openGraph: {
    title: "Hamza bin Asif | Web Developer",
    description:
      "Explore my portfolio showcasing modern, responsive, and user-friendly web projects built with Next.js and JavaScript.",
    url: "https://hamzadevelops.vercel.app/",
    siteName: "Hamza bin Asif Portfolio",
    images: [
      {
        url: "/portfolio.png", // place a preview image in your /public folder
        width: 1200,
        height: 630,
        alt: "Hamza bin Asif Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://hamzadevelops.vercel.app/"),
  category: "Portfolio",
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
    <html lang="en" suppressHydrationWarning>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />



      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <Providers >
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
