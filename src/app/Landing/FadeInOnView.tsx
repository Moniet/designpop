import { motion } from "motion/react"
import { useInView } from "../hooks/useInView"

const FadeInOnView = ({
  children,
  delay = 0,
  threshold = 1,
  duration = 0.5
}: {
  children: React.ReactNode
  delay?: number
  threshold?: number
  duration?: number
}) => {
  const { ref, inView } = useInView({
    threshold,
    root: globalThis?.window?.document
  })

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration, delay } },
    hidden: { opacity: 0, y: 20 }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnView
