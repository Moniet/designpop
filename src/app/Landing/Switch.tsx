import { useId } from "react"
import { motion } from "motion/react"

interface SwitchProps {
  isChecked: boolean
  onToggle: (isChecked: boolean) => void
  label?: string // For accessibility
}

const Switch: React.FC<SwitchProps> = ({
  isChecked,
  onToggle,
  label = "Toggle switch"
}) => {
  const toggleSwitch = () => {
    onToggle(!isChecked)
  }
  const id = useId()

  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={toggleSwitch}
      role="checkbox"
      aria-checked={isChecked}
      aria-label={label}
    >
      <span className="sm:text-sm lg:text-base" id={id}>
        {label}
      </span>
      <motion.div
        data-component="switch"
        className={`p-[2px]  ${
          isChecked
            ? "bg-[rgb(41,42,255)] justify-end"
            : "bg-zinc-100  justify-start"
        } w-[35px] sm:h-[20px] lg:h-[30px] lg:w-[50px] sm:w-[35px] items-center border border-zinc-200 flex rounded-full shadow-inner`}
        style={{ justifyContent: isChecked ? "flex-end" : "flex-start" }}
      >
        <motion.div
          layout
          className="size-[15px] lg:size-[24px] rounded-full bg-white pointer-events-none shadow-md"
          transition={{ type: "spring", visualDuration: 0.2, bounce: 0.2 }}
        />
      </motion.div>
    </div>
  )
}

export default Switch
