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
    totalDmg: 2,
    totalAs: 1,
    totalRange: 100,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret1.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 3, bought: false, active: true },
        { price: 15, bonus: 3, bought: false, active: false },
        { price: 10, bonus: 6, bought: false, active: false },
        { price: 20, bonus: 3, bought: false, active: false },
      ],
      as: [
        { price: 5, bonus: 1, bought: false, active: true },
        { price: 15, bonus: 2, bought: false, active: false },
        { price: 10, bonus: 1, bought: false, active: false },
        { price: 20, bonus: 3, bought: false, active: false },
      ],
      range: [
        { price: 10, bonus: 20, bought: false, active: true },
        { price: 40, bonus: 20, bought: false, active: false },
        { price: 30, bonus: 30, bought: false, active: false },
        { price: 20, bonus: 40, bought: false, active: false },
      ],
    },
  },
  {
    cost: 15,
    totalDmg: 2,
    totalAs: 1,
    totalRange: 100,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret2.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      as: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
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
    cost: 25,
    totalDmg: 2,
    totalAs: 1,
    totalRange: 100,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret3.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      as: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
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
    cost: 25,
    totalDmg: 2,
    totalAs: 1,
    totalRange: 100,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret4.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      as: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
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
    src: '../../assets/Turret/turret5.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      as: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
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
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
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
    totalDmg: 2,
    totalAs: 1,
    totalRange: 100,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret7.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      as: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
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
    totalDmg: 2,
    totalAs: 1,
    totalRange: 100,
    position: { x: 0, y: 0 },
    src: '../../assets/Turret/turret8.png',
    upgrades: {
      dmg: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      as: [
        { price: 10, bonus: 10, bought: false, active: true },
        { price: 15, bonus: 18, bought: false, active: false },
        { price: 10, bonus: 10, bought: false, active: false },
        { price: 20, bonus: 10, bought: false, active: false },
      ],
      range: [
        { price: 10, bonus: 30, bought: false, active: true },
        { price: 35, bonus: 68, bought: false, active: false },
        { price: 50, bonus: 80, bought: false, active: false },
        { price: 70, bonus: 120, bought: false, active: false },
      ],
    },
  },
]
