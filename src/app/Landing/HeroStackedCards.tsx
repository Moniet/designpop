"use client"

import {
  AnimatePresence,
  AnimationPlaybackControls,
  motion,
  stagger
} from "motion/react"
import { useAnimate } from "motion/react"
import WhiteLogo from "./WhiteLogo"
import { useDeferredValue, useEffect, useRef, useState } from "react"

const variants = {
  swipeOut: {
    x: [10, 0],
    rotate: [0, 10, 0]
  }
}

const Card = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[225px] sm:w-[270px] lg:w-[300px] aspect-[5/4] bg-[rgb(41,42,255)] rounded-xl p-5 flex flex-col justify-between relative -row-start-1 -col-start-1 [box-shadow:0px_0px_15px_rgba(0,0,0,0.2)]"
    >
      <WhiteLogo className="w-[100px]" />
      <div className="text-2xl md:text-3xl font-semibold text-white">
        {text}
      </div>
    </motion.div>
  )
}

const data = [
  "Async = less meetings",
  "Fast execution",
  "MVP delivered in 2-6 weeks",
  "Validate your idea before commiting",
  "State-of the art technology",
  "Effective & frequent communication (no silos!)",
  "Trusted by world-class startups"
]

const HeroStackedCards = ({ hide = false }) => {
  const card1 = useRef<HTMLDivElement>(null)
  const card2 = useRef<HTMLDivElement>(null)
  const [card1Text, setCard1Text] = useState(data[0])
  const [card2Text, setCard2Text] = useState(data[1])

  const [scope, animate] = useAnimate()
  const [index, setIndex] = useState(0)
  const currentAnim = useRef<AnimationPlaybackControls>()

  const animateCard = (selector: string) => {
    currentAnim.current = animate([
      [
        selector,
        {
          x: 300,
          rotate: 30,
          opacity: 1
          // boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
        },
        {
          duration: 1
        }
      ],
      [
        selector,
        {
          x: 0,
          rotate: 0,
          opacity: 1
          // boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
        },
        {
          onComplete: () => {
            setTimeout(() => {
              //@ts-ignore
              document.querySelector<HTMLDivElement>(
                selector
              )!.style!.opacity = 1
            }, 1)
          },
          duration: 1
        }
      ]
    ])

    return currentAnim.current
  }

  const to = useRef<NodeJS.Timeout>()
  useEffect(() => {
    to.current = hide
      ? setTimeout(() => {}, 0)
      : setTimeout(() => {
          const nextIndex = index === data.length - 2 ? 0 : index + 1

          if (index % 2 === 1) {
            setCard1Text(data[index + 1])

            document.querySelector<HTMLDivElement>(
              "#stacked-card-1"
            )!.style.zIndex = "5"
            document.querySelector<HTMLDivElement>(
              "#stacked-card-2"
            )!.style.zIndex = "10"
            setTimeout(() => {
              document.querySelector<HTMLDivElement>(
                "#stacked-card-2"
              )!.style.zIndex = "4"
            }, 1000)
            animateCard("#stacked-card-2")
            currentAnim.current?.then(() => setIndex(nextIndex))
          } else {
            setCard2Text(data[index + 1])

            document.querySelector<HTMLDivElement>(
              "#stacked-card-2"
            )!.style.zIndex = "5"
            document.querySelector<HTMLDivElement>(
              "#stacked-card-1"
            )!.style.zIndex = "10"
            setTimeout(() => {
              document.querySelector<HTMLDivElement>(
                "#stacked-card-1"
              )!.style.zIndex = "4"
            }, 1000)
            animateCard("#stacked-card-1")
            currentAnim.current?.then(() => setIndex(nextIndex))
          }
        }, 3000)

    return () => {
      clearTimeout(to.current)
    }
  }, [index, hide])

  useEffect(() => {
    currentAnim.current?.stop()
    if (hide) {
      animate(
        ".stacked-cards",
        {
          opacity: 0,
          rotate: 0,
          x: 1000
        },
        {
          duration: 1,
          type: "spring",
          delay: stagger(0.1)
        }
      )
    } else {
      animate(
        ".stacked-cards",
        {
          opacity: 1,
          x: 0,
          rotate: 0
        },
        {
          duration: 2,
          type: "spring",
          bounce: 0.2,
          damping: 13,
          bounceStiffness: 200,
          delay: stagger(0.1)
        }
      )
    }
  }, [hide])

  return (
    <div
      className="w-fit h-fit rotate-[5deg] relative sm:translate-x-[10%] max-sm:mt-8"
      ref={scope}
    >
      <motion.div
        className="p-5 bg-[rgb(41,42,255)]/30 rounded-xl stacked-cards w-[225px] sm:w-[270px] lg:w-[300px] aspect-[5/4] absolute top-0 left-0 z-0"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 5, opacity: 1, transition: { duration: 0.5 } }}
      >
        <WhiteLogo className="w-[100px]" />
      </motion.div>
      <div className="grid-rows-1 grid-cols-1 grid">
        <motion.div
          className="-row-start-1 -col-start-1 opacity-80 z-[2]"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 3, opacity: 1, transition: { duration: 0.5 } }}
        >
          <div className="stacked-cards">
            <Card text={data[index]} />
          </div>
        </motion.div>
        <div
          className="-row-start-1 -col-start-1 rounded-xl stacked-cards"
          ref={card2}
          id="stacked-card-2"
          style={{
            opacity: 1
          }}
        >
          <Card text={card2Text} />
        </div>
        <div
          className="-row-start-1 -col-start-1 rounded-xl stacked-cards"
          style={{
            opacity: 1
            // boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          }}
          ref={card1}
          id="stacked-card-1"
        >
          <Card text={card1Text} />
        </div>
      </div>
    </div>
  )
}

export default HeroStackedCards
