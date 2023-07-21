type Point = {
  x: number
  y: number
}

interface Level {
  health: number
  money: number
  background: string
  waves: object[]
  interactive: number[]
  path: Point[]
}

const levels: Level[] = [
  {
    health: 15,
    money: 30,
    background: '../assets/Levels/level1/level-1.png',
    waves: [
      {
        enemies: [
          { lvl: 0, amount: 7, next: 1, start: 0, wave: 0 },
          { lvl: 1, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 1, amount: 5, next: 1, start: 0, wave: 1 },
          { lvl: 0, amount: 3, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 0, amount: 5, next: 1, start: 0.25, wave: 2 },
          { lvl: 1, amount: 3, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 1, amount: 1, next: 0, start: 0, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 2, amount: 5, next: 1, start: 0.25, wave: 0 },
          { lvl: 1, amount: 5, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 1, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 2, amount: 2, next: 1, start: 1.5, wave: 1 },

          { lvl: 3, amount: 2, next: 0.25, start: 0, wave: 2 },
          { lvl: 1, amount: 3, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 4, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 2, amount: 5, next: 1, start: 0, wave: 0 },
          { lvl: 3, amount: 5, next: 1, start: 1.5, wave: 0 },

          { lvl: 2, amount: 5, next: 1, start: 0, wave: 1 },
          { lvl: 3, amount: 3, next: 0.25, start: 1.5, wave: 1 },

          { lvl: 2, amount: 2, next: 1, start: 0, wave: 2 },
          { lvl: 4, amount: 2, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 3, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 2, amount: 5, next: 1, start: 0, wave: 0 },
          { lvl: 3, amount: 5, next: 1, start: 1.5, wave: 0 },

          { lvl: 2, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 3, amount: 5, next: 0.25, start: 1.5, wave: 1 },

          { lvl: 2, amount: 2, next: 1, start: 0, wave: 2 },
          { lvl: 3, amount: 2, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 4, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 3, amount: 3, next: 1, start: 0, wave: 0 },
          { lvl: 4, amount: 2, next: 1, start: 1.5, wave: 0 },

          { lvl: 3, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 2, amount: 7, next: 1, start: 1.5, wave: 1 },

          { lvl: 4, amount: 3, next: 1, start: 0, wave: 2 },
          { lvl: 3, amount: 5, next: 0.5, start: 1.5, wave: 2 },
          { lvl: 5, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 3, amount: 3, next: 1, start: 0, wave: 0 },
          { lvl: 4, amount: 2, next: 1, start: 1.5, wave: 0 },

          { lvl: 3, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 4, amount: 7, next: 1, start: 1.5, wave: 1 },

          { lvl: 4, amount: 3, next: 1, start: 0, wave: 2 },
          { lvl: 3, amount: 5, next: 0.75, start: 1.5, wave: 2 },
          { lvl: 5, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 3, amount: 3, next: 1, start: 0, wave: 0 },
          { lvl: 4, amount: 3, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 4, amount: 3, next: 1.25, start: 0, wave: 1 },
          { lvl: 5, amount: 4, next: 1, start: 1.5, wave: 1 },

          { lvl: 4, amount: 2, next: 1.25, start: 0, wave: 2 },
          { lvl: 6, amount: 3, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 5, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 6, amount: 1, next: 1, start: 0, wave: 0 },
          { lvl: 6, amount: 2, next: 1, start: 1.5, wave: 0 },

          { lvl: 4, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 3, amount: 7, next: 0.5, start: 1.5, wave: 1 },

          { lvl: 4, amount: 5, next: 1, start: 0, wave: 2 },
          { lvl: 6, amount: 3, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 5, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 5, amount: 4, next: 1, start: 0, wave: 0 },
          { lvl: 4, amount: 4, next: 1, start: 1.5, wave: 0 },

          { lvl: 4, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 5, amount: 5, next: 1, start: 1.5, wave: 1 },
          { lvl: 3, amount: 10, next: 0.5, start: 0, wave: 1 },
          { lvl: 2, amount: 15, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 8, amount: 3, next: 1, start: 0, wave: 2 },
          { lvl: 6, amount: 6, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 7, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 3, amount: 10, next: 0.5, start: 0, wave: 0 },
          { lvl: 6, amount: 10, next: 1, start: 1.5, wave: 0 },

          { lvl: 5, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 6, amount: 7, next: 1, start: 1.5, wave: 1 },
          { lvl: 7, amount: 3, next: 1.25, start: 0, wave: 1 },
          { lvl: 4, amount: 10, next: 1, start: 1.5, wave: 1 },

          { lvl: 7, amount: 6, next: 1, start: 0, wave: 2 },
          { lvl: 8, amount: 8, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 8, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
    ],
    interactive: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    path: [
      {
        x: -200,
        y: 142,
      },
      {
        x: 234,
        y: 142,
      },
      {
        x: 354,
        y: 320,
      },
      {
        x: 588,
        y: 320,
      },
      {
        x: 766,
        y: 112,
      },
      {
        x: 866,
        y: 112,
      },
    ],
  },
]
