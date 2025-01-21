"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { debounce } from "lodash"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

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

const cards = [
  {
    image: "/img/blocs tile 2.png",
    title: "Blocs - habit tracker widgets for Notion",
    url: "blocs.me",
    link: "https://blocs.me",
    logo: "/img/logos/blocs-logo.svg"
  },
  {
    image: "/img/phoenix tile.png",
    title: "Phoenix Medical Systems",
    url: "phoenixmedicalsystems.com",
    link: "https://phoenixmedicalsystems.com",
    logo: "/img/logos/phoenix-logo.svg"
  },
  {
    image: "/img/instaapply tile.png",
    title: "InstaApply - Apply to jobs in one-click!",
    url: "instaapply.co",
    link: "https://instaapply.co",
    logo: "/img/logos/instaapply-logo.svg"
  },
  {
    image: "/img/ficus tile.png",
    title: "Ficus - Infinite LoFi Music Player",
    url: "ficus.fm",
    link: "https://ficus.fm",
    logo: "/img/logos/ficus-logo.svg"
  },
  {
    image: "/img/framerlib tile.png",
    title: "FramerLib - No-code components for Framer",
    url: "framerlib.com",
    link: "https://framerlib.com",
    logo: "/img/logos/framerlib-logo.svg"
  }
  // {
  //   image: "/img/filebloc-landing-page.png",
  //   title: "Filebloc - digital asset management directly from slack",
  //   url: "filebloc.co",
  //   link: "#"
  // }
]

const Card = (card: (typeof cards)[0]) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.a
      href={card.link}
      target="__blank"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="h-fit carousel__card max-md:sticky max-md:top-5 max-md:left-0"
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2
        }
      }}
      initial={{
        opacity: 0,

        y: 40
      }}
      viewport={{
        amount: 0.15,
        once: true
      }}
      // style={{ top: i == 0 ? 100 : i * cardHeight }}
    >
      <div className="w-full flex items-center justify-center overflow-hidden relative">
        <div className="flex flex-col items-center">
          <div className="w-full md:w-[500px] lg:w-[700px] aspect-[16/11] rounded-lg border-[4px] border-zinc-100/20 bg-zinc-100 overflow-hidden relative">
            <motion.div
              className="size-full"
              animate={{
                scale: isHovering ? 1.05 : 1,
                rotate: isHovering ? "-1deg" : "0deg",
                transition: { duration: 1, type: "spring" }
              }}
            >
              <Image
                width={1920}
                height={1080}
                alt={card.title}
                src={card.image}
                className="select-none w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
            <div className="absolute bottom-5 w-full h-fit px-5">
              <div className="p-2 sm:h-[70px] rounded-full bg-white shadow-sm flex items-center">
                <div className="flex items-center justify-between w-full ">
                  <div className="flex items-center h-full">
                    <div
                      className={`size-[40px] border-2 border-zinc-100 min-w-[30px] sm:size-[60px] sm:min-h-full aspect-square rounded-full bg-zinc-100 mr-2 overflow-hidden`}
                    >
                      <Image
                        width={30}
                        height={30}
                        src={card.logo!}
                        className="object-fit size-full bg-white"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="text-xs md:text-sm lg:text-base font-medium">
                        {card.title}
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-zinc-500">
                        {card.url}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`size-[40px] ${
                      isHovering ? "rotate-45 !bg-zinc-100" : "rotate-0"
                    } transition-all sm:size-[60px] bg-[#f9f9f9]  rounded-full text-zinc-900 flex`}
                  >
                    <div className="m-auto -rotate-45">
                      <ArrowRight className="size-[20px]" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  // const inViewProps = useInView({ threshold: 0.5, root: window.document })

  useEffect(() => {
    const getAndSetCardHeight = debounce(() => {
      const sw =
        document.querySelector<HTMLDivElement>("#carousel-items-container")!
          .scrollWidth -
        (window?.innerWidth - 50)
      setScrollWidth(sw)
    }, 100)

    getAndSetCardHeight()

    window.addEventListener("resize", getAndSetCardHeight)

    return () => {
      window.removeEventListener("resize", getAndSetCardHeight)
    }
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  useEffect(() => {
    const cb = debounce(() => {
      setIsMobile(window?.innerWidth < 768)
    }, 100)

    cb()

    window.addEventListener("resize", cb)

    return () => {
      window.removeEventListener("resize", cb)
    }
  }, [])

  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth])
  const h2Opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  // const h2Blur = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      id="our-work"
      className="max-w-screen px-5 flex flex-col gap-[20px] relative md:h-[300vh] max-md:mt-20"
      ref={containerRef}
    >
      <div className="w-[300px] sm:w-[500px] lg:w-[700px] aspect-[16/11] md:sticky top-0 left-0 items-center justify-center flex-col  md:-mb-[25%] md:translate-y-1/4 flex">
        <motion.div className="size-full flex items-center">
          <div className="overflow-hidden pb-2 border-red-300 h-fit max-h-fit md:translate-y-1/4 relative max-w-screen">
            <motion.h2
              className="text-[#1f1f1f] h-fit font-semibold !leading-[1.25] -tracking-[0.1rem] text-3xl sm:text-4xl  lg:text-5xl min-h-fit"
              // initial={{ y: "100%", rotate: 5 }}
              // whileInView={{
              //   y: 0,
              //   rotate: 0,
              //   transition: {
              //     duration: 1,
              //     type: "spring"
              //   }
              // }}
              style={{ opacity: h2Opacity }}
            >
              Handpicked examples of our best work. Delivering{" "}
              <motion.span
                initial={{ skewX: 0 }}
                whileInView={{ skewX: -12, transition: { duration: 1 } }}
                className="inline-block font-medium"
              >
                high
              </motion.span>
              &nbsp;
              <span className="-skew-x-[12deg] inline-block font-medium">
                impact
              </span>
              , at lightning speed!
            </motion.h2>
            <motion.div
              className="absolute top-0 left-0 size-full bg-white backdrop-blur-md "
              initial={{ scaleX: 1 }}
              whileInView={{
                scaleX: 0,
                transition: { duration: 2, type: "spring" }
              }}
              style={{ transformOrigin: "right center" }}
              viewport={{ amount: "all", once: true }}
            />
          </div>
        </motion.div>
      </div>
      <div className="w-full max-w-full md:sticky md:top-48 left-0 max-w-screen md:overflow-hidden">
        <motion.div
          id={"carousel-items-container"}
          style={{ x: isMobile ? 0 : scrollX }}
          className="flex w-fit max-md:flex-col"
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

          <div className="flex w-fit gap-10 bg-white/50 backdrop-blur-sm relative z-1 md:ml-[500px] lg:ml-[700px]  cursor-grab max-md:justify-start max-md:flex-col max-md:sticky max-md:top-5 max-md:left-0">
            {/* <div className="w-[300px] sm:w-[500px] lg:w-[700px] aspect-[16/11]"></div> */}
            {cards.map((card, i) => (
              <Card {...card} key={i} />
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
      </div>
    </section>
  )
}

export default Carousel
