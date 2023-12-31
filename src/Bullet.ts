class Bullet extends Sprite {
  static count: number = 0
  public id = 0

  public velocity: Point = { x: 0, y: 0 }
  public position: Point = { x: 0, y: 0 }
  public radius = 10

  public explosionRadius = 70
  public color: string = 'red'
  public radians = 0

  constructor(
    public tower: Tower,
    public playerPos: Point,
    public enemy: Enemy,
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public src: string,
    public multiAttack: string,
    public checkCircleCollision: (a: Enemy, b: Bullet) => Boolean,
    public deleteBullet: (a: Bullet) => void,
    public handleMultiAttack: (a: Enemy, b: Bullet, c: Tower) => void,
    public dmg: number,
    public updateTotalDmg: (a: Tower) => void,
    public stage: number,
    public moveSpeed: number = 10
  ) {
    super(canvas, c, src, playerPos, { x: -12, y: 0 }, 0, stage, 4)
    if (this.moveSpeed < 10) {
      this.offset = { x: 0, y: 0 }
    }
    this.id = ++Tower.count
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
    this.radians = radians + (-90 * Math.PI) / 180
    this.velocity.x = Math.cos(radians) * -this.moveSpeed
    this.velocity.y = Math.sin(radians) * -this.moveSpeed
  }

  update() {
    this.calculateVelocity()

    if (this.checkCircleCollision(this.enemy, this)) {
      if (this.multiAttack === 'rocket' || this.multiAttack === 'bubble') {
        this.handleMultiAttack(this.enemy, this, this.tower)
      }

      if (this.enemy.health - this.dmg > 0) this.tower.dmgDealt += this.dmg
      else if (this.enemy.health > 0) this.tower.dmgDealt += this.enemy.health

      this.updateTotalDmg(this.tower)
      this.enemy.health -= this.dmg
      this.deleteBullet(this)
    }

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // this.drawOutline()
  }
}
