class Game {
  protected readonly tileSize = 32
  readonly dimensions = { x: 24, y: 16 }
  readonly canvas: HTMLCanvasElement
  readonly c: CanvasRenderingContext2D

  // object with important data
  public gameData: Level[] = levels

  public interactive: any

  // HTML towers
  towers: NodeListOf<HTMLImageElement>

  background: Sprite
  towersArr: object[]
  enemiesArr: object[]

  constructor(public level: number = 0) {
    this.canvas = document.querySelector('canvas')!
    this.canvas.width = this.dimensions.x * this.tileSize
    this.canvas.height = this.dimensions.y * this.tileSize
    this.c = this.canvas.getContext('2d')!

    this.interactive = new ConvertData(
      this.dimensions,
      this.tileSize,
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

    this.towers.forEach((tower) => {
      tower.addEventListener('dragstart', this.startDragging.bind(this))
    })
  }

  startDragging(): void {
    console.log('pick up tower')
    this.drawInteractivePlaces()
  }

  drawInteractivePlaces(): void {
    this.interactive.interactivePositions.forEach(
      (pos: { x: number; y: number }) => {
        this.c.fillStyle = `rgba(200,200,200,0.3)`
        this.c.fillRect(pos.x, pos.y, this.tileSize * 3, this.tileSize * 3)
      }
    )

    console.log(this.interactive.interactivePositions)
  }

  endDragging(): void {
    console.log('placing tower')
  }
}

const game = new Game()
game.background.image.onload = () => {
  game.background.draw()
}
