// (() => {
//     let root = document.querySelector('#root');

//     window.fetch('./header.html')
//         .then(res => res.text())
//         .then(data => {
//             root.innerHTML = data;
//         })
//         .catch(reason => console.log(reason));
// })();

async function loadContent(parent, contentPath) {
    try {
        const res = await fetch(contentPath);
        res.ok ? parent.innerHTML = await res.text() : parent.innerHTML = '<h1>I returned from Hell!</h1>';
    } catch (err) {
        console.log("Exception catched: " + err);
    }
}

let opts = [
    { component: document.querySelector('header'), url: './header.html'},   
    { component: document.querySelector('footer'), url: './footer.html'},   
    { component: document.querySelector('aside'), url: './aside.html'},   
    { component: document.querySelector('main'), url: './main.html'},   
]

opts.forEach(opt => loadContent(opt.component, opt.url));