type EnemyData = {
  health: number
  moveSpeed: number
  reward: number
  size: number
  importance: number
  src: string
}

const enemiesData: EnemyData[] = [
  {
    health: 10,
    moveSpeed: 1,
    reward: 1,
    size: 52,
    importance: 1,
    src: '../../assets/Enemy/enemy1.png',
  },
  {
    health: 20,
    moveSpeed: 1,
    reward: 2,
    size: 52,
    importance: 1,
    src: '../../assets/Enemy/enemy2.png',
  },
  {
    health: 25,
    moveSpeed: 1,
    reward: 3,
    size: 52,
    importance: 1,
    src: '../../assets/Enemy/enemy3.png',
  },
  {
    health: 20,
    moveSpeed: 5,
    reward: 5,
    size: 52,
    importance: 1,
    src: '../../assets/Enemy/enemy4.png',
  },
  {
    health: 25,
    moveSpeed: 2,
    reward: 3,
    size: 52,
    importance: 2,
    src: '../../assets/Enemy/enemy5.png',
  },
  {
    health: 50,
    moveSpeed: 2,
    reward: 5,
    size: 52,
    importance: 2,
    src: '../../assets/Enemy/enemy6.png',
  },
  {
    health: 75,
    moveSpeed: 1,
    reward: 5,
    size: 68,
    importance: 2,
    src: '../../assets/Enemy/enemy7.png',
  },
  {
    health: 100,
    moveSpeed: 1.25,
    reward: 8,
    size: 68,
    importance: 3,
    src: '../../assets/Enemy/enemy8.png',
  },
  {
    health: 250,
    moveSpeed: 1,
    reward: 10,
    size: 68,
    importance: 3,
    src: '../../assets/Enemy/enemy9.png',
  },
]
