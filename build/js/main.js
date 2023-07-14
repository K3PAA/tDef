"use strict";
const closeTurretBtn = document.getElementById('close-turret');
const turretInfo = document.querySelector('.turret-open');
const turretsDisplay = document.querySelector('.turrets-display');
const game = new Game();
game.background.image.onload = () => {
    game.animate();
};
closeTurretBtn === null || closeTurretBtn === void 0 ? void 0 : closeTurretBtn.addEventListener('click', () => {
    turretsDisplay.classList.add('active');
    turretInfo.classList.remove('active');
});
