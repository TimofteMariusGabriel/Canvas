export class NewCellRightDisplay {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = document.getElementById('nextShapeCanvas');
        this.context = this.canvas.getContext("2d");
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.y * this.height, this.x * this.width, this.width, this.height);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
    create() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column] = new Cell(row, column, '#7facf5');
            }
        }
    }
}