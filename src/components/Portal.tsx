import { PropsWithChildren, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"

const Portal = ({ children }: PropsWithChildren) => {
  const div = useMemo(() => {
    return globalThis.window?.document.createElement("div")
  }, [])

  useEffect(() => {
    if (div) {
      window.document.body.appendChild(div)
    }
  }, [div])

  return createPortal(children, div)
}

export default Portal
