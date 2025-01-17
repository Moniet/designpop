"use client";

import {
  ArrowDown,
  Code,
  Code2Icon,
  CodeSquare,
  Figma,
  LucideMapPin,
  LucideSmartphone,
  Rocket,
  Send,
} from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import BlurInOnView from "./BlurInOnView";

const OurServices = () => {
  return (
    <div className="w-full h-fit relative" id="our-services">
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 relative -z-1 mb-20"
        whileInView={{
          y: 0,
          transition: {
            duration: 1.5,
            delay: 0.2,
            type: "spring",
          },
          opacity: 1,
        }}
        initial={{ y: 20, opacity: 0 }}
      >
        All our services
      </motion.h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2 rounded-[40px]  w-full bg-[#f6f6f6] p-3 border border-[#e8e8e8] relative z-2">
        <BlurInOnView once>
          <div className="size-full bg-white rounded-[35px]  w-full h-[180px] py-7 px-7 sm:py-10 lg:px-12 lg:py-12 md:px-12 flex justify-center flex-col">
            <div className="flex gap-2 items-center text-lg sm:text-xl lg:text-2xl font-semibold">
              <div>
                <Figma className="size-6" />
              </div>
              <div>Web Design</div>
            </div>
            <div className="text-sm sm:text-base text-zinc-600 mt-4 max-w-[400px]">
              We design everything from a landing-page to a full-fledged web
              app, with 48 hour turnarounds.
            </div>
          </div>
        </BlurInOnView>
        <BlurInOnView once>
          <div className="size-full  rounded-[35px] minh-fit h-[180px] py-7 px-7 sm:py-10 lg:px-12 lg:py-12 md:px-12 flex justify-center flex-col bg-[rgb(42,41,255)]">
            <div className="flex gap-2 items-center text-lg sm:text-xl lg:text-2xl font-semibold text-white">
              <div>
                <Rocket className="size-6" />
              </div>
              <div>MVP Development</div>
            </div>
            <div className="text-base text-white/80 mt-4">
              Bring your idea to life in a matter of weeks with our MVP service.
              We provide, design, development, and technical guidance for your
              project.
            </div>
          </div>
        </BlurInOnView>
        <BlurInOnView once>
          <div className="size-full bg-white text-zinc-900 rounded-[35px] h-[180px] py-7 px-7 sm:py-10 lg:px-12 lg:py-12 md:px-12 flex justify-center flex-col">
            <div className="flex gap-2 items-center text-lg sm:text-xl lg:text-2xl font-semibold">
              <div className="text-zinc-900">
                <CodeSquare className="size-6" />
              </div>
              <div>Web Development</div>
            </div>
            <div className="text-sm sm:text-base text-zinc-600 mt-4 max-w-[400px]">
              We develop full-stack web applications with lightning speed, using
              state of the art technology.
            </div>
          </div>
        </BlurInOnView>

        <BlurInOnView once>
          <div className="size-full bg-white rounded-[35px] h-[180px] py-7 px-7 sm:py-10 lg:px-12 lg:py-12 md:px-12 flex justify-center flex-col">
            <div className="flex gap-2 items-center text-lg sm:text-xl lg:text-2xl font-semibold">
              <div>
                <LucideSmartphone className="size-6" />
              </div>
              <div>Mobile App Development</div>
            </div>
            <div className="text-sm sm:text-base text-zinc-600 mt-4">
              We have built top-notch cross-platform mobile apps coupled with
              automated deployments for fast iteration.
            </div>
          </div>
        </BlurInOnView>
        <div className="flex max-sm:flex-col gap-5 max-sm:items-start my-2 col-span-2 items-center mx-4 justify-between">
          <div className="flex  text-zinc-500 items-center text-sm">
            <Send className="size-4 mr-2" />
            We work with your timezone{" "}
            <span className="font-medium text-zinc-900 ml-1">
              {new Date()
                .toString()
                .match(/\(.*\)/)
                ?.at(0)}
              .
            </span>
          </div>
          <button className="text-zinc-500 rounded-full text-sm text-700 w-fit mr-5 font-medium bg-zinc-200 p-1 px-2 flex items-center">
            <ArrowDown className="size-4 mr-1" />
            Get started now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
