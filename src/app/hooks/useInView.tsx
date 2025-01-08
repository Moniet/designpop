import { useEffect, useRef, useState } from "react"

export const useInView = (
  { threshold, root } = { threshold: 1, root: globalThis?.window?.document }
) => {
  const ref = useRef<HTMLDivElement>(null)

  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.at(0)?.isIntersecting) {
          setInView(true)
        }
      },
      {
        root,
        threshold
      }
    )

    obs.observe(ref.current!)
    return () => {
      obs.disconnect()
    }
  }, [])

  return { ref, inView }
}
