
class Pellet {
    constructor(position) {
        this.position = position.copy();
        this.wasEaten = false;
    }

    draw() {
        fill("darkred");
        rect(this.position.x, this.position.y, width/GRID_SIZE, height/GRID_SIZE);
    }
}

class Trail {
    constructor() {
        this.pellets = [];
    }

    addPellet(position) {
        this.pellets.push(new Pellet(position));
    }

    update() {
        for (let i = this.pellets.length - 1; i >= 0 ; i -= 1) {
            if (this.pellets[i].wasEaten) {
                fill("darkgreen")
                text("+1", this.pellets[i].position.x, this.pellets[i].position.y)
                this.pellets.splice(i, 1);
            }
        }
    }

    display() {
        for (let pellet of this.pellets) {
            pellet.draw();
        }
    }
}


