"use client"
import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import Gutter from "./Gutter"
import useScrollTo from "@/hooks/scrollToElement"
import { useScroll, motion, AnimatePresence } from "framer-motion"
import { useDebounce } from "@uidotdev/usehooks"
import { createPortal } from "react-dom"
import { Plus } from "lucide-react"

const NavItem = ({ scrollToId, label, setOpen }: any) => {
  const scrollTo = useScrollTo()
  const [hover, setHover] = useState(false)

  return (
    <div
      className="relative flex-1"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className="relative block flex-1"
        onClick={() => {
          scrollTo(scrollToId)
          setOpen(false)
        }}
      >
        <div
          className={`flex w-full items-center justify-center rounded-full bg-transparent text-center font-medium tracking-wide text-white transition-colors duration-300 hover:text-white xs:text-4xl  md:text-6xl`}
        >
          {label}
        </div>
      </button>
    </div>
  )
}

const Logo = () => {
  return (
    <div className="xs:w-[125px] sm:w-[130px] md:w-[140px] lg:w-[150px]">
      <svg
        viewBox="0 0 142 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
      >
        <path
          d="M7.91563 19.2C6.64896 19.2 5.55729 18.925 4.64063 18.375C3.74063 17.8083 3.04896 17.0333 2.56563 16.05C2.09896 15.0667 1.86563 13.95 1.86563 12.7C1.86563 11.45 2.09896 10.3333 2.56563 9.35C3.04896 8.36667 3.74063 7.6 4.64063 7.05C5.54063 6.48333 6.62396 6.2 7.89063 6.2C8.74063 6.2 9.52396 6.39167 10.2406 6.775C10.9573 7.14167 11.499 7.63333 11.8656 8.25V1.125H14.2906V19H11.8656V17.125C11.499 17.7583 10.949 18.2667 10.2156 18.65C9.49896 19.0167 8.73229 19.2 7.91563 19.2ZM8.19063 17.075C8.95729 17.075 9.63229 16.8917 10.2156 16.525C10.799 16.1583 11.249 15.65 11.5656 15C11.899 14.3333 12.0656 13.5667 12.0656 12.7C12.0656 11.3833 11.7073 10.325 10.9906 9.525C10.2906 8.725 9.35729 8.325 8.19063 8.325C7.40729 8.325 6.72396 8.50833 6.14063 8.875C5.57396 9.24167 5.12396 9.75833 4.79063 10.425C4.47396 11.075 4.31563 11.8333 4.31563 12.7C4.31563 14.0167 4.66563 15.075 5.36563 15.875C6.06563 16.675 7.00729 17.075 8.19063 17.075ZM25.5518 19.2C24.2851 19.2 23.1768 18.9 22.2268 18.3C21.2768 17.7 20.5351 16.9 20.0018 15.9C19.4851 14.9 19.2268 13.8083 19.2268 12.625C19.2268 11.425 19.4684 10.3417 19.9518 9.375C20.4351 8.39167 21.1351 7.61667 22.0518 7.05C22.9684 6.48333 24.0518 6.2 25.3018 6.2C26.5518 6.2 27.6268 6.46667 28.5268 7C29.4268 7.53333 30.1101 8.25833 30.5768 9.175C31.0434 10.075 31.2768 11.075 31.2768 12.175C31.2601 12.4917 31.2434 12.8083 31.2268 13.125H20.6268V11.35H28.8268C28.7601 10.3667 28.4101 9.59167 27.7768 9.025C27.1601 8.44167 26.3351 8.15 25.3018 8.15C24.5351 8.15 23.8684 8.325 23.3018 8.675C22.7518 9.00833 22.3268 9.50833 22.0268 10.175C21.7268 10.825 21.5768 11.6333 21.5768 12.6C21.5768 13.4833 21.7434 14.2667 22.0768 14.95C22.4101 15.6333 22.8768 16.1667 23.4768 16.55C24.0768 16.9333 24.7684 17.125 25.5518 17.125C26.4684 17.125 27.2184 16.9333 27.8018 16.55C28.3851 16.1667 28.7684 15.6167 28.9518 14.9H31.3768C31.2268 15.75 30.8851 16.5083 30.3518 17.175C29.8351 17.825 29.1601 18.325 28.3268 18.675C27.5101 19.025 26.5851 19.2 25.5518 19.2ZM40.5154 19.2C39.5321 19.2 38.6654 19.025 37.9154 18.675C37.1654 18.325 36.5738 17.8333 36.1404 17.2C35.7071 16.55 35.4654 15.7833 35.4154 14.9H37.6904C37.7571 15.6167 38.0404 16.175 38.5404 16.575C39.0404 16.975 39.6988 17.175 40.5154 17.175C41.2154 17.175 41.7821 17.0167 42.2154 16.7C42.6654 16.3667 42.8904 15.9583 42.8904 15.475C42.8904 15.0083 42.7571 14.65 42.4904 14.4C42.2404 14.1333 41.9238 13.95 41.5404 13.85C41.1738 13.75 40.6488 13.6417 39.9654 13.525C39.0654 13.3917 38.3321 13.2333 37.7654 13.05C37.2154 12.85 36.7404 12.5 36.3404 12C35.9404 11.4833 35.7404 10.7583 35.7404 9.825C35.7404 9.10833 35.9238 8.475 36.2904 7.925C36.6738 7.375 37.1988 6.95 37.8654 6.65C38.5488 6.35 39.3321 6.2 40.2154 6.2C41.1488 6.2 41.9738 6.36667 42.6904 6.7C43.4238 7.01667 43.9988 7.475 44.4154 8.075C44.8488 8.675 45.0904 9.36667 45.1404 10.15H42.8404C42.7738 9.48333 42.4738 8.98333 41.9404 8.65C41.4071 8.3 40.8321 8.125 40.2154 8.125C39.5488 8.125 39.0154 8.275 38.6154 8.575C38.2154 8.875 38.0154 9.26667 38.0154 9.75C38.0154 10.1667 38.1321 10.4917 38.3654 10.725C38.6154 10.9583 38.9238 11.125 39.2904 11.225C39.6571 11.3083 40.1654 11.4 40.8154 11.5C41.7321 11.6167 42.4821 11.775 43.0654 11.975C43.6654 12.1583 44.1738 12.525 44.5904 13.075C45.0238 13.6083 45.2404 14.3917 45.2404 15.425C45.2404 16.175 45.0404 16.8417 44.6404 17.425C44.2571 17.9917 43.7071 18.4333 42.9904 18.75C42.2738 19.05 41.4488 19.2 40.5154 19.2ZM50.2359 6.4H52.6609V19H50.2359V6.4ZM52.7859 1.125V4.175H50.0859V1.125H52.7859ZM59.318 22.075H65.143C65.8763 22.075 66.4763 21.825 66.943 21.325C67.4096 20.8417 67.643 20.2167 67.643 19.45V17.4C67.343 17.9333 66.8263 18.3667 66.093 18.7C65.3763 19.0333 64.5763 19.2 63.693 19.2C62.4263 19.2 61.3346 18.925 60.418 18.375C59.518 17.8083 58.8263 17.0333 58.343 16.05C57.8763 15.0667 57.643 13.95 57.643 12.7C57.643 11.45 57.8763 10.3333 58.343 9.35C58.8263 8.36667 59.518 7.6 60.418 7.05C61.318 6.48333 62.4013 6.2 63.668 6.2C64.4846 6.2 65.2513 6.375 65.968 6.725C66.7013 7.075 67.2596 7.525 67.643 8.075V6.4H70.068V19.6C70.068 20.4833 69.868 21.2667 69.468 21.95C69.0846 22.6333 68.5346 23.1583 67.818 23.525C67.1013 23.9083 66.293 24.1 65.393 24.1H59.318V22.075ZM63.968 17.075C64.7346 17.075 65.4096 16.8917 65.993 16.525C66.5763 16.1583 67.0263 15.65 67.343 15C67.6763 14.3333 67.843 13.5667 67.843 12.7C67.843 11.3667 67.4846 10.3083 66.768 9.525C66.068 8.725 65.1346 8.325 63.968 8.325C63.1846 8.325 62.5013 8.50833 61.918 8.875C61.3513 9.24167 60.9013 9.75833 60.568 10.425C60.2513 11.075 60.093 11.8333 60.093 12.7C60.093 14.0333 60.443 15.1 61.143 15.9C61.843 16.6833 62.7846 17.075 63.968 17.075ZM75.8541 6.4H78.2791V8.625C78.6124 7.84167 79.1291 7.24167 79.8291 6.825C80.5458 6.40833 81.3791 6.2 82.3291 6.2C83.2624 6.2 84.0874 6.41667 84.8041 6.85C85.5208 7.26667 86.0708 7.85833 86.4541 8.625C86.8374 9.375 87.0291 10.25 87.0291 11.25V19H84.6041V11.725C84.6041 10.725 84.3291 9.91667 83.7791 9.3C83.2458 8.68333 82.5374 8.375 81.6541 8.375C81.0041 8.375 80.4208 8.54167 79.9041 8.875C79.3874 9.19167 78.9874 9.64167 78.7041 10.225C78.4208 10.7917 78.2791 11.4417 78.2791 12.175V19H75.8541V6.4ZM92.6549 6.4H95.0799V8.275C95.4465 7.64167 95.9882 7.14167 96.7049 6.775C97.4382 6.39167 98.2382 6.2 99.1049 6.2C100.338 6.2 101.405 6.48333 102.305 7.05C103.205 7.6 103.888 8.36667 104.355 9.35C104.838 10.3333 105.08 11.45 105.08 12.7C105.08 13.95 104.83 15.0667 104.33 16.05C103.847 17.0333 103.147 17.8083 102.23 18.375C101.313 18.925 100.23 19.2 98.9799 19.2C98.1465 19.2 97.3715 19.025 96.6549 18.675C95.9549 18.3083 95.4299 17.825 95.0799 17.225V24.1H92.6549V6.4ZM98.7549 17.075C99.5216 17.075 100.197 16.8917 100.78 16.525C101.363 16.1583 101.813 15.65 102.13 15C102.463 14.3333 102.63 13.5667 102.63 12.7C102.63 11.3833 102.272 10.325 101.555 9.525C100.855 8.725 99.9216 8.325 98.7549 8.325C97.9882 8.325 97.3132 8.50833 96.7299 8.875C96.1465 9.24167 95.6882 9.75833 95.3549 10.425C95.0382 11.075 94.8799 11.8333 94.8799 12.7C94.8799 14.0167 95.2299 15.075 95.9299 15.875C96.6465 16.675 97.5882 17.075 98.7549 17.075Z"
          fill="black"
        />
        <path
          d="M126.814 6.4H129.239V8.275C129.606 7.64167 130.147 7.14167 130.864 6.775C131.597 6.39167 132.397 6.2 133.264 6.2C134.497 6.2 135.564 6.48333 136.464 7.05C137.364 7.6 138.047 8.36667 138.514 9.35C138.997 10.3333 139.239 11.45 139.239 12.7C139.239 13.95 138.989 15.0667 138.489 16.05C138.006 17.0333 137.306 17.8083 136.389 18.375C135.472 18.925 134.389 19.2 133.139 19.2C132.306 19.2 131.531 19.025 130.814 18.675C130.114 18.3083 129.589 17.825 129.239 17.225V24.1H126.814V6.4ZM132.914 17.075C133.681 17.075 134.356 16.8917 134.939 16.525C135.522 16.1583 135.972 15.65 136.289 15C136.622 14.3333 136.789 13.5667 136.789 12.7C136.789 11.3833 136.431 10.325 135.714 9.525C135.014 8.725 134.081 8.325 132.914 8.325C132.147 8.325 131.472 8.50833 130.889 8.875C130.306 9.24167 129.847 9.75833 129.514 10.425C129.197 11.075 129.039 11.8333 129.039 12.7C129.039 14.0167 129.389 15.075 130.089 15.875C130.806 16.675 131.747 17.075 132.914 17.075Z"
          fill="black"
        />
        <circle cx="115.963" cy="11.6387" r="6.36133" fill="#895FE0" />
      </svg>
    </div>
  )
}

