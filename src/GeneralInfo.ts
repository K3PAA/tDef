class GeneralInfo {
  hearthDisplay: HTMLElement
  moneyDisplay: HTMLElement
  waveCurrentDisplay: HTMLElement
  wavesAllDisplay: HTMLElement
  startBtn: HTMLElement
  errorDisplay: HTMLElement

  // Game Data
  hearthAmount: number
  money: number
  waveCurrent: number
  waveAll: number
  errorInterval: number | undefined = undefined

  enemyInfo: HTMLElement
  enemyHP: HTMLElement
  enemySpeed: HTMLElement
  enemyImportance: HTMLElement
  enemyReward: HTMLElement
  enemyImg: HTMLImageElement
  turretContianer: NodeListOf<HTMLElement>

  constructor(
    public gameData: Level[],
    public level: number,
    public startRound: (x: number, y: number) => void
  ) {
    // General Game HTML and Values
    this.hearthDisplay = document.getElementById('game-heart')!
    this.hearthAmount = this.gameData[this.level].health

    this.moneyDisplay = document.getElementById('game-money')!
    this.money = this.gameData[this.level].money

    this.waveCurrentDisplay = document.getElementById('game-wave-current')!
    this.waveCurrent = 0

    this.wavesAllDisplay = document.getElementById('game-wave-all')!
    this.waveAll = this.gameData[this.level].waves.length

    this.errorDisplay = document.querySelector('.error-info')!
    this.turretContianer = document.querySelectorAll('.turret-conatiner')
    this.startBtn = document.getElementById('start-round')!

    this.enemyInfo = document.querySelector('.enemy-info')!
    this.enemyHP = document.querySelector('.enemyHP')!
    this.enemySpeed = document.querySelector('.enemySpeed')!
    this.enemyImportance = document.querySelector('.enemyImporance')!
    this.enemyReward = document.querySelector('.enemyReward')!
    this.enemyImg = document.querySelector('.enemyImg')!

    this.turretContianer.forEach((container, i) => {
      container.addEventListener('mouseenter', () =>
        this.showTurretInfo(container, i)
      )
      container.addEventListener('mouseleave', () =>
        this.closeTurretInfo(container)
      )
    })

    this.startBtn.addEventListener('click', () => {
      if (!this.startBtn.className.includes('active')) {
        this.startBtn.classList.add('active')
        startRound(this.waveCurrent, this.waveAll)
      }
    })
  }

  closeTurretInfo(container: HTMLElement) {
    const div = container.querySelector('.turret-container-js')
    if (div) container.removeChild(div)
  }

  selectOverview(i: number) {
    if (i === 0) {
      return `fast attack speed, low dmg`
    } else if (i === 1) {
      return `Strong at start, expensive upgrades`
    } else if (i === 2) {
      return `High range, mid dmg, slow attack`
    } else if (i === 3) {
      return `Laser attack, high dmg`
    } else if (i === 4) {
      return `Attack up to 5 enemies (bounced bullets have bonus dmg), mid dmg`
    } else if (i === 5) {
      return `Attack group of enemies (enemies around get 1/4 of dmg), mid dmg`
    } else if (i === 6) {
      return `Slow Attack, High Dmg`
    } else if (i === 7) {
      return `fast attack speed, mid dmg`
    }
  }
  showTurretInfo(container: HTMLElement, i: number) {
    let overview = this.selectOverview(i)
    const div = document.createElement('div')
    div.classList.add('turret-container-js')
    const p = document.createElement('p')
    p.textContent = `${overview}`
    div.appendChild(p)
    container.appendChild(div)
  }

  displayEnemyInfo(enemy: Enemy) {
    if (!this.enemyInfo.className.includes('active')) {
      this.enemyInfo.classList.add('active')
    }
    this.enemyImg.src = enemy.src
    this.enemyHP.innerText = `${Math.floor(enemy.health)} / ${
      enemy.healthTotal
    }`
    this.enemySpeed.innerText = `${enemy.moveSpeed}`
    this.enemyImportance.innerText = `-${enemy.importance}`
    this.enemyReward.innerText = `+${enemy.reward}`
  }

  closeEnemyInfo() {
    if (this.enemyInfo.className.includes('active')) {
      this.enemyInfo.classList.remove('active')
    }
  }

  toggleError(text: string, duration: number) {
    let time = duration / 6
    let count = 0
    this.errorDisplay.innerText = text

    if (!this.errorInterval) {
      this.errorInterval = setInterval(() => {
        this.errorDisplay.classList.toggle('active')
        count++
        if (count * time === duration) {
          if (this.errorDisplay.className.includes('active')) {
            this.errorDisplay.classList.remove('active')
          }
          clearInterval(this.errorInterval)
          this.errorInterval = undefined
        }
      }, time)
    }
  }

  renderBasicHTML() {
    this.updateHealth()
    this.updateMoney()
    this.updateWave()
    this.updateWaveAmount()
  }

  updateHealth(val: number = 0, type: 'add' | 'substract' = 'substract') {
    if (type === 'add') this.hearthAmount += val
    if (type === 'substract') this.hearthAmount -= val
    this.hearthDisplay.textContent = `${this.hearthAmount}`
  }

  updateMoney(val: number = 0, type: 'add' | 'substract' = 'add') {
    if (type === 'add') this.money += val
    if (type === 'substract') this.money -= val
    this.moneyDisplay.textContent = `${this.money}`
  }

  updateWave(val: number = 0) {
    this.waveCurrent += val
    this.waveCurrentDisplay.textContent = `${this.waveCurrent}`
  }

  updateWaveAmount(val: number = 0) {
    if (val) this.waveAll = val
    this.wavesAllDisplay.textContent = `${this.waveAll}`
  }
}
