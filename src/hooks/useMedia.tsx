import React, { useEffect, useLayoutEffect, useState } from "react"

const useMedia = (query: string) => {
  const [isMedia, setIsMedia] = useState(false)
  const isClient = !!globalThis.window

  useEffect(() => {
    const handleMatch = (ev: MediaQueryListEvent) => {
      console.log("change")
      setIsMedia(ev.matches)
    }
    const q = window.matchMedia(query)

    setIsMedia(q.matches)

    q.addEventListener("change", handleMatch)

    return () => {
      q.removeEventListener("change", handleMatch)
    }
  }, [query, isClient])

  return isMedia
}

export default useMedia
