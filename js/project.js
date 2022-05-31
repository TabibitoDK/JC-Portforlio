
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
    background(255, 48, 151)
    for (let i=-100 ; i<windowWidth + 100 ; i+=100) {
        for (let j=0 ; j<windowHeight ; j+=100) {
            fill(rand(255), rand(255), rand(255))
            r = rand(50);
            square(i-r, j-r, r*2);
            fill(rand(255), rand(255), rand(255))
            r = rand(50);
            square(i-r, j-r, r*2);
            fill(rand(255), rand(255), rand(255))
            r = rand(50);
            square(i-r, j-r, r*2);
            fill(rand(255), rand(255), rand(255))
            r = rand(50);
            square(i-r, j-r, r*2);
            fill(rand(255), rand(255), rand(255))
            r = rand(50);
            square(i-r, j-r, r*2);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
