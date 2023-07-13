type Square = {
  x: number
  y: number
  size: number
}

type Point = {
  x: number
  y: number
}

interface DataToConvert {
  data2D: number[][]
  interactivePositions: Square[]
  size: number
  dimensions: Point
  tileSize: number
  data: number[]
}

class ConvertData implements DataToConvert {
  public data2D: number[][]
  public interactivePositions: Square[]
  constructor(
    public dimensions: Point,
    public tileSize: number,
    public size: number = tileSize,
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

  findInteractive(data2D: number[][]): Square[] {
    const arr: Square[] = []

    data2D.forEach((row, y) => {
      row.forEach((num, x) => {
        if (num !== 0) {
          arr.push({
            x: x * this.tileSize,
            y: y * this.tileSize,
            size: this.size,
          })
        }
      })
    })

    return arr
  }
}
