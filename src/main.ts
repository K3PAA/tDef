const menu: HTMLElement = document.querySelector('.menu')!
const gameContainer: HTMLElement = document.querySelector('.game')!

let levelsUnlocked = 1
const game = new Game()

const gameButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll('.level__button')!

function createGame(lvl: number) {
  game.endOfGame = false
  if (game.level !== lvl) {
    game.level = lvl
    game.setUpNewLvl()
  }

  game.anim = window.requestAnimationFrame(game.animate.bind(game))
}
function selectLevel(button: HTMLButtonElement) {
  const lvl = Number(button.dataset.lvl)
  if (lvl <= levelsUnlocked) button.disabled = false

  menu.classList.add('offscreen')
  gameContainer.classList.add('active')

  createGame(lvl - 1)
}
gameButtons.forEach((button) => {
  button.addEventListener('click', () => selectLevel(button))
})
