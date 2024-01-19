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
            href={ctaLink}
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
  // {
  //   isMain: false,
  //   title: "Design",
  //   rate: "$4950",
  //   rateSummary: "We deliver 3 pages at time",
  //   summary: "Super fast design & code completion",
  //   cta: "Get started",
  //   ctaLink: "https://tally.so/r/w4KK5r",
  //   ratePeriod: "/month",
  //   tags: [
  //     "48hr design delivery",
  //     "Responsive Design",
  //     "Landing Pages / Dashboards",
  //     "Unlimited design iterations",
  //     "Notion and Email Support",
  //   ],
  // },
  // {
  //   isMain: true,
  //   title: "Development",
  //   rate: "$4950",
  //   rateSummary: "Pause or cancel anytime",
  //   summary: "Two requests at a time",
  //   cta: "Get started",
  //   ctaLink: "https://tally.so/r/merzWe",
  //   ratePeriod: "/month",
  //   tags: [
  //     "Development turnaround 1 week",
  //     "E-commerce sites",
  //     "CMS development",
  //     "AI apps / sites",
  //     "Landing pages",
  //     "Cross-platform desktop/mobile apps",
  //     "SEO & On-Page optimization",
  //     "Advanced animations",
  //     "Unlimited design iterations",
  //   ],
  // },
  {
    isMain: false,
    title: "Let's talk",
    rate: "Get Started",
    // outline: false,
    ratePeriod: "",
    rateSummary: "Select one of our subscriptions, or set your own budget",
    summary: "Learn about how we can help",
    cta: "Contact Us",
    ctaLink: "https://calendar.app.google/Xs4uCryDAQJADdFb7",
    tags: [
      "Propose a different contractual agreement",
      "Discuss complex app requirements",
      "Learn about our process and expertise",
      "Dive into the details of our services",
      "Enquire about longterm contracts",
      // "Cross-platform desktop apps",
      // "SEO & On-Page optimization",
      // "Interactive animations",
      // "Unlimited design iterations",
    ],
  },
]

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/95RdziDjPnu
 */

function Section() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 bg-white p-8 md:col-span-2">
          <h2 className="font-heading text-2xl font-semibold">
            Subscription & Contracts
          </h2>
          <p className="mt-4 text-gray-600">
            We provide monthly subscriptions for design & development work with
            quick turnarounds. Pause anytime you want, or create a limited
            contract.
          </p>
          <div className="mt-8">
            <h3 className="font-heading text-lg font-semibold">
              What&#39;s included
            </h3>
            <div className="flex flex-wrap gap-10">
              <div className="mt-4 space-y-2">
                {/*
                  //     "48hr design delivery",
  //     "Responsive Design",
  //     "Landing Pages / Dashboards",
  //     "Unlimited design iterations",
  //     "Notion and Email Support",
                */}
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>48hr design delivery</span>
                </div>
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>Website / Landing Page Design</span>
                </div>
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>Unlimited design iterations</span>
                </div>
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>Pause or cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>Notion and Email Support</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>Website Development</span>
                </div>
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>E-Commerce Websites / CRM Integration</span>
                </div>
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>CMS Websites</span>
                </div>
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>AI Web Apps</span>
                </div>
                <div className="flex items-center">
                  <FaCircleCheck className="mr-2 text-black" size="15px" />
                  <span>SEO Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg border border-zinc-100 bg-white bg-zinc-100/30 p-8 shadow-lg">
          <div className="flex flex-col gap-2 text-center">
            <h3 className="font-heading text-lg font-semibold text-gray-700">
              Learn how we can help
            </h3>
            <h2 className="mt-2 text-4xl font-semibold">Work with Us</h2>
            <a
              className="mt-6 flex w-full items-center justify-center rounded-sm bg-black px-4 py-2 text-white"
              href="https://tally.so/r/merzWe"
              target="_blank"
            >
              <span>Get started</span>
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Select one of our subscriptions or set you own budget and we&#39;
              get right back to you
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const PricingSection = () => {
  return (
    <section id="pricing" className="mt-20">
      <Gutter>
        <SectionHeader>Pricing</SectionHeader>
        <Divider />
        <Section />
      </Gutter>
    </section>
  )
}

export default PricingSection
