import { Grid } from "./grid.js";

export class Movement {
    constructor(key, shape, grid) {
        this.key = key;
        this.shape = shape;
        this.grid = grid;

    }

    move() {
        switch (this.key) {
            case 'ArrowUp':
                this.grid.draw();
                this.shape.moveUp();
                this.shape.draw();
                break;
            case 'ArrowDown':
                this.grid.draw();
                this.shape.moveDown();
                this.shape.draw();
                break;
            case 'ArrowLeft':
                this.grid.draw();
                this.shape.moveLeft();
                this.shape.draw();
                break;
            case 'ArrowRight':
                this.grid.draw();
                this.shape.moveRight();
                this.shape.draw();
                break;
            case "Enter" :
                this.grid.draw();
                this.shape.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
                this.shape.draw();
                break;    
        };
}
}
