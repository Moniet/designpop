import React from "react"
import {
  BadgeDollarSign,
  CopyCheck,
  LucideComputer,
  LucidePiggyBank,
  MessagesSquare,
  MonitorSmartphone,
  Wand2,
  Zap,
} from "lucide-react"

import { Divider, Header, HeaderSm, ParaSm, SectionHeader } from "./Components"
import Gutter from "./Gutter"
import FadeInOnView from "@/components/FadeInOnView"
import { FaMoneyBill } from "react-icons/fa6"

const data = [
  {
    title: "Superfast Turnarounds",
    summary:
      "Time is of the essence. We value efficiency and strive for quick turnarounds without compromising on quality. Get your project off the ground and running in no time.",
    icon: <Zap />,
  },
  {
    title: "Custom Design Solutions",
    summary:
      "We believe in uniqueness, no templates! Our expert designers craft custom solutions, aligning with your brand's identity and goals. From captivating websites to engaging mobile apps, we bring your vision to life. ",
    icon: <Wand2 />,
  },
  {
    title: "Iterative Design Process",
    summary:
      "Your satisfaction is our priority. We provide an iterative design process, allowing for multiple rounds of revisions until your design is perfect. Collaboration is key, and we're dedicated to achieving the ideal outcome.",
    icon: <CopyCheck />,
  },
  {
    title: "Responsive & Future-Ready Development",
    summary:
      "Our designs are built to adapt and excel in today's digital landscape. We focus on responsive design, ensuring a seamless user experience across various devices.",
    icon: <MonitorSmartphone />,
  },
  {
    title: "Flexible Subscription Plans",
    summary:
      "Choose a subscription plan that suits your requirements and budget. Our plans offer flexibility and affordability, ensuring that you get the most value for your investment.",
    icon: <BadgeDollarSign />,
  },
  {
    title: "Seamless Communication",
    summary:
      "We utilize an asynchronous workflow, employing tools like Trello and Notion, to keep you informed, gather feedback, and ensure a smooth collaboration regardless of time zones or locations.",
    icon: <MessagesSquare />,
  },
]

const InfoItem = ({ title, icon, summary, index }: any) => {
  return (
    <FadeInOnView className="flex-1" delay={index / 10}>
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-sm bg-zinc-900 text-white">
          {icon}
        </div>
        <div className="-mb-3">
          <HeaderSm className="pb-0">{title}</HeaderSm>
        </div>
        <ParaSm>{summary}</ParaSm>
      </div>
    </FadeInOnView>
  )
}

const WhatWeBring = () => {
  return (
    <section className="mt-20">
      <Gutter>
        <SectionHeader>What we bring to the table</SectionHeader>
        <Divider />
        <FadeInOnView>
          <Header className="mb-4">
            Leave the heavy
            <br /> lifting to us
          </Header>
        </FadeInOnView>

        <div className="xs:align-center mt-16  grid gap-20 xs:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
          {data.map((d, i) => {
            return <InfoItem key={i} {...d} index={i} />
          })}
        </div>
      </Gutter>
    </section>
  )
}

export default WhatWeBring
