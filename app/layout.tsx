import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Fizz",
  description:
    "Software is fun. Breaking it is even more fun — notes on the stuff I break.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
  },
  openGraph: {
    title: "Fizz",
    description:
      "Software is fun. Breaking it is even more fun — notes on the stuff I break.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fizz",
    description:
      "Software is fun. Breaking it is even more fun — notes on the stuff I break.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="min-h-dvh">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
