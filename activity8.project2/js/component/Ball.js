class Ball {
    constructor(x, y, diameter) {
        this.element = document.createElement('div');

        this.x = x;
        this.y = y;
        this.diameter = diameter;

        this.element.id = 'ball';
        this.element.classList.add('arkanoid__ball');

        this.element.style.width = this.diameter + 'px';
        this.element.style.height = this.diameter + 'px';

        this.element.style.top = this.x + 'px';
        this.element.style.left = this.y + 'px';
    }
}

export { Ball };