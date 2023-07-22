class Sprite {
  image: HTMLImageElement

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public imgSrc: string,
    public position: Point = { x: 0, y: 0 },
    public offset: Point = { x: 0, y: 0 },
    public radians: number = 0,
    public stage: number = 0,
    public amount: number = 1
  ) {
    this.image = new Image()
    if (this.imgSrc) this.image.src = this.imgSrc
  }

  draw(): void {
    if (!this.c) return

    this.c.save()

    this.c.translate(
      this.position.x + this.image.width / 2 + this.offset.x,
      this.position.y + this.image.height / 2 + this.offset.y
    )

    this.c.rotate(this.radians)

    this.c.drawImage(
      this.image,
      this.stage * (this.image.width / this.amount),
      0,
      this.image.width / this.amount,
      this.image.height,
      -this.image.width / 2,
      -this.image.height / 2,
      this.image.width / (this.amount === 1 ? this.amount : 2),
      this.image.height
    )
    this.c.restore()
  }
}
