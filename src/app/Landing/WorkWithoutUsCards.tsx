import {
  LucideBadgeDollarSign,
  LucideFrown,
  LucideScatterChart,
  LucideTimer,
  TextSearch
} from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

const data = [
  {
    id: 1,
    icon: <LucideFrown />,
    title: "Your team is already stretched thin",
    summary:
      "Coordinating with multiple vendors or managing a scattered process takes time and energy your team doesn’t have."
  },
  {
    id: 2,
    icon: <LucideBadgeDollarSign />,
    title: "Unclear costs or unexpected expenses",
    summary:
      "With our simple subscription or one-time payment plans, you can skip the hidden fees altogether. "
  },
  {
    id: 3,
    icon: <LucideTimer />,
    title: "Slower progress and missed deadlines",
    summary:
      "Coordinating with multiple vendors or managing a scattered process takes time and energy your team doesn’t have."
  },
  {
    id: 4,
    icon: <TextSearch />,
    title: "Separate teams are harder to manage",
    summary:
      "Coordinating with multiple vendors or managing a scattered process takes time and energy your team doesn’t have."
  },
  {
    id: 5,
    icon: <LucideFrown />,
    title: "Limited or costly revisions",
    summary:
      "Coordinating with multiple vendors or managing a scattered process takes time and energy your team doesn’t have."
  },
  {
    id: 6,
    icon: <LucideScatterChart />,
    title: "Miscommunications and scattered updates",
    summary:
      "Coordinating with multiple vendors or managing a scattered process takes time and energy your team doesn’t have."
  }
]

type CardProps = (typeof data)[0] & {
  currentIndex: number
  index: number
  isVisible?: boolean
}

const variants = {
  hidden: {
    x: 1000,
    opacity: 0
  },
  initial: { y: 20, x: -20, opacity: 0 },
  exit: {
    y: -24,
    x: 24,
    opacity: 0
  },
  enter: {
    y: [24, 0],
    x: [24, 0],
    opacity: 1
  },
  moveBack: {
    y: [0, -12],
    x: [0, 12],
    opacity: 1
  }
}

const Card = ({ icon, title, currentIndex, index, isVisible }: CardProps) => {
  return (
    <motion.div
      animate={
        !isVisible
          ? "hidden"
          : index === currentIndex + 1
          ? "enter"
          : index === currentIndex
          ? "moveBack"
          : "exit"
      }
      className="-row-start-1 -col-end-1 relative"
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.05,
        stiffness: 100,
        damping: 14
      }}
      variants={variants}
    >
      <div
        className={`rounded-xl border bg-white border-[#cfcfcf] flex flex-col gap-3 p-5 w-[270px] md:w-[350px] h-[150px] lg:h-[165px] justify-center overflow-hidden relative`}
      >
        <div className="min-w-[35px] min-h-[35px] aspect-square max-w-[35px] rounded-md bg-zinc-100 flex items-center justify-center text-[#DB5F5F]">
          {icon}
        </div>
        <div className="text-xl md:text-3xl font-semibold -tracking-[0.1rem]">
          {title}
        </div>
        {/* <div className="text-zinc-500 text-xs">{summary}</div> */}
      </div>
    </motion.div>
  )
}

const WorkWithoutUsCards = ({ isVisible = false }) => {
  const [index, setIndex] = useState(0)

  const to = useRef<NodeJS.Timeout>()

  useEffect(() => {
    to.current = isVisible
      ? setTimeout(() => {
          setIndex(index >= data.length - 2 ? 0 : index + 1)
        }, 3000)
      : setTimeout(() => {}, 1)

    return () => {
      if (to.current) clearTimeout(to.current)
    }
  }, [index, isVisible])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, transition: { duration: 1 } }}
      className="grid grid-cols-1 grid-rows-1 absolute top-1/2 left-1/2 -translate-x-[135px] md:-translate-x-[150px] -translate-y-1/2 xl:pl-10 xl:pb-20"
    >
      {data.map((d, i) => {
        return (
          <Card
            key={i}
            currentIndex={index}
            index={i}
            {...d}
            isVisible={isVisible}
          />
        )
      })}
    </motion.div>
  )
}

export default WorkWithoutUsCards
