"use client"
import React from "react"
import Gutter from "./Gutter"
import { motion } from "framer-motion"
import { Divider, SectionHeader } from "./Components"
import { FaCircleCheck } from "react-icons/fa6"
import FadeInOnView from "@/components/FadeInOnView"
import { TrendingUp } from "lucide-react"

const TabItem = ({ setSelected, selectedId, id, label }: any) => {
  return (
    <div
      onClick={() => setSelected(id)}
      className="itesm-center relative flex-1 justify-center overflow-hidden rounded-full p-2"
    >
      {label}

      {selectedId === id && (
        <motion.div
          layoutId="tab-ellipse"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </div>
  )
}

const Tab = ({ setSelected, selected }: any) => {
  return (
    <div className="flex items-center justify-center rounded-full border border-zinc-100 p-1">
      <TabItem
        label="monthly"
        setSelected={setSelected}
        selectedId={selected}
        id={0}
      />
      <TabItem
        label="yearly"
        setSelected={setSelected}
        selectedId={selected}
        id={1}
      />
    </div>
  )
}

const PricingCard = ({
  isMain,
  title,
  rate,
  ratePeriod,
  rateSummary,
  summary,
  tags,
  cta,
  ctaLink,
  index,
  outline = TrendingUp,
}: any) => {
  return (
    <article className="flex flex-1 justify-center">
      <FadeInOnView
        delay={index / 4}
        className="flex h-full w-full max-w-[450px] flex-1 justify-center"
      >
        <div
          className={`flex h-full flex-1 grow flex-col rounded-md border px-12 py-8 text-black sm:w-[350px]  ${
            !outline
              ? "border-[transparent]"
              : isMain
              ? "border-zinc-400"
              : "border-zinc-300"
          }`}
        >
          <p className="mb-8 font-heading font-medium text-[#111827] xs:text-sm sm:text-base">
            {title}
          </p>
          <p className="font-heading text-[#111827] xs:text-3xl sm:text-4xl md:text-5xl">
            {rate}
            <span className="mb-5 text-base"> {ratePeriod}</span>
          </p>
          <p className="mt-5 h-[30px] text-sm text-[#6B7280]">{rateSummary}</p>
          <a
            href="https://tally.so/r/merzWe"
            className="my-5 w-full rounded bg-black px-3 py-2 text-center text-white"
          >
            {cta}
          </a>
          <p className="text-medium mb-7 text-black xs:text-sm md:text-base">
            {summary}
          </p>
          {
            <ul className="flex flex-col gap-3">
              {tags.map((tag: string, i: number) => {
                return (
                  <li
                    key={i}
                    className="flex items-center gap-2 font-light text-[#4B5563] xs:text-xs sm:text-sm"
                  >
                    <FaCircleCheck
                      className="text-[#1a1a1a] xs:min-w-[13px] xs:max-w-[13px] md:min-w-[15px] md:max-w-[15px]"
                      size="100%"
                    />

                    <p>{tag}</p>
                  </li>
                )
              })}
            </ul>
          }
        </div>
      </FadeInOnView>
    </article>
  )
}

const pricingData = [
  {
    isMain: false,
    title: "Basic",
    rate: "$1950",
    rateSummary: "We delivery 3 pages at a time",
    summary: "Superfast design & code completion",
    cta: "Get started",
    ctaLink: "https://tally.so/r/merzWe",
    ratePeriod: "/page",
    tags: [
      "48hr design delivery",
      "Development within 1 week",
      "You own the code",
      "Responsive Development",
      "Landing Pages / Dashboards",
      "Unlimited design iterations",
      "SEO and Page optimisation",
      "Notion and Email Support",
    ],
  },
  {
    isMain: true,
    title: "Pro",
    rate: "$6450",
    rateSummary: "Pause or cancel anytime",
    summary: "Two requests at a time",
    cta: "Get started",
    ctaLink: "https://tally.so/r/merzWe",
    ratePeriod: "/month",
    tags: [
      "Design turnaround of 2 days",
      "Development turnaround 1 week",
      "E-commerce sites",
      "CMS development",
      "Landing pages",
      "Cross-platform desktop/mobile apps",
      "SEO & On-Page optimization",
      "Advanced animations",
      "Unlimited design iterations",
    ],
  },
  {
    isMain: false,
    title: "Let's talk",
    rate: "Book a call",
    // outline: false,
    ratePeriod: "",
    rateSummary: "Have something else in mind? Get in touch!",
    summary: "Learn about how we can help",
    cta: "Contact Us",
    ctaLink: "https://calendar.app.google/Xs4uCryDAQJADdFb7",
    tags: [
      "Propose a different contractual agreement",
      "Discuss complex app requirements",
      "Learn about our process and expertise",
      "Dive into the details of our services",
      "Enquire about longterm contracts"
      // "Cross-platform desktop apps",
      // "SEO & On-Page optimization",
      // "Interactive animations",
      // "Unlimited design iterations",
    ],
  },
]

const PricingSection = () => {
  return (
    <section id="pricing" className="mt-20">
      <Gutter>
        <SectionHeader>Pricing</SectionHeader>
        <Divider />
        <div className="flex flex-wrap justify-center gap-8">
          {pricingData.map((data, i) => {
            return <PricingCard {...data} key={i} index={i} />
          })}
        </div>
      </Gutter>
    </section>
  )
}

export default PricingSection
