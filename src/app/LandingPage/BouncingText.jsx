"use client"
import "matter-dom-plugin"
import Matter from "matter-js"
import { useBouncingText } from "./useBouncingText"

import React, {
  createRef,
  forwardRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { animateText } from "./useGravity"

const objectMass = 30
const planetMass = 2000000

const GravityText = forwardRef(
  ({ startX, startY, children, className, index, angle }, ref) => {
    useEffect(() => {}, [startX, startY, ref.current]) // eslint-disable-line

    return (
      <div
        ref={ref}
        className={`tracking-[5px] text-black ${className} gravity-text b-text absolute m-0 w-fit p-0 font-bold uppercase`}
        style={{ fontSize: "50px", lineHeight: 1 }}
      >
        {children}
      </div>
    )
  },
)

GravityText.displayName = "Gravity Text"

const words = ["We", "Design", "Develop", "Apps", "Websites"]
const ids = ["one", "two"]

const BouncingText = () => {
  const ref = useRef()
  const [positions, setPositions] = useState([])
  const [mounted, setMounted] = useState(false)
  const livePositions = useRef([])
  useEffect(() => setMounted(true), [])
  const refs = useMemo(
    () =>
      Array(words.length + 1)
        .fill("")
        .map(() => createRef()),
    [mounted],
  )

  useBouncingText()

  return (
    <>
      <div
        className="absolute left-0 top-0 -z-[1] h-screen w-full max-w-full"
        ref={ref}
        id="debug"
      ></div>
    </>
  )
}

export default BouncingText