const ContactUs = () => {
  return (
    <a href="https://calendar.app.google/Xs4uCryDAQJADdFb7" target="_blank">
      <div className="relative flex h-auto w-full md:w-[80px] lg:w-[100px]">
        <svg
          className="h-full w-full"
          viewBox="0 0 83 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="41.0945" cy="41.0945" r="41.0945" fill="#1A1A1A" />
          <path
            d="M65.5 41C65.5 54.531 54.531 65.5 41 65.5C27.469 65.5 16.5 54.531 16.5 41C16.5 27.469 27.469 16.5 41 16.5C54.531 16.5 65.5 27.469 65.5 41Z"
            stroke="transparent"
            id="text-path"
          />
          <motion.text
            color="#fff"
            fill="#fff"
            fontSize="5px"
            fontWeight={400}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              repeatDelay: 0,
              type: "keyframes",
            }}
            className="text-body rotate-[360deg] uppercase"
          >
            <textPath href="#text-path" color="#fff" letterSpacing={"1.9px"}>
              Get in touch &nbsp;&nbsp;•&nbsp;&nbsp;Get in touch&nbsp;&nbsp;•
            </textPath>
          </motion.text>
        </svg>
        <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-xl">
          <motion.div
            animate={{
              rotate: [0, 30, 15, 30, 0],
              transition: {
                delay: 2,
                duration: 1,
                repeat: Infinity,
                repeatDelay: 3,
              },
            }}
          >
            👋
          </motion.div>
        </div>
      </div>
    </a>
  )
}

