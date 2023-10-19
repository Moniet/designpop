import React, { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

const FadeInOnView = ({
  className = "",
  children,
  once = true,
  delay = 0,
}: {
  className?: string
  children: ReactNode
  once?: boolean
  delay?: number
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once,
  })

  return (
    <motion.div
      className={className}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
        transition: {
          duration: 1.5,
          delay,
        },
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnView
