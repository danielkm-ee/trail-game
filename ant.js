// trail running agent

class Ant {
    constructor() {
        this.body = [];
        this.body.push({x: 0, y: 0});
        this.dir = 0; // 0 = right, 1 = up, 2 = left, 3 = down
        this.txt = '⮞';
    }

    draw() { // draw the ant
        fill(0);
        for (let b of this.body) { 
            rect(b.x, b.y, width / GRID_SIZE, height / GRID_SIZE);
            fill(255);
            textSize(22);
            textAlign(CENTER, CENTER)
            text(this.txt, b.x + (width / GRID_SIZE) / 2, b.y + (height / GRID_SIZE) / 2);
        }
    }

    turn() { // update marker showing direction ant is facing
        if (this.dir == 0) {
            this.txt = '⮞';
        } else if (this.dir == 1) {
            this.txt = '⮝';
        } else if (this.dir == 2) {
            this.txt = '⮜';
        } else if (this.dir == 3) {
            this.txt = '⮟';
        } 
    }

    move() {
        if (this.dir == 0) {
            this.body[0].x += width / GRID_SIZE;
        } else if (this.dir == 1) {
            this.body[0].y -= height / GRID_SIZE;
        } else if (this.dir == 2) {
            this.body[0].x -= width / GRID_SIZE;
        } else if (this.dir == 3) {
            this.body[0].y += height / GRID_SIZE;
        }
    }

    bite() { // eat a pellet if on a pellet
        for (let pellet of trail.pellets) {
            if (this.body[0].x == pellet.position.x && this.body[0].y == pellet.position.y) {
                pellet.wasEaten = true;
            }
        }
    }
    
    hitsHorizontalStart() {
        if (this.body[0].x < 0) {
            return true;
        }
    }

    hitsHorizontalEnd() {
        if (this.body[0].x >= width) {
            return true;
        }
    }

    hitsVerticalStart() {
        if (this.body[0].y < 0) {
            return true;
        }
    }
    hitsVerticalEnd() {
        if (this.body[0].y >= height) {
            return true;
        }
    }

}
