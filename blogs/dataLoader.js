


function main () {
    const urlParams = new URLSearchParams(location.search);

    fetch(`../blogs/${urlParams.get('blog')}.yaml`).then(data => data.text()).then(text => jsyaml.load(text)).then(yaml => render(yaml));
    function render (obj) {
        const title = document.getElementById('title');
        title.innerHTML = obj.title;
        // descDisp(obj);
        bodyDisp(obj);
    }
    function descDisp (obj) {
        const desc = document.getElementById('desc');
        let html = `Created on: ${obj.desc.created} &emsp; Last edited: ${obj.desc.edited} &emsp; By: ${obj.desc.by} `;
        desc.innerHTML = html;
    }
    function bodyDisp (obj) {
        const body = document.getElementById('body');
        let html = `<h2 class=" mb-4"></h2>`;
        for (let i=0; i<obj.body.length; i++) {
            html += `<p class=" fs-2 mb-4">${obj.body[i]}</p>`;
        }
        for (let j=0 ; j<obj.img.length; j++) {
            html += `<img class="img-fluid" src="${obj.img[j]}" alt="">`
        }
        body.innerHTML = html;
    }
}


window.onload = main;