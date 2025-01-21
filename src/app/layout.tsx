import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "designpop | Your one-stop service for MVP, Design and Development",
  description:
    "We build complete MVPs in 2 weeks and deliver designs within 48 hours. You can even subscribe to our design-engineering work on a monthly basis!",
  openGraph: {
    url: "https://designpop.site",
    locale: "en-US",
    siteName: "designpop",
    description:
      "We build complete MVPs in 2 weeks and deliver designs within 48 hours. You can even subscribe to our design-engineering work on a monthly basis!",
    images: [
      {
        url: "/img/og.jpg",
        alt: "designpop | Your one-stop service for MVP, design and development"
      }
    ],
    title: "designpop | Your one-stop service for MVP, design and development"
  },
  twitter: {
    site: "https://designpop.site",
    description:
      "designpop aims to be the best design-engineering + MVP development solution for fast growing startups and busy founders worldwide. We turn your vision into a live project in a matter of weeks. Book a call with a today!",
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "pxdj8alcvo");`
          }}
        />

        {children}
      </body>
    </html>
  )
}
