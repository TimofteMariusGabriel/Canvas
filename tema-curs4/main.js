import { Grid } from './grid.js';
import { Shape } from './Shape.js';
import { Movement } from './movement.js'

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

//TODO - why 0.
const lShape = new Shape (0, 2, grid.cells, 'orange', [[1, 0], [1, 0], [1, 1]]);
lShape.draw();

const oShape = new Shape (4, 2, grid.cells, 'yellow', [[1, 1], [1, 1]]);
oShape.draw();

const iShape = new Shape(7, 2, grid.cells, '#493af0', [[1, 0], [1, 0], [1, 0]]);
iShape.draw();

const jShape = new Shape(0, 6, grid.cells, '#c932b5', [[0, 1], [0, 1], [1, 1]]);
jShape.draw();

const sShape = new Shape(4, 6, grid.cells,'red', [[0, 1, 1], [1, 1, 0]]);
sShape.draw();

const zShape = new Shape(7, 6, grid.cells, 'green', [[1, 1, 0], [0, 1, 1]]);
zShape.draw();

const tShape = new Shape(11, 6, grid.cells, '#70145f', [[1, 1, 1], [0, 1, 0]]);
tShape.draw();


document.addEventListener("keydown", event => {
        const movement = new Movement(event.key, lShape, grid);
        movement.move()    
    }
);

// setInterval(() => {
//     grid.draw();
//     lShape.moveDown();
//     lShape.draw();
// }, 500);
