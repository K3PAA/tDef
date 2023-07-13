"use strict";
class ConvertData {
    constructor(dimensions, tileSize, size = tileSize, data) {
        this.dimensions = dimensions;
        this.tileSize = tileSize;
        this.size = size;
        this.data = data;
        this.data2D = this.convertData2D(this.data);
        this.interactivePositions = this.findInteractive(this.data2D);
    }
    convertData2D(data) {
        let data2D = [];
        for (let i = 0; i < this.data.length; i += this.dimensions.x) {
            data2D.push(data.slice(i, i + this.dimensions.x));
        }
        return data2D;
    }
    findInteractive(data2D) {
        const arr = [];
        data2D.forEach((row, y) => {
            row.forEach((num, x) => {
                if (num !== 0) {
                    arr.push({
                        x: x * this.tileSize,
                        y: y * this.tileSize,
                        size: this.size,
                    });
                }
            });
        });
        return arr;
    }
}
