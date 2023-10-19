import React from "react"
import { FaQuoteLeft } from "react-icons/fa6"
import Gutter from "./Gutter"
import { LucideQuote } from "lucide-react"
import FadeInOnView from "@/components/FadeInOnView"

const TestimonialQuote = ({
  quote,
  position,
  citeUrl,
  personsName,
}: {
  quote: string
  position: string
  citeUrl: string
  personsName: string
}) => {
  return (
    <section>
      <FadeInOnView>
        <Gutter>
          <div className="relative mx-auto mt-20 flex w-full max-w-prose items-start font-heading text-zinc-900">
            <span
              className="mr-2 flex h-full translate-y-[8px] items-start p-0 font-body leading-[0.5] xs:text-[100px] md:text-[150px]"
              role="img"
            >
              “
            </span>

            <blockquote cite={citeUrl} className="flex flex-col items-end">
              <p className="xs:text-[1rem] xs:leading-8  md:text-[1.5rem] md:leading-10 ">
                {quote}
              </p>
              <footer className="text-heading align-end mt-5 flex flex-col text-right font-light  leading-[2rem] xs:text-sm md:text-base">
                {personsName}
                <span className="non-italic font-thin text-zinc-500  xs:text-xs md:text-sm">
                  {position}
                </span>
              </footer>
            </blockquote>
          </div>
        </Gutter>
      </FadeInOnView>
    </section>
  )
}

export default TestimonialQuote
