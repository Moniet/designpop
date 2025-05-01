"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { throttle } from "lodash";

const testimonials = [
  {
    id: "1",
    author: {
      name: "Florian Braeuer",
      position: "CTO of Gavel GmbH",
      image: "/img/florian.jpeg",
    },
    text: "Working with designpop has been incredibly productive for us founders at Gavel. We have been able to experiment with several ideas in a short time to see what sticks. Their excellent communication keeps things high-quality and quick. I can't recommend them enough!",
  },
  {
    id: "2",
    author: {
      name: "David Cheung",
      position: "Lead Engineer at Climb Credit",
      image: "/img/david.jpeg",
    },
    text: "I can't recommend designpop highly enough, they are conscientious self-starters, who were able to work closely with our product manager, designers, and other engineers to deliver an MVP of our student facing checkout experience in record time.",
  },

  {
    id: "4",
    author: {
      name: "Sashikumar",
      position: "M.D at Phoenix Medical Systems",
      image: "/img/sash.jpeg",
    },
    text: "Designpop re-vamped our website in record time and helped tremendously boost our SEO rankings. We are now outranking our competitors on Google search and also have a high quality design that gives our company a great image to potential customers on a international scale.",
  },
  {
    id: "5",
    author: {
      name: "Kristijan Binski",
      position: "Founder of Wandergates",
      image: "/img/kris.jpeg",
    },
    text: "I've worked with many agencies, but designpop is the real deal! They worked with us to ship a client's app in just a couple of weeks, and their post-launch support is organised and invaluable.",
  },
  {
    id: "6",
    author: {
      name: "Mohit Yadav",
      position: "CTO of BoldCare",
      image: "/img/mohit.jpeg",
    },
    text: "The development service was simply excellent! designpop not only helped deliver our site re-design in a matter weeks but also cleaned up our React architecture by a long shot. The quality output, coupled with the increase in developer experience was a delightful outcome!",
  },
  {
    id: "3",
    author: {
      name: "Marvin Musialek",
      position: "Founder of Strom AI",
      image: "/img/marvin.jpeg",
    },
    text: "What impressed me most about designpop was their ability to transform our rough concept into a polished product in just two weeks. Their team's attention to detail and quick turnaround time helped us launch faster than we ever thought possible. They truly deliver on their promise of speed without compromising quality.",
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
      data-component="testimonials"
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
      className={`md:px-10 md:py-8 py-5 px-8 transition-colors  duration-300 rounded-[15px] border border-[#e8e8e8] flex flex-col-reverse gap-24 flex-1 justify-between min-w-[300px] max-w-[300px] w-full sm:min-w-[500px] sm:max-w-[500px] lg:min-w-[600px] lg:max-w-[600px] ${
        isActive
          ? "bg-[rgb(42,41,255)] !text-white shadow-lg border"
          : "bg-[#f9f9f9] opacity-50"
      }`}
      // style={{ minWidth: props.width + "px" }}
    >
      <div className="flex gap-3 items-center flex-1 max-h-fit pointer-events-none">
        <div className="size-[40px] aspect-square min-w-[40px] rounded-lg overflow-hidden bg-zinc-100 relative pointer-events-none">
          <img
            src={props.author.image}
            alt={props.author.name + ", " + props.author.position}
            className="saturate-0"
          />
          {/* <div
            className="absolute top-0 right-0 size-full bg-blue-500/40"
            style={{ backdropFilter: "hue-rotate(60deg)" }}
          ></div> */}
        </div>
        <div className="flex flex-col justify-between pointer-events-none">
          <p className="font-medium text-sm md:text-base">
            {props.author.name}
          </p>
          <p className={`text-sm md:text-base opacity-70 whitespace-nowrap`}>
            {props.author.position}
          </p>
        </div>
      </div>
      <p
        className={`text-sm sm:text-lg xl:text-lg leading-6 sm:leading-8 font-semibold pointer-events-none`}
      >
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
      if (data.at(-1)?.author !== data[index].author) {
        setData([...data, { ...data[index], id: crypto.randomUUID() }]);
      }
      setIndex((prevIndex) => Math.min(prevIndex + 1));
    }, 1000),
    [index],
  );

  const handlePrev = () => {
    setIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const inView = useInView(headerRef, { once: true });

  const posX = useMotionValue(0);
  const posY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        posX.set(e.clientX);
        posY.set(e.clientY);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <div className="flex w-full max-md:flex-col justify-between relative z-10">
        <div className="flex flex-col max-sm:hidden items-start -tracking-[0.1rem]">
          <div className="h-fit  w-fit max-h-fit min-h-fit">
            <motion.div
              className="text-zinc-900 font-semibold  min-[300px]:text-2xl min-[390px]:text-3xl sm:text-4xl xl:text-5xl leading-12 md:pb-2 "
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
            className="h-fit  w-fit min-h-fit max-h-fit pb-2"
            ref={headerRef}
          >
            <motion.div
              className="text-zinc-900 font-semibold min-[300px]:text-2xl min-[390px]:text-3xl sm:text-4xl xl:text-5xl leading-12"
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

        <motion.div
          whileInView={{
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: { duration: 2 },
          }}
          initial={{ opacity: 0, y: 30, rotateX: 20 }}
          // viewport={{ once: true }}
          className="text-zinc-900 font-semibold  min-[300px]:text-2xl min-[390px]:text-3xl sm:text-4xl xl:text-5xl leading-12 md:pb-2 sm:hidden max-sm:mb-10 max-sm:mt-20 relative z-10"
        >
          Startups worldwide have boosted productivity with designpop
        </motion.div>

        <div className="flex gap-3 mt-5">
          <button
            className="border rounded-full size-[40px] flex hover:border-zinc-700 transition-color duration-300 disabled:opacity-50 disabled:hover:border-zinc-200 disabled:cursor-not-allowed"
            onClick={handlePrev}
            disabled={index === 0}
          >
            <ChevronLeft className="m-auto size-5 text-zinc-700" />
          </button>
          <button
            className="border rounded-full size-[40px] flex hover:border-zinc-700 transition-color duration-1000"
            onClick={handleNext}
          >
            <ChevronRight className="m-auto size-5 text-zinc-700" />
          </button>
        </div>
      </div>
      <motion.div
        drag="x"
        id="motion"
        className="relative"
        data-component="testimonials"
        ref={containerRef}
        dragElastic={0.4}
        dragConstraints={{ left: 0, right: 0 }}
        onPanEnd={(e, info) => {
          const width = window.innerWidth >= 768 ? 50 : window.innerWidth / 5;

          if (info.offset.x <= -width) {
            handleNext();
          }
          if (info.offset.x >= width) {
            handlePrev();
          }
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          data-component="testimonials"
          className="-translate-x-[300px] sm:-translate-x-[500px] lg:-translate-x-[300px] w-full"
        >
          <motion.div
            data-component="testimonials"
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
                key={data.id}
                {...data}
                width={width - 20}
                isActive={i === index + 1}
                currentIndex={index}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
      <div className="hidden xl:block absolute bottom-0 left-0 h-full w-[100px] bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] z-0 pointer-events-none" />
      <div className="hidden xl:block absolute bottom-0 right-0 h-full w-[100px] bg-gradient-to-l from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] z-0 pointer-events-none" />
      <motion.div
        data-component="testimonials"
        className="fixed top-0 left-0 pointer-events-none max-lg:hidden portrait:hidden"
        style={{
          x: posX,
          y: posY,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
          transition:
            "transform 0.3s ease-out, opacity 0.3s ease, backdrop-filter 0.3s",
          transformOrigin: "center left",
        }}
      >
        <div className="-translate-y-1/2 text-xl gap-2 -translate-x-1/2 pointer-events-none rounded-full flex items-center justify-center bg-black/50  backdrop-blur-[2px] drop-shadow-lg text-white size-[100px] font-semibold">
          <ChevronLeft className="size-4" strokeWidth={3} />
          Drag
          <ChevronRight className="size-4" strokeWidth={3} />
        </div>
      </motion.div>
    </>
  );
};

export default Testimonials;
