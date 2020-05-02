import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';

const rows = 20;
const columns = 10;
let tetrisScore = 0;
let intervalId;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = generateNewShape(grid.cells);
document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
let movement = new Movement(shape, grid.cells);

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            console.log('left');
            break;
        case 'ArrowRight':
            movement.right();
            console.log('right');
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            console.log(getRandomInt(colors.length - 1));
            shape.color = colors[getRandomInt(colors.length - 1)];
            shape.draw();
            break;
    }
});


const animate = () => {
    if (movement.canMove) {
        movement.down(intervalId);
        console.log('Moving');
    } else {
        console.log('Stopped');
        clearInterval(intervalId);

        //Score
        let score = grid.score();
        if (score > 0) {
            tetrisScore += score;
            document.getElementById('score').innerText = tetrisScore;
            grid.draw();
        }
        shape = generateNewShape(grid.cells);
        document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 200);
    }
}

document.getElementById('startGame').addEventListener('click', () => {
    intervalId = setInterval(animate, 200);

    if(movement.canMove) {
        document.getElementById("startGame").disabled = true;
    } else  document.getElementById("startGame").disabled = false;
    
});





