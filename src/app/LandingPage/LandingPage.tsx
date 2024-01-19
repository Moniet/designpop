"use client"

import React, { useState } from "react"
import Nav from "./Nav"
import BouncingText from "./BouncingText"
import OurServices from "./OurServices"
import WorkCarousel from "./WorkCarousel"
import WhatWeBring from "./WhatWeBring"
import TechStack from "./TechStack"
import PricingSection from "./PricingSection"
import FAQs from "./FAQs"
import TestimonialQuote from "./TestimonialQuote"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import { SmoothScroll } from "@/components/SmoothScroll"
import Gutter from "./Gutter"
import HowItWorks from "./HowItWorks"
import DynamicDuoSection from "./DynamicDuoSection"
import Balancer from "react-wrap-balancer"
import { Zap } from "lucide-react"
import WorkList from "./WorkList"
import useScrollTo from "@/hooks/scrollToElement"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { useWindowSize } from "@uidotdev/usehooks"
import useMedia from "@/hooks/useMedia"
import Portal from "@/components/Portal"
import CircleCursor from "@/components/GlobalCursor"
import { createPortal } from "react-dom"
import { AnimatePresence, motion, useMotionValue } from "framer-motion"

const Cursor = ({ showCursor, posX, posY }: any) => {
  if (!globalThis.window) return null

  return createPortal(
    <AnimatePresence>
      {showCursor && (
        <motion.div
          aria-hidden="true"
          exit={{
            scale: 0,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="pointer-events-none fixed left-0 top-0 z-[1000000] -ml-[50px] -mt-[50px] flex h-[100px] w-[100px] items-center justify-center rounded-full bg-neutral-800 text-sm font-light uppercase text-white max-md:hidden"
          style={{
            position: "fixed",
            x: posX,
            y: posY,
            zIndex: 1000000,
            transition: "transform ease-out 150ms",
          }}
        >
          Click
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

const RenderNav = () => {
  const isSmall = useMedia("(max-width: 768px)")

  if (isSmall) {
    return (
      <Portal>
        <Nav />
      </Portal>
    )
  }

  return <Nav />
}

const LandingPage = () => {
  const scrollTo = useScrollTo()
  useSmoothScroll({
    duration: 0.5,
    rootSelector: "#root",
  })

  // const posX = useMotionValue(0)
  // const posY = useMotionValue(0)
  // const [showCursor, setShowCursor] = useState(false)
  // const [mouseDown, setMouseDown] = useState(null)
  // const handlePointerDown = (e: any) => {
  //   setMouseDown({
  //     x: e.screenX,
  //     y: e.screenY,
  //   })
  // }

  // const handlePointerMove = (e: any) => {
  //   posX.set(e.clientX)
  //   posY.set(e.clientY)
  // }

  // const handlePointerUp = () => {
  //   setShowCursor(false)
  // }

  return (
    <>
      <div
        className="fixed left-2/4 top-0 mx-auto min-h-screen w-full max-w-[2000px] -translate-x-2/4 overflow-x-hidden bg-transparent"
        id="root"
      >
        <RenderNav />
        <main id="main">
          <div id="hero">
            <Gutter>
              <div className="flex h-screen w-full flex-col items-center  justify-center pb-20 xs:mt-[50px] xs:h-[50vh] xs:pt-32 md:mt-7 md:h-[50vh] md:pt-0">
                <div className="max-w-[750px] text-center">
                  <h1 className="mb-8 select-none font-heading font-bold text-black xs:text-4xl sm:text-4xl md:text-6xl">
                    <Balancer ratio={0.8}>
                      Impactful websites delivered lightning fast
                    </Balancer>
                  </h1>
                  <p className="md:text-md mx-auto max-w-[600px] select-none font-light leading-8 text-[#525252]  max-sm:text-[0.875rem]">
                    <Balancer ratio={0.8}>
                      DesignPop, your go-to design and development agency
                      offering unbeatable web design and development services
                      through convenient subscription plans.
                    </Balancer>
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <button onClick={() => scrollTo("#services")}>
                      <div className="rounded-[5px] bg-black px-6 py-3 text-sm text-white">
                        Get started
                      </div>
                    </button>
                    <button onClick={() => scrollTo("#how-it-works")}>
                      <div className="rounded-[5px] bg-[#F4F4F5] px-6 py-3 text-sm text-black">
                        How it works
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <BouncingText />
            </Gutter>
          </div>
          {/* <OurServices /> */}
          <DynamicDuoSection />
          <HowItWorks />
          <WhatWeBring />
          <TestimonialQuote
            quote="Working with designpop has been so productive for us founders at Gavel. Their creative excellence and communication keeps things high quality and quick. I can't recommend them enough."
            position="Founder of Gavel GmbH"
            citeUrl="letsgavel.com"
            personsName="Florian Braeuer"
          />
          <WorkCarousel />
          <WorkList />
          {/* <TechStack /> */}
          <PricingSection />
          <FAQs />
          <ContactUs />
        </main>
        <Footer />
        <CircleCursor bgColor="#222" delay={0.2} />
      </div>
    </>
  )
}

export default LandingPage
