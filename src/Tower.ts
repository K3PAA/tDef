interface TowerDetails {
  cost: number
  totalDmg: number
  totalAs: number
  totalRange: number
  position: Point
  size: number
}

type UpgradeValues = {
  price: number
  bonus: number
  bought: boolean
  active: boolean
}

type Upgrade = {
  dmg: UpgradeValues[]
  as: UpgradeValues[]
  range: UpgradeValues[]
}

type TowerTypes = Tower | SpeedTower

class Tower extends Sprite implements TowerDetails {
  static count: number = 0
  public id: number

  public size: number = 96
  public offset: Point = {
    x: (this.size - 64) / 2,
    y: (this.size - 64) / 2,
  }
  public active: Boolean = true
  public sellFor = Math.floor(this.cost * 0.7)

  public bonusDmg = 0
  public basicDmg = 0

  public bonusAs = 0
  public basicAs = 0

  public bonusRange = 0
  public basicRange = 0

  public upgrades: Upgrade = {
    dmg: [
      { price: 10, bonus: 10, bought: false, active: true },
      { price: 15, bonus: 18, bought: false, active: false },
      { price: 10, bonus: 10, bought: false, active: false },
      { price: 20, bonus: 10, bought: false, active: false },
    ],
    as: [
      { price: 10, bonus: 10, bought: false, active: true },
      { price: 15, bonus: 18, bought: false, active: false },
      { price: 10, bonus: 10, bought: false, active: false },
      { price: 20, bonus: 10, bought: false, active: false },
    ],
    range: [
      { price: 10, bonus: 30, bought: false, active: true },
      { price: 35, bonus: 68, bought: false, active: false },
      { price: 50, bonus: 80, bought: false, active: false },
      { price: 70, bonus: 120, bought: false, active: false },
    ],
  }

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public cost: number,
    public totalDmg: number,
    public totalAs: number,
    public totalRange: number,
    public position: Point,
    public src: string
  ) {
    super(canvas, c, src, position)
    this.id = ++Tower.count
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
