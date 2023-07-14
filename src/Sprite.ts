class Sprite {
  image: HTMLImageElement

  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public imgSrc: string,
    public position: Point = { x: 0, y: 0 },
    public offset: Point = { x: 0, y: 0 }
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
      this.position.x + this.offset.x,
      this.position.y + this.offset.y,
      this.image.width,
      this.image.height
    )
  }
}
