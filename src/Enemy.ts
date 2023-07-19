class Enemy extends Sprite {
  static count: number = 0
  public id = 0

  public health: number
  public healthTotal: number
  public reward: number
  public moveSpeed: number

  public healthBarWidth = 20
  public radians = 0
  public color: string = 'red'
  public src: string
  public size: number
  public position: Point = { x: 0, y: 0 }
  public velocity: Point = { x: 0, y: 0 }
  public currentStage: number = 0
  public importance: number = 1
  public radius: number

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public path: Point[],
    public data: EnemyData,
    public eliminatePlayer: (a: Enemy) => void,
    public enemyInBase: (a: Enemy) => void
  ) {
    super(canvas, c, data.src)
    this.id = ++Tower.count
    this.health = data.health
    this.healthTotal = data.health
    this.reward = data.reward
    this.moveSpeed = data.moveSpeed
    this.src = data.src
    this.size = data.size
    this.importance = data.importance
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
      Math.round(this.position.x) >= Math.round(destination.x - num) &&
      Math.round(this.position.x) <= Math.round(destination.x) &&
      Math.round(this.position.y) >= Math.round(destination.y - num) &&
      Math.round(this.position.y) <= Math.round(destination.y)
    ) {
      return true
    }
    return false
  }

  checkIfDead() {
    if (this.health <= 0) {
      this.eliminatePlayer(this)
    }
  }

  drawHealthBar() {
    this.c.fillStyle = 'red'
    this.c.fillRect(
      this.position.x + this.size / 4,
      this.position.y,
      this.healthBarWidth,
      5
    )

    this.c.fillStyle = 'green'
    this.c.fillRect(
      this.position.x + this.size / 4,
      this.position.y,
      this.healthBarWidth -
        ((this.healthTotal - this.health) * this.healthBarWidth) /
          this.healthTotal,
      5
    )
  }

  update() {
    this.calculateVelocity()
    this.collisionCircle()
    this.drawHealthBar()
    this.checkIfDead()

    //  path długość ma 6, jak trafia na miejsce 6 to wetedy koniec
    if (this.calculateRound(6) && this.currentStage + 1 !== this.path.length) {
      this.currentStage += 1
    }

    if (this.currentStage + 1 === this.path.length) {
      this.enemyInBase(this)
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
