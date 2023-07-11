interface TowerDetails {
  cost: number
}

class Tower implements TowerDetails {
  constructor(public cost: number) {
    this.cost = cost
  }
}
