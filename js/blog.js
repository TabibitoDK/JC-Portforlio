
function rand (sth) {
    if (sth !== undefined) return Math.random() * sth;
    return Math.random() * window.innerWidth;
}


function setup () {
    frameRate(2);
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', -10);
    canvas.style('position', 'fixed' )
    stroke(255, 128, 0)
}

function draw () {
    background(255, 165, 0)
    for (let i=0 ; i<windowWidth ; i+=10) {
        for (let j=0 ; j<windowHeight ; j+=10) {
            rotate(1);
            fill(rand(255), rand(255), rand(255))
            r = rand(50);
            triangle(i, j-r, i-r, j+r, i+r, j+r);
        }
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}