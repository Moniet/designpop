import { ArrowRight, Check } from "lucide-react"
import React, { useState } from "react"
import { BiStopwatch } from "react-icons/bi"
import { AnimatePresence, motion } from "motion/react"
import { pricing } from "@/prices"

const optionData = [
  {
    title: "Landing Page",
    timeline: "1 week",
    calEvent: "designpop/30-min-meeting-landing-page",
    description: "Landing page design + development",
    bulletsHeading: "Re-vamp, validate, or build a new site:",
    bullets: [
      "SEO: Keyword research & On-Page SEO",
      "48 hour turn-around for designs",
      "Figma file delivery",
      "Design: One full page included <b>($99+ per extra page)</b>",
      "Development: 2 pages included <b>($99+ per extra page)</b>",
      "2 revision requests"
    ],
    price: { amount: pricing.landingPage, detail: " /landing page" }
  },
  {
    title: "MVP Design & Dev.",
    timeline: "2-4 weeks",
    calEvent: "designpop/30-min-meeting-mvp",
    description: "Receive a functioning MVP in record time",
    bulletsHeading: "Build a simple or complex MVP:",
    bullets: [
      "Simple MVP in 2 weeks",
      "2 design revisions",
      "Own the codebase",
      "2-3 core features",
      "Milestone based pricing",
      "3 months support <small>(extendable)</small>"
    ],
    bullets2: [
      "Complex MVP in 4-8 weeks",
      "4 design revisions",
      "4-6 core features",
      `${pricing.complexMVP} / complex mvp`,
      "Milestone based pricing",
      "6 months support <small>(extendable)</small>"
    ],
    price: { amount: pricing.simpleMVP, detail: " /Simple MVP" }
  },
  {
    title: `Subscription`,
    calEvent: "designpop/30-min-meeting-subscription",
    timeline: "",
    description: "Design + dev. work on a monthly basis",
    bullets: [
      "Unlimited monthly design requests",
      "Unlimited development requests",
      "Access to Slack & Notion for async work",
      "Pause or cancel subscription at anytime",
      "Priority support"
    ],
    bulletsHeading: "Everything that's included:",
    price: { amount: pricing.subscription, detail: " /month" }
  },
  {
    title: `Subcription Trial`,
    calEvent: "designpop/30-min-meeting-subscription",
    timeline: "",
    description: "Get a taste of working with designpop",
    bullets: [
      `<a href="#unlimited-requests-faq"><span class="text-zinc-500">Unlimited design</span></a> requests`,
      `<a href="#unlimited-requests-faq"><span class="text-zinc-500">Unlimited development</span></a> requests`,
      "Access to Slack & Notion for async work",
      "Pause or cancel subscription at anytime",
      "Priority support"
    ],
    bulletsHeading: "Everything that's included:",
    price: { amount: pricing.subscriptionTrial, detail: " /2 weeks" }
  }
]

