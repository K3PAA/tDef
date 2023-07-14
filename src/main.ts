const closeTurretBtn = document.getElementById('close-turret')
const turretInfo = document.querySelector('.turret-open')!
const turretsDisplay = document.querySelector('.turrets-display')!

const game = new Game()
game.background.image.onload = () => {
  game.animate()
}

closeTurretBtn?.addEventListener('click', () => {
  turretsDisplay.classList.add('active')
  turretInfo.classList.remove('active')
})
