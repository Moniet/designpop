import { animate } from "framer-motion/dom"
import { useRef } from "react"

const useScrollTo = () => {
  const running = useRef(false)

  const scrollToEl = (id: string) => {
    if (running.current) return null

    let start = window.scrollY
    const el = id ? document.querySelector(id) : null
    let end = el ? window.scrollY + el.getBoundingClientRect().top : 0

    if (el && Number.isInteger(Math.floor(end))) {
      running.current = true

      const animation = animate(start, end, {
        type: "keyframes",
        duration: 2.5,
        ease: "easeInOut",
        damping: 20,
        onUpdate: (top: number) => {
          window.scrollTo({
            top,
          })
        },
      })

      animation.then(() => {
        running.current = false
      })

      // window.scrollTo({
      //   top: end,
      // })
    }
  }

  return scrollToEl
}

export default useScrollTo
