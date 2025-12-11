class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = random(-width, width); // This chooses a random horizontal position for the star.
        this.y = random(-height, height); // This chooses a random vertical position for the star.
        this.z = random(width);  // sets the depth of the star
        this.pz = this.z;
    }

    update() {
        this.z = this.z - 10;  // speed
        if (this.z < 1) {
            this.reset();
            this.pz = this.z;
        }
    }

    show() {
        fill(255);
        noStroke();

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        let r = map(this.z, 0, width, 16, 0);
        circle(sx, sy, r);

        // motion trail
        let px = map(this.x / this.pz, 0, 1, 0, width);
        let py = map(this.y / this.pz, 0, 1, 0, height);

        this.pz = this.z;

        stroke(255);
        line(px, py, sx, sy);
    }
}
