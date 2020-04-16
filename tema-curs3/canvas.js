// -----------------  exercitiul-----------------   1

let c = document.getElementById("canvas1");
let ctx = c.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(10, 10, 150, 100);

//-----------------exercitiul 2 e in temma-curs2 ----------------- 

// ----------------- exercitiul 3 ----------------- 

const canvas = document.getElementById('circle1');
const ctx2 = canvas.getContext('2d');


class Circle  {
    constructor (x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 1;
        this.dy = 1;
    } 

    draw() {
        ctx2.beginPath();
        ctx2.arc (
            this.x ,
            this.y ,
            this.radius,
            0,
            2 * Math.PI 
        );
        ctx2.fillStyle = this.color;
        ctx2.fill();
        ctx2.stroke();
        ctx2.closePath();
        } 

    move(stepX) {
        this.changeDirectionIfExceededBounds();
        this.x += stepX * this.dx;
        
        if ( this.color === 'red') { 
            this.radius++
        } else if (this.color === "blue") {
            this.radius--;
        }     
        this.draw();
    }
    
    changeDirectionIfExceededBounds() {
        if (this.x >= canvas.width - this.radius) {
            this.dx = - 1;
            this.color = "blue";        
                      
        }
        
        if (this.x <= this.radius ) {
            this.dx = 1;
            this.color = "red";         
        }
        
    }
} 


const circle3 = new Circle(80, 70, 10, "red");

function animateCircle() {
    console.log("se apeleaza");
    ctx2.clearRect(0, 0, canvas.width, canvas.height); 
    circle3.move(10);
}

setInterval(animateCircle, 100)  //am dat o viteza mai mare de 0.5 sec



// ----------------- exercitiul 4 ----------------  




const canvas4 = document.getElementById('canvasId');
const context = canvas4.getContext("2d");

const rows = 20;
const columns = 10;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {                     
            grid[row][column] = new Cell(row, column);
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            grid[row][column].drawT();
        }
    }
}

createGrid();
drawGrid();

// ----------------- exercitiul 5  ----------------- 

class Sqare {
    constructor(columns, rows) {
        this.columns = columns * 20  - 20;
        this.rows = rows * 20 - 20;
    }

    drawSq() {
        context.beginPath();
        context.fillStyle = "red";
        context.rect(this.rows , this.columns , 40, 40);
        context.fill();
        context.stroke();
        context.closePath();
    }
}

const square = new Sqare(2,3);
square.drawSq();

const square2 = new Sqare(5,7);
square2.drawSq();