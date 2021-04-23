// (() => {
//     let root = document.querySelector('#root');

//     window.fetch('./header.html')
//         .then(res => res.text())
//         .then(data => {
//             root.innerHTML = data;
//         })
//         .catch(reason => console.log(reason));
// })();

async function loadContent(parent, url) {
    try {
        const res = await fetch(url);
        res.ok ? parent.innerHTML = await res.text() : parent.innerHTML = '<h1>I returned from Hell!</h1>';

        if (parent.tagName === "HEADER") {
            const anchors = parent.querySelectorAll(".navbar__link"); // Esta instrucción solo puede ejecutarse una vez que se haya cargado el contenido de la respuesta. (indeterminado);
            anchors.forEach(a => {
                if (/about\.html$/.test(window.location)) {
                    if (a.getAttribute("href") === "./about.html") {
                        a.classList.add("navbar__link--active");
                        a.setAttribute("href", "#");
                    } else {
                        a.classList.remove("navbar__link--active");
                    }
                } else if (/contact.html$/.test(window.location)) {
                    if (a.getAttribute("href") === "./contact.html") {
                        a.classList.add("navbar__link--active");
                        a.setAttribute("href", "#");
                    } else {
                        a.classList.remove("navbar_link--active");
                    }
                } else {
                    if (a.getAttribute("href") === "./index.html") {
                        a.classList.add("navbar__link--active");
                        a.setAttribute("href", "#");
                    } else {
                        a.classList.remove("navbar__link--active");
                    }
                }
            });
        }
    } catch (err) {
        console.log("Exception catched: " + err);
    }
}

let opts = [
    { component: document.querySelector('header'), url: './header.html' },   
    { component: document.querySelector('footer'), url: './footer.html' },   
    { component: document.querySelector('aside'), url: './aside.html' },   
]

opts.forEach(opt => loadContent(opt.component, opt.url));