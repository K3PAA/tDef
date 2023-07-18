class Game {
  // Game tile size
  protected readonly tileSize = 32
  readonly dimensions = { x: 24, y: 16 }
  readonly canvas: HTMLCanvasElement
  readonly c: CanvasRenderingContext2D

  // object with important data
  public gameData: Level[] = levels

  // Holds data about places that allows user to build turrets on
  public interactive: DataToConvert

  // HTML towers
  towers: NodeListOf<HTMLImageElement>
  singleTowerInfo: TowerInfo
  generalInfo: GeneralInfo

  // Game Background
  background: Sprite

  // detect if player is dragging turret or not
  isDragging: Boolean = false
  // detect if player is above place that allows to build tower
  canBuild: Boolean = false
  mousePosition: Point = { x: 0, y: 0 }

  // To implement, will hold tower to push if to build info
  activeTower: Tower | null = null

  // Arrays that will contains enemies and towers when on screen
  towersData: TowerDetail[] = towersData
  enemiesData: EnemyData[] = enemiesData
  towersArr: Tower[]
  enemiesArr: object[]

  constructor(public level: number = 0) {
    this.canvas = document.querySelector('canvas')!
    this.canvas.width = this.dimensions.x * this.tileSize
    this.canvas.height = this.dimensions.y * this.tileSize
    this.c = this.canvas.getContext('2d')!

    this.interactive = new ConvertData(
      this.dimensions,
      this.tileSize,
      this.tileSize * 3,
      this.gameData[this.level].interactive
    )

    this.towersArr = []
    this.enemiesArr = []

    // HTML ELEMENTS
    this.singleTowerInfo = new TowerInfo(
      this.towersNotInFocus.bind(this),
      this.deleteTower.bind(this),
      this.upgradeTower.bind(this)
    )

    this.generalInfo = new GeneralInfo(
      this.gameData,
      this.level,
      this.startRound.bind(this)
    )
    this.towers = document.querySelectorAll('.turret')!

    this.generalInfo.renderBasicHTML()

    this.background = new Sprite(
      this.canvas,
      this.c,
      '../assets/Levels/level1/level-1.png'
    )

    this.towers.forEach((tower, i) => {
      tower.addEventListener('dragstart', this.startDragging.bind(this, tower))
    })

    this.canvas.addEventListener('click', this.whatIsClicked.bind(this))
    this.canvas.addEventListener('dragover', this.updateMousePos.bind(this))
    this.canvas.addEventListener('dragleave', this.dropTurret.bind(this))
  }

  createWave(path: Point[], enemy: any) {
    const { amount, toWait, lvl, forNext } = enemy

    setTimeout(() => {
      for (let i = 0; i < amount; i++) {
        setTimeout(() => {
          console.log('t')
          this.enemiesArr.push(this.selectEnemy(lvl, path))
        }, i * forNext * 1000)
      }
    }, toWait * 1000)
  }

  startRound(waveNum: number, allWave: number) {
    const wave = this.gameData[this.level].waves[waveNum]
    const path = this.gameData[this.level].path

    const entries = Object.entries(wave)
    entries.forEach(([order, enemy]) => {
      this.createWave(path, enemy)
    })
  }

  selectEnemy(lvl: number, path: Point[]): Enemy | never {
    switch (lvl) {
      case 0:
        return new Enemy(this.canvas, this.c, path, this.enemiesData[lvl])
        break

      default:
        throw new Error('No valid')
        break
    }
  }

  isPointInSquare(a: Point, b: Square): Boolean {
    if (a.x < b.x + b.size && a.x > b.x && a.y < b.y + b.size && a.y > b.y) {
      return true
    }
    return false
  }

  createError(errMsg: string): never {
    throw new Error(errMsg)
  }

  towersNotInFocus(): void {
    this.towersArr.forEach((tower) => {
      if (tower.active) tower.active = false
    })
  }

  closeTowerInfo() {
    this.activeTower = null
    this.singleTowerInfo.close()
  }

  startDragging(tower: HTMLImageElement): void {
    this.activeTower = this.selectTower(tower.dataset.name!)
    this.isDragging = true
  }

  updateMousePos(e: DragEvent): void {
    const { x, y } = { x: e.offsetX, y: e.offsetY }
    this.mousePosition = { x, y }
  }

  drawIfCanBuild(): void {
    if (!this.isDragging && !this.activeTower) return
    // will count how many available slots for building
    let count = 0

    for (const pos of this.interactive.interactivePositions) {
      if (!this.isPointInSquare(this.mousePosition, pos)) {
        count++
        if (this.isDragging) this.drawInteractivePlace(pos)
      } else if (this.activeTower && this.activeTower.position !== pos) {
        this.canBuild = true
        this.activeTower.position = pos
      }
    }
    // if tower is not above building place
    if (count === this.interactive.interactivePositions.length) {
      this.canBuild = false
    }
  }

  dropTurret(): void {
    if (
      this.canBuild &&
      this.activeTower &&
      this.generalInfo.money - this.activeTower.cost >= 0
    ) {
      this.generalInfo.updateMoney(this.activeTower.cost, 'substract')
      this.towersArr.push(this.activeTower)

      // if place is used then remove it from interactive positions
      this.interactive.interactivePositions =
        this.interactive.interactivePositions.filter(
          (pos) => pos !== this.activeTower?.position
        )

      this.singleTowerInfo.show(this.activeTower)
      this.canBuild = false
    } else if (
      this.activeTower &&
      this.canBuild &&
      this.generalInfo.money - this.activeTower.cost <= 0
    ) {
      this.generalInfo.toggleError(`Not enough money`, 3500)
    }
    this.isDragging = false
    this.mousePosition = { x: 0, y: 0 }
  }

  whatIsClicked(e: MouseEvent): void {
    const { x, y } = { x: e.offsetX, y: e.offsetY }
    let count = 0

    for (const tower of this.towersArr) {
      const { position: pos, size } = tower
      if (this.isPointInSquare({ x, y }, { x: pos.x, y: pos.y, size })) {
        this.activeTower = tower
        this.singleTowerInfo.show(this.activeTower)
      } else count++
    }

    if (count === this.towersArr.length) {
      this.singleTowerInfo.close()
      this.activeTower = null
    }
  }

  deleteTower(): void {
    if (!this.activeTower) this.createError('Cant delete uncreated tower')

    this.interactive.interactivePositions.push({
      x: this.activeTower.position.x,
      y: this.activeTower.position.y,
      size: this.activeTower.size,
    })

    // Refactor, previous code bugging
    this.towersArr = this.towersArr.filter((tower: Tower) => {
      return tower && this.activeTower && tower.id !== this.activeTower.id
    })

    this.generalInfo.updateMoney(this.activeTower.sellFor, 'add')
    this.singleTowerInfo.sell(this.activeTower)
    this.activeTower = null
  }

  upgradeTower(i: number, type: string) {
    if (!this.activeTower) return
    let price
    let bonus
    if (type === 'as') {
      price = this.activeTower.upgrades.as[i].price
      bonus = this.activeTower.upgrades.as[i].bonus
    } else if (type === 'dmg') {
      price = this.activeTower.upgrades.dmg[i].price
      bonus = this.activeTower.upgrades.dmg[i].bonus
    } else if (type === 'range') {
      price = this.activeTower.upgrades.range[i].price
      bonus = this.activeTower.upgrades.range[i].bonus
    }
    if (!price || !bonus) return

    if (this.generalInfo.money - price < 0) {
      this.generalInfo.toggleError(
        `need ${Math.abs(this.generalInfo.money - price)}$`,
        2500
      )
      return
    }

    this.generalInfo.updateMoney(price, 'substract')
    this.activeTower.upgrade(price, bonus, i, type)

    this.singleTowerInfo.updateBonus(this.activeTower, type)
  }

  showTurretInfo(): void {
    this.singleTowerInfo.open()
  }

  selectTower(name: string): Tower {
    // otherwise turrets with same type will inherit upgrade stats one from another
    let fakeDeepCopy = (x: TowerDetail) => {
      return { ...JSON.parse(JSON.stringify(x)) }
    }
    switch (name) {
      case 'speed':
        return new Tower(this.canvas, this.c, fakeDeepCopy(towersData[0]))
        break

      case 'burn':
        return new Tower(this.canvas, this.c, fakeDeepCopy(towersData[1]))
        break

      case 'freeze':
        return new Tower(this.canvas, this.c, fakeDeepCopy(towersData[2]))
        break

      case 'laser':
        return new Tower(this.canvas, this.c, fakeDeepCopy(towersData[3]))
        break

      case 'thunder':
        return new Tower(this.canvas, this.c, fakeDeepCopy(towersData[4]))
        break

      case 'bubble':
        return new Tower(this.canvas, this.c, fakeDeepCopy(towersData[5]))
        break

      case 'rocket':
        return new Tower(this.canvas, this.c, fakeDeepCopy(towersData[6]))
        break

      case 'metal':
        return new Tower(this.canvas, this.c, fakeDeepCopy(towersData[7]))
        break
      default:
        this.createError(`Tower ${name} does not match any tower name`)
        break
    }
  }

  drawInteractivePlace(pos: Square): void {
    this.c.fillStyle = `rgba(200,200,200,0.3)`
    this.c.fillRect(pos.x, pos.y, pos.size, pos.size)
  }

  drawTowers() {
    this.towersArr.forEach((tower) => {
      tower.drawRange()
      tower.draw()
    })
  }

  drawEnemies() {
    if (this.enemiesArr.length === 0) return

    // type Enemy powinien być ale nie chce wejść
    this.enemiesArr.forEach((enemy: any): void => {
      enemy.update()
    })
  }

  animate(): void {
    requestAnimationFrame(this.animate.bind(this))
    this.background.draw()
    this.drawIfCanBuild()
    this.drawEnemies()
    this.drawTowers()
  }
}
