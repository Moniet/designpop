import React from "react"
import { Header } from "./Components"
import Gutter from "./Gutter"
import FadeInOnView from "@/components/FadeInOnView"

const ContactUs = () => {
  return (
    <section id="contact">
      <FadeInOnView>
        <Gutter>
          <div className="flex flex-col items-center py-10">
            <Header className="text-zinc-700">
              Effortlessly onboard a<br /> Tech Team in minutes
            </Header>
            <button className="mt-8 rounded bg-black px-7 py-3 text-center text-white">
              Get started
            </button>
          </div>
        </Gutter>
      </FadeInOnView>
    </section>
  )
}

export default ContactUs
