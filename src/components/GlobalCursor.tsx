import * as React from "react"
import { createPortal } from "react-dom"
import { motion, useMotionValue } from "framer-motion"

const useMousePosition = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = React.useState("")

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const t = (e.target as HTMLDivElement).nodeName

      if (["A", "BUTTON", "IMG"].includes(t)) {
        setIsHovering(t)
      } else if (isHovering) {
        setIsHovering("")
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHovering])

  return [mouseX, mouseY, isHovering]
}

type Props = {
  delay: number
  hideDefaultCursor: boolean
  size: number
  hoverScale: number
  bgColor: string
  borderColor: string
  opacity: number
  opacityOnHover: number
  borderWidth: number
  text?: string
}

const CircleCursor = ({
  delay = 0.3,
  size = 20,
  opacity = 1,
  opacityOnHover = 0.5,
  borderColor = "transparent",
  borderWidth = 0,
  hoverScale = 3,
  bgColor = "deepskyblue",
  hideDefaultCursor = false,
}: Partial<Props>) => {
  const [mouseX, mouseY, isHovering] = useMousePosition()
  const [cont, setCont] = React.useState<HTMLDivElement>()
  const isServer = !!globalThis.window

  React.useEffect(() => {
    const container = document.createElement("div")
    container.setAttribute("data-type", "fc-cursor")
    document.body.appendChild(container)
    setCont(container)

    if (hideDefaultCursor) {
      document.body.style.cursor = "none"
    }

    return () => {
      document.body.removeChild(container)
    }
  }, [isServer])

  if (!cont) return null

  return createPortal(
    <>
      <motion.div
        className={
          "delay-ease-out width-fit-content height-fit-content min-w-10 min-h-10 transform-origin-center pointer-events-none fixed left-0 top-0 z-[100000] transition-transform max-lg:hidden "
        }
        style={
          {
            "--delay": `${delay}s`,
            x: mouseX,
            y: mouseY,
            scale: isHovering ? hoverScale : 1,
            transition: "transform var(--delay) ease-out",
            opacity: isHovering ? opacityOnHover : opacity,
          } as any
        }
      >
        <div
          className={
            "w-max-content h-max-content transform-translate-x-[-50%] transform-translate-y-[-50%]"
          }
        >
          <motion.div
            className={
              "[border-width] [border-color] pointer-events-none h-[var(--size)] w-[var(--size)] rounded-full border-solid bg-[var(--color)]"
            }
            style={
              {
                x: 0,
                y: 0, //
                "--color": bgColor,
                "--size": size + "px",
                "--border-color": borderColor,
                "--border-width": borderWidth + "px",
              } as any
            }
          />
        </div>
      </motion.div>
    </>,
    cont,
  )
}

export default CircleCursor
