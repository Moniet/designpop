import React from "react"
import { Divider, SectionHeader } from "./Components"
import Gutter from "./Gutter"
import FadeInOnView from "@/components/FadeInOnView"

const WorkItem = ({ tags, title, link }: any) => {
  return (
    <li>
      <FadeInOnView className="md:itemscenter flex justify-between gap-5 border-b border-dashed pb-10 xs:flex-col xs:border-b-zinc-200 md:flex-row md:border-b-0">
        <div>
          <p className=" font-heading  text-zinc-900 xs:text-sm md:text-base">
            {title}
          </p>
        </div>
        <div className="flex xs:flex-col xs:gap-5 md:flex-row md:items-center md:gap-12 ">
          <div className="flex flex-wrap gap-5">
            {tags.map((tag: string, i: number) => {
              return (
                <div
                  className="w-fit min-w-fit rounded border px-3 py-2 text-zinc-800 xs:text-xs md:text-sm"
                  key={i}
                >
                  {tag}
                </div>
              )
            })}
          </div>
          <div>
            <a
              href={link}
              className="text-zinc-900 underline xs:text-sm md:text-base"
            >
              View project
            </a>
          </div>
        </div>
      </FadeInOnView>
    </li>
  )
}

const components = [
  {
    tags: ["UI/UX", "Development"],
    title: "Filebloc: Digital Asset Management tool for Slack",
    link: "https://filebloc.com",
  },
  {
    tags: ["A/B testing", "UI Design", "Full-Stack Development"],
    title: "Blocs: Habit tracker widgets for Notion",
    link: "https://blocs.me",
  },
  {
    tags: ["Full-Stack Development", "Figma Design"],
    title: "Framerlib: Component library for Framer",
    link: "https://framerlib.com",
  },
  {
    tags: ["CMS Development", "UI Design", "SEO"],
    title:
      "Phoenix Medical Systems: Neonatal Healthcare device manufacturing company",
    link: "https://phoenixmedicalsystems.com",
  },
]

const WorkList = () => {
  return (
    <Gutter>
      <FadeInOnView>
        <SectionHeader>recent work</SectionHeader>
      </FadeInOnView>
      <Divider />

      <ul className="flex flex-col gap-10">
        {components.map((d, i) => {
          return <WorkItem key={i} {...d} />
        })}
      </ul>
    </Gutter>
  )
}

export default WorkList
