import React, { Children, useEffect } from "react"

const Gutter = ({ children, className = "" }) => {
  return (
    <div
      className={`sm:pd-12 w-full xs:p-5 md:p-12 lg:px-[8%] lg:py-16 ${className}`}
    >
      {children}
    </div>
  )
}

export default Gutter
