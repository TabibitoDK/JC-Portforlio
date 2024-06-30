


function main () {
    const urlParams = new URLSearchParams(location.search);

    fetch(`../projects/${urlParams.get('project')}.yaml`).then(data => data.text()).then(text => jsyaml.load(text)).then(yaml => render(yaml));
    function render (obj) {
        const title = document.getElementById('title');
        title.innerHTML = obj.title;
        const desc = document.getElementById('desc');
        desc.innerHTML = obj.desc;
        const aboutP = document.getElementById('about-p');
        aboutP.innerHTML = obj.about.p;
        imgCarDisp (obj.about.img);
        // appDisp(obj.app);
        sourceDisp(obj.source);
    }
    function imgCarDisp (imgList) {
        if (imgList.length <=0) return;
        const imgCarousel = document.getElementById('imgCarousel');
        let html = `
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
        `;
        let active = 'active';
        for (let i=0; i<imgList.length; i++) {
            if (i !== 0) active = ``;
            html += `
            <div class="carousel-item ${active}" data-bs-interval="10000">
                <img src="${imgList[i]}" class="d-block w-100" alt="...">
            </div>
            `
        }
        html += `
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        `
        imgCarousel.innerHTML = html;
    }
    function appDisp (appList) {
        const appTabPane = document.getElementById('app-tab-pane');
        let html = ``
        for (let i=0; i<appList.length; i++) {
            html += `
            <h2></h2>
            <a class="fs-2" href="${appList[i].href}">${appList[i].desc}</a>
            `
        }
        appTabPane.innerHTML = html;
    }
    function sourceDisp (sourceList) {
        const sourceTabPane = document.getElementById('source-tab-pane');
        let html = ``
        for (let i=0; i<sourceList.length; i++) {
            html += `
            <h2></h2>
            <a class="fs-2" href="${sourceList[i].href}">${sourceList[i].desc}</a>
            `
        }
        sourceTabPane.innerHTML = html;
    }
}


window.onload = main;