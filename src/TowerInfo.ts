class TowerInfo {
  // list holders
  turretInfo: HTMLElement
  turretsDisplay: HTMLElement

  // Single Tower Elements
  image: HTMLImageElement
  sellBtn: Element
  name: HTMLElement
  closeInfoBtn: HTMLElement
  //  cant give other value than any
  list: any
  dmgListButtons: any
  asListButtons: any
  rangeListButtons: any

  dmg: HTMLElement
  bonusDmg: HTMLElement
  as: HTMLElement
  bonusAs: HTMLElement
  range: HTMLElement
  bonusRange: HTMLElement

  constructor(
    public towersNotInFocus: () => void,
    public deleteTower: () => void,
    public upgradeTower: (i: number, type: string) => void
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

    this.list = document.querySelectorAll('.upgrade-list')!
    this.dmgListButtons = null
    this.asListButtons = null
    this.rangeListButtons = null
    this.setupList()

    this.closeInfoBtn.addEventListener('click', this.deleteTower.bind(this))
    this.sellBtn.addEventListener('click', this.deleteTower.bind(this))
  }

  setupList() {
    this.list.forEach((el: HTMLUListElement) => {
      switch (el.dataset.type) {
        case 'dmg':
          this.dmgListButtons = el.querySelectorAll('button')

          this.dmgListButtons.forEach((btn: HTMLButtonElement, i: number) => {
            btn.addEventListener('click', () => {
              this.upgradeTower(i, 'dmg')
            })
          })
          break

        case 'as':
          this.asListButtons = el.querySelectorAll('button')

          this.asListButtons.forEach((btn: HTMLButtonElement, i: number) => {
            btn.addEventListener('click', () => {
              this.upgradeTower(i, 'as')
            })
          })

          break

        case 'range':
          this.rangeListButtons = el.querySelectorAll('button')

          this.rangeListButtons.forEach((btn: HTMLButtonElement, i: number) => {
            btn.addEventListener('click', () => {
              this.upgradeTower(i, 'range')
            })
          })
          break
      }
    })
  }

  displayButtons(tower: Tower, type: string) {
    if (type === 'all') {
      this.displaySpecificButtons(tower, 'as')
      this.displaySpecificButtons(tower, 'range')
      this.displaySpecificButtons(tower, 'dmg')
    } else if (type === 'as') {
      this.displaySpecificButtons(tower, 'as')
    } else if (type === 'range') {
      this.displaySpecificButtons(tower, 'range')
    } else if (type === 'dmg') {
      this.displaySpecificButtons(tower, 'dmg')
    } else {
      console.log('error')
    }
  }
  displaySpecificButtons(tower: Tower, type: string) {
    let list = null
    let towerType: any = null
    if (type === 'as') {
      list = this.asListButtons
      towerType = tower.upgrades.as
    } else if (type === 'range') {
      list = this.rangeListButtons
      towerType = tower.upgrades.range
    } else if (type === 'dmg') {
      list = this.dmgListButtons
      towerType = tower.upgrades.dmg
    }

    list.forEach((btn: HTMLButtonElement, i: any) => {
      if (btn.className.includes('bought')) btn.classList.remove('bought')
      btn.textContent = `+${towerType[i].bonus} -${towerType[i].price}$`
      if (towerType[i].bought) {
        btn.classList.add('bought')
        btn.disabled = true
      } else if (towerType[i].active) {
        btn.disabled = false
      } else {
        btn.disabled = true
      }
    })
  }

  updateDeletePrice(price: number): void {
    this.sellBtn.textContent = `Sell for ${price}$`
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

  updateBonus(tower: Tower, type: string) {
    this.displayButtons(tower, type)
    if (type === 'all') {
      this.bonusDmg.textContent = `${tower.bonusDmg}`
      this.bonusAs.textContent = `${tower.bonusAs}`
      this.bonusRange.textContent = `${tower.bonusRange}`
    } else if (type === 'dmg') this.bonusDmg.textContent = `${tower.bonusDmg}`
    else if (type === 'as') this.bonusAs.textContent = `${tower.bonusAs}`
    else if (type === 'range') {
      this.bonusRange.textContent = `${tower.bonusRange}`
    }
    this.updateDeletePrice(tower.sellFor)
  }

  show(tower: Tower): void {
    if (!tower) return

    this.updateBonus(tower, 'all')
    this.towersNotInFocus()
    this.turretsDisplay.classList.remove('active')
    // To change later

    tower.active = true
    if (tower.imgSrc) this.image.src = tower.imgSrc

    this.name.innerText = 'tower'
    this.sellBtn.textContent = `Sell for ${tower.sellFor}$`

    this.dmg.textContent = `${tower.basicDmg}`
    this.range.textContent = `${tower.basicRange}`
    this.as.textContent = `${tower.basicAs}`

    this.turretInfo.classList.add('active')
  }
}
