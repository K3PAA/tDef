"use strict";
class Game {
    constructor(level = 0) {
        this.level = level;
        this.tileSize = 32;
        this.dimensions = { x: 24, y: 16 };
        // object with important data
        this.gameData = levels;
        this.canvas = document.querySelector('canvas');
        this.canvas.width = this.dimensions.x * this.tileSize;
        this.canvas.height = this.dimensions.y * this.tileSize;
        this.c = this.canvas.getContext('2d');
        this.interactive = new ConvertData(this.dimensions, this.tileSize, this.gameData[this.level].interactive);
        this.towers = document.querySelectorAll('.turret');
        this.background = new Sprite(this.canvas, this.c, '../assets/Levels/level1/level-1.png');
        this.towersArr = [];
        this.enemiesArr = [];
        this.towers.forEach((tower) => {
            tower.addEventListener('dragstart', this.startDragging.bind(this));
        });
    }
    startDragging() {
        console.log('pick up tower');
        this.drawInteractivePlaces();
    }
    drawInteractivePlaces() {
        this.interactive.interactivePositions.forEach((pos) => {
            this.c.fillStyle = `rgba(200,200,200,0.3)`;
            this.c.fillRect(pos.x, pos.y, this.tileSize * 3, this.tileSize * 3);
        });
        console.log(this.interactive.interactivePositions);
    }
    endDragging() {
        console.log('placing tower');
    }
}
const game = new Game();
game.background.image.onload = () => {
    game.background.draw();
};
