import React from "react"

const TestimonialGrid = () => {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
      style={{ gridAutoRows: "10px" }}
    >
      <div className="border border-zinc-200 p-7 rounded-lg">
        <div className="flex gap-5">
          <div className="size-[40px] rounded-full overflow-hidden">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col justify-between">

          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialGrid
