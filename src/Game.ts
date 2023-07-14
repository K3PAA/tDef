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

    this.towers = document.querySelectorAll('.turret')!
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

    // add debounce to this function
    this.canvas.addEventListener('dragover', this.updateMousePos.bind(this))
    this.canvas.addEventListener('dragleave', this.dropTurret.bind(this))
  }

  isPointInSquare(a: Point, b: Square): Boolean {
    if (a.x < b.x + b.size && a.x > b.x && a.y < b.y + b.size && a.y > b.y) {
      return true
    }

    return false
  }

  startDragging(tower: HTMLImageElement): void {
    const towerName = tower.dataset.name!

    this.activeTowerName = towerName
    this.isDragging = true
  }

  dropTurret(): void {
    if (this.canBuild && this.activeTower) {
      this.towersArr.push(this.activeTower)

      // if place is used then remove it from interactive positions
      this.interactive.interactivePositions =
        this.interactive.interactivePositions.filter((pos) => {
          return pos !== this.activeTower?.position
        })

      this.canBuild = false
      this.activeTower = null

      console.log(this.towersArr)
    }

    this.isDragging = false
    this.mousePosition = { x: 0, y: 0 }
    this.activeTowerName = null
  }

  updateMousePos(e: DragEvent): void {
    const { x, y } = { x: e.offsetX, y: e.offsetY }
    this.mousePosition = { x, y }
  }
  createError(errMsg: string): never {
    throw new Error(errMsg)
  }

  selectTower(pos: Square): Tower {
    switch (this.activeTowerName) {
      case 'speed':
        return new SpeedTower(this.canvas, this.c, 100, 20, 50, 100, pos)
        break

      case 'burn':
        return new Tower(this.canvas, this.c, 100, 20, 50, 120, pos)
        break

      case 'freeze':
        return new Tower(this.canvas, this.c, 100, 20, 50, 300, pos)
        break

      case 'laser':
        return new Tower(this.canvas, this.c, 100, 20, 50, 120, pos)
        break

      case 'thunder':
        return new Tower(this.canvas, this.c, 100, 20, 50, 140, pos)
        break

      case 'bubble':
        return new Tower(this.canvas, this.c, 100, 20, 50, 160, pos)
        break

      case 'rocket':
        return new Tower(this.canvas, this.c, 100, 20, 50, 180, pos)
        break

      case 'metal':
        return new Tower(this.canvas, this.c, 100, 20, 50, 200, pos)
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
      } else if (!this.activeTower) {
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

const game = new Game()
game.background.image.onload = () => {
  game.animate()
}
