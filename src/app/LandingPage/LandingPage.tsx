"use client"

import React from "react"
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

const LandingPage = () => {
  const scrollTo = useScrollTo()

  return (
    <>
      <div
        className="fixed left-2/4 top-0 mx-auto min-h-screen w-full max-w-[2000px] -translate-x-2/4 overflow-x-hidden bg-transparent"
        id="root"
      >
        <Nav />
        <main>
          <Gutter>
            <div className="flex w-full  flex-col items-center justify-center pb-20 xs:h-[50vh] xs:pt-32 md:h-[50vh] md:pt-28">
              <div className="max-w-[750px] text-center">
                <h1 className="mb-8 select-none font-heading  text-black xs:text-4xl sm:text-4xl md:text-6xl">
                  <Balancer ratio={0.8}>
                    Impactful websites delivered lightning fast
                  </Balancer>
                </h1>
                <p className="md:text-md mx-auto max-w-[600px] select-none font-light leading-8 text-[#525252]  max-sm:text-[0.875rem]">
                  <Balancer ratio={0.8}>
                    DesignPop, your go-to design and development agency offering
                    unbeatable web design and development services through
                    convenient subscription plans.
                  </Balancer>
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <button onClick={() => scrollTo("#services")}>
                    <div className="rounded-[5px] bg-black px-6 py-3 text-sm text-white">
                      Get started
                    </div>
                  </button>
                  <button onClick={() => scrollTo("#pricing")}>
                    <div className="rounded-[5px] bg-[#F4F4F5] px-6 py-3 text-sm text-black">
                      How it works
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <BouncingText />
          </Gutter>
          <div className="pt-20" />
          <OurServices />
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
          <TechStack />
          <PricingSection />
          <FAQs />
          <ContactUs />
        </main>
        <Footer />
        <SmoothScroll rootSelector="#root" duration={0.5} />
      </div>
    </>
  )
}

export default LandingPage