const SlideIn = ({
  children,
  delay,
  className = "",
}: PropsWithChildren<{ delay: number; className?: string }>) => {
  return (
    <div
      className={`h-full max-h-fit min-h-fit w-fit min-w-fit overflow-hidden `}
    >
      <motion.div
        className={className}
        initial={{ x: 0, y: 150, rotate: 15 }}
        animate={{ rotate: 0, x: 0, y: 0 }}
        transition={{
          delay: delay ?? 0,
          duration: 1,
          type: "spring",
          // damping: 2,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const Nav = () => {
  const [open, setOpen] = useState(false)
  const isClient = globalThis.window
  const div = useMemo(
    () => globalThis?.window?.document.createElement("div"),
    [],
  )

  useEffect(() => {
    if (isClient && div && !document.body.contains(div)) {
      document.body.appendChild(div)
    }

    return () => {
      document.body.removeChild(div)
    }
  }, [isClient, div])

  return (
    <header>
      <nav className="z-[100000] w-full max-w-[2000px]" id="nav">
        <Gutter className="bg-white/20 backdrop-blur-sm max-md:fixed md:py-5">
          <div className="flex w-full items-center justify-between  md:gap-3 lg:gap-0 ">
            <a href="https://designpop.io">
              <div className="flex items-center  md:mt-0">
                <Logo />
              </div>
            </a>
            <div className="ml-auto">
              <button
                onClick={() => setOpen(!open)}
                className={`z-[100000000] font-medium text-zinc-900`}
              >
                Menu
              </button>
            </div>
          </div>
        </Gutter>

        <motion.div
          className={"fixed left-0 top-0 flex h-full w-full bg-zinc-950"}
          initial={{
            opacity: 0,
            pointerEvents: "none",
          }}
          animate={{
            opacity: open ? 1 : 0,
            pointerEvents: open ? "all" : "none",
          }}
        >
          <div className="fixed flex   items-center justify-center gap-1 text-white hue-rotate-180 invert xs:left-5 xs:top-5 sm:left-8 sm:top-8 md:left-12 md:top-5 lg:left-[8%] lg:top-16">
            <Logo />
          </div>
          <button
            className="fixed flex   items-center justify-center gap-1 text-white xs:right-5 xs:top-5 sm:right-8 sm:top-8 md:right-12 md:top-5 lg:right-[8%] lg:top-16"
            onClick={() => setOpen(false)}
          >
            <Plus size={"20px"} className="rotate-45" />
            Menu
          </button>
          {open && (
            <Gutter>
              <div className="m-auto flex h-full w-full items-center xs:flex-col xs:justify-center md:flex-row md:justify-between">
                <div className=" flex w-full flex-col justify-center gap-5 max-md:items-center">
                  <SlideIn delay={0}>
                    <NavItem
                      scrollToId="#recent-work"
                      label="Recent Work"
                      setOpen={setOpen}
                    />
                  </SlideIn>
                  <SlideIn delay={0.1}>
                    <NavItem
                      scrollToId="#services"
                      label="Services"
                      setOpen={setOpen}
                    />
                  </SlideIn>
                  <SlideIn delay={0.15}>
                    <NavItem
                      scrollToId="#faqs"
                      label="How it works"
                      setOpen={setOpen}
                    />
                  </SlideIn>
                  <SlideIn delay={0.2}>
                    <NavItem
                      scrollToId="#pricing"
                      label="Pricing"
                      setOpen={setOpen}
                    />
                  </SlideIn>
                </div>
                <div className="flex w-fit flex-col items-center max-md:w-full">
                  <div className="my-auto flex grow flex-col max-md:mt-16">
                    <div className="flex w-fit max-w-full flex-col items-start justify-end">
                      <div className="flex w-full flex-col items-start">
                        <SlideIn delay={0.3}>
                          <div className="min-h-fit w-full pt-1 text-xl uppercase leading-3 tracking-wide text-zinc-200 opacity-60 xs:text-center md:text-left">
                            Address
                          </div>

                          <div className="mt-2 w-full text-base leading-5 text-white xs:text-center md:text-left">
                            <address className="leading-7">
                              Kreutzigerstraße <br />
                              Berlin Germany, 10245
                            </address>
                          </div>
                        </SlideIn>
                      </div>
                      <SlideIn delay={0.3}>
                        <div className="mt-8 flex grow flex-col max-md:w-full max-md:items-center">
                          <div className="mb-1 w-full whitespace-nowrap text-xl uppercase leading-3 tracking-wide text-zinc-200 opacity-60 xs:text-center md:text-left">
                            Opening hours
                          </div>
                          <div className="mt-2 w-full max-w-[111px] whitespace-nowrap text-center text-base leading-4 tracking-tight text-white xs:text-center md:text-left">
                            9am—6pm (GMT)
                          </div>
                        </div>
                      </SlideIn>
                    </div>

                    <div className="max-md:mx-auto">
                      <SlideIn
                        delay={0.3}
                        className="mt-2 flex w-full max-w-full gap-2 max-md:justify-center xs:items-center md:items-start"
                      >
                        <div className="self-stretch text-base leading-4 text-white">
                          Mo
                        </div>
                        <div className="my-auto flex h-px w-[60px] flex-col self-center bg-zinc-50 bg-opacity-20" />
                        <div className="self-stretch text-base leading-4 text-white">
                          Fr
                        </div>
                      </SlideIn>
                    </div>
                  </div>
                </div>
              </div>
            </Gutter>
          )}
        </motion.div>
      </nav>
    </header>
  )
}

export default Nav
