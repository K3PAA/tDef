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
  // HTML Show El
  generalImage: HTMLImageElement
  sellTowerBtn: Element
  towerNameHTML: HTMLElement
  turretInfo: HTMLElement
  turretsDisplay: HTMLElement
  closeTurretInfoBtn: HTMLElement

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

  // To implement, will hold tower to push if to build info
  activeTower: Tower | null = null
  // hold image data attribute that have tower name
  activeTowerName: null | string = null

  // Arrays that will contains enemies and towers when on screen
  towersArr: TowerTypes[]
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

    // HTML ELEMENTS
    this.towers = document.querySelectorAll('.turret')!
    this.generalImage = document.querySelector('.general__image')!
    this.towerNameHTML = document.querySelector('.general__name')!
    this.turretInfo = document.querySelector('.turret-open')!
    this.turretsDisplay = document.querySelector('.turrets-display')!
    this.sellTowerBtn = document.getElementById('sellBtn')!
    this.closeTurretInfoBtn = document.getElementById('close-turret')!

    // General Game HTML and Values
    this.hearthDisplay = document.getElementById('game-heart')!
    this.hearthAmount = this.gameData[this.level].health

    this.moneyDisplay = document.getElementById('game-money')!
    this.money = this.gameData[this.level].money

    this.waveCurrentDisplay = document.getElementById('game-wave-current')!
    this.waveCurrent = 0

    this.wavesAllDisplay = document.getElementById('game-wave-all')!
    this.waveAll = this.gameData[this.level].waves.length

    this.renderBasicHTML()

    this.background = new Sprite(
      this.canvas,
      this.c,
      '../assets/Levels/level1/level-1.png'
    )

    this.towersArr = []
    this.enemiesArr = []

    this.towers.forEach((tower, i) => {
      tower.addEventListener('dragstart', this.startDragging.bind(this, tower))
    })

    this.closeTurretInfoBtn.addEventListener(
      'click',
      this.closeTurretInfo.bind(this)
    )
    this.sellTowerBtn.addEventListener('click', this.sellTower.bind(this))

    this.canvas.addEventListener('click', this.checkPosition.bind(this))
    this.canvas.addEventListener('dragover', this.updateMousePos.bind(this))
    this.canvas.addEventListener('dragleave', this.dropTurret.bind(this))
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

  closeTurretInfo(): void {
    this.turretInfo.classList.remove('active')
    this.turretsDisplay.classList.add('active')
    this.towersNotInFocus()
    this.activeTower = null
  }

  showTurretInfo(): void {
    this.turretInfo.classList.add('active')
    this.turretsDisplay.classList.remove('active')
  }

  checkPosition(e: MouseEvent): void {
    const { x, y } = { x: e.offsetX, y: e.offsetY }
    let count = 0
    this.towersArr.forEach((tower: Tower) => {
      const { position, size } = tower
      if (
        this.isPointInSquare({ x, y }, { x: position.x, y: position.y, size })
      ) {
        this.activeTower = tower
        this.showActiveTowerHTML()
      } else count++
    })

    if (count === this.towersArr.length) {
      this.closeTurretInfo()
    }
  }

  isPointInSquare(a: Point, b: Square): Boolean {
    if (a.x < b.x + b.size && a.x > b.x && a.y < b.y + b.size && a.y > b.y) {
      return true
    }

    return false
  }

  towersNotInFocus(): void {
    this.towersArr.forEach((tower) => {
      if (tower.active) tower.active = false
    })
  }

  sellTower() {
    if (!this.activeTower) {
      this.createError('No tower provided')
    }
    this.interactive.interactivePositions.push({
      x: this.activeTower.position.x,
      y: this.activeTower.position.y,
      size: this.activeTower.size,
    })

    this.towersArr = this.towersArr.filter((tower: Tower) => {
      return (
        tower.position.x !== this.activeTower?.position.x &&
        tower.position.y !== this.activeTower?.position.y
      )
    })

    this.updateMoney(this.activeTower.sellFor, 'add')
    this.closeTurretInfo()
  }

  dropTurret(): void {
    if (this.canBuild && this.activeTower) {
      this.towersNotInFocus()

      this.updateMoney(this.activeTower.cost, 'substract')
      this.towersArr.push(this.activeTower)

      // if place is used then remove it from interactive positions
      this.interactive.interactivePositions =
        this.interactive.interactivePositions.filter((pos) => {
          return pos !== this.activeTower?.position
        })

      this.showActiveTowerHTML()
      this.canBuild = false
    }

    this.isDragging = false
    this.mousePosition = { x: 0, y: 0 }
    this.activeTowerName = null
  }

  startDragging(tower: HTMLImageElement): void {
    const towerName = tower.dataset.name!

    this.activeTowerName = towerName
    this.isDragging = true
  }

  updateMousePos(e: DragEvent): void {
    const { x, y } = { x: e.offsetX, y: e.offsetY }
    this.mousePosition = { x, y }
  }
  createError(errMsg: string): never {
    throw new Error(errMsg)
  }

  selectTower(pos: Point): Tower {
    switch (this.activeTowerName) {
      case 'speed':
        return new SpeedTower(
          this.canvas,
          this.c,
          15,
          20,
          50,
          100,
          pos,
          '../assets/Turret/turret1.png'
        )
        break

      case 'burn':
        return new Tower(
          this.canvas,
          this.c,
          15,
          20,
          50,
          120,
          pos,
          '../assets/Turret/turret2.png'
        )
        break

      case 'freeze':
        return new Tower(
          this.canvas,
          this.c,
          25,
          20,
          50,
          300,
          pos,
          '../assets/Turret/turret3.png'
        )
        break

      case 'laser':
        return new Tower(
          this.canvas,
          this.c,
          25,
          20,
          50,
          120,
          pos,
          '../assets/Turret/turret4.png'
        )
        break

      case 'thunder':
        return new Tower(
          this.canvas,
          this.c,
          35,
          20,
          50,
          140,
          pos,
          '../assets/Turret/turret5.png'
        )
        break

      case 'bubble':
        return new Tower(
          this.canvas,
          this.c,
          35,
          20,
          50,
          160,
          pos,
          '../assets/Turret/turret6.png'
        )
        break

      case 'rocket':
        return new Tower(
          this.canvas,
          this.c,
          50,
          20,
          50,
          180,
          pos,
          '../assets/Turret/turret7.png'
        )
        break

      case 'metal':
        return new Tower(
          this.canvas,
          this.c,
          50,
          20,
          50,
          200,
          pos,
          '../assets/Turret/turret8.png'
        )
        break
      default:
        this.createError(
          `Provided tower name: ${this.activeTowerName} does not match any tower name`
        )
        break
    }
  }

  drawIfCanBuild(): void {
    if (!this.isDragging) return
    // will count how many available slots for building
    let count = 0
    let buildingPositions = this.interactive.interactivePositions

    buildingPositions.forEach((pos) => {
      if (!this.isPointInSquare(this.mousePosition, pos)) {
        count++
        this.drawInteractivePlace(pos)
      } else {
        this.activeTower = this.selectTower(pos)
      }
    })

    // If all building spots aren't taken then enable building a tower
    if (count !== buildingPositions.length && !this.canBuild) {
      this.canBuild = true
    } else if (count === buildingPositions.length && this.canBuild) {
      if (this.activeTower) this.activeTower = null
      this.canBuild = false
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

  showActiveTowerHTML(): void {
    this.turretsDisplay.classList.remove('active')
    // To change later
    if (this.activeTower) {
      this.towersNotInFocus()
      this.activeTower.active = true
      this.generalImage.src = this.activeTower.imgSrc
      console.log(this.activeTower)
    }

    this.towerNameHTML.innerText = 'tower'
    this.sellTowerBtn.textContent = `Sell for ${this.activeTower?.sellFor}$`
    this.turretInfo.classList.add('active')
  }

  animate(): void {
    requestAnimationFrame(this.animate.bind(this))
    this.background.draw()
    this.drawIfCanBuild()
    this.drawTowers()
  }
}
