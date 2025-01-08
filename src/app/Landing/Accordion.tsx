"use client"

import React, { ReactNode, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

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
    <div className="border-b border-b-zinc-100 rounded-lg overflow-hidden max-w-prose mx-auto">
      <button
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        className="w-full text-left px-4 transition duration-300" // Added transition for smoother hover effect
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <span
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
          >
            {" "}
            {/* Rotate icon with transition */}
            <ChevronDown size={16} className="text-gray-600" />{" "}
            {/* Added text color */}
          </span>
        </div>
      </button>

      <div
        id={`accordion-content-${title}`}
        role="region"
        aria-labelledby={`accordion-button-${title}`}
        className={`bg-white grid text-zinc-500 text-base px-4 py-2`}
        style={{
          transition: "grid-template-rows 0.5s ease-in-out",
          gridTemplateRows: isOpen ? "1fr" : "0fr"
        }} // Tailwind classes for animation: ;
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
