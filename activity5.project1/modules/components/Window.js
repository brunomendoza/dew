export default class Window {
    constructor(options) {
        this.window = document.createElement('div');
        
        this.width = options.width;
        this.height = options.height;
        this.posX = options.posX;
        this.posY = options.posY;

        this.window.style.position = 'absolute';
        this.window.style.width = this.width;
        this.window.style.height = this.height;
        this.window.style.top = this.posY;
        this.window.style.left = this.posX;

        document.body.append(this.window);
    }

    setTitle(title) {
        this.title = title;
    }

    setContent(element) {
        return this.window.appendChild(element);
    }
}