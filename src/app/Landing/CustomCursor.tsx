import React, { useEffect, useRef } from "react"

const CustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as Element

      const x = e.clientX ?? 0
      const y = e.clientY ?? 0
      const componentType = target.getAttribute("data-component")

      const scale = (() => {
        if (componentType === "switch") return 0.1
        if (componentType === "testimonials") return 0
        return 1
      })()

      const opacity = (() => {
        if (componentType === "testimonials") return 0
        return 1
      })()

      ref.current!.style.transform = `translate(${x - 12}px,${
        y - 12
      }px) scale(${scale})`

      ref.current!.style.opacity = opacity + ""
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="-mt-2 -ml-2">
      <div
        className="fixed items-center justify-center text-2xl font-semibold bg-[rgba(41,42,255,0.9)] rounded-full z-50 top-0 left-0 backdrop-invert pointer-events-none hidden text-white lg:flex "
        style={{
          transition: "transform 0.3s ease-out, opacity 0.3s ease",
          width: 25 + "px",
          height: 25 + "px"
        }}
        ref={ref}
      />
    </div>
  )
}

export default CustomCursor
