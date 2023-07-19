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
    this.startBtn = document.getElementById('start-round')!

    this.startBtn.addEventListener('click', () => {
      if (!this.startBtn.className.includes('active')) {
        this.startBtn.classList.add('active')
        startRound(this.waveCurrent, this.waveAll)
      }
    })
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
