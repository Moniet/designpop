import { ChevronDownIcon } from "lucide-react"
import React, { useId, useState } from "react"
import { motion } from "framer-motion"

type Props = {
  question: string
  answer: string
}

const Accordion = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false)
  const id = useId()
  const id2 = useId()

  return (
    <div
      className="relative mx-auto flex w-full flex-col md:max-w-[650px]"
      aria-controls={id2}
      id={id}
      aria-expanded={open}
    >
      <div
        role="heading"
        className={`mt-7 flex w-full justify-between  text-base font-light text-black`}
      >
        <button
          className="mr-5 h-full w-full text-left"
          onClick={() => setOpen(!open)}
        >
          {question}
        </button>
        <span aria-hidden>
          <ChevronDownIcon
            className={` transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
              open ? "rotate-180 text-black" : "rotate-0 text-zinc-500"
            }`}
            width={"20px"}
          />
        </span>
      </div>
      <div
        id={id2}
        className="mt-5 font-light leading-6 text-slate-500 xs:text-sm md:text-base"
        role="region"
        hidden={!open}
        aria-labelledby={id}
      >
        {answer}
      </div>

      <div className="mt-4 border-b border-zinc-200" />
    </div>
  )
}

export default Accordion
