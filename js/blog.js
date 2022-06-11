
function contentLoad () {
    fetch('data.yaml').then(data => data.text()).then(text => jsyaml.load(text)).then(yaml => render(yaml));
    function render (obj) {
        blog(obj);
    }
    function blog(obj) {
        const blogDiv = document.getElementById('blogDiv');
        let html = ``;
        for (let i=obj.Post.length-1; i>=0; i--) {
            let blog = obj.Post[i];
            html += `
            <div class="shadow p-3 mb-5 bg-body rounded blog-post" style="margin:auto;position:relative;">
                <h2> ${blog.title}                 
                    <a href="${blog.href}" class="btn stretched-link" style="text-align: right" >More Info</a>
                </h2>
                <p style="text-align:right ;">${blog.date}</p>
                <p>${blog.desc}</p>
            </div>
            `
        }
        html += `<div style="position: relative ; text-align: end;"><a href="blog.html" class="fs-4" style="color:white ; text-decoration:none;">view all</a></div>`
        blogDiv.innerHTML = html;
    }
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

window.onload = function () {
    contentLoad();
}