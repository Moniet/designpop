"use client"

import { useEffect, useState } from "react"
import Matter, { Body } from "matter-js"
import debounce from "@/hooks/debounce"

const animate = () => {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies

  // create an engine
  var engine = Engine.create(),
    world = engine.world

  // create a renderer
  var render = Render.create({
    element: document.getElementById("debug"),
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: 2,
      wireframes: false,
      background: "transparent"
    }
  })

  Render.run(render)
  var runner = Runner.create()
  Runner.run(runner, engine)

  const { height, top } = document
    .querySelector("#boundary")
    .getBoundingClientRect()

  var ground = Bodies.rectangle(
    window.innerWidth / 2 + 160,
    height + top,
    window.innerWidth + 320,
    160,
    { render: { visible: false }, isStatic: true }
  )
  var wallLeft = Bodies.rectangle(
    -80,
    window.innerHeight / 2,
    160,
    window.innerHeight,
    {
      isStatic: true,
      render: {
        visible: false
      }
    }
  )
  var wallRight = Bodies.rectangle(
    window.innerWidth + 80,
    window.innerHeight / 2,
    160,
    1200,
    {
      isStatic: true,
      render: {
        visible: false
      }
    }
  )

  var roof = Bodies.rectangle(
    window.innerWidth / 2 + 160,
    -80,
    window.innerWidth + 320,
    160,
    {
      isStatic: true,
      render: {
        visible: false
      }
    }
  )

  const textScale = window.innerWidth > 1000 ? 1 : 0.5

  const we = Bodies.rectangle(0, 0, 97 * textScale, 45 * textScale, {
    render: {
      sprite: {
        xScale: textScale,
        yScale: textScale,
        texture: "/WE.png"
      }
    }
  })

  const design = Bodies.rectangle(0, 0, 218 * textScale, 47 * textScale, {
    render: {
      sprite: {
        xScale: textScale,
        yScale: textScale,
        texture: "/DESIGN.png"
      }
    }
  })
  const circle = Bodies.rectangle(0, 0, 47 * textScale, 47 * textScale, {
    render: {
      sprite: {
        xScale: textScale,
        yScale: textScale,
        texture: "/Circle.png"
      }
    }
  })
  const develop = Bodies.rectangle(0, 0, 271 * textScale, 47 * textScale, {
    render: {
      sprite: {
        xScale: textScale,
        yScale: textScale,
        texture: "/DEVELOP.png"
      }
    }
  })
  const vector = Bodies.rectangle(0, 0, 55 * textScale, 55 * textScale, {
    render: {
      sprite: {
        xScale: textScale,
        yScale: textScale,
        texture: "/Vector.png"
      }
    }
  })
  const websites = Bodies.rectangle(0, 0, 303 * textScale, 47 * textScale, {
    render: {
      sprite: {
        xScale: textScale,
        yScale: textScale,
        texture: "/WEBSITES.png"
      }
    }
  })
  const apps = Bodies.rectangle(0, 0, 157 * textScale, 47 * textScale, {
    render: {
      sprite: {
        xScale: textScale,
        yScale: textScale,
        texture: "/APPS.png"
      }
    }
  })

  const bodies = [we, design, circle, develop, apps, websites, vector]

  let nextX = 25
  for (let body of bodies) {
    Body.setPosition(body, {
      x: nextX,
      y: 50
    })
    nextX += body.bounds.max.x - body.bounds.min.x + 50
  }

  design.draggable = true

  World.add(world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    we,
    design,
    circle,
    apps,
    websites,
    develop,
    vector
  ])

  var mouse = Mouse.create(render.canvas)
  var mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  })

  render.mouse = mouse
  World.add(world, mouseConstraint)

  const placeBodies = () => {
    bodies.forEach((body) => {
      const random1 = [-1, 1][Math.round(Math.random())]
      const xVel = Math.round(Math.random() * 20) * random1
      const yVel = Math.round(Math.random() * 20)

      Body.setVelocity(body, {
        x: xVel,
        y: -yVel
      })
    })
  }

  window.addEventListener("mousedown", placeBodies)

  return () => {
    World.clear(world, false)
    Render.stop(render)
    Runner.stop(runner)
    document.querySelector("#debug").textContent = ""
  }
}

export const useBouncingText = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    let cleanup = () => {}
    if (width >= 650) {
      cleanup = animate()
    }

    return () => {
      cleanup()
    }
  }, [width])

  useEffect(() => {
    const handleResize = debounce(() => setWidth(window.innerWidth, 100))
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
}
