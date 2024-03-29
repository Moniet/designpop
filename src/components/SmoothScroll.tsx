"use client"
import debounce from "@/hooks/debounce"
import { lerp } from "@/hooks/lerp"
import { useEffect, useLayoutEffect, useMemo } from "react"

export const SmoothScroll = ({ duration = 1, rootSelector = "#main" }) => {
  const root = useMemo(
    () =>
      globalThis.window
        ? (document.querySelector(rootSelector) as HTMLDivElement)
        : null,
    [],
  )

  useLayoutEffect(() => {
    let to: NodeJS.Timeout

    const setBodyHeight = () => {
      if (to) clearTimeout(to)
      to = setTimeout(() => {
        document.body.style.setProperty("height", root?.scrollHeight + "px")
      }, 100)
    }

    let scrollVal = 0
    let prevVal = 0
    let curVal = 0

    const cntrl = new AbortController()

    const handleScroll = (cntrl: AbortController) => () => {
      if (cntrl.signal.aborted) {
        return null
      }

      curVal = scrollVal
      prevVal = lerp(prevVal, curVal, 0.1)

      root?.style.setProperty(
        "transform",
        `translateY(${-1 * prevVal}px) translateX(-50%)`,
      )

      requestAnimationFrame(handleScroll(cntrl))
    }

    const setScroll = () => {
      scrollVal = window.scrollY
    }

    window.addEventListener("resize", setBodyHeight)
    window.addEventListener("scroll", setScroll)

    setBodyHeight()

    if (root) {
      root.style.height = "100%"
      root.style.width = "100%"
      root.style.position = "fixed"
      root.style.top = "0"
      root.style.left = "50%"
      root.style.overflow = "visible"
    }

    handleScroll(cntrl)()

    const faqEl = document.querySelector("#faqs")
    let faqHeight = faqEl?.getBoundingClientRect().height as number

    const handleFaqHeight = debounce(() => {
      const currentHeight = faqEl?.getBoundingClientRect().height as number
      if (faqHeight !== currentHeight && root && currentHeight) {
        const diff = currentHeight - faqHeight ?? 0
        document.body.style.setProperty(
          "height",
          root?.scrollHeight + diff + "px",
        )
      }
    }, 100)

    const resizeObs = new ResizeObserver(setBodyHeight)
    resizeObs.observe(document.querySelector("#faqs") as HTMLElement)

    return () => {
      cntrl.abort()
      window.removeEventListener("resize", setBodyHeight)
      window.removeEventListener("scroll", setScroll)
      document.body.style.setProperty("height", "auto")

      if (root) {
        root.style.height = "auto"
        root.style.width = "auto"
        root.style.position = "relative"
        root.style.overflow = "auto"
        root.style.transition = "none"
        root?.style.setProperty("transform", `translateY(0) translateX(-50%)`)
      }
    }
  }, [root, duration])

  return <span />
}
//
