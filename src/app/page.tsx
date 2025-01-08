"use client"

/* eslint-disable @next/next/no-img-element */

import {
  ArrowRight,
  Clock,
  FrownIcon,
  HeartCrack,
  LucidePhoneCall,
  LucideStar
} from "lucide-react"
import GravityBox from "./Landing/GravityBox"
import Accordion from "./Landing/Accordion"
import Carousel from "./Landing/Carousel"
import { AnimatePresence, motion } from "motion/react"
import Technologies from "./Landing/Technologies"
import FadeInOnView from "./Landing/FadeInOnView"
import BlurInOnView from "./Landing/BlurInOnView"
import Testimonials from "./Landing/Testimonials"
import Image from "next/image"
import { ReactLenis } from "lenis/react"
import { useEffect, useState } from "react"

const RollingText = ({ allText = [""], className = "" }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timeout: NodeJS.Timeout = setTimeout(() => {
      setIndex(index === allText.length - 1 ? 0 : index + 1)
    }, 3000)

    return () => {
      clearInterval(timeout)
    }
  }, [index])

  return (
    <AnimatePresence mode="popLayout">
      {/* <motion.span className="inline-block h-fit max-h-fit overflow-hidden"> */}
      <motion.span
        key={index}
        initial={{ y: 40, opacity: 0 }}
        exit={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1.2,
          damping: 15,
          stiffness: 150
        }}
        className={`${className} inline-block align-baseline`}
      >
        {allText[index]}
      </motion.span>
      {/* </motion.span> */}
    </AnimatePresence>
  )
}

