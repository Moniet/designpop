"use client"

import React, { useEffect, useRef } from "react"
import { useGravity } from "./useGravity"
import FadeInOnView from "./FadeInOnView"
import { motion } from "motion/react"

// const Brick = ({
//   children,
//   containerRef
// }: PropsWithChildren<{ containerRef: RefObject<HTMLDivElement> }>) => {
//   const ref = useRef(null)
//   useGravity({
//     containerRef,
//     texts: [
//       "Web Design",
//       "Full Stack Development",
//       "pSEO",
//       "Landing Pages",
//       "Front-End Development",
//       "MVP in 2 Weeks"
//     ]
//   })

//   return (
//     <div
//       className="w-fit  whitespace-nowrap inline-flex items-center h-[40px] bg-gradient-to-r from-[#ED732E] to-[#FFBE99] rounded-md p-5 text-center"
//       ref={ref}
//     >
//       {children}
//     </div>
//   )
// }

const GravityBox = () => {
  const ref = useRef<HTMLCanvasElement>(null)

  const init = useGravity({
    canvasRef: ref,
    texts: [
      "Web Design",
      "Web Development",
      "Search Engine Optimization",
      "Fast MVP Delivery",
      "Mobile App Development",
      "MVP Development",
      "CMS",
      "pSEO",
      "Landing Pages",
      "+ More",
      "Ideation",
      "UI/UX Design",
      "Branding"
    ]
  })

  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cb: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        init(true)
      }
    }
    const obs = new IntersectionObserver(cb, {
      root: window.document,
      threshold: 0.8
    })

    obs.observe(container.current!)

    return () => {
      obs.disconnect()
    }
  }, [])

  return (
    <FadeInOnView threshold={0.4} duration={1.5}>
      <section id="debug" ref={container}>
        <div
          className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl w-full text-zinc-700 h-[500px] relative"
          id="boundary"
        >
          <FadeInOnView delay={0.5}>
            <div className="flex flex-col items-center absolute top-10 left-1/2 -translate-x-1/2 w-full select-none">
              <div className="text-zinc-900 border ring-2 ring-inset ring-zinc-100/50 border-zinc-400/20 shadow-sm rounded-full px-4 py-1 text-xs xl:text-base font-medium">
                Our Services
              </div>
              <h2 className="headline text-2xl sm:text-3xl xl:text-4xl text-center mt-5 font-medium mb-16 capitalize max-sm:max-w-[300px] mx-auto">
                Our Building Blocks for Your Startup’s Success
              </h2>
            </div>
          </FadeInOnView>

          {/* <div className="flex gap-5"> */}
          {/* </div> */}

          <motion.canvas
            className="w-full h-full"
            transition={{
              duration: 1,
              delay: 2
            }}
            whileInView={{ opacity: 1 }}
            ref={ref}
          ></motion.canvas>
        </div>
      </section>
    </FadeInOnView>
  )
}

export default GravityBox
