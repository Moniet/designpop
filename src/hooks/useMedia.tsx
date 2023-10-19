import React, { useEffect, useLayoutEffect, useState } from "react"

const useMedia = (query: string) => {
  const [isMedia, setIsMedia] = useState(false)
  const isClient = !!globalThis.window

  useEffect(() => {
    const handleMatch = (ev: MediaQueryListEvent) => {
      if (ev.matches) {
        setIsMedia(true)
      } else {
        setIsMedia(false)
      }
    }
    window.matchMedia(query).addEventListener("change", handleMatch)

    return () => {
      window.matchMedia(query).removeEventListener("change", handleMatch)
    }
  }, [query, isClient])

  return isMedia
}

export default useMedia
