import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "designpop | Your one-stop service for MVP, Design and Development",
  description:
    "We build complete MVPs in 2 weeks and deliver designs within 48 hours. You can even subscribe to our design-engineering work on a monthly basis!"
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
