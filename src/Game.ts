type PointAndRadius = {
  position: Point
  radius: number
}
class Game {
  // Game tile size
  protected readonly tileSize = 32
  readonly dimensions = { x: 24, y: 16 }
  readonly canvas: HTMLCanvasElement
  readonly c: CanvasRenderingContext2D

  // object with important data
  public gameData: Level[] = levels

  // Holds data about places that allows user to build turrets on
  public interactive: DataToConvert

  // HTML towers
  towers: NodeListOf<HTMLImageElement>
  singleTowerInfo: TowerInfo
  generalInfo: GeneralInfo

  // Game Background
  background: Sprite

  // detect if player is dragging turret or not
  isDragging: Boolean = false
  // detect if player is above place that allows to build tower
  canBuild: Boolean = false
  mousePosition: Point = { x: 0, y: 0 }

  // To implement, will hold tower to push if to build info
  activeTower: Tower | null = null

  // Arrays that will contains enemies and towers when on screen
  towersData: TowerDetail[] = towersData
  enemiesData: EnemyData[] = enemiesData
  towersArr: Tower[]
  enemiesArr: Enemy[]

  waveAboutEnd: Boolean = false

  constructor(public level: number = 0) {
    this.canvas = document.querySelector('canvas')!
    this.canvas.width = this.dimensions.x * this.tileSize
    this.canvas.height = this.dimensions.y * this.tileSize
    this.c = this.canvas.getContext('2d')!

    this.interactive = new ConvertData(
      this.dimensions,
      this.tileSize,
      this.tileSize * 3,
      this.gameData[this.level].interactive
    )

    this.towersArr = []
    this.enemiesArr = []

    // HTML ELEMENTS
    this.singleTowerInfo = new TowerInfo(
      this.towersNotInFocus.bind(this),
      this.deleteTower.bind(this),
      this.upgradeTower.bind(this),
      this.closeTowerInfo.bind(this)
    )

    this.generalInfo = new GeneralInfo(
      this.gameData,
      this.level,
      this.startRound.bind(this)
    )
    this.towers = document.querySelectorAll('.turret')!

    this.generalInfo.renderBasicHTML()

    this.background = new Sprite(
      this.canvas,
      this.c,
      '../assets/Levels/level1/level-1.png'
    )

    this.towers.forEach((tower, i) => {
      tower.addEventListener('dragstart', this.startDragging.bind(this, tower))
    })

    this.canvas.addEventListener('click', this.whatIsClicked.bind(this))
    this.canvas.addEventListener('dragenter', this.dragging.bind(this))
    this.canvas.addEventListener('dragover', this.updateMousePos.bind(this))
    this.canvas.addEventListener('dragleave', this.dropTurret.bind(this))
  }

  dragging() {
    this.isDragging = true
  }
  createWave(path: Point[], enemies: any) {
    enemies.enemies.forEach((enemy: any) => {
      const { amount, start, lvl, next, last, wave } = enemy
      setTimeout(() => {
        for (let i = 0; i < amount; i++) {
          setTimeout(() => {
            this.enemiesArr.push(this.selectEnemy(lvl, path))
            if (last) this.waveAboutEnd = true
          }, i * next * 1000)
        }
      }, start * 1000 + wave * 7500)
    })
  }

  startRound(waveNum: number, allWave: number) {
    const enemies = this.gameData[this.level].waves[waveNum]
    const path = this.gameData[this.level].path

    this.createWave(path, enemies)
    this.generalInfo.updateWave(1)
  }

  eliminatePlayer(a: Enemy) {
    this.enemiesArr = this.enemiesArr.filter((enemy) => enemy.id !== a.id)

    this.towersArr.forEach((tower: Tower) => {
      if (tower.target && tower.target.id === a.id) tower.target = null
    })
    this.generalInfo.closeEnemyInfo()
    this.generalInfo.updateMoney(a.reward, 'add')
  }

  enemyInBase(a: Enemy) {
    this.generalInfo.updateHealth(a.importance)
    this.enemiesArr = this.enemiesArr.filter((enemy) => enemy.id !== a.id)
    this.generalInfo.closeEnemyInfo()
    if (this.generalInfo.hearthAmount <= 0) console.log('game lost')
  }

