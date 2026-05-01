import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster, ToastProvider } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "Nexus Consulting — Enterprise IT Strategy & Digital Transformation",
    template: "%s | Nexus Consulting",
  },
  description:
    "Nexus Consulting delivers enterprise-grade IT strategy, digital transformation, cloud architecture, and cybersecurity solutions for Fortune 500 companies worldwide.",
  keywords: [
    "IT consulting",
    "digital transformation",
    "cloud architecture",
    "cybersecurity",
    "enterprise software",
    "technology strategy",
  ],
  authors: [{ name: "Nexus Consulting" }],
  creator: "Nexus Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusconsulting.com",
    siteName: "Nexus Consulting",
    title: "Nexus Consulting — Enterprise IT Strategy & Digital Transformation",
    description:
      "Enterprise-grade IT consulting for the world's most ambitious companies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Consulting",
    description: "Enterprise IT Strategy & Digital Transformation",
    creator: "@nexusconsulting",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
