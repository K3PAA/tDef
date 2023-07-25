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
    background: '../assets/Levels/level1/level1.png',
    waves: [
      {
        enemies: [
          { lvl: 0, amount: 8, next: 1, start: 0, wave: 0 },
          { lvl: 1, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 1, amount: 4, next: 1, start: 0, wave: 1 },
          { lvl: 0, amount: 4, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 0, amount: 5, next: 1, start: 0.25, wave: 2 },
          { lvl: 1, amount: 2, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 1, amount: 1, next: 0, start: 0, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 3, amount: 1, next: 1, start: 0, wave: 0 },
          { lvl: 2, amount: 5, next: 1, start: 0.25, wave: 0 },
          { lvl: 1, amount: 9, next: 0.25, start: 1.5, wave: 0 },

          { lvl: 1, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 2, amount: 2, next: 1, start: 1.5, wave: 1 },
          { lvl: 1, amount: 3, next: 0.25, start: 0, wave: 1 },
          { lvl: 2, amount: 2, next: 0.25, start: 1.25, wave: 1 },

          { lvl: 3, amount: 1, next: 0.25, start: 0, wave: 2 },
          { lvl: 1, amount: 3, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 4, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 2, amount: 5, next: 1, start: 0, wave: 0 },
          { lvl: 3, amount: 5, next: 1, start: 1.5, wave: 0 },

          { lvl: 2, amount: 5, next: 1, start: 0, wave: 1 },
          { lvl: 2, amount: 5, next: 0.25, start: 0, wave: 1 },
          { lvl: 3, amount: 3, next: 0.25, start: 1.5, wave: 1 },

          { lvl: 2, amount: 5, next: 1, start: 0, wave: 2 },
          { lvl: 3, amount: 3, next: 0.25, start: 1.5, wave: 2 },

          { lvl: 2, amount: 2, next: 1, start: 0, wave: 3 },
          { lvl: 4, amount: 2, next: 1.5, start: 1.5, wave: 3 },
          { lvl: 3, amount: 1, next: 4, start: 1.75, wave: 3, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 2, amount: 5, next: 1, start: 0, wave: 0 },
          { lvl: 3, amount: 5, next: 1, start: 1.5, wave: 0 },

          { lvl: 2, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 2, amount: 3, next: 0.25, start: 0, wave: 1 },
          { lvl: 3, amount: 5, next: 0.25, start: 1.5, wave: 1 },

          { lvl: 3, amount: 3, next: 1.15, start: 0, wave: 2 },
          { lvl: 2, amount: 3, next: 1, start: 0, wave: 2 },
          { lvl: 3, amount: 5, next: 0.25, start: 1.5, wave: 2 },
          { lvl: 4, amount: 5, next: 0.5, start: 1.5, wave: 2 },

          { lvl: 2, amount: 2, next: 1, start: 0, wave: 3 },
          { lvl: 3, amount: 2, next: 1.5, start: 1.5, wave: 3 },
          { lvl: 4, amount: 1, next: 4, start: 1.75, wave: 3, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 6, amount: 4, next: 1, start: 0, wave: 0 },
          { lvl: 5, amount: 1, next: 1, start: 1.5, wave: 0 },

          { lvl: 6, amount: 4, next: 1, start: 0, wave: 1 },
          { lvl: 6, amount: 7, next: 1, start: 1.5, wave: 1 },

          { lvl: 3, amount: 5, next: 1, start: 0, wave: 2 },
          { lvl: 4, amount: 7, next: 1, start: 1.5, wave: 2 },

          { lvl: 7, amount: 2, next: 1, start: 0, wave: 3 },
          { lvl: 6, amount: 5, next: 0.5, start: 1.5, wave: 3 },
          { lvl: 7, amount: 1, next: 4, start: 1.75, wave: 3, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 6, amount: 3, next: 1, start: 0.25, wave: 0 },
          { lvl: 4, amount: 2, next: 1, start: 1.5, wave: 0 },
          { lvl: 5, amount: 3, next: 1, start: 0, wave: 0 },
          { lvl: 6, amount: 5, next: 0.25, start: 1.75, wave: 0 },

          { lvl: 7, amount: 4, next: 1, start: 0, wave: 1 },
          { lvl: 6, amount: 7, next: 1, start: 1.5, wave: 1 },

          { lvl: 6, amount: 3, next: 1, start: 0, wave: 2 },
          { lvl: 6, amount: 5, next: 0.75, start: 1.5, wave: 2 },
          { lvl: 5, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 6, amount: 3, next: 1, start: 0, wave: 0 },
          { lvl: 7, amount: 3, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 7, amount: 3, next: 1.25, start: 0, wave: 1 },
          { lvl: 6, amount: 4, next: 1, start: 1.5, wave: 1 },
          { lvl: 9, amount: 3, next: 1.25, start: 0, wave: 1 },

          { lvl: 8, amount: 4, next: 1, start: 1.5, wave: 2 },
          { lvl: 6, amount: 3, next: 0.5, start: 0, wave: 2 },
          { lvl: 7, amount: 4, next: 1.2, start: 1.25, wave: 2 },

          { lvl: 6, amount: 2, next: 1.25, start: 0, wave: 3 },
          { lvl: 6, amount: 3, next: 1.5, start: 1.5, wave: 3 },
          { lvl: 9, amount: 1, next: 4, start: 1.75, wave: 3, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 8, amount: 1, next: 1, start: 0, wave: 0 },
          { lvl: 6, amount: 2, next: 1, start: 1.5, wave: 0 },

          { lvl: 6, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 7, amount: 7, next: 0.5, start: 1.5, wave: 1 },

          { lvl: 4, amount: 10, next: 0.2, start: 0, wave: 2 },
          { lvl: 9, amount: 7, next: 0.5, start: 1.5, wave: 2 },

          { lvl: 6, amount: 5, next: 1, start: 0, wave: 3 },
          { lvl: 6, amount: 3, next: 1.5, start: 1.5, wave: 3 },
          { lvl: 5, amount: 1, next: 4, start: 1.75, wave: 3, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 8, amount: 4, next: 1, start: 0, wave: 0 },
          { lvl: 9, amount: 4, next: 1, start: 1.5, wave: 0 },

          { lvl: 7, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 5, amount: 5, next: 1, start: 1.5, wave: 1 },
          { lvl: 6, amount: 10, next: 0.5, start: 0, wave: 1 },
          { lvl: 9, amount: 8, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 9, amount: 3, next: 1, start: 0, wave: 2 },
          { lvl: 6, amount: 6, next: 1.5, start: 1.5, wave: 2 },
          { lvl: 7, amount: 1, next: 4, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 9, amount: 10, next: 0.5, start: 0, wave: 0 },
          { lvl: 6, amount: 10, next: 1, start: 1.5, wave: 0 },

          { lvl: 9, amount: 12, next: 0.5, start: 0, wave: 1 },
          { lvl: 6, amount: 7, next: 1, start: 1.5, wave: 1 },
          { lvl: 11, amount: 3, next: 1.25, start: 0, wave: 1 },
          { lvl: 4, amount: 10, next: 1, start: 1.5, wave: 1 },

          { lvl: 11, amount: 2, next: 0.5, start: 0, wave: 2 },
          { lvl: 6, amount: 7, next: 1, start: 1.5, wave: 2 },
          { lvl: 7, amount: 3, next: 1.25, start: 0, wave: 2 },
          { lvl: 8, amount: 10, next: 1, start: 1.5, wave: 2 },

          { lvl: 10, amount: 7, next: 0.75, start: 0, wave: 3 },
          { lvl: 8, amount: 7, next: 1, start: 1.5, wave: 3 },
          { lvl: 11, amount: 2, next: 1.25, start: 0, wave: 3 },
          { lvl: 8, amount: 10, next: 1, start: 1.5, wave: 3 },

          { lvl: 10, amount: 4, next: 1, start: 0, wave: 4 },
          { lvl: 9, amount: 8, next: 1.5, start: 1.5, wave: 4 },
          { lvl: 30, amount: 1, next: 4, start: 3, wave: 4, last: true },
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
  {
    health: 25,
    money: 50,
    background: '../assets/Levels/level2/level2.png',
    waves: [
      {
        enemies: [
          { lvl: 3, amount: 2, next: 1, start: 1.25, wave: 0 },
          { lvl: 2, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 3, amount: 9, next: 0.25, start: 0, wave: 0 },
          { lvl: 4, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 3, amount: 2, next: 1, start: 0.5, wave: 1 },
          { lvl: 2, amount: 2, next: 1, start: 0, wave: 1 },
          { lvl: 3, amount: 9, next: 0.45, start: 0, wave: 1 },
          { lvl: 4, amount: 5, next: 0.25, start: 0.1, wave: 1 },
          { lvl: 4, amount: 1, next: 1, start: 1.25, wave: 1 },
          { lvl: 3, amount: 2, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 4, amount: 2, next: 1, start: 0, wave: 2 },
          { lvl: 3, amount: 2, next: 1, start: 0, wave: 2 },
          { lvl: 4, amount: 2, next: 1, start: 0, wave: 2 },
          { lvl: 3, amount: 2, next: 1.25, start: 1.5, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 6, amount: 2, next: 1, start: 1.25, wave: 0 },
          { lvl: 4, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 5, amount: 5, next: 0.25, start: 0, wave: 0 },
          { lvl: 4, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 6, amount: 2, next: 1, start: 1, wave: 1 },
          { lvl: 5, amount: 2, next: 1, start: 0.75, wave: 1 },
          { lvl: 4, amount: 5, next: 0.25, start: 0.1, wave: 1 },
          { lvl: 4, amount: 1, next: 1, start: 0.5, wave: 1 },
          { lvl: 5, amount: 2, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 4, amount: 2, next: 1, start: 1, wave: 2 },
          { lvl: 5, amount: 2, next: 1, start: 1.25, wave: 2 },
          { lvl: 4, amount: 2, next: 1, start: 0.75, wave: 2 },
          { lvl: 5, amount: 2, next: 1.25, start: 1.5, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 0 },
          { lvl: 5, amount: 2, next: 1, start: 1.25, wave: 0 },
          { lvl: 6, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 5, amount: 5, next: 1, start: 0, wave: 0 },
          { lvl: 6, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 7, amount: 3, next: 1, start: 0, wave: 1 },
          { lvl: 6, amount: 2, next: 1, start: 0, wave: 1 },
          { lvl: 5, amount: 1, next: 1, start: 0, wave: 1 },

          { lvl: 6, amount: 2, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 5, amount: 4, next: 1, start: 0, wave: 2 },
          { lvl: 7, amount: 2, next: 1, start: 0.25, wave: 2 },
          { lvl: 6, amount: 1, next: 1, start: 0, wave: 2 },
          { lvl: 6, amount: 2, next: 1.25, start: 1.5, wave: 2 },

          { lvl: 6, amount: 2, next: 1, start: 0, wave: 3 },
          { lvl: 5, amount: 2, next: 1, start: 0.25, wave: 3 },
          { lvl: 6, amount: 2, next: 1, start: 1.2, wave: 3 },
          { lvl: 7, amount: 2, next: 1.25, start: 1.5, wave: 3, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 7, amount: 2, next: 1, start: 1.25, wave: 0 },
          { lvl: 4, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 6, amount: 5, next: 0.25, start: 0, wave: 0 },
          { lvl: 5, amount: 5, next: 0.25, start: 0.1, wave: 0 },
          { lvl: 7, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 6, amount: 2, next: 1, start: 0, wave: 1 },
          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 1 },
          { lvl: 5, amount: 2, next: 1, start: 0, wave: 1 },
          { lvl: 6, amount: 1, next: 1, start: 0, wave: 1 },
          { lvl: 7, amount: 5, next: 0.25, start: 0.1, wave: 1 },
          { lvl: 5, amount: 2, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 8, amount: 2, next: 1, start: 0, wave: 2 },
          { lvl: 5, amount: 2, next: 1.5, start: 0.25, wave: 2 },
          { lvl: 6, amount: 2, next: 1.75, start: 1, wave: 2 },
          { lvl: 7, amount: 2, next: 1.25, start: 1.5, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 9, amount: 2, next: 1, start: 1.25, wave: 0 },
          { lvl: 8, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 0 },
          { lvl: 7, amount: 6, next: 0.25, start: 0, wave: 0 },
          { lvl: 6, amount: 3, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 8, amount: 2, next: 1, start: 0, wave: 1 },
          { lvl: 7, amount: 8, next: 0.75, start: 0, wave: 1 },
          { lvl: 5, amount: 1, next: 1, start: 0.25, wave: 1 },
          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 1 },
          { lvl: 6, amount: 8, next: 0.5, start: 1.5, wave: 1 },

          { lvl: 7, amount: 2, next: 1, start: 0, wave: 2 },
          { lvl: 8, amount: 2, next: 1, start: 1.25, wave: 2 },
          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 2 },
          { lvl: 7, amount: 2, next: 1, start: 2.5, wave: 2 },
          { lvl: 9, amount: 2, next: 1.25, start: 1.5, wave: 2, last: true },
        ],
      },
      // half
      {
        enemies: [
          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 0 },
          { lvl: 8, amount: 2, next: 1, start: 1.25, wave: 0 },
          { lvl: 7, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 6, amount: 5, next: 0.25, start: 0, wave: 0 },
          { lvl: 11, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 6, amount: 2, next: 1, start: 1.25, wave: 1 },
          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 1 },
          { lvl: 7, amount: 4, next: 1, start: 0.75, wave: 1 },
          { lvl: 9, amount: 3, next: 1, start: 0.5, wave: 1 },
          { lvl: 8, amount: 2, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 10, amount: 2, next: 1, start: 0.25, wave: 2 },
          { lvl: 9, amount: 2, next: 1, start: 0.5, wave: 2 },
          { lvl: 8, amount: 2, next: 1, start: 0.75, wave: 2 },
          { lvl: 10, amount: 2, next: 1.25, start: 1.5, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 0 },
          { lvl: 11, amount: 2, next: 1, start: 1.25, wave: 0 },
          { lvl: 9, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 11, amount: 3, next: 0.25, start: 0, wave: 0 },
          { lvl: 10, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 3, amount: 20, next: 0.1, start: 0, wave: 1 },
          { lvl: 11, amount: 2, next: 1, start: 0, wave: 1 },
          { lvl: 12, amount: 1, next: 1, start: 0.5, wave: 1 },
          { lvl: 10, amount: 5, next: 1, start: 0.2, wave: 1 },
          { lvl: 11, amount: 5, next: 1.25, start: 1.5, wave: 1 },
          { lvl: 10, amount: 5, next: 0.5, start: 0.1, wave: 1 },
          { lvl: 13, amount: 5, next: 1, start: 0.6, wave: 1 },

          { lvl: 12, amount: 2, next: 1, start: 0, wave: 2 },
          { lvl: 13, amount: 2, next: 1, start: 0.5, wave: 2 },
          { lvl: 11, amount: 20, next: 0.3, start: 0.2, wave: 2 },
          { lvl: 10, amount: 2, next: 1.25, start: 1.5, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 13, amount: 8, next: 1, start: 1.25, wave: 0 },
          { lvl: 12, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 11, amount: 4, next: 1.25, start: 0, wave: 0 },
          { lvl: 14, amount: 5, next: 0.5, start: 1.5, wave: 0 },

          { lvl: 11, amount: 3, next: 1.25, start: 0, wave: 1 },
          { lvl: 12, amount: 3, next: 0.5, start: 1, wave: 1 },
          { lvl: 12, amount: 5, next: 1, start: 0.25, wave: 1 },
          { lvl: 13, amount: 4, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 13, amount: 5, next: 0.25, start: 0, wave: 2 },
          { lvl: 14, amount: 5, next: 1, start: 1, wave: 2 },
          { lvl: 16, amount: 2, next: 1, start: 0.25, wave: 2 },
          { lvl: 15, amount: 2, next: 1.25, start: 1.5, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 13, amount: 7, next: 0.6, start: 1.25, wave: 0 },
          { lvl: 12, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 14, amount: 5, next: 0.25, start: 0, wave: 0 },
          { lvl: 13, amount: 1, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 13, amount: 5, next: 0.75, start: 0.25, wave: 1 },
          { lvl: 14, amount: 4, next: 1, start: 1, wave: 1 },
          { lvl: 15, amount: 2, next: 0.75, start: 0.5, wave: 1 },
          { lvl: 16, amount: 2, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 14, amount: 10, next: 0.6, start: 0.75, wave: 2 },
          { lvl: 13, amount: 4, next: 1, start: 0.25, wave: 2 },
          { lvl: 15, amount: 2, next: 0.6, start: 1, wave: 2 },
          { lvl: 17, amount: 3, next: 1.25, start: 1.5, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 15, amount: 3, next: 1, start: 1.25, wave: 0 },
          { lvl: 16, amount: 4, next: 1.2, start: 1, wave: 0 },
          { lvl: 13, amount: 3, next: 0.25, start: 0, wave: 0 },
          { lvl: 12, amount: 8, next: 0.55, start: 1.5, wave: 0 },

          { lvl: 12, amount: 5, next: 1, start: 0, wave: 1 },
          { lvl: 14, amount: 4, next: 0.5, start: 0.25, wave: 1 },
          { lvl: 12, amount: 5, next: 0.75, start: 0.75, wave: 1 },
          { lvl: 13, amount: 6, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 16, amount: 2, next: 0.75, start: 1, wave: 2 },
          { lvl: 20, amount: 6, next: 1, start: 0.25, wave: 2 },
          { lvl: 19, amount: 5, next: 2, start: 0, wave: 2 },
          { lvl: 19, amount: 3, next: 2.25, start: 1.75, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 17, amount: 2, next: 1, start: 1.25, wave: 0 },
          { lvl: 18, amount: 4, next: 1.5, start: 1, wave: 0 },
          { lvl: 12, amount: 10, next: 0.25, start: 0, wave: 0 },
          { lvl: 22, amount: 1, next: 1.25, start: 1.5, wave: 0 },
          { lvl: 18, amount: 4, next: 1.75, start: 1.1, wave: 0 },
          { lvl: 12, amount: 10, next: 0.5, start: 1.2, wave: 0 },
          { lvl: 15, amount: 1, next: 1.5, start: 0.2, wave: 0 },

          { lvl: 18, amount: 2, next: 1, start: 0.25, wave: 1 },
          { lvl: 14, amount: 2, next: 1, start: 0.5, wave: 1 },
          { lvl: 15, amount: 1, next: 1, start: 0.6, wave: 1 },
          { lvl: 19, amount: 2, next: 1.25, start: 1.5, wave: 1 },

          { lvl: 16, amount: 5, next: 1, start: 0.25, wave: 2 },
          { lvl: 21, amount: 8, next: 0.25, start: 0.5, wave: 2 },
          { lvl: 23, amount: 4, next: 1.25, start: 0, wave: 2 },
          { lvl: 22, amount: 2, next: 1.2, start: 1.5, wave: 2, last: true },
        ],
      },
      {
        enemies: [
          { lvl: 21, amount: 3, next: 1, start: 1.25, wave: 0 },
          { lvl: 18, amount: 3, next: 1.2, start: 1, wave: 0 },
          { lvl: 19, amount: 6, next: 0.25, start: 0, wave: 0 },
          { lvl: 25, amount: 2, next: 1.25, start: 1.5, wave: 0 },

          { lvl: 21, amount: 2, next: 1, start: 0.25, wave: 2 },
          { lvl: 23, amount: 4, next: 0.75, start: 0, wave: 2 },
          { lvl: 20, amount: 2, next: 2, start: 0.4, wave: 2 },
          { lvl: 22, amount: 2, next: 1.25, start: 1.5, wave: 2 },

          { lvl: 21, amount: 2, next: 1, start: 0.25, wave: 3 },
          { lvl: 20, amount: 4, next: 0.75, start: 0, wave: 3 },
          { lvl: 25, amount: 4, next: 0.5, start: 0.2, wave: 3 },
          { lvl: 23, amount: 4, next: 0.1, start: 1, wave: 3 },
          { lvl: 21, amount: 2, next: 2, start: 0.4, wave: 3 },
          { lvl: 25, amount: 2, next: 1.25, start: 1.5, wave: 3 },

          { lvl: 23, amount: 8, next: 0.75, start: 0.22, wave: 4 },
          { lvl: 24, amount: 4, next: 1, start: 0.6, wave: 4 },
          { lvl: 23, amount: 2, next: 1.5, start: 1, wave: 4 },
          { lvl: 26, amount: 1, next: 1.25, start: 2.5, wave: 4, last: true },
        ],
      },
    ],
    interactive: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 82, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    path: [
      {
        x: -118,
        y: 210,
      },
      {
        x: 286,
        y: 30,
      },
      {
        x: 482,
        y: 30,
      },
      {
        x: 610,
        y: 158,
      },
      {
        x: 626,
        y: 288,
      },
      {
        x: 536,
        y: 360,
      },
      {
        x: 288,
        y: 380,
      },
      {
        x: 126,
        y: 412,
      },
      {
        x: -4,
        y: 433,
      },
      {
        x: -142,
        y: 384,
      },
    ],
  },
  {
    health: 15,
    money: 50,
    background: '../assets/Levels/level3/level3.png',
    waves: [
      {
        enemies: [
          { lvl: 3, amount: 2, next: 1, start: 0, wave: 0 },
          { lvl: 30, amount: 1, next: 1.25, start: 1.5, wave: 0 },
        ],
      },
    ],
    interactive: [
      0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    path: [
      {
        x: -118,
        y: 117,
      },
      {
        x: 105,
        y: 124,
      },
      {
        x: 254,
        y: 362,
      },
      {
        x: 414,
        y: 364,
      },
      {
        x: 545,
        y: 152,
      },
      {
        x: 640,
        y: 188,
      },
      {
        x: 690,
        y: 296,
      },
      {
        x: 705,
        y: 415,
      },
      {
        x: 916,
        y: 416,
      },
    ],
  },
  {
    health: 15,
    money: 50,
    background: '../assets/Levels/level4/level4.png',
    waves: [
      {
        enemies: [
          { lvl: 3, amount: 2, next: 1, start: 0, wave: 0 },
          { lvl: 30, amount: 1, next: 1.25, start: 1.5, wave: 0 },
        ],
      },
    ],
    interactive: [
      0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    path: [
      {
        x: -172,
        y: -92,
      },
      {
        x: 251,
        y: 161,
      },
      {
        x: 400,
        y: 216,
      },
      {
        x: 420,
        y: 410,
      },
      {
        x: 398,
        y: 460,
      },
      {
        x: 150,
        y: 460,
      },
      {
        x: 28,
        y: 380,
      },
      {
        x: 28,
        y: 260,
      },

      {
        x: 366,
        y: 82,
      },
      {
        x: 450,
        y: 69,
      },
      {
        x: 591,
        y: 134,
      },
      {
        x: 823,
        y: 320,
      },
    ],
  },
]
