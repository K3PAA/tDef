"use strict";
class Tower extends Sprite {
    constructor(canvas, c, cost, dmg, attackSpeed, range, position, src, offset = {
        x: (position.size - 64) / 2,
        y: (position.size - 64) / 2,
    }, active = true) {
        super(canvas, c, src, position);
        this.canvas = canvas;
        this.c = c;
        this.cost = cost;
        this.dmg = dmg;
        this.attackSpeed = attackSpeed;
        this.range = range;
        this.position = position;
        this.src = src;
        this.offset = offset;
        this.active = active;
    }
    update() {
        // this.c.fillStyle = 'rgba(22,22,22, 0.3)'
        // this.c.fillRect(
        //   // 64 will be image of tower width and height
        //   this.position.x + (this.position.size - 64) / 2,
        //   this.position.y + (this.position.size - 64) / 2,
        //   64,
        //   64
        // )
        if (this.active)
            this.drawRange();
    }
    drawRange() {
        this.c.beginPath();
        this.c.arc(this.position.x + this.position.size / 2, this.position.y + this.position.size / 2, this.range, 0, 2 * Math.PI);
        this.c.strokeStyle = 'blue';
        this.c.stroke();
    }
}
class SpeedTower extends Tower {
    constructor(canvas, c, cost, dmg, attackSpeed, range, position, src) {
        super(canvas, c, cost, dmg, attackSpeed, range, position, src);
    }
}
