import type { Metadata } from "next"
import { Nunito_Sans, Plus_Jakarta_Sans, Manrope } from "next/font/google"
import "./globals.css"

const geistSans = Nunito_Sans({
  variable: "--nunito"
})
const geistMono = Plus_Jakarta_Sans({
  variable: "--plus-jakarta"
})

export const metadata: Metadata = {
  title: "designpop | Your one-stop service for MVP, Design and Development",
  description: "We build MVPs in 2 weeks and deliver designs"
}

const manrope = Manrope({
  variable: "--manrope"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