export default function Home() {
  return (
    <ReactLenis root>
      <div className="max-w-screen">
        <header>
          <motion.nav
            aria-label="Main navigation"
            className="flex p-1 rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur-[11px] h-[54px] text-white w-fit fixed bottom-20 left-1/2 font-normal -translate-x-1/2 gap-5 max-sm:text-sm text-lg -tracking-[0.02em] z-[10000] shadow-xl"
            initial={{ scaleX: 0, opacity: 0, y: 10, translateX: "-50%" }}
            animate={{ scaleX: 1, opacity: 1, y: 0, translateX: "-50%" }}
            transition={{
              delay: 1,
              duration: 1,
              type: "spring"
            }}
          >
            <button
              className="whitespace-nowrap ml-4"
              aria-label="Scroll to Our Work"
            >
              Our Work
            </button>
            <button
              className="whitespace-nowrap"
              aria-label="Scroll to Services"
            >
              Services
            </button>
            <button
              className="whitespace-nowrap"
              aria-label="Scroll to Services"
            >
              Pricing
            </button>
            <button className="whitespace-nowrap" aria-label="Scroll to FAQ">
              FAQ
            </button>
            <button
              className="whitespace-nowrap p-2 px-4 bg-white text-[rgb(23_23_23)] rounded-full flex items-center justify-center gap-1"
              aria-label="Scroll to Book a 30min call"
            >
              <LucidePhoneCall className="size-4 mr-2 ml-1 -mb-[2px]" />
              Book A Call
            </button>
          </motion.nav>
        </header>
        <main>
          <div className="px-5">
            <div className="mt-5 hidden">
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
              >
                <svg
                  className="w-[150px]"
                  viewBox="0 0 98 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.8122 14.1247C21.9421 14.1247 21.1963 13.9326 20.5748 13.5484C19.9646 13.1642 19.4956 12.6388 19.1679 11.9721C18.8515 11.3054 18.6933 10.5539 18.6933 9.71774C18.6933 8.88154 18.8515 8.13009 19.1679 7.46339C19.4956 6.79668 19.9646 6.27123 20.5748 5.88704C21.1963 5.50284 21.9421 5.31073 22.8122 5.31073C23.4111 5.31073 23.9648 5.45198 24.4733 5.73449C24.9931 6.01699 25.3829 6.38424 25.6428 6.83624V1.93768H26.9988V13.9891H25.6428V12.5823C25.3829 13.0456 24.9931 13.4185 24.4733 13.701C23.9648 13.9835 23.4111 14.1247 22.8122 14.1247ZM22.9308 12.9043C23.4958 12.9043 23.9874 12.7744 24.4055 12.5145C24.8349 12.2546 25.1682 11.8817 25.4055 11.3958C25.6428 10.9099 25.7615 10.3505 25.7615 9.71774C25.7615 8.74594 25.5016 7.97188 24.9818 7.39558C24.4733 6.81928 23.7896 6.53113 22.9308 6.53113C22.3658 6.53113 21.8686 6.66108 21.4392 6.92098C21.0098 7.18089 20.6765 7.55379 20.4392 8.03969C20.2132 8.52559 20.1002 9.08494 20.1002 9.71774C20.1002 10.6895 20.3544 11.4636 20.8629 12.0399C21.3827 12.6162 22.072 12.9043 22.9308 12.9043ZM32.8703 14.1247C32.0567 14.1247 31.3278 13.927 30.6838 13.5315C30.0396 13.136 29.5368 12.5992 29.1752 11.9212C28.8249 11.2319 28.6497 10.4805 28.6497 9.66689C28.6497 8.83069 28.8136 8.08489 29.1413 7.42949C29.4803 6.76279 29.9549 6.24299 30.5651 5.87008C31.1866 5.49718 31.9042 5.31073 32.7178 5.31073C33.5314 5.31073 34.2376 5.48588 34.8365 5.83618C35.4354 6.17518 35.8931 6.64978 36.2095 7.25999C36.5372 7.87019 36.701 8.55384 36.701 9.31094C36.6897 9.50304 36.6784 9.70644 36.6671 9.92114H29.4294V8.81939H35.3111C35.2546 8.09619 34.9947 7.52554 34.5314 7.10744C34.0794 6.67803 33.4749 6.46333 32.7178 6.46333C32.1528 6.46333 31.6668 6.58763 31.26 6.83624C30.8532 7.08484 30.5368 7.45209 30.3108 7.93799C30.0961 8.41259 29.9888 8.98324 29.9888 9.64994C29.9888 10.2714 30.1131 10.8308 30.3617 11.328C30.6103 11.8252 30.9549 12.215 31.3956 12.4975C31.8364 12.78 32.3279 12.9213 32.8703 12.9213C33.5596 12.9213 34.119 12.78 34.5484 12.4975C34.9778 12.2037 35.2603 11.7856 35.3959 11.2432H36.7858C36.6954 11.8195 36.4694 12.328 36.1078 12.7687C35.7575 13.1981 35.3055 13.5315 34.7518 13.7688C34.1981 14.0061 33.5709 14.1247 32.8703 14.1247ZM41.1677 14.1247C40.5123 14.1247 39.936 14.0117 39.4388 13.7857C38.9416 13.5484 38.5461 13.2151 38.2523 12.7857C37.9698 12.3563 37.806 11.8421 37.7608 11.2432H39.0659C39.1224 11.7969 39.3315 12.2207 39.6931 12.5145C40.0547 12.797 40.5462 12.9382 41.1677 12.9382C41.6875 12.9382 42.1113 12.8139 42.439 12.5653C42.778 12.3167 42.9475 12.0116 42.9475 11.65C42.9475 11.2884 42.8514 11.0116 42.6593 10.8195C42.4785 10.6161 42.2469 10.4748 41.9644 10.3957C41.6932 10.3166 41.309 10.2432 40.8118 10.1754C40.2129 10.085 39.7213 9.97764 39.3371 9.85334C38.9642 9.71774 38.6422 9.48609 38.371 9.15839C38.1111 8.81939 37.9811 8.33914 37.9811 7.71764C37.9811 7.23174 38.1054 6.80799 38.354 6.44639C38.6139 6.08478 38.9699 5.80793 39.4219 5.61584C39.8739 5.41243 40.3993 5.31073 40.9982 5.31073C41.6197 5.31073 42.1678 5.41808 42.6424 5.63278C43.1283 5.84748 43.5068 6.15258 43.778 6.54809C44.0605 6.94359 44.2187 7.40124 44.2526 7.92104H42.9475C42.891 7.43514 42.6593 7.07354 42.2525 6.83624C41.857 6.58763 41.4276 6.46333 40.9643 6.46333C40.4671 6.46333 40.066 6.57633 39.7609 6.80233C39.4671 7.01703 39.3202 7.31084 39.3202 7.68374C39.3202 8.00014 39.4049 8.24309 39.5744 8.41259C39.7552 8.58209 39.9699 8.70074 40.2185 8.76854C40.4784 8.83634 40.8457 8.90414 41.3203 8.97194C41.9531 9.06234 42.4672 9.17534 42.8627 9.31094C43.2582 9.43524 43.5972 9.67819 43.8797 10.0398C44.1735 10.4014 44.3204 10.9268 44.3204 11.6161C44.3204 12.1133 44.1905 12.554 43.9306 12.9382C43.6707 13.3224 43.2978 13.6162 42.8119 13.8196C42.3373 14.023 41.7892 14.1247 41.1677 14.1247ZM45.9785 5.44634H47.3345V13.9891H45.9785V5.44634ZM47.4362 1.93768V3.83608H45.8768V1.93768H47.4362ZM50.138 16.2774H54.0873C54.6297 16.2774 55.0761 16.0909 55.4264 15.718C55.788 15.3451 55.9688 14.8762 55.9688 14.3112V12.8026C55.7767 13.1981 55.4151 13.5202 54.884 13.7688C54.3642 14.0061 53.7822 14.1247 53.1381 14.1247C52.268 14.1247 51.5222 13.9326 50.9007 13.5484C50.2905 13.1642 49.8216 12.6388 49.4939 11.9721C49.1775 11.3054 49.0193 10.5539 49.0193 9.71774C49.0193 8.88154 49.1775 8.13009 49.4939 7.46339C49.8216 6.79668 50.2905 6.27123 50.9007 5.88704C51.5222 5.50284 52.268 5.31073 53.1381 5.31073C53.7144 5.31073 54.2625 5.44068 54.7823 5.70058C55.3021 5.96049 55.6976 6.29384 55.9688 6.70064V5.44634H57.3248V14.362C57.3248 14.9609 57.1892 15.492 56.918 15.9553C56.6581 16.4299 56.2852 16.7972 55.7993 17.0571C55.3247 17.317 54.7823 17.4469 54.1721 17.4469H50.138V16.2774ZM53.2568 12.9043C53.8218 12.9043 54.3133 12.7744 54.7314 12.5145C55.1608 12.2546 55.4942 11.8817 55.7315 11.3958C55.9688 10.9099 56.0874 10.3505 56.0874 9.71774C56.0874 8.74594 55.8275 7.97188 55.3077 7.39558C54.7992 6.81928 54.1156 6.53113 53.2568 6.53113C52.6918 6.53113 52.1946 6.66108 51.7652 6.92098C51.3358 7.18089 51.0024 7.55379 50.7651 8.03969C50.5391 8.52559 50.4261 9.08494 50.4261 9.71774C50.4261 10.6895 50.6804 11.4636 51.1889 12.0399C51.7087 12.6162 52.398 12.9043 53.2568 12.9043ZM59.5689 5.44634H60.9249V7.09049C61.1509 6.50289 61.5069 6.06219 61.9928 5.76839C62.49 5.46329 63.0776 5.31073 63.7556 5.31073C64.3884 5.31073 64.9421 5.45763 65.4167 5.75143C65.9026 6.03393 66.2755 6.43508 66.5354 6.95489C66.8066 7.47469 66.9422 8.07924 66.9422 8.76854V13.9891H65.5692V8.98889C65.5692 8.25439 65.3771 7.66679 64.9929 7.22609C64.6087 6.77409 64.0946 6.54809 63.4505 6.54809C62.9646 6.54809 62.5295 6.67239 62.1453 6.92098C61.7611 7.15828 61.4617 7.49164 61.247 7.92104C61.0323 8.35044 60.9249 8.83634 60.9249 9.37874V13.9891H59.5689V5.44634ZM69.0623 5.44634H70.4183V6.85318C70.6782 6.38989 71.068 6.01699 71.5878 5.73449C72.1076 5.45198 72.6726 5.31073 73.2828 5.31073C74.1416 5.31073 74.8761 5.50284 75.4863 5.88704C76.1078 6.27123 76.5768 6.79668 76.8932 7.46339C77.2209 8.13009 77.3847 8.88154 77.3847 9.71774C77.3847 10.5539 77.2209 11.3054 76.8932 11.9721C76.5655 12.6388 76.0909 13.1642 75.4694 13.5484C74.8479 13.9326 74.1021 14.1247 73.232 14.1247C72.6444 14.1247 72.0907 13.9891 71.5709 13.7179C71.0624 13.4354 70.6782 13.0682 70.4183 12.6162V17.4469H69.0623V5.44634ZM73.1472 12.9043C73.7122 12.9043 74.2038 12.7744 74.6219 12.5145C75.0513 12.2546 75.3846 11.8817 75.6219 11.3958C75.8592 10.9099 75.9779 10.3505 75.9779 9.71774C75.9779 8.74594 75.718 7.97188 75.1982 7.39558C74.6897 6.81928 74.0004 6.53113 73.1303 6.53113C72.5653 6.53113 72.0681 6.66108 71.6387 6.92098C71.2206 7.18089 70.8929 7.55379 70.6556 8.03969C70.4183 8.52559 70.2996 9.08494 70.2996 9.71774C70.2996 10.6895 70.5539 11.4636 71.0624 12.0399C71.5822 12.6162 72.2771 12.9043 73.1472 12.9043ZM82.7816 14.1247C81.9567 14.1247 81.2109 13.9383 80.5442 13.5654C79.8775 13.1812 79.3577 12.6557 78.9848 11.989C78.6232 11.3223 78.4424 10.5652 78.4424 9.71774C78.4424 8.87024 78.6232 8.11314 78.9848 7.44644C79.3577 6.77974 79.8775 6.25994 80.5442 5.88704C81.2109 5.50284 81.9567 5.31073 82.7816 5.31073C83.6178 5.31073 84.3636 5.50284 85.019 5.88704C85.6857 6.25994 86.2055 6.77974 86.5784 7.44644C86.9513 8.11314 87.1377 8.87024 87.1377 9.71774C87.1377 10.5652 86.9513 11.3223 86.5784 11.989C86.2055 12.6557 85.6857 13.1812 85.019 13.5654C84.3636 13.9383 83.6178 14.1247 82.7816 14.1247ZM82.7816 12.9043C83.3579 12.9043 83.872 12.7687 84.324 12.4975C84.776 12.2263 85.1207 11.8478 85.358 11.3619C85.6066 10.876 85.7309 10.3279 85.7309 9.71774C85.7309 9.10754 85.6066 8.55949 85.358 8.07359C85.1207 7.58769 84.776 7.20914 84.324 6.93794C83.872 6.66674 83.3579 6.53113 82.7816 6.53113C82.2053 6.53113 81.6911 6.66674 81.2391 6.93794C80.7984 7.20914 80.4538 7.58769 80.2052 8.07359C79.9566 8.55949 79.8323 9.10754 79.8323 9.71774C79.8323 10.3279 79.9566 10.876 80.2052 11.3619C80.4538 11.8478 80.7984 12.2263 81.2391 12.4975C81.6911 12.7687 82.2053 12.9043 82.7816 12.9043ZM88.7772 5.44634H90.1332V6.85318C90.3931 6.38989 90.783 6.01699 91.3028 5.73449C91.8226 5.45198 92.3876 5.31073 92.9978 5.31073C93.8566 5.31073 94.5911 5.50284 95.2013 5.88704C95.8228 6.27123 96.2917 6.79668 96.6081 7.46339C96.9358 8.13009 97.0997 8.88154 97.0997 9.71774C97.0997 10.5539 96.9358 11.3054 96.6081 11.9721C96.2804 12.6388 95.8058 13.1642 95.1843 13.5484C94.5628 13.9326 93.817 14.1247 92.9469 14.1247C92.3593 14.1247 91.8056 13.9891 91.2858 13.7179C90.7773 13.4354 90.3931 13.0682 90.1332 12.6162V17.4469H88.7772V5.44634ZM92.8622 12.9043C93.4272 12.9043 93.9187 12.7744 94.3368 12.5145C94.7662 12.2546 95.0996 11.8817 95.3369 11.3958C95.5742 10.9099 95.6928 10.3505 95.6928 9.71774C95.6928 8.74594 95.4329 7.97188 94.9131 7.39558C94.4046 6.81928 93.7153 6.53113 92.8452 6.53113C92.2802 6.53113 91.783 6.66108 91.3536 6.92098C90.9355 7.18089 90.6078 7.55379 90.3705 8.03969C90.1332 8.52559 90.0146 9.08494 90.0146 9.71774C90.0146 10.6895 90.2688 11.4636 90.7773 12.0399C91.2971 12.6162 91.9921 12.9043 92.8622 12.9043Z"
                    fill="#1F1F1F"
                  />
                  <circle cx="7.21045" cy="9.91345" r="6.771" fill="#2C5FD6" />
                  <circle cx="8.89357" cy="8.23061" r="2.57228" fill="white" />
                </svg>
              </motion.div>
            </div>
            <section className="p-6 bg-[#f6f6f6] rounded-xl border border-[#e9e9e9] mt-5 max-sm:h-fit xl:h-[calc(100vh-2.25rem)] max-w-[1440px] mx-auto relative flex flex-col">
              <svg
                className="w-[150px] absolute top-12 right-1/2 translate-x-1/2"
                viewBox="0 0 98 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8122 14.1247C21.9421 14.1247 21.1963 13.9326 20.5748 13.5484C19.9646 13.1642 19.4956 12.6388 19.1679 11.9721C18.8515 11.3054 18.6933 10.5539 18.6933 9.71774C18.6933 8.88154 18.8515 8.13009 19.1679 7.46339C19.4956 6.79668 19.9646 6.27123 20.5748 5.88704C21.1963 5.50284 21.9421 5.31073 22.8122 5.31073C23.4111 5.31073 23.9648 5.45198 24.4733 5.73449C24.9931 6.01699 25.3829 6.38424 25.6428 6.83624V1.93768H26.9988V13.9891H25.6428V12.5823C25.3829 13.0456 24.9931 13.4185 24.4733 13.701C23.9648 13.9835 23.4111 14.1247 22.8122 14.1247ZM22.9308 12.9043C23.4958 12.9043 23.9874 12.7744 24.4055 12.5145C24.8349 12.2546 25.1682 11.8817 25.4055 11.3958C25.6428 10.9099 25.7615 10.3505 25.7615 9.71774C25.7615 8.74594 25.5016 7.97188 24.9818 7.39558C24.4733 6.81928 23.7896 6.53113 22.9308 6.53113C22.3658 6.53113 21.8686 6.66108 21.4392 6.92098C21.0098 7.18089 20.6765 7.55379 20.4392 8.03969C20.2132 8.52559 20.1002 9.08494 20.1002 9.71774C20.1002 10.6895 20.3544 11.4636 20.8629 12.0399C21.3827 12.6162 22.072 12.9043 22.9308 12.9043ZM32.8703 14.1247C32.0567 14.1247 31.3278 13.927 30.6838 13.5315C30.0396 13.136 29.5368 12.5992 29.1752 11.9212C28.8249 11.2319 28.6497 10.4805 28.6497 9.66689C28.6497 8.83069 28.8136 8.08489 29.1413 7.42949C29.4803 6.76279 29.9549 6.24299 30.5651 5.87008C31.1866 5.49718 31.9042 5.31073 32.7178 5.31073C33.5314 5.31073 34.2376 5.48588 34.8365 5.83618C35.4354 6.17518 35.8931 6.64978 36.2095 7.25999C36.5372 7.87019 36.701 8.55384 36.701 9.31094C36.6897 9.50304 36.6784 9.70644 36.6671 9.92114H29.4294V8.81939H35.3111C35.2546 8.09619 34.9947 7.52554 34.5314 7.10744C34.0794 6.67803 33.4749 6.46333 32.7178 6.46333C32.1528 6.46333 31.6668 6.58763 31.26 6.83624C30.8532 7.08484 30.5368 7.45209 30.3108 7.93799C30.0961 8.41259 29.9888 8.98324 29.9888 9.64994C29.9888 10.2714 30.1131 10.8308 30.3617 11.328C30.6103 11.8252 30.9549 12.215 31.3956 12.4975C31.8364 12.78 32.3279 12.9213 32.8703 12.9213C33.5596 12.9213 34.119 12.78 34.5484 12.4975C34.9778 12.2037 35.2603 11.7856 35.3959 11.2432H36.7858C36.6954 11.8195 36.4694 12.328 36.1078 12.7687C35.7575 13.1981 35.3055 13.5315 34.7518 13.7688C34.1981 14.0061 33.5709 14.1247 32.8703 14.1247ZM41.1677 14.1247C40.5123 14.1247 39.936 14.0117 39.4388 13.7857C38.9416 13.5484 38.5461 13.2151 38.2523 12.7857C37.9698 12.3563 37.806 11.8421 37.7608 11.2432H39.0659C39.1224 11.7969 39.3315 12.2207 39.6931 12.5145C40.0547 12.797 40.5462 12.9382 41.1677 12.9382C41.6875 12.9382 42.1113 12.8139 42.439 12.5653C42.778 12.3167 42.9475 12.0116 42.9475 11.65C42.9475 11.2884 42.8514 11.0116 42.6593 10.8195C42.4785 10.6161 42.2469 10.4748 41.9644 10.3957C41.6932 10.3166 41.309 10.2432 40.8118 10.1754C40.2129 10.085 39.7213 9.97764 39.3371 9.85334C38.9642 9.71774 38.6422 9.48609 38.371 9.15839C38.1111 8.81939 37.9811 8.33914 37.9811 7.71764C37.9811 7.23174 38.1054 6.80799 38.354 6.44639C38.6139 6.08478 38.9699 5.80793 39.4219 5.61584C39.8739 5.41243 40.3993 5.31073 40.9982 5.31073C41.6197 5.31073 42.1678 5.41808 42.6424 5.63278C43.1283 5.84748 43.5068 6.15258 43.778 6.54809C44.0605 6.94359 44.2187 7.40124 44.2526 7.92104H42.9475C42.891 7.43514 42.6593 7.07354 42.2525 6.83624C41.857 6.58763 41.4276 6.46333 40.9643 6.46333C40.4671 6.46333 40.066 6.57633 39.7609 6.80233C39.4671 7.01703 39.3202 7.31084 39.3202 7.68374C39.3202 8.00014 39.4049 8.24309 39.5744 8.41259C39.7552 8.58209 39.9699 8.70074 40.2185 8.76854C40.4784 8.83634 40.8457 8.90414 41.3203 8.97194C41.9531 9.06234 42.4672 9.17534 42.8627 9.31094C43.2582 9.43524 43.5972 9.67819 43.8797 10.0398C44.1735 10.4014 44.3204 10.9268 44.3204 11.6161C44.3204 12.1133 44.1905 12.554 43.9306 12.9382C43.6707 13.3224 43.2978 13.6162 42.8119 13.8196C42.3373 14.023 41.7892 14.1247 41.1677 14.1247ZM45.9785 5.44634H47.3345V13.9891H45.9785V5.44634ZM47.4362 1.93768V3.83608H45.8768V1.93768H47.4362ZM50.138 16.2774H54.0873C54.6297 16.2774 55.0761 16.0909 55.4264 15.718C55.788 15.3451 55.9688 14.8762 55.9688 14.3112V12.8026C55.7767 13.1981 55.4151 13.5202 54.884 13.7688C54.3642 14.0061 53.7822 14.1247 53.1381 14.1247C52.268 14.1247 51.5222 13.9326 50.9007 13.5484C50.2905 13.1642 49.8216 12.6388 49.4939 11.9721C49.1775 11.3054 49.0193 10.5539 49.0193 9.71774C49.0193 8.88154 49.1775 8.13009 49.4939 7.46339C49.8216 6.79668 50.2905 6.27123 50.9007 5.88704C51.5222 5.50284 52.268 5.31073 53.1381 5.31073C53.7144 5.31073 54.2625 5.44068 54.7823 5.70058C55.3021 5.96049 55.6976 6.29384 55.9688 6.70064V5.44634H57.3248V14.362C57.3248 14.9609 57.1892 15.492 56.918 15.9553C56.6581 16.4299 56.2852 16.7972 55.7993 17.0571C55.3247 17.317 54.7823 17.4469 54.1721 17.4469H50.138V16.2774ZM53.2568 12.9043C53.8218 12.9043 54.3133 12.7744 54.7314 12.5145C55.1608 12.2546 55.4942 11.8817 55.7315 11.3958C55.9688 10.9099 56.0874 10.3505 56.0874 9.71774C56.0874 8.74594 55.8275 7.97188 55.3077 7.39558C54.7992 6.81928 54.1156 6.53113 53.2568 6.53113C52.6918 6.53113 52.1946 6.66108 51.7652 6.92098C51.3358 7.18089 51.0024 7.55379 50.7651 8.03969C50.5391 8.52559 50.4261 9.08494 50.4261 9.71774C50.4261 10.6895 50.6804 11.4636 51.1889 12.0399C51.7087 12.6162 52.398 12.9043 53.2568 12.9043ZM59.5689 5.44634H60.9249V7.09049C61.1509 6.50289 61.5069 6.06219 61.9928 5.76839C62.49 5.46329 63.0776 5.31073 63.7556 5.31073C64.3884 5.31073 64.9421 5.45763 65.4167 5.75143C65.9026 6.03393 66.2755 6.43508 66.5354 6.95489C66.8066 7.47469 66.9422 8.07924 66.9422 8.76854V13.9891H65.5692V8.98889C65.5692 8.25439 65.3771 7.66679 64.9929 7.22609C64.6087 6.77409 64.0946 6.54809 63.4505 6.54809C62.9646 6.54809 62.5295 6.67239 62.1453 6.92098C61.7611 7.15828 61.4617 7.49164 61.247 7.92104C61.0323 8.35044 60.9249 8.83634 60.9249 9.37874V13.9891H59.5689V5.44634ZM69.0623 5.44634H70.4183V6.85318C70.6782 6.38989 71.068 6.01699 71.5878 5.73449C72.1076 5.45198 72.6726 5.31073 73.2828 5.31073C74.1416 5.31073 74.8761 5.50284 75.4863 5.88704C76.1078 6.27123 76.5768 6.79668 76.8932 7.46339C77.2209 8.13009 77.3847 8.88154 77.3847 9.71774C77.3847 10.5539 77.2209 11.3054 76.8932 11.9721C76.5655 12.6388 76.0909 13.1642 75.4694 13.5484C74.8479 13.9326 74.1021 14.1247 73.232 14.1247C72.6444 14.1247 72.0907 13.9891 71.5709 13.7179C71.0624 13.4354 70.6782 13.0682 70.4183 12.6162V17.4469H69.0623V5.44634ZM73.1472 12.9043C73.7122 12.9043 74.2038 12.7744 74.6219 12.5145C75.0513 12.2546 75.3846 11.8817 75.6219 11.3958C75.8592 10.9099 75.9779 10.3505 75.9779 9.71774C75.9779 8.74594 75.718 7.97188 75.1982 7.39558C74.6897 6.81928 74.0004 6.53113 73.1303 6.53113C72.5653 6.53113 72.0681 6.66108 71.6387 6.92098C71.2206 7.18089 70.8929 7.55379 70.6556 8.03969C70.4183 8.52559 70.2996 9.08494 70.2996 9.71774C70.2996 10.6895 70.5539 11.4636 71.0624 12.0399C71.5822 12.6162 72.2771 12.9043 73.1472 12.9043ZM82.7816 14.1247C81.9567 14.1247 81.2109 13.9383 80.5442 13.5654C79.8775 13.1812 79.3577 12.6557 78.9848 11.989C78.6232 11.3223 78.4424 10.5652 78.4424 9.71774C78.4424 8.87024 78.6232 8.11314 78.9848 7.44644C79.3577 6.77974 79.8775 6.25994 80.5442 5.88704C81.2109 5.50284 81.9567 5.31073 82.7816 5.31073C83.6178 5.31073 84.3636 5.50284 85.019 5.88704C85.6857 6.25994 86.2055 6.77974 86.5784 7.44644C86.9513 8.11314 87.1377 8.87024 87.1377 9.71774C87.1377 10.5652 86.9513 11.3223 86.5784 11.989C86.2055 12.6557 85.6857 13.1812 85.019 13.5654C84.3636 13.9383 83.6178 14.1247 82.7816 14.1247ZM82.7816 12.9043C83.3579 12.9043 83.872 12.7687 84.324 12.4975C84.776 12.2263 85.1207 11.8478 85.358 11.3619C85.6066 10.876 85.7309 10.3279 85.7309 9.71774C85.7309 9.10754 85.6066 8.55949 85.358 8.07359C85.1207 7.58769 84.776 7.20914 84.324 6.93794C83.872 6.66674 83.3579 6.53113 82.7816 6.53113C82.2053 6.53113 81.6911 6.66674 81.2391 6.93794C80.7984 7.20914 80.4538 7.58769 80.2052 8.07359C79.9566 8.55949 79.8323 9.10754 79.8323 9.71774C79.8323 10.3279 79.9566 10.876 80.2052 11.3619C80.4538 11.8478 80.7984 12.2263 81.2391 12.4975C81.6911 12.7687 82.2053 12.9043 82.7816 12.9043ZM88.7772 5.44634H90.1332V6.85318C90.3931 6.38989 90.783 6.01699 91.3028 5.73449C91.8226 5.45198 92.3876 5.31073 92.9978 5.31073C93.8566 5.31073 94.5911 5.50284 95.2013 5.88704C95.8228 6.27123 96.2917 6.79668 96.6081 7.46339C96.9358 8.13009 97.0997 8.88154 97.0997 9.71774C97.0997 10.5539 96.9358 11.3054 96.6081 11.9721C96.2804 12.6388 95.8058 13.1642 95.1843 13.5484C94.5628 13.9326 93.817 14.1247 92.9469 14.1247C92.3593 14.1247 91.8056 13.9891 91.2858 13.7179C90.7773 13.4354 90.3931 13.0682 90.1332 12.6162V17.4469H88.7772V5.44634ZM92.8622 12.9043C93.4272 12.9043 93.9187 12.7744 94.3368 12.5145C94.7662 12.2546 95.0996 11.8817 95.3369 11.3958C95.5742 10.9099 95.6928 10.3505 95.6928 9.71774C95.6928 8.74594 95.4329 7.97188 94.9131 7.39558C94.4046 6.81928 93.7153 6.53113 92.8452 6.53113C92.2802 6.53113 91.783 6.66108 91.3536 6.92098C90.9355 7.18089 90.6078 7.55379 90.3705 8.03969C90.1332 8.52559 90.0146 9.08494 90.0146 9.71774C90.0146 10.6895 90.2688 11.4636 90.7773 12.0399C91.2971 12.6162 91.9921 12.9043 92.8622 12.9043Z"
                  fill="#1F1F1F"
                />
                <circle cx="7.21045" cy="9.91345" r="6.771" fill="#2C5FD6" />
                <circle cx="8.89357" cy="8.23061" r="2.57228" fill="white" />
              </svg>
              <div className="w-full bg-white rounded-xl flex flex-col py-10 sm:py-16 xl:pt-28 flex-1 px-8 xl:px-16">
                {/* <div className="mt-24" /> */}

                <div className="flex flex-col-reverse">
                  <motion.div
                    // style={{ display: "none" }}
                    className="flex gap-3 items-center mt-8"
                    initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 3,
                      type: "spring"
                    }}
                  >
                    <div className="flex select-none">
                      <div className="size-[45px] rounded-full overflow-hidden">
                        <img
                          alt=""
                          src="/img/sana.png"
                          className="pointer-events-none size-full object-cover saturate-0 relative"
                        />
                      </div>
                      <div className="size-[45px] -ml-[8px] rounded-full overflow-hidden ring-4 ring-white z-1">
                        <img
                          alt=""
                          src="/img/moniet.png"
                          className="pointer-events-none size-full object-cover z-2 relative"
                        />
                      </div>
                    </div>
                    <div className="relative w-full flex">
                      <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-semibold">Sana & Moniet</h2>
                        <p className="text-[#171717]/60 text-sm font-semibold">
                          Web Design, Mobile App Design, Full-Stack Development
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.h1
                  initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  layout
                  transition={{
                    duration: 3,
                    type: "spring",
                    delay: 0.2
                  }}
                  className="text-zinc-950 -tracking-[0.02em] text-2xl sm:text-4xl lg:text-5xl xl:text-7xl mt-12 lg:mt-10 leading-[1.5] font-medium cursor-default "
                >
                  <motion.span layout className="inline-block align-baseline">
                    In 2 weeks, launch your
                  </motion.span>{" "}
                  <RollingText
                    allText={[
                      "MVP.",
                      "AI App.",
                      "Web App.",
                      "Website.",
                      "Mobile-App.",
                      "CMS Site.",
                      "Extension.",
                      "Desktop App."
                    ]}
                    className="text-zinc-400"
                  />{" "}
                  <br />
                  <motion.span layout="position">
                    We help startups turn their ideas
                  </motion.span>
                  <br />
                  <motion.span layout="position">
                    into world-class apps.
                  </motion.span>
                  {/* Helping <span className="text-zinc-500">startups</span> launch
                  fast and <br className="max-sm:hidden" />
                  look world-class. <br />
                  Launch your <span className="text-zinc-500">
                    idea
                  </span> in{" "}
                  <span className="inline-block relative ">2 weeks.</span> */}
                </motion.h1>
                <div className="flex flex-col w-fit">
                  {/* <motion.div
                    initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1, type: "spring", delay: 0.4 },
                      filter: "blur(0px)"
                    }}
                    className="flex p-1 px-2 rounded-full bg-zinc-100 items-center w-fit mt-10"
                  >
                    <LucideStar
                      className="size-3 stroke-none fill-zinc-800"
                      r={5}
                    />
                    <LucideStar
                      className="size-3 stroke-none fill-zinc-800"
                      r={5}
                    />
                    <LucideStar
                      className="size-3 stroke-none fill-zinc-800"
                      r={5}
                    />
                    <LucideStar
                      className="size-3 stroke-none fill-zinc-800"
                      r={5}
                    />
                    <LucideStar
                      className="size-3 stroke-none fill-zinc-800"
                      r={5}
                    />
                    <p className="ml-2 text-xs font-medium">
                      Customers from 5+ countries
                    </p>
                  </motion.div> */}
                  <motion.div
                    className="mt-7"
                    initial={{
                      y: 20,
                      opacity: 0,
                      filter: "blur(10px)",
                      height: 0
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      height: 80,
                      transition: { duration: 1, type: "spring", delay: 0.6 },
                      filter: "blur(0px)"
                    }}
                  >
                    <p className="text-sm tracking-normal lg:text-base max-w-[700px] min-h-fit">
                      We build web apps, landing pages, and mobile app MVPs with
                      a record delivery time of 2-weeks.
                      <br />
                      With experience creating software for startups from
                      YCombinator, you can rest assured of our high quality
                      output.
                    </p>
                  </motion.div>
                </div>
                {/* <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  delay: 0.1
                }}
                className="flex gap-3 items-center justify-start flex-wrap mt-5 xl:mt-10 text-[8px] sm:text-xs xl:text-base text-[#535353]"
              >
                <div className="py-2 px-3 rounded-full bg-[rgba(0,0,0,0.04)] text-center cursor-default">
                  Website Design
                </div>
                <div className="py-2 px-3 rounded-full bg-[rgba(0,0,0,0.04)] text-center cursor-default">
                  Development
                </div>
                <div className="py-2 px-3 rounded-full bg-[rgba(0,0,0,0.04)] text-center cursor-default">
                  MVP
                </div>
                <div className="py-2 px-3 rounded-full bg-[rgba(0,0,0,0.04)] text-center cursor-default">
                  CMS Integration
                </div>
                <div className="py-2 px-3 rounded-full bg-[rgba(0,0,0,0.04)] text-center cursor-default">
                  AI Web Apps
                </div>
                <div className="py-2 px-3 rounded-full bg-[rgba(0,0,0,0.04)] text-center cursor-default">
                  pSEO
                </div>
              </motion.div> */}
                <div className="mt-5 xl:mt-8 flex max-sm:flex-col max-sm:mt-12">
                  <div className="flex flex-wrap">
                    <motion.a
                      className="px-[2px] py-[3px] pl-8 h-[50px] text-xs xl:text-base bg-[rgb(42,41,255)] rounded-full text-center text-white w-fit mr-3 flex items-center justify-between whitespace-nowrap max-h-fit"
                      href="#"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.9,
                        filter: "blur(10px)",
                        type: "spring"
                      }}
                    >
                      <div className="font-medium mr-5 captialize">
                        Book a call
                      </div>
                      <div className="size-[45px] bg-white  rounded-full text-[rgb(42,41,255)] flex">
                        <div className="m-auto -rotate-45">
                          <ArrowRight className="size-[18px]" strokeWidth={2} />
                        </div>
                      </div>
                    </motion.a>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1,
                        delay: 1.2,
                        filter: "blur(0px)",
                        type: "spring"
                      }}
                      className="bg-[rgba(0,0,0,0.0)] h-[50px] rounded-full flex items-center justify-center"
                    >
                      <div className="flex border border-[#e8e8e8]/0 p-2 rounded-full h-fit w-fit">
                        <div className="flex items-center text-sm">
                          <div className="bg-green-300 size-2 rounded-full mr-2 animate-pulse" />
                          <div className="font-semibold">3 slots left </div>{" "}
                          <div className="text-[#1f1f1f]/70 font-semibold ml-1">
                            {"  "}for{" "}
                            {Intl.DateTimeFormat("en-US", {
                              month: "long"
                            }).format(new Date())}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <Carousel />

          <div className="flex max-w-[1440px] xl:px-20  md:px-20 px-5 w-full mx-auto flex-col gap-32 lg:gap-40 xl:gap-48 bg-white">
            {/* <section>
            <Technologies />
          </section> */}
            <div className="sm:mt-30 mt-20 lg:mt-10" />

            <section>
              <div className="row-span-2 flex justify-center">
                <FadeInOnView>
                  <div className="flex flex-col items-center">
                    <div className="text-[rgb(42,41,255)] border shadow-sm border-[#FFEEEE] ring-2 ring-inset ring-[rgb(42,41,255)]/5 rounded-full px-4 py-2 text-xs xl:text-sm font-medium">
                      The Problem
                    </div>
                    <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center mt-5 font-medium">
                      Your idea stuck in limbo, and you&#39;re <br /> unsure how
                      to bring it to life
                    </h2>
                  </div>
                </FadeInOnView>
              </div>
              <div className="justify-between max-lg:items-center items-start max-md:flex-col mt-16 sm:mt-20 lg:mt-28 grid grid-cols-2 gap-5 place-items-center max-w-[800px] mx-auto">
                <BlurInOnView className="col-span-2 w-full bg-[#f6f6f6]/0 border-[#e8e8e8] border rounded-xl">
                  <div className="flex flex-col gap-3 lg:gap-5 w-full text-left p-5 py-8  rounded-lg">
                    <div className="bg-[rgb(42,41,255)] rounded-md flex size-[40px] mx-auto ">
                      <Clock className="size-4 m-auto text-white" />
                    </div>
                    <h3 className="text-lg xl:text-xl font-medium text-center mx-auto  max-w-[400px]">
                      You&#39;ve been told that quality design and development
                      take forever
                    </h3>
                    <p className="text-sm xl:text-base text-zinc-500 text-center">
                      Long timelines and sky-high costs make launching feel like
                      an uphill battle.
                    </p>
                  </div>
                </BlurInOnView>
                <BlurInOnView
                  delay={0.1}
                  className="h-full bg-[#f6f6f6]/0 border-[#e8e8e8] border rounded-xl"
                >
                  <div className="flex flex-col gap-3 lg:gap-5 w-full text-left p-5 py-8  rounded-lg h-full">
                    <div className="bg-[rgb(42,41,255)] rounded-md flex size-[40px] mx-auto">
                      <FrownIcon className="size-4 m-auto text-white" />
                    </div>
                    <h3 className="text-lg xl:text-xl font-medium text-center">
                      Your team is already stretched thin
                    </h3>
                    <p className="text-sm xl:text-base text-zinc-500 text-center">
                      Coordinating with multiple vendors or managing a scattered
                      process takes time and energy your team doesn’t have.
                    </p>
                  </div>
                </BlurInOnView>
                <BlurInOnView
                  delay={0.2}
                  className="h-full bg-[#f6f6f6]/0 border-[#e8e8e8] border rounded-xl"
                >
                  <div className="flex flex-col gap-3 lg:gap-5 w-full text-left p-5 py-8  rounded-lg h-full">
                    <div className="bg-[rgb(42,41,255)] rounded-md flex size-[40px] mx-auto ">
                      <HeartCrack className="size-4 m-auto text-white" />
                    </div>
                    <h3 className="text-lg xl:text-xl font-medium headline text-center">
                      Uncertainty Costs You More Than Money
                    </h3>
                    <p className="text-sm xl:text-base text-zinc-500 text-center">
                      Lack of clarity on timelines, budgets, and deliverables
                      adds stress and makes it harder to plan your next move.
                    </p>
                  </div>
                </BlurInOnView>
              </div>
            </section>
            <section>
              <FadeInOnView>
                <div className="flex flex-col items-center">
                  <div className="text-green-400 border border-green-400/20 shadow-sm ring-inset ring-green-50/50  ring-2 rounded-full px-4 py-2 text-xs xl:text-base font-medium">
                    Our Solution
                  </div>
                  <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center mt-5 font-semibold mb-16">
                    Crafting a scalable product, <br />
                    not just launching an MVP.
                  </h2>
                </div>
              </FadeInOnView>

              <div className="flex gap-14 justify-center items-start flex-wrap">
                <BlurInOnView>
                  <div className="flex flex-col w-full max-w-[500px] max-sm:items-center justify-center md:w-fit">
                    <div className="bg-zinc-50 rounded-xl overflow-hidden flex max-w-[500px] w-full h-full aspect-[1.2] border border-zinc-100">
                      <Image
                        src="/img/kanban-processs-illustration.png"
                        alt=""
                        className="object-cover size-full"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="w-full max-w-[500px]">
                      <h3 className="text-base xl:text-lg font-medium headline mt-4 mb-2 max-w-[500px] mx-auto text-left">
                        Launch in 2 weeks
                      </h3>
                      <p className="text-sm xl:text-base pr-5 text-zinc-500 max-w-[400px]">
                        Long timelines and sky-high costs make launching feel
                        like an uphill battle.
                      </p>
                    </div>
                  </div>
                </BlurInOnView>

                <BlurInOnView delay={0.1}>
                  <div className="flex flex-col w-full max-w-[500px] max-sm:items-center justify-center md:w-fit">
                    <div className="bg-zinc-50 rounded-xl overflow-hidden flex max-w-[500px] w-full h-full aspect-[1.2] border border-zinc-100">
                      <Image
                        src="/img/lighthouse-score.jpg"
                        alt=""
                        className="object-cover size-full"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="w-full max-w-[500px] mx-auto">
                      <h3 className="text-base xl:text-lg font-medium headline mt-4 mb-2 max-w-[500px] mx-auto text-left">
                        Future-Proof Development
                      </h3>
                      <p className="text-sm xl:text-base pr-5 text-zinc-500 max-w-[400px]">
                        Every feature we build is designed with scalability in
                        mind, so you can add more functionality without major
                        overhauls.
                      </p>
                    </div>
                  </div>
                </BlurInOnView>
                <BlurInOnView delay={0.2}>
                  <div className="flex flex-col w-full max-w-[500px] max-sm:items-center justify-center md:w-fit">
                    <div className="bg-zinc-50 rounded-xl overflow-hidden flex max-w-[500px] w-full h-full aspect-[1.2] border border-zinc-100">
                      <Image
                        src="/img/collaboration-illustration.png"
                        alt=""
                        className="object-cover size-full"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="w-full max-w-[500px] mx-auto">
                      <h3 className="text-base xl:text-lg font-medium headline mt-4 mb-2 max-w-[500px] mx-auto text-left">
                        Results-Driven Design
                      </h3>
                      <p className="text-sm xl:text-base pr-5 text-zinc-500 max-w-[400px]">
                        We create products that attract users and impress
                        investors, ensuring your business is designed to drive
                        results from day one.
                      </p>
                    </div>
                  </div>
                </BlurInOnView>
              </div>
            </section>
            <section>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="w-full aspect-[1.2] rounded-lg overflow-hidden bg-zinc-100">
                  <Image
                    width={1000}
                    height={1000}
                    src="/img/project%20tile-1.jpg"
                    alt=""
                    className="size-full object-cover border-none outline-none"
                  />
                </div>
                <div className="w-full aspect-[1.2] rounded-lg overflow-hidden bg-zinc-100">
                  <Image
                    width={1000}
                    height={1000}
                    src="/img/project tile-2.jpg"
                    alt=""
                    className="size-full object-cover border-none outline-none"
                  />
                </div>
                <div className="w-full aspect-[1.2] rounded-lg overflow-hidden bg-zinc-100">
                  <Image
                    width={1000}
                    height={1000}
                    src="/img/project tile-3.jpg"
                    alt=""
                    className="size-full object-cover border-none outline-none"
                  />
                </div>
                <div className="w-full aspect-[1.2] rounded-lg overflow-hidden bg-zinc-100">
                  <Image
                    width={1000}
                    height={1000}
                    src="/img/project tile-4.jpg"
                    alt=""
                    className="size-full object-cover border-none outline-none"
                  />
                </div>
                <div className="w-full aspect-[1.2] rounded-lg overflow-hidden bg-zinc-100">
                  <Image
                    width={1000}
                    height={1000}
                    src="/img/project tile.jpg"
                    alt=""
                    className="size-full object-cover border-none outline-none"
                  />
                </div>
                <div className="w-full aspect-[1.2] rounded-lg overflow-hidden bg-zinc-100">
                  {/* <Image
                  width={1000}
                  height={1000}
                  src=""
                  alt=""
                  className="size-full object-cover border-none outline-none"
                /> */}
                </div>
              </div>
            </section>

            <section>
              <Testimonials />
            </section>
            <GravityBox />
            <section>
              <div className="flex flex-col items-center">
                <FadeInOnView>
                  <div className="text-zinc-900 border ring-2 w-fit mx-auto ring-inset ring-zinc-100/50 border-zinc-400/20 shadow-sm rounded-full px-4 py-1 text-xs xl:text-base font-medium">
                    Pricing
                  </div>
                  <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center mt-5 font-semibold mb-16">
                    Simple Pricing, Big Results
                  </h2>
                </FadeInOnView>

                <div className="flex justify-center gap-6 w-full flex-wrap">
                  <article className="flex-1 min-w-[300px] max-w-[500px]">
                    <BlurInOnView
                      className="rounded-[18px] border border-[#E5E7EB] bg-[#FAFAFA]"
                      threshold={0.5}
                    >
                      <div className="p-5 pb-8">
                        <h1 className="text-lg font-medium headline">
                          One-off
                        </h1>
                        <p className="text-sm text-[#757575] !mt-3">
                          High converting landing or waitlist page
                        </p>
                      </div>
                      <div className="border-t border-t-[#E5E7EB] w-full" />
                      <div className="p-5">
                        <h2 className="font-medium text-2xl headline mb-5">
                          $1,190{" "}
                          {/* <span className="text-base text-[#757575]">/ month</span> */}
                        </h2>
                        <a className="px-5 py-3 font-medium border border-[#CFCFCF] rounded-full flex items-center text-center justify-center">
                          Book a call
                        </a>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base text-[#757575]">Features</h3>
                        <ul className="list-disc text-[#5c5c5c] pl-8 mt-3 space-y-2">
                          <li>Launch-ready website design</li>
                          <li>Launch-ready website design</li>
                          <li>Fixed pricing with no hidden fees</li>
                          <li>1 month support post launch</li>
                          <li>Delivery in just 2 weeks</li>
                        </ul>
                      </div>
                      <div className="border-t border-t-[#E5E7EB] w-full mb-12" />
                    </BlurInOnView>
                  </article>
                  <article className="flex-1 min-w-[300px] max-w-[500px]">
                    <BlurInOnView
                      delay={0.2}
                      className="rounded-[18px]  border border-[#E5E7EB] bg-[#FAFAFA]"
                      threshold={0.5}
                    >
                      <div className="p-5 pb-8">
                        <h1 className="text-lg font-medium headline">
                          Monthly, Design & Development
                        </h1>
                        <p className="text-sm text-[#757575] !mt-3">
                          Design & development work on a monthly basis
                        </p>
                      </div>
                      <div className="border-t border-t-[#E5E7EB] w-full" />
                      <div className="p-5">
                        <h2 className="font-medium text-2xl headline mb-5">
                          $6,490{" "}
                          <span className="text-base text-[#757575]">
                            / month
                          </span>
                        </h2>
                        <a className="px-5 py-3 font-medium bg-[rgb(42_41_255)] rounded-full text-white flex items-center text-center justify-center">
                          Book a call
                        </a>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base text-[#757575]">Features</h3>
                        <ul className="list-disc text-[#5c5c5c] pl-8 mt-3 space-y-2">
                          <li>Launch-ready MVP or website design</li>
                          <li>Fixed pricing with no hidden fees</li>
                          <li>Fixed pricing with no hidden fees</li>
                          <li>1 month support post launch</li>
                          <li>Delivery in just 2 weeks</li>
                        </ul>
                      </div>
                      <div className="border-t border-t-[#E5E7EB] w-full mb-12" />
                    </BlurInOnView>
                  </article>
                </div>
              </div>
            </section>
            <section>
              <div className="p-5 pb-8">
                <div className="text-zinc-900  w-fit  mx-auto border ring-2 ring-inset ring-zinc-100/50 border-zinc-400/20 shadow-sm rounded-full px-4 py-1 text-xs xl:text-base font-medium">
                  FAQs
                </div>
                <h2 className="text-2xl sm:text-3xl xl:text-4xl text-center mt-5 font-semibold mb-16">
                  Got Questions, We&#39;ve Got Answers
                </h2>
                <div className="space-y-4">
                  {" "}
                  <Accordion title="What are your pricing options?">
                    {" "}
                    We offer two main categories: Landing Pages:
                    <ul>
                      <li>• Design Only: $790 </li>
                      <li>• Design + Development: $1,580 </li>
                      <li>• Framer Version: $500 </li>
                      <li>• Design Delivery: 48 hours MVP Development: </li>
                      <li>
                        • Simple MVP: $1,950 (2 weeks delivery, 3 months
                        support){" "}
                      </li>
                      <li>
                        • Complex MVP: $3,950 (One month delivery, 6 months
                        support)
                      </li>
                    </ul>
                  </Accordion>{" "}
                  <Accordion title="What's included in each package?">
                    {" "}
                    <ul>
                      <li>
                        <strong>Landing Page Design ($790):</strong>
                      </li>
                      <li>Custom design tailored to your brand </li>
                      <li>Mobile-responsive</li>
                      layouts
                      <li>Design files in preferred format </li>
                      <li>2 rounds of revisions</li>
                      <strong>48-hour delivery Simple MVP ($1,950):</strong>
                      <li>Basic functionality </li>
                      <li>2-3 core features </li>
                      <li>2 weeks delivery</li>
                    </ul>
                    - 3 months support Complex MVP ($3,950): - Advanced
                    functionality - 4+ core features - One month delivery - 6
                    months support
                  </Accordion>{" "}
                  <Accordion title="What is your tech stack?">
                    {" "}
                    We use modern, industry-standard technologies including: -
                    React/Next.js - Node.js - MongoDB - AWS/Digital Ocean
                    Specific tech stack can be discussed based on your project
                    requirements.{" "}
                  </Accordion>{" "}
                  <Accordion title="Can I opt for design only?">
                    {" "}
                    Yes! We offer design-only services for landing pages at
                    $790, which includes: - Custom design tailored to your brand
                    - Mobile-responsive layouts - Design files in preferred
                    format - 2 rounds of revisions - 48-hour delivery{" "}
                  </Accordion>{" "}
                  <Accordion title="What's your payment structure?">
                    {" "}
                    We typically require: - 50% upfront to begin work - 50% upon
                    completion For MVP projects, we can arrange milestone-based
                    payments.{" "}
                  </Accordion>{" "}
                  <Accordion title="Will you maintain the app after delivery?">
                    {" "}
                    Yes! Support is included in all packages: - Simple MVP
                    includes 3 months support - Complex MVP includes 6 months
                    support Support covers: - Bug fixes - Minor updates -
                    Technical assistance - Regular maintenance Extended support
                    packages are available after the initial period.
                  </Accordion>{" "}
                  <Accordion title="How do we get started?">
                    {" "}
                    The process is simple: 1. Schedule a consultation 2. Receive
                    a proposal 3. Sign contract 4. Make initial payment 5. Begin
                    project We can typically start: - Landing Pages: Within
                    24-48 hours - MVPs: Within one week of contract signing
                  </Accordion>{" "}
                  <Accordion title="Do I own the source code?">
                    {" "}
                    Yes, upon final payment, you receive full ownership of all
                    source code and design files.{" "}
                  </Accordion>{" "}
                </div>
              </div>
            </section>
            <section>
              <div className="p-5 flex items-center flex-col">
                <h2 className="font-medium text-2xl sm:text-3xl xl:text-4xl headline mb-5">
                  Your idea deserves the best
                </h2>
                <a className="px-5 py-3 w-full max-w-[300px] font-medium bg-[rgb(42, 41, 255)] rounded-full text-white flex items-center text-center justify-center">
                  Book a free intro call
                </a>
              </div>
            </section>
          </div>
        </main>
        <div className="2xl:p-0  md:px-20 px-5 max-w-[1400px] mt-48">
          <footer className="border-t border-t-zinc-100 py-7 w-full mx-auto flex justify-between items-center">
            <div>
              <div className="w-[100px] h-auto mb-2">
                <svg
                  viewBox="0 0 113 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.48965 16.0619C5.46569 16.0619 4.58802 15.8359 3.85662 15.3837C3.13852 14.9316 2.58664 14.3132 2.20099 13.5286C1.82865 12.744 1.64247 11.8597 1.64247 10.8756C1.64247 9.89157 1.82865 9.00725 2.20099 8.22265C2.58664 7.43806 3.13852 6.8197 3.85662 6.36756C4.58802 5.91542 5.46569 5.68935 6.48965 5.68935C7.19446 5.68935 7.84607 5.85558 8.44448 6.18803C9.0562 6.52049 9.51499 6.95268 9.82084 7.48461V1.71985H11.4166V15.9023H9.82084V14.2467C9.51499 14.7919 9.0562 15.2308 8.44448 15.5632C7.84607 15.8957 7.19446 16.0619 6.48965 16.0619ZM6.62928 14.6257C7.29419 14.6257 7.87266 14.4728 8.36469 14.1669C8.87002 13.8611 9.26232 13.4222 9.54158 12.8504C9.82084 12.2786 9.96047 11.6203 9.96047 10.8756C9.96047 9.732 9.65462 8.82107 9.0429 8.14286C8.44448 7.46466 7.63994 7.12555 6.62928 7.12555C5.96438 7.12555 5.37926 7.27848 4.87393 7.58434C4.3686 7.8902 3.9763 8.32904 3.69704 8.90086C3.43108 9.47268 3.29809 10.1309 3.29809 10.8756C3.29809 12.0193 3.5973 12.9302 4.19572 13.6084C4.80744 14.2866 5.61862 14.6257 6.62928 14.6257ZM20.5205 16.0619C19.563 16.0619 18.7053 15.8292 17.9473 15.3638C17.1893 14.8983 16.5976 14.2667 16.172 13.4688C15.7598 12.6576 15.5537 11.7733 15.5537 10.8158C15.5537 9.83173 15.7465 8.95405 16.1321 8.18276C16.5311 7.39817 17.0896 6.78645 17.8077 6.34761C18.5391 5.90877 19.3835 5.68935 20.341 5.68935C21.2985 5.68935 22.1296 5.89547 22.8344 6.30772C23.5392 6.70666 24.0778 7.26519 24.4501 7.98329C24.8358 8.70139 25.0286 9.50593 25.0286 10.3969C25.0153 10.623 25.002 10.8623 24.9887 11.115H16.4712V9.81843H23.3929C23.3264 8.96735 23.0206 8.29579 22.4753 7.80376C21.9434 7.29843 21.232 7.04577 20.341 7.04577C19.6761 7.04577 19.1043 7.19205 18.6255 7.48461C18.1468 7.77717 17.7744 8.20936 17.5085 8.78118C17.2558 9.3397 17.1295 10.0113 17.1295 10.7958C17.1295 11.5272 17.2758 12.1855 17.5683 12.7706C17.8609 13.3557 18.2665 13.8145 18.7851 14.147C19.3037 14.4794 19.8822 14.6457 20.5205 14.6457C21.3317 14.6457 21.99 14.4794 22.4953 14.147C23.0006 13.8012 23.3331 13.3092 23.4927 12.6709H25.1283C25.0219 13.3491 24.756 13.9475 24.3304 14.4661C23.9182 14.9715 23.3863 15.3638 22.7347 15.643C22.083 15.9223 21.345 16.0619 20.5205 16.0619ZM32.4794 16.0619C31.7081 16.0619 31.0299 15.9289 30.4447 15.663C29.8596 15.3837 29.3942 14.9914 29.0484 14.4861C28.716 13.9808 28.5232 13.3757 28.47 12.6709H30.0059C30.0724 13.3225 30.3184 13.8212 30.7439 14.1669C31.1695 14.4994 31.748 14.6656 32.4794 14.6656C33.0911 14.6656 33.5898 14.5193 33.9754 14.2268C34.3743 13.9342 34.5738 13.5752 34.5738 13.1496C34.5738 12.7241 34.4608 12.3983 34.2347 12.1722C34.0219 11.9328 33.7493 11.7666 33.4169 11.6735C33.0977 11.5804 32.6456 11.494 32.0605 11.4142C31.3557 11.3078 30.7772 11.1815 30.3251 11.0352C29.8862 10.8756 29.5072 10.603 29.1881 10.2174C28.8822 9.81843 28.7293 9.25326 28.7293 8.52186C28.7293 7.95004 28.8756 7.45136 29.1681 7.02582C29.474 6.60028 29.8929 6.27447 30.4248 6.0484C30.9567 5.80904 31.5751 5.68935 32.2799 5.68935C33.0113 5.68935 33.6562 5.81569 34.2148 6.06835C34.7866 6.32102 35.2321 6.68007 35.5512 7.1455C35.8837 7.61094 36.0699 8.14951 36.1098 8.76123H34.5738C34.5073 8.18941 34.2347 7.76387 33.756 7.48461C33.2905 7.19205 32.7852 7.04577 32.24 7.04577C31.6549 7.04577 31.1828 7.17875 30.8237 7.44471C30.478 7.69738 30.3051 8.04313 30.3051 8.48197C30.3051 8.85432 30.4048 9.14023 30.6043 9.3397C30.8171 9.53917 31.0698 9.6788 31.3623 9.75859C31.6682 9.83838 32.1004 9.91817 32.6589 9.99796C33.4036 10.1043 34.0086 10.2373 34.4741 10.3969C34.9395 10.5432 35.3385 10.8291 35.6709 11.2546C36.0167 11.6802 36.1895 12.2985 36.1895 13.1097C36.1895 13.6948 36.0366 14.2135 35.7308 14.6656C35.4249 15.1178 34.9861 15.4635 34.4142 15.7029C33.8557 15.9422 33.2108 16.0619 32.4794 16.0619ZM40.335 5.84893H41.9308V15.9023H40.335V5.84893ZM42.0505 1.71985V3.95394H40.2153V1.71985H42.0505ZM47.4242 18.5952H52.0719C52.7102 18.5952 53.2355 18.3758 53.6477 17.937C54.0733 17.4981 54.2861 16.9462 54.2861 16.2813V14.506C54.06 14.9715 53.6345 15.3505 53.0094 15.643C52.3977 15.9223 51.7129 16.0619 50.9549 16.0619C49.9309 16.0619 49.0532 15.8359 48.3218 15.3837C47.6037 14.9316 47.0519 14.3132 46.6662 13.5286C46.2939 12.744 46.1077 11.8597 46.1077 10.8756C46.1077 9.89157 46.2939 9.00725 46.6662 8.22265C47.0519 7.43806 47.6037 6.8197 48.3218 6.36756C49.0532 5.91542 49.9309 5.68935 50.9549 5.68935C51.6331 5.68935 52.278 5.84228 52.8898 6.14814C53.5015 6.454 53.9669 6.84629 54.2861 7.32503V5.84893H55.8818V16.3412C55.8818 17.046 55.7223 17.671 55.4031 18.2162C55.0972 18.7747 54.6584 19.2069 54.0866 19.5128C53.5281 19.8187 52.8898 19.9716 52.1717 19.9716H47.4242V18.5952ZM51.0945 14.6257C51.7594 14.6257 52.3379 14.4728 52.8299 14.1669C53.3352 13.8611 53.7275 13.4222 54.0068 12.8504C54.2861 12.2786 54.4257 11.6203 54.4257 10.8756C54.4257 9.732 54.1198 8.82107 53.5081 8.14286C52.9097 7.46466 52.1052 7.12555 51.0945 7.12555C50.4296 7.12555 49.8445 7.27848 49.3391 7.58434C48.8338 7.8902 48.4415 8.32904 48.1623 8.90086C47.8963 9.47268 47.7633 10.1309 47.7633 10.8756C47.7633 12.0193 48.0625 12.9302 48.6609 13.6084C49.2727 14.2866 50.0838 14.6257 51.0945 14.6257ZM60.717 5.84893H62.3128V7.78381C62.5788 7.09231 62.9977 6.57368 63.5695 6.22793C64.1546 5.86888 64.8461 5.68935 65.644 5.68935C66.3887 5.68935 67.0403 5.86223 67.5988 6.20798C68.1706 6.54044 68.6095 7.01252 68.9153 7.62424C69.2345 8.23595 69.3941 8.9474 69.3941 9.75859V15.9023H67.7783V10.0179C67.7783 9.15353 67.5523 8.46202 67.1001 7.94339C66.648 7.41147 66.0429 7.1455 65.2849 7.1455C64.7131 7.1455 64.2011 7.29178 63.749 7.58434C63.2969 7.8636 62.9445 8.2559 62.6918 8.76123C62.4391 9.26656 62.3128 9.83838 62.3128 10.4767V15.9023H60.717V5.84893ZM74.0832 5.84893H75.679V7.50455C75.9849 6.95933 76.4437 6.52049 77.0554 6.18803C77.6671 5.85558 78.332 5.68935 79.0501 5.68935C80.0608 5.68935 80.9251 5.91542 81.6432 6.36756C82.3746 6.8197 82.9265 7.43806 83.2989 8.22265C83.6845 9.00725 83.8773 9.89157 83.8773 10.8756C83.8773 11.8597 83.6845 12.744 83.2989 13.5286C82.9132 14.3132 82.3547 14.9316 81.6233 15.3837C80.8919 15.8359 80.0142 16.0619 78.9903 16.0619C78.2988 16.0619 77.6471 15.9023 77.0354 15.5832C76.437 15.2507 75.9849 14.8185 75.679 14.2866V19.9716H74.0832V5.84893ZM78.8905 14.6257C79.5554 14.6257 80.1339 14.4728 80.6259 14.1669C81.1313 13.8611 81.5236 13.4222 81.8028 12.8504C82.0821 12.2786 82.2217 11.6203 82.2217 10.8756C82.2217 9.732 81.9159 8.82107 81.3041 8.14286C80.7057 7.46466 79.8945 7.12555 78.8706 7.12555C78.2057 7.12555 77.6205 7.27848 77.1152 7.58434C76.6232 7.8902 76.2375 8.32904 75.9583 8.90086C75.679 9.47268 75.5394 10.1309 75.5394 10.8756C75.5394 12.0193 75.8386 12.9302 76.437 13.6084C77.0487 14.2866 77.8666 14.6257 78.8905 14.6257Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M101.383 5.84893H102.979V7.50455C103.285 6.95933 103.744 6.52049 104.355 6.18803C104.967 5.85558 105.632 5.68935 106.35 5.68935C107.361 5.68935 108.225 5.91542 108.943 6.36756C109.675 6.8197 110.226 7.43806 110.599 8.22265C110.984 9.00725 111.177 9.89157 111.177 10.8756C111.177 11.8597 110.984 12.744 110.599 13.5286C110.213 14.3132 109.655 14.9316 108.923 15.3837C108.192 15.8359 107.314 16.0619 106.29 16.0619C105.599 16.0619 104.947 15.9023 104.335 15.5832C103.737 15.2507 103.285 14.8185 102.979 14.2866V19.9716H101.383V5.84893ZM106.19 14.6257C106.855 14.6257 107.434 14.4728 107.926 14.1669C108.431 13.8611 108.824 13.4222 109.103 12.8504C109.382 12.2786 109.522 11.6203 109.522 10.8756C109.522 9.732 109.216 8.82107 108.604 8.14286C108.006 7.46466 107.194 7.12555 106.171 7.12555C105.506 7.12555 104.92 7.27848 104.415 7.58434C103.923 7.8902 103.537 8.32904 103.258 8.90086C102.979 9.47268 102.839 10.1309 102.839 10.8756C102.839 12.0193 103.139 12.9302 103.737 13.6084C104.349 14.2866 105.167 14.6257 106.19 14.6257Z"
                    fill="#1A1A1A"
                  />
                  <circle
                    cx="92.6225"
                    cy="10.1889"
                    r="4.19019"
                    stroke="black"
                    strokeWidth="1.77091"
                  />
                </svg>
              </div>

              <p className="text-sm text-zinc-400">
                © designpop {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
            <div className=""></div>
          </footer>
        </div>
      </div>
    </ReactLenis>
  )
}
