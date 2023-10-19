// bounds
// angle
// speed
// gravity
// bounce
// air resistance

// elementRef
// (x, y)

// h =
const nodes = {}
export const textNodesStore = {
  nodes,
  getNodes() {
    return nodes
  },
  updateNode(index, value) {
    nodes[index] = {
      ...nodes[index],
      ...value,
    }
  },
}

const textMass = 25
const planetMass = 150000
const bounceResistance = 0.1
const airResistance = 0.001

class Text {
  constructor(x, y, velX, velY) {
    this.mass = textMass
    this.x = x
    this.y = y
    this.velX = velX
    this.velY = velY
  }

  moveElement() {}

  animate = () => {
    requestAnimationFrame(this.animate)
  }
}
