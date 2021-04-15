class Vaus {
    constructor(x, y, width, height) {
        this.element = document.createElement('div')
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.element.id = 'vaus';
        this.element.class = 'arkanoid__vaus';
    }
}

export { Vaus }