  selectEnemy(lvl: number, path: Point[]): Enemy | never {
    if (path && (lvl || lvl === 0)) {
      return new Enemy(
        this.canvas,
        this.c,
        path,
        this.enemiesData[lvl],
        this.eliminatePlayer.bind(this),
        this.enemyInBase.bind(this)
      )
    }
    return this.createError('no lvl or path mesage')
  }

  isPointInSquare(a: Point, b: Square): Boolean {
    if (a.x < b.x + b.size && a.x > b.x && a.y < b.y + b.size && a.y > b.y) {
      return true
    }
    return false
  }

  checkCircleCollision(a: any, b: any) {
    let x = a.position.x - b.position.x
    let y = a.position.y - b.position.y
    let c = Math.hypot(x, y)

    if (c <= a.radius + b.radius) {
      return true
    }
    return false
  }

  createError(errMsg: string): never {
    throw new Error(errMsg)
  }

  towersNotInFocus(): void {
    this.towersArr.forEach((tower) => {
      if (tower.active) tower.active = false
    })
  }

  closeTowerInfo() {
    this.activeTower = null
    this.singleTowerInfo.close()
  }

  startDragging(tower: HTMLImageElement): void {
    this.activeTower = this.selectTower(tower.dataset.name!)
    this.isDragging = true
  }

  updateMousePos(e: DragEvent): void {
    const { x, y } = { x: e.offsetX, y: e.offsetY }
    this.mousePosition = { x, y }
  }

  drawIfCanBuild(): void {
    if (!this.isDragging && !this.activeTower) return
    // will count how many available slots for building
    let count = 0

    for (const pos of this.interactive.interactivePositions) {
      if (!this.isPointInSquare(this.mousePosition, pos)) {
        count++
        if (this.isDragging) this.drawInteractivePlace(pos)
      } else if (this.activeTower && this.activeTower.position !== pos) {
        this.canBuild = true
        this.activeTower.position = pos
      } else {
        this.canBuild = true
      }
    }

    if (this.canBuild && this.activeTower) {
      this.activeTower.drawRange()
    }

    // if tower is not above building place
    if (count === this.interactive.interactivePositions.length) {
      this.canBuild = false
    }
  }

  dropTurret(): void {
    if (
      this.canBuild &&
      this.activeTower &&
      this.generalInfo.money - this.activeTower.cost >= 0
    ) {
      this.generalInfo.updateMoney(this.activeTower.cost, 'substract')
      this.towersArr.push(this.activeTower)

      // if place is used then remove it from interactive positions
      this.interactive.interactivePositions =
        this.interactive.interactivePositions.filter(
          (pos) => pos !== this.activeTower?.position
        )

      this.singleTowerInfo.show(this.activeTower)
      this.canBuild = false
    } else if (
      this.activeTower &&
      this.canBuild &&
      this.generalInfo.money - this.activeTower.cost <= 0
    ) {
      this.generalInfo.toggleError(`Not enough money`, 3500)
    }
    this.isDragging = false
    this.mousePosition = { x: 0, y: 0 }
  }

  whatIsClicked(e: MouseEvent): void {
    this.generalInfo.closeEnemyInfo()
    const { x, y } = { x: e.offsetX, y: e.offsetY }
    let count = 0

    for (const tower of this.towersArr) {
      const { position: pos, size } = tower
      if (this.isPointInSquare({ x, y }, { x: pos.x, y: pos.y, size })) {
        this.activeTower = tower
        this.singleTowerInfo.show(this.activeTower)
      } else count++
    }

    for (const enemy of this.enemiesArr) {
      const { position: pos, size } = enemy
      if (this.isPointInSquare({ x, y }, { x: pos.x, y: pos.y, size })) {
        enemy.displayed = true
        this.generalInfo.displayEnemyInfo(enemy)
        continue
      }
      enemy.displayed = false
    }

    if (count === this.towersArr.length) {
      this.singleTowerInfo.close()
      this.activeTower = null
    }
  }

