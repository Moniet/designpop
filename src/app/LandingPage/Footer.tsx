"use client"

import useScrollTo from "@/hooks/scrollToElement"
import { ArrowUpRight } from "lucide-react"
import * as React from "react"
import Gutter from "./Gutter"

export default function Footer() {
  const scrollToEl = useScrollTo()

  return (
    <footer>
      <div className="relative flex flex-col">
        <div className="flex w-full flex-col self-stretch bg-zinc-900 px-5 pb-6 pt-10 pt-14 max-md:max-w-full">
          <Gutter>
            <div className="w-ful ml-0 flex flex-col self-center max-md:max-w-full">
              <div className="w-full self-center max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex w-[97%] flex-col items-stretch max-md:w-full">
                    <div className="flex grow max-md:mt-12 max-md:max-w-full xs:flex-col md:flex-row">
                      <div className="flex w-full gap-5 max-md:items-stretch max-md:gap-0 max-sm:flex-col xs:flex-wrap md:flex-nowrap">
                        <div className="flex w-full flex-col items-stretch max-md:w-full">
                          <div className="mr-12 mt-1 flex grow flex-col items-start max-md:mt-12 max-md:max-w-full">
                            <div className="flex w-[151px] max-w-full items-start gap-2">
                              <div className="w-[147px] text-3xl leading-[100%] text-violet-500">
                                <span className="text-white">designp</span>
                                <span className="text-violet-500">o</span>
                                <span className="text-white">p</span>
                              </div>
                            </div>
                            <div className="text-heading mt-6 leading-[49px] tracking-tighter text-neutral-200 max-md:max-w-full xs:text-2xl lg:text-3xl">
                              What can we do <br />
                              <span className="italic">for you ?</span>
                            </div>
                            <div className="mb-20 mt-6 flex w-fit max-w-full grow flex-col items-center justify-center rounded-md border border-solid border-zinc-100 px-6 py-3">
                              <div className="flex max-w-fit  grow-0 items-start gap-2 self-center">
                                <a
                                  href="mailto:hello@designpop.io"
                                  className="cursor"
                                >
                                  <div className="h-fit  max-h-fit min-w-fit whitespace-nowrap text-sm leading-5 text-zinc-100">
                                    <span className="mr-2 inline-block h-[5px] w-[5px] rounded-full bg-green-500 align-middle" />
                                    Send us an Email
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full flex-col items-stretch max-md:w-full">
                          <div className=" max-md:max-w-full">
                            <div className="flex max-md:flex-col max-md:items-stretch xs:gap-6 md:gap-12 lg:gap-16">
                              <div className="flex w-fit flex-col items-stretch max-md:w-full">
                                <div className="flex w-fit flex-col items-start pr-0.5 max-md:mt-12">
                                  <div className="text-xs uppercase leading-3 tracking-wide text-zinc-300 opacity-60">
                                    NAVIGATION
                                  </div>
                                  <div className="mt-2 flex w-[79px] max-w-full grow flex-col items-start">
                                    <div className="text-sm leading-5 text-zinc-300">
                                      <button
                                        onClick={() => scrollToEl("#services")}
                                      >
                                        Services
                                      </button>
                                    </div>
                                    <div className="mt-1 text-sm leading-5 text-zinc-300">
                                      <button
                                        onClick={() => scrollToEl("#pricing")}
                                      >
                                        Pricing
                                      </button>
                                    </div>
                                    <div className="mt-1 text-sm leading-5 text-zinc-300">
                                      <button
                                        onClick={() => scrollToEl("#contact")}
                                      >
                                        Contact
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-fit flex-col items-stretch max-md:w-full">
                                <div className="flex grow flex-col max-md:mt-12">
                                  <div className="flex w-[140px] max-w-full flex-col items-start">
                                    <div className="text-xs uppercase leading-3 tracking-wide text-zinc-300 opacity-60">
                                      Contact us
                                    </div>
                                    <a href="mailto:hello@designpop.io">
                                      <div className="mt-2 text-sm leading-5 text-zinc-300 underline">
                                        hello@designpop.io
                                      </div>
                                    </a>
                                  </div>
                                  {/* <div className="mt-14 flex w-[100px] max-w-full grow flex-col items-start">
                                    <div className="text-xs uppercase leading-3 tracking-wide text-zinc-300 opacity-60">
                                      SOCIAL MEDIA
                                    </div>
                                    <div className="mt-2 flex w-full grow flex-col items-start pr-1.5">
                                      <div className="flex items-start justify-between gap-4 self-stretch">
                                        <div className="self-stretch text-sm leading-5 text-zinc-300">
                                          LinkedIn
                                        </div>
                                        <span role="img">
                                          <ArrowUpRight
                                            size="10px"
                                            className="mt-[5px]"
                                          />
                                        </span>
                                      </div>
                                      <div className="mt-1 flex w-full items-start justify-between gap-5 self-stretch">
                                        <div className="self-stretch text-sm leading-5 text-zinc-300">
                                          Twitter
                                        </div>
                                        <span role="img">
                                          <ArrowUpRight
                                            size="10px"
                                            className="mt-[5px]"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                              <div className="flex w-fit flex-col items-stretch max-md:w-full">
                                <div className="my-auto flex grow flex-col max-md:mt-12">
                                  <div className="flex w-fit max-w-full flex-col items-start justify-end">
                                    <div className="flex w-full flex-col items-start">
                                      <div className="text-xs uppercase leading-3 tracking-wide text-zinc-300 opacity-60">
                                        Address
                                      </div>
                                      <div className="mt-2 w-full text-sm leading-5 text-zinc-300">
                                        <address>
                                          Kreutzigerstraße <wbr />
                                          Berlin Germany, 10245
                                        </address>
                                      </div>
                                    </div>
                                    <div className="mt-8 flex w-[111px] max-w-full grow flex-col items-start">
                                      <div className="text-xs uppercase leading-3 tracking-wide text-zinc-300 opacity-60">
                                        Opening hours
                                      </div>
                                      <div className="mt-2 text-sm leading-4 tracking-tight text-zinc-300">
                                        9am—6pm (GMT)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-2 flex w-[106px] max-w-full items-start justify-center gap-2">
                                    <div className="self-stretch text-xs leading-4 text-gray-400">
                                      Mo
                                    </div>
                                    <div className="my-auto flex h-px w-[60px] flex-col self-center bg-gray-100 bg-opacity-20" />
                                    <div className="self-stretch text-xs leading-4 text-gray-400">
                                      Fr
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[3%] flex-col items-stretch max-md:w-full">
                    <button
                      onClick={() => scrollToEl("#main")}
                      className="absolute right-10 top-10 ml-5 "
                    >
                      <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20.3525" cy="20" r="20" fill="#FBFBFB" />
                        <path
                          d="M20.3525 27L20.3525 13M20.3525 13L14.3525 19M20.3525 13L26.3525 19"
                          stroke="#18191B"
                          stroke-width="1.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mr-px  mt-24 text-xs leading-3 text-zinc-300 opacity-60 md:ml-auto">
                © 2023 — Copyright
              </div>
            </div>
          </Gutter>
        </div>
      </div>
    </footer>
  )
}
