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
  bullet: string
  position: Point
  src: string
  upgrades: Upgrade
}

const towersData: TowerDetail[] = [
  {
    cost: 15,
    totalDmg: 5,
    totalAs: 12,
    totalRange: 175,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret1.png',
    bullet: '../../assets/Bullets/bullet1.png',
    upgrades: {
      dmg: [
        { price: 5, bonus: 2, bought: false, active: true },
        { price: 10, bonus: 3, bought: false, active: false },
        { price: 100, bonus: 4, bought: false, active: false },
        { price: 55, bonus: 100, bought: false, active: false },
      ],
      as: [
        { price: 40, bonus: 0.15, bought: false, active: true },
        { price: 55, bonus: 0.15, bought: false, active: false },
        { price: 45, bonus: 1, bought: false, active: false },
        { price: 125, bonus: 2, bought: false, active: false },
      ],
      range: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 30, bonus: 20, bought: false, active: false },
        { price: 30, bonus: 30, bought: false, active: false },
        { price: 60, bonus: 40, bought: false, active: false },
      ],
    },
  },
  {
    cost: 15,
    totalDmg: 15,
    totalAs: 11,
    totalRange: 160,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret2.png',
    bullet: '../../assets/Bullets/bullet2.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 3, bought: false, active: true },
        { price: 35, bonus: 5, bought: false, active: false },
        { price: 50, bonus: 1, bought: false, active: false },
        { price: 55, bonus: 6, bought: false, active: false },
      ],
      as: [
        { price: 20, bonus: 1, bought: false, active: true },
        { price: 65, bonus: 0.5, bought: false, active: false },
        { price: 60, bonus: 1.5, bought: false, active: false },
        { price: 65, bonus: 1.5, bought: false, active: false },
      ],
      range: [
        { price: 30, bonus: 10, bought: false, active: true },
        { price: 35, bonus: 10, bought: false, active: false },
        { price: 35, bonus: 10, bought: false, active: false },
        { price: 50, bonus: 60, bought: false, active: false },
      ],
    },
  },
  {
    cost: 25,
    totalDmg: 15,
    totalAs: 6,
    totalRange: 250,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret3.png',
    bullet: '../../assets/Bullets/bullet3.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 25, bought: false, active: true },
        { price: 85, bonus: 125, bought: false, active: false },
        { price: 320, bonus: 2005, bought: false, active: false },
        { price: 575, bonus: 2750, bought: false, active: false },
      ],
      as: [
        { price: 45, bonus: 0.75, bought: false, active: true },
        { price: 70, bonus: 0.75, bought: false, active: false },
        { price: 140, bonus: 1.75, bought: false, active: false },
        { price: 250, bonus: 2.75, bought: false, active: false },
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
    totalDmg: 2,
    totalAs: 18.5,
    totalRange: 150,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret4.png',
    bullet: '../../assets/Bullets/bullet4.png',
    upgrades: {
      dmg: [
        { price: 15, bonus: 3, bought: false, active: true },
        { price: 150, bonus: 45, bought: false, active: false },
        { price: 285, bonus: 200, bought: false, active: false },
        { price: 555, bonus: 265, bought: false, active: false },
      ],
      as: [
        { price: 50, bonus: 0.25, bought: false, active: true },
        { price: 125, bonus: 0.25, bought: false, active: false },
        { price: 250, bonus: 0.25, bought: false, active: false },
        { price: 350, bonus: 0.5, bought: false, active: false },
      ],
      range: [
        { price: 10, bonus: 30, bought: false, active: true },
        { price: 45, bonus: 20, bought: false, active: false },
        { price: 180, bonus: 30, bought: false, active: false },
        { price: 220, bonus: 60, bought: false, active: false },
      ],
    },
  },
  {
    cost: 35,
    totalDmg: 6,
    totalAs: 10,
    totalRange: 150,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret5.png',
    bullet: '../../assets/Bullets/bubble.png',
    upgrades: {
      dmg: [
        { price: 35, bonus: 20, bought: false, active: true },
        { price: 135, bonus: 75, bought: false, active: false },
        { price: 325, bonus: 375, bought: false, active: false },
        { price: 585, bonus: 725, bought: false, active: false },
      ],
      as: [
        { price: 35, bonus: 0.5, bought: false, active: true },
        { price: 55, bonus: 0.5, bought: false, active: false },
        { price: 100, bonus: 1.5, bought: false, active: false },
        { price: 185, bonus: 1.5, bought: false, active: false },
      ],
      range: [
        { price: 15, bonus: 30, bought: false, active: true },
        { price: 50, bonus: 40, bought: false, active: false },
        { price: 60, bonus: 40, bought: false, active: false },
        { price: 100, bonus: 60, bought: false, active: false },
      ],
    },
  },
  {
    cost: 35,
    totalDmg: 15,
    totalAs: 10,
    totalRange: 150,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret6.png',
    bullet: '../../assets/Bullets/rocket.png',
    upgrades: {
      dmg: [
        { price: 75, bonus: 125, bought: false, active: true },
        { price: 225, bonus: 225, bought: false, active: false },
        { price: 425, bonus: 650, bought: false, active: false },
        { price: 675, bonus: 1250, bought: false, active: false },
      ],
      as: [
        { price: 25, bonus: 0.25, bought: false, active: true },
        { price: 120, bonus: 0.5, bought: false, active: false },
        { price: 150, bonus: 0.5, bought: false, active: false },
        { price: 225, bonus: 0.75, bought: false, active: false },
      ],
      range: [
        { price: 15, bonus: 30, bought: false, active: true },
        { price: 40, bonus: 30, bought: false, active: false },
        { price: 80, bonus: 60, bought: false, active: false },
        { price: 160, bonus: 90, bought: false, active: false },
      ],
    },
  },
  {
    cost: 50,
    totalDmg: 80,
    totalAs: 8,
    totalRange: 190,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret7.png',
    bullet: '../../assets/Bullets/bullet5.png',
    upgrades: {
      dmg: [
        { price: 40, bonus: 305, bought: false, active: true },
        { price: 150, bonus: 905, bought: false, active: false },
        { price: 325, bonus: 1800, bought: false, active: false },
        { price: 625, bonus: 4000, bought: false, active: false },
      ],
      as: [
        { price: 60, bonus: 0.75, bought: false, active: true },
        { price: 140, bonus: 0.75, bought: false, active: false },
        { price: 220, bonus: 1.75, bought: false, active: false },
        { price: 250, bonus: 1.75, bought: false, active: false },
      ],
      range: [
        { price: 35, bonus: 10, bought: false, active: true },
        { price: 45, bonus: 25, bought: false, active: false },
        { price: 70, bonus: 35, bought: false, active: false },
        { price: 120, bonus: 60, bought: false, active: false },
      ],
    },
  },
  {
    cost: 50,
    totalDmg: 35,
    totalAs: 11,
    totalRange: 150,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret8.png',
    bullet: '../../assets/Bullets/bullet6.png',
    upgrades: {
      dmg: [
        { price: 25, bonus: 50, bought: false, active: true },
        { price: 175, bonus: 525, bought: false, active: false },
        { price: 405, bonus: 1550, bought: false, active: false },
        { price: 605, bonus: 2550, bought: false, active: false },
      ],
      as: [
        { price: 50, bonus: 1.5, bought: false, active: true },
        { price: 150, bonus: 1.5, bought: false, active: false },
        { price: 250, bonus: 1.5, bought: false, active: false },
        { price: 325, bonus: 2.5, bought: false, active: false },
      ],
      range: [
        { price: 50, bonus: 40, bought: false, active: true },
        { price: 75, bonus: 40, bought: false, active: false },
        { price: 75, bonus: 50, bought: false, active: false },
        { price: 125, bonus: 50, bought: false, active: false },
      ],
    },
  },
]
