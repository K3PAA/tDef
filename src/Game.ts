class Game {
  readonly canvas: HTMLCanvasElement
  readonly c: CanvasRenderingContext2D

  towers: object[]
  enemies: object[]

  constructor() {
    this.canvas = document.querySelector('canvas')!
    this.canvas.width = 1024
    this.canvas.height = 512

    this.c = this.canvas.getContext('2d')!

    this.towers = []
    this.enemies = []

    this.canvas.addEventListener('click', this.drawBackground.bind(this))
  }

  drawBackground(): void {
    let random1: number = Math.floor(Math.random() * 255) + 1
    let random2: number = Math.floor(Math.random() * 255) + 1
    let random3: number = Math.floor(Math.random() * 255) + 1

    this.c.fillStyle = `rgb(${random1},${random2},${random3})`
    this.c.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

const game = new Game()
game.drawBackground()

console.log(game)
