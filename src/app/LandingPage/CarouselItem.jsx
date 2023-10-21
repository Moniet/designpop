"use client"
import React from "react"
import FadeInOnView from "@/components/FadeInOnView"
import Image from "next/image"

export const CarouselItem = ({ img = "", title, link, tags = [], index }) => {
  return (
    <FadeInOnView
      className="pointer-none ali relative flex h-auto w-[700px] flex-shrink-0 snap-center overflow-hidden rounded"
      delay={index / 3.5}
    >
      <img
        src={img}
        alt={title}
        rel="preload"
        className="pointer-events-none absolute left-0 top-2/4 aspect-[1.2]  h-auto w-full -translate-y-2/4 select-none rounded-md object-cover"
      />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 select-none" />

      {/* <div className="absolute left-[30px] top-[30px] flex w-full max-w-[400px] flex-wrap gap-2">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="w-fit rounded-full bg-white p-2 text-sm text-black"
          >
            {tag}
          </div>
        ))}
      </div> */}

      {/* <a
        draggable
        href={link}
        className="absolute bottom-8 left-0 w-full select-none px-[30px]"
      >
        <div className="flex w-full items-center justify-between rounded-full bg-white px-2 py-1 text-black">
          {title}
          <div>
            <svg
              width="37"
              height="36"
              viewBox="0 0 37 36"
              className="-mr-[4px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.238037"
                width="36"
                height="36"
                rx="18"
                fill="#1A1A1A"
              />
              <path
                d="M14.9048 14.6667H21.5715M21.5715 14.6667V21.3333M21.5715 14.6667L14.9048 21.3333"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </a> */}
    </FadeInOnView>
  )
}
