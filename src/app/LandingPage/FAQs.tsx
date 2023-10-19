import React, { forwardRef } from "react"
import { Divider, SectionHeader } from "./Components"
import Gutter from "./Gutter"
import { ChevronDownIcon } from "lucide-react"
import { motion } from "framer-motion"
import FadeInOnView from "@/components/FadeInOnView"
import Accordion from "@/components/Accordion"

const faqs = [
  {
    question: "What is DesignPop?",
    answer:
      "We are a design and development agency that offers tailored subscription plans for creating exceptional websites and apps. We provide personalized design services to bring your vision to life.",
  },
  {
    question: "How does the subscription plan work?",
    answer:
      "Our subscription plan is a flexible monthly service that allows you to request website or app design and development.",
  },
  {
    question: "Can I request revisions to my design?",
    answer:
      "Absolutely! We encourage collaboration and offer unlimited design iterations. Your satisfaction is our priority, and we'll work closely with you to refine the design until it's perfect for you.",
  },
  {
    question: "What types of services are offered?",
    answer:
      "We specialize in web design and development, from landing pages to e-commerce websites, our team has the expertise to create visually stunning and functional designs.",
  },
  {
    question: "Can I cancel or pause my subscription plan?",
    answer:
      "Yes, you can pause or cancel your subscription plan at any time. We understand that needs change, and we're here to accommodate your evolving requirements.",
  },
  {
    question: "How long does it typically take to complete a design project?",
    answer:
      "The timeline varies based on the complexity and scale of the project. We strive for efficient turnarounds to ensure your project is completed in a timely manner without compromising quality.",
  },
]

const FAQs = () => {
  return (
    <section id="faqs" className="mt-20">
      <FadeInOnView>
        <Gutter>
          <SectionHeader>Frequently asked</SectionHeader>
          <Divider />

          <div className="mx-auto w-full">
            {
              faqs.map((d, k: number) => {
                return <Accordion {...d} key={k} />
              }) as any
            }
          </div>
        </Gutter>
      </FadeInOnView>
    </section>
  )
}

export default FAQs
