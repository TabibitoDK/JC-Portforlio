function contentLoad () {
    fetch('data.yaml').then(data => data.text()).then(text => jsyaml.load(text)).then(yaml => render(yaml));
    function render (obj) {
        carousel(obj);
        project(obj);
        gif();
    }
    function carousel (obj) {
        const carouselElt = document.getElementById('carousel');
        let html = ``;
        let state = ``;
        for (let i=obj.Projects.length-1; i>=0; i--) {
            if (i==0) state = 'active';
            let project = obj.Projects[i];
            html += `
            <div class="carousel-item ${state}" data-bs-interval="10000">
                <div style="position: relative; width: 50vw ; height: 50vh; background-color:rgb(255, 255, 255); margin:auto; border-radius:2vw; border:0.1vh solid black">
                    <h1 style="margin-left:6% ; margin-top: 6%; font-size: 5vh; width: 35%;">${project.title}</h3>
                    <p style="margin-left:6% ; margin-top: 14%; font-size: 2.5vh; width: 80%;">${project.desc}<a href="${project.href}" class="btn stretched-link" style="text-align: right" >詳細</a>
                    </p>
                </div>
            </div>
            `
        }
        carouselElt.innerHTML = html;
    }
    function project (obj) {
        const projectDiv = document.getElementById('projectDiv');
        let html = ``;
        for (let i=obj.Projects.length-1; i>=0; i--) {
            let project = obj.Projects[i];
            html += `
            <div class="card col-4">
                <img src="${project.img}" class="card-img-top" alt="...">
                <img src="${project.gif}" class="card-img-top" alt="..." style="display:none ;">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.desc}</p>
                    <a href="${project.href}" class="btn stretched-link" id="${project.buttonID}">詳細</a>
                </div>
            </div>
            `
        }
        projectDiv.innerHTML = html;
    }
}

function gif () {
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



window.onload = function () {
    contentLoad();
}