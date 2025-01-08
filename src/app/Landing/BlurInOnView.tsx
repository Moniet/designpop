import { motion } from "motion/react"
import { useInView } from "../hooks/useInView"

const BlurInOnView = ({
  children,
  className,
  delay = 0,
  threshold = 0.6
}: {
  children: React.ReactNode
  delay?: number
  threshold?: number
  className?: string
}) => {
  const { ref, inView } = useInView({
    threshold,
    root: globalThis?.window?.document
  })

  const variants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay },
      filter: "blur(0px)"
    },
    hidden: { opacity: 0, filter: "blur(10px)" }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      className={className}
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

export default BlurInOnView
