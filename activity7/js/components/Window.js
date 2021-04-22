export default class Window {
    constructor(parent, x, y, width, height) {
        this.elem = document.createElement("div");
        
        this.parent = parent;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.elem.classList.add("mediaplayer__window");

        this.elem.style.width = width + "px";
        this.elem.style.height = height + "px";
        this.elem.style.top = this.y + "px";
        this.elem.style.left = this.x + "px";

        this.parent.appendChild(this.elem);
    }

    setTitle = text => {
        this.title = document.createElement("div");

        this.title.classList.add("mediaplayer__title");
        
        this.title.innerHTML = text;
        this.elem.appendChild(this.title);
    };

    addComponent = (component) => {
        this.elem.appendChild(component.elem);
    }
}