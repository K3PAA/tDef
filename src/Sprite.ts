class Sprite {
  image: HTMLImageElement

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public imgSrc: string,
    public position: Point = { x: 0, y: 0 },
    public offset: Point = { x: 0, y: 0 },
    public radians: number = 0
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
      0,
      0,
      this.image.width,
      this.image.height,
      -this.image.width / 2,
      -this.image.height / 2,
      this.image.width,
      this.image.height
    )
    this.c.restore()
  }
}
