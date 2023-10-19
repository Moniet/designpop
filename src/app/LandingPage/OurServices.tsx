import { useEffect, useState } from "react"
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
      layoutId="shared-img"
      layout="position"
      transition={{
        duration: 0.5,
      }}
      src={src}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      className="h-full max-h-[125px] w-full max-w-[180px] rounded border-2 border-black object-cover xs:hidden lg:block"
    />
  )
}

const ExtraWidth = () => <div className="xs:hidden md:block md:min-w-[185px]" />

const OurServices = () => {
  const [mouseOver, setMouseOver] = useState("ideation")

  return (
    <section id="services">
      <Gutter>
        <div className="flex flex-col">
          <div>
            <SectionHeader>our services</SectionHeader>
          </div>
          <Divider />

          <div className="flex select-none flex-wrap justify-between gap-20 xs:flex-col lg:flex-row">
            <div className="flex-1 xs:mb-0 sm:mr-10 md:mb-10">
              <FadeInOnView>
                <Header className="whitespace-nowrap">
                  <h3>
                    A complete Tech
                    <br />
                    product team
                  </h3>
                </Header>

                <Para>
                  Transform your ideas into stunning, user-centric websites. Our
                  expert team ensures every pixel aligns with your vision.
                </Para>
              </FadeInOnView>
            </div>
            <div className="flex-1 xs:w-full xs:min-w-[300px] md:min-w-[500px]">
              <div
                onPointerEnter={() => setMouseOver("ideation")}
                className="relative"
              >
                <FadeInOnView>
                  <div>
                    <HeaderSm>Ideation + Prototyping</HeaderSm>
                    <div className="flex">
                      <ParaSm className="max-w-1/2">
                        We kick off by immersing ourselves in your project,
                        understanding your goals, target audience, and industry.
                        Wireframes and Prototyping turn our concepts into
                        tangible experiences.
                      </ParaSm>
                      <ExtraWidth />
                    </div>
                  </div>
                </FadeInOnView>
                <Divider />
                {mouseOver === "ideation" && (
                  <SharedImage src="/ideation.jpg" />
                )}
              </div>
              <motion.div
                onPointerEnter={() => setMouseOver("design")}
                className="relative"
                layoutRoot
                layout
              >
                <FadeInOnView>
                  <div>
                    <HeaderSm>Design</HeaderSm>
                    <div className="flex">
                      <ParaSm className="max-w-1/2">
                        We believe in thinking outside the box, delivering
                        creative solutions that set you apart in the digital
                        landscape. Our expert designers craft captivating
                        layouts that resonate with your brand&#39;s essence
                      </ParaSm>
                      <ExtraWidth />
                    </div>
                  </div>
                </FadeInOnView>
                {mouseOver === "design" && <SharedImage src="/design.jpg" />}
              </motion.div>

              <Divider />
              <div
                onPointerEnter={() => setMouseOver("dev")}
                className="relative"
              >
                <FadeInOnView>
                  <div>
                    <HeaderSm>Development</HeaderSm>
                    <div className="flex">
                      <ParaSm className="max-w-1/2">
                        Turn those designs into a reality with our proficient
                        developers. We code robust, responsive, and future-ready
                        websites, making sure your users have a seamless
                        browsing experience across devices.
                      </ParaSm>
                      <ExtraWidth />
                    </div>
                  </div>
                </FadeInOnView>
                {mouseOver === "dev" && <SharedImage src="/development.jpg" />}
              </div>
              <Divider />
            </div>
          </div>
        </div>
      </Gutter>

      <img src="/design.jpg" rel="preload" width={0} height={0} aria-hidden />
      <img src="/ideation.jpg" rel="preload" width={0} height={0} aria-hidden />
      <img
        src="/development.jpg"
        rel="preload"
        width={0}
        height={0}
        aria-hidden
      />
    </section>
  )
}

export default OurServices
