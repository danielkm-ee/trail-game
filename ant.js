// trail running agent

class Ant {
    constructor() {
        this.body = [];
        this.body.push({x: 0, y: 0});
        this.face = 0; // no face
        this.dir = 1; // 1 = right, 2 = left, 3 = down, 4 = up
        this.txt = '⮞';
    }

    draw() {
        fill(0);
        for (let b of this.body) { 
            rect(b.x, b.y, width / GRID_SIZE, height / GRID_SIZE);
            fill(255);
            textSize(22);
            textAlign(CENTER, CENTER)
            text(this.txt, b.x + (width / GRID_SIZE) / 2, b.y + (height / GRID_SIZE) / 2);
        }
    }

    turn() {
        if (this.face == 1) {
            this.txt = '⮞';
        } else if (this.face == 2) {
            this.txt = '⮜';
        } else if (this.face == 3) {
            this.txt = '⮟';
        } else if (this.face == 4) {
                this.txt = '⮝';
        }
    }

    move() {
        if (this.dir == 1) {
            this.body[0].x += width / GRID_SIZE;
        } else if (this.dir == 2) {
            this.body[0].x -= width / GRID_SIZE;
        } else if (this.dir == 3) {
            this.body[0].y += height / GRID_SIZE;
        } else if (this.dir == 4) {
            this.body[0].y -= height / GRID_SIZE;
        }
        this.dir = 0;
    }

    bite() {
        for (let pellet of trail.pellets) {
            if (this.body[0].x == pellet.position.x && this.body[0].y == pellet.position.y) {
                pellet.wasEaten = true;
            }
        }
    }

    eatsFood() {
        if (this.body[0].x == food.x && this.body[0].y == food.y) {
            return true;
        }
    }
}
