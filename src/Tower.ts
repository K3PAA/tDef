class Tower extends Sprite {
  static count: number = 0
  public id: number

  public size: number = 96
  public offset: Point = {
    x: (this.size - 64) / 2,
    y: (this.size - 64) / 2,
  }
  public cost: number
  public active: Boolean = true
  public sellFor: number

  public radians = 0
  public dmgDealt = 0

  public totalDmg: number
  public bonusDmg = 0
  public basicDmg = 0

  public totalAs: number
  public bonusAs = 0
  public basicAs = 0

  public radius: number
  public bonusRange = 0
  public basicRange = 0

  public upgrades: Upgrade
  public target: null | Enemy = null
  public isShooting: number | undefined = undefined
  public bullets: Bullet[] = []
  public centerPosition: Point = { x: 0, y: 0 }

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public data: TowerDetail,
    public multiAttack: string,
    public checkCircleCollision: (a: Enemy, b: Bullet) => Boolean,
    public handleMultiAttack: (a: Enemy, b: Bullet, c: Tower) => void,
    public updateTotalDmg: (a: Tower) => void
  ) {
    super(canvas, c, data.src, data.position)
    this.id = ++Tower.count
    this.upgrades = data.upgrades

    this.cost = data.cost
    this.sellFor = Math.floor(this.cost * 0.7)

    this.totalDmg = data.totalDmg
    this.totalAs = data.totalAs
    this.radius = data.totalRange

    this.basicDmg = data.totalDmg
    this.basicAs = data.totalAs
    this.basicRange = data.totalRange
  }

  update() {
    if (this.target) this.shootToTarget()

    if (this.active) this.drawRange()
    if (this.bullets) this.drawBullets()
  }
  drawBullets() {
    this.bullets.forEach((bullet: Bullet) => {
      bullet.update()
    })
  }
  deleteBullet(a: Bullet) {
    this.bullets = this.bullets.filter((bullet: Bullet) => {
      return bullet.id !== a.id
    })
  }

  shootToTarget() {
    if (!this.target) return
    this.target.color = 'yellow'
    const x = this.position.x - this.target.position.x
    const y = this.position.y - this.target.position.y
    const radians = Math.atan2(y, x)
    this.radians = radians + (-180 * Math.PI) / 180

    if (!this.isShooting) {
      this.isShooting = setInterval(() => {
        if (!this.target) return

        this.centerPosition = {
          x: this.position.x + this.image.width / 2 + this.offset.x,
          y: this.position.y + this.image.height / 2 + this.offset.y,
        }

        this.bullets.push(
          new Bullet(
            this,
            this.centerPosition,
            this.target,
            this.canvas,
            this.c,
            '../assets/Bullets/texting.png',
            this.multiAttack,
            this.checkCircleCollision,
            this.deleteBullet.bind(this),
            this.handleMultiAttack,
            this.totalDmg,
            this.updateTotalDmg
          )
        )
      }, 2000 - this.totalAs * 100)
    }
  }

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
    this.radius = this.bonusRange + this.basicRange
  }

  drawRange(): void {
    if (this.active) {
      this.c.beginPath()
      this.c.arc(
        this.position.x + this.size / 2,
        this.position.y + this.size / 2,
        this.radius,
        0,
        2 * Math.PI
      )
      this.c.strokeStyle = 'blue'
      this.c.stroke()
    }
  }
}
