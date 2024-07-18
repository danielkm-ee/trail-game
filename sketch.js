
const GRID_SIZE = 20

let ant;
let food;

let trail;

function keyPressed() {
  if (keyCode === 39) {
    ant.face = 1;
  } else if (keyCode === 40) {
    ant.face = 3;
  } else if (keyCode === 37) {
    ant.face = 2;
  } else if (keyCode === 38) {
    ant.face = 4;
  }
  ant.turn();

  if (ant.dir == ant.face) {
    ant.move();
  }

  ant.dir = ant.face;
  keyCode = 0
}

function mousePressed() {
  let xPos = mouseX - mouseX % (width / GRID_SIZE);
  let yPos = mouseY - mouseY % (height / GRID_SIZE);
  let mousePosition = createVector(xPos, yPos);
  trail.addPellet(mousePosition);
}

// main
function setup() {
  createCanvas(700, 700);
  ant = new Ant();
  trail = new Trail();
  frameRate(6);
}


function draw() {
  background("lightyellow");

  for (let x = 0; x < width; x += width / GRID_SIZE) {
    for (let y = 0; y < height; y += height / GRID_SIZE) {
      stroke(100);
      strokeWeight(1);
      line(x, 0, x , height);
      line(0, y, width, y);
    }
  }

  ant.bite();
  trail.display();

  ant.draw();

  trail.update();
}