const Pricing = () => {
  const [selected, setSelected] = useState(0)
  const [isTrial] = useState(false)
  const data = optionData[selected]

  return (
    <div className="flex flex-col" id="pricing">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-16 [text-wrap:balance]">
        Simple Pricing,
        <wbr /> Big Results
      </h2>
      <div className="flex rounded-full bg-[#f9f9f9] border p-[0.3rem] border-[#e8e8e8] w-fit mx-auto font-semibold">
        <button
          className={`p-4 transition-all rounded-full text-base text-zinc-900 ${
            selected === 0 ? "bg-white shadow" : "bg-transparent"
          }`}
          onClick={() => setSelected(0)}
        >
          Landing <span className="max-sm:hidden">Page</span>
        </button>
        <button
          className={`p-4 transition-all rounded-full text-base text-zinc-900 min-w-[70px] ${
            selected === 1 ? "bg-white shadow" : "bg-transparent"
          }`}
          onClick={() => setSelected(1)}
        >
          MVP
        </button>
        <button
          className={`p-4 transition-all rounded-full text-base text-zinc-900 ${
            selected === 2 ? "bg-white shadow" : "bg-transparent"
          }`}
          onClick={() => setSelected(2)}
        >
          Subscription
        </button>
        <button
          className={`p-4 px-5  md:px-6 transition-all rounded-full text-base text-zinc-900 ${
            selected === 3 ? "bg-white shadow" : "bg-transparent"
          }`}
          onClick={() => setSelected(3)}
        >
          Trial
        </button>
      </div>

      <div
        className={`w-full max-w-[600px] mx-auto rounded-[30px] bg-[#f9f9f9] border border-[#e8e8e8] mt-20 pb-10 `}
      >
        <div className="p-3">
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[25px]">
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="text-3xl font-bold leading-[1] w-[45px] -mt-1">
                  0{selected + 1}
                </div>
                <div className="flex gap-[0.2rem] -mb-2">
                  <div
                    className={`size-2 rounded-full ${
                      selected >= 0 ? "bg-blue-700" : "bg-zinc-200"
                    }`}
                  ></div>
                  <div
                    className={`size-2 rounded-full ${
                      selected >= 1 ? "bg-blue-700" : "bg-zinc-200"
                    }`}
                  ></div>
                  <div
                    className={`size-2 rounded-full ${
                      selected >= 2 ? "bg-blue-700" : "bg-zinc-200"
                    }`}
                  ></div>
                  <div
                    className={`size-2 rounded-full ${
                      selected >= 3 ? "bg-blue-700" : "bg-zinc-200"
                    }`}
                  ></div>
                </div>
              </div>

              <AnimatePresence mode="popLayout">
                <motion.div
                  layout
                  key={selected}
                  exit={{ opacity: 0, transition: { delay: 0.2 } }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                  initial={{ opacity: 0 }}
                  // animate={{
                  //   opacity: data.timeline ? 1 : 0,
                  //   transition: { type: "spring", duration: 0.5 }
                  // }}
                  className="h-14 whitespace-nowrap"
                >
                  <div className="text-right text-zinc-500 font-semibold">
                    {selected === 2 || selected === 3
                      ? "Ideal for ongoing"
                      : "Done in"}
                  </div>
                  <div className="flex items-center font-semibold">
                    <BiStopwatch
                      className={`size-4 mr-1 text-zinc-500 -mb-[1px] ${
                        selected === 2 || selected === 3
                          ? "hidden"
                          : "inline-block"
                      }`}
                      stroke="3"
                    />
                    <span className="text-zinc-900 whitespace-nowrap">
                      {selected === 2 || selected === 3
                        ? "long term work"
                        : data.timeline}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="sm:mt-12 mt-8 lg:mt-16">
              <div className="flex max-md:flex-col w-full max-md:items-start items-center justify-between">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize"
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.5 },
                      filter: "blur(10px)"
                    }}
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.6 },
                      filter: "blur(0px)"
                    }}
                    key={data.title}
                  >
                    {data.title}
                  </motion.div>
                  <motion.div
                    layout="position"
                    className="text-lg sm:text-xl lg:text-2xl font-semibold whitespace-nowrap"
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.5 },
                      filter: "blur(2px)"
                    }}
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 }
                    }}
                    key={isTrial ? 1499 : data.price.amount}
                  >
                    {isTrial ? "$1499" : data.price.amount}
                    <span className="text-zinc-500 text-xl">
                      {isTrial ? " /2 weeks" : data.price.detail}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode={"wait"}>
                <motion.p
                  className="text-base md:text-lg mt-7 text-zinc-500 font-medium md:whitespace-nowrap"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  key={data.description}
                >
                  {data.description}
                </motion.p>
              </AnimatePresence>
            </div>
            <motion.button
              className="mt-16 px-[2px] py-[3px] pl-8 h-[50px] text-xs xl:text-base bg-[rgb(42,41,255)] rounded-full text-center text-white w-fit mr-3 flex items-center justify-between whitespace-nowrap max-h-fit"
              // href="https://cal.com/designpop/30min"
              data-cal-link={data.calEvent}
              data-cal-config='{"layout":"month_view"}'
              initial={{ y: 20, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.9,
                filter: "blur(10px)",
                type: "spring"
              }}
            >
              <div className="font-medium mr-5 captialize">Get started</div>
              <div className="size-[45px] bg-white  rounded-full text-[rgb(42,41,255)] flex">
                <div className="m-auto -rotate-45">
                  <ArrowRight className="size-[18px]" strokeWidth={2} />
                </div>
              </div>
            </motion.button>
          </div>
        </div>
        <div className="max-sm:px-4">
          <div className="text-[#171717] font-semibold mb-10 pl-2 sm:pl-12 lg:pl-16 mt-16">
            {data.bulletsHeading}
          </div>
          <div className="flex w-full gap-5 md:gap-10">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.ul
                className="flex flex-col gap-2 pl-2 sm:pl-12 lg:pl-16 text-[#171717]/50 text-lg"
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                key={selected}
              >
                {data.bullets.map((d, i) => (
                  <li className="flex flex-2 gap-2 items-center" key={i}>
                    <Check
                      className="size-4 md:size-6 min-w-6 text-zinc-900"
                      strokeWidth={2}
                    />
                    <p
                      className="text-sm md:text-base font-semibold"
                      dangerouslySetInnerHTML={{ __html: d }}
                    />
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
            <ul className="flex flex-col gap-2 text-[#171717]/50 text-lg ">
              {data.bullets2?.map((d, i) => (
                <li className="flex flex-2 gap-2 items-center" key={i}>
                  <Check
                    className="size-4 md:size-6 min-w-6 text-zinc-900"
                    strokeWidth={2}
                  />
                  <p
                    className="text-sm md:text-base font-semibold"
                    dangerouslySetInnerHTML={{ __html: d }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-5" />
      </div>
    </div>
  )
}

export default Pricing
