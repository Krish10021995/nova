import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nova — Product Analytics for Modern Teams",
    template: "%s · Nova",
  },
  description:
    "Nova is a product analytics platform that turns raw product data into decisions. Explore a production-grade Next.js landing page and live analytics dashboard.",
  keywords: [
    "product analytics",
    "SaaS dashboard",
    "Next.js",
    "landing page",
    "portfolio",
  ],
  authors: [{ name: "Krishnendu Pramanik" }],
  openGraph: {
    title: "Nova — Product Analytics for Modern Teams",
    description:
      "A production-grade Next.js showcase: marketing site + live analytics dashboard.",
    siteName: "Nova",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delay={200}>{children}</TooltipProvider>
        </ThemeProvider>
        <noscript>
          <style>
            {`[data-reveal]{opacity:1!important;transform:none!important;visibility:visible!important}`}
          </style>
        </noscript>
      </body>
    </html>
  );
}