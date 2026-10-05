import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import Script from "next/script";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000"
  ),

  title: {
    default:
      "Isaiah Concepcion | Software Developer",
    template:
      "%s | Isaiah Concepcion",
  },

  description:
    "Portfolio of Isaiah Concepcion, a software developer building full-stack web applications, backend systems, mobile applications, and AI-powered solutions.",

  applicationName:
    "Isaiah Concepcion Portfolio",

  authors: [
    {
      name: "Isaiah Concepcion",
    },
  ],

  creator: "Isaiah Concepcion",

  keywords: [
    "Isaiah Concepcion",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Laravel Developer",
    "Philippines Software Developer",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Isaiah Concepcion | Software Developer",

    description:
      "Software developer building full-stack web applications, backend systems, mobile applications, and AI-powered solutions.",

    type: "website",
    locale: "en_PH",

    siteName:
      "Isaiah Concepcion Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Isaiah Concepcion | Software Developer",

    description:
      "Software developer building full-stack web applications, backend systems, mobile applications, and AI-powered solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function () {
  try {
    var savedTheme =
      localStorage.getItem("theme");

    var systemPrefersDark =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

    var theme =
      savedTheme === "light" ||
      savedTheme === "dark"
        ? savedTheme
        : systemPrefersDark
          ? "dark"
          : "light";

    document.documentElement.dataset.theme =
      theme;
  } catch (error) {
    document.documentElement.dataset.theme =
      "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
        `}
      >
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
        >
          {themeScript}
        </Script>

        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to content
        </a>

        {children}
      </body>
    </html>
  );
}