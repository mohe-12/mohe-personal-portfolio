import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammed Hasen — Full-Stack Developer",
  description:
    "Mohammed Hasen is a full-stack developer building fast, thoughtful digital products with React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Mohammed Hasen",
    "Freelancer",
    "Ethiopia Developer",
  ],
  authors: [{ name: "Mohammed Hasen M." }],
  creator: "Mohammed Hasen M.",
  publisher: "Mohammed Hasen M.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammed-hasen.dev",
    title: "Mohammed Hasen M. - Full-Stack Developer",
    description: "Professional Full-Stack Web Developer specializing in React, Node.js, and modern web technologies.",
    siteName: "Mohammed Hasen Portfolio",
    images: [
      {
        url: "/images/mohammed-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Hasen M. - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Hasen M. - Full-Stack Developer",
    description: "Professional Full-Stack Web Developer specializing in React, Node.js, and modern web technologies.",
    creator: "@mohe_dev",
    images: ["/images/mohammed-profile.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://mohammed-hasen.dev",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
