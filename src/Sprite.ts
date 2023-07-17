class Sprite {
  image: HTMLImageElement

  constructor(
    public canvas: HTMLCanvasElement | undefined,
    public c: CanvasRenderingContext2D | undefined,
    public imgSrc: string | undefined,
    public position: Point = { x: 0, y: 0 },
    public offset: Point = { x: 0, y: 0 }
  ) {
    this.image = new Image()
    if (this.imgSrc) this.image.src = this.imgSrc
  }

  draw(): void {
    if (!this.c) return
    this.c.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.position.x + this.offset.x,
      this.position.y + this.offset.y,
      this.image.width,
      this.image.height
    )
  }
}
