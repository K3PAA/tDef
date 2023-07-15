interface TowerDetails {
  cost: number
  dmg: number
  attackSpeed: number
  range: number
  position: Point
  size: number
}

type TowerTypes = Tower | SpeedTower

class Tower extends Sprite implements TowerDetails {
  public size: number = 96
  public offset: Point = {
    x: (this.size - 64) / 2,
    y: (this.size - 64) / 2,
  }
  public active: Boolean = true
  public sellFor = Math.floor(this.cost * 0.7)

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public cost: number,
    public dmg: number,
    public attackSpeed: number,
    public range: number,
    public position: Point,
    public src: string
  ) {
    super(canvas, c, src, position)
  }

  update(): void {}

  drawRange(): void {
    if (this.active) {
      this.c.beginPath()
      this.c.arc(
        this.position.x + this.size / 2,
        this.position.y + this.size / 2,
        this.range,
        0,
        2 * Math.PI
      )
      this.c.strokeStyle = 'blue'
      this.c.stroke()
    }
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
    position: Point,

    src: string
  ) {
    super(canvas, c, cost, dmg, attackSpeed, range, position, src)
  }
}
