"use strict";
class Sprite {
    constructor(canvas, c, imgSrc, position = { x: 0, y: 0 }, offset = { x: 0, y: 0 }) {
        this.canvas = canvas;
        this.c = c;
        this.imgSrc = imgSrc;
        this.position = position;
        this.offset = offset;
        this.image = new Image();
        this.image.src = this.imgSrc;
    }
    draw() {
        this.c.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.position.x + this.offset.x, this.position.y + this.offset.y, this.image.width, this.image.height);
    }
}
