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
  // HTML Show El
  errorDisplay: HTMLElement

  hearthDisplay: HTMLElement
  moneyDisplay: HTMLElement
  waveCurrentDisplay: HTMLElement
  wavesAllDisplay: HTMLElement

  // Game Data
  hearthAmount: number
  money: number
  waveCurrent: number
  waveAll: number

  // Game Background
  background: Sprite

  // detect if player is dragging turret or not
  isDragging: Boolean = false
  // detect if player is above place that allows to build tower
  canBuild: Boolean = false
  mousePosition: Point = { x: 0, y: 0 }
  errorInterval: number | undefined = undefined

  // To implement, will hold tower to push if to build info
  activeTower: Tower | null = null

  // Arrays that will contains enemies and towers when on screen
  towersData: TowerDetail[] = towersData

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

    this.towers = document.querySelectorAll('.turret')!

    // General Game HTML and Values
    this.hearthDisplay = document.getElementById('game-heart')!
    this.hearthAmount = this.gameData[this.level].health

    this.moneyDisplay = document.getElementById('game-money')!
    this.money = this.gameData[this.level].money

    this.waveCurrentDisplay = document.getElementById('game-wave-current')!
    this.waveCurrent = 0

    this.wavesAllDisplay = document.getElementById('game-wave-all')!
    this.waveAll = this.gameData[this.level].waves.length

    this.errorDisplay = document.querySelector('.error-info')!
    this.renderBasicHTML()

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

  isPointInSquare(a: Point, b: Square): Boolean {
    if (a.x < b.x + b.size && a.x > b.x && a.y < b.y + b.size && a.y > b.y) {
      return true
    }
    return false
  }

  toggleError(text: string, duration: number) {
    let time = duration / 6
    let count = 0
    this.errorDisplay.innerText = text

    if (!this.errorInterval) {
      this.errorInterval = setInterval(() => {
        this.errorDisplay.classList.toggle('active')
        count++
        if (count * time === duration) {
          if (this.errorDisplay.className.includes('active')) {
            this.errorDisplay.classList.remove('active')
          }
          clearInterval(this.errorInterval)
          this.errorInterval = undefined
        }
      }, time)
    }
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
      this.money - this.activeTower.cost >= 0
    ) {
      this.updateMoney(this.activeTower.cost, 'substract')
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
      this.money - this.activeTower.cost <= 0
    ) {
      this.toggleError(`Not enough money`, 3500)
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

    this.updateMoney(this.activeTower.sellFor, 'add')
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

    if (this.money - price < 0) {
      this.toggleError(`need ${Math.abs(this.money - price)}$`, 2500)
      return
    }

    this.updateMoney(price, 'substract')
    this.activeTower.upgrade(price, bonus, i, type)

    this.singleTowerInfo.updateBonus(this.activeTower, type)
  }

  renderBasicHTML() {
    this.updateHealth()
    this.updateMoney(0, 'add')
    this.updateWave()
    this.updateWaveAmount()
  }

  updateHealth(val: number = 0) {
    this.hearthAmount -= val
    this.hearthDisplay.textContent = `${this.hearthAmount}`
  }

  updateMoney(val: number = 0, type: 'add' | 'substract') {
    if (type === 'add') this.money += val
    if (type === 'substract') this.money -= val
    this.moneyDisplay.textContent = `${this.money}`
  }

  updateWave(val: number = 0) {
    this.waveCurrent += val
    this.waveCurrentDisplay.textContent = `${this.waveCurrent}`
  }

  updateWaveAmount(val: number = 0) {
    if (val) this.waveAll = val
    this.wavesAllDisplay.textContent = `${this.waveAll}`
  }

  showTurretInfo(): void {
    this.singleTowerInfo.open()
  }

  selectTower(name: string): Tower {
    switch (name) {
      case 'speed':
        return new Tower({ canvas: this.canvas, c: this.c, ...towersData[0] })
        break

      // case 'burn':
      //   return new Tower(
      //     this.canvas,
      //     this.c,
      //     15,
      //     20,
      //     50,
      //     120,
      //     { x: 0, y: 0 },
      //     '../assets/Turret/turret2.png'
      //   )
      //   break

      // case 'freeze':
      //   return new Tower(
      //     this.canvas,
      //     this.c,
      //     25,
      //     20,
      //     50,
      //     300,
      //     { x: 0, y: 0 },
      //     '../assets/Turret/turret3.png'
      //   )
      //   break

      // case 'laser':
      //   return new Tower(
      //     this.canvas,
      //     this.c,
      //     25,
      //     20,
      //     50,
      //     120,
      //     { x: 0, y: 0 },
      //     '../assets/Turret/turret4.png'
      //   )
      //   break

      // case 'thunder':
      //   return new Tower(
      //     this.canvas,
      //     this.c,
      //     35,
      //     20,
      //     50,
      //     140,
      //     { x: 0, y: 0 },
      //     '../assets/Turret/turret5.png'
      //   )
      //   break

      // case 'bubble':
      //   return new Tower(
      //     this.canvas,
      //     this.c,
      //     35,
      //     20,
      //     50,
      //     160,
      //     { x: 0, y: 0 },
      //     '../assets/Turret/turret6.png'
      //   )
      //   break

      // case 'rocket':
      //   return new Tower(
      //     this.canvas,
      //     this.c,
      //     50,
      //     20,
      //     50,
      //     180,
      //     { x: 0, y: 0 },
      //     '../assets/Turret/turret7.png'
      //   )
      //   break

      // case 'metal':
      //   return new Tower(
      //     this.canvas,
      //     this.c,
      //     50,
      //     20,
      //     50,
      //     200,
      //     { x: 0, y: 0 },
      //     '../assets/Turret/turret8.png'
      //   )
      //   break
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

  animate(): void {
    requestAnimationFrame(this.animate.bind(this))
    this.background.draw()
    this.drawIfCanBuild()
    this.drawTowers()
  }
}
