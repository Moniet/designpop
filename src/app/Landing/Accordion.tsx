"use client"

import React, { ReactNode, useState } from "react"
import { Minus, Plus } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

const Accordion = ({
  title,
  children
}: {
  title: string
  children: ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`border duration-300 border-b-zinc-100 rounded-2xl overflow-hidden max-w-[600px] mx-auto`}
    >
      <div
        aria-expanded={isOpen}
        onClick={toggleAccordion}
        role="button"
        aria-controls={`accordion-content-${title}`}
        className="w-full text-left p-4 transition-all duration-500 cursor-pointer hover:bg-zinc-100" // Added transition for smoother hover effect
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="transition-transform duration-300 size-10 rounded-full bg-zinc-100 flex items-center justify-center relative">
            <AnimatePresence initial={false}>
              {!isOpen && (
                <motion.div
                  key="2"
                  exit={{ rotate: "0deg", opacity: 0 }}
                  initial={{ opacity: 0, rotate: "0deg" }}
                  animate={{
                    opacity: 1,
                    rotate: "90deg",
                    transition: { duration: 0.5 }
                  }}
                >
                  <Plus
                    size={16}
                    className="text-gray-600 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute"
                  />
                </motion.div>
              )}
              {isOpen && (
                <motion.div
                  key="1"
                  exit={{ rotate: "180deg", opacity: 0 }}
                  initial={{ opacity: 0, rotate: "90deg" }}
                  animate={{
                    rotate: "360deg",
                    opacity: 1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Minus
                    size={16}
                    className="text-gray-600 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div
        id={`accordion-content-${title}`}
        role="region"
        aria-labelledby={`accordion-button-${title}`}
        className={`grid text-zinc-500 text-base pl-4 pr-4 transition-all duration-500 ${
          isOpen
            ? "pb-6 translate-y-2 opacity-1"
            : "pb-0 translate-y-0 opacity-0"
        }`}
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr"
        }}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
