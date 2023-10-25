import "./globals.css"
import type { Metadata } from "next"
import { Nunito_Sans, Sora } from "next/font/google"
import loadFont from "next/font/local"
import Head from "next/head"
import Nav from "./LandingPage/Nav"

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  fallback: ["Helvetica Neue", "Helvetica", "sans-serif"],
})
const roobert = loadFont({
  src: [
    { path: "./RoobertTRIAL-Regular.woff2", style: "normal", weight: "400" },
  ],
  variable: "--font-heading",
  fallback: ["Helvetica Neue", "Helvetica", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Designpop",
  description: "A subscription based design agency",
  openGraph: {
    images: [
      {
        url: "/og.jpg",
        alt: "Designpop: A Design and Development subscription agency",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${roobert.variable}`}>
        {children}
      </body>
    </html>
  )
}
