type UpgradeValues = {
  price: number
  bonus: number
  bought: boolean
  active: boolean
}

type Upgrade = {
  dmg: UpgradeValues[]
  as: UpgradeValues[]
  range: UpgradeValues[]
}

type TowerDetail = {
  [propKey: number]: number
  cost: number
  totalDmg: number
  totalAs: number
  totalRange: number
  position: Point
  src: string
  upgrades: Upgrade
}

const towersData: TowerDetail[] = [
  {
    cost: 15,
    totalDmg: 5,
    totalAs: 3.5,
    totalRange: 175,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret1.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 2, bought: false, active: true },
        { price: 10, bonus: 3, bought: false, active: false },
        { price: 30, bonus: 4, bought: false, active: false },
        { price: 40, bonus: 6, bought: false, active: false },
      ],
      as: [
        { price: 15, bonus: 1, bought: false, active: true },
        { price: 15, bonus: 1, bought: false, active: false },
        { price: 55, bonus: 1, bought: false, active: false },
        { price: 155, bonus: 2, bought: false, active: false },
      ],
      range: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 20, bonus: 20, bought: false, active: false },
        { price: 20, bonus: 30, bought: false, active: false },
        { price: 20, bonus: 40, bought: false, active: false },
      ],
    },
  },
  {
    cost: 15,
    totalDmg: 10,
    totalAs: 1,
    totalRange: 160,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret2.png',
    upgrades: {
      dmg: [
        { price: 30, bonus: 3, bought: false, active: true },
        { price: 35, bonus: 2, bought: false, active: false },
        { price: 30, bonus: 1, bought: false, active: false },
        { price: 35, bonus: 6, bought: false, active: false },
      ],
      as: [
        { price: 40, bonus: 0.5, bought: false, active: true },
        { price: 45, bonus: 0.5, bought: false, active: false },
        { price: 40, bonus: 0.75, bought: false, active: false },
        { price: 45, bonus: 0.75, bought: false, active: false },
      ],
      range: [
        { price: 30, bonus: 10, bought: false, active: true },
        { price: 35, bonus: 10, bought: false, active: false },
        { price: 35, bonus: 10, bought: false, active: false },
        { price: 30, bonus: 60, bought: false, active: false },
      ],
    },
  },
  {
    cost: 25,
    totalDmg: 8,
    totalAs: 0.25,
    totalRange: 250,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret3.png',
    upgrades: {
      dmg: [
        { price: 20, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 5, bought: false, active: false },
        { price: 40, bonus: 15, bought: false, active: false },
        { price: 100, bonus: 50, bought: false, active: false },
      ],
      as: [
        { price: 25, bonus: 0.25, bought: false, active: true },
        { price: 25, bonus: 0.25, bought: false, active: false },
        { price: 50, bonus: 0.125, bought: false, active: false },
        { price: 25, bonus: 0.5, bought: false, active: false },
      ],
      range: [
        { price: 25, bonus: 50, bought: false, active: true },
        { price: 25, bonus: 50, bought: false, active: false },
        { price: 25, bonus: 50, bought: false, active: false },
        { price: 25, bonus: 50, bought: false, active: false },
      ],
    },
  },
  {
    cost: 25,
    totalDmg: 0.375,
    totalAs: 9.5,
    totalRange: 150,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret4.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 0.125, bought: false, active: true },
        { price: 25, bonus: 0.25, bought: false, active: false },
        { price: 50, bonus: 0.125, bought: false, active: false },
        { price: 125, bonus: 1.25, bought: false, active: false },
      ],
      as: [
        { price: 50, bonus: 0.1, bought: false, active: true },
        { price: 50, bonus: 0.1, bought: false, active: false },
        { price: 50, bonus: 0.1, bought: false, active: false },
        { price: 50, bonus: 0.1, bought: false, active: false },
      ],
      range: [
        { price: 10, bonus: 30, bought: false, active: true },
        { price: 35, bonus: 20, bought: false, active: false },
        { price: 50, bonus: 30, bought: false, active: false },
        { price: 70, bonus: 50, bought: false, active: false },
      ],
    },
  },
  {
    cost: 35,
    totalDmg: 2,
    totalAs: 1,
    totalRange: 150,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret5.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      as: [
        { price: 10, bonus: 0.5, bought: false, active: true },
        { price: 15, bonus: 0.5, bought: false, active: false },
        { price: 10, bonus: 0.5, bought: false, active: false },
        { price: 20, bonus: 0.5, bought: false, active: false },
      ],
      range: [
        { price: 10, bonus: 30, bought: false, active: true },
        { price: 35, bonus: 68, bought: false, active: false },
        { price: 50, bonus: 80, bought: false, active: false },
        { price: 70, bonus: 120, bought: false, active: false },
      ],
    },
  },
  {
    cost: 35,
    totalDmg: 2,
    totalAs: 1,
    totalRange: 100,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret6.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      as: [
        { price: 10, bonus: 0.5, bought: false, active: true },
        { price: 15, bonus: 0.5, bought: false, active: false },
        { price: 10, bonus: 0.5, bought: false, active: false },
        { price: 20, bonus: 0.5, bought: false, active: false },
      ],
      range: [
        { price: 10, bonus: 30, bought: false, active: true },
        { price: 35, bonus: 68, bought: false, active: false },
        { price: 50, bonus: 80, bought: false, active: false },
        { price: 70, bonus: 120, bought: false, active: false },
      ],
    },
  },
  {
    cost: 50,
    totalDmg: 15,
    totalAs: 0.25,
    totalRange: 150,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret7.png',
    upgrades: {
      dmg: [
        { price: 40, bonus: 10, bought: false, active: true },
        { price: 40, bonus: 20, bought: false, active: false },
        { price: 40, bonus: 20, bought: false, active: false },
        { price: 50, bonus: 30, bought: false, active: false },
      ],
      as: [
        { price: 50, bonus: 0.25, bought: false, active: true },
        { price: 55, bonus: 0.5, bought: false, active: false },
        { price: 50, bonus: 0.25, bought: false, active: false },
        { price: 120, bonus: 0.5, bought: false, active: false },
      ],
      range: [
        { price: 55, bonus: 10, bought: false, active: true },
        { price: 75, bonus: 25, bought: false, active: false },
        { price: 30, bonus: 10, bought: false, active: false },
        { price: 120, bonus: 60, bought: false, active: false },
      ],
    },
  },
  {
    cost: 50,
    totalDmg: 10,
    totalAs: 1,
    totalRange: 150,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret8.png',
    upgrades: {
      dmg: [
        { price: 55, bonus: 20, bought: false, active: true },
        { price: 75, bonus: 25, bought: false, active: false },
        { price: 100, bonus: 30, bought: false, active: false },
        { price: 120, bonus: 50, bought: false, active: false },
      ],
      as: [
        { price: 50, bonus: 0.25, bought: false, active: true },
        { price: 50, bonus: 0.25, bought: false, active: false },
        { price: 120, bonus: 0.25, bought: false, active: false },
        { price: 200, bonus: 2, bought: false, active: false },
      ],
      range: [
        { price: 50, bonus: 40, bought: false, active: true },
        { price: 75, bonus: 40, bought: false, active: false },
        { price: 75, bonus: 50, bought: false, active: false },
        { price: 125, bonus: 80, bought: false, active: false },
      ],
    },
  },
]
