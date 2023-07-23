const menu: HTMLElement = document.querySelector('.menu')!
const game = document.querySelector('.game')!
let levelsUnlocked = 1

const gameButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll('.level__button')!

function startGame(lvl: number) {
  const game = new Game(lvl)
  game.background.image.onload = () => {
    game.animate()
  }
}
function selectLevel(button: HTMLButtonElement) {
  const lvl = Number(button.dataset.lvl)
  if (lvl <= levelsUnlocked) button.disabled = false

  menu.classList.add('offscreen')
  game.classList.add('active')

  startGame(lvl - 1)
}
gameButtons.forEach((button) => {
  button.addEventListener('click', () => selectLevel(button))
})
