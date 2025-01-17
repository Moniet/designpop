import { motion } from "motion/react"
import { useInView } from "../hooks/useInView"

const BlurInOnView = ({
  children,
  className,
  delay = 0,
  threshold = 0.6,
  once = false
}: {
  children: React.ReactNode
  delay?: number
  threshold?: number
  className?: string
  once?: boolean
}) => {
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
      variants={variants}
      initial="hidden"
      className={className}
      whileInView={"visible"}
      viewport={{
        once,
        amount: threshold ?? "some"
      }}
    >
      {children}
    </motion.div>
  )
}

export default BlurInOnView
