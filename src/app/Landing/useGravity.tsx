import { useEffect, useRef, useState } from "react"

interface Box {
  x: number
  y: number
  width: number
  height: number
  text: string
  velocityX: number
  velocityY: number
  angularVelocity: number
  angle: number
  forceMultiplier: number
}

interface UseGravityProps {
  canvasRef: React.RefObject<HTMLCanvasElement>
  texts: string[]
  gravity?: number
  bounce?: number
  friction?: number
  angularFriction?: number
}

export const useGravity = ({
  canvasRef,
  texts,
  gravity = 0.4,
  bounce = 0.65,
  friction = 0.99,
  angularFriction = 0.97
}: UseGravityProps) => {
  const boxesRef = useRef<Box[]>([])
  const animationFrameRef = useRef<number>()
  const lastScrollY = useRef(0)
  const lastScrollX = useRef(0)
  const [init, setInit] = useState(false)
  // const { ref: inViewRef } = useInView()

  useEffect(() => {
    const onClick = () => {
      boxesRef.current.forEach((box) => {
        box.velocityY -= (3 + Math.random() * 2) * box.forceMultiplier
        box.velocityX += (Math.random() - 0.5) * 3 * box.forceMultiplier
        // box.angularVelocity +=
        //   (Math.random() - 0.5) * 0.05 * box.forceMultiplier
      })
    }

    canvasRef.current!.addEventListener("click", onClick)

    const canvas = canvasRef.current as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d", {
      antialias: true,
      alpha: true
    }) as CanvasRenderingContext2D
    if (!ctx) return

    const getTextWidth = (text: string) => {
      ctx.font = "bold 14px Arial"
      const metrics = ctx.measureText(text)
      return metrics.width
    }

    const initializeBoxes = () => {
      const padding = 20
      const horizontalPadding = 40
      const boxHeight = 50
      let currentX = padding
      let currentY = padding

      boxesRef.current = texts.map((text) => {
        const textWidth = getTextWidth(text)
        const boxWidth = textWidth + horizontalPadding * 2

        if (currentX + boxWidth > canvas.width - padding) {
          currentX = padding
          currentY += boxHeight + padding
        }

        const box: Box = {
          x: currentX,
          y: currentY,
          width: boxWidth,
          height: boxHeight,
          text,
          velocityX: 0,
          velocityY: 0,
          angularVelocity: 0,
          angle: 0,
          forceMultiplier: 0.5 + Math.random() * 1.5
        }

        currentX += boxWidth + padding
        return box
      })
    }

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initializeBoxes()
    }

    const handleScroll = () => {
      const scrollDiffY = window.scrollY - lastScrollY.current
      const scrollDiffX = window.scrollX - lastScrollX.current

      boxesRef.current.forEach((box) => {
        box.velocityY -= Math.max(scrollDiffY, 1) * 0.1 * box.forceMultiplier

        box.velocityX +=
          (scrollDiffX * 0.1 +
            Math.sign(scrollDiffY) * (Math.random() - 0.5) * 2) *
          box.forceMultiplier
        // box.angularVelocity +=
        //   (scrollDiffY * 0.0002 + (Math.random() - 0.5) * 0.001) *
        //   box.forceMultiplier
      })

      lastScrollY.current = window.scrollY
      lastScrollX.current = window.scrollX
    }

    // const createGradient = (
    //   x: number,
    //   y: number,
    //   width: number,
    //   height: number
    // ) => {
    //   const gradient = ctx.createLinearGradient(x, y, x + width, y + height)
    //   gradient.addColorStop(0, "#ED732E")
    //   gradient.addColorStop(1, "#FFBE99")
    //   return gradient
    // }

    const roundRect = (
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ) => {
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      )
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
    }

    const detectCollision = (box1: Box, box2: Box) => {
      return (
        box1.x < box2.x + box2.width &&
        box1.x + box1.width > box2.x &&
        box1.y < box2.y + box2.height &&
        box1.y + box1.height > box2.y
      )
    }

    const resolveCollision = (box1: Box, box2: Box) => {
      const dx = box2.x - box1.x
      const dy = box2.y - box1.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance === 0) return

      const normalX = dx / distance
      const normalY = dy / distance

      const relativeVelocityX = box1.velocityX - box2.velocityX
      const relativeVelocityY = box1.velocityY - box2.velocityY

      const impulse =
        (relativeVelocityX * normalX + relativeVelocityY * normalY) * bounce

      box1.velocityX -= impulse * normalX
      box1.velocityY -= impulse * normalY
      box2.velocityX += impulse * normalX
      box2.velocityY += impulse * normalY

      // Gentle angular velocity based on collision point
      // const collisionAngle = Math.atan2(dy, dx)
      // const angularImpulse = 0.01 * Math.sin(collisionAngle) * impulse

      // box1.angularVelocity -= angularImpulse * 0.5
      // box2.angularVelocity += angularImpulse * 0.5

      // Prevent overlap
      const overlap = Math.min(
        Math.abs(box1.x + box1.width - box2.x),
        Math.abs(box2.x + box2.width - box1.x),
        Math.abs(box1.y + box1.height - box2.y),
        Math.abs(box2.y + box2.height - box1.y)
      )

      if (overlap > 0) {
        const adjustX = (overlap * normalX) / 2
        const adjustY = (overlap * normalY) / 2

        box1.x -= adjustX
        box1.y -= adjustY
        box2.x += adjustX
        box2.y += adjustY
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      boxesRef.current.forEach((box, index) => {
        box.velocityY += gravity
        box.velocityX *= friction
        box.velocityY *= friction
        box.x += box.velocityX
        box.y += box.velocityY

        // Angular damping
        // box.angularVelocity *= angularFriction
        // box.angle += box.angularVelocity

        // Limit rotation
        // const maxAngle = Math.PI / 6
        // if (Math.abs(box.angle) > maxAngle) {
        //   box.angle = Math.sign(box.angle) * maxAngle
        //   // box.angularVelocity *= -0.5
        // }

        // Wall collisions with energy loss
        if (box.x + box.width > canvas.width) {
          box.x = canvas.width - box.width
          box.velocityX *= -bounce
          // box.angularVelocity *= 0.8
        }
        if (box.x < 0) {
          box.x = 0
          box.velocityX *= -bounce
          // box.angularVelocity *= 0.8
        }
        if (box.y + box.height > canvas.height) {
          box.y = canvas.height - box.height
          box.velocityY *= -bounce
          box.velocityX *= 0.95 // Ground friction
          // box.angularVelocity *= 0.8
        }
        if (box.y < 0) {
          box.y = 0
          box.velocityY *= -bounce
          // box.angularVelocity *= 0.8
        }

        // Box collisions
        for (let i = index + 1; i < boxesRef.current.length; i++) {
          const otherBox = boxesRef.current[i]
          if (detectCollision(box, otherBox)) {
            resolveCollision(box, otherBox)
          }
        }

        // Draw box with rotation
        ctx.save()
        ctx.translate(box.x + box.width / 2, box.y + box.height / 2)
        // ctx.rotate(box.angle)

        // const gradient = createGradient(
        //   -box.width / 2,
        //   -box.height / 2,
        //   box.width,
        //   box.height
        // )
        //  ctx.fillRect()
        roundRect(-box.width / 2, -box.height / 2, box.width, box.height, 6)
        // ctx.fillStyle = gradient
        // ctx.fill()

        // Draw text
        ctx.fillStyle = "rgb(0 0 0)"
        ctx.font = "18px Manrope"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(box.text, 0, 0)

        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    if (init) {
      handleResize()
      window.addEventListener("resize", handleResize)
      window.addEventListener("scroll", handleScroll)
      animate()
    }

    return () => {
      canvasRef.current?.removeEventListener("click", onClick)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [texts, gravity, bounce, friction, angularFriction, init])

  return setInit
}
