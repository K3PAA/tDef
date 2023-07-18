class Enemy extends Sprite {
  public health: number
  public reward: number
  public moveSpeed: number

  public radians = 0
  public color: string = 'red'
  public src: string
  public size: number
  public position: Point = { x: 0, y: 0 }
  public velocity: Point = { x: 0, y: 0 }
  public currentStage: number = 0

  public radius: number

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public path: Point[],
    public data: EnemyData
  ) {
    super(canvas, c, data.src)
    this.health = data.health
    this.reward = data.reward
    this.moveSpeed = data.moveSpeed
    this.src = data.src
    this.size = data.size

    this.position.x = this.path[this.currentStage].x
    this.position.y = this.path[this.currentStage].y
    this.radius = this.size / 2
  }

  calculateVelocity() {
    const x = this.position.x - this.path[this.currentStage + 1].x
    const y = this.position.y - this.path[this.currentStage + 1].y
    const radians = Math.atan2(y, x)
    this.radians = radians + (-180 * Math.PI) / 180
    this.velocity.x = Math.cos(radians) * -this.moveSpeed
    this.velocity.y = Math.sin(radians) * -this.moveSpeed
  }

  calculateRound(num: number): boolean {
    let destination = {
      x: this.path[this.currentStage + 1].x,
      y: this.path[this.currentStage + 1].y,
    }
    // now player position can be in a set of range and the condiction will be true
    // instead of matching position when pixels are exactly the same
    if (
      Math.round(this.position.x) >= destination.x - num &&
      Math.round(this.position.x) <= destination.x &&
      Math.round(this.position.y) >= destination.y - num &&
      Math.round(this.position.y) <= destination.y
    ) {
      return true
    }
    return false
  }

  update() {
    this.collisionCircle()
    this.calculateVelocity()
    //  path długość ma 6, jak trafia na miejsce 6 to wetedy koniec
    if (this.calculateRound(5) && this.currentStage + 2 !== this.path.length) {
      this.currentStage += 1
    } else if (this.currentStage + 2 === this.path.length) {
      // delete player from array
    }

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }

  collisionCircle() {
    this.c.beginPath()
    this.c.arc(
      this.position.x + this.size / 2,
      this.position.y + this.size / 2,
      this.radius,
      0,
      2 * Math.PI
    )
    this.c.strokeStyle = this.color
    this.c.stroke()
  }
}
