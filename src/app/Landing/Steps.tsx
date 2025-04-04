// <b>1.</b> Discovery Call{" "}
// <b>2. Select Your Plan</b>{" "}
// <b>3. Receive Design</b>{" "}
// <b>4. Receive Design</b>{" "}

import {
  LucideCheck,
  LucideCode2,
  LucidePaintBucket,
  LucidePhoneCall,
  LucideRocket,
} from "lucide-react";
import { motion } from "motion/react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { SiNotion } from "react-icons/si";

const Steps = () => {
  return (
    <div className="flex gap-10 max-lg:flex-col items-start min-h-fit">
      <div className="lg:sticky top-20 left-0 bottom-20 h-fit mb-12 lg:h-[50dvh]">
        <div className="min-h-fit pb-1 overflow-hidden max-h-fit">
          <motion.h2
            className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-semibold sm:whitespace-nowrap -tracking-[0.1rem]"
            initial={{ y: 30 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, transition: { type: "spring", damping: 12 } }}
          >
            Our quick,
            <br className="sm:hidden" /> 4 step process
          </motion.h2>
        </div>
        <div className="h-fit overflow-visible max-h-fit mt-4">
          <motion.p
            className="text-base lg:text-xl text-zinc-500 block font-medium [text-wrap:pretty]"
            initial={{ y: 20, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { type: "spring", damping: 12, delay: 0.2 },
            }}
          >
            Get started with building your project in 4 simple steps.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          }}
          className="w-full mt-10 space-y-2"
        >
          {/* <li className="flex items-center">
            <div className="size-[15px] rounded-full flex items-center justify-center bg-zinc-200 mr-2">
              <LucideCheck
                strokeWidth={4}
                className="text-zinc-500 m-auto w-[7px] -mt-[4px]"
              />
            </div>
            <span className="text-zinc-500 min-[375px]:text-sm text-xs lg:text-base  ">
              Payment done securely through{" "}
            </span>
            <span className="h-0 overflow-visible inline-flex items-center -mb-[3px]">
              <FaStripe
                className="text-violet-700 inline-block ml-1 align-baseline min-w-[32px] h-auto w-[32px]"
                size="100%"
              />
            </span>
          </li> */}
          <li className="flex items-center">
            <div className="size-[15px] rounded-full flex items-center justify-center bg-zinc-200 mr-2">
              <LucideCheck
                strokeWidth={4}
                className="text-zinc-500 m-auto w-[7px] -mt-[4px]"
              />
            </div>
            <span className="text-zinc-500 min-[375px]:text-sm text-xs lg:text-base  ">
              Designs delivered on Figma
            </span>
            <svg
              className="w-[10px] ml-2"
              viewBox="0 0 400 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 500C0 444.772 44.772 400 100 400H200V500C200 555.228 155.228 600 100 600C44.772 600 0 555.228 0 500Z"
                fill="#24CB71"
              />
              <path
                d="M200 0V200H300C355.228 200 400 155.228 400 100C400 44.772 355.228 0 300 0H200Z"
                fill="#FF7237"
              />
              <path
                d="M299.167 400C354.395 400 399.167 355.228 399.167 300C399.167 244.772 354.395 200 299.167 200C243.939 200 199.167 244.772 199.167 300C199.167 355.228 243.939 400 299.167 400Z"
                fill="#00B6FF"
              />
              <path
                d="M0 100C0 155.228 44.772 200 100 200H200V0H100C44.772 0 0 44.772 0 100Z"
                fill="#FF3737"
              />
              <path
                d="M0 300C0 355.228 44.772 400 100 400H200V200H100C44.772 200 0 244.772 0 300Z"
                fill="#874FFF"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <div className="size-[15px] rounded-full flex items-center justify-center bg-zinc-200 mr-2">
              <LucideCheck
                strokeWidth={4}
                className="text-zinc-500 m-auto w-[7px] -mt-[4px]"
              />
            </div>
            <span className="text-zinc-500 min-[375px]:text-sm text-xs lg:text-base  ">
              Communicate seamlessly through Slack{" "}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[15px] ml-2"
              viewBox="0 0 54 54"
              role="presentation"
            >
              <title>Slack</title>
              <g fill="none" fillRule="evenodd">
                <path
                  d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
                  fill="#44BEDF"
                />
                <path
                  d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
                  fill="#2EB67D"
                />
                <path
                  d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
                  fill="#ECB22E"
                />
                <path
                  d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
                  fill="#E01E5A"
                />
              </g>
            </svg>
          </li>
          <li className="flex items-center">
            <div className="size-[15px] rounded-full flex items-center justify-center bg-zinc-200 mr-2">
              <LucideCheck
                strokeWidth={4}
                className="text-zinc-500 m-auto w-[7px] -mt-[4px]"
              />
            </div>
            <span className="text-zinc-500 min-[375px]:text-sm text-xs lg:text-base  ">
              Product management through Notion{" "}
            </span>
            <SiNotion
              className="text-zinc-900 inline-block ml-2 align-baseline"
              size={15}
            />
          </li>

          <li className="flex items-center">
            <div className="size-[15px] rounded-full flex items-center justify-center bg-zinc-200 mr-2">
              <LucideCheck
                strokeWidth={4}
                className="text-zinc-500 m-auto w-[7px] -mt-[4px]"
              />
            </div>
            <span className="text-zinc-500 min-[375px]:text-sm text-xs lg:text-base">
              We develop with{" "}
              <RiReactjsFill className="size-[15px] text-blue-700 inline-block -mt-1" />{" "}
              React
            </span>
            <RiNextjsFill className="size-[17px] mx-1" />
            <span className="text-zinc-500 min-[375px]:text-sm text-xs lg:text-base">
              Next.js and{" "}
            </span>
            <span className="text-zinc-500 min-[375px]:text-sm text-xs lg:text-base ml-1">
              <RiNodejsFill className="size-[15px] text-green-500 inline-block -mt-1" />{" "}
              Node.js
            </span>
          </li>
        </motion.div>
      </div>
      <div className="ml-2 sm:ml-10 md:ml-8 lg:ml-20 xl:ml-40 h-full relative flex flex-col items-start">
        <div className="w-full sticky top-20 left-0 h-[50dvh] flex flex-col border-l border-l-[rgb(159,159,253)] ">
          <div className="bg-[rgb(41,42,255)] text-white text-2xl p-2 flex size-[30px] sm:size-[50px] rounded-full -translate-x-1/2 font-semibold">
            <span className="m-auto">
              <LucidePhoneCall className="size-3 sm:size-4" />
            </span>
          </div>

          <div className="[box-shadow:10px_-20px_10px_white] ml-5 sm:ml-16 lg:ml-20 h-[50dvh] relative flex items-start -mt-[28px] sm:-mt-[50px]">
            <div className="max-sm:hidden portrait:sm:lg:hidden text-zinc-100 text-[100px] sm:text-[140px] lg:text-[170px] font-bold leading-[0.75] w-[100px] text-center">
              1
            </div>
            <div>
              <motion.h2
                className="text-2xl lg:text-3xl ml-5 sm:ml-10 font-semibold flex items-center drop-shadow-2xl -tracking-[0.1rem]"
                initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 1, delay: 0.5 },
                }}
              >
                Discovery Call
              </motion.h2>
              <motion.p
                className="text-base ml-5 sm:ml-10 mt-5 text-zinc-500 drop-shadow-2xl max-w-[350px]"
                initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 1, delay: 0.5 },
                }}
              >
                In this quick 30 minute call, we will discuss your idea and
                propose a timeline to bring your vision to life. Once we reach
                an agreement, we move quick and get started on your project
                immediately.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full sticky top-20 left-0 h-[50dvh] flex flex-col border-l border-l-[rgb(159,159,253)] ">
          <div className="bg-[rgb(41,42,255)] text-white text-2xl p-2 flex size-[30px] sm:size-[50px] rounded-full -translate-x-1/2 font-semibold">
            <span className="m-auto">
              <LucidePaintBucket className="size-3 sm:size-4" />
            </span>
          </div>

          <div className="[box-shadow:10px_-20px_10px_white] ml-5 sm:ml-16 lg:ml-20 h-[50dvh] relative flex items-start -mt-[36px] sm:-mt-[50px] bg-white pt-2 pb-5 rounded-xl">
            <div className="max-sm:hidden portrait:sm:lg:hidden text-zinc-100 text-[100px] sm:text-[140px] lg:text-[170px] font-bold leading-[0.75] w-[100px] text-center">
              2
            </div>
            <div>
              <motion.h2
                className="text-2xl lg:text-3xl ml-5 sm:ml-10 font-semibold flex items-center drop-shadow-2xl -tracking-[0.1rem]"
                initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                Design Delivery
              </motion.h2>
              <motion.p
                className="text-base ml-5 sm:ml-10 mt-5 text-zinc-500 drop-shadow-2xl max-w-[350px]"
                initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                You will have access to Notion & Slack to effectively
                communicate with us and manage guidelines for the design work.
                Once the requirements are received, you can expect the first
                design iterations in approximately 48 hours.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full sticky top-20 left-0 h-[50dvh] flex flex-col border-l border-l-[rgb(159,159,253)]">
          <div className="bg-[rgb(41,42,255)] text-white text-2xl p-2 flex size-[30px] sm:size-[50px] rounded-full -translate-x-1/2 font-semibold">
            <span className="m-auto">
              <LucideCode2 className="size-3 sm:size-4" />
            </span>
          </div>
          <div className="[box-shadow:10px_-20px_10px_white] ml-5 sm:ml-16 lg:ml-20 h-[50dvh] relative flex items-start -mt-[36px] sm:-mt-[50px] bg-white pt-2 pb-5 rounded-xl">
            <div className="max-sm:hidden portrait:sm:lg:hidden text-zinc-100 text-[100px] sm:text-[140px] lg:text-[170px] font-bold leading-[0.75] w-[100px] text-center">
              3
            </div>
            <div>
              <motion.h2
                className="text-2xl lg:text-3xl ml-5 sm:ml-10 font-semibold flex items-center drop-shadow-2xl -tracking-[0.1rem]"
                initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                Development
              </motion.h2>
              <motion.p
                className="text-base ml-5 sm:ml-10 mt-5 text-zinc-500 drop-shadow-2xl max-w-[350px]"
                initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                Once the designs are finalized, we will start developing the app
                and providing regular updates on the progress. During our call,
                we will also agree on the tech-stack to best suite your apps
                needs. We usually work with React + Next.js for front-end and
                Node.js + Hono.js for backend.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full sticky top-20 left-0 h-[50dvh] flex flex-col border-l border-l-white">
          <div className="bg-[rgb(41,42,255)] text-white text-2xl p-2 flex size-[30px] sm:size-[50px] rounded-full -translate-x-1/2 font-semibold ">
            <span className="m-auto">
              <LucideRocket className="size-3 sm:size-4" />
            </span>
          </div>

          <div className="[box-shadow:10px_-20px_10px_white] ml-5 sm:ml-16 lg:ml-20 h-fit relative flex items-start -mt-[36px] sm:-mt-[50px] bg-white pt-2 pb-5 rounded-xl">
            <div className="text-zinc-100 text-[100px] sm:text-[140px] lg:text-[170px] font-bold leading-[0.75] w-[100px] max-sm:hidden ">
              4
            </div>
            <div>
              <motion.h2
                className="text-2xl lg:text-3xl ml-5 sm:ml-10 font-semibold flex items-center drop-shadow-2xl -tracking-[0.1rem]"
                initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                Project Delivery
              </motion.h2>
              <motion.p
                className="text-base ml-5 sm:ml-10 mt-5 text-zinc-500 drop-shadow-2xl max-w-[350px]"
                initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                Within our agreed timeline (usually between 2-4 weeks), you can
                expect to receive a fully functioning MVP. We will deliver the
                designs and code; providing support between 3-6 months based on
                the selected package. Please note, support is extendable up to 1
                year.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
