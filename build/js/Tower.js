"use strict";
class Tower extends Sprite {
    constructor(canvas, c, cost, dmg, attackSpeed, range, position, src) {
        super(canvas, c, src, position);
        this.canvas = canvas;
        this.c = c;
        this.cost = cost;
        this.dmg = dmg;
        this.attackSpeed = attackSpeed;
        this.range = range;
        this.position = position;
        this.src = src;
        this.size = 96;
        this.offset = {
            x: (this.size - 64) / 2,
            y: (this.size - 64) / 2,
        };
        this.active = true;
        this.sellFor = Math.floor(this.cost * 0.7);
    }
    update() { }
    drawRange() {
        if (this.active) {
            this.c.beginPath();
            this.c.arc(this.position.x + this.size / 2, this.position.y + this.size / 2, this.range, 0, 2 * Math.PI);
            this.c.strokeStyle = 'blue';
            this.c.stroke();
        }
    }
}
class SpeedTower extends Tower {
    constructor(canvas, c, cost, dmg, attackSpeed, range, position, src) {
        super(canvas, c, cost, dmg, attackSpeed, range, position, src);
    }
}
