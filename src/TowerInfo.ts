class TowerInfo {
  // list holders
  turretInfo: HTMLElement
  turretsDisplay: HTMLElement

  // Single Tower Elements
  image: HTMLImageElement
  sellBtn: Element
  name: HTMLElement
  closeInfoBtn: HTMLElement

  dmg: HTMLElement
  bonusDmg: HTMLElement
  as: HTMLElement
  bonusAs: HTMLElement
  range: HTMLElement
  bonusRange: HTMLElement

  constructor(
    public towersNotInFocus: () => void,
    public deleteTower: () => void
  ) {
    this.turretsDisplay = document.querySelector('.turrets-display')!
    this.turretInfo = document.querySelector('.turret-open')!

    this.image = document.querySelector('.general__image')!
    this.name = document.querySelector('.general__name')!
    this.sellBtn = document.getElementById('sellBtn')!
    this.closeInfoBtn = document.getElementById('close-turret')!
    this.dmg = document.querySelector('.turret-base-dmg')!
    this.bonusDmg = document.querySelector('.turret-bonus-dmg')!
    this.as = document.querySelector('.turret-base-as')!
    this.bonusAs = document.querySelector('.turret-bonus-as')!
    this.range = document.querySelector('.turret-base-range')!
    this.bonusRange = document.querySelector('.turret-bonus-range')!

    this.closeInfoBtn.addEventListener('click', this.deleteTower.bind(this))
    this.sellBtn.addEventListener('click', this.deleteTower.bind(this))
  }

  close() {
    this.turretsDisplay.classList.add('active')
    this.turretInfo.classList.remove('active')
    this.towersNotInFocus()
  }

  open() {
    this.turretsDisplay.classList.remove('active')
    this.turretInfo.classList.add('active')
  }

  sell(tower: Tower): void {
    if (!tower) return

    this.close()
  }

  show(tower: Tower): void {
    if (!tower) return
    this.towersNotInFocus()
    this.turretsDisplay.classList.remove('active')
    // To change later

    tower.active = true
    this.image.src = tower.imgSrc

    this.name.innerText = 'tower'
    this.sellBtn.textContent = `Sell for ${tower.sellFor}$`

    this.dmg.textContent = `${tower.dmg}`
    this.range.textContent = `${tower.range}`
    this.as.textContent = `${tower.attackSpeed}`

    this.turretInfo.classList.add('active')
  }
}
