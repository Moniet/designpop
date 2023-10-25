import React, { Children, useEffect } from "react"

const Gutter = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full xs:p-5 sm:p-8 md:p-12 lg:px-[8%] lg:py-16 ${className}`}
    >
      {children}
    </div>
)
}

export default Gutter
