interface TowerDetails {
  cost: number
  dmg: number
  attackSpeed: number
  range: number
  position: Square
}

type TowerTypes = Tower | SpeedTower

class Tower extends Sprite implements TowerDetails {
  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public cost: number,
    public dmg: number,
    public attackSpeed: number,
    public range: number,
    public position: Square,
    public src: string,
    public offset: Point = {
      x: (position.size - 64) / 2,
      y: (position.size - 64) / 2,
    },
    public active: Boolean = true
  ) {
    super(canvas, c, src, position)
  }

  update(): void {
    // this.c.fillStyle = 'rgba(22,22,22, 0.3)'
    // this.c.fillRect(
    //   // 64 will be image of tower width and height
    //   this.position.x + (this.position.size - 64) / 2,
    //   this.position.y + (this.position.size - 64) / 2,
    //   64,
    //   64
    // )

    if (this.active) this.drawRange()
  }

  drawRange(): void {
    this.c.beginPath()
    this.c.arc(
      this.position.x + this.position.size / 2,
      this.position.y + this.position.size / 2,
      this.range,
      0,
      2 * Math.PI
    )
    this.c.strokeStyle = 'blue'
    this.c.stroke()
  }
}

class SpeedTower extends Tower {
  constructor(
    canvas: HTMLCanvasElement,
    c: CanvasRenderingContext2D,
    cost: number,
    dmg: number,
    attackSpeed: number,
    range: number,
    position: Square,
    src: string
  ) {
    super(canvas, c, cost, dmg, attackSpeed, range, position, src)
  }
}
