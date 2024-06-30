function chart () {  
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        name:'My Current Skill level',
        data: {
            labels: ['HTML', 'CSS', 'Javascript', 'C#', 'C++', 'Python'],
            datasets: [{
                label: 'My Current Skill level',
                data: [4, 2, 5, 3, 3, 3],
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


function contentLoad () {
    fetch('data.yaml').then(data => data.text()).then(text => jsyaml.load(text)).then(yaml => render(yaml));
    function render (obj) {
        title(obj);
        blog(obj);
        project(obj);
        gif();
    }
    function title (obj) {
        const title01 = document.getElementById('title01');
        const title02 = document.getElementById('title02');
        const title03 = document.getElementById('title03');
        title01.innerHTML = `<mark>${obj.Title[0]}</mark>`;
        title02.innerHTML = `<mark>${obj.Title[1]}</mark>`;
        title03.innerHTML = `<mark>${obj.Title[2]}</mark>`;
    }
    function blog(obj) {
        const blogDiv = document.getElementById('blogDiv');
        let html = ``;
        for (let i=obj.Post.length-1; i>obj.Post.length-4; i--) {
            let blog = obj.Post[i];
            html += `
            <div class="shadow p-3 mb-5 bg-body rounded blog-post" style="margin:auto;position:relative;">
                <h2> ${blog.title}                 
                    <a href="${blog.href}" class="btn stretched-link" style="text-align: right" >詳細</a>
                </h2>
                <p style="text-align:right ;">${blog.date}</p>
                <p>${blog.desc}</p>
            </div>
            `
        }
        html += `<div style="position: relative ; text-align: end;"><a href="blog.html" class="fs-4" style="color:white ; text-decoration:none;">すべて</a></div>`
        blogDiv.innerHTML = html;
    }
    function project (obj) {
        const projectDiv = document.getElementById('projectDiv');
        let html = ``;
        for (let i=0; i<3; i++) {
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



function gif() {
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
    contentLoad();
    chart();
}

window.onload = main;