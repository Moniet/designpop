"use client";

import { PropsWithChildren, useState } from "react";
import { ArrowRight, Check, LucideMessageCircleQuestion } from "lucide-react";
import { scrollTo } from "../hooks/scrollTo";
import {
  SiHubspot,
  SiLangchain,
  SiSalesforce,
  SiTelegram,
  SiTwilio,
  SiWhatsapp,
  SiZendesk,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { AnimatePresence, motion } from "motion/react";
import { RiOpenaiFill } from "react-icons/ri";

const AgenticSection = () => {
  const [isPro, setIsPro] = useState(false);
  return (
    <div className="flex flex-col md:flex-row rounded-[25px] bg-[#f9f9f9] border p-[0.25rem] sm:p-[0.5rem]  md:p-[0.8rem] border-[#e8e8e8]/0 overflow-hidden">
      <div className="w-full rounded-[20px] bg-white flex flex-col lg:flex-row p-5 sm:p-6 md:p-8 lg:p-10 gap-20 lg:gap-10 lg:min-h-[500px] flex-wrap">
        <div className="flex flex-col flex-1">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-base max-sm:mt-10 sm:text-lg text-zinc-500 font-semibold tracking-wide text-pretty"
          >
            Custom Agentic Automation
          </motion.div>
          <motion.h2
            className="text-2xl max-w-[600px] sm:text-4xl lg:text-5xl mt-6 sm:mt-8 lg:mt-10 font-semibold text-balance leading-[1.25]"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ amount: 1, once: true }}
          >
            Automate workflows. Scale ops. Ship faster.
          </motion.h2>
          <motion.p
            className="text-base max-w-[600px] sm:text-lg text-zinc-500 mt-4 sm:mt-5 text-balance"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ amount: "some", once: true }}
          >
            We design and build custom AI agents that plug into your stack and
            handle real work—from responding to leads, analyzing docs, updating
            CRMs, to kicking off internal tools—all in real time.
          </motion.p>
          <div className="flex gap-3 sm:gap-4 flex-wrap max-w-full w-[300px] sm:w-[350px] mt-8 sm:mt-10 mb-12 sm:mb-20">
            {/* Import Tooltip from shadcn */}
            {/* Assumes: import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <SiHubspot className="size-5" color="#FF7A59" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px]  border border-zinc-100 bg-white  text-center"
                >
                  <span>Automate CRM workflows with HubSpot integrations</span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <SiZendesk className="size-5" color="#03363D" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px]  border border-zinc-100 bg-white  text-center"
                >
                  <span>
                    We build company trained customer support agents with
                    Zendesk integration
                  </span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <svg
                      width="27"
                      height="28"
                      viewBox="0 0 27 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.359375"
                        width="26.7687"
                        height="26.7693"
                        rx="13.3844"
                        fill="#F5F5F5"
                      />
                      <g clipPath="url(#clip0_5685_2136)">
                        <path
                          d="M8.83164 15.8129C8.83164 16.7282 8.09187 17.4679 7.17656 17.4679C6.26125 17.4679 5.52148 16.7282 5.52148 15.8129C5.52148 14.8975 6.26125 14.1578 7.17656 14.1578H8.83164V15.8129ZM9.65917 15.8129C9.65917 14.8975 10.3989 14.1578 11.3142 14.1578C12.2296 14.1578 12.9693 14.8975 12.9693 15.8129V19.9505C12.9693 20.8658 12.2296 21.6056 11.3142 21.6056C10.3989 21.6056 9.65917 20.8658 9.65917 19.9505V15.8129Z"
                          fill="#E01E5A"
                        />
                        <path
                          d="M11.3151 9.16748C10.3998 9.16748 9.65999 8.42771 9.65999 7.51241C9.65999 6.5971 10.3998 5.85733 11.3151 5.85733C12.2304 5.85733 12.9701 6.5971 12.9701 7.51241V9.16748H11.3151ZM11.3151 10.0076C12.2304 10.0076 12.9701 10.7473 12.9701 11.6626C12.9701 12.5779 12.2304 13.3177 11.3151 13.3177H7.16484C6.24953 13.3177 5.50977 12.5779 5.50977 11.6626C5.50977 10.7473 6.24953 10.0076 7.16484 10.0076H11.3151Z"
                          fill="#36C5F0"
                        />
                        <path
                          d="M17.9482 11.6626C17.9482 10.7473 18.688 10.0076 19.6033 10.0076C20.5186 10.0076 21.2584 10.7473 21.2584 11.6626C21.2584 12.5779 20.5186 13.3177 19.6033 13.3177H17.9482V11.6626ZM17.1207 11.6626C17.1207 12.5779 16.3809 13.3177 15.4656 13.3177C14.5503 13.3177 13.8105 12.5779 13.8105 11.6626V7.51241C13.8105 6.5971 14.5503 5.85733 15.4656 5.85733C16.3809 5.85733 17.1207 6.5971 17.1207 7.51241V11.6626Z"
                          fill="#2EB67D"
                        />
                        <path
                          d="M15.4656 18.2955C16.3809 18.2955 17.1207 19.0352 17.1207 19.9505C17.1207 20.8658 16.3809 21.6056 15.4656 21.6056C14.5503 21.6056 13.8105 20.8658 13.8105 19.9505V18.2955H15.4656ZM15.4656 17.4679C14.5503 17.4679 13.8105 16.7282 13.8105 15.8129C13.8105 14.8975 14.5503 14.1578 15.4656 14.1578H19.6158C20.5312 14.1578 21.2709 14.8975 21.2709 15.8129C21.2709 16.7282 20.5312 17.4679 19.6158 17.4679H15.4656Z"
                          fill="#ECB22E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5685_2136">
                          <rect
                            width="15.9238"
                            height="15.9238"
                            fill="white"
                            transform="translate(5.42188 5.7821)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px]  border border-zinc-100 bg-white  text-center"
                >
                  <span>
                    Connect internal comms and trigger actions in Slack
                  </span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <SiWhatsapp className="size-5" color="#25D366" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px]  border border-zinc-100 bg-white  text-center"
                >
                  <span>Manage lead engagement via WhatsApp conversations</span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <SiSalesforce className="size-5" color="#00A1E0" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px]  border border-zinc-100 bg-white  text-center"
                >
                  <span>
                    Update sales pipelines using Salesforce automations
                  </span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <SiTelegram className="size-5" color="#229ED9" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px] border border-zinc-100 bg-white  text-center"
                >
                  <span>Respond to and monitor chats in Telegram channels</span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <RiOpenaiFill className="size-5" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px] border border-zinc-100 bg-white  text-center"
                >
                  <span>
                    We can build agents using OpenAI&#39;s state of the art
                    models
                  </span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <SiLangchain className="size-6 text-emerald-600" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px] border border-zinc-100 bg-white  text-center"
                >
                  <span>
                    We use LangChain library to accelerate development of Ai
                    based agents; allowing us to connect to dozens of LLM
                    providers.
                  </span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <SiTwilio className="size-5" color="#f22f46" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px] border border-zinc-100 bg-white  text-center"
                >
                  <span>
                    Use Twilio as a part of agentic flows to verify users
                  </span>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="size-[50px] rounded-full flex items-center justify-center bg-zinc-100 border-zinc-50 border-[5px] ">
                    <LucideMessageCircleQuestion className="size-5" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className=" text-zinc-700 max-w-[200px] border border-zinc-100 bg-white  text-center"
                >
                  <span>
                    Have something else in mind? We can integrate with any REST
                    API or GraphQL supported service!
                  </span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <button
            className="px-2 pr-[2px] py-2 mt-0 sm:mt-auto pl-6 sm:pl-8 h-[50px] text-xs sm:text-sm xl:text-base bg-[rgb(42,41,255)] rounded-full text-center text-white w-fit mr-0 sm:mr-3 flex items-center justify-between whitespace-nowrap max-h-fit"
            onClick={() => scrollTo("book-a-call")}
          >
            <div className="font-medium mr-4 sm:mr-5 capitalize">
              Book a call
            </div>
            <div className="size-[45px] bg-white  rounded-full text-[rgb(42,41,255)] flex">
              <div className="m-auto -rotate-45">
                <ArrowRight className="size-[18px]" strokeWidth={2} />
              </div>
            </div>
          </button>
        </div>
        <motion.div
          className="flex-1 mt-8 lg:mt-0"
          whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5, once: true }}
          initial={{ rotate: 5, opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
        >
          <div
            className="h-fit w-full border-zinc-100 border rounded-[20px] sm:rounded-[25px] p-4 sm:p-6 md:p-10"
            style={{
              boxShadow:
                "0 0 5px rgba(0, 0, 0, 0.03), 2px 2px 5px 3px rgba(0,0,0,0.005), 10px 10px 20px rgba(0, 0, 0, 0.03), 5px 5px 12px rgba(0,0,0,0.01)",
            }}
          >
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="text-base sm:text-lg font-semibold text-zinc-500">
                Basic
              </div>
              <Switch
                checked={isPro}
                onCheckedChange={(isChecked) => setIsPro(isChecked)}
              />
              <div className="text-base sm:text-lg font-semibold text-zinc-800">
                Pro
              </div>
            </div>

            <div className="text-zinc-500 mt-6 sm:mt-10 text-base sm:text-lg">
              {isPro ? "Pro Pricing" : "Starting At"}
            </div>
            <div className="w-full relative h-[42px] mt-3 mb-10">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(5px)" }}
                  transition={{ duration: 1 }}
                  className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-semibold absolute top-0 left-0"
                  key={isPro ? 1 : 0}
                >
                  {isPro ? "$3,950" : "$1,950"}
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.ul
              layout
              className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base font-medium text-zinc-500 w-full mt-3 sm:mt-5"
            >
              <li className="flex items-center gap-3">
                <div className="bg-blue-700/90 size-[15px] min-w-[15px] min-h-[15px] rounded-full flex">
                  <Check
                    className="size-[8px] text-white m-auto"
                    strokeWidth={3}
                  />
                </div>
                <span>Custom agentic tooling for your business</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-700/90 size-[15px] min-w-[15px] min-h-[15px] rounded-full flex">
                  <Check
                    className="size-[8px] text-white m-auto"
                    strokeWidth={3}
                  />
                </div>
                <span>Fine tune a custom model on relevant company data</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-700/90 size-[15px] min-w-[15px] min-h-[15px] rounded-full flex">
                  <Check
                    className="size-[8px] text-white m-auto"
                    strokeWidth={3}
                  />
                </div>
                <span>
                  Create a custom agentic application to streamline business
                  processes
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-700/90 size-[15px] min-w-[15px] min-h-[15px] rounded-full flex">
                  <Check
                    className="size-[8px] text-white m-auto"
                    strokeWidth={3}
                  />
                </div>
                <span>
                  Automate internal workflows (w/ Notion, Airtable, Slack, and
                  more!)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-700/90 size-[15px] min-w-[15px] min-h-[15px] rounded-full flex">
                  <Check
                    className="size-[8px] text-white m-auto"
                    strokeWidth={3}
                  />
                </div>
                <span>Customer support agents on WhatsApp & Telegram</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-700/90 size-[15px] min-w-[15px] min-h-[15px] rounded-full flex">
                  <Check
                    className="size-[8px] text-white m-auto"
                    strokeWidth={3}
                  />
                </div>
                <span>Voice-enabled agents that can speak to customers</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-700/90 size-[15px] min-w-[15px] min-h-[15px] rounded-full flex">
                  <Check
                    className="size-[8px] text-white m-auto"
                    strokeWidth={3}
                  />
                </div>
                <AnimatePresence initial={false} mode="popLayout">
                  {isPro && (
                    <motion.span
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={isPro ? 1 : 0}
                      className="w-full"
                    >
                      4-6 Agents or automation flows
                    </motion.span>
                  )}
                  {!isPro && (
                    <motion.span
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={isPro ? 1 : 0}
                      className="w-full"
                    >
                      2-3 Agents or automation flows
                    </motion.span>
                  )}
                </AnimatePresence>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-700/90 size-[15px] min-w-[15px] min-h-[15px] rounded-full flex">
                  <Check
                    className="size-[8px] text-white m-auto"
                    strokeWidth={3}
                  />
                </div>
                <span>Milestone based pricing</span>
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgenticSection;
