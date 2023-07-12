class Sprite {
  image: HTMLImageElement

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,

    public imgSrc: string
  ) {
    this.image = new Image()
    this.image.src = this.imgSrc
  }

  draw(): void {
    this.c.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    )
  }
}
