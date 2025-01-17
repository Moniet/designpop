"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { throttle } from "lodash";

const testimonials = [
  {
    id: 1,
    author: {
      name: "Florian Brauer",
      position: "CTO of Gavel GmbH",
      image: "/img/florian.jpeg",
    },
    text: "Working with designpop has been incredibly productive for us founders at Gavel. We have been able to experiment with several ideas in a short time to see what sticks. Their excellent communication keeps things high-quality and quick. I can't recommend them enough!",
  },
  {
    id: 2,
    author: {
      name: "David Cheung",
      position: "Lead Engineer at Climb Credit",
      image: "/img/david.jpeg",
    },
    text: "I can't recommend designpop highly enough, they are conscientious self-starters, who were able to work closely with our product manager, designers, and other engineers to deliver an MVP of our student facing checkout experience in record time.",
  },
  {
    id: 3,
    author: {
      name: "Marvin Musialek",
      position: "Founder of Strom AI",
      image: "/img/marvin.jpeg",
    },
    text: "What impressed me most about designpop was their ability to transform our rough concept into a polished product in just two weeks. Their team's attention to detail and quick turnaround time helped us launch faster than we ever thought possible. They truly deliver on their promise of speed without compromising quality.",
  },
  {
    id: 4,
    author: {
      name: "Sashi Kumar",
      position: "M.D at Phoenix Medical Systems",
      image: "/img/sash.jpeg",
    },
    text: "Designpop re-vamped our website in one week and helped tremendously boosted our SEO rankings in just 1 month. We are now outranking our competitors on Google search and also have a high quality design that gives our company a great image to potential customers on a international scale.",
  },
  {
    id: 5,
    author: {
      name: "Kristijan Binski",
      position: "Founder of Wandergates",
      image: "/img/kris.jpeg",
    },
    text: "I've worked with many agencies, but designpop is the real deal! They worked with us to ship a client's app in just a couple of weeks, and their post-launch support is organised and invaluable.",
  },
  {
    id: 6,
    author: {
      name: "Mohit Yadav",
      position: "CTO of BoldCare",
      image: "/img/mohit.jpeg",
    },
    text: "The development service was simply excellent! designpop not only helped deliver our site re-design in a matter weeks but also cleaned up our React architecture by a long shot. The quality output, coupled with the increase in developer experience was a delightful outcome!",
  },
];

type TestimonialCardProps = (typeof testimonials)[0] & {
  isActive: boolean;
  currentIndex: number;
  width: number;
};

