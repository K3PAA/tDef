class ConvertData {
  public data2D: number[][]
  public interactivePositions: object[]
  constructor(
    public dimensions: { x: number; y: number },
    public tileSize: number,
    public data: number[]
  ) {
    this.data2D = this.convertData2D(this.data)
    this.interactivePositions = this.findInteractive(this.data2D)
  }

  convertData2D(data: number[]): number[][] {
    let data2D: number[][] = []
    for (let i = 0; i < this.data.length; i += this.dimensions.x) {
      data2D.push(data.slice(i, i + this.dimensions.x))
    }

    return data2D
  }

  findInteractive(data2D: number[][]): object[] {
    const arr: object[] = []

    data2D.forEach((row, y) => {
      row.forEach((num, x) => {
        if (num !== 0) {
          arr.push({
            x: x * this.tileSize,
            y: y * this.tileSize,
          })
        }
      })
    })

    return arr
  }
}
