//https:stackoverflow.com/questions/49061774/how-to-build-a-typescript-class-constructor-with-object-defining-class-fields
type NonMethodKeys<T> = {
  [P in keyof T]: T[P] extends Function ? never : P
}[keyof T]
type RemoveMethods<T> = Pick<T, NonMethodKeys<T>>

class Tower extends Sprite {
  static count: number = 0
  public id: number

  public size: number = 96
  public offset: Point = {
    x: (this.size - 64) / 2,
    y: (this.size - 64) / 2,
  }
  public active: Boolean = true
  public sellFor: number

  public bonusDmg = 0
  public basicDmg = 0

  public bonusAs = 0
  public basicAs = 0

  public bonusRange = 0
  public basicRange = 0

  public canvas: HTMLCanvasElement
  public c: CanvasRenderingContext2D
  public cost: number
  public totalDmg: number
  public totalAs: number
  public totalRange: number
  public position: Point
  public src: string
  public upgrades: Upgrade

  constructor(data: RemoveMethods<Tower>) {
    super(data.canvas, data.c, data.src, data.position)
    Object.assign(this, data)

    this.id = ++Tower.count
    this.sellFor = Math.floor(this.cost * 0.7)
    this.basicDmg = this.totalDmg
    this.basicAs = this.totalAs
    this.basicRange = this.totalRange
  }

  update(): void {}

  upgrade(price: number, bonus: number, i: number, type: string) {
    this.updateCost(price)
    if (type === 'dmg') this.updateDmg(bonus)
    else if (type === 'range') this.updateRange(bonus)
    else if (type === 'as') this.updateAS(bonus)
    this.updateState(i, type)
  }
  updateState(i: number, type: string) {
    switch (type) {
      case 'as':
        this.upgrades.as[i].bought = true
        this.upgrades.as[i].active = false
        if (this.upgrades.as[i + 1]) this.upgrades.as[i + 1].active = true
        break

      case 'dmg':
        this.upgrades.dmg[i].bought = true
        this.upgrades.dmg[i].active = false
        if (this.upgrades.dmg[i + 1]) this.upgrades.dmg[i + 1].active = true
        break

      case 'range':
        this.upgrades.range[i].bought = true
        this.upgrades.range[i].active = false
        if (this.upgrades.range[i + 1]) this.upgrades.range[i + 1].active = true
        break
    }
  }

  updateCost(price: number): void {
    this.cost += price
    this.sellFor = Math.floor(this.cost * 0.7)
  }

  updateDmg(bonusDmg: number) {
    this.bonusDmg += bonusDmg
    this.totalDmg = this.bonusDmg + this.basicDmg
  }

  updateAS(bonusAs: number) {
    this.bonusAs += bonusAs
    this.totalAs = this.bonusAs + this.basicAs
  }

  updateRange(bonusRange: number) {
    this.bonusRange += bonusRange
    this.totalRange = this.bonusRange + this.basicRange
  }

  drawRange(): void {
    if (this.active) {
      this.c.beginPath()
      this.c.arc(
        this.position.x + this.size / 2,
        this.position.y + this.size / 2,
        this.totalRange,
        0,
        2 * Math.PI
      )
      this.c.strokeStyle = 'blue'
      this.c.stroke()
    }
  }
}
