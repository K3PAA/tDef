"use strict";
class Sprite {
    constructor(canvas, c, imgSrc) {
        this.canvas = canvas;
        this.c = c;
        this.imgSrc = imgSrc;
        this.image = new Image();
        this.image.src = this.imgSrc;
    }
    draw() {
        this.c.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.canvas.width, this.canvas.height);
    }
}
