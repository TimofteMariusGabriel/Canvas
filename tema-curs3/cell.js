class Cell {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    drawT() {
        for (var i = 0; i <= this.x; i++) {
            for (var j = 0; j <= this.y; j++) {
                context.beginPath();
                context.fillStyle = ["#eeeed2", "#630"][(i + j) % 2];
                context.fillRect(j * 20, i * 20, 20, 20);
                context.closePath();
            }
        }
    }
}

