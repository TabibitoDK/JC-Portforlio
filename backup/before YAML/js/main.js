function chart () {  
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        name:'My Current Skill level',
        data: {
            labels: ['HTML', 'CSS', 'Javascript', 'C#', 'C++', 'Python'],
            datasets: [{
                label: 'My Current Skill level',
                data: [0.5, 0.5, 1, 1, 0.5, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    display: true,
                    text: 'Level',
                    beginAtZero: true,
                    steps: 5,
                    stepValue: 2,
                    max: 5,
                }
            }
        }
    });

}

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
    background(0, 255, 0)
    for (let i=-100 ; i<windowWidth + 100 ; i+=100) {
        for (let j=0 ; j<windowHeight ; j+=100) {
            stroke(0, 128, 0)
            point(i, j);
            strokeWeight(rand(100));
            stroke(255, 128, 0)
            point(i, j);
            strokeWeight(rand(100));
            stroke(255, 0, 128)
            point(i, j);
            strokeWeight(rand(90));
            stroke(0, 0, 255)
            point(i, j);
            strokeWeight(rand(100));
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function main () {
    chart();
    let bioDictBtn = document.getElementById('bio-dict-button');
    let canvasBtn = document.getElementById('canvas-button');
    let portfolioBtn = document.getElementById('portfolio-button');
    let btns = [];
    btns.push(bioDictBtn, canvasBtn, portfolioBtn);

    btns.forEach(element => {
        element.onpointerenter = function () {
            this.parentElement.parentElement.children[0].style.display = 'none';
            this.parentElement.parentElement.children[1].style.display = 'flex';
        }
        element.onpointerout = function () {
            this.parentElement.parentElement.children[0].style.display = 'flex';
            this.parentElement.parentElement.children[1].style.display = 'none';
        }
    });
}

window.onload = main;