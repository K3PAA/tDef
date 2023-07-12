interface Position {
  x: number
  y: number
}

interface TowerDetails {
  cost: number
  dmg: number
  attackSpeed: number
  range: number
  position: Position
}

class Tower implements TowerDetails {
  constructor(
    public canvas: HTMLCanvasElement,
    public c: CanvasRenderingContext2D,
    public cost: number,
    public dmg: number,
    public attackSpeed: number,
    public range: number,
    public position: Position
  ) {}
}
