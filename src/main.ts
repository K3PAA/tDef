const closeTurretBtn = document.getElementById('close-turret')

const game = new Game()
game.background.image.onload = () => {
  game.animate()
}

console.log(game)
