class Bullet extends Sprite {
  public velocity: Point = { x: 0, y: 0 }
  public position: Point = { x: 0, y: 0 }
  public radius = 10
  public color: string = 'red'
  public radians = 0
  public moveSpeed = 10

  constructor(
    public playerPos: Point,
    public enemy: Enemy,
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public src: string,
    public checkCircleCollision: (a: Enemy, b: Bullet) => Boolean,
    public deleteBullet: (a: Bullet) => void,
    public dmg: number
  ) {
    super(canvas, c, src)
    this.position = JSON.parse(JSON.stringify(playerPos))
  }

  drawOutline() {
    this.c.beginPath()
    this.c.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
    this.c.strokeStyle = this.color
    this.c.stroke()
  }

  calculateVelocity() {
    const x = this.position.x - this.enemy.position.x
    const y = this.position.y - this.enemy.position.y
    const radians = Math.atan2(y, x)
    this.radians = radians + (-180 * Math.PI) / 180
    this.velocity.x = Math.cos(radians) * -this.moveSpeed
    this.velocity.y = Math.sin(radians) * -this.moveSpeed
  }

  update() {
    this.calculateVelocity()

    if (this.checkCircleCollision(this.enemy, this)) {
      this.enemy.health -= this.dmg
      this.deleteBullet(this)
    }

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    this.drawOutline()
  }
}
