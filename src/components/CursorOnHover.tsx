import * as React from "react"
// import styles from "./styles.modules.css"
import {
  BoundingBox,
  useMotionValue,
  useSpring,
  motion,
  useTransform,
} from "framer-motion"

const defaultSrc =
  "https://labs.moniet.dev/framer-components/public/default-cursor.png"

import { Ref, useRef, MutableRefObject, RefObject, useState } from "react"
import { useFollowCursor } from "@/hooks/useFollowCursor"

type Options = {
  movement?: number
  range?: number
}

export const CustomCursorOnHover = ({
  cursor: cursorProps,
  children,
  size = 45,
  delay = 0.3,
  scaleIn = true,
  fadeIn = true,
  backgroundColor = "#fff",
}: any) => {
  const container = React.useRef<HTMLDivElement>(null)
  const cursor = React.useRef<HTMLDivElement>()
  const [isHovering, setIsHovering] = React.useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseEnter = (e: MouseEvent) => setIsHovering(true)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  React.useEffect(() => {
    if (container.current) {
      const { top, left } = container.current?.getBoundingClientRect()
      mouseX.set(left)
      mouseY.set(top)
    }
  }, [])

  return (
    <div
      ref={container as any}
      className={
        "w-fit-content h-fit-content min-w-100 min-h-100 cursor-none bg-[var(--bg-color,#fff)]"
      }
      onMouseEnter={handleMouseEnter as any}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={
        {
          "--bg-color": backgroundColor,
          "--size": `${size}px`,
        } as any
      }
    >
      {children}

      <motion.div
        ref={cursor as any}
        className={
          "[var(--delay)] ease pointer-events-none fixed left-0 top-0 z-[1000001] -ml-[(var(--size)/2)] -mt-[(var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-[0.3s] transition-transform ease-out"
        }
        aria-hidden={true}
        style={
          {
            "--delay": delay + "s",
            x: mouseX,
            y: mouseY,
            opacity: isHovering ? 1 : fadeIn ? 0 : 1,
            scale: isHovering ? 1 : scaleIn ? 0 : 1,
          } as any
        }
      >
        <img alt="cursor" src={cursorProps?.src || defaultSrc} />
      </motion.div>
    </div>
  )
}
