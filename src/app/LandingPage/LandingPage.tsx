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

const LandingPage = () => {
  return (
    <>
      <div
        className="fixed left-2/4 top-0 mx-auto min-h-screen w-full max-w-[2000px] -translate-x-2/4 overflow-x-hidden bg-transparent"
        id="root"
      >
        <Nav />
        <main>
          <Gutter>
            <div className="flex w-full flex-col items-center justify-center pb-20 xs:h-[50vh] xs:pt-32 md:h-[50vh] md:pt-28 ">
              <div className="max-w-[750px] text-center">
                <h1 className="mb-8 font-heading text-black  xs:text-4xl sm:text-4xl md:text-6xl">
                  <Balancer ratio={0.8}>
                    Impactful websites delivered lightning fast
                  </Balancer>
                </h1>
                <p className="md:text-md mx-auto max-w-[600px] font-light leading-8 text-[#525252] max-sm:text-[0.875rem] ">
                  <Balancer ratio={0.8}>
                    DesignPop, your go-to design and development agency offering
                    unbeatable web design and development services through
                    convenient subscription plans.
                  </Balancer>
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <div className="rounded-[5px] bg-black px-6 py-3 text-sm text-white">
                    <a href="#get-started">Get started</a>
                  </div>
                  <div className="rounded-[5px] bg-[#F4F4F5] px-6 py-3 text-sm text-black">
                    <a href="#how-it-works">How it works</a>
                  </div>
                </div>
              </div>
            </div>
            <BouncingText />
          </Gutter>
          <div className="pt-20" />

          <OurServices />
          <DynamicDuoSection />
          <HowItWorks />
          <WorkCarousel />
          <TestimonialQuote
            quote="Working with designpop has been so productive for us founders at ____. Their creative excellence and communication keeps things high quality and quick. I can't recommend them enough."
            position="Founder of blocs.me"
            citeUrl="https://blocs.me"
            personsName="Sarah J"
          />
          <WhatWeBring />
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
