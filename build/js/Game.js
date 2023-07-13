"use strict";
class Game {
    constructor(level = 0) {
        this.level = level;
        // Game tile size
        this.tileSize = 32;
        this.dimensions = { x: 24, y: 16 };
        // object with important data
        this.gameData = levels;
        // detect if player is dragging turret or not
        this.isDragging = false;
        // detect if player is above place that allows to build tower
        this.canBuild = false;
        this.mousePosition = { x: 0, y: 0 };
        // To implement, will hold tower to push if to build info
        this.activeTower = null;
        this.canvas = document.querySelector('canvas');
        this.canvas.width = this.dimensions.x * this.tileSize;
        this.canvas.height = this.dimensions.y * this.tileSize;
        this.c = this.canvas.getContext('2d');
        this.interactive = new ConvertData(this.dimensions, this.tileSize, this.tileSize * 3, this.gameData[this.level].interactive);
        this.towers = document.querySelectorAll('.turret');
        this.background = new Sprite(this.canvas, this.c, '../assets/Levels/level1/level-1.png');
        this.towersArr = [];
        this.enemiesArr = [];
        this.towers.forEach((tower) => {
            tower.addEventListener('dragstart', this.startDragging.bind(this));
        });
        // add debounce to this function
        this.canvas.addEventListener('dragover', this.updateMousePos.bind(this));
        this.canvas.addEventListener('dragleave', this.dropTurret.bind(this));
    }
    isPointInSquare(a, b) {
        if (a.x < b.x + b.size && a.x > b.x && a.y < b.y + b.size && a.y > b.y) {
            return true;
        }
        return false;
    }
    startDragging() {
        this.isDragging = true;
    }
    dropTurret() {
        if (this.canBuild) {
            this.canBuild = false;
            this.activeTower = null;
        }
        this.isDragging = false;
        this.mousePosition = { x: 0, y: 0 };
    }
    updateMousePos(e) {
        const { x, y } = { x: e.offsetX, y: e.offsetY };
        this.mousePosition = { x, y };
    }
    drawIfCanBuild() {
        if (!this.isDragging)
            return;
        // will count how many available slots for building
        let count = 0;
        let buildingPositions = this.interactive.interactivePositions;
        buildingPositions.forEach((pos) => {
            if (!this.isPointInSquare(this.mousePosition, pos)) {
                count++;
                this.drawInteractivePlace(pos);
            }
            else if (!this.activeTower) {
                this.activeTower = `Tower cordinaters x: ${pos.x} y: ${pos.y}`;
            }
        });
        // If all building spots aren't taken then enable building a tower
        if (count !== buildingPositions.length && !this.canBuild) {
            this.canBuild = true;
        }
        else if (count === buildingPositions.length && this.canBuild) {
            if (this.activeTower)
                this.activeTower = null;
            this.canBuild = false;
        }
    }
    drawInteractivePlace(pos) {
        this.c.fillStyle = `rgba(200,200,200,0.3)`;
        this.c.fillRect(pos.x, pos.y, pos.size, pos.size);
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.background.draw();
        this.drawIfCanBuild();
    }
}
const game = new Game();
game.background.image.onload = () => {
    game.animate();
};
