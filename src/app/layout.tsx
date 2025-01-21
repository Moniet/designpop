import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "designpop | Your one-stop service for MVP, Design and Development",
  description:
    "We build complete MVPs in 2 weeks and deliver designs within 48 hours. You can even subscribe to our design-engineering work on a monthly basis!",
  openGraph: {
    images: [
      {
        url: "/img/og.jpg",
        alt: "designpop | Your one-stop service for MVP, Design and Development"
      }
    ],
    title: "designpop | Your one-stop service for MVP, Design and Development"
  },
  twitter: {
    site: "https://designpop.site",
    description:
      "Designpop aims to be the best design-engineering + MVP development solution for fast growing startups and busy founders worldwide. We turn your vision into a live project in a matter of weeks. Book a call with a today!",
    images: [
      {
        url: "/img/og.jpg",
        alt: "designpop | Your one-stop service for MVP, Design and Development"
      }
    ],
    title: "designpop | Your one-stop service for MVP, Design and Development"
  }
}

const manrope = Manrope({
  variable: "--manrope",
  subsets: ["latin"]
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased overflow-x-hidden max-w-screen`}
      >
        {children}
      </body>
    </html>
  )
}