  deleteTower(): void {
    if (!this.activeTower) this.createError('Cant delete uncreated tower')

    this.interactive.interactivePositions.push({
      x: this.activeTower.position.x,
      y: this.activeTower.position.y,
      size: this.activeTower.size,
    })

    // Refactor, previous code bugging
    this.towersArr = this.towersArr.filter((tower: Tower) => {
      return tower && this.activeTower && tower.id !== this.activeTower.id
    })

    this.generalInfo.updateMoney(this.activeTower.sellFor, 'add')
    this.singleTowerInfo.sell(this.activeTower)
    this.activeTower = null
  }

  upgradeTower(i: number, type: string) {
    if (!this.activeTower) return
    let price
    let bonus
    if (type === 'as') {
      price = this.activeTower.upgrades.as[i].price
      bonus = this.activeTower.upgrades.as[i].bonus
    } else if (type === 'dmg') {
      price = this.activeTower.upgrades.dmg[i].price
      bonus = this.activeTower.upgrades.dmg[i].bonus
    } else if (type === 'range') {
      price = this.activeTower.upgrades.range[i].price
      bonus = this.activeTower.upgrades.range[i].bonus
    }
    if (!price || !bonus) return

    if (this.generalInfo.money - price < 0) {
      this.generalInfo.toggleError(
        `need ${Math.abs(this.generalInfo.money - price)}$`,
        2500
      )
      return
    }

    this.generalInfo.updateMoney(price, 'substract')
    this.activeTower.upgrade(price, bonus, i, type)

    this.singleTowerInfo.updateBonus(this.activeTower, type)
  }

  showTurretInfo(): void {
    this.singleTowerInfo.open()
  }

  selectTower(name: string): Tower {
    // otherwise turrets with same type will inherit upgrade stats one from another
    const fakeDeepCopy = (x: TowerDetail) => {
      return { ...JSON.parse(JSON.stringify(x)) }
    }

    const createTower = (
      num: number,
      attackOrder: string,
      multiAttack: string = 'none'
    ): Tower => {
      return new Tower(
        this.canvas,
        this.c,
        fakeDeepCopy(towersData[num]),
        attackOrder,
        multiAttack,
        this.checkCircleCollision,
        this.handleMultiAttack.bind(this),
        this.singleTowerInfo.updateTotalDmg.bind(this.singleTowerInfo)
      )
    }

    let tower: Tower
    switch (name) {
      case 'speed':
        tower = createTower(0, 'move_speed')
        break

      case 'burn':
        tower = createTower(1, 'move_speed')
        break

      case 'freeze':
        tower = createTower(2, 'highiest_hp')
        break

      case 'laser':
        tower = createTower(3, 'move_speed')
        break

      case 'thunder':
        tower = createTower(4, 'middle', 'bubble')
        break

      case 'bubble':
        tower = createTower(5, 'middle', 'rocket')
        break

      case 'rocket':
        tower = createTower(6, 'move_speed')
        break

      case 'metal':
        tower = createTower(7, 'move_speed')
        break
      default:
        this.createError(`Tower ${name} does not match any tower name`)
        break
    }

    return tower
  }

  drawInteractivePlace(pos: Square): void {
    this.c.fillStyle = `rgba(200,200,200,0.3)`
    this.c.fillRect(pos.x, pos.y, pos.size, pos.size)
  }

  selectMiddle(centerTowerPos: any, tower: Tower) {
    let avaliableEnemies: Enemy[] = []
    for (const enemy of this.enemiesArr) {
      if (this.checkCircleCollision(centerTowerPos, enemy)) {
        avaliableEnemies.push(enemy)
      }
    }

    tower.target = avaliableEnemies[Math.floor(avaliableEnemies.length / 2)]
  }

  selectBySpeed(centerTowerPos: any, tower: Tower) {
    for (const enemy of this.enemiesArr) {
      if (
        enemy.moveSpeed > 1 &&
        this.checkCircleCollision(centerTowerPos, enemy)
      ) {
        tower.target = enemy
        break
      }
    }
  }

