
const GRID_SIZE = 32;

const USE_LRM = true;  // use left, right, move, or nop || otherwise up,down,left,right
const TOROIDAL_CANVAS = true;

let ant;
let food;

let trail;

function mod(n, m) {
  // dirty little helper function to compute modulus of negative numbers like python
  return ((n % m) + m) % m;
}

function udlr_controls() {
  if (keyCode === 39) {
    ant.dir = 0; // right
  } else if (keyCode === 38) {
    ant.dir = 1; // up
  }else if (keyCode === 37) {
    ant.dir = 2; // left
  } else if (keyCode === 40) {
    ant.dir = 3; // down
  } 
  ant.move();
}

function lrm_controls() {
  if (keyCode === 74) { // j = turn left
    ant.dir = mod(ant.dir + 1, 4);
  } else if (keyCode === 75) { // k = turn right
    ant.dir = mod(ant.dir - 1, 4);
  } else if (keyCode === 70) { // f = move forward
    ant.move();
  } // else nop
}

function wrapCanvasEdges() {
  if (ant.hitsHorizontalStart()) {
    ant.body[0].x = width - width / GRID_SIZE;
  }
  if (ant.hitsHorizontalEnd()) {
    ant.body[0].x = 0;
  }
  if (ant.hitsVerticalStart()) {
    ant.body[0].y = height - height / GRID_SIZE;
  }
  if (ant.hitsVerticalEnd()) {
    ant.body[0].y = 0;
  }
}

function cutCanvasEdges() {
  if (ant.hitsHorizontalStart()) {
    ant.body[0].x = 0;
  }
  if (ant.hitsHorizontalEnd()) {
    ant.body[0].x = width - width / GRID_SIZE;
  }
  if (ant.hitsVerticalStart()) {
    ant.body[0].y = 0;
  }
  if (ant.hitsVerticalEnd()) {
    ant.body[0].y = height - height / GRID_SIZE;
  }
}

function keyPressed() {
  if (USE_LRM) {
    lrm_controls();
  } else {
    udlr_controls();
  }
    ant.turn();
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

  if (TOROIDAL_CANVAS) {
    wrapCanvasEdges();
  } else {
    cutCanvasEdges();
  }

  for (let x = 0; x < width; x += width / GRID_SIZE) {
    for (let y = 0; y < height; y += height / GRID_SIZE) {
      stroke(100);
      strokeWeight(1);
      line(x, 0, x , height);
      line(0, y, width, y);
    }
  }

  ant.draw();
  ant.bite();

  trail.update();
  trail.display();
}
