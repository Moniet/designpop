import { useState } from "react"
import {
  Divider,
  Header,
  SectionHeader,
  Para,
  HeaderSm,
  ParaSm,
} from "./Components"
import { AnimatePresence, motion } from "framer-motion"
import Gutter from "./Gutter"
import FadeInOnView from "@/components/FadeInOnView"

const SharedImage = ({ src = "https://placehold.co/600x400" }) => {
  return (
    <motion.img
      layout="position"
      initial={{
        x: 0,
        y: 0,
      }}
      animate={{
        y: 0,
        rotate: -30,
      }}
      layoutId="shared-img"
      src={src}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      className="h-full max-h-[125px] w-full max-w-[180px] rounded  border border-2 border-black object-cover"
    />
  )
}

const Item = ({
  step,
  title,
  para,
}: {
  step: number
  title: string
  para: string
}) => {
  return (
    <FadeInOnView className="flex xs:gap-5 md:gap-10">
      <p className="mt-[5px] whitespace-nowrap text-black xs:text-sm md:text-base">
        step 0{step}
      </p>
      <div>
        <HeaderSm>{title}</HeaderSm>
        <ParaSm className="max-w-1/2">{para}</ParaSm>
      </div>
    </FadeInOnView>
  )
}

const items = [
  {
    step: 1,
    title: "Select Subscription Plan",
    para: "Begin by choosing the subscription plan that aligns perfectly with your needs and aspirations. Designpop offers flexible options tailored to fit your budget and objectives.",
  },
  {
    step: 2,
    title: "Request your Design",
    para: "Share your project details and preferences with us. Whether it's a captivating website or a sleek mobile app, our talented team is ready to bring your ideas to life.",
  },
  {
    step: 3,
    title: "Iterate until you are thrilled",
    para: "We believe in perfection through collaboration. Request as many design iterations as you need. Your satisfaction is our priority, and we're dedicated to refining and tweaking until you're absolutely delighted with the result.",
  },
]

const HowItWorks = () => {
  return (
    <section id="services">
      <Gutter>
        <div className="flex flex-col">
          <div>
            <SectionHeader>how it works</SectionHeader>
          </div>
          <Divider />

          <div className="flex select-none flex-wrap justify-between xs:flex-col lg:flex-row">
            <div className="mb-10 flex-1 sm:mr-10">
              <FadeInOnView className="mb-10">
                <Header>
                  <h3>
                    Curious about how
                    <br />
                    it all works?
                  </h3>
                </Header>
              </FadeInOnView>
            </div>
            <div className="flex flex-1 flex-col gap-12 md:min-w-[400px]">
              {items.map((d) => (
                <Item key={d.step} {...d} />
              ))}
            </div>
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export default HowItWorks
