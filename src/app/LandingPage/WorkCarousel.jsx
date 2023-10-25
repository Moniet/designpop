"use client"

import React from "react"
import { AnimatePresence, useMotionValue } from "framer-motion"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRef } from "react"
import { CarouselItem } from "./CarouselItem"
import { createPortal } from "react-dom"
import Gutter from "./Gutter"

const Cursor = ({ showCursor, posX, posY }) => {
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
          Drag
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

const WorkCarousel = () => {
  const posX = useMotionValue(0)
  const posY = useMotionValue(0)
  const transX = useMotionValue(0)
  const [showCursor, setShowCursor] = useState(false)
  const [mouseDown, setMouseDown] = useState(null)
  const scrolled = useRef(0)
  const container = useRef(null)

  const handlePointerDown = (e) => {
    setMouseDown({
      x: e.screenX,
      y: e.screenY,
    })
  }

  const handlePointerMove = (e) => {
    posX.set(e.clientX)
    posY.set(e.clientY)
    const isTouchEnabled = window.innerWidth <= 900

    if (mouseDown) {
      const xScroll =
        ((scrolled.current || 0) + e.screenX - mouseDown.x) *
        (isTouchEnabled ? 20 : 1)

      transX.set(
        Math.min(
          0,
          Math.max(
            xScroll,
            -container.current.clientWidth -
              (isTouchEnabled ? 100 : 200) +
              window.innerWidth,
          ),
        ),
      )
    }
  }

  const handlePointerUp = () => {
    scrolled.current = transX.get()
    setMouseDown(null)
  }

  return (
    <>
      <section id="recent-work">
        <div className="mt-16 w-full max-w-full overflow-hidden bg-zinc-900 py-4">
          <Gutter>
            <div
              className="min-w-fit py-20 pr-8"
              onPointerMove={handlePointerMove}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onMouseEnter={() => setShowCursor(true)}
              onMouseLeave={() => setShowCursor(false)}
            >
              <motion.div
                ref={container}
                style={{
                  x: transX,
                  transition: "transform ease-out 1s",
                }}
                className="pointer-none relative flex h-[600px] w-full max-w-[100%] gap-5"
              >
                <CarouselItem
                  link="https://framerlib.com"
                  tags={["Wireframing", "Design", "Development", "On Page SEO"]}
                  img="tile-2.jpeg"
                  title="framerlib"
                />
                <CarouselItem
                  link="https://framerlib.com"
                  tags={["Wireframing", "Design", "Development", "On Page SEO"]}
                  img="tile-1.jpeg"
                  title="framerlib"
                />
                <CarouselItem
                  link="https://framerlib.com"
                  tags={["Wireframing", "Design", "Development", "On Page SEO"]}
                  img="tile-3.jpeg"
                  title="framerlib"
                />
                <CarouselItem
                  link="https://framerlib.com"
                  tags={["Wireframing", "Design", "Development", "On Page SEO"]}
                  img="slide-1.png"
                  title="framerlib"
                />
                <CarouselItem
                  link="https://blocs.me"
                  tags={["Wireframing", "Design", "Development", "SEO"]}
                  img="slide-2.jpg"
                  title="blocs (notion widgets)"
                />
                <CarouselItem
                  link="https://phoenixmedicalsystems.com"
                  tags={["Wireframing", "Design", "Development", "CMS", "SEO"]}
                  img="slide-3.png"
                  title="phoenix medical systems"
                />
              </motion.div>
            </div>
          </Gutter>
        </div>
      </section>
      <Cursor showCursor={showCursor} posX={posX} posY={posY} />
    </>
  )
}

export default WorkCarousel
