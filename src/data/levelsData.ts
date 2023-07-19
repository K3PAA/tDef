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
        w1: {
          enemies: [
            { lvl: 0, amount: 1, next: 1, toWait: 0 },
            { lvl: 1, amount: 1, next: 1, toWait: 1 },
          ],
        },
        w2: {
          enemies: [
            { lvl: 0, amount: 3, next: 1, toWait: 5 },
            { lvl: 1, amount: 1, next: 1, toWait: 10 },
          ],
        },
        w3: {
          enemies: [
            { lvl: 0, amount: 2, next: 1, toWait: 13 },
            { lvl: 1, amount: 2, next: 1, toWait: 13.5 },
            { lvl: 1, amount: 1, next: 4, toWait: 15, last: true },
          ],
        },
      },
      {
        w1: {
          enemies: [
            { lvl: 0, amount: 5, next: 1, toWait: 0 },
            { lvl: 1, amount: 2, next: 1, toWait: 1 },
          ],
        },
        w2: {
          enemies: [{ lvl: 1, amount: 5, next: 1, toWait: 5 }],
        },
        w3: {
          enemies: [
            { lvl: 1, amount: 3, next: 1, toWait: 13 },
            { lvl: 2, amount: 1, next: 1, toWait: 16, last: true },
          ],
        },
      },
      {
        w1: {
          enemies: [
            { lvl: 0, amount: 5, next: 1, toWait: 0 },
            { lvl: 1, amount: 2, next: 1, toWait: 1 },
            { lvl: 2, amount: 2, next: 1.25, toWait: 1.25 },
          ],
        },
        w2: {
          enemies: [
            { lvl: 2, amount: 5, next: 1, toWait: 5 },
            { lvl: 3, amount: 2, next: 1.25, toWait: 7 },
          ],
        },
        w3: {
          enemies: [
            { lvl: 2, amount: 3, next: 1, toWait: 13 },
            { lvl: 4, amount: 1, next: 1.12, toWait: 16, last: true },
          ],
        },
      },
      {
        w1: {
          enemies: [
            { lvl: 2, amount: 5, next: 1, toWait: 0 },
            { lvl: 3, amount: 3, next: 1.2, toWait: 1 },
            { lvl: 3, amount: 3, next: 1.5, toWait: 2 },
            { lvl: 4, amount: 2, next: 1.3, toWait: 3 },
          ],
        },
        w2: {
          enemies: [{ lvl: 5, amount: 2, next: 1, toWait: 10 }],
        },
        w3: {
          enemies: [
            { lvl: 5, amount: 2, next: 1, toWait: 15 },
            { lvl: 6, amount: 2, next: 1, toWait: 18 },
            { lvl: 7, amount: 1, next: 1, toWait: 25, last: true },
          ],
        },
      },
      {
        w1: {
          enemies: [
            { lvl: 4, amount: 5, next: 1, toWait: 0 },
            { lvl: 6, amount: 3, next: 1.2, toWait: 1 },
            { lvl: 7, amount: 3, next: 1.5, toWait: 2 },
            { lvl: 8, amount: 2, next: 1.3, toWait: 3 },
          ],
        },
        w2: {
          enemies: [{ lvl: 4, amount: 5, next: 1, toWait: 10 }],
        },
        w3: {
          enemies: [
            { lvl: 8, amount: 2, next: 1.1, toWait: 15 },
            { lvl: 1, amount: 20, next: 0.25, toWait: 15 },
            { lvl: 2, amount: 10, next: 0.11, toWait: 18 },
            { lvl: 9, amount: 1, next: 0.1, toWait: 25, last: true },
          ],
        },
      },
      {},
      {},
      {},
      {},
      {},
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
        y: 326,
      },
      {
        x: 590,
        y: 320,
      },
      {
        x: 766,
        y: 110,
      },
      {
        x: 866,
        y: 110,
      },
    ],
  },
]
