"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { debounce } from "lodash"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useInView } from "../hooks/useInView"

const item = {
  init: {
    y: 20,
    opacity: 0,
    filter: "blur(10px)"
  },
  animateIn: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)"
  }
}

const div = ({
  children,
  className
}: {
  children: ReactNode
  className: string
}) => {
  return (
    <motion.div
      variants={item}
      className={className}
      initial={"init"}
      animate={"animateIn"}
    >
      {children}
    </motion.div>
  )
}

const cards = [
  {
    image: "/img/phoenix-landing-page.png",
    title: "Phoenix Medical Systems - India's top medical manufacturer",
    url: "phoenixmedicalsystems.com",
    link: "https://phoenixmedicalsystems.com"
  },
  {
    image: "/img/instaapply-landing-page.png",
    title: "InstaApply - Makes job hunting a one-click process!",
    url: "instaapply.co",
    link: "https://instaapply.co"
  },
  {
    image: "/img/ficus-landing-page.png",
    title: "Ficus - Infinite LoFi Music Player",
    url: "ficus.fm",
    link: "https://ficus.fm"
  },
  {
    image: "/img/blocs.me-landing-page.png",
    title: "Blocs - habit tracker widgets for Notion",
    url: "blocs.me",
    link: "https://blocs.me"
  },
  {
    image: "/img/framerlib-landing-page.png",
    title: "FramerLib - No-code components for Framer",
    url: "framer.lib",
    link: "https://framerlib.co"
  }
  // {
  //   image: "/img/filebloc-landing-page.png",
  //   title: "Filebloc - digital asset management directly from slack",
  //   url: "filebloc.co",
  //   link: "#"
  // }
]

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [showMouse, setShowMouse] = useState(false)
  const mouse = useRef<HTMLDivElement>(null)
  // const inViewProps = useInView({ threshold: 0.5, root: window.document })

  useEffect(() => {
    const getAndSetCardHeight = debounce(() => {
      const sw =
        document.querySelector<HTMLDivElement>("#our-work")!.scrollWidth -
        (window.innerWidth - 50)
      setScrollWidth(sw)
      containerRef.current!.style.height = `${sw - 50}px`
    }, 100)

    getAndSetCardHeight()

    window.addEventListener("resize", getAndSetCardHeight)

    return () => {
      window.removeEventListener("resize", getAndSetCardHeight)
    }
  }, [])

  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth])
  const h2Opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const h2Blur = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section
      className="max-w-[1440px] px-5 w-full h-full flex flex-col gap-[20px] max-w-screen relative"
      ref={containerRef}
    >
      <div className="w-[300px] sm:w-[500px] lg:w-[700px] aspect-[16/11] sticky top-0 left-0 items-center justify-center flex-col -mb-[25%] translate-y-1/4 flex">
        <motion.div
          style={{
            opacity: h2Opacity,
            filter: "blur(" + h2Blur + "px)"
          }}
        >
          <div className="overflow-hidden h-fit max-h-fit translate-y-1/4">
            <motion.h2
              className="text-[#1f1f1f] h-fit font-semibold text-6xl min-h-fit"
              initial={{ y: "100%", rotate: 5 }}
              whileInView={{
                y: "0",
                rotate: 0,
                transition: {
                  duration: 1,
                  type: "spring"
                }
              }}
            >
              Hand-picked examples of our{" "}
              <span className="opacity-70">best work</span>. Delivering high
              impact, at <span className="opacity-70">lightning speed!</span>
            </motion.h2>
          </div>
        </motion.div>
      </div>
      <motion.div
        id="our-work"
        style={{ x: scrollX }}
        className="flex w-fit sticky top-48 left-0"
        onMouseEnter={() => {
          setShowMouse(true)
          // document.body.style.setProperty("cursor", "none")
        }}
        onMouseMove={(e) => {
          if (mouse.current) {
            mouse.current.style.setProperty("left", `${e.clientX - 40}px`)
            mouse.current.style.setProperty("top", `${e.clientY - 40}px`)
          }
        }}
        onMouseLeave={() => {
          setShowMouse(false)
          document.body.style.setProperty("cursor", "default")
        }}
      >
        {/* <motion.h3
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 1, type: "spring", delay: 0.6 }
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl mt-5 text-[#1f1f1f]/70 text-center font-semibold  mx-auto"
          >
            Check out a few samples of our most impactful work.
          </motion.h3> */}

        <div className="flex w-fit gap-10 bg-white/50 backdrop-blur-sm relative z-1 sm:ml-[500px] ml-[300px]  lg:ml-[700px]">
          {/* <div className="w-[300px] sm:w-[500px] lg:w-[700px] aspect-[16/11]"></div> */}
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="h-fit carousel__card"
              whileInView={{
                opacity: 1,
                // filter: "blur(0)",
                y: 0,
                transition: {
                  type: "spring",
                  duration: 1
                }
              }}
              initial={{
                opacity: 0,
                // filter: "blur(5px)",
                y: 20
              }}
              viewport={{
                once: true,
                amount: 0.25
              }}
              // style={{ top: i == 0 ? 100 : i * cardHeight }}
            >
              <div className="w-full flex items-center justify-center overflow-hidden relative">
                <div className="flex flex-col items-center">
                  <div className="w-[300px] sm:w-[500px] lg:w-[700px] aspect-[16/11] rounded-lg border-[4px] border-zinc-100/20 bg-zinc-100 overflow-hidden relative">
                    <Image
                      width={1920}
                      height={1080}
                      alt={card.title}
                      src={card.image}
                      className="select-none w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute bottom-5 w-full h-fit px-5">
                      <a
                        href={card.link}
                        className="p-2 rounded-full bg-white shadow-sm flex items-center"
                      >
                        <div className="flex items-center">
                          <div className="size-[30px] min-w-[30px] sm:size-[40px] rounded-full bg-zinc-100 mr-2"></div>
                          <div className="flex flex-col justify-center">
                            <div className="text-sm lg:text-base font-medium headline">
                              {card.title}
                            </div>
                            <span className="text-zinc-500">{card.url}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div
          className="fixed size-[80px] rounded-full bg-zinc-800 text-white flex items-center justify-center z-50"
          ref={mouse}
          style={{
            opacity: showMouse ? 1 : 0,
            pointerEvents: "none",
            transition: "opacity 0.5s ease",
            touchAction: "none"
          }}
        >
          <ArrowLeft className="size-4 mr-1" />
          Scroll
        </div> */}
      </motion.div>
    </section>
  )
}

export default Carousel