  selectFirst(centerTowerPos: any, tower: Tower) {
    for (const enemy of this.enemiesArr) {
      if (this.checkCircleCollision(centerTowerPos, enemy)) {
        tower.target = enemy
        break
      }
    }
  }
  selectByHP(centerTowerPos: any, tower: Tower) {
    const enemiesInRange = []
    for (const enemy of this.enemiesArr) {
      if (this.checkCircleCollision(centerTowerPos, enemy)) {
        enemiesInRange.push(enemy)
      }
    }

    const highiesHP = enemiesInRange.sort((a, b) =>
      a.healthTotal > b.healthTotal ? -1 : 1
    )

    tower.target = highiesHP[0]
  }

  drawTowers() {
    this.towersArr.forEach((tower) => {
      // Tower have small offset so the shooting calculation had started a little to soon
      let centerTowerPos = {
        ...tower,
        position: {
          x: tower.position.x + tower.offset.x,
          y: tower.position.y + tower.offset.y,
        },
      }
      if (!tower.target) {
        switch (tower.attackOrder) {
          case 'middle':
            this.selectMiddle(centerTowerPos, tower)
            break

          case 'highiest_hp':
            this.selectByHP(centerTowerPos, tower)
            break

          case 'first':
            this.selectFirst(centerTowerPos, tower)
            break

          case 'move_speed':
            // if no player is faster than 1 then is returns null
            this.selectBySpeed(centerTowerPos, tower)
            if (!tower.target) {
              this.selectFirst(centerTowerPos, tower)
            }
            break
        }
      }
      if (
        tower.target &&
        !this.checkCircleCollision(centerTowerPos, tower.target)
      ) {
        tower.target.color = 'red'
        tower.target = null
        clearInterval(tower.isShooting)
        tower.isShooting = undefined
      }

      tower.update()
      tower.draw()
    })
  }
  drawEnemies() {
    this.enemiesArr.forEach((enemy) => {
      if (enemy.displayed) this.generalInfo.displayEnemyInfo(enemy)
      enemy.update()
      enemy.draw()
    })
  }

  handleMultiAttack(a: Enemy, b: Bullet, c: Tower) {
    const { id, position } = a
    const { multiAttack: name, explosionRadius: radius, dmg } = b

    if (name === 'rocket') this.explosion({ position, radius }, dmg, c, id)
    else if (name === 'bubble') this.bubble(position, id, dmg, c)
  }

  explosion(a: PointAndRadius, dmg: number, c: Tower, id: number) {
    this.enemiesArr.forEach((enemy) => {
      if (this.checkCircleCollision(enemy, a)) {
        if (enemy.id !== id) {
          if (enemy.health - dmg / 4 > 0) c.dmgDealt += dmg / 4
          else c.dmgDealt += enemy.health
          enemy.health -= dmg / 4
        }
        this.singleTowerInfo.updateTotalDmg(c)
      }
    })
  }

  bubble(position: Point, id: number, dmg: number, c: Tower) {
    const amount = 5

    const enemiesToFollowArray = this.enemiesArr.filter((enemy) => {
      return (
        enemy.position.x - 100 < position.x &&
        enemy.position.x + 100 > position.x &&
        enemy.position.y - 100 < position.y &&
        enemy.position.y + 100 > position.y &&
        enemy.id !== id
      )
    })

    enemiesToFollowArray.filter((enemy, i) => {
      if (i < amount) {
        c.bullets.push(
          new Bullet(
            c,
            position,
            enemy,
            this.canvas,
            this.c,
            c.bulletSrc,
            'none',
            this.checkCircleCollision,
            c.deleteBullet.bind(c),
            this.handleMultiAttack,
            dmg + i * (dmg / 4),
            this.singleTowerInfo.updateTotalDmg.bind(this.singleTowerInfo),
            c.totalDmgUpgrades,
            2
          )
        )
      }
    })
  }

  setUpNextRound() {
    if (this.generalInfo.waveCurrent === this.generalInfo.waveAll) {
      console.log(`Victory `)
    }
    this.waveAboutEnd = false
    this.generalInfo.startBtn.classList.remove('active')
  }

  animate(): void {
    requestAnimationFrame(this.animate.bind(this))
    this.background.draw()
    this.drawIfCanBuild()
    this.drawEnemies()
    this.drawTowers()

    if (this.waveAboutEnd) {
      if (this.enemiesArr.length === 0) this.setUpNextRound()
    }
  }
}
