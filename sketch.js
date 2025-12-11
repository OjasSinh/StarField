let stars = [];

function setup() {
    createCanvas(800, 600);

    for (let i = 0; i < 800; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(0);

    translate(width / 2, height / 2);

    for (let s of stars) {
        s.update();
        s.show();
    }
}