const TestimonialCard = ({ isActive, ...props }: TestimonialCardProps) => {
  return (
    <motion.div
      key={props.id}
      // variants={{
      //   exit: (dir) => ({ x: dir === "forwards" ? "-100%" : "0%" }),
      //   enter: (dir) => ({ x: dir === "forwards" ? "0%" : "0%" })
      //   // init: (dir) => ({ x: dir === "forwards" ? "100%" : "-100%" })
      // }}
      // initial={"init"}
      animate={{
        x: props.currentIndex * 100 * -1 + "%",
        scale: isActive ? 1.05 : 1,
        transition: {
          type: "spring",
          duration: 1.25,
          bounce: 0.2,
        },
      }}
      // exit={"exit"}
      className={`md:px-10 md:py-8 py-5 px-8 transition-colors rounded-[15px] border border-[#e8e8e8] flex flex-col-reverse gap-24 flex-1 justify-between min-w-[300px] w-full sm:min-w-[500px] lg:min-w-[600px] ${
        isActive
          ? "bg-[rgb(42,41,255)] !text-white shadow-lg border"
          : "bg-[#f9f9f9] opacity-50"
      }`}
      // style={{ minWidth: props.width + "px" }}
    >
      <div className="flex gap-3 items-center flex-1 max-h-fit">
        <div className="size-[40px] aspect-square min-w-[40px] rounded-lg overflow-hidden bg-zinc-100 relative">
          <img
            src={props.author.image}
            alt={props.author.name}
            className="saturate-0"
            alt=""
          />
          {/* <div
            className="absolute top-0 right-0 size-full bg-blue-500/40"
            style={{ backdropFilter: "hue-rotate(60deg)" }}
          ></div> */}
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-medium text-sm md:text-base">
            {props.author.name}
          </p>
          <p className={`text-sm md:text-base opacity-70 whitespace-nowrap`}>
            {props.author.position}
          </p>
        </div>
      </div>
      <p className={`text-sm sm:text-lg xl:text-lg leading-8 font-semibold`}>
        {props.text}
      </p>
    </motion.div>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState([...testimonials]);

  useEffect(() => {
    setWidth(ref.current!.getBoundingClientRect().width / 2);
  }, []);

  const handleNext = useCallback(
    throttle(() => {
      setData([...data, data[index]]);
      setIndex((prevIndex) => Math.min(prevIndex + 1));
    }, 1000),
    [index],
  );

  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const headerRef = useRef<HTMLDivElement>(null);

  const inView = useInView(headerRef);

  return (
    <>
      <div className="flex w-full max-md:flex-col justify-between">
        <div className="flex flex-col items-start">
          <div className="h-fit overflow-hidden w-fit max-h-fit min-h-fit">
            <motion.div
              className="text-zinc-900 font-semibold text-2xl sm:text-4xl xl:text-5xl leading-12 md:pb-2"
              animate={{
                y: inView ? 0 : 40,
                transition: { duration: 1, type: "spring" },
                rotate: 0,
              }}
              initial={{ y: 40 }}
            >
              Startups worldwide have boosted
            </motion.div>
          </div>
          <div
            className="h-fit overflow-hidden w-fit min-h-fit max-h-fit pb-2"
            ref={headerRef}
          >
            <motion.div
              className="text-zinc-900 font-semibold text-2xl sm:text-4xl xl:text-5xl leading-12"
              animate={{
                y: inView ? 0 : 40,
                transition: {
                  duration: 1,
                  delay: 0.1,
                  type: "spring",
                  damping: 20,
                },
                rotate: 0,
              }}
              initial={{ y: 40 }}
            >
              productivity working with designpop
            </motion.div>
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <button
            className="border rounded-full size-[40px] flex hover:border-zinc-700 transition-color duration-300 disabled:opacity-50 disabled:hover:border-zinc-200 disabled:cursor-not-allowed"
            onClick={handlePrev}
            disabled={index === 0}
          >
            <ChevronLeft className="m-auto size-5 text-zinc-700" />
          </button>
          <button
            className="border rounded-full size-[40px] flex hover:border-zinc-700 transition-color duration-300"
            onClick={handleNext}
          >
            <ChevronRight className="m-auto size-5 text-zinc-700" />
          </button>
        </div>
      </div>
      <motion.div
        drag="x"
        dragElastic={0.2}
        dragConstraints={{ left: 0, right: 0 }}
        onPanEnd={(e, info) => {
          const width =
            window.innerWidth >= 768
              ? window.innerWidth / 3
              : window.innerWidth / 5;

          if (info.offset.x <= -width) {
            handleNext();
          }
          if (info.offset.x >= width) {
            handlePrev();
          }
        }}
      >
        <div className="-translate-x-[300px] sm:-translate-x-[500px] lg:-translate-x-[300px] w-full">
          <motion.div
            ref={ref}
            className="w-full flex gap-[30px] mt-20 items-stretch"
            animate={{
              x: -(index * 30),
            }}
            // animate={{
            //   x: -((index / testimonials.length) * scrollWidth) + "px",
            //   transition: {
            //     duration: 0.5,
            //     type: "spring",
            //     damping: 20,
            //     stiffness: 150
            //   }
            // }}
          >
            {data.map((data, i) => (
              <TestimonialCard
                key={i}
                {...data}
                width={width - 20}
                isActive={i === index + 1}
                currentIndex={index}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Testimonials;
