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
        // hold image data attribute that have tower name
        this.activeTowerName = null;
        this.canvas = document.querySelector('canvas');
        this.canvas.width = this.dimensions.x * this.tileSize;
        this.canvas.height = this.dimensions.y * this.tileSize;
        this.c = this.canvas.getContext('2d');
        this.interactive = new ConvertData(this.dimensions, this.tileSize, this.tileSize * 3, this.gameData[this.level].interactive);
        // HTML ELEMENTS
        this.towers = document.querySelectorAll('.turret');
        this.generalImage = document.querySelector('.general__image');
        this.delTowerBtn = document.querySelector('.sellBtn');
        this.towerNameHTML = document.querySelector('.general__name');
        this.turretInfo = document.querySelector('.turret-open');
        this.turretsDisplay = document.querySelector('.turrets-display');
        this.closeTurretInfoBtn = document.getElementById('close-turret');
        this.background = new Sprite(this.canvas, this.c, '../assets/Levels/level1/level-1.png');
        this.towersArr = [];
        this.enemiesArr = [];
        this.towers.forEach((tower, i) => {
            tower.addEventListener('dragstart', this.startDragging.bind(this, tower));
        });
        this.closeTurretInfoBtn.addEventListener('click', this.closeTurretInfo.bind(this));
        this.canvas.addEventListener('click', this.checkPosition.bind(this));
        this.canvas.addEventListener('dragover', this.updateMousePos.bind(this));
        this.canvas.addEventListener('dragleave', this.dropTurret.bind(this));
    }
    closeTurretInfo() {
        this.turretInfo.classList.remove('active');
        this.turretsDisplay.classList.add('active');
        this.towersNotInFocus();
    }
    showTurretInfo() {
        this.turretInfo.classList.add('active');
        this.turretsDisplay.classList.remove('active');
    }
    checkPosition(e) {
        // check if not clicked on building, if no then :
        this.closeTurretInfo();
    }
    isPointInSquare(a, b) {
        if (a.x < b.x + b.size && a.x > b.x && a.y < b.y + b.size && a.y > b.y) {
            return true;
        }
        return false;
    }
    startDragging(tower) {
        const towerName = tower.dataset.name;
        this.activeTowerName = towerName;
        this.isDragging = true;
    }
    towersNotInFocus() {
        this.towersArr.forEach((tower) => {
            if (tower.active)
                tower.active = false;
        });
    }
    dropTurret() {
        if (this.canBuild && this.activeTower) {
            this.towersNotInFocus();
            this.towersArr.push(this.activeTower);
            // if place is used then remove it from interactive positions
            this.interactive.interactivePositions =
                this.interactive.interactivePositions.filter((pos) => {
                    var _a;
                    return pos !== ((_a = this.activeTower) === null || _a === void 0 ? void 0 : _a.position);
                });
            this.showActiveTowerHTML(this.activeTower);
            this.canBuild = false;
            this.activeTower = null;
            console.log(this.towersArr);
        }
        this.isDragging = false;
        this.mousePosition = { x: 0, y: 0 };
        this.activeTowerName = null;
    }
    updateMousePos(e) {
        const { x, y } = { x: e.offsetX, y: e.offsetY };
        this.mousePosition = { x, y };
    }
    createError(errMsg) {
        throw new Error(errMsg);
    }
    selectTower(pos) {
        switch (this.activeTowerName) {
            case 'speed':
                return new SpeedTower(this.canvas, this.c, 100, 20, 50, 100, pos, '../assets/Turret/turret1.png');
                break;
            case 'burn':
                return new Tower(this.canvas, this.c, 100, 20, 50, 120, pos, '../assets/Turret/turret2.png');
                break;
            case 'freeze':
                return new Tower(this.canvas, this.c, 100, 20, 50, 300, pos, '../assets/Turret/turret3.png');
                break;
            case 'laser':
                return new Tower(this.canvas, this.c, 100, 20, 50, 120, pos, '../assets/Turret/turret4.png');
                break;
            case 'thunder':
                return new Tower(this.canvas, this.c, 100, 20, 50, 140, pos, '../assets/Turret/turret5.png');
                break;
            case 'bubble':
                return new Tower(this.canvas, this.c, 100, 20, 50, 160, pos, '../assets/Turret/turret6.png');
                break;
            case 'rocket':
                return new Tower(this.canvas, this.c, 100, 20, 50, 180, pos, '../assets/Turret/turret7.png');
                break;
            case 'metal':
                return new Tower(this.canvas, this.c, 100, 20, 50, 200, pos, '../assets/Turret/turret8.png');
                break;
            default:
                this.createError(`Provided tower name: ${this.activeTowerName} does not match any tower name`);
                break;
        }
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
                this.activeTower = this.selectTower(pos);
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
    drawTowers() {
        this.towersArr.forEach((tower) => {
            tower.draw();
        });
    }
    showActiveTowerHTML(tower) {
        this.turretsDisplay.classList.remove('active');
        // To change later
        this.generalImage.src = '../assets/Turret/turret1.png';
        this.towerNameHTML.innerText = 'Scooby Doo';
        this.turretInfo.classList.add('active');
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.background.draw();
        this.drawIfCanBuild();
        this.drawTowers();
    }
}
