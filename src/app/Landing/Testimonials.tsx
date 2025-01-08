import { useInView } from "../hooks/useInView"
import FadeInOnView from "./FadeInOnView"
import { motion } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 }, // Initial blur
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 1,
    transition: { duration: 1 }
  } // Remove blur on visibility
}

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    root: globalThis?.window?.document
  })

  return (
    <>
      <FadeInOnView>
        <div className="flex flex-col items-center">
          <div className="text-zinc-900 border ring-2 ring-inset ring-zinc-100/50 border-zinc-400/20 shadow-sm rounded-full px-4 py-1 text-xs xl:text-base font-medium">
            Testimonials
          </div>
          <h2 className="headline text-2xl sm:text-3xl xl:text-4xl text-center mt-5 font-medium mb-16 capitalize">
            Reviews from growing businesses
          </h2>
        </div>
      </FadeInOnView>
      <motion.div
        ref={ref}
        className="columns-1 sm:columns-2 lg:columns-3 overflow-hidden h-fit w-full space-y-5"
        style={{ columnWidth: "150px" }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        viewport={{ once: true }}
      >
        <motion.div
          variants={itemVariants}
          className="border border-zinc-200/50 p-7 rounded-[15px]"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <div className="flex gap-3 items-center">
            <div className="size-[40px] rounded-full overflow-hidden bg-zinc-100">
              <img src="/img/florian.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-medium headline text-base">Florian Brauer</p>
              <p className="text-base text-zinc-500">CTO of Gavel GmbH</p>
            </div>
          </div>
          <p className="text-base sm:text-lg xl:text-xl leading-8 mt-5 font-normal">
            {
              '"Working with designpop has been incredibly productive for us founders at Gavel. We have been able to experiment with several ideas in a short time to see what sticks. Their excellent communication keeps things high-quality and quick. I can\'t recommend them enough!"'
            }
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border border-zinc-200/50 p-7 rounded-[15px]"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <div className="flex gap-3 items-center">
            <div className="size-[40px] rounded-full overflow-hidden bg-zinc-100">
              <img src="/img/david.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-medium headline text-base">David Cheung</p>
              <p className="text-base text-zinc-500">
                Lead Engineer at Climb Credit
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg xl:text-xl leading-8 mt-5 font-normal">
            {
              '"I can\'t recommend designpop highly enough, they are conscientious self-starters, who were able to work closely with our product manager, designers, and other engineers to deliver an MVP of our student facing checkout experience in record time."'
            }
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border border-zinc-200/50 p-7 rounded-[15px]"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <div className="flex gap-3 items-center">
            <div className="size-[40px] rounded-full overflow-hidden bg-zinc-100">
              <img src="/img/marvin.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-medium headline text-base">Marvin Musialek</p>
              <p className="text-base text-zinc-500">Founder of Strom AI</p>
            </div>
          </div>
          <p className="text-base sm:text-lg xl:text-xl leading-8 mt-5 font-normal">
            {
              '"What impressed me most about designpop was their ability to transform our rough concept into a polished product in just two weeks. Their team\'s attention to detail and quick turnaround time helped us launch faster than we ever thought possible. They truly deliver on their promise of speed without compromising quality."'
            }
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border border-zinc-200/50 p-7 rounded-[15px] row-span-10"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <div className="flex gap-3 items-center">
            <div className="size-[40px]  aspect-square min-w-[40px] rounded-full overflow-hidden bg-zinc-100 border border-zinc-100">
              <img src="/img/sash.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-medium headline text-base">Sashi Kumar</p>
              <p className="text-base text-zinc-500 whitespace-nowrap overflow-hidden overflow-ellipsis">
                M.D at Phoenix Medical Systems
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg xl:text-xl leading-8 mt-5 font-normal">
            &#34;Designpop re-vamped our website in one week and helped
            tremendously boosted our SEO rankings in just 1 month. We are now
            outranking our competitors on Google search and also have a high
            quality design that gives our company a great image to potential
            customers on a international scale.&#34;
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border border-zinc-200/50 p-7 rounded-[15px] row-span-10"
          style={{ pageBreakInside: "avoid", breakInside: "avoid" }}
        >
          <div className="flex gap-3 items-center">
            <div className="size-[40px]  aspect-square min-w-[40px] rounded-full overflow-hidden bg-zinc-100">
              <img src="/img/kris.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-medium headline text-base">Kristijan Binski</p>
              <p className="text-base text-zinc-500 whitespace-nowrap">
                Founder of Wandergates
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg xl:text-xl leading-8 mt-5 font-normal">
            {`"I've worked with many agencies, but designpop is the real
        deal! They worked with us to ship a client's app in just a
        couple of weeks, and their post-launch support is organised
        and invaluable"`}
            .
          </p>
        </motion.div>
        <motion.div
          className="border border-zinc-200/50 p-7 rounded-[15px] row-span-10"
          variants={itemVariants}
        >
          <div className="flex gap-3 items-center">
            <div className="size-[40px]  aspect-square min-w-[40px] rounded-full overflow-hidden bg-zinc-100">
              <img src="/img/mohit.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-medium headline text-base">Mohit Yadav</p>
              <p className="text-base text-zinc-500 whitespace-nowrap">
                CTO of BoldCare
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg xl:text-xl leading-8 mt-5 font-normal">
            &#34;The development service was simply excellent! designpop not
            only helped deliver our site re-design in a matter weeks but also
            cleaned up our React architecture by a long shot. The quality
            output, coupled with the increase in developer experience was a
            delightful outcome!&#34;
          </p>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Testimonials
