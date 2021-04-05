export default class Window {
    constructor(options) {
        this.window = document.createElement('div');
        
        this.width = options.width + "px";
        this.height = options.height + "px";
        this.posX = options.posX + "px";
        this.posY = options.posY + "px";

        this.window.style.boxSizing = 'border-box';
        this.window.style.position = 'absolute';
        this.window.style.border = "1px solid silver";
        this.window.style.width = this.width;
        this.window.style.height = this.height;
        this.window.style.top = this.posY;
        this.window.style.left = this.posX;
        this.window.style.userSelect = 'none';

        document.body.append(this.window);
    }

    setTitle(title) {
        this.title = document.createElement('div');

        this.title.style.backgroundColor = 'whitesmoke';
        this.title.style.color = 'darkgrey';
        this.title.style.padding = '.50rem';
        this.title.style.fontSize = '.75rem';
        this.title.style.cursor = 'default';

        this.title.id = 'title';
        this.title.classList.add('title');
        this.title.innerHTML = title;
        this.window.append(this.title);
    }

    setContent(element) {
        return this.window.appendChild(element);
    }
}